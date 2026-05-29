import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Plan</TableHead>
              <TableHead className="py-2 text-xs">Response SLA</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {contactResponseTimes.map(([plan, sla]) => (
              <TableRow key={plan}>
                <TableCell className="py-3 align-top whitespace-nowrap">
                  {plan}
                </TableCell>
                <TableCell className="py-3 align-top text-muted-foreground whitespace-normal">
                  {sla}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>
    </div>
  );
}
