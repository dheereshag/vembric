import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import { bestPracticesContent } from "@/constants/page-content";

export default function BestPracticesPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// guides / best-practices"
        title="Best Practices"
        description={bestPracticesContent.header.description}
      />

      <DocSection title="authentication">
        <ArrowList items={bestPracticesContent.authentication.items} />
      </DocSection>

      <DocSection title="error handling">
        <ArrowList items={bestPracticesContent.errorHandling.items} />
      </DocSection>

      <DocSection title="performance">
        <ArrowList items={bestPracticesContent.performance.items} />
      </DocSection>

      <DocSection title="webhooks" className="mb-0">
        <ArrowList items={bestPracticesContent.webhooks.items} />
        <InfoBox className="mt-4">{bestPracticesContent.webhooks.infoBox}</InfoBox>
      </DocSection>
    </div>
  );
}
