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
import { brand } from "@/constants/brand";
import Link from "next/link";
import Image from "next/image";
import { VersionSelector } from "@/components/version-selector";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <div className="flex flex-col gap-3 px-4 py-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt={`${brand.name} Logo`}
              width={32}
              height={32}
              className="size-8"
            />
            <span className="truncate font-mono font-bold">{brand.name}</span>
          </Link>
          <VersionSelector />
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
