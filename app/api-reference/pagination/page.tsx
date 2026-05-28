import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { paginationParams } from "@/constants/api-reference";
import { brand } from "@/constants/brand";
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
        description={`${brand.name} uses cursor-based pagination for all list endpoints.`}
      />

      <DocSection title="how it works">
        <p className="text-sm leading-relaxed mb-4">
          List endpoints return a{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">data</code>{" "}
          array, a{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            next_cursor
          </code>{" "}
          string, and a
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            {" "}
            has_more
          </code>{" "}
          boolean. Pass{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            cursor
          </code>{" "}
          as a query param to fetch the next page.
        </p>
        <InfoBox>
          // cursor values are opaque strings — do not parse or construct them
          manually
        </InfoBox>
      </DocSection>

      <DocSection title="query parameters">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-3">param</span>
            <span className="col-span-2">type</span>
            <span className="col-span-7">description</span>
          </div>
          {paginationParams.map(([p, t, d]) => (
            <div key={p} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-3 text-xs">{p}</code>
              <span className="col-span-2 text-muted-foreground text-xs">
                {t}
              </span>
              <span className="col-span-7 text-muted-foreground text-xs">
                {d}
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
