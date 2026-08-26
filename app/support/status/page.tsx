import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { services, statusColor } from "@/constants/support";
import { statusContent } from "@/constants/page-content";

export default function StatusPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / status"
        title="Status"
        description={statusContent.header.description}
      />

      <DocSection title="services">
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Service</TableHead>
              <TableHead className="py-2 text-xs">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map(({ name, status }) => (
              <TableRow key={name}>
                <TableCell className="py-3 align-middle">{name}</TableCell>
                <TableCell className={`py-3 align-middle font-semibold ${statusColor[status]}`}>
                  ● {status}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>

      <DocSection title="incident history" className="mb-0">
        <p className="text-sm text-muted-foreground">{statusContent.incidentHistory.body}</p>
      </DocSection>

      <InfoBox className="mt-6">{statusContent.infoBox}</InfoBox>
    </div>
  );
}
