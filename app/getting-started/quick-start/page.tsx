import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import type { ReactNode } from "react";
import { quickStartContent } from "@/constants/page-content";
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
        description={quickStartContent.header.description}
      />

      <DocSection title="step 1 — get your api key">
        <p className="text-sm leading-relaxed mb-4">
          {quickStartContent.step1.prefix}{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            {quickStartContent.step1.settingsPath}
          </code>{" "}
          {quickStartContent.step1.suffix}
        </p>
        <InfoBox>{quickStartContent.step1.infoBox}</InfoBox>
      </DocSection>

      <DocSection title="step 2 — make your first request">
        <p className="text-sm leading-relaxed mb-4">
          {quickStartContent.step2.body}
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
          {quickStartContent.step3.body}
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
