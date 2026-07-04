"use client";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/constants/";
import { VersionSelector } from "@/components/version-selector";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex flex-col gap-2.5 px-4 py-3">
          <VersionSelector />
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground/70 pointer-events-none" />
            <Input
              type="search"
              placeholder="Search the docs..."
              className="pl-9 h-9.5 text-xs font-mono bg-muted/20 border-border/60 hover:bg-muted/30 focus-visible:bg-background/50 focus-visible:border-ring/50 focus-visible:ring-0 focus-visible:ring-offset-0 w-full rounded-xl transition-all"
            />
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sidebarData.guides} label="Guides" />
        <NavMain items={sidebarData.resources} label="Resources" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}

