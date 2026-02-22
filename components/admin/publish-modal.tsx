"use client";

import { useState } from "react";
import { Modal } from "@/components/shared/modal";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

interface PublishModalProps {
  packageInfo: { id: string; name: string } | null;
  open: boolean;
  onClose: () => void;
}

export function PublishModal({ packageInfo, open, onClose }: PublishModalProps) {
  const [users, setUsers] = useState("");
  const [groups, setGroups] = useState("");
  const [publishing, setPublishing] = useState(false);
  const [result, setResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  async function handlePublish() {
    if (!packageInfo) return;

    const userList = users
      .split(",")
      .map((u) => u.trim())
      .filter(Boolean);
    const groupList = groups
      .split(",")
      .map((g) => g.trim())
      .filter(Boolean);

    if (userList.length === 0 && groupList.length === 0) {
      setResult({
        success: false,
        message: "Please enter at least one user or group.",
      });
      return;
    }

    setPublishing(true);
    setResult(null);

    try {
      const res = await fetch("/api/kpoint/publish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          package_id: packageInfo.id,
          users: userList.length > 0 ? userList : undefined,
          groups: groupList.length > 0 ? groupList : undefined,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setResult({
          success: false,
          message: data.error || "Failed to publish",
        });
        return;
      }

      setResult({
        success: true,
        message: `Package published successfully to ${userList.length} user(s) and ${groupList.length} group(s).`,
      });
    } catch (err) {
      setResult({
        success: false,
        message: err instanceof Error ? err.message : "Publish failed",
      });
    } finally {
      setPublishing(false);
    }
  }

  function handleClose() {
    setUsers("");
    setGroups("");
    setResult(null);
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={`Publish: ${packageInfo?.name || "Package"}`}
    >
      {result?.success ? (
        <div className="text-center py-6">
          <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
          <h3 className="text-lg font-medium text-gray-900 mb-1">
            Published Successfully
          </h3>
          <p className="text-sm text-gray-500 mb-4">{result.message}</p>
          <button onClick={handleClose} className="btn-primary">
            Done
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {result && !result.success && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm flex items-center gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              {result.message}
            </div>
          )}

          <div className="p-3 rounded-lg bg-gray-50 border border-gray-100">
            <p className="text-xs text-gray-500">Package</p>
            <p className="text-sm font-medium text-gray-900">
              {packageInfo?.name}
            </p>
            <p className="text-xs text-gray-400 font-mono mt-0.5">
              {packageInfo?.id}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Users
            </label>
            <input
              type="text"
              value={users}
              onChange={(e) => setUsers(e.target.value)}
              className="input-field"
              placeholder="Enter user IDs or emails, comma-separated"
            />
            <p className="text-xs text-gray-400 mt-1">
              e.g., user@example.com, user2@example.com
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Groups
            </label>
            <input
              type="text"
              value={groups}
              onChange={(e) => setGroups(e.target.value)}
              className="input-field"
              placeholder="Enter group IDs, comma-separated"
            />
            <p className="text-xs text-gray-400 mt-1">
              e.g., sales-team, marketing
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button onClick={handleClose} className="btn-secondary">
              Cancel
            </button>
            <button
              onClick={handlePublish}
              disabled={publishing}
              className="btn-primary flex items-center gap-2"
            >
              {publishing ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Publishing...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Publish Package
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </Modal>
  );
}
