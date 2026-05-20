import Link from "next/link";

export function HeroSection() {
  return (
    <div className="border p-8 md:p-12">
      <div className="flex items-center justify-between mb-6">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
          // vembric / api-docs
        </p>
        <span className="font-mono text-xs border px-2 py-0.5 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          beta v0.1.0
        </span>
      </div>
      <h1 className="font-mono text-4xl md:text-5xl font-bold tracking-tight mb-4">
        Welcome to Vembric
      </h1>
      <p className="text-muted-foreground leading-relaxed max-w-xl mb-8">
        Developer-friendly API documentation for games and orders. Browse
        endpoints, try requests, and integrate with official SDKs.
      </p>
      <div className="flex flex-wrap gap-6 font-mono text-sm">
        <Link
          href="/getting-started/introduction"
          className="underline underline-offset-4"
        >
          → Get Started
        </Link>
        <Link
          href="/api-reference/endpoints"
          className="underline underline-offset-4"
        >
          → API Reference
        </Link>
        <Link href="/sdks" className="underline underline-offset-4">
          → View SDKs
        </Link>
      </div>
    </div>
  );
}
