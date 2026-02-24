"use client";

import { X, CheckCircle, XCircle, Copy } from "lucide-react";
import { useState } from "react";

interface ApplyTemplateResult {
  video_id: string;
  success: boolean;
  error?: string;
}

interface ApplyTemplateResultsModalProps {
  open: boolean;
  onClose: () => void;
  results: ApplyTemplateResult[];
  summary: {
    total: number;
    successful: number;
    failed: number;
  };
  videos: { id: string; title: string }[];
}

export function ApplyTemplateResultsModal({
  open,
  onClose,
  results,
  summary,
  videos,
}: ApplyTemplateResultsModalProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!open) return null;

  const getVideoTitle = (videoId: string) => {
    const video = videos.find((v) => v.id === videoId);
    return video?.title || videoId;
  };

  const copyVideoId = (videoId: string) => {
    navigator.clipboard.writeText(videoId);
    setCopiedId(videoId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Template Application Results
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Applied to {summary.successful} of {summary.total} videos{" "}
              {summary.failed > 0 && (
                <span className="text-red-600">
                  ({summary.failed} failed)
                </span>
              )}
            </p>
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
          {/* Summary Card */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">
                  {summary.total}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">
                  {summary.successful}
                </div>
                <div className="text-sm text-gray-500">Successful</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">
                  {summary.failed}
                </div>
                <div className="text-sm text-gray-500">Failed</div>
              </div>
            </div>
          </div>

          {/* Results List */}
          <div className="space-y-2">
            <h3 className="font-medium text-gray-900 mb-3">
              Detailed Results
            </h3>
            {results.map((result) => (
              <div
                key={result.video_id}
                className={`flex items-start gap-3 p-3 rounded-lg border ${
                  result.success
                    ? "border-green-200 bg-green-50"
                    : "border-red-200 bg-red-50"
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0 mt-0.5">
                  {result.success ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-gray-900 text-sm">
                    {getVideoTitle(result.video_id)}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 font-mono">
                      {result.video_id}
                    </span>
                    <button
                      onClick={() => copyVideoId(result.video_id)}
                      className="text-gray-400 hover:text-gray-600 transition-colors"
                      title="Copy video ID"
                    >
                      {copiedId === result.video_id ? (
                        <span className="text-xs text-green-600">Copied!</span>
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                  {result.error && (
                    <p className="text-xs text-red-600 mt-1">
                      Error: {result.error}
                    </p>
                  )}
                </div>

                {/* Status badge */}
                <div className="flex-shrink-0">
                  <span
                    className={`text-xs px-2 py-1 rounded-full font-medium ${
                      result.success
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {result.success ? "Success" : "Failed"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
          <button onClick={onClose} className="btn-primary">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
