"use client";

import { AppShell } from "@/components/layout/app-shell";
import { partnerSidebarItems } from "@/components/layout/sidebar";

interface PartnerShellProps {
  children: React.ReactNode;
  userName?: string;
}

export function PartnerShell({ children, userName }: PartnerShellProps) {
  return (
    <AppShell
      sidebarItems={partnerSidebarItems}
      role="partner"
      userName={userName}
    >
      {children}
    </AppShell>
  );
}
