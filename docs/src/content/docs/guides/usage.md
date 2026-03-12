---
title: Usage
description: How to use the tailwindcss-visibility plugin utilities.
---

## Content Visibility Classes

-   `content-auto`: Enables `content-visibility: auto` optimization. Renders content only when it approaches the viewport.
-   `content-hidden`: Sets `content-visibility: hidden`. Hides content while preserving size.
-   `content-visible`: Sets `content-visibility: visible`. Forces content to remain visible (default behavior).

```html
<div class="content-auto">
    <!-- Content here will be optimized -->
</div>
```

## Size Hint Classes

Predefined size hints sets the `contain-intrinsic-size` property.

-   `size-hint-sm`: `300px` (default)
-   `size-hint-md`: `500px` (default)
-   `size-hint-lg`: `800px` (default)

Arbitrary values (uses JIT brackets):

-   `size-hint-[200px]`
-   `size-hint-[20rem]`
-   `size-hint-[50vh]`

```html
<div class="content-auto size-hint-md">
    <!-- Content with medium size hint -->
</div>
```

## Use Cases

### 1. Long Scrolling Pages

Optimize rendering performance for long pages with multiple sections:

```html
<article class="content-auto size-hint-md">
    <h2>Section Title</h2>
    <p>Content...</p>
</article>
```

### 2. Image Galleries

Prevent layout shifts in image galleries:

```html
<div class="grid grid-cols-3 gap-4">
    <div class="content-auto size-hint-[200px]">
        <img src="image1.jpg" alt="Gallery image" />
    </div>
    <!-- More gallery items -->
</div>
```

### 3. Accordion Sections

Optimize hidden content in accordions:

```html
<div class="content-hidden">
    <p>Collapsed accordion content...</p>
</div>
```
