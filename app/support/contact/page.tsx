export default function ContactPage() {
  const channels = [
    {
      label: "Email support",
      value: "support@vembric.io",
      note: "Response within 1 business day",
    },
    {
      label: "GitHub issues",
      value: "github.com/vembric",
      note: "Bug reports and feature requests",
    },
    {
      label: "Discord community",
      value: "discord.gg/vembric",
      note: "Real-time help from the community",
    },
    {
      label: "Enterprise",
      value: "enterprise@vembric.io",
      note: "SLAs, dedicated support, custom contracts",
    },
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // support / contact
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground mt-2">
          Get in touch with the Vembric team.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          channels
        </h2>
        <div className="border divide-y">
          {channels.map(({ label, value, note }) => (
            <div key={label} className="px-4 py-4">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                {label}
              </p>
              <code className="font-mono text-sm">{value}</code>
              <p className="text-xs text-muted-foreground mt-1">{note}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          before reaching out
        </h2>
        <ul className="space-y-2 text-sm font-mono">
          <li><span className="text-muted-foreground">→</span> Check the <a href="/support/faq" className="underline underline-offset-4">FAQ</a> for common questions</li>
          <li><span className="text-muted-foreground">→</span> Include the <code className="bg-muted px-1">request-id</code> header value from the failing response</li>
          <li><span className="text-muted-foreground">→</span> Describe the exact request and response you received</li>
          <li><span className="text-muted-foreground">→</span> Check the <a href="/support/status" className="underline underline-offset-4">Status page</a> for known incidents</li>
        </ul>
      </section>
    </div>
  );
}
