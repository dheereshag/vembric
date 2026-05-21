import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { brand } from "@/constants/brand";
import {
  authCurlExample,
  quickStartNodeExample,
  quickStartResponse,
} from "@/constants/code-snippets";
import { CurlIcon, JavaScriptIcon, JsonIcon } from "@/components/api-doc/icons";

export default function QuickStartPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// getting-started / quick-start"
        title="Quick Start"
        description={`Get up and running with the ${brand.name} API in under 5 minutes.`}
      />

      <DocSection title="step 1 — get your api key">
        <p className="text-sm leading-relaxed mb-4">
          Log into the {brand.name} dashboard and navigate to{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            {brand.dashboardSettingsPath}
          </code>{" "}
          to generate your key.
        </p>
        <InfoBox>
          // keep your API key secret — never expose it in client-side code
        </InfoBox>
      </DocSection>

      <DocSection title="step 2 — make your first request">
        <p className="text-sm leading-relaxed mb-4">
          Fetch a list of games from the API.
        </p>
        <Snippet defaultValue="curl">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="curl">
                <CurlIcon />
                <span>curl</span>
              </SnippetTabsTrigger>
              <SnippetTabsTrigger value="node">
                <JavaScriptIcon />
                <span>node.js</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={authCurlExample} />
          </SnippetHeader>
          <SnippetTabsContent value="curl">
            {authCurlExample}
          </SnippetTabsContent>
          <SnippetTabsContent value="node">
            {quickStartNodeExample}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="step 3 — read the response" className="mb-0">
        <p className="text-sm leading-relaxed mb-4">
          A successful response looks like this:
        </p>
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <JsonIcon />
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={quickStartResponse} />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            {quickStartResponse}
          </SnippetTabsContent>
        </Snippet>
      </DocSection>
    </div>
  );
}
