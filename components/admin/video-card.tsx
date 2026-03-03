"use client";

import { Video, Package, Calendar } from "lucide-react";

interface VideoCardProps {
  video: {
    id: string;
    displayname: string;
    description?: string;
    thumbnail_url?: string;
    created_at?: string;
    duration?: number;
    properties?: {interactivity_packages?: { id: string; name?: string }[]};
    interactivity_packages?: { id: string; name?: string }[];
    [key: string]: unknown;
  };
  onClick: () => void;
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

export function VideoCard({ video, onClick }: VideoCardProps) {
  const packageCount = video.interactivity_packages?.length || 1;

  return (
    <div
      onClick={onClick}
      className="card p-0 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
    >
      {/* Thumbnail */}
      <div className="aspect-video bg-gray-100 relative">
        {video.thumbnail_url ? (
          <img
            src={video.thumbnail_url}
            alt={video.displayname}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Video className="w-10 h-10 text-gray-300" />
          </div>
        )}
        {video.duration && (
          <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
            {formatDuration(video.duration)}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-2.5">
        <h3 className="font-medium text-gray-900 text-xs line-clamp-1 mb-1">
          {video.displayname || "Untitled Video"}
        </h3>

        {video.description && (
          <p className="text-xs text-gray-500 line-clamp-1 mb-2">
            {video.description}
          </p>
        )}

        <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(video.created_at)}
          </span>
        </div>

        {/* Template Count Badge */}
        <div className="mb-2">
          <div className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
            packageCount > 0
              ? "bg-kpoint-50 text-kpoint-700 border border-kpoint-200"
              : "bg-gray-50 text-gray-500 border border-gray-200"
          }`}>
            <Package className="w-3 h-3" />
            {packageCount === 0 ? "No templates" : `${packageCount} Template${packageCount > 1 ? "s" : ""}`}
          </div>
        </div>

        <div className="flex gap-2">
          <button className="btn-primary flex-1 text-xs py-1.5">
            Publish Template
          </button>
        </div>
      </div>
    </div>
  );
}
