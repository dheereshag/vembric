import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { releases } from "@/constants/support";
import { changelogContent } from "@/constants/page-content";

export default function ChangelogPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// support / changelog"
        title="Changelog"
        description={changelogContent.header.description}
      />

      {releases.map(({ version, date, changes }) => (
        <DocSection key={version} title={`${version} — ${date}`}>
          <ArrowList items={changes} />
        </DocSection>
      ))}
    </div>
  );
}
