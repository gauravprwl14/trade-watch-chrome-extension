# Folder Structure Documentation

This document outlines the folder structure for a modern application, including descriptions and examples for UI, components, modules, core utilities, and other essential parts.

---

## General Guidelines

1. **Separation of Concerns**: Organize files and folders by functionality to ensure clarity and maintainability.
2. **Consistent Naming**: Use clear, concise, and consistent naming conventions for all files and folders.
3. **Modularity**: Group related components, utilities, and services together for easy reusability.

---

## Folder Structure Overview

```
src/
├── ui/                  # Design system and shared UI elements
│  ├── components/       # Reusable UI components
├── modules/             # Feature-specific modules
├── core/                # Core utilities and global configurations
│   ├── constants/       # Global constants
│   ├── hooks/           # Custom hooks
│   ├── utils/           # Utility functions and helpers
├── app
│   ├── pages/               # Next.js routing and pages
├── public/              # Static assets (images, fonts, etc.)
└── styles/              # Global and scoped styles
```

---

## Folder Descriptions

### 1. `components/`

This folder contains **reusable UI components** that are not tied to any specific feature or module.

**Structure:**

```
components/
├── primitives/          # Basic UI elements (Button, Input, etc.)
├── composites/          # Complex components (Card, Modal, etc.)
├── layout/              # Layout components (Header, Footer, Sidebar)
└── index.ts             # Export all components
```

**Example:**

- `primitives/Button.tsx`: A reusable button component.
- `layout/Footer.tsx`: A site-wide footer component.

---

### 2. `modules/`

This folder contains **feature-specific logic** organized into isolated modules.

**Structure:**

```
modules/
├── user/
│   ├── components/      # Components specific to the User module
│   ├── services/        # API calls and business logic
│   ├── hooks/           # Custom hooks related to User
│   ├── constants/       # Constants specific to the User module
│   └── index.ts         # Consolidated export
├── dashboard/
│   ├── components/
│   ├── services/
│   ├── hooks/
│   ├── constants/
│   └── index.ts
```

**Example:**

- `modules/user/components/UserCard.tsx`: A component for displaying user information.
- `modules/user/services/userService.ts`: API calls for user-related actions.

---

# Core Folder Documentation

The `core/` folder contains the foundational utilities, configurations, and services that are shared across the entire application. This folder centralizes the logic required to maintain consistency and reusability.

---

## Structure of the `core/` Folder

```
core/
├── config/              # Configuration files (e.g., Sentry, API config)
│   ├── sentry.ts        # Sentry setup and initialization
│   └── index.ts         # Export all configurations
├── constants/           # Application-wide constants
│   ├── env.ts           # Environment-specific constants
│   ├── app.ts           # App-specific constants
│   └── index.ts         # Export all constants
├── hooks/               # Global React hooks
│   ├── useAuth.ts       # Authentication hook
│   ├── useTheme.ts      # Theme management hook
│   └── index.ts         # Export all hooks
├── services/            # Core services for business logic
│   ├── authService.ts  # Authentication-related business logic
│   ├── api.ts           # API client configuration (e.g., Axios)
│   └── index.ts         # Export all services
├── utils/               # Shared utility functions
│   ├── dateUtils.ts     # Date formatting and manipulation
│   ├── stringUtils.ts   # String manipulation helpers
│   └── index.ts         # Export all utilities
└── index.ts             # Consolidated export for the `core/` folder
```

---

## Folder Descriptions

### 1. `config/`

This folder contains **application configurations** for various tools and libraries, such as Sentry, API clients, and other integrations.

**Examples:**

- `config/sentry.ts`: Initializes and configures Sentry for error tracking.
- `config/api.ts`: Configures Axios or other API clients.

**Example: `config/sentry.ts`**

```typescript
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
});

export default Sentry;
```

---

### 2. `constants/`

This folder contains **global constants** that are used throughout the application.

**Examples:**

- `constants/env.ts`: Contains environment-specific constants.
- `constants/app.ts`: Contains app-level constants like default settings.

**Example: `constants/app.ts`**

```typescript
export const APP_NAME = 'MyApplication';
export const MAX_RETRY_COUNT = 3;
```

---

### 3. `hooks/`

This folder contains **global React hooks** that provide reusable logic across the app.

**Examples:**

- `hooks/useAuth.ts`: Manages user authentication state.
- `hooks/useTheme.ts`: Handles theme switching and management.

**Example: `hooks/useAuth.ts`**

```typescript
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

export function useAuth() {
  return useContext(AuthContext);
}
```

---

### 4. `services/`

This folder contains **core services** that encapsulate business logic or external service integration.

**Examples:**

- `services/authService.ts`: Contains authentication-related business logic.
- `services/loggingService.ts`: Handles centralized logging.

**Example: `services/authService.ts`**

```typescript
export async function login(username: string, password: string) {
  const response = await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}
```

---

### 5. `utils/`

This folder contains **utility functions** that are generic and reusable.

**Examples:**

- `utils/dateUtils.ts`: Contains functions for formatting and manipulating dates.
- `utils/stringUtils.ts`: Provides string manipulation helpers.

**Example: `utils/dateUtils.ts`**

```typescript
export function formatDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
```

---

## Example `core/` Exports

To simplify imports, include an `index.ts` file that consolidates all exports.

**Example: `core/index.ts`**

```typescript
export * from './config';
export * from './constants';
export * from './hooks';
export * from './services';
export * from './utils';
```

---

## Key Benefits of `core/`

1. **Centralized Logic**: Consolidates shared logic and configurations.
2. **Reusability**: Provides reusable hooks, services, and utilities.
3. **Consistency**: Ensures uniform configurations across the application.

This structure ensures that your application’s foundational logic is well-organized, scalable, and easy to maintain.

### 3. `core/`

**Structure:**

```
core/
├── logger.ts            # Logging utility
├── api.ts               # API client setup (e.g., Axios configuration)
├── auth/                # Authentication logic and helpers
├── store/               # Global state management (e.g., Redux/Zustand)
└── index.ts             # Consolidated export of core utilities
```

**Example:**

- `core/logger.ts`: Singleton logger for error and info logs.
- `core/api.ts`: Centralized API configuration.

---

### 4. `ui/`

This folder contains **design system components** and **theming utilities**.

**Structure:**

```
ui/
├── tokens/              # Design tokens (colors, typography, spacing)
├── themes/              # Theming logic and configurations
├── components/          # Atoms, molecules, and organisms
└── index.ts             # Consolidated exports for shared UI elements
```

**Example:**

- `ui/tokens/colors.ts`: Color definitions for the design system.
- `ui/components/atoms/Avatar.tsx`: A basic avatar component.

---

### 5. `constants/`

This folder contains **application-wide constants**.

**Structure:**

```
constants/
├── api.ts               # API endpoints
├── roles.ts             # Role definitions
└── index.ts             # Consolidated exports
```

**Example:**

- `constants/api.ts`: Base URLs and API endpoint paths.
- `constants/roles.ts`: User role constants.

---

### 6. `hooks/`

This folder contains **custom hooks** that are shared across the application.

**Structure:**

```
hooks/
├── useAuth.ts           # Authentication hook
├── useWindowSize.ts     # Hook for responsive design
└── index.ts             # Consolidated exports
```

**Example:**

- `hooks/useAuth.ts`: A hook for managing user authentication state.
- `hooks/useWindowSize.ts`: A hook to track window dimensions.

---

### 7. `utils/`

This folder contains **utility functions** that are generic and reusable.

**Structure:**

```
utils/
├── formatters/          # Formatters for dates, numbers, etc.
├── validators/          # Validation logic
└── index.ts             # Consolidated exports
```

**Example:**

- `utils/formatters/formatDate.ts`: Function to format date strings.
- `utils/validators/isEmailValid.ts`: Function to validate email addresses.

---

### 8. `pages/`

This folder contains **Next.js routing and pages**.

**Structure:**

```
pages/
├── index.tsx            # Home page
├── about.tsx            # About page
├── api/                 # API routes
└── _app.tsx             # Custom App component
```

**Example:**

- `pages/index.tsx`: Entry point for the home page.
- `pages/api/auth.ts`: API route for authentication.

---

### 9. `public/`

This folder contains **static assets** like images, fonts, and icons.

**Structure:**

```
public/
├── images/              # Image files
├── fonts/               # Font files
└── favicon.ico          # Favicon for the site
```

**Example:**

- `public/images/logo.png`: Logo image for the application.
- `public/fonts/Roboto.ttf`: Font files for custom typography.

---

### 10. `styles/`

This folder contains **global and scoped styles**.

**Structure:**

```
styles/
├── globals.css          # Global styles for the app
├── variables.css        # CSS variables for theming
└── index.css            # Entry point for styles
```

**Example:**

- `styles/globals.css`: Global CSS rules.
- `styles/variables.css`: CSS variables for theming and spacing.

---

This folder structure ensures scalability, maintainability, and clarity across your application. Use this as a reference when organizing your project.
