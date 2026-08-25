import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { SchemaTable } from "@/components/api-doc/schema-table";
import { CodeBlock } from "@/components/code-block";
import { paginationParams } from "@/constants/api-reference";
import { paginationContent } from "@/constants/page-content";
import {
  paginationCurlExample,
  paginationResponseExample,
} from "@/constants/code-snippets";
import { CurlIcon, JsonIcon } from "@/components/api-doc/icons";

export default function PaginationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / pagination"
        title="Pagination"
        description={paginationContent.header.description}
      />

      <DocSection title="how it works">
        <p className="text-sm leading-relaxed mb-4">
          {paginationContent.howItWorks.body}
        </p>
        <InfoBox>{paginationContent.howItWorks.infoBox}</InfoBox>
      </DocSection>

      <DocSection title="query parameters">
        <SchemaTable items={paginationParams} nameHeader="Param" />
      </DocSection>

      <DocSection title="example">
        <Snippet defaultValue="curl">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="curl">
                <CurlIcon />
                <span>curl</span>
              </SnippetTabsTrigger>
              <SnippetTabsTrigger value="response">
                <JsonIcon />
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={paginationCurlExample} />
          </SnippetHeader>
          <SnippetTabsContent value="curl">
            <CodeBlock language="bash" code={paginationCurlExample} />
          </SnippetTabsContent>
          <SnippetTabsContent value="response">
            <CodeBlock language="json" code={paginationResponseExample} />
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="best practices" className="mb-0">
        <ArrowList items={paginationContent.bestPractices.items} />
      </DocSection>
    </div>
  );
}
