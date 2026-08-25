// All page text content lives here so it can be swapped for DB-fetched data later.

// ── Introduction ──────────────────────────────────────────────────────────────

export const introductionContent = {
  header: {
    description:
      "Welcome to the Vembric API — a developer-first interface for accessing games and order data.",
  },
  whatIs: {
    title: "what is vembric",
    body: "Vembric is a RESTful API that gives you programmatic access to resources like games and orders. It is designed around standard HTTP conventions and returns JSON responses.",
  },
  keyFeatures: {
    items: [
      "REST-based with predictable resource URLs",
      "JSON request and response bodies",
      "Bearer token authentication",
      "Cursor-based pagination",
      "Webhook support for real-time events",
      "Official SDKs for Node, Python, PHP, Ruby and Go",
    ],
  },
  nextSteps: {
    links: [
      {
        label: "Quick Start",
        href: "/getting-started/quick-start",
        description: "make your first API call",
      },
      {
        label: "Installation",
        href: "/getting-started/installation",
        description: "install an SDK",
      },
      {
        label: "Authentication",
        href: "/api-reference/authentication",
        description: "secure your requests",
      },
    ],
  },
};

// ── Quick Start ───────────────────────────────────────────────────────────────

export const quickStartContent = {
  header: {
    description: "Get up and running with the Vembric API in under 5 minutes.",
  },
  step1: {
    prefix: "Log into the Vembric dashboard and navigate to",
    settingsPath: "Settings → API Keys",
    suffix: "to generate your key.",
    infoBox: "// keep your API key secret — never expose it in client-side code",
  },
  step2: {
    body: "Fetch a list of games from the API.",
  },
  step3: {
    body: "A successful response looks like this:",
  },
};

// ── Installation ──────────────────────────────────────────────────────────────

export const installationContent = {
  header: {
    description: "Install the official Vembric SDK for your language of choice.",
  },
  requirements: {
    items: ["Node.js v18+", "Python 3.8+", "Ruby 3.0+", "Go 1.21+"],
  },
};

// ── Authentication ────────────────────────────────────────────────────────────

export const authenticationContent = {
  header: {
    description: "Secure your API requests using Bearer tokens.",
  },
  bearerTokens: {
    body: "All API requests must include your API key as a Bearer token in the Authorization header.",
  },
  securityBestPractices: {
    items: [
      "Never expose keys in client-side code",
      "Rotate keys regularly",
      "Use environment variables to store keys",
      "Restrict key permissions to required scopes only",
    ],
  },
  infoBox:
    "// keys can be managed from the Vembric dashboard under Settings → API Keys",
};

// ── Endpoints ─────────────────────────────────────────────────────────────────

export const endpointsContent = {
  header: {
    description: "Complete reference for all available API endpoints.",
  },
  versioning: {
    currentVersion: "v1",
    note: "Breaking changes will be released under a new version prefix with a deprecation notice.",
  },
  infoBox: "// all endpoints require a valid Bearer token — see Authentication",
};

// ── Pagination ────────────────────────────────────────────────────────────────

export const paginationContent = {
  header: {
    description:
      "Vembric uses cursor-based pagination for all list endpoints.",
  },
  howItWorks: {
    body: "List endpoints return a data array, a next_cursor string, and a has_more boolean. Pass cursor as a query param to fetch the next page.",
    infoBox:
      "// cursor values are opaque strings — do not parse or construct them manually",
  },
  bestPractices: {
    items: [
      "Always check has_more before making another request",
      "Store cursors temporarily — they may expire after 24 hours",
      "Use a consistent limit per session for predictable UX",
    ],
  },
};

// ── Webhooks ──────────────────────────────────────────────────────────────────

export type WebhookEvent = { code: string; description: string };

export const webhooksContent = {
  header: {
    description:
      "Receive real-time event notifications via HTTP POST callbacks.",
  },
  supportedEvents: [
    { code: "order.created", description: "a new order was placed" },
    { code: "order.updated", description: "an order status changed" },
    { code: "order.cancelled", description: "an order was cancelled" },
    { code: "game.published", description: "a game went live" },
    { code: "game.archived", description: "a game was archived" },
  ] as WebhookEvent[],
  signatureVerification: {
    signatureHeader: "X-Vembric-Signature",
    body: "header. Verify it against your webhook secret before processing.",
  },
  retryPolicy: {
    items: [
      "Retries on non-2xx responses",
      "Up to 5 attempts with exponential backoff",
      "Events expire after 72 hours if undelivered",
    ],
    infoBox: "// respond with 2xx within 10 seconds to acknowledge delivery",
  },
};

// ── Rate Limiting ─────────────────────────────────────────────────────────────

export type ResponseHeader = { header: string; description: string };

export const rateLimitingContent = {
  header: {
    description:
      "Understand how Vembric enforces request limits to ensure fair usage.",
  },
  responseHeaders: [
    { header: "X-RateLimit-Limit", description: "your total limit" },
    { header: "X-RateLimit-Remaining", description: "requests left in window" },
    {
      header: "X-RateLimit-Reset",
      description: "unix timestamp when window resets",
    },
    { header: "Retry-After", description: "seconds to wait after a 429" },
  ] as ResponseHeader[],
  handling429: {
    items: [
      "Check the Retry-After header and wait the specified seconds",
      "Implement exponential backoff with jitter",
      "Cache responses where possible to avoid redundant requests",
      "Consider upgrading your plan for higher limits",
    ],
    infoBox:
      "// bursting slightly above the limit may be tolerated; sustained over-limit traffic will result in a 429",
  },
};

// ── Error Handling ────────────────────────────────────────────────────────────

export const errorHandlingContent = {
  header: {
    description:
      "Understand Vembric error responses and how to handle them gracefully.",
  },
  retryStrategy: {
    items: [
      "Always retry on 429 — respect the Retry-After header",
      "Retry 500 / 503 with exponential backoff (3 attempts max)",
      "Never retry 400, 401, 403, 404, or 422 — fix the request first",
    ],
    infoBox:
      "// log the error.code field for easier debugging and support tickets",
  },
};

// ── Best Practices ────────────────────────────────────────────────────────────

export const bestPracticesContent = {
  header: {
    description:
      "Recommended patterns for building reliable integrations with the Vembric API.",
  },
  authentication: {
    items: [
      "Store API keys in environment variables, never in source code",
      "Use test_ keys during development and CI/CD pipelines",
      "Rotate keys every 90 days or immediately after suspected exposure",
    ],
  },
  errorHandling: {
    items: [
      "Always check the HTTP status code before parsing the body",
      "Implement retry logic for 429 and 5xx responses only",
      "Log the error.code and request id for faster support resolution",
    ],
  },
  performance: {
    items: [
      "Cache read-heavy resources like game metadata client-side",
      "Use field filtering (if supported) to reduce response payload size",
      "Batch operations where the API supports it",
    ],
  },
  webhooks: {
    items: [
      "Always verify the X-Vembric-Signature header",
      "Respond with 2xx immediately, then process async",
      "Implement idempotency — the same event may be delivered more than once",
    ],
    infoBox:
      "// treat all external input as untrusted — validate payload structure before processing",
  },
};

// ── Examples ──────────────────────────────────────────────────────────────────

export const examplesContent = {
  header: {
    description:
      "Real-world code snippets for common Vembric integration scenarios.",
  },
};

// ── FAQ ───────────────────────────────────────────────────────────────────────

export const faqContent = {
  header: {
    description:
      "Answers to the most common questions about the Vembric API.",
  },
  infoBox:
    "// still stuck? reach out via the Contact page or open a ticket in the dashboard",
};

// ── Changelog ─────────────────────────────────────────────────────────────────

export const changelogContent = {
  header: {
    description: "Release history and notable changes to the Vembric API.",
  },
};

// ── Status ────────────────────────────────────────────────────────────────────

export const statusContent = {
  header: {
    description: "Current operational status of Vembric services.",
  },
  incidentHistory: {
    body: "No incidents in the last 30 days. All systems nominal.",
  },
  infoBox: "// subscribe to status updates at status.vembric.io",
};

// ── Contact ───────────────────────────────────────────────────────────────────

export type ContactChannel =
  | {
      type: "link";
      prefix: string;
      href: string;
      display: string;
      suffix?: string;
    }
  | { type: "text"; text: string };

export const contactContent = {
  header: {
    description: "Get in touch with the Vembric team.",
  },
  channels: [
    {
      type: "link" as const,
      prefix: "Email —",
      href: "mailto:support@vembric.io",
      display: "support@vembric.io",
    },
    {
      type: "link" as const,
      prefix: "GitHub —",
      href: "https://github.com/vembric",
      display: "github.com/vembric",
      suffix: "(open an issue or discussion)",
    },
    {
      type: "text" as const,
      text: "Dashboard — submit a support ticket from the Help menu",
    },
    {
      type: "text" as const,
      text: "Discord — join the community server for real-time help",
    },
  ] as ContactChannel[],
};

// ── SDKs ──────────────────────────────────────────────────────────────────────

export const sdksContent = {
  header: {
    title: "Vembric SDKs",
    description: "Use our official SDKs to integrate faster with the API.",
  },
};

// ── Home / Hero ───────────────────────────────────────────────────────────────

export const heroContent = {
  tagline: "// Vembric / api-docs",
  version: "beta v0.1.0",
  heading: "Welcome to Vembric",
  body: "Developer-friendly API documentation for games and orders. Browse endpoints, try requests, and integrate with official SDKs.",
  links: [
    { label: "→ Get Started", href: "/getting-started/introduction" },
    { label: "→ API Reference", href: "/api-reference/endpoints" },
    { label: "→ View SDKs", href: "/sdks" },
  ],
};
