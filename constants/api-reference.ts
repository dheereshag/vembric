export const endpoints = [
  { method: "GET",    path: "/games",       desc: "List all games" },
  { method: "GET",    path: "/games/:id",   desc: "Retrieve a game" },
  { method: "POST",   path: "/games",       desc: "Create a game" },
  { method: "PATCH",  path: "/games/:id",   desc: "Update a game" },
  { method: "DELETE", path: "/games/:id",   desc: "Delete a game" },
  { method: "GET",    path: "/orders",      desc: "List all orders" },
  { method: "GET",    path: "/orders/:id",  desc: "Retrieve an order" },
  { method: "POST",   path: "/orders",      desc: "Create an order" },
  { method: "PATCH",  path: "/orders/:id",  desc: "Update an order" },
  { method: "DELETE", path: "/orders/:id",  desc: "Cancel an order" },
];

export const methodColors: Record<string, string> = {
  GET:    "text-green-400",
  POST:   "text-blue-400",
  PATCH:  "text-yellow-400",
  DELETE: "text-red-400",
};

export type AuthKeyType = {
  prefix: string;
  description: string;
};

export const authKeyTypes: AuthKeyType[] = [
  { prefix: "test_", description: "Sandbox key — no real data affected" },
  { prefix: "live_", description: "Production key — use with care" },
];

export type PaginationParam = {
  name: string;
  type: string;
  description: string;
};

export const paginationParams: PaginationParam[] = [
  {
    name: "limit",
    type: "integer",
    description: "Number of items per page (default 20, max 100)",
  },
  {
    name: "cursor",
    type: "string",
    description: "Cursor returned from the previous response",
  },
];

export type RateLimitPlan = {
  plan: string;
  requestsPerMinute: string;
  requestsPerDay: string;
};

export const rateLimitPlans: RateLimitPlan[] = [
  { plan: "Free", requestsPerMinute: "60", requestsPerDay: "10,000" },
  { plan: "Pro", requestsPerMinute: "300", requestsPerDay: "100,000" },
  {
    plan: "Enterprise",
    requestsPerMinute: "1000",
    requestsPerDay: "Unlimited",
  },
];

export type StatusCode = {
  code: string;
  meaning: string;
};

export const statusCodes: StatusCode[] = [
  { code: "200", meaning: "OK — request succeeded" },
  { code: "201", meaning: "Created — resource created" },
  { code: "400", meaning: "Bad Request — malformed syntax" },
  { code: "401", meaning: "Unauthorized — invalid or missing API key" },
  {
    code: "403",
    meaning: "Forbidden — valid key but insufficient permissions",
  },
  { code: "404", meaning: "Not Found — resource does not exist" },
  { code: "422", meaning: "Unprocessable Entity — validation error" },
  { code: "429", meaning: "Too Many Requests — rate limit exceeded" },
  { code: "500", meaning: "Internal Server Error — try again later" },
];
