import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import { ArrowList } from "@/components/doc/arrow-list";
import { InfoBox } from "@/components/doc/info-box";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const payloadExample = `{
  "id": "evt_01",
  "type": "order.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "id": "ord_01",
    "status": "pending",
    "amount": 2999
  }
}`;

const verifyExample = `import crypto from 'crypto';

const signature = req.headers['x-vembric-signature'];
const body = JSON.stringify(req.body);
const expected = crypto
  .createHmac('sha256', process.env.WEBHOOK_SECRET)
  .update(body)
  .digest('hex');

if (signature !== expected) throw new Error('Invalid signature');`;

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
            <><code className="font-mono bg-muted px-1.5 py-0.5 text-xs">order.created</code> — a new order was placed</>,
            <><code className="font-mono bg-muted px-1.5 py-0.5 text-xs">order.updated</code> — an order status changed</>,
            <><code className="font-mono bg-muted px-1.5 py-0.5 text-xs">order.cancelled</code> — an order was cancelled</>,
            <><code className="font-mono bg-muted px-1.5 py-0.5 text-xs">game.published</code> — a game went live</>,
            <><code className="font-mono bg-muted px-1.5 py-0.5 text-xs">game.archived</code> — a game was archived</>,
          ]}
        />
      </DocSection>

      <DocSection title="payload structure">
        <Snippet defaultValue="json">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="json">payload</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={payloadExample} />
          </SnippetHeader>
          <SnippetTabsContent value="json">{payloadExample}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="signature verification">
        <p className="text-sm leading-relaxed mb-4">
          Each webhook includes an{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">X-Vembric-Signature</code>{" "}
          header. Verify it against your webhook secret before processing.
        </p>
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={verifyExample} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{verifyExample}</SnippetTabsContent>
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
        <InfoBox className="mt-4">// respond with 2xx within 10 seconds to acknowledge delivery</InfoBox>
      </DocSection>
    </div>
  );
}
