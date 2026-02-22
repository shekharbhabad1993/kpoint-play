"use client";

import { AppShell } from "@/components/layout/app-shell";
import { adminSidebarItems } from "@/components/layout/sidebar";

interface AdminShellProps {
  children: React.ReactNode;
  userName?: string;
}

export function AdminShell({ children, userName }: AdminShellProps) {
  return (
    <AppShell
      sidebarItems={adminSidebarItems}
      role="admin"
      userName={userName}
    >
      {children}
    </AppShell>
  );
}
