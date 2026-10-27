import axios from 'axios';
import { ExecuteActionConfig, ExecuteCollectionConfig, ExecutionResult, IContextProvider, generateUUID, hasValue, trimSlash } from 'uxp/components';

// Lucy model that stores uploaded bills and runs the extraction
export const BillModel = 'EBR.Bill';

// Data collection on the model that holds the bill records
export const BillCollection = 'bills';

export type BillStatus = 'Pending' | 'Processing' | 'Done' | 'Error';
export const BillStatuses: BillStatus[] = ['Pending', 'Processing', 'Done', 'Error'];

/**
 * A bill as returned by the List / Details actions.
 * Extracted fields are either nested under `fields` or returned as extra top-level properties.
 */
export interface Bill {
    id: string;
    status: BillStatus;
    fileName?: string;
    filePath?: string;
    uploadedAt?: string;
    uploadedBy?: string;
    error?: string;
    fields?: Record<string, any>;
    [key: string]: any;
}

// Properties that describe the upload itself — everything else is treated as an extracted field
export const BillSystemFields = ['id', '_id', 'status', 'fileName', 'filePath', 'uploadedAt', 'uploadedBy', 'error', 'fields', '__totalcount__'];

const parseJSON = (value: any) => (typeof value === 'string' ? JSON.parse(value) : value);

// Records may be keyed by `id` or `_id` (a plain value or a Mongo-style { $oid } object) — expose it as `id`
const withId = (bill: any): Bill => {
    if (!bill || typeof bill !== 'object') return bill;
    const rawId = hasValue(bill.id) ? bill.id : bill._id;
    const id = rawId && typeof rawId === 'object' ? rawId.$oid ?? String(rawId) : rawId;
    return { ...bill, id: hasValue(id) ? String(id) : id };
};

// Collection queries return [{ data: '<json array of documents>' }] (possibly as a JSON string)
const normalizeList = (data: any): Bill[] => {
    try {
        const rows = parseJSON(data);
        const docs = parseJSON(Array.isArray(rows) ? rows[0]?.data : rows?.data);
        return Array.isArray(docs) ? docs.map(withId) : [];
    } catch {
        return [];
    }
};

// Details may return a single object or a one-item array
const normalizeDetails = (data: any): Bill | null => {
    const bill = Array.isArray(data) ? data[0] : data;
    return bill ? withId(bill) : null;
};

export const BillServices = {
    upload: (filePath: string, fileName: string): ExecuteActionConfig => ({
        type: 'action',
        model: BillModel,
        action: 'Upload',
        parameters: { filePath, fileName },
        options: { json: true },
        defaultValue: null,
    }),

    /** Query the `bills` data collection. `filter` is the collection query object. */
    list: (max: number, last: number, filter: Record<string, any> = {}): ExecuteCollectionConfig => ({
        type: 'collection',
        model: BillModel,
        collection: BillCollection,
        parameters: {
            modelName: BillModel,
            collectionName: BillCollection,
            max,
            last,
            filter: JSON.stringify(filter),
        },
        options: {},
        transformData: normalizeList,
        defaultValue: [],
    }),

    details: (id: string): ExecuteActionConfig => ({
        type: 'action',
        model: BillModel,
        action: 'Details',
        parameters: { id },
        options: { json: true },
        transformData: normalizeDetails,
        defaultValue: null,
    }),

    // TODO: not part of the agreed action list yet — needed to save edited extracted fields
    update: (id: string, fields: Record<string, any>): ExecuteActionConfig => ({
        type: 'action',
        model: BillModel,
        action: 'Update',
        parameters: { id, fields: JSON.stringify(fields) },
        options: { json: true },
        defaultValue: null,
    }),
};

/** Absolute URL for a path returned by the API (paths may be relative to the Lucy root) */
export const getFileUrl = (uxpContext: IContextProvider, path: string): string => {
    if (!hasValue(path)) return '';
    if (/^https?:\/\//i.test(path)) return path;
    return `${trimSlash(uxpContext.lucyUrl)}/${path.replace(/^\/+/, '')}`;
};

/** Lowercased file extension (bucket + stored suffix). Falls back to `bin`. */
const extOf = (name: string): string => {
    const m = /\.([A-Za-z0-9]+)$/.exec(name.trim());
    return m ? m[1].toLowerCase() : 'bin';
};

/**
 * Rebuild the retrieval URL against the current page's origin (scheme+host+port),
 * keeping only the path (+query) of the content URL.
 */
const toContentUrl = (returnedUrl: string): string => {
    try {
        const u = new URL(returnedUrl, window.location.origin);
        return `${window.location.origin}${u.pathname}${u.search}`;
    } catch {
        return returnedUrl;
    }
};

/**
 * Upload the bill file to the Lucy content store and return the URL it is served from
 * (/content/<ext>/<filename>). Same mechanism as the AgenticAI attachment uploader.
 */
export async function uploadBillFile(uxpContext: IContextProvider, file: File): Promise<ExecutionResult<string>> {
    const base = trimSlash(uxpContext.lucyUrl || '');
    const ext = extOf(file.name);
    const filename = `${generateUUID()}.${ext}`;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('filename', filename);

    try {
        await axios.post(`${base}/uploadcontent/${ext}`, formData);
        return { data: toContentUrl(`${base}/content/${ext}/${filename}`) };
    } catch (e: any) {
        return { data: null, error: e?.message || 'Unable to upload the file' };
    }
}
