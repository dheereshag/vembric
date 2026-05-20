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
import Link from "next/link";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 px-4 py-2">
          <Image
            src="/logo.svg"
            alt="Vembric Logo"
            width={32}
            height={32}
            className="size-8"
          />
          <span className="truncate font-mono font-bold">Vembric</span>
        </Link>
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
