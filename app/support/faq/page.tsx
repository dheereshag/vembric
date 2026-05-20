import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";

const faqs = [
  {
    q: "Where can I find my API key?",
    a: "Log into the Vembric dashboard and go to Settings → API Keys.",
  },
  {
    q: "What happens if I exceed the rate limit?",
    a: "You will receive a 429 response. Check the Retry-After header and wait before retrying.",
  },
  {
    q: "How do I switch from test to production?",
    a: "Replace your test_ key with a live_ key. No other code changes are required.",
  },
  {
    q: "Does Vembric support IPv6?",
    a: "Yes. The API is accessible over both IPv4 and IPv6.",
  },
  {
    q: "Can I use the API without an SDK?",
    a: "Absolutely. Any HTTP client that can set headers and parse JSON will work.",
  },
];

export default function FAQPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / faq"
        title="FAQ"
        description="Answers to the most common questions about the Vembric API."
      />

      {faqs.map(({ q, a }, i) => (
        <DocSection key={i} title={`${String(i + 1).padStart(2, "0")}. ${q}`}>
          <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
        </DocSection>
      ))}

      <InfoBox>
        // still stuck? reach out via the Contact page or open a ticket in the dashboard
      </InfoBox>
    </div>
  );
}
