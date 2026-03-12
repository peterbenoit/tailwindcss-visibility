---
title: Installation
description: How to install and setup the tailwindcss-visibility plugin.
---

## Installation

Install via npm:

```bash
npm install tailwindcss-visibility
```

## Setup

Add the plugin to your `tailwind.config.js` or `tailwind.config.mjs`:

```javascript
module.exports = {
    plugins: [require('tailwindcss-visibility')],
    theme: {
        extend: {
            sizeHint: {
                // Optional: Customize default size hints alongside sm, md, lg
                xs: '100px',
                '2xl': '1000px',
                custom: '250px',
            },
        },
    },
};
```
