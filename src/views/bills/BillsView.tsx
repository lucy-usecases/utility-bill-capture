import React, { FunctionComponent, memo, useCallback, useEffect, useMemo, useRef } from 'react';
import {
    BaseAction,
    ButtonComponent,
    CustomDetailsPanelProps,
    DefaultActionColumnsConfig,
    executeConfig,
    FilterConfig,
    Filters,
    hasValue,
    Icon,
    IContextProvider,
    ObjectSearchComponent,
    ObjectSearchComponentHandlers,
    OSCColumn,
    RowData,
    Sort,
    useMultiEventSubscriber,
    useRouterContext,
    useSearchParams,
    useToast,
    useUXPContext,
    View,
    ViewsConfig,
} from 'uxp/components';
import { Bill, BillServices, BillStatuses, getFileUrl, uploadBillFile } from '../../services';
import { BillDetails, BillStatusChip } from '../../components/bill-details/BillDetails';
import { UploadBillDialog } from '../../forms/upload-bill/UploadBillDialog';
import {
    BillCreatedEvent,
    BillUpdatedEvent,
    buildListParams,
    formatDateTime,
    getBillName,
    getFileIcon,
    isInFlight,
    triggerBillCreatedEvent,
} from '../../utils';
import './BillsView.scss';

// How often to refresh the list while any visible bill is still being extracted
const RefreshInterval = 15000;

interface SearchParams {
    upload?: string;
}

// The Upload action returns the new bill id — as a string, an object or a one-item array
const getNewBillId = (data: any): string => {
    if (typeof data === 'string' || typeof data === 'number') return String(data);
    const row = Array.isArray(data) ? data[0] : data;
    return (row?._id || row?.id) ?? '';
};

const BillsViewBase: FunctionComponent = () => {
    const uxpContext: IContextProvider = useUXPContext();
    const toast = useToast();
    const { upload } = useSearchParams<SearchParams>();
    const { navigate, generateURL } = useRouterContext();

    const objectSearchRef = useRef<ObjectSearchComponentHandlers>(null);
    const hasInFlightRef = useRef(false);
    const filterPanelOpenRef = useRef(false);

    const instanceId = 'ebr_bills';

    useMultiEventSubscriber(instanceId, {
        events: [BillCreatedEvent, BillUpdatedEvent],
        sharedCallback: () => objectSearchRef.current?.refreshCurrentPage?.(),
    });

    // pick up status changes (Pending → Processing → Done / Error) without a manual refresh
    useEffect(() => {
        const timer = setInterval(() => {
            if (hasInFlightRef.current && !filterPanelOpenRef.current) {
                objectSearchRef.current?.refreshCurrentPage?.();
            }
        }, RefreshInterval);
        return () => clearInterval(timer);
    }, []);

    const getAll = useCallback(
        async (page: number, pageSize: number, query?: string, filters?: Filters, sort?: Sort): Promise<{ items: RowData[] }> => {
            const params = buildListParams(page, pageSize, query, filters, sort);
            const { data, error } = await executeConfig<Bill[]>(uxpContext, BillServices.list(params));
            if (error) {
                toast.error(uxpContext.$L('ebr.message.load-failed'));
                return { items: [] };
            }
            const items = data ?? [];
            hasInFlightRef.current = items.some((b) => isInFlight(b.status));
            return { items };
        },
        []
    );

    // ── Upload (runs in the background so the user can keep working) ──
    const startUpload = useCallback(async (file: File) => {
        toast.info(uxpContext.$L('ebr.message.uploading', { name: file.name }));

        const { data: url, error: uploadError } = await uploadBillFile(uxpContext, file);
        if (uploadError || !hasValue(url)) {
            toast.error(uxpContext.$L('ebr.message.upload-failed', { name: file.name }));
            return;
        }

        const { data, error } = await executeConfig(uxpContext, BillServices.upload(url));
        if (error) {
            toast.error(uxpContext.$L('ebr.message.upload-failed', { name: file.name }));
            return;
        }

        toast.success(uxpContext.$L('ebr.message.uploaded', { name: file.name }));
        triggerBillCreatedEvent(getNewBillId(data));
    }, []);

    const download = useCallback((bill: Bill) => {
        const url = getFileUrl(uxpContext, bill?.filePath);
        if (!url) {
            toast.error(uxpContext.$L('ebr.message.no-file'));
            return;
        }
        window.open(url, '_blank', 'noopener');
    }, []);

    const renderName = useCallback(
        (bill: Bill) => (
            <div className="ebr_billsview__name" title={getBillName(bill)}>
                <Icon icon={getFileIcon(bill)} className="ebr_billsview__name-icon" />
                <span className="ebr_billsview__name-text">{getBillName(bill)}</span>
            </div>
        ),
        []
    );

    const columns = useMemo(
        (): OSCColumn[] => [
            {
                id: 'fileName',
                label: uxpContext.$L('ebr.field.file-name'),
                isResizable: true,
                renderColumn: (item) => renderName(item as Bill),
                formatter: (_value, row) => getBillName(row as Bill),
            },
            {
                id: 'status',
                label: uxpContext.$L('ebr.field.status'),
                isSortable: true,
                isResizable: true,
                renderColumn: (item) => <BillStatusChip bill={item as Bill} />,
            },
            {
                id: 'uploadedAt',
                label: uxpContext.$L('ebr.field.uploaded-at'),
                isSortable: true,
                isResizable: true,
                renderColumn: (item: Bill) => formatDateTime(item.uploadedAt),
                formatter: (value) => formatDateTime(value),
            },
            {
                id: 'uploadedBy',
                label: uxpContext.$L('ebr.field.uploaded-by'),
                isResizable: true,
            },
        ],
        [renderName]
    );

    const actionButtons = useMemo(
        () => (
            <ButtonComponent
                title={uxpContext.$L('ebr.action.upload-bill')}
                leftIcon="fal cloud-arrow-up"
                variant="primary"
                onClick={() => navigate(generateURL({ searchParams: { upload: '1' } }))}
            />
        ),
        []
    );

    const filterConfiguration: FilterConfig = useMemo(
        () => ({
            formFields: [
                {
                    title: '',
                    columns: 1,
                    fields: [
                        {
                            name: 'status',
                            label: uxpContext.$L('ebr.field.status'),
                            type: 'select',
                            options: [
                                { label: uxpContext.$L('ebr.filter.all'), value: '' },
                                ...BillStatuses.map((s) => ({
                                    label: uxpContext.$L(`ebr.status.${s.toLowerCase()}`),
                                    value: s,
                                })),
                            ],
                        },
                    ],
                },
            ],
        }),
        []
    );

    const viewsConfig: ViewsConfig = useMemo(() => {
        const allView: View = {
            id: 'all-bills',
            name: uxpContext.$L('ebr.view.all'),
            group: uxpContext.$L('ebr.view.group'),
            configurations: { filters: { filters: {} }, sort: { uploadedAt: -1 } },
        };
        const statusViews: View[] = BillStatuses.map((s) => ({
            id: `${s.toLowerCase()}-bills`,
            name: uxpContext.$L(`ebr.view.${s.toLowerCase()}`),
            group: uxpContext.$L('ebr.view.group'),
            configurations: { filters: { filters: { status: s } }, sort: { uploadedAt: -1 } },
        }));

        return {
            listId: 'ebr-bill-search',
            defaultViews: [allView, ...statusViews],
            allowToMangeCustomViews: true,
            defaultviewId: 'all-bills',
        };
    }, []);

    const defaultActionColumns: DefaultActionColumnsConfig = useMemo(
        () => ({
            actionsColumn: {
                enable: true,
                headerActions: {
                    sort: true,
                    multiColumnSort: false,
                    customiseColumns: true,
                },
                rowActions: (item: Bill) => {
                    const actions: BaseAction[] = [];

                    if (hasValue(item.filePath)) {
                        actions.push({
                            icon: 'fal download',
                            label: uxpContext.$L('ebr.action.download'),
                            onClick: async () => download(item),
                        });
                    }

                    if (item.status === 'Done') {
                        actions.push({
                            icon: 'fal pencil',
                            label: uxpContext.$L('ebr.action.edit'),
                            onClick: async () =>
                                navigate(generateURL({ searchParams: { objectKey: item.id, edit: '1' } })),
                        });
                    }

                    return actions;
                },
            },
        }),
        [download]
    );

    const detailsPanel: CustomDetailsPanelProps = useMemo(
        () => ({
            columns: [
                {
                    id: 'details',
                    label: uxpContext.$L('ebr.field.bill'),
                    renderColumn: (item: Bill) => (
                        <div className="ebr_billsview__collapsed">
                            {renderName(item)}
                            <div className="ebr_billsview__collapsed-meta">
                                <BillStatusChip bill={item} />
                                <span className="ebr_billsview__collapsed-date">{formatDateTime(item.uploadedAt)}</span>
                            </div>
                        </div>
                    ),
                },
            ],
            renderDetails: (itemId: string, onClose: () => void) => <BillDetails billId={itemId} onClose={onClose} />,
        }),
        [renderName]
    );

    const search = useMemo(() => ({ enable: true }), []);

    const closeUpload = useCallback(() => {
        navigate(generateURL({ removeParams: ['upload'] }));
    }, []);

    return (
        <div className="ebr_billsview__container">
            <ObjectSearchComponent
                ref={objectSearchRef}
                title={uxpContext.$L('ebr.text.title')}
                data={getAll}
                idField="id"
                columns={columns}
                pageSize={50}
                total={0}
                actionButtons={actionButtons}
                filters={filterConfiguration}
                views={viewsConfig}
                defaultActionColumns={defaultActionColumns}
                search={search}
                detailsPanel={detailsPanel}
                collapsedWidth={'25rem'}
                appendToURL={true}
                clearParamsOnSelect={['edit']}
                noItemsMessage={uxpContext.$L('ebr.text.no-bills')}
                onFilterPanelToggle={(isOpen) => (filterPanelOpenRef.current = isOpen)}
            />

            <UploadBillDialog isOpen={upload === '1'} onClose={closeUpload} onUpload={startUpload} />
        </div>
    );
};

export const BillsView = memo(BillsViewBase);
