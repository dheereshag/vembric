import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Plan</TableHead>
              <TableHead className="py-2 text-xs">Requests / Min</TableHead>
              <TableHead className="py-2 text-xs">Requests / Day</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rateLimitPlans.map(
              ({ plan, requestsPerMinute, requestsPerDay }) => (
                <TableRow key={plan}>
                  <TableCell className="py-3 align-top">{plan}</TableCell>
                  <TableCell className="py-3 align-top text-muted-foreground">
                    {requestsPerMinute}
                  </TableCell>
                  <TableCell className="py-3 align-top text-muted-foreground">
                    {requestsPerDay}
                  </TableCell>
                </TableRow>
              ),
            )}
          </TableBody>
        </Table>
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
