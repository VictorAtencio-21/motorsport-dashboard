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
  SidebarTrigger,
} from "@/components/ui/sidebar";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { constructors, drivers } = props;
  const pathname = usePathname();
  const actualRoute = pathname.split("/")[2];

  const data = {
    navMain: [
      {
        title: "Teams",
        url: "/en/teams",
        isActive: actualRoute === "teams",
        icon: Users,
        items: constructors?.map((constructor) => ({
          title: constructor?.name,
          url: `/en/teams/${constructor.constructorId}`,
        })),
      },
      {
        title: "Drivers",
        url: "/en/drivers",
        isActive: actualRoute === "drivers",
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
            title: "Units",
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
    <Sidebar variant="inset" collapsible="icon" {...props}>
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
                  <Link href={"/en/home"}>
                    <Home />
                    <span>Home</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild size="sm">
                  <Link href={"/en/schedule"}>
                    <CalendarDays />
                    <span>Race Schedule</span>
                  </Link>
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
