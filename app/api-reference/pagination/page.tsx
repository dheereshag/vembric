import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { paginationParams } from "@/constants/api-reference";

const curlExample = `curl "https://api.vembric.io/v1/games?limit=20&cursor=cursor_xyz" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const responseExample = `{
  "data": [...],
  "next_cursor": "cursor_abc",
  "has_more": true
}`;

export default function PaginationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / pagination"
        title="Pagination"
        description="Vembric uses cursor-based pagination for all list endpoints."
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
              <SnippetTabsTrigger value="curl">curl</SnippetTabsTrigger>
              <SnippetTabsTrigger value="response">response</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={curlExample} />
          </SnippetHeader>
          <SnippetTabsContent value="curl">{curlExample}</SnippetTabsContent>
          <SnippetTabsContent value="response">
            {responseExample}
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
