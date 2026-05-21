import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import { rateLimitPlans } from "@/constants/api-reference";

export default function RateLimitingPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / rate-limiting"
        title="Rate Limiting"
        description="Understand how Vembric enforces request limits to ensure fair usage."
      />

      <DocSection title="limits by plan">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-4">plan</span>
            <span className="col-span-4">requests / min</span>
            <span className="col-span-4">requests / day</span>
          </div>
          {rateLimitPlans.map(([plan, rpm, rpd]) => (
            <div key={plan} className="grid grid-cols-12 px-4 py-3 items-start">
              <span className="col-span-4 text-xs">{plan}</span>
              <span className="col-span-4 text-muted-foreground text-xs">
                {rpm}
              </span>
              <span className="col-span-4 text-muted-foreground text-xs">
                {rpd}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="response headers">
        <ArrowList
          items={[
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                X-RateLimit-Limit
              </code>{" "}
              — your total limit
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                X-RateLimit-Remaining
              </code>{" "}
              — requests left in window
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                X-RateLimit-Reset
              </code>{" "}
              — unix timestamp when window resets
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                Retry-After
              </code>{" "}
              — seconds to wait after a 429
            </>,
          ]}
        />
      </DocSection>

      <DocSection title="handling 429 errors" className="mb-0">
        <ArrowList
          items={[
            "Check the Retry-After header and wait the specified seconds",
            "Implement exponential backoff with jitter",
            "Cache responses where possible to avoid redundant requests",
            "Consider upgrading your plan for higher limits",
          ]}
        />
        <InfoBox className="mt-4">
          // bursting slightly above the limit may be tolerated; sustained
          over-limit traffic will result in a 429
        </InfoBox>
      </DocSection>
    </div>
  );
}
