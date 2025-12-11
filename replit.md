# Erick da Silva - Portfolio

## Overview

Personal portfolio website for a front-end freelance developer. Built with React + Vite (pure JavaScript, no TypeScript). Features 4 color themes with light/dark mode support.

## Project Structure

```
client/
  index.html
  src/
    assets/          - Images (project photos)
    components/      - Reusable components
    sections/        - Page sections (Home)
    styles/          - CSS files
      index.css
    App.jsx          - Main app with ThemeProvider
    main.jsx         - Entry point
```

## Configuration Files

- `vite.config.js` - Vite build configuration
- `tailwind.config.js` - Tailwind CSS (ES Module)
- `postcss.config.js` - PostCSS configuration
- `vercel.json` - Vercel deployment config

## Path Aliases

- `@` → `./client/src`
- `@assets` → `./client/src/assets`
- `@components` → `./client/src/components`
- `@sections` → `./client/src/sections`

## Commands

```bash
# Development
npm run dev

# Build
npm run build

# Preview
npm run preview
```

## Theming

- 4 colors: Blue, Red, Green, Purple
- Light/Dark mode toggle
- Theme stored in localStorage

## Contact Links

- WhatsApp: 5593984101261
- Instagram: @erickdasilva.dev
