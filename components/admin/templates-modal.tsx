"use client";

import { useEffect, useState } from "react";
import { X, Plus, Package, Calendar, Loader2 } from "lucide-react";

interface TemplateInfo {
  template_id: string;
  template_name: string;
  applied_at: string;
  state: string;
}

interface TemplatesModalProps {
  video: {
    id: string;
    title: string;
  } | null;
  open: boolean;
  onClose: () => void;
  onAddTemplate: () => void;
  onPublish?: () => void;
}

export function TemplatesModal({
  video,
  open,
  onClose,
  onAddTemplate,
  onPublish,
}: TemplatesModalProps) {
  const [templates, setTemplates] = useState<TemplateInfo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (open && video) {
      // Force refresh when video object changes (including _refreshKey)
      const shouldForceRefresh = (video as any)?._refreshKey !== undefined;
      fetchTemplates(shouldForceRefresh);
    }
  }, [open, video, (video as any)?._refreshKey]);

  async function fetchTemplates(forceRefresh = false) {
    if (!video) return;

    setLoading(true);
    setError(null);
    try {
      // Add cache-busting parameter to force fresh data
      const timestamp = forceRefresh ? `?_=${Date.now()}` : '';
      const res = await fetch(`/api/kpoint/templates/${video.id}${timestamp}`);
      if (!res.ok) throw new Error("Failed to fetch templates");
      const data = await res.json();
      setTemplates(data.templates || []);
    } catch (err: any) {
      setError(err.message || "Failed to load templates");
    } finally {
      setLoading(false);
    }
  }

  function formatDate(dateStr: string): string {
    try {
      return new Date(dateStr).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateStr;
    }
  }

  if (!open || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Templates for Video
            </h2>
            <p className="text-sm text-gray-500 mt-1">{video.title}</p>
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
              <Loader2 className="w-8 h-8 text-kpoint-600 animate-spin" />
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-600">{error}</p>
              <button onClick={() => fetchTemplates()} className="btn-secondary mt-4">
                Retry
              </button>
            </div>
          ) : (
            <>
              {/* Add Template Button */}
              <button
                onClick={onAddTemplate}
                className="btn-primary w-full mb-6 flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Add Template
              </button>

              {/* Templates List */}
              {templates.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                  <Package className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No templates applied yet</p>
                  <p className="text-sm">Click &quot;Add Template&quot; to get started</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <h3 className="font-medium text-gray-900 mb-3">
                    Applied Templates
                  </h3>
                  {templates.map((template) => (
                    <div
                      key={template.template_id}
                      className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <Package className="w-5 h-5 text-kpoint-600 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">
                          {template.template_name}
                        </div>
                        <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          Applied {formatDate(template.applied_at)}
                        </div>
                      </div>
                      <div className="flex-shrink-0">
                        <button
                          onClick={() => {
                            onPublish?.();
                            onClose();
                          }}
                          className="px-3 py-1.5 text-xs font-medium text-white bg-kpoint-600 hover:bg-kpoint-700 rounded-lg transition-colors"
                        >
                          Publish
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
          <button onClick={onClose} className="btn-secondary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
