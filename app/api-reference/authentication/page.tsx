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
import { authKeyTypes } from "@/constants/api-reference";
import { authenticationContent } from "@/constants/page-content";
import { authenticationExamples } from "@/constants/code-snippets";
import { AuthenticationSnippet } from "@/components/authentication-snippet";

export default function AuthenticationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / authentication"
        title="Authentication"
        description={authenticationContent.header.description}
      />

      <DocSection title="bearer tokens">
        <p className="text-sm leading-relaxed mb-4">{authenticationContent.bearerTokens.body}</p>
        <AuthenticationSnippet examples={authenticationExamples} />
      </DocSection>

      <DocSection title="key types">
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Type</TableHead>
              <TableHead className="py-2 text-xs">Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {authKeyTypes.map(({ prefix, description }) => (
              <TableRow key={prefix}>
                <TableCell className="py-3 align-top whitespace-nowrap">
                  <code>{prefix}</code>
                </TableCell>
                <TableCell className="py-3 align-top text-muted-foreground whitespace-normal">
                  {description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>

      <DocSection title="security best practices" className="mb-0">
        <ArrowList items={authenticationContent.securityBestPractices.items} />
      </DocSection>

      <InfoBox className="mt-6">{authenticationContent.infoBox}</InfoBox>
    </div>
  );
}
