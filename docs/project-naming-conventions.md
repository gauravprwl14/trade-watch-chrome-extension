# Naming Conventions for Projects

This document provides comprehensive naming conventions for various components of a project to ensure clarity, consistency, and maintainability.

## General Guidelines

1. **Use Lowercase and Hyphens for Folders**: Avoid spaces and underscores.
2. **Use PascalCase for Components and Classes**: Ensure consistency for React and TypeScript components.
3. **Use camelCase for Variables and Functions**: Maintain JavaScript/TypeScript idioms.
4. **Constants in UPPER_SNAKE_CASE**: For global, unchanging values.
5. **TypeScript Interfaces and Types in PascalCase**: Align with TypeScript conventions.

---

## 1. Constants

Use **UPPER_SNAKE_CASE** for constants.

### Naming Pattern:

```
CONSTANT_NAME
```

### Examples:

```typescript
export const API_BASE_URL = 'https://api.example.com';
export const MAX_RETRY_COUNT = 3;
export const DEFAULT_USER_ROLE = 'guest';
```

---

## 2. Functions

Use **camelCase** for function names. Use descriptive names starting with a verb.

### Naming Pattern:

```
verbNoun()
```

### Examples:

```typescript
function fetchUserData() { ... }
function calculateDiscount(price: number) { ... }
function isValidEmail(email: string): boolean { ... }
```

---

## 3. Variables

Use **camelCase** for variables, and prefer meaningful, descriptive names.

### Naming Pattern:

```
camelCaseVariable
```

### Examples:

```typescript
const userName = 'John Doe';
let retryCount = 0;
const isAuthenticated = false;
```

---

## 4. Folder Names

Use **lowercase-hyphen** for folder names. Ensure folder names are short and describe their purpose.

### Naming Pattern:

```
lowercase-hyphen
```

### Examples:

```
components/
services/
constants/
utils/
hooks/
```

---

## 5. Folder Names for Components

Use **lowercase-hyphen** for folders containing components. Group related components into their respective folders.

### Naming Pattern:

```
lowercase-hyphen
```

### Examples:

```
button/
header/
footer/
user-profile/
dashboard/
```

---

## 6. Component Names

Use **PascalCase** for React components or other UI components. Ensure the names are descriptive.

### Naming Pattern:

```
PascalCase
```

### Examples:

```typescript
const UserProfile = () => { ... }
const DashboardHeader = () => { ... }
export default UserProfile;
```

---

## 7. TypeScript Naming

Use **PascalCase** for TypeScript interfaces, types, and enums.

### Naming Pattern:

```
PascalCase
```

### Examples:

```typescript
// Interfaces
interface User {
  id: string;
  name: string;
  email: string;
}

// Types
type UserRole = 'admin' | 'user' | 'guest';

// Enums
enum LogLevel {
  ERROR = 'error',
  WARN = 'warn',
  INFO = 'info',
  DEBUG = 'debug',
}
```

---

## 8. Utility Files and Folders

Use **lowercase-hyphen** for utility file and folder names. Ensure utility functions are modular and specific.

### Naming Pattern:

```
lowercase-hyphen
```

### Examples:

```
utils/
  format-date.ts
  validate-email.ts
  calculate-tax.ts
```

### Example Utility Function:

```typescript
// utils/format-date.ts
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US').format(date);
}
```

---

## Summary Table

| **Item**              | **Naming Convention** | **Example**                       |
| --------------------- | --------------------- | --------------------------------- |
| Constants             | `UPPER_SNAKE_CASE`    | `MAX_RETRY_COUNT`                 |
| Functions             | `camelCase`           | `fetchUserData`                   |
| Variables             | `camelCase`           | `isAuthenticated`                 |
| Folder Names          | `lowercase-hyphen`    | `components`, `services`          |
| Component Folders     | `lowercase-hyphen`    | `user-profile`, `dashboard`       |
| Component Names       | `PascalCase`          | `UserProfile`, `DashboardHeader`  |
| TypeScript Interfaces | `PascalCase`          | `User`, `Product`                 |
| TypeScript Types      | `PascalCase`          | `UserRole`, `ProductCategory`     |
| Utility Files/Folders | `lowercase-hyphen`    | `format-date.ts`, `calculate-tax` |

---

This naming convention ensures consistency and readability across the codebase. Always refer back to this guide during development.

# Project Naming Conventions

This document outlines the naming conventions for projects to ensure clarity, consistency, and maintainability across all possible scenarios.

## General Guidelines

1. **Consistency**: Use a consistent naming pattern for all projects and related artifacts.
2. **Lowercase Only**: Use only lowercase letters for project names. Separate words with hyphens (`-`).
3. **Meaningful Names**: Names should clearly convey the purpose or functionality of the project.
4. **Avoid Special Characters**: Do not use special characters, spaces, or underscores in project names.
5. **Versioning**: If a project has multiple versions, append the version number (e.g., `project-name-v2`).
6. **Environment-Specific Names**: For environment-specific projects (e.g., development, staging, production), include the environment name.

## Naming Patterns

### 1. Standard Projects

For general-purpose projects, use the following format:

```
<project-name>
```

**Example:**

- `ecommerce-platform`
- `blog-engine`

## Integrating Naming Conventions into README Files

Include the project name and its compliance with this naming convention in the README file:

# <project-name>

This project follows the [naming conventions](naming-conventions.md) for consistent and maintainable project names.

## Project Overview

- **Name**: <project-name>
- **Description**: [Add a brief description of the project]

<!--
### 2. Versioned Projects

For projects with versioning, append the version number:

```
<project-name>-v<version>
```

**Example:**

- `ecommerce-platform-v2`
- `api-gateway-v3`

### 3. Environment-Specific Projects

For projects specific to environments, append the environment name:

```
<project-name>-<environment>
```

**Example:**

- `ecommerce-platform-staging`
- `api-gateway-production`

### 4. White-Label Projects

For white-label solutions, include the client or brand name:

```
<project-name>-<client-name>
```

**Example:**

- `ecommerce-platform-abc-retail`
- `blog-engine-xpress-media`

### 5. Microservices

For microservices, specify the service name:

```
<project-name>-<service-name>
```

**Example:**

- `ecommerce-platform-auth-service`
- `ecommerce-platform-cart-service`

### 6. Experimental or Feature Projects

For experimental or feature-specific projects, include the feature name or prefix with `feature-` or `experiment-`:

```
<project-name>-feature-<feature-name>
<project-name>-experiment-<experiment-name>
```

**Example:**

- `ecommerce-platform-feature-discounts`
- `api-gateway-experiment-graphql`

### 7. Libraries or SDKs

For libraries or SDKs, include the language or framework name:

```
<library-name>-sdk-<language>
<library-name>-lib-<framework>
```

**Example:**

- `ecommerce-platform-sdk-python`
- `ecommerce-platform-lib-react`

### 8. Temporary or Prototype Projects

For temporary projects, include a `temp-` or `prototype-` prefix:

```
temp-<project-name>
prototype-<project-name>
```

**Example:**

- `temp-ecommerce-platform`
- `prototype-api-gateway`

### 9. Shared or Core Modules

For shared modules or core infrastructure:

```
shared-<module-name>
core-<module-name>
```

**Example:**

- `shared-auth-module`
- `core-database` -->
