# Vembric — API Documentation Template

Vembric is a premium, developer-first API documentation template built using the Next.js App Router, React, Tailwind CSS, and shadcn/ui. It is designed to help developers build and deploy polished, interactive, and customizable API references in minutes.

The entire application runs in a high-fidelity **dark-mode-only** theme and uses a code-centric font system powered by JetBrains Mono to deliver a clean, modern aesthetic out of the box.

---

## Architecture & Codebase Design

Vembric separates structural layout and presentation components from actual documentation prose and endpoint schemas. This makes the template extremely easy to customize or back with a database/CMS in the future.

### Key Directories and Files

- **[app/](file:///Users/d/Downloads/vembric/app)**: Contains all Next.js page routes, layouts, and global styles.
  - [app/page.tsx](file:///Users/d/Downloads/vembric/app/page.tsx): The home (dashboard) page which provides a landing area with navigation cards and feature grids.
  - [app/[resource]/[action]/page.tsx](file:///Users/d/Downloads/vembric/app/%5Bresource%5D/%5Baction%5D/page.tsx): A dynamic, statically-generated route that processes and renders documentation pages for CRUD endpoints automatically.
  - [app/globals.css](file:///Users/d/Downloads/vembric/app/globals.css): Main stylesheet defining Tailwind CSS v4 variables, theme configurations, and custom utility base rules.
- **[components/](file:///Users/d/Downloads/vembric/components)**: Core React components divided into contextual subfolders:
  - `ui/`: Raw shadcn/ui components (Radix UI primitives).
  - `api-doc/`: Components specific to endpoint rendering (e.g., parameter schema tables, syntax-highlighted curl/js code block tabs, and mock JSON response boxes).
  - `dashboard/`: Sections displayed exclusively on the homepage (hero sections, quick navigations, etc.).
  - `doc/`: General layout helpers like custom list bullets, warning/info containers, and section wrappers.
  - `kibo-ui/`: Custom UX blocks such as the interactive [Snippet](file:///Users/d/Downloads/vembric/components/kibo-ui/snippet/index.tsx) wrapper.
- **[constants/](file:///Users/d/Downloads/vembric/constants)**: **The single source of truth** for all copy, schemas, and brand tokens. No strings are hardcoded in views.
  - [brand.ts](file:///Users/d/Downloads/vembric/constants/brand.ts): Contains global variables like API names, domains, signature headers, support emails, and SDK package keys.
  - [page-content.ts](file:///Users/d/Downloads/vembric/constants/page-content.ts): Houses prose for guides (Introduction, Quick Start, Webhooks, Errors, Best Practices, FAQs).
  - [code-snippets.ts](file:///Users/d/Downloads/vembric/constants/code-snippets.ts): Stores static snippets and requests that reference dynamic brand variables.
  - [api-docs.ts](file:///Users/d/Downloads/vembric/constants/api-docs.ts): Configures all active API endpoints, resources (e.g., Games and Orders), parameters, payload schemas, and response mocks.
  - [sidebar-data.ts](file:///Users/d/Downloads/vembric/constants/sidebar-data.ts): Structures the sidebar navigation order and matches icons to resources.
- **[hooks/](file:///Users/d/Downloads/vembric/hooks)**:
  - [use-api-version-store.ts](file:///Users/d/Downloads/vembric/hooks/use-api-version-store.ts): A Zustand store that persists the user's active API version (e.g., `v1` vs. `v2`) in local storage.
- **[lib/](file:///Users/d/Downloads/vembric/lib)**: Font configurations (JetBrains Mono and Geist Mono in [fonts.ts](file:///Users/d/Downloads/vembric/lib/fonts.ts)) and class merging utilities.

---

## Advanced Features

### 1. Persistent API Versioning
Vembric supports global version switching (e.g., switching between `v1` and `v2`). The state is managed via [use-api-version-store.ts](file:///Users/d/Downloads/vembric/hooks/use-api-version-store.ts) and the visual dropdown [version-selector.tsx](file:///Users/d/Downloads/vembric/components/version-selector.tsx) inside the sidebar. Switching versions automatically propagates across the application:
- Dynamically shifts request URIs in code samples (e.g. `/v1/games` becomes `/v2/games`).
- Updates schema parameter tables (e.g., showing new fields like `rating` or `price` in `v2` Games).
- Updates return JSON payloads immediately without page refreshes.

### 2. Zero-Maintenance Dynamic Routes
CRUD endpoints are fully automated. When you register a new resource in [api-docs.ts](file:///Users/d/Downloads/vembric/constants/api-docs.ts), Vembric builds standard endpoints (`List`, `Create`, `Edit`, `Update`, `View`, `Delete`) using `buildCrudActions`. 
The dynamic route [app/[resource]/[action]/page.tsx](file:///Users/d/Downloads/vembric/app/%5Bresource%5D/%5Baction%5D/page.tsx) maps the resource name and action slug, and uses `generateStaticParams()` to pre-render the pages at build time.

---

## How to Customize Vembric

All content modifications must be done inside the `constants/` folder to maintain separation of concerns.

### 1. Update Brand & SDK Details
Open [brand.ts](file:///Users/d/Downloads/vembric/constants/brand.ts) to edit:
- Brand name and description
- Base API and dashboard settings paths
- Package installation commands for SDK languages (npm, pip, gem, go)

### 2. Add or Edit Guides
Open [page-content.ts](file:///Users/d/Downloads/vembric/constants/page-content.ts) to update text for sections like introduction, rate limiting, and webhooks.

### 3. Add a New API Resource
To add a new endpoint resource (e.g., `customers` or `billing`):
1. Define the model fields and parameters in [api-docs.ts](file:///Users/d/Downloads/vembric/constants/api-docs.ts) and feed them into `buildCrudActions()`.
2. Add the resource name and a Lucide icon inside [sidebar-data.ts](file:///Users/d/Downloads/vembric/constants/sidebar-data.ts) under `resourceIcons`.
3. The dynamic routing engine takes care of generation automatically.

---

## Development Commands

Vembric uses **pnpm** as its package manager. **Do not use npm or yarn in this repository.**

```bash
pnpm install  # Install dependencies
pnpm dev      # Start development server with Turbopack at http://localhost:3000
pnpm build    # Create production build (statically generates routes)
pnpm lint     # Run ESLint to verify code quality and style
```

## Stack Summary

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS v4 (configured inside [globals.css](file:///Users/d/Downloads/vembric/app/globals.css))
- **UI Components**: shadcn/ui primitives ([components/ui/](file:///Users/d/Downloads/vembric/components/ui)) with Radix UI under the hood
- **Icons**: lucide-react
- **Fonts**: JetBrains Mono via Google Fonts
