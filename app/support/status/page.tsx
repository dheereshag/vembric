const services = [
  { name: "API",              status: "operational",    uptime: "99.98%" },
  { name: "Webhooks",         status: "operational",    uptime: "99.95%" },
  { name: "Dashboard",        status: "operational",    uptime: "99.99%" },
  { name: "SDK CDN",          status: "operational",    uptime: "100.0%" },
  { name: "Authentication",   status: "operational",    uptime: "99.99%" },
];

const incidents: { date: string; title: string; resolved: boolean; detail: string }[] = [];

const statusDot: Record<string, string> = {
  operational:     "bg-green-500",
  degraded:        "bg-yellow-500",
  partial_outage:  "bg-orange-500",
  major_outage:    "bg-red-500",
};

const statusLabel: Record<string, string> = {
  operational:     "Operational",
  degraded:        "Degraded",
  partial_outage:  "Partial Outage",
  major_outage:    "Major Outage",
};

export default function StatusPage() {
  const allOperational = services.every((s) => s.status === "operational");

  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <div className="mb-8">
        <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-1">
          // support / status
        </p>
        <h1 className="font-mono text-3xl font-bold tracking-tight">Status</h1>
        <p className="text-muted-foreground mt-2">
          Current status of all Vembric services.
        </p>
      </div>

      <div className="border-b mb-10" />

      <section className="mb-10">
        <div className={`border p-4 flex items-center gap-3 font-mono text-sm ${allOperational ? "bg-green-500/5 border-green-500/30" : "bg-yellow-500/5 border-yellow-500/30"}`}>
          <span className={`inline-block w-2.5 h-2.5 rounded-full ${allOperational ? "bg-green-500" : "bg-yellow-500"}`} />
          {allOperational ? "All systems operational" : "Some systems are experiencing issues"}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          services
        </h2>
        <div className="border divide-y">
          <div className="grid grid-cols-12 bg-muted/50 px-4 py-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
            <span className="col-span-5">service</span>
            <span className="col-span-4">status</span>
            <span className="col-span-3 text-right">30d uptime</span>
          </div>
          {services.map(({ name, status, uptime }) => (
            <div key={name} className="grid grid-cols-12 px-4 py-3 items-center font-mono text-sm">
              <span className="col-span-5">{name}</span>
              <span className="col-span-4 flex items-center gap-2">
                <span className={`inline-block w-2 h-2 rounded-full ${statusDot[status]}`} />
                <span className="text-xs">{statusLabel[status]}</span>
              </span>
              <span className="col-span-3 text-right text-xs text-muted-foreground">{uptime}</span>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          recent incidents
        </h2>
        {incidents.length === 0 ? (
          <div className="border p-4 font-mono text-sm text-muted-foreground">
            // no incidents in the last 30 days
          </div>
        ) : (
          <div className="border divide-y">
            {incidents.map(({ date, title, resolved, detail }) => (
              <div key={date} className="px-4 py-4">
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-mono text-xs text-muted-foreground">{date}</span>
                  <span className={`font-mono text-xs px-1.5 py-0.5 border ${resolved ? "border-green-500/30 text-green-400" : "border-yellow-500/30 text-yellow-400"}`}>
                    {resolved ? "resolved" : "ongoing"}
                  </span>
                </div>
                <p className="font-mono text-sm">{title}</p>
                <p className="text-xs text-muted-foreground mt-1">{detail}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
