import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { brand } from "@/constants/brand";

export default function IntroductionPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / introduction"
        title="Introduction"
        description={`Welcome to the ${brand.name} API — a developer-first interface for accessing games and order data.`}
      />

      <DocSection title={`what is ${brand.name.toLowerCase()}`}>
        <p className="text-sm leading-relaxed">
          {brand.name} is a RESTful API that gives you programmatic access to
          resources like games and orders. It is designed around standard HTTP
          conventions and returns JSON responses.
        </p>
      </DocSection>

      <DocSection title="key features">
        <ArrowList
          items={[
            "REST-based with predictable resource URLs",
            "JSON request and response bodies",
            "Bearer token authentication",
            "Cursor-based pagination",
            "Webhook support for real-time events",
            "Official SDKs for Node, Python, PHP, Ruby and Go",
          ]}
        />
      </DocSection>

      <DocSection title="base url">
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">{brand.apiBaseUrl}</code>
        </div>
      </DocSection>

      <DocSection title="next steps" className="mb-0">
        <ul className="space-y-2 text-sm font-mono">
          <li>
            <span className="text-muted-foreground">1.</span>{" "}
            <a
              href="/getting-started/quick-start"
              className="underline underline-offset-4"
            >
              Quick Start
            </a>{" "}
            — make your first API call
          </li>
          <li>
            <span className="text-muted-foreground">2.</span>{" "}
            <a
              href="/getting-started/installation"
              className="underline underline-offset-4"
            >
              Installation
            </a>{" "}
            — install an SDK
          </li>
          <li>
            <span className="text-muted-foreground">3.</span>{" "}
            <a
              href="/api-reference/authentication"
              className="underline underline-offset-4"
            >
              Authentication
            </a>{" "}
            — secure your requests
          </li>
        </ul>
      </DocSection>
    </div>
  );
}
