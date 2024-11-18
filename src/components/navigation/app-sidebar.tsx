"use client";
import * as React from "react";
import {
  Users,
  User,
  LifeBuoy,
  Send,
  SlidersHorizontal,
  Home,
  CalendarDays,
} from "lucide-react";
import { NavMain } from "@/components/navigation/nav-main";
import { NavSecondary } from "@/components/navigation/nav-secondary";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import Image from "next/image";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { constructors, drivers } = props;

  console.log({ constructors, drivers });

  const data = {
    navMain: [
      {
        title: "Teams",
        url: "/en/teams",
        icon: Users,
        items: constructors?.map((constructor) => ({
          title: constructor?.name,
          url: `/en/teams/${constructor.constructorId}`,
        })),
      },
      {
        title: "Drivers",
        url: "/en/drivers",
        icon: User,
        items: drivers?.map((driver) => ({
          title: `${driver.givenName} ${driver.familyName} (${driver.code})`,
          url: `/en/drivers/${driver.driverId}`,
        })),
      },
      {
        title: "Settings",
        url: "#",
        icon: SlidersHorizontal,
        items: [
          {
            title: "General",
            url: "#",
          },
          {
            title: "Team",
            url: "#",
          },
          {
            title: "Billing",
            url: "#",
          },
          {
            title: "Limits",
            url: "#",
          },
        ],
      },
    ],
    navSecondary: [
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
    ],
  };

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="/en/home">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  {/* <Command className="size-4" /> */}
                  <Image
                    src={"/Logos/RaceSyncWihoutFonts.png"}
                    alt="RaceSync Logo"
                    width={500}
                    height={500}
                    className="size-10 rounded-sm"
                  />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">RaceSync</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm">
                  <a href={"/en/home"}>
                    <Home />
                    <span>Home</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm">
                  <a href={"/en/schedule"}>
                    <CalendarDays />
                    <span>Race Schedule</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  );
}
