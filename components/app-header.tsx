"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { sidebarData } from "@/constants/";
import { Search } from "lucide-react";

export function AppHeader() {
  const pathname = usePathname();

  const allSections = [...sidebarData.guides, ...sidebarData.resources];

  let sectionTitle: string | null = null;
  let pageTitle: string | null = null;

  for (const section of allSections) {
    const match = section.items?.find((item) => item.url === pathname);
    if (match) {
      sectionTitle = section.title;
      pageTitle = match.title;
      break;
    }
  }

  return (
    <header className="flex h-14 shrink-0 items-center border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex w-full items-center gap-3 px-4">
        {/* Left: trigger + breadcrumb */}
        <div className="flex items-center gap-2 shrink-0">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="data-[orientation=vertical]:h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {sectionTitle && (
                <>
                  <BreadcrumbItem className="hidden md:block">
                    <span className="font-mono text-xs text-muted-foreground">
                      {sectionTitle}
                    </span>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="hidden md:block" />
                </>
              )}
              <BreadcrumbItem>
                <BreadcrumbPage className="font-mono text-xs">
                  {pageTitle || "Documentation"}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Center: search bar */}
        <div className="flex flex-1 justify-center">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-3.5 text-muted-foreground pointer-events-none" />
            <Input
              type="search"
              placeholder="Search docs..."
              className="pl-8 h-8 text-xs font-mono bg-muted/30 border-muted-foreground/20 focus-visible:bg-background w-full"
            />
          </div>
        </div>

        {/* Right: spacer to balance left side */}
        <div className="shrink-0 w-[120px] hidden md:block" />
      </div>
    </header>
  );
}

