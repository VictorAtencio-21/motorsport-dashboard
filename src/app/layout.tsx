import { PropsWithChildren } from "react";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
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
              <SidebarTrigger />
              {children}
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
