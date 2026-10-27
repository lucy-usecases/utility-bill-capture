# Source Code Structure

This directory contains all the source code for your UXP v5 application.

## Folder Structure

```
src/
├── components/          # Reusable UI components
├── forms/              # Form components
├── views/              # Page-level view components
├── samples/            # Sample data (JSON) for preview and testing
├── images/             # Static image assets
├── index.tsx           # Main entry point - widget registration
├── services.ts         # API service configurations
├── types.ts            # TypeScript type definitions
├── utils.ts            # Utility functions
├── uxp.ts              # UXP type definitions and utilities
└── global.scss         # Global styles
```

## File Purposes

### Core Files

#### `index.tsx`
**Purpose**: Main entry point where you register your widgets and components.

```typescript
// Register your widgets here
window.registerWidget({
    id: 'my-widget',
    widget: MyComponent,
    configs: {
        layout: { w: 12, h: 12, minW: 6, minH: 8 }
    }
});
```

#### `services.ts`
**Purpose**: Define all API calls using the v5 data fetching pattern.

```typescript
export const MyServices = {
    getAll: (): ExecuteServiceConfig => ({
        type: 'service',
        app: 'MyApp',
        service: 'MyService:GetAll',
        parameters: {},
        options: { json: true },
        defaultValue: []
    })
};
```

#### `types.ts`
**Purpose**: TypeScript type definitions for type safety.

```typescript
export interface MyData {
    Key: string;
    Name: string;
    // ...other fields
}
```

#### `utils.ts`
**Purpose**: Reusable utility functions.

```typescript
export function formatDate(date: string): string {
    // Format date logic
}
```

#### `uxp.ts`
**Purpose**: UXP framework type definitions and utilities (auto-generated).

**Note**: This file is managed by the CLI. Don't modify it manually.

#### `global.scss`
**Purpose**: Global styles and CSS variables.

```scss
.my-component {
    padding: 1rem;
    background: var(--primaryBGColor);
}
```

## Component Organization

### Views (`views/`)
**Page-level components** that:
- Handle data fetching and business logic
- Receive route parameters
- Compose multiple smaller components
- Are registered as widgets for routing

**Example**: `LocationDetailsView.tsx`, `DashboardView.tsx`

### Components (`components/`)
**Reusable UI components** that:
- Focus on presentation
- Accept props for configuration
- Emit events via callbacks
- Can be used across multiple views

**Example**: `LocationCard.tsx`, `UserAvatar.tsx`, `StatusBadge.tsx`

### Forms (`forms/`)
**Form components** that:
- Handle form state and validation
- Provide input interfaces
- Emit submit/cancel events
- Can be embedded in views or modals

**Example**: `LocationForm.tsx`, `UserProfileForm.tsx`

### Samples (`samples/`)
**Sample data files** for:
- Preview and testing your components
- Mock data during development
- UI component demonstrations
- API response simulation

**Example**: `sample-data.json` contains mock items, users, locations, chart data, and dropdown options.

## Development Workflow

### 1. Define Types (`types.ts`)
```typescript
export interface Location {
    Key: string;
    Name: string;
    Type: string;
}
```

### 2. Create Services (`services.ts`)
```typescript
export const LocationServices = {
    getAll: (): ExecuteServiceConfig => ({
        type: 'service',
        app: 'Location',
        service: 'Location:GetAll',
        parameters: {},
        options: { json: true },
        defaultValue: []
    })
};
```

### 3. Build Components (`components/`)
```typescript
const LocationCard: React.FC<{ location: Location }> = ({ location }) => {
    return (
        <div className="location-card">
            <h3>{location.Name}</h3>
            <p>{location.Type}</p>
        </div>
    );
};
```

### 4. Build Forms (`forms/`)
```typescript
const LocationForm: React.FC<FormProps> = ({ onSubmit, initialValues }) => {
    // Form implementation
};
```

### 5. Build Views (`views/`)
```typescript
const LocationListView: React.FC<{ uxpContext: any }> = ({ uxpContext }) => {
    const { data, loading } = useExecuteRequest(LocationServices.getAll());

    return (
        <div>
            {data.map(location => (
                <LocationCard key={location.Key} location={location} />
            ))}
        </div>
    );
};
```

### 6. Register Widgets (`index.tsx`)
```typescript
window.registerWidget({
    id: 'location-list',
    widget: LocationListView,
    configs: {
        layout: { w: 12, h: 12 }
    }
});
```

### 7. Build and Test
```bash
npm run build
# Open index.html in browser
```

## Key Concepts

### UXP Context
Every widget receives `uxpContext` as a prop, providing access to:
- API execution functions
- User details
- Theme settings
- Localization
- Navigation

### Data Fetching Pattern
Use service configurations with `useExecuteRequest`:
```typescript
const { data, loading, error, refetch } = useExecuteRequest(
    MyServices.getData(),
    { dependencies: [someParam] }
);
```

### Component Composition
Build larger components from smaller ones:
```typescript
<View>
  <Header />
  <SearchBar />
  <Grid>
    {items.map(item => <Card item={item} />)}
  </Grid>
  <Pagination />
</View>
```

### Event Handling
Use callbacks to communicate between components:
```typescript
<Card
    item={data}
    onClick={handleClick}
    onEdit={handleEdit}
    onDelete={handleDelete}
/>
```

## UXP Components

Access UXP components via `window.UXPComponents`:

```typescript
const {
    // Hooks
    useExecuteRequest,
    useToast,
    useDebounce,

    // Form Components
    Input,
    Select,
    DatePicker,
    Checkbox,

    // UI Components
    Button,
    Modal,
    DataTable,
    TitleBar,

    // Utilities
    hasValue,
    toStr,
    toNum
} = window.UXPComponents;
```

## Best Practices

### 1. Keep Components Focused
Each component should have a single responsibility.

### 2. Use TypeScript
Define interfaces for all props and data structures.

### 3. Handle Loading and Error States
Always show feedback to users during async operations.

### 4. Validate User Input
Add validation to forms before submission.

### 5. Use Semantic HTML
Make your app accessible with proper HTML structure.

### 6. Follow Naming Conventions
- Components: PascalCase (`LocationCard.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS classes: kebab-case (`location-card`)

### 7. Comment Complex Logic
Help future maintainers (including yourself!) understand the code.

### 8. Test Incrementally
Build and test features one at a time.

## Getting Help

1. **Use Sample Data**: Check `samples/sample-data.json` for mock data during development
2. **Check UXP Docs**: Framework documentation for component reference
3. **Examine Location 5.0**: Real-world v5 implementation example

## Common Patterns

### Loading State
```typescript
if (loading) return <Loading message="Loading..." />;
```

### Error State
```typescript
if (error) return <div>Error: {error}</div>;
```

### Empty State
```typescript
if (data.length === 0) return <div>No items found</div>;
```

### Success Toast
```typescript
toast.success('Operation completed successfully');
```

### Confirm Dialog
```typescript
const confirmed = await alert.confirm({
    title: 'Confirm',
    message: 'Are you sure?'
});
```

## Next Steps

1. Check `samples/sample-data.json` for mock data you can use during development
2. Define your data types in `types.ts`
3. Create your first service in `services.ts`
4. Build your first component in `components/`
5. Register it in `index.tsx`
6. Build and test!

Happy coding! 🚀
