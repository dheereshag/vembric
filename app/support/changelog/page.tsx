import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";

const releases = [
  {
    version: "v1.4.0",
    date: "2024-01-15",
    changes: [
      "Added cursor-based pagination to all list endpoints",
      "New webhook events: game.published, game.archived",
      "Improved 429 response with Retry-After header",
    ],
  },
  {
    version: "v1.3.2",
    date: "2023-12-01",
    changes: [
      "Fixed order cancellation returning incorrect status",
      "Performance improvement on /games endpoint (p95 latency -40%)",
    ],
  },
  {
    version: "v1.3.0",
    date: "2023-11-10",
    changes: [
      "Introduced webhooks support",
      "Added X-Vembric-Signature verification",
      "New SDK: Go client (vembric-go)",
    ],
  },
  {
    version: "v1.2.0",
    date: "2023-10-01",
    changes: [
      "Orders API — create, update, cancel",
      "PHP and Ruby SDKs released",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / changelog"
        title="Changelog"
        description="Release history and notable changes to the Vembric API."
      />

      {releases.map(({ version, date, changes }) => (
        <DocSection key={version} title={`${version} — ${date}`}>
          <ArrowList items={changes} />
        </DocSection>
      ))}
    </div>
  );
}
