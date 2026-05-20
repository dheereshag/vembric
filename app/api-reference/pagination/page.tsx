import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const requestExample = `curl "https://api.vembric.io/v1/games?limit=20&cursor=cursor_abc" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const responseExample = `{
  "data": [ ... ],
  "next_cursor": "cursor_xyz",
  "has_more": true
}`;

export default function PaginationPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / pagination
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Pagination</h1>
        <p className="text-muted-foreground mt-2">
          List endpoints use cursor-based pagination for consistent, efficient traversal.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          how it works
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Each list response includes a <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">next_cursor</code> field.
          Pass it as the <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">cursor</code> query parameter on your next
          request to retrieve the following page. When <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">has_more</code> is{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">false</code>, you have reached the end.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          query parameters
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-3">param</span>
            <span className="col-span-2">type</span>
            <span className="col-span-7">description</span>
          </div>
          <div className="grid grid-cols-12 px-4 py-3">
            <code className="col-span-3 text-xs">limit</code>
            <span className="col-span-2 text-xs text-muted-foreground">integer</span>
            <span className="col-span-7 text-xs text-muted-foreground">Items per page. Default 20, max 100.</span>
          </div>
          <div className="grid grid-cols-12 px-4 py-3">
            <code className="col-span-3 text-xs">cursor</code>
            <span className="col-span-2 text-xs text-muted-foreground">string</span>
            <span className="col-span-7 text-xs text-muted-foreground">Opaque cursor from previous response.</span>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          example
        </h2>
        <Snippet defaultValue="request">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="request">request</SnippetTabsTrigger>
              <SnippetTabsTrigger value="response">response</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={requestExample} />
          </SnippetHeader>
          <SnippetTabsContent value="request">{requestExample}</SnippetTabsContent>
          <SnippetTabsContent value="response">{responseExample}</SnippetTabsContent>
        </Snippet>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          notes
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Cursors are opaque — do not decode or construct them manually</li>
          <li><span className="text-muted-foreground">→</span> Cursors expire after 24 hours</li>
          <li><span className="text-muted-foreground">→</span> Results are always ordered by creation time, descending</li>
        </ul>
      </section>
    </div>
  );
}
