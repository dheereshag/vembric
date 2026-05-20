const defaultFeatures = [
  {
    label: "01",
    title: "Interactive Playground",
    description:
      "Test API requests right from your browser and view syntax-highlighted responses.",
  },
  {
    label: "02",
    title: "Intuitive Navigation",
    description:
      "Easily browse resources and actions with the collapsible sidebar structure.",
  },
  {
    label: "03",
    title: "Production Ready",
    description:
      "Fully responsive, built on Next.js with Turbopack for optimal performance.",
  },
];

export function FeaturesGrid() {
  return (
    <div className="space-y-4">
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
        // features
      </h2>
      <div className="border divide-y sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x">
        {defaultFeatures.map(({ label, title, description }) => (
          <div key={title} className="p-5 space-y-3">
            <span className="font-mono text-xs text-muted-foreground">
              {label}
            </span>
            <h3 className="font-mono text-sm font-semibold">{title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
