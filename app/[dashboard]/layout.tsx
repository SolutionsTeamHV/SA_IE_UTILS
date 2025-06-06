import { headers } from "next/headers";
import type { Metadata } from "next";
import "../globals.css";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import DarkModeToggle from "@/components/DarkModeToggle";
import { AppSidebar } from "@/components/app-sidebar";

export const metadata: Metadata = {
  title: "SA / IE Utils",
  description: "Built with 💙 for SA / IE Team • HyperVerge",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  const user = {
    name: (await headersList).get("x-user-name") || "Guest",
    email: (await headersList).get("x-user-email") || "guest@example.com",
    avatar: (await headersList).get("x-user-avatar") || "/avatars/default.jpg",
  };

  return (
    <SidebarProvider>
      <AppSidebar user={user} /> {/* ✅ Pass user prop */}
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center px-4 justify-between">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex items-center gap-2">
            <DarkModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
            <div className="flex h-full items-center justify-center">
              {children}
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
