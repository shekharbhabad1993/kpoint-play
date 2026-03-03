"use client";

import { useState, useEffect, useCallback } from "react";
import { ShoppingBag, Loader2, Eye, Trash2, Copy } from "lucide-react";
import { ShoppableVideoCard } from "@/components/admin/shoppable-video-card";
import { ApplyTemplateResultsModal } from "@/components/admin/apply-template-results-modal";

interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  created_at?: string;
  duration?: number;
  interactivity_packages?: { id: string; name?: string }[];
  shoppable_template?: {
    package_id: string;
    applied_at: string;
    embed_code_preview: string;
    state: string;
  };
  [key: string]: unknown;
}

type TabType = "apply" | "view";

export default function ShoppableTemplatesPage() {
  const [activeTab, setActiveTab] = useState<TabType>("apply");

  // Apply Templates Tab State
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideoIds, setSelectedVideoIds] = useState<Set<string>>(
    new Set()
  );
  const [packageId, setPackageId] = useState("");
  const [templateHtml, setTemplateHtml] = useState("");
  const [loading, setLoading] = useState(true);
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Results Modal State
  const [showResults, setShowResults] = useState(false);
  const [applyResults, setApplyResults] = useState<any>(null);

  // View Applied Tab State
  const [appliedVideos, setAppliedVideos] = useState<Video[]>([]);
  const [loadingApplied, setLoadingApplied] = useState(false);

  // Fetch videos for Apply tab
  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/kpoint/videos");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      setVideos(data.videos || []);
    } catch (err: any) {
      setError(err.message || "Failed to load videos");
    } finally {
      setLoading(false);
    }
  }, []);

  // Fetch applied templates for View tab
  const fetchAppliedTemplates = useCallback(async () => {
    setLoadingApplied(true);
    try {
      const res = await fetch("/api/kpoint/shoppable/list");
      if (!res.ok) throw new Error("Failed to fetch applied templates");
      const data = await res.json();
      setAppliedVideos(data.videos || []);
    } catch (err: any) {
      console.error("Failed to load applied templates:", err);
    } finally {
      setLoadingApplied(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  useEffect(() => {
    if (activeTab === "view") {
      fetchAppliedTemplates();
    }
  }, [activeTab, fetchAppliedTemplates]);

  const toggleVideoSelection = (videoId: string) => {
    const newSelection = new Set(selectedVideoIds);
    if (newSelection.has(videoId)) {
      newSelection.delete(videoId);
    } else {
      newSelection.add(videoId);
    }
    setSelectedVideoIds(newSelection);
  };

  const handleApplyTemplate = async () => {
    if (selectedVideoIds.size === 0) {
      alert("Please select at least one video");
      return;
    }

    if (!packageId.trim()) {
      alert("Please enter a package ID");
      return;
    }

    if (!templateHtml.trim()) {
      alert("Please enter template HTML");
      return;
    }

    setApplying(true);
    try {
      const res = await fetch("/api/kpoint/shoppable/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          video_ids: Array.from(selectedVideoIds),
          package_id: packageId,
          template_html: templateHtml,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to apply template");
      }

      const data = await res.json();
      setApplyResults(data);
      setShowResults(true);

      // Refresh videos after successful application
      await fetchVideos();

      // Clear selections if all succeeded
      if (data.summary.failed === 0) {
        setSelectedVideoIds(new Set());
      }
    } catch (err: any) {
      alert(err.message || "Failed to apply template");
    } finally {
      setApplying(false);
    }
  };

  const copyEmbedCode = async (embedCode: string) => {
    try {
      // Decode base64 using browser APIs
      const decoded = atob(embedCode);
      await navigator.clipboard.writeText(decoded);
      alert("Embed code copied to clipboard!");
    } catch {
      await navigator.clipboard.writeText(embedCode);
      alert("Base64 embed code copied to clipboard!");
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <ShoppingBag className="w-7 h-7 text-kpoint-600" />
          Shoppable Templates
        </h1>
        <p className="text-gray-500 mt-1">
          Apply interactive shoppable templates to your videos
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-4">
          <button
            onClick={() => setActiveTab("apply")}
            className={`pb-3 px-1 border-b-2 font-medium transition-colors ${
              activeTab === "apply"
                ? "border-kpoint-600 text-kpoint-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            Apply Templates
          </button>
          <button
            onClick={() => setActiveTab("view")}
            className={`pb-3 px-1 border-b-2 font-medium transition-colors ${
              activeTab === "view"
                ? "border-kpoint-600 text-kpoint-600"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
          >
            View Applied
          </button>
        </nav>
      </div>

      {/* Apply Templates Tab */}
      {activeTab === "apply" && (
        <div className="space-y-6">
          {/* Package ID Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Package ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={packageId}
              onChange={(e) => setPackageId(e.target.value)}
              placeholder="e.g., shoppable-product-v1"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kpoint-500 focus:border-transparent"
            />
            <p className="text-xs text-gray-500 mt-1">
              Alphanumeric characters, hyphens, and underscores only (3-50
              characters)
            </p>
          </div>

          {/* Template HTML Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Template HTML <span className="text-red-500">*</span>
            </label>
            <textarea
              value={templateHtml}
              onChange={(e) => setTemplateHtml(e.target.value)}
              placeholder="Paste your shoppable template HTML here (must include data-video-host and data-kvideo-id attributes)..."
              rows={10}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kpoint-500 focus:border-transparent font-mono text-sm"
            />
            <p className="text-xs text-gray-500 mt-1">
              Template must contain <code>data-video-host</code> and{" "}
              <code>data-kvideo-id</code> attributes
            </p>
          </div>

          {/* Video Selection */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Select Videos <span className="text-red-500">*</span>
              </label>
              <span className="text-sm text-gray-500">
                {selectedVideoIds.size} of {videos.length} selected
              </span>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="w-8 h-8 text-kpoint-600 animate-spin" />
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600">{error}</p>
                <button onClick={fetchVideos} className="btn-secondary mt-4">
                  Retry
                </button>
              </div>
            ) : videos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                No videos available
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {videos.map((video) => (
                  <ShoppableVideoCard
                    key={video.id}
                    video={video}
                    selected={selectedVideoIds.has(video.id)}
                    onToggle={() => toggleVideoSelection(video.id)}
                    packageId={packageId}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Apply Button */}
          <div className="flex justify-end">
            <button
              onClick={handleApplyTemplate}
              disabled={
                applying || selectedVideoIds.size === 0 || !packageId || !templateHtml
              }
              className="btn-primary px-6 py-3 flex items-center gap-2"
            >
              {applying ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Applying to {selectedVideoIds.size} video
                  {selectedVideoIds.size !== 1 ? "s" : ""}...
                </>
              ) : (
                <>
                  Apply Template to {selectedVideoIds.size} video
                  {selectedVideoIds.size !== 1 ? "s" : ""}
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* View Applied Tab */}
      {activeTab === "view" && (
        <div>
          {loadingApplied ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-kpoint-600 animate-spin" />
            </div>
          ) : appliedVideos.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-gray-300" />
              <p>No shoppable templates applied yet</p>
              <button
                onClick={() => setActiveTab("apply")}
                className="btn-primary mt-4"
              >
                Apply Templates
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {appliedVideos.map((video) => (
                <div
                  key={`${video.id}-${video.shoppable_template?.package_id}`}
                  className="card flex items-start gap-4"
                >
                  {/* Thumbnail */}
                  <div className="w-32 h-20 flex-shrink-0 bg-gray-100 rounded overflow-hidden">
                    {video.thumbnail_url ? (
                      <img
                        src={video.thumbnail_url}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <ShoppingBag className="w-6 h-6 text-gray-300" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900">
                      {video.title}
                    </h3>
                    <div className="text-sm text-gray-500 mt-1">
                      <p>
                        Package:{" "}
                        <span className="font-mono">
                          {video.shoppable_template?.package_id}
                        </span>
                      </p>
                      <p>
                        Applied:{" "}
                        {new Date(
                          video.shoppable_template?.applied_at || ""
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button
                      onClick={() =>
                        alert("Embed code preview: " + video.shoppable_template?.embed_code_preview)
                      }
                      className="btn-secondary text-sm px-3 py-2 flex items-center gap-1"
                      title="Preview embed code"
                    >
                      <Eye className="w-4 h-4" />
                      Preview
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Results Modal */}
      {showResults && applyResults && (
        <ApplyTemplateResultsModal
          open={showResults}
          onClose={() => setShowResults(false)}
          results={applyResults.results}
          summary={applyResults.summary}
          videos={videos}
        />
      )}
    </div>
  );
}
