"use client";

import { useEffect, useState } from "react";
import { X, Users, User, Check } from "lucide-react";

interface PublishTemplateModalProps {
  template: {
    id: string;
    package_name: string;
    video_title?: string;
  } | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

interface User {
  id: string;
  name: string;
  email: string;
  group_ids: string[];
}

interface Group {
  id: string;
  name: string;
  description: string;
  user_count: number;
}

export function PublishTemplateModal({
  template,
  open,
  onClose,
  onSuccess,
}: PublishTemplateModalProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [groups, setGroups] = useState<Group[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<string[]>([]);
  const [selectedGroupIds, setSelectedGroupIds] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (open) {
      fetchData();
    }
  }, [open, template?.id]);

  async function fetchData() {
    if (!template) return;

    setLoading(true);
    try {
      // Fetch users and groups
      const [usersRes, groupsRes, assignmentsRes] = await Promise.all([
        fetch("/api/kpoint/admin/users"),
        fetch("/api/kpoint/admin/groups"),
        fetch(`/api/kpoint/admin/templates/${template.id}/assignments`),
      ]);

      if (usersRes.ok) {
        const data = await usersRes.json();
        setUsers(data.users || []);
      }

      if (groupsRes.ok) {
        const data = await groupsRes.json();
        setGroups(data.groups || []);
      }

      if (assignmentsRes.ok) {
        const data = await assignmentsRes.json();
        setSelectedUserIds(data.users?.map((u: User) => u.id) || []);
        setSelectedGroupIds(data.groups?.map((g: Group) => g.id) || []);
      }
    } catch (err) {
      console.error("Failed to fetch data", err);
    } finally {
      setLoading(false);
    }
  }

  async function handleSave() {
    if (!template) return;

    setSaving(true);
    try {
      const res = await fetch(
        `/api/kpoint/admin/templates/${template.id}/publish`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_ids: selectedUserIds,
            group_ids: selectedGroupIds,
          }),
        }
      );

      if (!res.ok) throw new Error("Failed to publish template");

      onSuccess();
      onClose();
    } catch (err) {
      console.error("Failed to save", err);
      alert("Failed to publish template");
    } finally {
      setSaving(false);
    }
  }

  function toggleUser(userId: string) {
    setSelectedUserIds((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  }

  function toggleGroup(groupId: string) {
    setSelectedGroupIds((prev) =>
      prev.includes(groupId)
        ? prev.filter((id) => id !== groupId)
        : [...prev, groupId]
    );
  }

  if (!open || !template) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Publish Template
            </h2>
            <p className="text-sm text-gray-500 mt-1">{template.package_name}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kpoint-600" />
            </div>
          ) : (
            <div className="space-y-6">
              {/* Groups Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium text-gray-900">Publish to Groups</h3>
                  <span className="text-sm text-gray-500">
                    ({selectedGroupIds.length} selected)
                  </span>
                </div>
                <div className="space-y-2">
                  {groups.length === 0 ? (
                    <p className="text-sm text-gray-500 py-4">No groups available</p>
                  ) : (
                    groups.map((group) => (
                      <label
                        key={group.id}
                        className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedGroupIds.includes(group.id)}
                          onChange={() => toggleGroup(group.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">
                              {group.name}
                            </span>
                            <span className="text-xs text-gray-500">
                              ({group.user_count} members)
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 mt-0.5">
                            {group.description}
                          </p>
                        </div>
                        {selectedGroupIds.includes(group.id) && (
                          <Check className="w-5 h-5 text-kpoint-600 flex-shrink-0" />
                        )}
                      </label>
                    ))
                  )}
                </div>
              </div>

              {/* Users Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <User className="w-5 h-5 text-gray-700" />
                  <h3 className="font-medium text-gray-900">Publish to Individual Users</h3>
                  <span className="text-sm text-gray-500">
                    ({selectedUserIds.length} selected)
                  </span>
                </div>
                <div className="space-y-2">
                  {users.length === 0 ? (
                    <p className="text-sm text-gray-500 py-4">No users available</p>
                  ) : (
                    users.map((user) => (
                      <label
                        key={user.id}
                        className="flex items-start gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={selectedUserIds.includes(user.id)}
                          onChange={() => toggleUser(user.id)}
                          className="mt-0.5"
                        />
                        <div className="flex-1 min-w-0">
                          <span className="font-medium text-gray-900">
                            {user.name}
                          </span>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                        {selectedUserIds.includes(user.id) && (
                          <Check className="w-5 h-5 text-kpoint-600 flex-shrink-0" />
                        )}
                      </label>
                    ))
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
          <button onClick={onClose} className="btn-secondary">
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn-primary flex items-center gap-2"
          >
            {saving ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                Publishing...
              </>
            ) : (
              "Publish Template"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
