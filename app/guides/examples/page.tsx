import { PageHeader } from "@/components/doc/page-header";
import { DocSection } from "@/components/doc/doc-section";
import {
  Snippet, SnippetCopyButton, SnippetHeader,
  SnippetTabsContent, SnippetTabsList, SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const listGames = `const games = await client.games.list({ limit: 10 });
console.log(games.data);`;

const createOrder = `const order = await client.orders.create({
  game_id: 'gm_01',
  quantity: 1,
  currency: 'usd',
});
console.log(order.id);`;

const webhookHandler = `app.post('/webhooks/vembric', (req, res) => {
  const sig = req.headers['x-vembric-signature'];
  verifySignature(sig, req.body, process.env.WEBHOOK_SECRET);

  if (req.body.type === 'order.created') {
    fulfillOrder(req.body.data);
  }

  res.sendStatus(200);
});`;

export default function ExamplesPage() {
  return (
    <div className="p-6">
      <PageHeader
        path="// guides / examples"
        title="Examples"
        description="Real-world code snippets for common Vembric integration scenarios."
      />

      <DocSection title="list games">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={listGames} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{listGames}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="create an order">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={createOrder} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{createOrder}</SnippetTabsContent>
        </Snippet>
      </DocSection>

      <DocSection title="webhook handler" className="mb-0">
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js (express)</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={webhookHandler} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{webhookHandler}</SnippetTabsContent>
        </Snippet>
      </DocSection>
    </div>
  );
}
