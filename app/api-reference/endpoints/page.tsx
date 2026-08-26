"use client";

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
import { endpoints, methodColors } from "@/constants/api-reference";
import { endpointsContent } from "@/constants/page-content";
import { brand } from "@/constants/brand";
import { useApiVersionStore } from "@/hooks/use-api-version-store";

export default function EndpointsPage() {
  const version = useApiVersionStore((state) => state.version);
  const apiBaseUrl = brand.apiBaseUrl.replace(`/${brand.apiVersion}`, `/${version}`);

  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / endpoints"
        title="Endpoints"
        description={endpointsContent.header.description}
      />

      <DocSection title="base url">
        <div className="border p-4 bg-muted/30">
          <code className="font-mono text-sm">{apiBaseUrl}</code>
        </div>
      </DocSection>

      <DocSection title="all endpoints">
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Method</TableHead>
              <TableHead className="py-2 text-xs">Path</TableHead>
              <TableHead className="py-2 text-xs">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {endpoints.map((ep) => (
              <TableRow key={ep.path + ep.method}>
                <TableCell
                  className={`py-3 align-top font-semibold whitespace-nowrap ${methodColors[ep.method]}`}
                >
                  {ep.method}
                </TableCell>
                <TableCell className="py-3 align-top whitespace-nowrap">
                  <code>
                    /{version}
                    {ep.path}
                  </code>
                </TableCell>
                <TableCell className="py-3 align-top text-muted-foreground whitespace-normal">
                  {ep.desc}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>

      <DocSection title="versioning" className="mb-0">
        <p className="text-sm leading-relaxed">
          The current active version is{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">{version}</code>. Breaking
          changes will be released under a new version prefix with a deprecation notice.
        </p>
      </DocSection>

      <InfoBox className="mt-6">{endpointsContent.infoBox}</InfoBox>
    </div>
  );
}
