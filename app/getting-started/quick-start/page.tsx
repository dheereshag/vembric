import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import type { ReactNode } from "react";
import { brand } from "@/constants/brand";
import {
  authCurlExample,
  quickStartNodeExample,
  quickStartResponse,
} from "@/constants/code-snippets";
import { CurlIcon, JavaScriptIcon, JsonIcon } from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type QuickStartSnippet = {
  value: string;
  label: string;
  icon: ReactNode;
  language: string;
  code: string;
};

const firstRequestSnippets: QuickStartSnippet[] = [
  {
    value: "curl",
    label: "curl",
    icon: <CurlIcon />,
    language: "bash",
    code: authCurlExample,
  },
  {
    value: "node",
    label: "node.js",
    icon: <JavaScriptIcon />,
    language: "javascript",
    code: quickStartNodeExample,
  },
];

const responseSnippets: QuickStartSnippet[] = [
  {
    value: "json",
    label: "response",
    icon: <JsonIcon />,
    language: "json",
    code: quickStartResponse,
  },
];

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
        <Snippet defaultValue={firstRequestSnippets[0].value}>
          <SnippetHeader>
            <SnippetTabsList>
              {firstRequestSnippets.map((snippet) => (
                <SnippetTabsTrigger key={snippet.value} value={snippet.value}>
                  {snippet.icon}
                  <span>{snippet.label}</span>
                </SnippetTabsTrigger>
              ))}
            </SnippetTabsList>
            <SnippetCopyButton value={firstRequestSnippets[0].code} />
          </SnippetHeader>
          {firstRequestSnippets.map((snippet) => (
            <SnippetTabsContent key={snippet.value} value={snippet.value}>
              <SyntaxHighlighter
                language={snippet.language}
                style={vscDarkPlus}
                wrapLongLines
                className="rounded-md text-sm"
                customStyle={{ fontFamily: "var(--font-snippet)" }}
                codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
              >
                {snippet.code}
              </SyntaxHighlighter>
            </SnippetTabsContent>
          ))}
        </Snippet>
      </DocSection>

      <DocSection title="step 3 — read the response" className="mb-0">
        <p className="text-sm leading-relaxed mb-4">
          A successful response looks like this:
        </p>
        <Snippet defaultValue={responseSnippets[0].value}>
          <SnippetHeader>
            <SnippetTabsList>
              {responseSnippets.map((snippet) => (
                <SnippetTabsTrigger key={snippet.value} value={snippet.value}>
                  {snippet.icon}
                  <span>{snippet.label}</span>
                </SnippetTabsTrigger>
              ))}
            </SnippetTabsList>
            <SnippetCopyButton value={responseSnippets[0].code} />
          </SnippetHeader>
          {responseSnippets.map((snippet) => (
            <SnippetTabsContent key={snippet.value} value={snippet.value}>
              <SyntaxHighlighter
                language={snippet.language}
                style={vscDarkPlus}
                wrapLongLines
                className="rounded-md text-sm"
                customStyle={{ fontFamily: "var(--font-snippet)" }}
                codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
              >
                {snippet.code}
              </SyntaxHighlighter>
            </SnippetTabsContent>
          ))}
        </Snippet>
      </DocSection>
    </div>
  );
}
