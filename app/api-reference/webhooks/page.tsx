import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { webhooksContent } from "@/constants/page-content";
import {
  webhookPayloadExample,
  webhookVerifyExample,
} from "@/constants/code-snippets";
import { JavaScriptIcon, JsonIcon } from "@/components/api-doc/icons";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const payloadExample = webhookPayloadExample;
const verifyExample = webhookVerifyExample;

export default function WebhooksPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// api-reference / webhooks"
        title="Webhooks"
        description={webhooksContent.header.description}
      />

      <DocSection title="supported events">
        <ArrowList
          items={webhooksContent.supportedEvents.map((event) => (
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                {event.code}
              </code>{" "}
              — {event.description}
            </>
          ))}
        />
      </DocSection>

      <DocSection title="payload structure">
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">
                <JsonIcon />
                <span>payload</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={payloadExample} />
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
              {payloadExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="signature verification">
        <p className="text-sm leading-relaxed mb-4">
          Each webhook includes an{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
            {webhooksContent.signatureVerification.signatureHeader}
          </code>{" "}
          {webhooksContent.signatureVerification.body}
        </p>
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">
                <JavaScriptIcon />
                <span>node.js</span>
              </SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={verifyExample} />
          </SnippetHeader>
          <SnippetTabsContent value="node">
            <SyntaxHighlighter
              language="javascript"
              style={vscDarkPlus}
              wrapLongLines
              className="rounded-md text-sm"
              customStyle={{ fontFamily: "var(--font-snippet)" }}
              codeTagProps={{ style: { fontFamily: "var(--font-snippet)" } }}
            >
              {verifyExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="retry policy" className="mb-0">
        <ArrowList items={webhooksContent.retryPolicy.items} />
        <InfoBox className="mt-4">{webhooksContent.retryPolicy.infoBox}</InfoBox>
      </DocSection>
    </div>
  );
}
