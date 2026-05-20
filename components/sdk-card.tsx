interface SdkCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
}

export function SdkCard({ name, description, icon }: SdkCardProps) {
  return (
    <div className="border p-5 flex items-start gap-4 hover:bg-muted/20 transition-colors">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-mono text-sm font-semibold">{name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          {description}
        </p>
        <button className="font-mono text-xs underline underline-offset-4">
          → Read more
        </button>
      </div>
    </div>
  );
}
