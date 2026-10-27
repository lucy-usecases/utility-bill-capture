import React, { FunctionComponent, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
    Chip,
    executeConfig,
    generateUUID,
    hasValue,
    Icon,
    ObjectDetailsPanel,
    ObjectInfoCard,
    ToolbarItem,
    useAlert,
    useCounter,
    useExecuteRequest,
    useMultiEventSubscriber,
    useRouterContext,
    useSearchParams,
    useUXPContext,
} from 'uxp/components';
import { Bill, BillServices, getFileUrl } from '../../services';
import { BillFieldsForm } from '../../forms/bill-fields-form/BillFieldsForm';
import {
    BillUpdatedEvent,
    formatDateTime,
    formatFieldValue,
    getBillName,
    getExtractedFields,
    getStatusIcon,
    getStatusVariant,
    isInFlight,
    toFieldLabel,
    triggerBillUpdatedEvent,
} from '../../utils';
import './BillDetails.scss';

// How often to re-check a bill that is still being extracted
const PollInterval = 10000;

interface BillDetailsProps {
    billId: string;
    onClose?: () => void;
}

interface SearchParams {
    edit?: string;
}

export const BillStatusChip: FunctionComponent<{ bill: Bill }> = ({ bill }) => {
    const uxpContext = useUXPContext();
    if (!bill?.status) return null;
    return (
        <Chip
            icon={getStatusIcon(bill.status)}
            label={uxpContext.$L(`ebr.status.${bill.status.toLowerCase()}`)}
            variant={getStatusVariant(bill.status)}
            size="small"
        />
    );
};

const BillDetailsBase: FunctionComponent<BillDetailsProps> = ({ billId, onClose }) => {
    const uxpContext = useUXPContext();
    const alerts = useAlert();
    const { edit } = useSearchParams<SearchParams>();
    const { navigate, generateURL } = useRouterContext();
    const instanceId = useMemo(() => generateUUID(), []);
    const { counter, updateCounter } = useCounter();

    const [bill, setBill] = useState<Bill | null>(null);

    // master list of extracted fields — drives both the details view and the edit form
    const { data: fieldNames = [] } = useExecuteRequest<string[]>(BillServices.fieldNames());
    const lastStatusRef = useRef<string>(null);

    useMultiEventSubscriber(instanceId, {
        events: [BillUpdatedEvent],
        sharedCallback: (payload) => {
            if (payload?.id === billId) updateCounter();
        },
    });

    const getDetails = useCallback(async (): Promise<Bill | null> => {
        if (!hasValue(billId)) return null;
        const { data, error } = await executeConfig<Bill>(uxpContext, BillServices.details(billId));
        if (error || !data) {
            alerts.error(uxpContext.$L('ebr.message.load-details-failed'));
            return null;
        }

        // extraction finished while we were watching — let the list pick up the new status
        if (lastStatusRef.current && isInFlight(lastStatusRef.current as Bill['status']) && !isInFlight(data.status)) {
            triggerBillUpdatedEvent(billId);
        }
        lastStatusRef.current = data.status;
        setBill(data);
        return data;
    }, [billId, counter]);

    // keep polling while the bill is still pending / processing
    useEffect(() => {
        if (!bill || bill.id !== billId || !isInFlight(bill.status)) return;
        const timer = setTimeout(updateCounter, PollInterval);
        return () => clearTimeout(timer);
    }, [bill, billId]);

    // reset when switching to another bill
    useEffect(() => {
        lastStatusRef.current = null;
        setBill(null);
    }, [billId]);

    const download = useCallback((item: Bill) => {
        const url = getFileUrl(uxpContext, item?.filePath);
        if (!url) {
            alerts.error(uxpContext.$L('ebr.message.no-file'));
            return;
        }
        window.open(url, '_blank', 'noopener');
    }, []);

    const toolbarItems = useCallback(
        (item: Bill) => ({
            left: [
                {
                    icon: 'fal download',
                    label: uxpContext.$L('ebr.action.download'),
                    visible: () => hasValue(item?.filePath),
                    onClick: () => download(item),
                },
                {
                    icon: 'fal pencil',
                    label: uxpContext.$L('ebr.action.edit'),
                    visible: () => item?.status === 'Done',
                    onClick: () => navigate(generateURL({ searchParams: { edit: '1' } })),
                },
            ] as ToolbarItem[],
            right: [] as ToolbarItem[],
        }),
        [download]
    );

    const renderExtractedFields = useCallback((item: Bill, loading?: boolean) => {
        if (!loading && item && item.status !== 'Done') {
            const isError = item.status === 'Error';
            return (
                <div className="ebr_billdetails__empty">
                    <Icon icon={isError ? 'fal circle-exclamation' : 'fal hourglass-half'} size="2x" />
                    <div className="ebr_billdetails__empty-title">
                        {uxpContext.$L(isError ? 'ebr.details.extraction-failed' : 'ebr.details.extraction-pending')}
                    </div>
                    {isError && hasValue(item.error) && <div className="ebr_billdetails__empty-text">{item.error}</div>}
                </div>
            );
        }

        const fields = Object.entries(getExtractedFields(item, fieldNames)).map(([key, value]) => ({
            label: toFieldLabel(key),
            value: formatFieldValue(value),
        }));

        if (!loading && fields.length === 0) {
            return (
                <div className="ebr_billdetails__empty">
                    <Icon icon="fal file-circle-question" size="2x" />
                    <div className="ebr_billdetails__empty-title">{uxpContext.$L('ebr.details.no-fields')}</div>
                </div>
            );
        }

        return <ObjectInfoCard fields={fields} columns={2} loading={loading} />;
    }, [fieldNames]);

    const renderUploadInfo = useCallback(
        (item: Bill, loading?: boolean) => (
            <ObjectInfoCard
                columns={1}
                loading={loading}
                fields={[
                    { label: uxpContext.$L('ebr.field.file-name'), value: getBillName(item) },
                    {
                        label: uxpContext.$L('ebr.field.status'),
                        value: item?.status,
                        renderValue: () => <BillStatusChip bill={item} />,
                    },
                    { label: uxpContext.$L('ebr.field.uploaded-at'), value: formatDateTime(item?.uploadedAt) },
                    { label: uxpContext.$L('ebr.field.uploaded-by'), value: item?.uploadedBy || '-' },
                    { label: uxpContext.$L('ebr.field.id'), value: item?.id },
                    ...(hasValue(item?.error) ? [{ label: uxpContext.$L('ebr.field.error'), value: item.error }] : []),
                ]}
            />
        ),
        []
    );

    const closeForm = useCallback(() => {
        navigate(generateURL({ removeParams: ['edit'] }));
    }, []);

    return (
        <div className="ebr_billdetails__container">
            <ObjectDetailsPanel
                data={getDetails}
                objectType="ebr-bill"
                objectKey={billId}
                title={{
                    title: (item: Bill) => getBillName(item),
                    subtitle: (item: Bill) =>
                        item?.uploadedAt
                            ? uxpContext.$L('ebr.details.uploaded-on', { date: formatDateTime(item.uploadedAt) })
                            : null,
                    status: (item: Bill, loading?: boolean) => (loading ? null : <BillStatusChip bill={item} />),
                }}
                tabs={[
                    {
                        id: 'fields',
                        label: uxpContext.$L('ebr.details.tab-fields'),
                        icon: 'fal list-check',
                        toolbarItems,
                        details: renderExtractedFields,
                    },
                    {
                        id: 'upload',
                        label: uxpContext.$L('ebr.details.tab-upload'),
                        icon: 'fal file-arrow-up',
                        toolbarItems,
                        details: renderUploadInfo,
                    },
                ]}
                showCloseButton={!!onClose}
                onClose={onClose}
            />

            <BillFieldsForm
                isOpen={edit === '1'}
                bill={bill}
                fieldNames={fieldNames}
                onClose={closeForm}
                afterSave={(id) => {
                    closeForm();
                    triggerBillUpdatedEvent(id);
                }}
            />
        </div>
    );
};

export const BillDetails = memo(BillDetailsBase);
