# Code Guidelines

## TypeScript Usage

- Enable **strict type checking**.
- Prefer **interfaces** over types for large objects.
- Use **generic constraints** where applicable.

## Component Structure

- Keep **one component per file**.
- Define clear props using interfaces.
- Separate large types into a dedicated file (>50 lines).

## Security Practices

- Input sanitization.
- Prevent **XSS** and **CSRF** attacks.
- Implement a robust **Content Security Policy**.

## Accessibility

- Ensure **WCAG compliance**.
- Provide **keyboard navigation** and **screen reader support**.
- Manage focus for seamless navigation.

## Avoided Practices

- No deprecated APIs.
- Avoid experimental features in production.
- No direct database access from the frontend.
