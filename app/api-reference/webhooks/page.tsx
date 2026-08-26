import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";
import { CodeBlock } from "@/components/code-block";
import { webhooksContent } from "@/constants/page-content";
import { webhookPayloadExample, webhookVerifyExample } from "@/constants/code-snippets";
import { JavaScriptIcon, JsonIcon } from "@/components/api-doc/icons";

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
              <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">{event.code}</code> —{" "}
              {event.description}
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
            <SnippetCopyButton value={webhookPayloadExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">
            <CodeBlock language="json" code={webhookPayloadExample} />
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
            <SnippetCopyButton value={webhookVerifyExample} />
          </SnippetHeader>
          <SnippetTabsContent value="node">
            <CodeBlock language="javascript" code={webhookVerifyExample} />
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
