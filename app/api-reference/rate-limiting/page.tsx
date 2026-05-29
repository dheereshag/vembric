import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import { rateLimitPlans } from "@/constants/api-reference";
import { rateLimitingContent } from "@/constants/page-content";

export default function RateLimitingPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / rate-limiting"
        title="Rate Limiting"
        description={rateLimitingContent.header.description}
      />

      <DocSection title="limits by plan">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-4">plan</span>
            <span className="col-span-4">requests / min</span>
            <span className="col-span-4">requests / day</span>
          </div>
          {rateLimitPlans.map(({ plan, requestsPerMinute, requestsPerDay }) => (
            <div key={plan} className="grid grid-cols-12 px-4 py-3 items-start">
              <span className="col-span-4 text-xs">{plan}</span>
              <span className="col-span-4 text-muted-foreground text-xs">
                {requestsPerMinute}
              </span>
              <span className="col-span-4 text-muted-foreground text-xs">
                {requestsPerDay}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="response headers">
        <ArrowList
          items={rateLimitingContent.responseHeaders.map((h) => (
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                {h.header}
              </code>{" "}
              — {h.description}
            </>
          ))}
        />
      </DocSection>

      <DocSection title="handling 429 errors" className="mb-0">
        <ArrowList items={rateLimitingContent.handling429.items} />
        <InfoBox className="mt-4">
          {rateLimitingContent.handling429.infoBox}
        </InfoBox>
      </DocSection>
    </div>
  );
}
