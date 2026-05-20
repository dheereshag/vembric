import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";

export default function ContactPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / contact"
        title="Contact"
        description="Get in touch with the Vembric team."
      />

      <DocSection title="channels">
        <ArrowList
          items={[
            <>Email — <a href="mailto:support@vembric.io" className="underline underline-offset-4">support@vembric.io</a></>,
            <>GitHub — <a href="https://github.com/vembric" className="underline underline-offset-4">github.com/vembric</a> (open an issue or discussion)</>,
            "Dashboard — submit a support ticket from the Help menu",
            "Discord — join the community server for real-time help",
          ]}
        />
      </DocSection>

      <DocSection title="response times" className="mb-0">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-4">plan</span>
            <span className="col-span-8">response sla</span>
          </div>
          {[
            ["Free",       "Best effort (community)"],
            ["Pro",        "1 business day"],
            ["Enterprise", "4 hours"],
          ].map(([plan, sla]) => (
            <div key={plan} className="grid grid-cols-12 px-4 py-3 items-start">
              <span className="col-span-4 text-xs">{plan}</span>
              <span className="col-span-8 text-muted-foreground text-xs">{sla}</span>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
