export default function IntroductionPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // getting-started / introduction
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Introduction</h1>
        <p className="text-muted-foreground mt-2">
          Welcome to the Vembric API — a developer-first interface for accessing games and order data.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          what is vembric
        </h2>
        <p className="text-sm leading-relaxed">
          Vembric is a RESTful API that gives you programmatic access to resources like games and orders.
          It is designed around standard HTTP conventions and returns JSON responses.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          key features
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> REST-based with predictable resource URLs</li>
          <li><span className="text-muted-foreground">→</span> JSON request and response bodies</li>
          <li><span className="text-muted-foreground">→</span> Bearer token authentication</li>
          <li><span className="text-muted-foreground">→</span> Cursor-based pagination</li>
          <li><span className="text-muted-foreground">→</span> Webhook support for real-time events</li>
          <li><span className="text-muted-foreground">→</span> Official SDKs for Node, Python, PHP, Ruby and Go</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          base url
        </h2>
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">https://api.vembric.io/v1</code>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          next steps
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li>
            <span className="text-muted-foreground">1.</span>{" "}
            <a href="/getting-started/quick-start" className="underline underline-offset-4">Quick Start</a>
            {" "}— make your first API call
          </li>
          <li>
            <span className="text-muted-foreground">2.</span>{" "}
            <a href="/getting-started/installation" className="underline underline-offset-4">Installation</a>
            {" "}— install an SDK
          </li>
          <li>
            <span className="text-muted-foreground">3.</span>{" "}
            <a href="/api-reference/authentication" className="underline underline-offset-4">Authentication</a>
            {" "}— secure your requests
          </li>
        </ul>
      </section>
    </div>
  );
}
