/**
 * Sample Form Component
 *
 * This is a sample form component that demonstrates:
 * - Form state management
 * - Field validation
 * - Error handling
 * - Using UXP form components
 * - Controlled inputs
 * - Form submission
 *
 * Forms are components that:
 * - Manage form state and validation
 * - Provide user input interfaces
 * - Handle submission and errors
 * - Can be embedded in views or modals
 */

// import React, { useState, useEffect } from 'react';
// import type { SampleFormProps, SampleFormValues, FormErrors } from '../types';
// import { Services } from '../services';

/**
 * Import UXP form components and utilities
 */
// const {
//     // Form Components
//     FormField,
//     Label,
//     Input,
//     Select,
//     Checkbox,
//     TextArea,
//     DatePicker,
//     Button,
//
//     // Hooks
//     useFields,  // UXP custom hook for form field management
//     useToast,
//
//     // Utilities
//     hasValue
// } = window.UXPComponents;

/**
 * Form Props Interface
 */
// interface SampleFormProps {
//     // Initial values for editing
//     initialValues?: Partial<SampleFormValues>;
//
//     // Submission handler
//     onSubmit: (values: SampleFormValues) => Promise<void> | void;
//
//     // Cancel handler
//     onCancel?: () => void;
//
//     // Loading state
//     loading?: boolean;
//
//     // Read-only mode
//     readOnly?: boolean;
// }

/**
 * Form Values Interface
 */
// interface SampleFormValues {
//     Name: string;
//     Description: string;
//     Type: string;
//     Status: string;
//     StartDate: string;
//     IsActive: boolean;
//     Tags: string[];
// }

/**
 * Sample Form Component
 *
 * Demonstrates form patterns with validation and error handling
 */
// const SampleForm: React.FC<SampleFormProps> = (props) => {
//     const {
//         initialValues,
//         onSubmit,
//         onCancel,
//         loading = false,
//         readOnly = false
//     } = props;
//
//     // Get UXP components
//     const {
//         FormField,
//         Label,
//         Input,
//         Select,
//         Checkbox,
//         Button,
//         hasValue
//     } = window.UXPComponents;
//
//     // ========================================================================
//     // STATE MANAGEMENT
//     // ========================================================================
//
//     /**
//      * Form field values
//      */
//     const [formValues, setFormValues] = useState<SampleFormValues>({
//         Name: initialValues?.Name || '',
//         Description: initialValues?.Description || '',
//         Type: initialValues?.Type || '',
//         Status: initialValues?.Status || 'active',
//         StartDate: initialValues?.StartDate || '',
//         IsActive: initialValues?.IsActive ?? true,
//         Tags: initialValues?.Tags || []
//     });
//
//     /**
//      * Form validation errors
//      */
//     const [errors, setErrors] = useState<Record<string, string>>({});
//
//     /**
//      * Form touched state (to show errors only after field interaction)
//      */
//     const [touched, setTouched] = useState<Record<string, boolean>>({});
//
//     // ========================================================================
//     // ALTERNATIVE: Using UXP useFields Hook
//     // ========================================================================
//
//     /**
//      * UXP provides a useFields hook that simplifies form state management
//      * Uncomment to use this instead of manual state management above:
//      */
//     // const { fields, setField, setFields, getFieldValues } = useFields({
//     //     Name: '',
//     //     Description: '',
//     //     Type: '',
//     //     Status: 'active',
//     //     StartDate: '',
//     //     IsActive: true
//     // });
//
//     // ========================================================================
//     // VALIDATION
//     // ========================================================================
//
//     /**
//      * Validate a single field
//      */
//     const validateField = (name: string, value: any): string => {
//         switch (name) {
//             case 'Name':
//                 if (!hasValue(value)) return 'Name is required';
//                 if (value.length < 3) return 'Name must be at least 3 characters';
//                 break;
//
//             case 'Type':
//                 if (!hasValue(value)) return 'Type is required';
//                 break;
//
//             case 'StartDate':
//                 if (!hasValue(value)) return 'Start date is required';
//                 break;
//
//             default:
//                 break;
//         }
//         return '';
//     };
//
//     /**
//      * Validate entire form
//      */
//     const validateForm = (): boolean => {
//         const newErrors: Record<string, string> = {};
//
//         Object.keys(formValues).forEach(fieldName => {
//             const error = validateField(fieldName, formValues[fieldName as keyof SampleFormValues]);
//             if (error) {
//                 newErrors[fieldName] = error;
//             }
//         });
//
//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };
//
//     // ========================================================================
//     // EVENT HANDLERS
//     // ========================================================================
//
//     /**
//      * Handle field value change
//      */
//     const handleChange = (fieldName: keyof SampleFormValues, value: any) => {
//         setFormValues(prev => ({
//             ...prev,
//             [fieldName]: value
//         }));
//
//         // Clear error when user starts typing
//         if (errors[fieldName]) {
//             setErrors(prev => {
//                 const newErrors = { ...prev };
//                 delete newErrors[fieldName];
//                 return newErrors;
//             });
//         }
//     };
//
//     /**
//      * Handle field blur (mark as touched for validation)
//      */
//     const handleBlur = (fieldName: string) => {
//         setTouched(prev => ({ ...prev, [fieldName]: true }));
//
//         // Validate field on blur
//         const error = validateField(fieldName, formValues[fieldName as keyof SampleFormValues]);
//         if (error) {
//             setErrors(prev => ({ ...prev, [fieldName]: error }));
//         }
//     };
//
//     /**
//      * Handle form submission
//      */
//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();
//
//         // Mark all fields as touched
//         const allTouched = Object.keys(formValues).reduce((acc, key) => {
//             acc[key] = true;
//             return acc;
//         }, {} as Record<string, boolean>);
//         setTouched(allTouched);
//
//         // Validate form
//         if (!validateForm()) {
//             return;
//         }
//
//         // Submit form
//         await onSubmit(formValues);
//     };
//
//     /**
//      * Handle cancel
//      */
//     const handleCancel = () => {
//         if (onCancel) {
//             onCancel();
//         }
//     };
//
//     // ========================================================================
//     // EFFECTS
//     // ========================================================================
//
//     /**
//      * Update form values when initialValues change
//      */
//     useEffect(() => {
//         if (initialValues) {
//             setFormValues(prev => ({
//                 ...prev,
//                 ...initialValues
//             }));
//         }
//     }, [initialValues]);
//
//     // ========================================================================
//     // RENDER
//     // ========================================================================
//
//     return (
//         <form onSubmit={handleSubmit} className="sample-form">
//             {/* Name Field */}
//             {/* <FormField error={touched.Name && errors.Name}>
//                 <Label required>Name</Label>
//                 <Input
//                     value={formValues.Name}
//                     onChange={(e) => handleChange('Name', e.target.value)}
//                     onBlur={() => handleBlur('Name')}
//                     placeholder="Enter name"
//                     disabled={readOnly}
//                 />
//                 {touched.Name && errors.Name && (
//                     <span className="error-message">{errors.Name}</span>
//                 )}
//             </FormField> */}
//
//             {/* Description Field */}
//             {/* <FormField>
//                 <Label>Description</Label>
//                 <TextArea
//                     value={formValues.Description}
//                     onChange={(e) => handleChange('Description', e.target.value)}
//                     placeholder="Enter description"
//                     rows={4}
//                     disabled={readOnly}
//                 />
//             </FormField> */}
//
//             {/* Type Select Field */}
//             {/* <FormField error={touched.Type && errors.Type}>
//                 <Label required>Type</Label>
//                 <Select
//                     value={formValues.Type}
//                     onChange={(value) => handleChange('Type', value)}
//                     onBlur={() => handleBlur('Type')}
//                     placeholder="Select type"
//                     disabled={readOnly}
//                     options={[
//                         { label: 'Type A', value: 'type-a' },
//                         { label: 'Type B', value: 'type-b' },
//                         { label: 'Type C', value: 'type-c' }
//                     ]}
//                 />
//                 {touched.Type && errors.Type && (
//                     <span className="error-message">{errors.Type}</span>
//                 )}
//             </FormField> */}
//
//             {/* Status Select Field */}
//             {/* <FormField>
//                 <Label>Status</Label>
//                 <Select
//                     value={formValues.Status}
//                     onChange={(value) => handleChange('Status', value)}
//                     disabled={readOnly}
//                     options={[
//                         { label: 'Active', value: 'active' },
//                         { label: 'Pending', value: 'pending' },
//                         { label: 'Inactive', value: 'inactive' }
//                     ]}
//                 />
//             </FormField> */}
//
//             {/* Date Field */}
//             {/* <FormField error={touched.StartDate && errors.StartDate}>
//                 <Label required>Start Date</Label>
//                 <DatePicker
//                     value={formValues.StartDate}
//                     onChange={(date) => handleChange('StartDate', date)}
//                     disabled={readOnly}
//                 />
//                 {touched.StartDate && errors.StartDate && (
//                     <span className="error-message">{errors.StartDate}</span>
//                 )}
//             </FormField> */}
//
//             {/* Checkbox Field */}
//             {/* <FormField>
//                 <Checkbox
//                     checked={formValues.IsActive}
//                     onChange={(checked) => handleChange('IsActive', checked)}
//                     label="Is Active"
//                     disabled={readOnly}
//                 />
//             </FormField> */}
//
//             {/* Form Actions */}
//             {!readOnly && (
//                 <div className="form-actions">
//                     {/* <Button
//                         type="submit"
//                         variant="primary"
//                         loading={loading}
//                         disabled={loading}
//                     >
//                         {initialValues ? 'Update' : 'Create'}
//                     </Button>
//
//                     {onCancel && (
//                         <Button
//                             type="button"
//                             variant="secondary"
//                             onClick={handleCancel}
//                             disabled={loading}
//                         >
//                             Cancel
//                         </Button>
//                     )} */}
//                 </div>
//             )}
//
//             <div className="sample-form-placeholder">
//                 <p>Sample Form Component</p>
//                 <p>Uncomment the code above to see form fields</p>
//             </div>
//         </form>
//     );
// };

/**
 * Advanced: Using UXP DynamicForm Component
 *
 * UXP provides a DynamicForm component that automatically
 * generates forms from field configuration
 */
// import { DynamicForm } from './uxp';
//
// const SampleDynamicForm: React.FC<SampleFormProps> = (props) => {
//     const { initialValues, onSubmit, onCancel, loading } = props;
//
//     const formFields = [
//         {
//             name: 'Name',
//             label: 'Name',
//             type: 'text',
//             required: true,
//             placeholder: 'Enter name'
//         },
//         {
//             name: 'Description',
//             label: 'Description',
//             type: 'textarea',
//             rows: 4
//         },
//         {
//             name: 'Type',
//             label: 'Type',
//             type: 'select',
//             required: true,
//             options: [
//                 { label: 'Type A', value: 'type-a' },
//                 { label: 'Type B', value: 'type-b' }
//             ]
//         },
//         {
//             name: 'StartDate',
//             label: 'Start Date',
//             type: 'date',
//             required: true
//         },
//         {
//             name: 'IsActive',
//             label: 'Is Active',
//             type: 'checkbox'
//         }
//     ];
//
//     return (
//         <DynamicForm
//             fields={formFields}
//             initialValues={initialValues}
//             onSubmit={onSubmit}
//             onCancel={onCancel}
//             submitButtonText={initialValues ? 'Update' : 'Create'}
//             loading={loading}
//         />
//     );
// };

/**
 * Styling Tips:
 *
 * Add styles in src/global.scss:
 *
 * .sample-form {
 *     display: flex;
 *     flex-direction: column;
 *     gap: 1rem;
 *     padding: 1rem;
 *
 *     .form-actions {
 *         display: flex;
 *         gap: 0.5rem;
 *         justify-content: flex-end;
 *         margin-top: 1rem;
 *         padding-top: 1rem;
 *         border-top: 1px solid var(--borderColor);
 *     }
 *
 *     .error-message {
 *         color: var(--dangerColor);
 *         font-size: 0.875rem;
 *         margin-top: 0.25rem;
 *     }
 * }
 */

// export default SampleForm;
