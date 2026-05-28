import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import type { ReactNode } from "react";
import { authKeyTypes } from "@/constants/api-reference";
import { brand } from "@/constants/brand";
import {
  authenticationExamples,
  type AuthSnippetExample,
} from "@/constants/code-snippets";
import { CurlIcon, JavaScriptIcon } from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const authSnippetIcons: Record<AuthSnippetExample["value"], ReactNode> = {
  curl: <CurlIcon />,
  node: <JavaScriptIcon />,
};

const defaultExample = authenticationExamples[0];

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
        <Snippet defaultValue={defaultExample.value}>
          <SnippetHeader>
            <SnippetTabsList>
              {authenticationExamples.map((example) => (
                <SnippetTabsTrigger key={example.value} value={example.value}>
                  {authSnippetIcons[example.value]}
                  <span>{example.label}</span>
                </SnippetTabsTrigger>
              ))}
            </SnippetTabsList>
            <SnippetCopyButton value={defaultExample.code} />
          </SnippetHeader>
          {authenticationExamples.map((example) => (
            <SnippetTabsContent key={example.value} value={example.value}>
              <SyntaxHighlighter
                language={example.language}
                style={vscDarkPlus}
                wrapLongLines
                className="rounded-md text-sm"
                customStyle={{ fontFamily: "var(--font-snippet)" }}
                codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
              >
                {example.code}
              </SyntaxHighlighter>
            </SnippetTabsContent>
          ))}
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
        // keys can be managed from the {brand.name} dashboard under{" "}
        {brand.dashboardSettingsPath}
      </InfoBox>
    </div>
  );
}
