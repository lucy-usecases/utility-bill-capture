# Sample Data

This folder contains sample/mock data files for preview and testing your components during development.

## Purpose

Use these sample data files to:
- Preview how your components look with real data
- Test UI components without connecting to a backend
- Develop and debug layouts with mock data
- Demonstrate functionality in presentations

## Available Sample Data

### sample-data.json

A comprehensive sample data file containing:

#### Items
Mock items with various properties for list/grid displays:
- Name, Description, Status, Priority
- Created/Modified dates
- Tags and categories

#### Users
Sample user records:
- Basic profile information
- Contact details
- User types and status

#### Locations
Location/building data:
- Address and geographical information
- Latitude/Longitude
- Timezone information
- Hierarchical structure (Building > Floor)

#### Chart Data
Sample data for charts and visualizations:
- Pie chart data with categories and values
- Trend/line chart data with dates and values
- Color-coded segments

#### Dropdown Options
Pre-configured options for select fields:
- Status options (active, pending, inactive, completed)
- Type options (Type A, B, C)
- Color-coded options for UI feedback

## How to Use

### 1. Import in Your Components

```typescript
import sampleData from '../samples/sample-data.json';

const MyComponent = () => {
    const [data, setData] = useState(sampleData.items);

    return (
        <div>
            {data.map(item => (
                <ItemCard key={item.Key} item={item} />
            ))}
        </div>
    );
};
```

### 2. Simulate API Responses

```typescript
const fetchData = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Return sample data
    return sampleData.items;
};
```

### 3. Populate Forms

```typescript
const [formValues, setFormValues] = useState({
    Type: '',
    Status: ''
});

// Use sample options in dropdowns
<Select
    options={sampleData.typeOptions}
    value={formValues.Type}
    onChange={(value) => setFormValues({ ...formValues, Type: value })}
/>
```

### 4. Test Charts

```typescript
import { PieChart } from 'window.UXPComponents';

<PieChart data={sampleData.chartData.pieChart} />
```

## Adding Your Own Sample Data

You can add more sample data files as needed:

```json
// samples/my-custom-data.json
{
    "orders": [
        {
            "OrderID": "ORD-001",
            "CustomerName": "John Doe",
            "Total": 150.00,
            "Status": "Pending"
        }
    ]
}
```

## Best Practices

1. **Keep it realistic**: Use data that resembles real-world scenarios
2. **Include edge cases**: Empty strings, null values, long text, etc.
3. **Provide variety**: Different statuses, types, and categories
4. **Structure properly**: Match your actual API response structure
5. **Document fields**: Add comments for complex data structures

## Switching to Real Data

When moving from sample data to real API calls:

```typescript
// During development
const { data } = useState(sampleData.items);

// In production
const { data, loading, error } = useExecuteRequest(
    MyServices.getAll()
);
```

## Tips

- Use `hasValue()` utility to handle optional fields
- Test with both full and empty datasets
- Include different date formats
- Add multilingual text if building i18n features
- Create sample data that covers all UI states

---

**Note**: This folder is for mock data only. Do not place code examples or component implementations here.
