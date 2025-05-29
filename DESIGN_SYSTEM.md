# Design System Architecture

## Component-First Approach

This design system follows a **component-first architecture** where:

### ✅ What the Shared UI Library Provides:

- **Self-contained components** that work with any Tailwind setup
- **CSS variables** for theming (e.g., `hsl(var(--primary))`)
- **Semantic class names** using `class-variance-authority`
- **Utility functions** for consistent component behavior

### ✅ What Each App Provides:

- **Its own Tailwind configuration** with app-specific design tokens
- **CSS variable values** that match the component contracts
- **App-specific themes** and branding

## Atomic Design Methodology

This design system follows **Atomic Design principles** created by Brad Frost, organizing UI components into a hierarchical structure that promotes consistency, reusability, and maintainability.

### 🔬 Component Hierarchy

#### **Atoms** - The Building Blocks

The smallest, most basic UI elements that can't be broken down further.

**Examples:**

- `Button` - Basic interactive element
- `Input` - Form input field
- `Label` - Text label
- `Icon` - Visual symbols
- `Avatar` - User profile image
- `Badge` - Status indicators
- `Spinner` - Loading indicator

**Guidelines:**

- Should be highly reusable across the entire system
- Must work in isolation
- Should have minimal dependencies
- Use CSS variables for theming
- Include comprehensive prop types

```typescript
// Example Atom: Button
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
}

export const Button = ({ variant = 'primary', size = 'md', ...props }: ButtonProps) => {
  return <button className={cn(buttonVariants({ variant, size }))} {...props} />;
};
```

#### **Molecules** - Simple Component Groups

Combinations of atoms that work together as a unit.

**Examples:**

- `SearchField` - Input + Button + Icon
- `FormField` - Label + Input + Error message
- `Card` - Container with header, content, and footer
- `NavigationItem` - Icon + Label + Badge
- `UserProfile` - Avatar + Name + Status
- `FeatureCard` - Icon + Title + Description

**Guidelines:**

- Combine 2-3 atoms to create a functional unit
- Should solve a specific UI pattern
- Must maintain atom independence
- Include compound component patterns when appropriate

```typescript
// Example Molecule: FormField
interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

export const FormField = ({ label, error, required, children }: FormFieldProps) => {
  return (
    <div className="space-y-2">
      <Label className={cn(required && "after:content-['*'] after:text-destructive")}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

// Usage
<FormField label="Email" required error={errors.email}>
  <Input type="email" placeholder="Enter your email" />
</FormField>;
```

#### **Organisms** - Complex Component Groups

More complex UI components composed of molecules and atoms.

**Examples:**

- `Header` - Logo + Navigation + User menu
- `ProductCard` - Image + Details + Actions
- `DataTable` - Headers + Rows + Pagination
- `CommentSection` - Comment list + Form
- `Dashboard` - Charts + Stats + Actions
- `Hero` - Heading + Description + CTA buttons

**Guidelines:**

- Combine molecules and atoms to create substantial interface sections
- Should represent distinct sections of an interface
- Can contain business logic and state management
- Should be composable and configurable

```typescript
// Example Organism: ProductCard
interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
    inStock: boolean;
  };
  onAddToCart: (productId: string) => void;
  onViewDetails: (productId: string) => void;
}

export const ProductCard = ({ product, onAddToCart, onViewDetails }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-square relative">
        <img src={product.image} alt={product.name} className="object-cover w-full h-full" />
        {!product.inStock && (
          <Badge variant="destructive" className="absolute top-2 right-2">
            Out of Stock
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-muted-foreground text-sm">{product.description}</p>
          <p className="text-2xl font-bold">${product.price}</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => onViewDetails(product.id)} className="flex-1">
            View Details
          </Button>
          <Button onClick={() => onAddToCart(product.id)} disabled={!product.inStock} className="flex-1">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};
```

#### **Templates** - Page-Level Layouts

Wireframe-level components that define the overall page structure.

**Examples:**

- `PageLayout` - Header + Main + Footer
- `DashboardLayout` - Sidebar + Content + Header
- `AuthLayout` - Centered form container
- `BlogLayout` - Article + Sidebar
- `CheckoutLayout` - Steps + Form + Summary

**Guidelines:**

- Focus on content structure, not specific content
- Should be reusable across multiple pages
- Define consistent spacing and layout patterns
- Include responsive behavior

```typescript
// Example Template: DashboardLayout
interface DashboardLayoutProps {
  sidebar: React.ReactNode;
  header: React.ReactNode;
  children: React.ReactNode;
}

export const DashboardLayout = ({ sidebar, header, children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="grid grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
        <aside className="border-r border-border">{sidebar}</aside>
        <div className="flex flex-col">
          <header className="border-b border-border">{header}</header>
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};
```

#### **Pages** - Complete Interface Views

Specific instances of templates with actual content.

**Examples:**

- `HomePage` - Marketing landing page
- `ProductDetailPage` - Product information view
- `UserDashboard` - User's personalized dashboard
- `LoginPage` - Authentication form
- `CheckoutPage` - Purchase flow

**Guidelines:**

- Implement specific business requirements
- Combine templates with real data
- Handle page-specific logic and state
- Include SEO and accessibility considerations

### 🎯 Component Development Guidelines

#### **Naming Conventions**

```
atoms/        → Button, Input, Label, Icon
molecules/    → FormField, SearchBox, UserProfile
organisms/    → Header, ProductGrid, CommentSection
templates/    → PageLayout, DashboardLayout
pages/        → HomePage, ProductPage, CheckoutPage
```

#### **File Structure**

```
libs/shared/ui/src/lib/components/
├── atoms/
│   ├── button/
│   │   ├── button.tsx
│   │   ├── button.stories.tsx
│   │   ├── button.spec.tsx
│   │   └── index.ts
│   └── index.ts
├── molecules/
│   ├── form-field/
│   │   ├── form-field.tsx
│   │   ├── form-field.stories.tsx
│   │   ├── form-field.spec.tsx
│   │   └── index.ts
│   └── index.ts
├── organisms/
│   └── ...
├── templates/
│   └── ...
└── index.ts
```

#### **Component Composition Rules**

1. **Atoms** should never import other atoms
2. **Molecules** can import atoms only
3. **Organisms** can import atoms and molecules
4. **Templates** can import atoms, molecules, and organisms
5. **Pages** can import any component level

#### **Testing Strategy by Level**

```typescript
// Atom Testing - Focus on props and variants
describe('Button Atom', () => {
  it('renders all variants correctly', () => {
    // Test each variant
  });
  it('handles disabled state', () => {
    // Test disabled behavior
  });
});

// Molecule Testing - Focus on component integration
describe('FormField Molecule', () => {
  it('displays error messages correctly', () => {
    // Test error display
  });
  it('handles required field indicator', () => {
    // Test required logic
  });
});

// Organism Testing - Focus on user interactions
describe('ProductCard Organism', () => {
  it('handles add to cart flow', () => {
    // Test full user interaction
  });
  it('displays out of stock state', () => {
    // Test business logic
  });
});
```

#### **Storybook Organization**

```typescript
// Button.stories.tsx
export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Basic button atom with multiple variants and sizes.',
      },
    },
  },
};

// FormField.stories.tsx
export default {
  title: 'Molecules/FormField',
  component: FormField,
  parameters: {
    docs: {
      description: {
        component: 'Complete form field molecule with label, input, and error handling.',
      },
    },
  },
};
```

### 🚀 Benefits of Atomic Design

1. **Consistency**: Reusing atoms ensures visual consistency
2. **Efficiency**: Build complex UIs faster with proven components
3. **Maintainability**: Changes cascade naturally through the hierarchy
4. **Testing**: Easier to test smaller, focused components
5. **Documentation**: Clear organization makes components discoverable
6. **Collaboration**: Designers and developers share common vocabulary

### 📋 Component Checklist

Before marking a component complete, ensure it meets these criteria:

#### **All Components:**

- [ ] Follows TypeScript best practices
- [ ] Includes comprehensive prop types
- [ ] Uses CSS variables for theming
- [ ] Implements proper accessibility (WCAG)
- [ ] Has unit tests with good coverage
- [ ] Includes Storybook documentation
- [ ] Supports all required variants
- [ ] Handles edge cases gracefully

#### **Atoms:**

- [ ] Works in complete isolation
- [ ] Has no dependencies on other atoms
- [ ] Implements all design system tokens
- [ ] Includes proper focus states
- [ ] Supports keyboard navigation

#### **Molecules:**

- [ ] Demonstrates clear atomic composition
- [ ] Maintains atom independence
- [ ] Includes compound component patterns where appropriate
- [ ] Handles internal state management
- [ ] Provides clear APIs

#### **Organisms:**

- [ ] Implements complex business logic
- [ ] Handles multiple interaction patterns
- [ ] Includes proper loading states
- [ ] Manages error boundaries
- [ ] Supports customization through props

### 🔄 Component Lifecycle

1. **Design** → Create designs with atomic thinking
2. **Audit** → Check if atoms/molecules exist
3. **Build** → Create missing pieces bottom-up
4. **Test** → Unit + integration + visual testing
5. **Document** → Storybook + usage examples
6. **Review** → Peer review + design approval
7. **Deploy** → Publish to shared library
8. **Monitor** → Track usage and performance

---

## Benefits of This Approach:

1. **Loose Coupling**: Apps can have completely different themes
2. **Flexibility**: Each app controls its own design system
3. **Maintainability**: Changes to shared components don't break app themes
4. **Scalability**: Easy to add new apps with different branding

## How It Works:

```typescript
// Shared component uses CSS variables
const buttonVariants = cva(
  "bg-primary text-primary-foreground", // Uses CSS variables
  { variants: { ... } }
)

// Each app defines its own CSS variables
:root {
  --primary: 222.2 47.4% 11.2%;        /* App-specific blue */
  --primary-foreground: 210 40% 98%;
}

// Different app can use different values
:root {
  --primary: 0 84% 60%;                /* App-specific red */
  --primary-foreground: 0 0% 100%;
}
```

## Migration Path:

If you want shared design tokens across apps, create a separate package:

- `@metaba-platform/design-tokens` - exports CSS variables, color palettes, etc.
- Apps can import and extend these tokens as needed
- Components remain decoupled from specific configurations

## Testing the UI Library

The shared UI library includes comprehensive testing setup:

### Available Test Scripts:

- `pnpm run test:ui` - Run Jest tests for the UI library
- `pnpm run lint:ui` - Run ESLint for code quality
- `pnpm run build:ui` - Build the component library

### Testing Setup:

- **Jest** with `jsdom` environment for React component testing
- **@testing-library/jest-dom** for enhanced matchers
- **SWC** for fast TypeScript/JSX compilation
- **Component testing** with proper React 19 support

### Testing Components:

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
```

### Test Configuration:

The UI library uses a dedicated Jest configuration that:

- Transforms JSX/TSX files with SWC
- Provides proper React testing environment
- Supports CSS variables and Tailwind classes
