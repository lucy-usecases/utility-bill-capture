import { ChipVariant, eventDispatcher, Filters, generateUUID, hasValue } from 'uxp/components';
import { Bill, BillStatus, BillSystemFields } from './services';

// ── Events ──
export const BillCreatedEvent = 'EBR:BillCreated';
export const BillUpdatedEvent = 'EBR:BillUpdated';

export const triggerBillCreatedEvent = (id: string) => eventDispatcher(generateUUID(), BillCreatedEvent, { id });
export const triggerBillUpdatedEvent = (id: string) => eventDispatcher(generateUUID(), BillUpdatedEvent, { id });

// ── List query ──
const escapeRegExp = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

/** Collection query for the `bills` collection from the search box + filter panel values */
export const buildListFilter = (query?: string, filters?: Filters): Record<string, any> => {
    const filter: Record<string, any> = {};

    if (filters?.filters) {
        Object.entries(filters.filters).forEach(([key, value]) => {
            if (!hasValue(value)) return;
            filter[key] = value;
        });
    }

    if (hasValue(query)) filter.fileName = { $regex: escapeRegExp(query), $options: 'i' };

    return filter;
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

/** Raw extracted values of a bill — nested `fields` wins, otherwise every non-system property */
const getRawFields = (bill: Bill): Record<string, any> => {
    if (!bill) return {};
    if (bill.fields && typeof bill.fields === 'object') return bill.fields;

    const fields: Record<string, any> = {};
    Object.entries(bill).forEach(([key, value]) => {
        if (BillSystemFields.includes(key)) return;
        fields[key] = value;
    });
    return fields;
};

/** Value of a single extracted field (null when the bill has none) */
export const getFieldValue = (bill: Bill, name: string): any => getRawFields(bill)[name] ?? null;

/**
 * Extracted fields of a bill, in display order.
 * With a master field list, exactly those fields are returned (null when the bill has no value);
 * without one (not loaded / empty), whatever the bill carries is returned.
 */
export const getExtractedFields = (bill: Bill, fieldNames: string[] = []): Record<string, any> => {
    const raw = getRawFields(bill);
    if (fieldNames.length === 0) return raw;

    const fields: Record<string, any> = {};
    fieldNames.forEach((name) => {
        fields[name] = raw[name] ?? null;
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
