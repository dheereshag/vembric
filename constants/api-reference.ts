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

export const authKeyTypes: [string, string][] = [
  ["test_", "Sandbox key — no real data affected"],
  ["live_", "Production key — use with care"],
];

export const paginationParams: [string, string, string][] = [
  ["limit",  "integer", "Number of items per page (default 20, max 100)"],
  ["cursor", "string",  "Cursor returned from the previous response"],
];

export const rateLimitPlans: [string, string, string][] = [
  ["Free",       "60",   "10,000"],
  ["Pro",        "300",  "100,000"],
  ["Enterprise", "1000", "Unlimited"],
];

export const statusCodes: [string, string][] = [
  ["200", "OK — request succeeded"],
  ["201", "Created — resource created"],
  ["400", "Bad Request — malformed syntax"],
  ["401", "Unauthorized — invalid or missing API key"],
  ["403", "Forbidden — valid key but insufficient permissions"],
  ["404", "Not Found — resource does not exist"],
  ["422", "Unprocessable Entity — validation error"],
  ["429", "Too Many Requests — rate limit exceeded"],
  ["500", "Internal Server Error — try again later"],
];
