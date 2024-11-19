import { PropsWithChildren } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/navigation/app-sidebar";
import "./globals.css";

// Data fetching for teams and drivers
import { getContstructors } from "@/lib/ergastf1";
import { getDrivers } from "@/lib/ergastf1";

export default async function RootLayout({ children }: PropsWithChildren) {
  // Fetch constructors and drivers data in parallel
  const [constructorsData, driverData] = await Promise.all([
    getContstructors(),
    getDrivers(),
  ]);

  const { Constructors } = constructorsData?.MRData?.ConstructorTable || {};
  const { Drivers } = driverData?.MRData?.DriverTable || {};

  return (
    <html lang="en">
      <body>
        <SidebarProvider>
          <AppSidebar
            constructors={Constructors ?? []}
            drivers={Drivers ?? []}
          />
          <SidebarInset>
            <main>
              <header className="absolute top-0 z-50 flex h-10 shrink-0 items-center gap-2 px-4 bg-transparent">
                <SidebarTrigger className="text-white bg-secondary-dark" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </header>
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
