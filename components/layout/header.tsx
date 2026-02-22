"use client";

import { Bell, Search } from "lucide-react";
import { ReactNode } from "react";

interface HeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function Header({ title, subtitle, children }: HeaderProps) {
  return (
    <header className="h-16 border-b border-gray-200 bg-white px-6 flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-3">
        {children}
        <button className="btn-ghost p-2 rounded-lg">
          <Search className="w-4 h-4 text-gray-400" />
        </button>
        <button className="btn-ghost p-2 rounded-lg relative">
          <Bell className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </header>
  );
}
