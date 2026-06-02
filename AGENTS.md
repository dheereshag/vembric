# Vembric — Agent Instructions

Vembric is a Next.js API documentation template. The goal is to make it easy for developers to ship polished, customizable API docs.

## Commands

```bash
pnpm dev      # dev server with Turbopack at http://localhost:3000
pnpm build    # production build
pnpm lint     # ESLint
```

Package manager: **pnpm** (never use npm or yarn in this repo).

## Stack

- **Next.js 16** App Router, React 19, TypeScript (strict)
- **Tailwind CSS v4** — utility classes only, no inline styles
- **shadcn/ui** (`components/ui/`) — Radix UI primitives, do not replace with other libraries
- **lucide-react** — icon library; use existing icons before adding new ones
- App is **dark-mode only** (`<html className="dark">` in `app/layout.tsx`)

## Architecture

```
app/                        # Next.js App Router pages (default exports)
  [resource]/[action]/      # Dynamic API doc pages — DO NOT edit manually
  page.tsx                  # Home (dashboard)
components/
  ui/                       # shadcn/ui primitives — avoid editing directly
  api-doc/                  # Sub-components for ApiDocPage
  dashboard/                # Home page sections
  doc/                      # Reusable doc page building blocks
constants/                  # ALL content/data lives here — single source of truth
  brand.ts                  # Brand strings, URLs, SDK names — always import from here
  page-content.ts           # Page text content
  code-snippets.ts          # Code examples (reference brand.ts, not raw strings)
  api-docs.ts               # API endpoint definitions
  sidebar-data.ts           # Navigation structure
  index.ts                  # Barrel exports for constants
lib/                        # fonts.ts, utils.ts, request-type.ts
hooks/                      # Custom React hooks
```

## Key Conventions

### Content — always use constants
- **Never hardcode** brand names, URLs, SDK names, or page text in components.  
  Import from `constants/brand.ts` or `constants/page-content.ts`.
- Code snippet strings belong in `constants/code-snippets.ts` and must reference `brand` for any variable parts.

### Components
- Named exports for all components (`export function Foo`); default exports only for `app/` pages.
- Client components must have `"use client"` as the first line.
- Path alias `@/` maps to the workspace root — always use it (never relative `../../`).

### Adding a new API resource
1. Define the resource in `constants/api-docs.ts` using `buildCrudActions()`.
2. Add an icon mapping in `constants/sidebar-data.ts` → `resourceIcons`.
3. The dynamic route `app/[resource]/[action]/page.tsx` + `generateStaticParams()` handles rendering automatically — no new page files needed.

### Styling
- Tailwind CSS v4 — use CSS variables for theming (defined in `app/globals.css`).
- Font variables: `fontSans.variable`, `fontMono.variable`, `snippetFont.variable` (from `lib/fonts.ts`).
- `font-mono` class is used for headings and code-adjacent text throughout the UI.

## Adding shadcn/ui Components

```bash
pnpm dlx shadcn@latest add <component>
```

New primitives land in `components/ui/`.
