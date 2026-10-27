/**
 * Sample View Component
 *
 * This is a sample view component that demonstrates:
 * - How to structure a v5 view component
 * - Using UXP context and hooks
 * - Data fetching with useExecuteRequest
 * - Component organization patterns
 * - Error handling and loading states
 *
 * Views are page-level components that:
 * - Receive uxpContext as a prop
 * - Can receive route parameters
 * - Handle data fetching and state management
 * - Compose smaller components to build the UI
 */

// import React, { useState, useEffect } from 'react';
// import { Services } from '../services';
// import { SampleComponent } from '../components/SampleComponent';
// import { SampleForm } from '../forms/SampleForm';
// import type { SampleViewProps } from '../types';

/**
 * UXP provides many components and hooks via window.UXPComponents
 * Import commonly used ones here:
 */
// const {
//     // Hooks
//     useExecuteRequest,
//     useExecuteRequestCallback,
//     useToast,
//     useDebounce,
//
//     // Components
//     Button,
//     Loading,
//     TitleBar,
//     DataTable,
//     Modal,
//     useAlert,
//
//     // Utilities
//     hasValue
// } = window.UXPComponents;

/**
 * View Props Interface
 * Define props that this view receives
 */
// interface SampleViewProps {
//     uxpContext: any;      // UXP context provided automatically
//     itemKey?: string;     // Route parameter from URL (e.g., /view/sample/:itemKey)
//     embedded?: boolean;   // Flag if view is embedded in another component
//     readOnly?: boolean;   // Additional configuration props
// }

/**
 * Sample View Component
 *
 * This view demonstrates common patterns:
 * 1. Data fetching on mount
 * 2. CRUD operations
 * 3. Form handling
 * 4. Error handling
 * 5. Loading states
 * 6. Toast notifications
 */
// const SampleView: React.FC<SampleViewProps> = (props) => {
//     const { uxpContext, itemKey, embedded = false, readOnly = false } = props;
//
//     // Get commonly used utilities
//     const { useExecuteRequest, useToast, Button, TitleBar, Loading } = window.UXPComponents;
//     const toast = useToast();
//
//     // ========================================================================
//     // STATE MANAGEMENT
//     // ========================================================================
//
//     const [selectedItem, setSelectedItem] = useState<any>(null);
//     const [isFormOpen, setIsFormOpen] = useState(false);
//     const [searchQuery, setSearchQuery] = useState('');
//
//     // ========================================================================
//     // DATA FETCHING
//     // ========================================================================
//
//     // Fetch list of items (auto-execute on mount)
//     // const { data: items = [], loading, error, refetch } = useExecuteRequest(
//     //     Services.ItemServices.getAll({ search: searchQuery }),
//     //     { dependencies: [searchQuery], debounce: 300 }
//     // );
//
//     // Fetch single item details when itemKey changes
//     // const { data: itemDetails, loading: loadingDetails } = useExecuteRequest(
//     //     itemKey ? Services.ItemServices.getDetails(itemKey) : null,
//     //     { dependencies: [itemKey] }
//     // );
//
//     // ========================================================================
//     // ACTIONS - Create, Update, Delete
//     // ========================================================================
//
//     // Create/Update action
//     // const { execute: saveItem, loading: saving } = useExecuteRequestCallback(
//     //     Services.ItemServices.create({})
//     // );
//
//     /**
//      * Handle form submission
//      */
//     // const handleSave = async (formData: any) => {
//     //     const result = await saveItem(formData);
//     //
//     //     if (result.error) {
//     //         toast.error(result.errorMessage || 'Failed to save');
//     //         return;
//     //     }
//     //
//     //     toast.success('Saved successfully');
//     //     setIsFormOpen(false);
//     //     refetch(); // Refresh the list
//     // };
//
//     /**
//      * Handle delete action
//      */
//     // const handleDelete = async (key: string) => {
//     //     const confirmed = await uxpContext.confirm('Are you sure you want to delete this item?');
//     //     if (!confirmed) return;
//     //
//     //     const result = await executeConfig(Services.ItemServices.delete(key));
//     //
//     //     if (result.error) {
//     //         toast.error('Failed to delete');
//     //         return;
//     //     }
//     //
//     //     toast.success('Deleted successfully');
//     //     refetch();
//     // };
//
//     // ========================================================================
//     // EFFECTS
//     // ========================================================================
//
//     // Effect to handle side effects when itemKey changes
//     // useEffect(() => {
//     //     if (itemKey) {
//     //         console.log('Item key changed:', itemKey);
//     //     }
//     // }, [itemKey]);
//
//     // ========================================================================
//     // RENDER HELPERS
//     // ========================================================================
//
//     /**
//      * Render loading state
//      */
//     // if (loading) {
//     //     return <Loading message="Loading..." />;
//     // }
//
//     /**
//      * Render error state
//      */
//     // if (error) {
//     //     return (
//     //         <div className="error-container">
//     //             <p>Error loading data: {error}</p>
//     //             <Button onClick={refetch}>Retry</Button>
//     //         </div>
//     //     );
//     // }
//
//     // ========================================================================
//     // MAIN RENDER
//     // ========================================================================
//
//     return (
//         <div className="sample-view">
//             {/* Header Section */}
//             {/* <TitleBar
//                 title="Sample View"
//                 subTitle="Demonstrating v5 view patterns"
//                 actions={
//                     !readOnly && (
//                         <Button
//                             type="primary"
//                             onClick={() => setIsFormOpen(true)}
//                         >
//                             Create New
//                         </Button>
//                     )
//                 }
//             /> */}
//
//             {/* Search Section */}
//             {/* <div className="search-section">
//                 <Input
//                     placeholder="Search..."
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//             </div> */}
//
//             {/* Content Section */}
//             {/* <div className="content-section">
//                 {items.length === 0 ? (
//                     <div className="no-items">
//                         <p>No items found</p>
//                     </div>
//                 ) : (
//                     <div className="items-grid">
//                         {items.map(item => (
//                             <SampleComponent
//                                 key={item.Key}
//                                 item={item}
//                                 onClick={() => setSelectedItem(item)}
//                                 onDelete={handleDelete}
//                                 readOnly={readOnly}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </div> */}
//
//             {/* Form Modal */}
//             {/* <Modal
//                 isOpen={isFormOpen}
//                 onClose={() => setIsFormOpen(false)}
//                 title={selectedItem ? 'Edit Item' : 'Create Item'}
//             >
//                 <SampleForm
//                     initialValues={selectedItem}
//                     onSubmit={handleSave}
//                     onCancel={() => setIsFormOpen(false)}
//                     loading={saving}
//                 />
//             </Modal> */}
//
//             <div className="sample-content">
//                 <h2>Sample View</h2>
//                 <p>Replace this content with your actual view implementation.</p>
//                 <p>Uncomment the code above to see examples of:</p>
//                 <ul>
//                     <li>Data fetching with useExecuteRequest</li>
//                     <li>CRUD operations</li>
//                     <li>Form handling</li>
//                     <li>Loading and error states</li>
//                     <li>Toast notifications</li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

/**
 * Register this view as a widget so it can be used in the dashboard or as a page
 * Uncomment when ready to register
 */
// window.registerWidget({
//     id: 'sample-view',
//     widget: SampleView,
//     configs: {
//         layout: {
//             w: 12,
//             h: 12,
//             minW: 6,
//             minH: 8
//         }
//     }
// });

// export default SampleView;
