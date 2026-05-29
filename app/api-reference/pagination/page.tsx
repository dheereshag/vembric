import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { paginationParams } from "@/constants/api-reference";
import { paginationContent } from "@/constants/page-content";
import {
  paginationCurlExample,
  paginationResponseExample,
} from "@/constants/code-snippets";
import { CurlIcon, JsonIcon } from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

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
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-3">param</span>
            <span className="col-span-2">type</span>
            <span className="col-span-7">description</span>
          </div>
          {paginationParams.map(({ name, type, description }) => (
            <div key={name} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-3 text-xs">{name}</code>
              <span className="col-span-2 text-muted-foreground text-xs">
                {type}
              </span>
              <span className="col-span-7 text-muted-foreground text-xs">
                {description}
              </span>
            </div>
          ))}
        </div>
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
            <SyntaxHighlighter
              language="bash"
              style={vscDarkPlus}
              wrapLongLines
              className="rounded-md text-sm"
              customStyle={{ fontFamily: "var(--font-snippet)" }}
              codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
            >
              {paginationCurlExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
          <SnippetTabsContent value="response">
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              wrapLongLines
              className="rounded-md text-sm"
              customStyle={{ fontFamily: "var(--font-snippet)" }}
              codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
            >
              {paginationResponseExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="best practices" className="mb-0">
        <ArrowList
          items={[
            "Always check has_more before making another request",
            "Store cursors temporarily — they may expire after 24 hours",
            "Use a consistent limit per session for predictable UX",
          ]}
        />
      </DocSection>
    </div>
  );
}
