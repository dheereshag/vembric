import { Play, Compass, ExternalLink } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const defaultFeatures: Feature[] = [
  {
    title: "Interactive Playground",
    description: "Test API requests right from your browser and view syntax-highlighted responses.",
    icon: Play,
  },
  {
    title: "Intuitive Navigation",
    description: "Easily browse resources and actions with our collapsible sidebar structure.",
    icon: Compass,
  },
  {
    title: "Production Ready",
    description: "Fully responsive design built on Next.js 16 with Turbopack for optimal performance.",
    icon: ExternalLink,
  },
];

export function FeaturesGrid() {
  return (
    <div className="mt-4 space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Template Features</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {defaultFeatures.map((feature) => (
          <div key={feature.title} className="flex gap-4 p-4 rounded-2xl bg-muted/30">
            <div className="p-2 rounded-lg bg-primary/5 text-primary h-fit">
              <feature.icon className="size-4" />
            </div>
            <div className="space-y-1">
              <h3 className="font-semibold text-sm">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
