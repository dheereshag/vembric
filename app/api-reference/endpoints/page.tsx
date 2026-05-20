export default function EndpointsPage() {
  const endpoints = [
    { method: "GET",    path: "/games",           description: "List all games" },
    { method: "GET",    path: "/games/:id",        description: "Retrieve a game" },
    { method: "POST",   path: "/games",            description: "Create a game" },
    { method: "PATCH",  path: "/games/:id",        description: "Update a game" },
    { method: "DELETE", path: "/games/:id",        description: "Delete a game" },
    { method: "GET",    path: "/orders",           description: "List all orders" },
    { method: "GET",    path: "/orders/:id",       description: "Retrieve an order" },
    { method: "POST",   path: "/orders",           description: "Create an order" },
    { method: "PATCH",  path: "/orders/:id",       description: "Update an order" },
  ];

  const methodColor: Record<string, string> = {
    GET:    "text-blue-400",
    POST:   "text-green-400",
    PATCH:  "text-yellow-400",
    DELETE: "text-red-400",
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / endpoints
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Endpoints</h1>
        <p className="text-muted-foreground mt-2">
          All endpoints are relative to the base URL.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          base url
        </h2>
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">https://api.vembric.io/v1</code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          available endpoints
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-2">method</span>
            <span className="col-span-5">path</span>
            <span className="col-span-5">description</span>
          </div>
          {endpoints.map((ep) => (
            <div key={ep.method + ep.path} className="grid grid-cols-12 px-4 py-3 items-center">
              <span className={`col-span-2 text-xs font-bold ${methodColor[ep.method]}`}>
                {ep.method}
              </span>
              <code className="col-span-5 text-xs">{ep.path}</code>
              <span className="col-span-5 text-xs text-muted-foreground">{ep.description}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          conventions
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> All requests and responses are JSON</li>
          <li><span className="text-muted-foreground">→</span> IDs are prefixed strings (e.g. <code className="bg-muted px-1">gm_</code>, <code className="bg-muted px-1">ord_</code>)</li>
          <li><span className="text-muted-foreground">→</span> Timestamps are ISO 8601 in UTC</li>
          <li><span className="text-muted-foreground">→</span> Set <code className="bg-muted px-1">Content-Type: application/json</code> for write requests</li>
        </ul>
      </section>
    </div>
  );
}
