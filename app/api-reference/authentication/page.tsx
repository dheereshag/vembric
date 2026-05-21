import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { authKeyTypes } from "@/constants/api-reference";

const curlExample = `curl https://api.vembric.io/v1/games \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const nodeExample = `import Vembric from '@vembric/sdk';

const client = new Vembric({ apiKey: 'YOUR_API_KEY' });`;

export default function AuthenticationPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / authentication"
        title="Authentication"
        description="Secure your API requests using Bearer tokens."
      />

      <DocSection title="bearer tokens">
        <p className="text-sm leading-relaxed mb-4">
          All API requests must include your API key as a{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            Bearer
          </code>{" "}
          token in the{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            Authorization
          </code>{" "}
          header.
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
      </DocSection>

      <DocSection title="key types">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-4">type</span>
            <span className="col-span-8">description</span>
          </div>
          {authKeyTypes.map(([k, v]) => (
            <div key={k} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-4 text-xs">{k}</code>
              <span className="col-span-8 text-muted-foreground text-xs">
                {v}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="security best practices" className="mb-0">
        <ArrowList
          items={[
            "Never expose keys in client-side code",
            "Rotate keys regularly",
            "Use environment variables to store keys",
            "Restrict key permissions to required scopes only",
          ]}
        />
      </DocSection>

      <InfoBox className="mt-6">
        // keys can be managed from the Vembric dashboard under Settings → API
        Keys
      </InfoBox>
    </div>
  );
}
