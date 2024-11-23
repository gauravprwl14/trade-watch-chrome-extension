# Responsive Website Instructions

## Responsive Design Framework

- Use a **mobile-first approach** with frameworks like **Tailwind CSS** or custom media queries.
- Ensure layout and content adapt seamlessly from **320px (small phones)** to **2560px (ultra-wide screens)**.

## Viewport Meta Tag

Include the meta tag to control the page's dimensions and scaling on mobile devices:

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

## Flexible Grid System

- Implement a flexible grid system using Flexbox for columns and rows.
- Use percentage-based widths and avoid fixed units.

## Optimized Images

- Use responsive image attributes (`srcset` and `sizes`) to serve appropriately sized images.
- Compress images using WebP or AVIF formats for smaller file sizes.

## Font and Typography Scaling

- Utilize relative font units (`em`, `rem`, `%`) and `clamp()` for responsive scaling.
- Ensure consistent line-height and readability across devices.

## Touch-Friendly Elements

- Minimum size of 48px by 48px for buttons, links, and inputs (per Google’s guidelines).
- Add sufficient spacing between tappable elements.

## Performance Optimization

- Minimize render-blocking resources (e.g., defer JavaScript, use async loading for scripts).
- Leverage Content Delivery Networks (CDN) for faster asset delivery.
- Optimize CSS for critical path rendering.

## Dark Mode Support

- Utilize CSS framework-specific features or CSS media queries to provide dark mode.

## Advanced Accessibility

- Implement ARIA roles and ensure WCAG compliance.
- Features like keyboard navigation, screen reader support, and high-contrast modes.

## Avoid

- Fixed Pixel Dimensions: Avoid hardcoding fixed pixel sizes for layouts, images, or fonts.
- Auto-Playing Media: Avoid auto-playing videos or audio without user consent.
