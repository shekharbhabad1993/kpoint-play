"use client";

import { FileText, Video, Wand2 } from "lucide-react";
import Image from "next/image";

interface TemplateCardProps {
  template: {
    id: string;
    package_id: string;
    package_name: string;
    video_id: string;
    video_title?: string;
    thumbnail_url?: string;
    fields?: { key: string; label: string }[];
  };
  onUse: () => void;
}

export function TemplateCard({ template, onUse }: TemplateCardProps) {
  return (
    <div className="card hover:shadow-md transition-shadow duration-200 flex flex-col h-full p-3">
      {/* Thumbnail */}
      <div className="flex-shrink-0 mb-3">
        {template.thumbnail_url ? (
          <div className="relative w-full h-32 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={template.thumbnail_url}
              alt={template.package_name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              unoptimized
            />
          </div>
        ) : (
          <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center">
            <Video className="w-8 h-8 text-gray-400" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-2">
            <h3 className="font-medium text-gray-900 text-sm line-clamp-1">
              {template.package_name}
            </h3>
            {template.video_title && (
              <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5 line-clamp-1">
                <Video className="w-3 h-3" />
                {template.video_title}
              </p>
            )}
          </div>

          {/* Fields */}
          {template.fields && template.fields.length > 0 && (
            <div className="mb-2 flex-1">
              <p className="text-xs text-gray-400 mb-1">
                Fields:
              </p>
              <div className="flex flex-wrap gap-1">
                {template.fields.slice(0, 3).map((field) => (
                  <span
                    key={field.key}
                    className="inline-block px-1.5 py-0.5 text-xs bg-gray-100 text-gray-600 rounded"
                  >
                    {field.label || field.key}
                  </span>
                ))}
                {template.fields.length > 3 && (
                  <span className="text-xs text-gray-400">+{template.fields.length - 3}</span>
                )}
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={onUse}
            className="btn-primary w-full text-xs py-2 flex items-center justify-center gap-1.5 mt-auto"
          >
            <Wand2 className="w-3.5 h-3.5" />
            Personalize & Share
          </button>
        </div>
    </div>
  );
}
