"use client";

import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApiVersionStore, type ApiVersion } from "@/hooks/use-api-version-store";
import { Layers3 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export function VersionSelector() {
  const [mounted, setMounted] = useState(false);
  const version = useApiVersionStore((state) => state.version);
  const setVersion = useApiVersionStore((state) => state.setVersion);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 px-1">
          API Version
        </span>
        <Skeleton className="h-9 w-full bg-input/30" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-1.5 w-full">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/60 px-1">
        API Version
      </span>
      <Select
        value={version}
        onValueChange={(val) => setVersion(val as ApiVersion)}
      >
        <SelectTrigger className="h-9 w-full bg-input/30 border border-input hover:bg-input/50 focus:ring-0 focus:ring-offset-0 font-mono text-xs gap-2 px-3 py-2 text-left justify-between">
          <span className="flex items-center gap-2">
            <Layers3 className="size-3.5 text-muted-foreground shrink-0" />
            <SelectValue placeholder="Select version" />
          </span>
        </SelectTrigger>
        <SelectContent className="bg-popover border font-mono text-xs" position="popper" align="start">
          <SelectItem value="v1" className="cursor-pointer">
            v1 (Stable)
          </SelectItem>
          <SelectItem value="v2" className="cursor-pointer">
            v2 (Beta)
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
