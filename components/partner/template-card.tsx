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
    <div className="card hover:shadow-md transition-shadow duration-200">
      {/* One per row layout with thumbnail */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          {template.thumbnail_url ? (
            <div className="relative w-full sm:w-48 h-32 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={template.thumbnail_url}
                alt={template.package_name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 192px"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-full sm:w-48 h-32 bg-gray-100 rounded-lg flex items-center justify-center">
              <Video className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-kpoint-50 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5 text-kpoint-600" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-medium text-gray-900 text-base">
                {template.package_name}
              </h3>
              {template.video_title && (
                <p className="text-sm text-gray-500 flex items-center gap-1 mt-0.5">
                  <Video className="w-4 h-4" />
                  {template.video_title}
                </p>
              )}
            </div>
          </div>

          {/* Fields */}
          {template.fields && template.fields.length > 0 && (
            <div className="mb-3 flex-1">
              <p className="text-xs text-gray-400 mb-1.5">
                Personalization fields:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {template.fields.map((field) => (
                  <span
                    key={field.key}
                    className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-md"
                  >
                    {field.label || field.key}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Action Button */}
          <button
            onClick={onUse}
            className="btn-primary w-full sm:w-auto text-sm flex items-center justify-center gap-2 mt-auto"
          >
            <Wand2 className="w-4 h-4" />
            Use Template
          </button>
        </div>
      </div>
    </div>
  );
}
