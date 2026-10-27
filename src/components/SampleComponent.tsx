/**
 * Sample Reusable Component
 *
 * This is a sample reusable component that demonstrates:
 * - Component composition patterns
 * - Props interface definition
 * - Event handling
 * - Conditional rendering
 * - Using UXP components
 *
 * Components are reusable building blocks that:
 * - Accept props for configuration
 * - Emit events via callbacks
 * - Are self-contained and focused on a single responsibility
 * - Can be used across multiple views
 */

// import React from 'react';
// import type { SampleComponentProps } from '../types';

/**
 * Import UXP components and utilities
 */
// const {
//     Button,
//     IconButton,
//     Chip,
//     Icon,
//     hasValue
// } = window.UXPComponents;

/**
 * Component Props Interface
 * Define all props that this component accepts
 */
// interface SampleComponentProps {
//     // Required props
//     item: {
//         Key: string;
//         Name: string;
//         Description?: string;
//         Status?: string;
//         CreatedDate?: string;
//         [key: string]: any;
//     };
//
//     // Optional props
//     onClick?: (item: any) => void;
//     onEdit?: (item: any) => void;
//     onDelete?: (key: string) => void;
//     readOnly?: boolean;
//     showActions?: boolean;
//     className?: string;
// }

/**
 * Sample Card Component
 *
 * A reusable card component that displays item information
 * with optional action buttons
 */
// const SampleComponent: React.FC<SampleComponentProps> = (props) => {
//     const {
//         item,
//         onClick,
//         onEdit,
//         onDelete,
//         readOnly = false,
//         showActions = true,
//         className = ''
//     } = props;
//
//     // Get UXP components
//     const { Button, IconButton, Chip, Icon, hasValue } = window.UXPComponents;
//
//     // ========================================================================
//     // EVENT HANDLERS
//     // ========================================================================
//
//     /**
//      * Handle card click
//      */
//     const handleClick = () => {
//         if (onClick) {
//             onClick(item);
//         }
//     };
//
//     /**
//      * Handle edit button click
//      */
//     const handleEdit = (e: React.MouseEvent) => {
//         e.stopPropagation(); // Prevent card click
//         if (onEdit) {
//             onEdit(item);
//         }
//     };
//
//     /**
//      * Handle delete button click
//      */
//     const handleDelete = (e: React.MouseEvent) => {
//         e.stopPropagation(); // Prevent card click
//         if (onDelete) {
//             onDelete(item.Key);
//         }
//     };
//
//     // ========================================================================
//     // RENDER HELPERS
//     // ========================================================================
//
//     /**
//      * Get status color based on status value
//      */
//     const getStatusColor = (status: string): string => {
//         const statusColors: Record<string, string> = {
//             'active': 'success',
//             'pending': 'warning',
//             'inactive': 'default',
//             'error': 'danger'
//         };
//         return statusColors[status?.toLowerCase()] || 'default';
//     };
//
//     /**
//      * Format date for display
//      */
//     const formatDate = (dateString: string): string => {
//         if (!dateString) return '';
//         const date = new Date(dateString);
//         return date.toLocaleDateString();
//     };
//
//     // ========================================================================
//     // MAIN RENDER
//     // ========================================================================
//
//     return (
//         <div
//             className={`sample-component-card ${className} ${onClick ? 'clickable' : ''}`}
//             onClick={handleClick}
//         >
//             {/* Header Section */}
//             <div className="card-header">
//                 <h3 className="card-title">{item.Name}</h3>
//
//                 {/* Status Badge */}
//                 {hasValue(item.Status) && (
//                     <Chip
//                         label={item.Status}
//                         type={getStatusColor(item.Status)}
//                     />
//                 )}
//             </div>
//
//             {/* Content Section */}
//             <div className="card-content">
//                 {hasValue(item.Description) && (
//                     <p className="card-description">{item.Description}</p>
//                 )}
//
//                 {hasValue(item.CreatedDate) && (
//                     <div className="card-meta">
//                         <Icon name="calendar" size="small" />
//                         <span>Created: {formatDate(item.CreatedDate)}</span>
//                     </div>
//                 )}
//             </div>
//
//             {/* Actions Section */}
//             {showActions && !readOnly && (
//                 <div className="card-actions">
//                     {onEdit && (
//                         <IconButton
//                             icon="edit"
//                             onClick={handleEdit}
//                             title="Edit"
//                         />
//                     )}
//
//                     {onDelete && (
//                         <IconButton
//                             icon="trash"
//                             onClick={handleDelete}
//                             type="danger"
//                             title="Delete"
//                         />
//                     )}
//                 </div>
//             )}
//         </div>
//     );
// };

/**
 * Alternative: Simple List Item Component
 *
 * A simpler version for list displays
 */
// export const SampleListItem: React.FC<SampleComponentProps> = (props) => {
//     const { item, onClick } = props;
//     const { Icon } = window.UXPComponents;
//
//     return (
//         <div className="sample-list-item" onClick={() => onClick?.(item)}>
//             <Icon name="circle" size="small" />
//             <div className="list-item-content">
//                 <span className="list-item-title">{item.Name}</span>
//                 {item.Description && (
//                     <span className="list-item-subtitle">{item.Description}</span>
//                 )}
//             </div>
//             <Icon name="chevron-right" size="small" />
//         </div>
//     );
// };

/**
 * Alternative: Grid Item Component
 *
 * Optimized for grid layouts
 */
// export const SampleGridItem: React.FC<SampleComponentProps> = (props) => {
//     const { item, onClick } = props;
//
//     return (
//         <div className="sample-grid-item" onClick={() => onClick?.(item)}>
//             <div className="grid-item-icon">
//                 {/* Icon or image placeholder */}
//                 <div className="placeholder-icon">{item.Name.charAt(0)}</div>
//             </div>
//             <div className="grid-item-title">{item.Name}</div>
//         </div>
//     );
// };

/**
 * Styling Tips:
 *
 * Add styles in src/global.scss:
 *
 * .sample-component-card {
 *     padding: 1rem;
 *     border: 1px solid var(--borderColor);
 *     border-radius: 8px;
 *     cursor: pointer;
 *     transition: all 0.2s;
 *
 *     &:hover {
 *         box-shadow: 0 2px 8px var(--boxShadowColor);
 *     }
 *
 *     .card-header {
 *         display: flex;
 *         justify-content: space-between;
 *         align-items: center;
 *         margin-bottom: 0.5rem;
 *     }
 *
 *     .card-content {
 *         margin-bottom: 1rem;
 *     }
 *
 *     .card-actions {
 *         display: flex;
 *         gap: 0.5rem;
 *         justify-content: flex-end;
 *     }
 * }
 */

// export default SampleComponent;
