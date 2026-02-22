"use client";

import { Sidebar } from "./sidebar";

interface AppShellProps {
  children: React.ReactNode;
  sidebarItems: {
    label: string;
    href: string;
    icon: React.ReactNode;
  }[];
  role: "admin" | "partner";
  userName?: string;
}

export function AppShell({
  children,
  sidebarItems,
  role,
  userName,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar items={sidebarItems} role={role} userName={userName} />
      <main className="flex-1 flex flex-col w-full lg:ml-0">{children}</main>
    </div>
  );
}
