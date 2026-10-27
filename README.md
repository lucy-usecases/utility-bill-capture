# UXP V5 Widget Template

This is a starter template for building UXP v5 widgets and applications.

## Quick Start

### 1. Initial Setup

```bash
# Install dependencies
npm install

# Update Lucy connection details
# Edit index.html and update:
# - fullAccountUrl
# - lucyUrl
# - apiKey
```

### 2. Build Your First Widget

```bash
# Start development
npm run watch

# Open index.html in a browser with live server
# Your widget will appear in the development dashboard
```

### 3. Project Structure

```
├── src/
│   ├── components/      # Reusable UI components
│   ├── forms/          # Form components
│   ├── views/          # Page-level views
│   ├── samples/        # Sample data (JSON) for preview/testing
│   ├── index.tsx       # Widget registration
│   ├── services.ts     # API service definitions
│   ├── types.ts        # TypeScript types
│   ├── utils.ts        # Utility functions
│   └── global.scss     # Styles
├── index.html          # Development environment
├── bundle.json         # Widget metadata
└── webpack.config.js   # Build configuration
```

## Development Workflow

### Step 1: Review Template Files

Check out the template files with commented examples:
- **views/SampleView.tsx** - View component patterns
- **components/SampleComponent.tsx** - Reusable component patterns
- **forms/SampleForm.tsx** - Form handling patterns
- **samples/sample-data.json** - Mock data for preview/testing

### Step 2: Define Your Data

Add types in `src/types.ts`:

```typescript
export interface MyItem {
    Key: string;
    Name: string;
    Description: string;
}
```

### Step 3: Create API Services

Add service configurations in `src/services.ts`:

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

### Step 4: Build Components

Create components in `src/components/`:

```typescript
const MyCard: React.FC<{ item: MyItem }> = ({ item }) => {
    return (
        <div className="my-card">
            <h3>{item.Name}</h3>
            <p>{item.Description}</p>
        </div>
    );
};
```

### Step 5: Build Views

Create views in `src/views/`:

```typescript
const MyView: React.FC<{ uxpContext: any }> = ({ uxpContext }) => {
    const { useExecuteRequest } = window.UXPComponents;
    const { data, loading } = useExecuteRequest(MyServices.getAll());

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            {data.map(item => (
                <MyCard key={item.Key} item={item} />
            ))}
        </div>
    );
};
```

### Step 6: Register Widget

Register in `src/index.tsx`:

```typescript
window.registerWidget({
    id: 'my-widget',
    widget: MyView,
    configs: {
        layout: { w: 12, h: 12, minW: 6, minH: 8 }
    }
});
```

### Step 7: Build and Test

```bash
# Build once
npm run build

# Or watch for changes
npm run watch

# Open index.html in browser
```

## Available Scripts

```bash
npm run build        # Production build
npm run watch       # Development build with watch mode
npm run build:docs  # Generate documentation (if configured)
```

## Configuration

### bundle.json

Widget metadata for Lucy integration:

```json
{
    "Name": "My Widget",
    "Version": "1.0.0",
    "ID": "my-widget",
    "Module": "my-widget"
}
```

### index.html

Development environment configuration:
- Lucy URL and API key
- User details
- Theme settings
- Route/page configuration (for renderApp)

## UXP Components

Access UXP components via `window.UXPComponents`:

```typescript
const {
    // Data Fetching
    useExecuteRequest,
    useExecuteRequestCallback,

    // Notifications
    useToast,
    useAlert,

    // Form Components
    Input,
    Select,
    DatePicker,
    Checkbox,
    TextArea,

    // UI Components
    Button,
    Modal,
    TitleBar,
    DataTable,
    DataGrid,
    Loading,

    // Utilities
    hasValue,
    toStr,
    toNum,
    toBool
} = window.UXPComponents;
```

## Common Patterns

### Data Fetching

```typescript
// Auto-execute on mount
const { data, loading, error } = useExecuteRequest(
    MyServices.getAll()
);

// Execute when dependency changes
const { data } = useExecuteRequest(
    MyServices.getDetails(itemKey),
    { dependencies: [itemKey] }
);

// Manual execution
const { execute, loading } = useExecuteRequestCallback(
    MyServices.create({})
);
```

### Form Handling

```typescript
const [formValues, setFormValues] = useState({
    name: '',
    description: ''
});

const handleSubmit = async (e) => {
    e.preventDefault();
    await execute(formValues);
};
```

### Notifications

```typescript
const toast = useToast();

toast.success('Success!');
toast.error('Error occurred');
toast.warning('Warning message');
toast.info('Information');
```

### Modals

```typescript
const [isOpen, setIsOpen] = useState(false);

<Modal
    isOpen={isOpen}
    onClose={() => setIsOpen(false)}
    title="My Modal"
>
    <div>Modal content</div>
</Modal>
```

## Deployment

### Build for Production

```bash
npm run build
```

This creates `dist/main.js` which can be deployed to Lucy.

### Upload to Lucy

Using lucy-xp CLI:

```bash
lucy-xp upload dist/main.js bundle.json --lucy-url YOUR_URL --lucy-apikey YOUR_KEY
```

## Styling

### Using Theme Variables

```scss
.my-component {
    background: var(--primaryBGColor);
    color: var(--primaryTextColor);
    border: 1px solid var(--borderColor);

    &:hover {
        background: var(--highlightBGColor);
    }
}
```

### Available Theme Variables

See `global.scss` for a complete list of available CSS variables including:
- Colors: `--primaryBGColor`, `--accentColor`, etc.
- Buttons: `--primaryButtonBGColor`, etc.
- Status: `--successColor`, `--errorColor`, etc.

## Troubleshooting

### Widget not appearing

1. Check browser console for errors
2. Verify `window.registerWidget()` is called
3. Confirm Lucy URL and API key are correct
4. Check if build completed successfully

### API calls failing

1. Verify Lucy URL is accessible
2. Check API key is valid
3. Confirm service/model names are correct
4. Check browser network tab for error details

### Styling issues

1. Check if styles are imported in `index.tsx`
2. Verify CSS class names match
3. Check for CSS specificity conflicts
4. Use browser dev tools to inspect styles

## Resources

- **src/samples/sample-data.json** - Mock data for preview and testing
- **src/README.md** - Detailed code organization guide
- **Template files** (views, components, forms) - Commented example patterns
- **CLAUDE.md** (in main UXP repo) - Framework architecture
- **UXP Documentation** - Component reference
- **Location 5.0 App** - Real-world v5 example

## Support

For issues or questions:
1. Check the template files and documentation
2. Review the Location 5.0 app for real-world examples
3. Consult the UXP framework documentation

## License

Copyright © Iviva

---

**Happy coding! 🚀**
