import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const curlExample = `curl https://api.vembric.io/v1/games \\
  -H "Authorization: Bearer sk_live_xxxxxxxxxxxx"`;

const nodeExample = `import Vembric from '@vembric/sdk';

const client = new Vembric({
  apiKey: process.env.VEMBRIC_API_KEY,
});`;

export default function AuthenticationPage() {
  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / authentication
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Authentication</h1>
        <p className="text-muted-foreground mt-2">
          All API requests must include a valid API key.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          bearer token
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Pass your API key as a Bearer token in the{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">Authorization</code>{" "}
          header on every request.
        </p>
        <Snippet defaultValue="curl">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="curl">curl</SnippetTabsTrigger>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={curlExample} />
          </SnippetHeader>
          <SnippetTabsContent value="curl">{curlExample}</SnippetTabsContent>
          <SnippetTabsContent value="node">{nodeExample}</SnippetTabsContent>
        </Snippet>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          api key types
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-3 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span>prefix</span>
            <span>type</span>
            <span>use</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="text-xs">sk_live_</code>
            <span className="text-sm">Live</span>
            <span className="text-sm text-muted-foreground">Production requests</span>
          </div>
          <div className="grid grid-cols-3 px-4 py-3">
            <code className="text-xs">sk_test_</code>
            <span className="text-sm">Test</span>
            <span className="text-sm text-muted-foreground">Development &amp; testing</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          security
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Store keys in environment variables, never in source code</li>
          <li><span className="text-muted-foreground">→</span> Rotate keys immediately if compromised</li>
          <li><span className="text-muted-foreground">→</span> Use test keys during development</li>
          <li><span className="text-muted-foreground">→</span> Requests without a valid key return <code className="bg-muted px-1">401 Unauthorized</code></li>
        </ul>
      </section>
    </div>
  );
}
