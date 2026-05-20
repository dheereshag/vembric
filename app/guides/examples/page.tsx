import {
  Snippet,
  SnippetCopyButton,
  SnippetHeader,
  SnippetTabsContent,
  SnippetTabsList,
  SnippetTabsTrigger,
} from "@/components/kibo-ui/snippet";

const listGamesNode = `import Vembric from '@vembric/sdk';

const client = new Vembric({ apiKey: process.env.VEMBRIC_API_KEY });

// fetch first page
const page1 = await client.games.list({ limit: 10 });

// fetch next page using cursor
if (page1.has_more) {
  const page2 = await client.games.list({
    limit: 10,
    cursor: page1.next_cursor,
  });
}`;

const listGamesCurl = `# first page
curl "https://api.vembric.io/v1/games?limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"

# next page
curl "https://api.vembric.io/v1/games?limit=10&cursor=cursor_xyz" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

const createOrderNode = `const order = await client.orders.create({
  game_id: 'gm_01abc',
  quantity: 2,
  metadata: { customer_id: 'usr_99' },
});

console.log(order.id); // ord_01xyz`;

const createOrderCurl = `curl -X POST https://api.vembric.io/v1/orders \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "game_id": "gm_01abc",
    "quantity": 2,
    "metadata": { "customer_id": "usr_99" }
  }'`;

const webhookNode = `// Express.js webhook handler
app.post('/webhooks/vembric', express.raw({ type: 'application/json' }), (req, res) => {
  const event = client.webhooks.constructEvent(
    req.body,
    req.headers['x-vembric-signature'],
    process.env.VEMBRIC_WEBHOOK_SECRET,
  );

  if (event.type === 'order.created') {
    console.log('New order:', event.data.id);
  }

  res.sendStatus(200);
});`;

export default function ExamplesPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // guides / examples
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Examples</h1>
        <p className="text-muted-foreground mt-2">
          Common integration patterns with full code snippets.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          list games with pagination
        </h2>
        <p className="text-sm text-muted-foreground mb-4">Traverse all games using cursor pagination.</p>
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
              <SnippetTabsTrigger value="curl">curl</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={listGamesNode} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{listGamesNode}</SnippetTabsContent>
          <SnippetTabsContent value="curl">{listGamesCurl}</SnippetTabsContent>
        </Snippet>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          create an order
        </h2>
        <p className="text-sm text-muted-foreground mb-4">Submit a new order for a game.</p>
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
              <SnippetTabsTrigger value="curl">curl</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={createOrderNode} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{createOrderNode}</SnippetTabsContent>
          <SnippetTabsContent value="curl">{createOrderCurl}</SnippetTabsContent>
        </Snippet>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
          handle a webhook
        </h2>
        <p className="text-sm text-muted-foreground mb-4">Receive and verify incoming webhook events.</p>
        <Snippet defaultValue="node">
          <SnippetHeader>
            <SnippetTabsList>
              <SnippetTabsTrigger value="node">node.js</SnippetTabsTrigger>
            </SnippetTabsList>
            <SnippetCopyButton value={webhookNode} />
          </SnippetHeader>
          <SnippetTabsContent value="node">{webhookNode}</SnippetTabsContent>
        </Snippet>
      </section>
    </div>
  );
}
