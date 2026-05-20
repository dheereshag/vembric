export default function ErrorHandlingPage() {
  const errors = [
    ["400", "Bad Request",           "The request body or parameters are invalid"],
    ["401", "Unauthorized",          "Missing or invalid API key"],
    ["403", "Forbidden",             "The API key lacks permission for this action"],
    ["404", "Not Found",             "The requested resource does not exist"],
    ["409", "Conflict",              "The resource already exists or state conflict"],
    ["422", "Unprocessable Entity",  "Validation failed on the request body"],
    ["429", "Too Many Requests",     "Rate limit exceeded — check Retry-After header"],
    ["500", "Internal Server Error", "Something went wrong on our end"],
  ];

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / error-handling
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Error Handling</h1>
        <p className="text-muted-foreground mt-2">
          Errors follow a consistent JSON structure with a machine-readable code.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          error response format
        </h2>
        <div className="border p-4 bg-muted/30 font-mono text-sm space-y-1">
          <div><span className="text-muted-foreground">{"{"}</span></div>
          <div className="pl-4"><span className="text-muted-foreground">&quot;error&quot;</span>{": {"}</div>
          <div className="pl-8"><span className="text-muted-foreground">&quot;code&quot;</span>{":    "}<span className="text-yellow-400/80">&quot;resource_not_found&quot;</span>,</div>
          <div className="pl-8"><span className="text-muted-foreground">&quot;message&quot;</span>{": "}<span className="text-yellow-400/80">&quot;Game gm_01 was not found&quot;</span>,</div>
          <div className="pl-8"><span className="text-muted-foreground">&quot;param&quot;</span>{":   "}<span className="text-yellow-400/80">&quot;id&quot;</span></div>
          <div className="pl-4">{"}"}</div>
          <div>{"}"}</div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          http status codes
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-1">code</span>
            <span className="col-span-3 pl-4">status</span>
            <span className="col-span-8 pl-2">meaning</span>
          </div>
          {errors.map(([code, status, meaning]) => (
            <div key={code} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-1 text-xs text-muted-foreground">{code}</code>
              <span className="col-span-3 pl-4 text-xs">{status}</span>
              <span className="col-span-8 pl-2 text-xs text-muted-foreground">{meaning}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          best practices
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Always check the HTTP status code first</li>
          <li><span className="text-muted-foreground">→</span> Use <code className="bg-muted px-1">error.code</code> for programmatic handling, not <code className="bg-muted px-1">error.message</code></li>
          <li><span className="text-muted-foreground">→</span> Messages are human-readable and may change between releases</li>
          <li><span className="text-muted-foreground">→</span> Log <code className="bg-muted px-1">request-id</code> response header when contacting support</li>
        </ul>
      </section>
    </div>
  );
}
