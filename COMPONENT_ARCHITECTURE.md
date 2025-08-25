# HouseCall MD - Component Architecture

## Overview
This project follows a scalable, component-based architecture designed for easy maintenance and expansion.

## Directory Structure

```
src/app/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI components (Button, Input, etc.)
│   │   └── Button.jsx
│   └── Hero.jsx        # Page-specific components
├── constants/          # Application constants and configuration
│   └── navigation.js   # Navigation items, features, etc.
├── layout/             # Layout components
│   └── Navbar.jsx      # Main navigation
└── page.js             # Main page component
```

## Key Components

### 1. Navbar Component (`src/app/layout/Navbar.jsx`)
- **Features**: Responsive design, mobile menu, scroll effects
- **Scalability**: Uses constants from `navigation.js` for menu items
- **Props**: None (self-contained)
- **Dependencies**: `lucide-react`, `Button` component

### 2. Hero Component (`src/app/components/Hero.jsx`)
- **Features**: Full-screen hero section with gradient background
- **Scalability**: Uses constants for features and trust indicators
- **Props**: None (self-contained)
- **Dependencies**: `lucide-react`, `Button` component

### 3. Button Component (`src/app/components/ui/Button.jsx`)
- **Features**: Multiple variants, sizes, icons, link/button support
- **Props**:
  - `variant`: 'primary' | 'secondary' | 'outline' | 'ghost'
  - `size`: 'sm' | 'md' | 'lg'
  - `href`: For link functionality
  - `icon`: React component for icon
  - `disabled`: Boolean
  - `onClick`: Function
- **Scalability**: Highly reusable across the application

## Constants System

### Navigation Constants (`src/app/constants/navigation.js`)
```javascript
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // ... more items
];

export const HERO_FEATURES = [
  {
    icon: 'Heart',
    title: 'Personalized Care',
    description: 'Tailored healthcare plans for each patient'
  },
  // ... more features
];

export const TRUST_INDICATORS = [
  'Licensed & Insured',
  'Same Day Appointments',
  // ... more indicators
];
```

## Scalability Features

### 1. Component Reusability
- **Button Component**: Single source of truth for all buttons
- **Constants**: Centralized configuration for easy updates
- **Icon System**: Consistent icon usage with lucide-react

### 2. Responsive Design
- **Mobile-first approach**: All components work on mobile
- **Breakpoint system**: Uses Tailwind CSS breakpoints
- **Flexible layouts**: Grid and flexbox for adaptive designs

### 3. Performance Optimization
- **Client-side components**: Only where interactivity is needed
- **Lazy loading**: Ready for image optimization
- **Minimal dependencies**: Only essential packages

### 4. Maintainability
- **Clear separation of concerns**: UI, logic, and data separated
- **Consistent naming**: Follows React conventions
- **Documentation**: Each component is self-documenting

## How to Extend

### Adding New Pages
1. Create new page in `src/app/`
2. Add navigation item to `NAVIGATION_ITEMS`
3. Use existing components for consistency

### Adding New Components
1. Create in appropriate directory (`ui/` for base components)
2. Follow existing patterns (props, styling, documentation)
3. Export and import where needed

### Modifying Styles
1. Use Tailwind CSS classes for consistency
2. Follow existing color scheme (blue-900, green-500, white)
3. Maintain responsive design principles

### Adding New Features
1. Update constants in `navigation.js`
2. Create new components as needed
3. Follow the established patterns

## Best Practices

1. **Use Constants**: Always use constants for repeated data
2. **Component Composition**: Build complex components from simple ones
3. **Responsive Design**: Test on all screen sizes
4. **Accessibility**: Include proper ARIA labels and keyboard navigation
5. **Performance**: Keep components lightweight and efficient

## Dependencies

- **Next.js 15**: React framework
- **Tailwind CSS 4**: Styling
- **Lucide React**: Icons
- **React 19**: UI library

## Getting Started

1. Install dependencies: `npm install`
2. Run development server: `npm run dev`
3. Open http://localhost:3000

## Future Enhancements

- **Theme System**: Dark/light mode support
- **Animation Library**: Framer Motion integration
- **Form Components**: Reusable form elements
- **Modal System**: Consistent modal/dialog components
- **Loading States**: Skeleton and spinner components
