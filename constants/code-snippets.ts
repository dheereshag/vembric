import { brand } from "./brand";

// ── Installation commands ────────────────────────────────────────────────────

export const installCommands = {
  npm:  `npm install ${brand.sdk.npm}`,
  yarn: `yarn add ${brand.sdk.npm}`,
  pnpm: `pnpm add ${brand.sdk.npm}`,
  pip:  `pip install ${brand.sdk.pip}`,
  gem:  `gem install ${brand.sdk.gem}`,
  go:   `go get ${brand.sdk.go}`,
};

// ── Authentication / Quick Start ─────────────────────────────────────────────

export const authCurlExample = `curl ${brand.apiBaseUrl}/games \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

export const authNodeExample = `import ${brand.sdk.importName} from '${brand.sdk.npm}';

const client = new ${brand.sdk.importName}({ apiKey: 'YOUR_API_KEY' });`;

export const quickStartNodeExample = `import ${brand.sdk.importName} from '${brand.sdk.npm}';

const client = new ${brand.sdk.importName}({ apiKey: 'YOUR_API_KEY' });
const games = await client.games.list();
console.log(games);`;

export const quickStartResponse = `{
  "data": [
    { "id": "gm_01", "title": "Chess", "status": "active" },
    { "id": "gm_02", "title": "Poker", "status": "active" }
  ],
  "next_cursor": "cursor_xyz",
  "has_more": true
}`;

// ── Pagination ───────────────────────────────────────────────────────────────

export const paginationCurlExample = `curl "${brand.apiBaseUrl}/games?limit=20&cursor=cursor_xyz" \\
  -H "Authorization: Bearer YOUR_API_KEY"`;

export const paginationResponseExample = `{
  "data": [...],
  "next_cursor": "cursor_abc",
  "has_more": true
}`;

// ── Webhooks ─────────────────────────────────────────────────────────────────

export const webhookPayloadExample = `{
  "id": "evt_01",
  "type": "order.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "id": "ord_01",
    "status": "pending",
    "amount": 2999
  }
}`;

export const webhookVerifyExample = `import crypto from 'crypto';

const signature = req.headers['${brand.signatureHeader.toLowerCase()}'];
const body = JSON.stringify(req.body);
const expected = crypto
  .createHmac('sha256', process.env.WEBHOOK_SECRET)
  .update(body)
  .digest('hex');

if (signature !== expected) throw new Error('Invalid signature');`;

// ── Error Handling ───────────────────────────────────────────────────────────

export const errorResponseExample = `{
  "error": {
    "code": "invalid_request",
    "message": "The 'title' field is required.",
    "status": 422
  }
}`;

// ── Examples page ────────────────────────────────────────────────────────────

export const examplesListGames = `const games = await client.games.list({ limit: 10 });
console.log(games.data);`;

export const examplesCreateOrder = `const order = await client.orders.create({
  game_id: 'gm_01',
  quantity: 1,
  currency: 'usd',
});
console.log(order.id);`;

export const examplesWebhookHandler = `app.post('${brand.webhookPath}', (req, res) => {
  const sig = req.headers['${brand.signatureHeader.toLowerCase()}'];
  verifySignature(sig, req.body, process.env.WEBHOOK_SECRET);

  if (req.body.type === 'order.created') {
    fulfillOrder(req.body.data);
  }

  res.sendStatus(200);
});`;
