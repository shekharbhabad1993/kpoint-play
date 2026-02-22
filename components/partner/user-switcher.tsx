"use client";

import { useState, useEffect } from "react";
import { User, ChevronDown } from "lucide-react";

interface MockUser {
  id: string;
  name: string;
  email: string;
  role: string;
}

export function UserSwitcher() {
  const [currentUser, setCurrentUser] = useState<MockUser | null>(null);
  const [allUsers, setAllUsers] = useState<MockUser[]>([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const res = await fetch("/api/kpoint/admin/users");
      if (res.ok) {
        const data = await res.json();
        setAllUsers(data.users || []);

        // Get current user
        const currentRes = await fetch("/api/kpoint/user/current");
        if (currentRes.ok) {
          const currentData = await currentRes.json();
          setCurrentUser(currentData.user);
        }
      }
    } catch (err) {
      console.error("Failed to fetch users", err);
    }
  }

  async function switchUser(userId: string) {
    try {
      const res = await fetch("/api/kpoint/user/switch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId }),
      });

      if (res.ok) {
        const data = await res.json();
        setCurrentUser(data.user);
        setShowDropdown(false);

        // Reload the page to refresh template data
        window.location.reload();
      }
    } catch (err) {
      console.error("Failed to switch user", err);
    }
  }

  if (!currentUser) return null;

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-kpoint-100 flex items-center justify-center">
          <User className="w-4 h-4 text-kpoint-600" />
        </div>
        <div className="text-left hidden sm:block">
          <p className="text-sm font-medium text-gray-900">{currentUser.name}</p>
          <p className="text-xs text-gray-500">{currentUser.email}</p>
        </div>
        <ChevronDown className="w-4 h-4 text-gray-400" />
      </button>

      {showDropdown && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
          <div className="px-3 py-2 border-b border-gray-100">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Switch User (Mock Mode)
            </p>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {allUsers.map((user) => (
              <button
                key={user.id}
                onClick={() => switchUser(user.id)}
                className={`w-full text-left px-3 py-2 hover:bg-gray-50 transition-colors ${
                  user.id === currentUser.id ? "bg-kpoint-50" : ""
                }`}
              >
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
