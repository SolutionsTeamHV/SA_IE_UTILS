"use client";

import * as React from "react";
import { Command, Frame, LifeBuoy, Send, SquareTerminal } from "lucide-react";

import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavMain } from "./nav-main";
import Link from "next/link";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {
  const navMain = [
    {
      title: "Utils",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Workflow Insights 📊",
          url: "/dashboard/utils/workflow-details",
        },
        {
          title: "Production Checkup 🚀",
          url: "#",
        },
        {
          title: "Super Copy 📤",
          url: "#",
        },
        {
          title: "Magic Summary 🔮",
          url: "#",
        },
        {
          title: "My PRs 🛠️",
          url: "#",
        },
      ],
    },
  ];

  const navSecondary = [
    {
      title: "Support",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ];

  const projects = [
    {
      name: "WIP",
      url: "#",
      icon: Frame,
    },
  ];

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/dashboard">
                <a className="flex">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <Command className="size-4" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">Hyperverge</span>
                    <span className="truncate text-xs">Enterprise</span>
                  </div>
                </a>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
        <NavProjects projects={projects} />
        <NavSecondary items={navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
