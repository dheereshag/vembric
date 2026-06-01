import Link from "next/link";
import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { brand } from "@/constants/brand";
import { introductionContent } from "@/constants/page-content";

export default function IntroductionPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / introduction"
        title="Introduction"
        description={introductionContent.header.description}
      />

      <DocSection title={introductionContent.whatIs.title}>
        <p className="text-sm leading-relaxed">
          {introductionContent.whatIs.body}
        </p>
      </DocSection>

      <DocSection title="key features">
        <ArrowList items={introductionContent.keyFeatures.items} />
      </DocSection>

      <DocSection title="base url">
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">{brand.apiBaseUrl}</code>
        </div>
      </DocSection>

      <DocSection title="next steps" className="mb-0">
        <ul className="space-y-2 text-sm font-mono">
          {introductionContent.nextSteps.links.map((link, i) => (
            <li key={link.href}>
              <span className="text-muted-foreground">{i + 1}.</span>{" "}
              <Link href={link.href} className="underline underline-offset-4">
                {link.label}
              </Link>{" "}
              — {link.description}
            </li>
          ))}
        </ul>
      </DocSection>
    </div>
  );
}
