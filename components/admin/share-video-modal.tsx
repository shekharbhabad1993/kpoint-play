"use client";

import { useState, useEffect, useRef } from "react";
import { X, Search, Users, UserPlus, Loader2, Check, Mail } from "lucide-react";

interface UserGroupResult {
  id: string;
  name: string;
  displayname?: string;
  type: "user" | "group";
  email?: string;
}

interface ShareVideoModalProps {
  video: {
    id: string;
    title: string;
  } | null;
  open: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export function ShareVideoModal({
  video,
  open,
  onClose,
  onSuccess,
}: ShareVideoModalProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<UserGroupResult[]>([]);
  const [selectedItems, setSelectedItems] = useState<UserGroupResult[]>([]);
  const [searching, setSearching] = useState(false);
  const [sharing, setSharing] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [sendEmail, setSendEmail] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const searchTimeoutRef = useRef<NodeJS.Timeout>();

  // Reset state when modal opens
  useEffect(() => {
    if (open) {
      setSearchQuery("");
      setSearchResults([]);
      setSelectedItems([]);
      setShowResults(false);
      setError(null);
      setSuccess(false);
      setSendEmail(false);
    }
  }, [open]);

  // Debounced search
  useEffect(() => {
    if (searchTimeoutRef.current) {
      clearTimeout(searchTimeoutRef.current);
    }

    if (searchQuery.trim().length < 2) {
      setSearchResults([]);
      setShowResults(false);
      return;
    }

    searchTimeoutRef.current = setTimeout(async () => {
      await performSearch(searchQuery);
    }, 300);

    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
    };
  }, [searchQuery]);

  async function performSearch(query: string) {
    setSearching(true);
    setError(null);
    try {
      const res = await fetch(
        `/api/kpoint/search/usersgroups?qtext=${encodeURIComponent(query)}`
      );
      if (!res.ok) throw new Error("Failed to search");
      const data = await res.json();
      setSearchResults(data.results || []);
      setShowResults(true);
    } catch (err: any) {
      setError(err.message || "Search failed");
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  }

  function toggleSelection(item: UserGroupResult) {
    setSelectedItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id);
      }
      return [...prev, item];
    });
    // Close search results after selection
    setShowResults(false);
    setSearchQuery("");
  }

  function isSelected(item: UserGroupResult): boolean {
    return selectedItems.some((i) => i.id === item.id);
  }

  function removeSelected(item: UserGroupResult) {
    setSelectedItems((prev) => prev.filter((i) => i.id !== item.id));
  }

  async function handleShare() {
    if (!video || selectedItems.length === 0) return;

    setSharing(true);
    setError(null);
    try {
      const users = selectedItems.filter((i) => i.type === "user").map((i) => i.name);
      const groups = selectedItems.filter((i) => i.type === "group").map((i) => i.name);

      const res = await fetch(`/api/kpoint/videos/${video.id}/share`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ users, groups, sendEmail }),
      });

      if (!res.ok) throw new Error("Failed to share video");

      setSuccess(true);
      setTimeout(() => {
        onSuccess?.();
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Failed to share video");
    } finally {
      setSharing(false);
    }
  }

  if (!open || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-900 flex items-center gap-2">
              <Users className="w-4 h-4 text-kpoint-600" />
              Share Video
            </h2>
            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{video.title}</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-4 h-4 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {success ? (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-base font-medium text-gray-900">
                Video shared successfully!
              </p>
            </div>
          ) : (
            <>
              {/* Search Box */}
              <div className="mb-4">
                <label className="block text-xs font-medium text-gray-700 mb-1.5">
                  Search Users & Groups
                </label>
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Type to search..."
                    className="w-full pl-9 pr-4 py-1.5 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-kpoint-500 focus:border-transparent"
                  />
                  {searching && (
                    <Loader2 className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-kpoint-600 animate-spin" />
                  )}
                </div>

                {/* Search Results Dropdown */}
                {showResults && searchResults.length > 0 && (
                  <div className="mt-1.5 border border-gray-200 rounded-lg shadow-lg bg-white max-h-40 overflow-y-auto">
                    {searchResults.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => toggleSelection(item)}
                        className={`w-full px-3 py-2 flex items-center justify-between hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-b-0 ${
                          isSelected(item) ? "bg-kpoint-50" : ""
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          {item.type === "user" ? (
                            <UserPlus className="w-4 h-4 text-blue-600" />
                          ) : (
                            <Users className="w-4 h-4 text-purple-600" />
                          )}
                          <div className="text-left">
                            <div className="font-medium text-gray-900 text-sm">
                              {item.displayname || item.name}
                            </div>
                            {item.email && (
                              <div className="text-xs text-gray-500">
                                {item.email}
                              </div>
                            )}
                          </div>
                        </div>
                        {isSelected(item) && (
                          <Check className="w-4 h-4 text-kpoint-600" />
                        )}
                      </button>
                    ))}
                  </div>
                )}

                {showResults && searchResults.length === 0 && !searching && (
                  <div className="mt-1.5 p-3 text-center text-sm text-gray-500 border border-gray-200 rounded-lg">
                    No users or groups found
                  </div>
                )}
              </div>

              {/* Selected Items */}
              {selectedItems.length > 0 && (
                <div className="mb-4">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">
                    Selected ({selectedItems.length})
                  </label>
                  <div className="space-y-1.5">
                    {selectedItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200"
                      >
                        <div className="flex items-center gap-2">
                          {item.type === "user" ? (
                            <UserPlus className="w-3.5 h-3.5 text-blue-600" />
                          ) : (
                            <Users className="w-3.5 h-3.5 text-purple-600" />
                          )}
                          <div>
                            <div className="font-medium text-gray-900 text-xs">
                              {item.displayname || item.name}
                            </div>
                            <div className="text-xs text-gray-500 capitalize">
                              {item.type}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => removeSelected(item)}
                          className="p-1 hover:bg-gray-200 rounded transition-colors"
                        >
                          <X className="w-3.5 h-3.5 text-gray-500" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Send Email Option */}
              <div className="mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sendEmail}
                    onChange={(e) => setSendEmail(e.target.checked)}
                    className="w-3.5 h-3.5 text-kpoint-600 border-gray-300 rounded focus:ring-kpoint-500"
                  />
                  <Mail className="w-3.5 h-3.5 text-gray-600" />
                  <span className="text-xs text-gray-700">
                    Send email notification to shared users
                  </span>
                </label>
              </div>

              {/* Error */}
              {error && (
                <div className="mb-3 p-2 bg-red-50 border border-red-200 rounded-lg text-red-600 text-xs">
                  {error}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!success && (
          <div className="px-4 py-3 border-t border-gray-200 flex items-center justify-end gap-2">
            <button onClick={onClose} className="btn-secondary text-xs py-1.5 px-3">
              Cancel
            </button>
            <button
              onClick={handleShare}
              disabled={selectedItems.length === 0 || sharing}
              className="btn-primary text-xs py-1.5 px-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              {sharing && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
              Share with {selectedItems.length}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
