const releases = [
  {
    version: "v2.3.0",
    date: "2026-05-20",
    tag: "latest",
    changes: [
      { type: "feat", text: "Webhook signature verification via x-vembric-signature header" },
      { type: "feat", text: "Cursor-based pagination on all list endpoints" },
      { type: "feat", text: "Idempotency-Key support on POST and PATCH requests" },
    ],
  },
  {
    version: "v2.2.0",
    date: "2026-04-10",
    tag: null,
    changes: [
      { type: "feat", text: "Orders resource with full CRUD support" },
      { type: "fix",  text: "Corrected 422 response body for missing required fields" },
      { type: "chore", text: "Deprecated X-API-Key header in favour of Authorization: Bearer" },
    ],
  },
  {
    version: "v2.1.0",
    date: "2026-03-01",
    tag: null,
    changes: [
      { type: "feat",  text: "Games resource — list, retrieve, create, update, delete" },
      { type: "feat",  text: "Test environment support with sk_test_ keys" },
      { type: "fix",   text: "Rate limit headers now returned on all responses" },
    ],
  },
  {
    version: "v2.0.0",
    date: "2026-01-15",
    tag: null,
    changes: [
      { type: "breaking", text: "Migrated base URL to api.vembric.io/v1" },
      { type: "feat",     text: "Structured JSON error responses with error.code field" },
      { type: "chore",    text: "Dropped support for XML response format" },
    ],
  },
];

const typeStyle: Record<string, string> = {
  feat:     "text-green-400 border-green-500/30",
  fix:      "text-blue-400 border-blue-500/30",
  chore:    "text-muted-foreground border-border",
  breaking: "text-red-400 border-red-500/30",
};

export default function ChangelogPage() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // support / changelog
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Changelog</h1>
        <p className="text-muted-foreground mt-2">
          A record of all notable API changes, listed newest first.
        </p>
      </div>

      <div className="border-b mb-10" />

      <div className="space-y-10">
        {releases.map(({ version, date, tag, changes }) => (
          <section key={version}>
            <div className="flex items-center gap-3 mb-4">
              <h2 className="font-mono text-lg font-bold tracking-tight">{version}</h2>
              {tag && (
                <span className="font-mono text-xs border px-1.5 py-0.5 text-green-400 border-green-500/30">
                  {tag}
                </span>
              )}
              <span className="font-mono text-xs text-muted-foreground ml-auto">{date}</span>
            </div>
            <div className="border divide-y">
              {changes.map(({ type, text }, i) => (
                <div key={i} className="flex items-start gap-3 px-4 py-3">
                  <span className={`font-mono text-xs border px-1.5 py-0.5 shrink-0 mt-0.5 ${typeStyle[type] ?? typeStyle.chore}`}>
                    {type}
                  </span>
                  <span className="text-sm">{text}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
