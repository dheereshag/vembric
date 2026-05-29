import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import { faqs } from "@/constants/support";
import { faqContent } from "@/constants/page-content";

export default function FAQPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / faq"
        title="FAQ"
        description={faqContent.header.description}
      />

      {faqs.map(({ q, a }, i) => (
        <DocSection key={i} title={`${String(i + 1).padStart(2, "0")}. ${q}`}>
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </DocSection>
      ))}

      <InfoBox>{faqContent.infoBox}</InfoBox>
    </div>
  );
}
