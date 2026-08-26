"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useApiVersionStore, type ApiVersion } from "@/hooks/use-api-version-store";
import { ChevronsUpDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { brand } from "@/constants/brand";

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
    return <Skeleton className="h-[60px] w-full bg-input/30 rounded-xl" />;
  }

  return (
    <Select value={version} onValueChange={(val) => setVersion(val as ApiVersion)}>
      <SelectTrigger className="w-full h-auto p-2.5 bg-background border border-border/80 rounded-xl hover:bg-muted/10 transition-colors [&>span:last-child]:hidden focus:ring-0 focus:ring-offset-0">
        <div className="flex items-center gap-3 w-full text-left">
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-600 text-white shrink-0">
            <Image
              src="/logo.svg"
              alt={`${brand.name} Logo`}
              width={22}
              height={22}
              className="size-5.5 brightness-0 invert"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="truncate text-sm font-semibold text-foreground leading-none">
              {brand.name}
            </span>
            <span className="truncate text-xs text-muted-foreground leading-none mt-1">
              {version === "v1" ? "v1.0.1" : "v2.0.0-beta"}
            </span>
          </div>
          <ChevronsUpDown className="size-4 text-muted-foreground shrink-0" />
          <span className="hidden">
            <SelectValue placeholder="Select version" />
          </span>
        </div>
      </SelectTrigger>
      <SelectContent
        className="bg-popover border font-mono text-xs"
        position="popper"
        align="start"
      >
        <SelectItem value="v1" className="cursor-pointer">
          v1 (Stable)
        </SelectItem>
        <SelectItem value="v2" className="cursor-pointer">
          v2 (Beta)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
