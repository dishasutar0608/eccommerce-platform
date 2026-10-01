# Lumin Storefront

A modern e-commerce storefront built with React, TypeScript, and Vite. The app includes product browsing, filtering, cart management, checkout flow, authentication screens, and an order confirmation experience.

## Features

- Product catalog with search and sorting
- Category and price filtering
- Product detail page
- Shopping cart with quantity controls
- Checkout form with validation
- Login and registration flow
- Order success confirmation screen
- Responsive, modern storefront design

## Tech Stack

- React
- TypeScript
- Vite
- React Router DOM
- Lucide React
- Tailwind CSS

## Project Structure

```bash
.
├── src/
│   ├── components/
│   ├── context/
│   ├── data/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── README.md
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Production Build

To build the project for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Available Scripts

```bash
npm run dev      # start the Vite development server
npm run build    # type-check and create a production build
npm run preview  # preview the production build locally
npm run lint     # run ESLint checks
```

## Notes

- The app uses demo authentication and cart state stored in context.
- Checkout is a front-end demo flow and does not process real payments.
- Products are seeded from the local product data module in `src/data/products.ts`.

## License

This project is for educational/demo purposes.
