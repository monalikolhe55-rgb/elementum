# Elementum — React Website

A fully responsive single-page website built with **React + Vite + JavaScript**, matching the Figma design.

## Folder Structure

```
elementum/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css          ← Design tokens & global styles
    └── components/
        ├── Navbar.jsx / .css   ← Sticky nav with mobile hamburger menu
        ├── Hero.jsx / .css     ← Hero with avatar cluster & blob animations
        ├── About.jsx / .css    ← "Tomorrow should be better than today"
        ├── Progress.jsx / .css ← "See how we can help you progress"
        ├── Services.jsx / .css ← "What we can offer you!" accordion rows
        ├── Testimonials.jsx / .css ← Interactive testimonials carousel
        ├── Newsletter.jsx / .css  ← Subscribe section with validation
        └── Footer.jsx / .css   ← 4-column footer
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build
```

## Features

- ✅ Pixel-accurate to design screenshot
- ✅ Fully responsive: mobile / tablet / desktop
- ✅ Reusable components with separate CSS files
- ✅ Flexbox + CSS Grid + Media Queries
- ✅ `map()` for all repeating cards/items
- ✅ SVG decorative shapes (leaf, triangles, squiggles, blobs)
- ✅ Smooth hover effects & CSS transitions
- ✅ Mobile hamburger navigation
- ✅ Interactive testimonials with dot navigation
- ✅ Newsletter with email validation
- ✅ Semantic HTML & ARIA attributes
- ✅ Google Fonts (DM Serif Display + DM Sans)
