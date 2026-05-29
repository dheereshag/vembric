import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { CodeBlock } from "@/components/code-block";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { statusCodes } from "@/constants/api-reference";
import { errorHandlingContent } from "@/constants/page-content";
import { errorResponseExample } from "@/constants/code-snippets";
import { JsonIcon } from "@/components/api-doc/icons";

export default function ErrorHandlingPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / error-handling"
        title="Error Handling"
        description={errorHandlingContent.header.description}
      />

      <DocSection title="error format">
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <JsonIcon />
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={errorResponseExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            <CodeBlock language="json" code={errorResponseExample} />
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="status codes">
        <Table className="border font-mono text-xs">
          <TableHeader>
            <TableRow className="bg-muted/50 uppercase tracking-widest text-muted-foreground hover:bg-muted/50">
              <TableHead className="py-2 text-xs">Code</TableHead>
              <TableHead className="py-2 text-xs">Meaning</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {statusCodes.map(({ code, meaning }) => (
              <TableRow key={code}>
                <TableCell className="py-3 align-top whitespace-nowrap">
                  <code>{code}</code>
                </TableCell>
                <TableCell className="py-3 align-top text-muted-foreground whitespace-normal">
                  {meaning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </DocSection>

      <DocSection title="retry strategy" className="mb-0">
        <ArrowList items={errorHandlingContent.retryStrategy.items} />
        <InfoBox className="mt-4">
          {errorHandlingContent.retryStrategy.infoBox}
        </InfoBox>
      </DocSection>
    </div>
  );
}
