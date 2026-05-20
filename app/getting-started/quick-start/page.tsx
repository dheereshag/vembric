import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const curlExample = `curl https://api.vembric.io/v1/games \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const nodeExample = `import Vembric from '@vembric/sdk';

const client = new Vembric({ apiKey: 'YOUR_API_KEY' });
const games = await client.games.list();
console.log(games);`;

const responseExample = `{
  "data": [
    { "id": "gm_01", "title": "Chess", "status": "active" },
    { "id": "gm_02", "title": "Poker", "status": "active" }
  ],
  "next_cursor": "cursor_xyz",
  "has_more": true
}`;

export default function QuickStartPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / quick-start"
        title="Quick Start"
        description="Get up and running with the Vembric API in under 5 minutes."
      />

      <DocSection title="step 1 — get your api key">
        <p className="text-sm leading-relaxed mb-4">
          Log into the Vembric dashboard and navigate to{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">Settings → API Keys</code>{" "}
          to generate your key.
        </p>
        <InfoBox>// keep your API key secret — never expose it in client-side code</InfoBox>
      </DocSection>

      <DocSection title="step 2 — make your first request">
        <p className="text-sm leading-relaxed mb-4">Fetch a list of games from the API.</p>
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
      </DocSection>

      <DocSection title="step 3 — read the response" className="mb-0">
        <p className="text-sm leading-relaxed mb-4">A successful response looks like this:</p>
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">response</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={responseExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">{responseExample}</SnippetTabsContent>
        </Snippet>
      </DocSection>
    </div>
  );
}
