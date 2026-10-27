/**
 * TypeScript Type Definitions
 *
 * Define all TypeScript interfaces and types used throughout the application.
 * This ensures type safety and better IDE intellisense.
 *
 * Organization:
 * 1. Domain Models - Business entities (Location, User, etc.)
 * 2. Component Props - Props for React components
 * 3. API Responses - Types for API response data
 * 4. Form Types - Form field values and validation
 * 5. Utility Types - Helper types and generic utilities
 */

// ============================================================================
// DOMAIN MODELS - Business Entities
// ============================================================================

/**
 * Example: Location Model
 * Replace with your actual domain model
 */
// export interface Location {
//     Key: string;
//     ID: string;
//     Name: string;
//     Type: string;
//     ParentKey: string | null;
//     Address: string;
//     City: string;
//     Country: string;
//     Latitude: number;
//     Longitude: number;
//     TimeZone: string;
//     IsActive: '1' | '0';
//     CreatedDate: string;
//     ModifiedDate: string;
//     // Add other fields as needed
// }

/**
 * Example: User Model
 */
// export interface User {
//     UserKey: string;
//     LoginID: string;
//     FirstName: string;
//     LastName: string;
//     FullName: string;
//     Email: string;
//     Phone: string;
//     UserType: string;
//     IsActive: '1' | '0';
// }

// ============================================================================
// COMPONENT PROPS - React Component Props
// ============================================================================

/**
 * Example: View Component Props
 * Props passed to view components from routing
 */
// export interface LocationDetailsViewProps {
//     // From UXP Context
//     uxpContext: any;  // Use IContextProvider from uxp.ts for proper typing
//     // Route parameters
//     locationKey?: string;
//     // Additional props
//     embedded?: boolean;
//     readOnly?: boolean;
// }

/**
 * Example: Reusable Component Props
 */
// export interface LocationCardProps {
//     location: Location;
//     onClick?: (location: Location) => void;
//     onDelete?: (key: string) => void;
//     showActions?: boolean;
// }

// ============================================================================
// API RESPONSES - Types for API Response Data
// ============================================================================

/**
 * Example: Location List Response
 */
// export interface LocationListResponse {
//     locations: Location[];
//     total: number;
//     page: number;
//     pageSize: number;
// }

/**
 * Example: Create/Update Response
 */
// export interface SaveResponse {
//     success: boolean;
//     message: string;
//     key?: string;
//     data?: any;
// }

/**
 * Generic API Response Wrapper
 */
// export interface ApiResponse<T> {
//     data: T;
//     error?: string;
//     success: boolean;
// }

// ============================================================================
// FORM TYPES - Form Field Values and Validation
// ============================================================================

/**
 * Example: Location Form Values
 */
// export interface LocationFormValues {
//     Name: string;
//     Type: string;
//     ParentKey: string;
//     Address: string;
//     City: string;
//     Country: string;
//     Latitude: string | number;
//     Longitude: string | number;
//     TimeZone: string;
//     IsActive: '1' | '0';
// }

/**
 * Example: Form Field Configuration
 */
// export interface FormField {
//     name: string;
//     label: string;
//     type: 'text' | 'select' | 'date' | 'number' | 'checkbox' | 'textarea';
//     required?: boolean;
//     placeholder?: string;
//     options?: Array<{ label: string; value: string }>;
//     validation?: {
//         min?: number;
//         max?: number;
//         pattern?: RegExp;
//         message?: string;
//     };
// }

/**
 * Form Errors Type
 */
// export interface FormErrors {
//     [fieldName: string]: string;
// }

// ============================================================================
// UTILITY TYPES - Helper types and generic utilities
// ============================================================================

/**
 * Make all properties optional recursively
 */
// export type DeepPartial<T> = {
//     [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
// };

/**
 * Extract keys of specific type from object
 */
// export type KeysOfType<T, U> = {
//     [K in keyof T]: T[K] extends U ? K : never;
// }[keyof T];

/**
 * Make specific properties required
 */
// export type RequireKeys<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Make specific properties optional
 */
// export type OptionalKeys<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// ============================================================================
// ENUMS - Enumerated values
// ============================================================================

/**
 * Example: Location Types Enum
 */
// export enum LocationType {
//     Site = 'Site',
//     Building = 'Building',
//     Floor = 'Floor',
//     Zone = 'Zone',
//     Room = 'Room'
// }

/**
 * Example: Status Enum
 */
// export enum Status {
//     Active = '1',
//     Inactive = '0'
// }

// ============================================================================
// CONSTANTS - Type-safe constants
// ============================================================================

/**
 * Example: Form Mode Constants
 */
// export const FORM_MODE = {
//     CREATE: 'create',
//     EDIT: 'edit',
//     VIEW: 'view'
// } as const;

// export type FormMode = typeof FORM_MODE[keyof typeof FORM_MODE];

/**
 * Example: Action Types
 */
// export const ACTION_TYPES = {
//     VIEW: 'view',
//     EDIT: 'edit',
//     DELETE: 'delete',
//     CLONE: 'clone'
// } as const;

// export type ActionType = typeof ACTION_TYPES[keyof typeof ACTION_TYPES];

// ============================================================================
// TYPE GUARDS - Runtime type checking functions
// ============================================================================

/**
 * Example: Type guard for Location
 */
// export function isLocation(obj: any): obj is Location {
//     return (
//         typeof obj === 'object' &&
//         obj !== null &&
//         typeof obj.Key === 'string' &&
//         typeof obj.Name === 'string'
//     );
// }

/**
 * Example: Type guard for checking if value exists
 */
// export function isDefined<T>(value: T | null | undefined): value is T {
//     return value !== null && value !== undefined;
// }

// ============================================================================
// EXPORT PLACEHOLDER
// ============================================================================

// Export empty object to make this a valid module
export {};
