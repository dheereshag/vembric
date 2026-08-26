import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface DocSectionProps extends Omit<HTMLAttributes<HTMLElement>, "title" | "children"> {
  title: React.ReactNode;
  children: React.ReactNode;
}

export function DocSection({ title, children, className, ...props }: DocSectionProps) {
  return (
    <section className={cn("mb-10", className)} {...props}>
      <h2 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}
