import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { statusCodes } from "@/constants/api-reference";
import { errorHandlingContent } from "@/constants/page-content";
import { errorResponseExample } from "@/constants/code-snippets";
import { JsonIcon } from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const errorExample = errorResponseExample;

export default function ErrorHandlingPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / error-handling"
        title="Error Handling"
        description={errorHandlingContent.header.description}
      />

      <DocSection title="error format">
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <JsonIcon />
                <span>response</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={errorExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            <SyntaxHighlighter
              language="json"
              style={vscDarkPlus}
              wrapLongLines
              className="rounded-md text-sm"
              customStyle={{ fontFamily: "var(--font-snippet)" }}
              codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
            >
              {errorExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="status codes">
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest">
            <span className="col-span-2">code</span>
            <span className="col-span-10">meaning</span>
          </div>
          {statusCodes.map(({ code, meaning }) => (
            <div key={code} className="grid grid-cols-12 px-4 py-3 items-start">
              <code className="col-span-2 text-xs">{code}</code>
              <span className="col-span-10 text-muted-foreground text-xs">
                {meaning}
              </span>
            </div>
          ))}
        </div>
      </DocSection>

      <DocSection title="retry strategy" className="mb-0">
        <ArrowList items={errorHandlingContent.retryStrategy.items} />
        <InfoBox className="mt-4">
          {errorHandlingContent.retryStrategy.infoBox}
        </InfoBox>
      </DocSection>
    </div>
  );
}
