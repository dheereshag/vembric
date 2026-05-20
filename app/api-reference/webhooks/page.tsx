import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const payloadExample = `{
  "id": "evt_01abc",
  "type": "order.created",
  "created_at": "2026-05-20T10:00:00Z",
  "data": {
    "id": "ord_01xyz",
    "status": "pending",
    "total": 4200
  }
}`;

const verifyExample = `import crypto from 'crypto';

const signature = req.headers['x-vembric-signature'];
const payload   = req.rawBody;
const secret    = process.env.VEMBRIC_WEBHOOK_SECRET;

const expected = crypto
  .createHmac('sha256', secret)
  .update(payload)
  .digest('hex');

if (signature !== expected) {
  return res.status(401).send('Invalid signature');
}`;

export default function WebhooksPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // api-reference / webhooks
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Webhooks</h1>
        <p className="text-muted-foreground mt-2">
          Receive real-time event notifications via HTTP POST to your endpoint.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          setup
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Register your endpoint URL in the Vembric dashboard under{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">Settings → Webhooks</code>.
          Vembric will send a <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">POST</code> request
          to your URL whenever a subscribed event occurs.
        </p>
        <ul className="space-y-2 text-sm font-mono mb-4">
          <li><span className="text-muted-foreground">→</span> Your endpoint must return <code className="bg-muted px-1">2xx</code> within 10 seconds</li>
          <li><span className="text-muted-foreground">→</span> Failed deliveries are retried up to 5 times with exponential backoff</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          event types
        </h2>
        <div className="border divide-y font-mono text-sm">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-5">event</span>
            <span className="col-span-7">description</span>
          </div>
          {[
            ["order.created",   "A new order was created"],
            ["order.updated",   "An order was updated"],
            ["order.completed", "An order reached completed status"],
            ["game.created",    "A new game was created"],
            ["game.updated",    "A game was updated"],
          ].map(([event, desc]) => (
            <div key={event} className="grid grid-cols-12 px-4 py-3">
              <code className="col-span-5 text-xs">{event}</code>
              <span className="col-span-7 text-xs text-muted-foreground">{desc}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          payload structure
        </h2>
        <Snippet defaultValue="payload">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="payload">payload</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={payloadExample} />
          </SnippetHeader>
          <SnippetTabsContent value="payload">{payloadExample}</SnippetTabsContent>
        </Snippet>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          verifying signatures
        </h2>
        <p className="text-sm leading-relaxed mb-4">
          Every request includes a{" "}
          <code className="font-mono bg-muted px-1.5 py-0.5 text-xs">x-vembric-signature</code>{" "}
          header — an HMAC-SHA256 hex digest of the raw request body signed with your webhook secret.
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
      </section>
    </div>
  );
}
