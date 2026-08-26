import { features } from "@/constants/features";

export function FeaturesGrid() {
  return (
    <section aria-label="features" className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        {"// features"}
      </h2>
      <div className="border divide-y sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x">
        {features.map(({ label, title, description }) => (
          <div key={title} className="p-5 space-y-3">
            <span className="font-mono text-xs text-muted-foreground">{label}</span>
            <h3 className="font-mono text-sm font-semibold">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
