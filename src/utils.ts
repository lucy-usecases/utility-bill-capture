import { ChipVariant, eventDispatcher, Filters, generateUUID, hasValue, Sort } from 'uxp/components';
import { Bill, BillStatus, BillSystemFields } from './services';

// ── Events ──
export const BillCreatedEvent = 'EBR:BillCreated';
export const BillUpdatedEvent = 'EBR:BillUpdated';

export const triggerBillCreatedEvent = (id: string) => eventDispatcher(generateUUID(), BillCreatedEvent, { id });
export const triggerBillUpdatedEvent = (id: string) => eventDispatcher(generateUUID(), BillUpdatedEvent, { id });

// ── List params ──
type ServiceParams = Record<string, any>;

export const buildListParams = (
    page: number,
    pageSize: number,
    query?: string,
    filters?: Filters,
    sort?: Sort
): ServiceParams => {
    const params: ServiceParams = {
        max: pageSize,
        last: (page - 1) * pageSize,
    };

    if (hasValue(query)) params.q = query;

    if (filters?.filters) {
        Object.entries(filters.filters).forEach(([key, value]) => {
            if (!hasValue(value)) return;
            params[key] = value;
        });
    }

    const sortEntry = Object.entries(sort || {}).find(([_, v]) => v !== 0);
    if (sortEntry) {
        const [field, order] = sortEntry;
        params.__sort__ = field;
        params.__sortorder__ = order === 1 ? 'asc' : 'desc';
    }

    return params;
};

// ── Status ──
export const isInFlight = (status: BillStatus) => status === 'Pending' || status === 'Processing';

export const getStatusVariant = (status: BillStatus): ChipVariant => {
    switch (status) {
        case 'Done':
            return 'success';
        case 'Error':
            return 'danger';
        case 'Processing':
            return 'info';
        default:
            return 'secondary';
    }
};

export const getStatusIcon = (status: BillStatus): string => {
    switch (status) {
        case 'Done':
            return 'fas circle-check';
        case 'Error':
            return 'fas circle-exclamation';
        case 'Processing':
            return 'fas spinner-third';
        default:
            return 'fas clock';
    }
};

// ── Display helpers ──
export const getBillName = (bill: Bill): string => {
    if (hasValue(bill?.fileName)) return bill.fileName;
    // fall back to the last segment of the stored path (without any query string)
    const lastSegment = (bill?.filePath || '').split('?')[0].split('/').filter(Boolean).pop();
    return lastSegment || bill?.id || '';
};

export const getFileIcon = (bill: Bill): string => {
    const name = getBillName(bill).toLowerCase();
    if (name.endsWith('.pdf')) return 'fal file-pdf';
    if (/\.(png|jpe?g|gif|bmp|tiff?|webp)$/.test(name)) return 'fal file-image';
    return 'fal file-invoice';
};

/** Extracted fields of a bill — nested `fields` wins, otherwise every non-system property */
export const getExtractedFields = (bill: Bill): Record<string, any> => {
    if (!bill) return {};
    if (bill.fields && typeof bill.fields === 'object') return bill.fields;

    const fields: Record<string, any> = {};
    Object.entries(bill).forEach(([key, value]) => {
        if (BillSystemFields.includes(key)) return;
        fields[key] = value;
    });
    return fields;
};

/** 'totalAmount' / 'total_amount' → 'Total Amount' */
export const toFieldLabel = (key: string): string =>
    key
        .replace(/[_-]+/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .replace(/\s+/g, ' ')
        .trim()
        .replace(/\b\w/g, (c) => c.toUpperCase());

export const formatFieldValue = (value: any): string => {
    if (!hasValue(value) || value === '') return '-';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
};

export const formatDateTime = (value: string): string => {
    if (!hasValue(value)) return '-';
    const date = new Date(value);
    if (isNaN(date.getTime())) return value;
    return date.toLocaleString();
};
