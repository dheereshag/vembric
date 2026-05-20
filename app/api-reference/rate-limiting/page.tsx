export default function RateLimitingPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / rate-limiting
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Rate Limiting</h1>
        <p className="text-muted-foreground mt-2">
          API requests are rate-limited per API key to ensure fair use.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          limits
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-3 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span>plan</span>
            <span>requests / minute</span>
            <span>requests / day</span>
          </div>
          {[
            ["Free",       "60",    "5,000"],
            ["Pro",        "300",   "50,000"],
            ["Enterprise", "1,000", "unlimited"],
          ].map(([plan, rpm, rpd]) => (
            <div key={plan} className="grid grid-cols-3 px-4 py-3 text-sm">
              <span>{plan}</span>
              <span className="text-muted-foreground">{rpm}</span>
              <span className="text-muted-foreground">{rpd}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          response headers
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Every response includes rate limit information in its headers.
        </p>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-5">header</span>
            <span className="col-span-7">description</span>
          </div>
          {[
            ["X-RateLimit-Limit",     "Total requests allowed in the window"],
            ["X-RateLimit-Remaining", "Requests remaining in the current window"],
            ["X-RateLimit-Reset",     "Unix timestamp when the window resets"],
            ["Retry-After",           "Seconds to wait before retrying (on 429)"],
          ].map(([header, desc]) => (
            <div key={header} className="grid grid-cols-12 px-4 py-3">
              <code className="col-span-5 text-xs">{header}</code>
              <span className="col-span-7 text-xs text-muted-foreground">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          handling 429
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          When you exceed the limit, the API returns{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">429 Too Many Requests</code>.
          Read the <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">Retry-After</code> header and back off accordingly.
        </p>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Implement exponential backoff with jitter</li>
          <li><span className="text-muted-foreground">→</span> Cache responses where possible to reduce request volume</li>
          <li><span className="text-muted-foreground">→</span> Use bulk endpoints instead of many individual requests</li>
        </ul>
      </section>
    </div>
  );
}
