import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import { brand } from "@/constants/brand";

export default function BestPracticesPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// guides / best-practices"
        title="Best Practices"
        description={`Recommended patterns for building reliable integrations with the ${brand.name} API.`}
      />

      <DocSection title="authentication">
        <ArrowList
          items={[
            "Store API keys in environment variables, never in source code",
            "Use test_ keys during development and CI/CD pipelines",
            "Rotate keys every 90 days or immediately after suspected exposure",
          ]}
        />
      </DocSection>

      <DocSection title="error handling">
        <ArrowList
          items={[
            "Always check the HTTP status code before parsing the body",
            "Implement retry logic for 429 and 5xx responses only",
            "Log the error.code and request id for faster support resolution",
          ]}
        />
      </DocSection>

      <DocSection title="performance">
        <ArrowList
          items={[
            "Cache read-heavy resources like game metadata client-side",
            "Use field filtering (if supported) to reduce response payload size",
            "Batch operations where the API supports it",
          ]}
        />
      </DocSection>

      <DocSection title="webhooks" className="mb-0">
        <ArrowList
          items={[
            `Always verify the ${brand.signatureHeader} header`,
            "Respond with 2xx immediately, then process async",
            "Implement idempotency — the same event may be delivered more than once",
          ]}
        />
        <InfoBox className="mt-4">
          // treat all external input as untrusted — validate payload structure
          before processing
        </InfoBox>
      </DocSection>
    </div>
  );
}
