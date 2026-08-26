import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface ArrowListProps {
  items: ReactNode[];
  className?: string;
}

export function ArrowList({ items, className }: ArrowListProps) {
  return (
    <ul className={cn("space-y-2 text-sm font-mono", className)}>
      {items.map((item, i) => (
        <li key={typeof item === "string" ? item : i}>
          <span className="text-muted-foreground" aria-hidden="true">
            →
          </span>{" "}
          {item}
        </li>
      ))}
    </ul>
  );
}
