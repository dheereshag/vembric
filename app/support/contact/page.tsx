import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { contactResponseTimes } from "@/constants/support";
import { contactContent, type ContactChannel } from "@/constants/page-content";

export default function ContactPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / contact"
        title="Contact"
        description={contactContent.header.description}
      />

      <DocSection title="channels">
        <ArrowList
          items={contactContent.channels.map((channel: ContactChannel) =>
            channel.type === "link" ? (
              <>
                {channel.prefix}{" "}
                <a href={channel.href} className="underline underline-offset-4">
                  {channel.display}
                </a>
                {channel.suffix ? ` ${channel.suffix}` : ""}
              </>
            ) : (
              channel.text
            ),
          )}
        />
      </DocSection>

      <DocSection title="response times" className="mb-0">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-4">plan</span>
            <span className="col-span-8">response sla</span>
          </div>
          {contactResponseTimes.map(([plan, sla]) => (
            <div key={plan} className="grid grid-cols-12 px-4 py-3 items-start">
              <span className="col-span-4 text-xs">{plan}</span>
              <span className="col-span-8 text-muted-foreground text-xs">
                {sla}
              </span>
            </div>
          ))}
        </div>
      </DocSection>
    </div>
  );
}
