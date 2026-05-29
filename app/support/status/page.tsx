import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
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
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-6">service</span>
            <span className="col-span-6">status</span>
          </div>
          {services.map(({ name, status }) => (
            <div
              key={name}
              className="grid grid-cols-12 px-4 py-3 items-center"
            >
              <span className="col-span-6 text-xs">{name}</span>
              <span
                className={`col-span-6 text-xs font-semibold ${statusColor[status]}`}
              >
                ● {status}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="incident history" className="mb-0">
        <p className="text-sm text-muted-foreground">
          No incidents in the last 30 days. All systems nominal.
        </p>
      </DocSection>

      <InfoBox className="mt-6">{statusContent.infoBox}</InfoBox>
    </div>
  );
}
