import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

type InfoBoxProps = HTMLAttributes<HTMLDivElement>;

export function InfoBox({ children, className, ...props }: InfoBoxProps) {
  return (
    <div
      className={cn(
        "border p-4 bg-muted/30 font-mono text-xs text-muted-foreground",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
