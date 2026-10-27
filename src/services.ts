import axios from 'axios';
import { ExecuteActionConfig, ExecutionResult, IContextProvider, generateUUID, hasValue, trimSlash } from 'uxp/components';

// Lucy model that stores uploaded bills and runs the extraction
export const BillModel = 'EBR.Bill';

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
export const BillSystemFields = ['id', 'status', 'fileName', 'filePath', 'uploadedAt', 'uploadedBy', 'error', 'fields', '__totalcount__'];

// List may return a plain array or a { items: [] } envelope
const normalizeList = (data: any): Bill[] => {
    if (Array.isArray(data)) return data;
    if (Array.isArray(data?.items)) return data.items;
    return [];
};

// Details may return a single object or a one-item array
const normalizeDetails = (data: any): Bill | null => {
    if (Array.isArray(data)) return data[0] ?? null;
    return data ?? null;
};

export const BillServices = {
    upload: (path: string): ExecuteActionConfig => ({
        type: 'action',
        model: BillModel,
        action: 'Upload',
        parameters: { filePath:path,fileName:path },
        options: { json: true },
        defaultValue: null,
    }),

    list: (params = {}): ExecuteActionConfig => ({
        type: 'action',
        model: BillModel,
        action: 'List',
        parameters: params,
        options: { json: true },
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
