# Framework Guidelines

## Framework

- Use **Next.js** for its robust features and developer-friendly ecosystem.
- CSS Framework: **Tailwind CSS** with a suitable UI library.
- Use **open-source packages** or frameworks that are industry-standard and widely adopted.

## Feature Flags

Implement a feature flag system to enable or disable features dynamically.

## Error Handling

- Use a **base error class** and extend it to create specific error classes.
- Log errors with appropriate levels (e.g., warning, debug, error).
- Include error codes, categories, and messages, with support for multiple locales.

### Message Key Format

Use the following format for error keys:
`{category}.{subCategory}.{context}.{description}`

#### Rules

1. **Category**: Broad classification of the message type.
   - Examples: `error`, `info`, `warning`, `data`, `success`
2. **SubCategory**: Specific domain or functional area under the category.
   - Examples: `authentication`, `payment`, `validation`
3. **Context**: Unique identifier for the feature or process.
   - Example Rules:
     - Always alphanumeric, use underscores (`_`) or hyphens (`-`) only.
     - Limit to **30 characters** for clarity.
4. **Description**: Brief, human-readable summary.

#### Examples

| Category | SubCategory      | Context        | Description         | Key                                             |
| -------- | ---------------- | -------------- | ------------------- | ----------------------------------------------- |
| `error`  | `authentication` | `VEN1009`      | `invalidSignature`  | `error.authentication.VEN1009.invalidSignature` |
| `error`  | `payment`        | `TIMEOUT`      | `transactionFailed` | `error.payment.TIMEOUT.transactionFailed`       |
| `data`   | `common`         | `countries`    | `usa`               | `data.common.countries.usa`                     |
| `info`   | `user`           | `loginProcess` | `completed`         | `info.user.loginProcess.completed`              |

## Documentation Structure

- Maintain a **clear folder structure** for documentation.
- Include `.md` files describing directory paths and purposes for future reference.

## Components

- Primitive Components: Basic building blocks of UI.
- Composite Components: Complex components built using primitives.

## API Services

- Use **Axios** for API calls.
- Maintain a structured folder for service files.

## Component Organization

- Group components by feature/module in subdirectories.
- Maintain `index.ts` files for clean exports.
- Keep component-specific hooks, types, styles, and tests alongside components.

## Storybook Integration

- Use Storybook for developing and testing UI components in isolation.
