import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { brand } from "@/constants/brand";
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
        description="Receive real-time event notifications via HTTP POST callbacks."
      />

      <DocSection title="supported events">
        <ArrowList
          items={[
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                order.created
              </code>{" "}
              — a new order was placed
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                order.updated
              </code>{" "}
              — an order status changed
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                order.cancelled
              </code>{" "}
              — an order was cancelled
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                game.published
              </code>{" "}
              — a game went live
            </>,
            <>
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">
                game.archived
              </code>{" "}
              — a game was archived
            </>,
          ]}
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
            {brand.signatureHeader}
          </code>{" "}
          header. Verify it against your webhook secret before processing.
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
            >
              {verifyExample}
            </SyntaxHighlighter>
          </SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="retry policy" className="mb-0">
        <ArrowList
          items={[
            "Retries on non-2xx responses",
            "Up to 5 attempts with exponential backoff",
            "Events expire after 72 hours if undelivered",
          ]}
        />
        <InfoBox className="mt-4">
          // respond with 2xx within 10 seconds to acknowledge delivery
        </InfoBox>
      </DocSection>
    </div>
  );
}
