"use client";

import { Video, Package, Calendar } from "lucide-react";

interface VideoCardProps {
  video: {
    id: string;
    title: string;
    description?: string;
    thumbnail_url?: string;
    created_at?: string;
    duration?: number;
    interactivity_packages?: { id: string; name?: string }[];
    [key: string]: unknown;
  };
  onViewTemplates: () => void;
}

function formatDate(dateStr?: string): string {
  if (!dateStr) return "N/A";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function formatDuration(seconds?: number): string {
  if (!seconds) return "";
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

export function VideoCard({ video, onViewTemplates }: VideoCardProps) {
  const packageCount = video.interactivity_packages?.length || 0;

  return (
    <div className="card p-0 overflow-hidden hover:shadow-md transition-shadow duration-200">
      {/* Thumbnail */}
      <div className="aspect-video bg-gray-100 relative">
        {video.thumbnail_url ? (
          <img
            src={video.thumbnail_url}
            alt={video.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Video className="w-12 h-12 text-gray-300" />
          </div>
        )}
        {video.duration && (
          <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-0.5 rounded">
            {formatDuration(video.duration)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-medium text-gray-900 text-sm line-clamp-2 mb-1">
          {video.title || "Untitled Video"}
        </h3>

        {video.description && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-3">
            {video.description}
          </p>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(video.created_at)}
          </span>
          {packageCount > 0 && (
            <span className="flex items-center gap-1">
              <Package className="w-3 h-3" />
              {packageCount} template{packageCount !== 1 ? "s" : ""}
            </span>
          )}
        </div>

        <button
          onClick={onViewTemplates}
          className="btn-primary w-full text-sm py-2"
        >
          View Templates
        </button>
      </div>
    </div>
  );
}
