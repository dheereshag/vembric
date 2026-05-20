import { type LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  actionText: string;
  actionHref: string;
}

export function NavCard({
  title,
  description,
  icon: Icon,
  actionText,
  actionHref,
}: NavCardProps) {
  return (
    <div className="border p-5 flex flex-col gap-4 hover:bg-muted/20 transition-colors">
      <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
        <Icon className="size-3.5" />
        <span>{title}</span>
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
        {description}
      </p>
      <Link
        href={actionHref}
        className="font-mono text-xs underline underline-offset-4 self-start"
      >
        → {actionText}
      </Link>
    </div>
  );
}
