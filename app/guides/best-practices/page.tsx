export default function BestPracticesPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // guides / best-practices
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Best Practices</h1>
        <p className="text-muted-foreground mt-2">
          Recommendations for building reliable, secure integrations with the Vembric API.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          security
        </h2>
        <ul className="space-y-3 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Store API keys in environment variables — never commit them to source control</li>
          <li><span className="text-muted-foreground">→</span> Use test keys (<code className="bg-muted px-1">sk_test_</code>) during development and CI</li>
          <li><span className="text-muted-foreground">→</span> Rotate keys on a schedule and immediately after any suspected exposure</li>
          <li><span className="text-muted-foreground">→</span> Verify webhook signatures before processing payloads</li>
          <li><span className="text-muted-foreground">→</span> Never proxy API keys through your own frontend</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          performance
        </h2>
        <ul className="space-y-3 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Cache responses that change infrequently to stay within rate limits</li>
          <li><span className="text-muted-foreground">→</span> Use webhooks for real-time updates instead of polling</li>
          <li><span className="text-muted-foreground">→</span> Request only the data you need — use <code className="bg-muted px-1">limit</code> to avoid over-fetching</li>
          <li><span className="text-muted-foreground">→</span> Reuse SDK client instances rather than creating new ones per request</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          error handling
        </h2>
        <ul className="space-y-3 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Always handle <code className="bg-muted px-1">429</code> by reading the <code className="bg-muted px-1">Retry-After</code> header</li>
          <li><span className="text-muted-foreground">→</span> Implement exponential backoff with jitter for retries</li>
          <li><span className="text-muted-foreground">→</span> Branch on <code className="bg-muted px-1">error.code</code>, not <code className="bg-muted px-1">error.message</code> — messages can change</li>
          <li><span className="text-muted-foreground">→</span> Log the <code className="bg-muted px-1">request-id</code> response header for easier debugging</li>
        </ul>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          idempotency
        </h2>
        <p className="text-sm leading-relaxed mb-3">
          Pass an <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">Idempotency-Key</code> header on
          write requests (<code className="font-mono bg-muted px-1.5 py-0.5 text-xs">POST</code>,{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">PATCH</code>) to safely retry without
          creating duplicate resources.
        </p>
        <div className="border p-4 bg-muted/30 font-mono text-xs text-muted-foreground">
          Idempotency-Key: a4f3b8c1-9d2e-4f7a-b0c6-e8d3f2a1b5c9
        </div>
      </section>
    </div>
  );
}
