import Link from "next/link";

interface SdkCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  href?: string;
}

export function SdkCard({ name, description, icon, href = "#" }: SdkCardProps) {
  return (
    <div className="border p-5 flex items-start gap-4 hover:bg-muted/20 transition-colors">
      <div className="shrink-0 mt-0.5">{icon}</div>
      <div className="space-y-2">
        <h3 className="font-mono text-sm font-semibold">{name}</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
        <Link href={href} className="font-mono text-xs underline underline-offset-4">
          <span aria-hidden="true">→ </span>Read more
        </Link>
      </div>
    </div>
  );
}
