export const services = [
  { name: "API Gateway",   status: "operational" },
  { name: "Webhooks",      status: "operational" },
  { name: "Dashboard",     status: "operational" },
  { name: "SDK Registry",  status: "operational" },
  { name: "Documentation", status: "operational" },
];

export const statusColor: Record<string, string> = {
  operational: "text-green-400",
  degraded:    "text-yellow-400",
  outage:      "text-red-400",
  maintenance: "text-blue-400",
};

export const faqs = [
  {
    q: "Where can I find my API key?",
    a: "Log into the Vembric dashboard and go to Settings → API Keys.",
  },
  {
    q: "What happens if I exceed the rate limit?",
    a: "You will receive a 429 response. Check the Retry-After header and wait before retrying.",
  },
  {
    q: "How do I switch from test to production?",
    a: "Replace your test_ key with a live_ key. No other code changes are required.",
  },
  {
    q: "Does Vembric support IPv6?",
    a: "Yes. The API is accessible over both IPv4 and IPv6.",
  },
  {
    q: "Can I use the API without an SDK?",
    a: "Absolutely. Any HTTP client that can set headers and parse JSON will work.",
  },
];

export const releases = [
  {
    version: "v1.4.0",
    date: "2024-01-15",
    changes: [
      "Added cursor-based pagination to all list endpoints",
      "New webhook events: game.published, game.archived",
      "Improved 429 response with Retry-After header",
    ],
  },
  {
    version: "v1.3.2",
    date: "2023-12-01",
    changes: [
      "Fixed order cancellation returning incorrect status",
      "Performance improvement on /games endpoint (p95 latency -40%)",
    ],
  },
  {
    version: "v1.3.0",
    date: "2023-11-10",
    changes: [
      "Introduced webhooks support",
      "Added X-Vembric-Signature verification",
      "New SDK: Go client (vembric-go)",
    ],
  },
  {
    version: "v1.2.0",
    date: "2023-10-01",
    changes: [
      "Orders API — create, update, cancel",
      "PHP and Ruby SDKs released",
    ],
  },
];

export const contactResponseTimes: [string, string][] = [
  ["Free",       "Best effort (community)"],
  ["Pro",        "1 business day"],
  ["Enterprise", "4 hours"],
];
