"use client";

import { Video, Calendar, CheckCircle2 } from "lucide-react";

interface ShoppableVideoCardProps {
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
  selected: boolean;
  onToggle: () => void;
  packageId?: string; // To check if template already applied
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

export function ShoppableVideoCard({
  video,
  selected,
  onToggle,
  packageId,
}: ShoppableVideoCardProps) {
  // Check if this package is already applied to this video
  const hasPackage = packageId
    ? video.interactivity_packages?.some((pkg) => pkg.id === packageId)
    : false;

  return (
    <div
      className={`card p-0 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer ${
        selected ? "ring-2 ring-kpoint-600" : ""
      }`}
      onClick={onToggle}
    >
      {/* Thumbnail with checkbox */}
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

        {/* Checkbox in top-left */}
        <div className="absolute top-2 left-2">
          <input
            type="checkbox"
            checked={selected}
            onChange={onToggle}
            onClick={(e) => e.stopPropagation()}
            className="w-5 h-5 rounded border-2 border-white bg-white/90 cursor-pointer accent-kpoint-600"
          />
        </div>

        {/* Template already applied badge */}
        {hasPackage && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3" />
            Applied
          </div>
        )}

        {/* Duration badge */}
        {video.duration && !hasPackage && (
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

        <div className="flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(video.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
}
