"use client";

import { FileText, Video, Users, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface AdminTemplateCardProps {
  template: {
    id: string;
    package_id: string;
    package_name: string;
    video_id: string;
    video_title?: string;
    thumbnail_url?: string;
    fields?: { key: string; label: string }[];
  };
  onPublish: () => void;
  onRefresh: () => void;
}

interface AssignmentInfo {
  users: { id: string; name: string }[];
  groups: { id: string; name: string }[];
}

export function AdminTemplateCard({
  template,
  onPublish,
}: AdminTemplateCardProps) {
  const [assignments, setAssignments] = useState<AssignmentInfo | null>(null);

  useEffect(() => {
    fetchAssignments();
  }, [template.id]);

  async function fetchAssignments() {
    try {
      const res = await fetch(
        `/api/kpoint/admin/templates/${template.id}/assignments`
      );
      if (res.ok) {
        const data = await res.json();
        setAssignments(data);
      }
    } catch (err) {
      console.error("Failed to fetch assignments", err);
    }
  }

  const totalAssigned =
    (assignments?.users.length || 0) + (assignments?.groups.length || 0);

  return (
    <div className="card hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Thumbnail */}
        <div className="flex-shrink-0">
          {template.thumbnail_url ? (
            <div className="relative w-full lg:w-64 h-36 bg-gray-100 rounded-lg overflow-hidden">
              <Image
                src={template.thumbnail_url}
                alt={template.package_name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 256px"
                unoptimized
              />
            </div>
          ) : (
            <div className="w-full lg:w-64 h-36 bg-gray-100 rounded-lg flex items-center justify-center">
              <Video className="w-12 h-12 text-gray-400" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-start gap-3 min-w-0 flex-1">
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

            {/* Publish Button */}
            <button
              onClick={onPublish}
              className="btn-primary text-sm flex items-center gap-2 flex-shrink-0"
            >
              <Users className="w-4 h-4" />
              Publish
            </button>
          </div>

          {/* Fields */}
          {template.fields && template.fields.length > 0 && (
            <div className="mb-3">
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

          {/* Assignment Status */}
          <div className="mt-auto pt-3 border-t border-gray-100">
            {totalAssigned > 0 ? (
              <div className="flex flex-wrap gap-3 text-sm">
                {assignments && assignments.users.length > 0 && (
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <User className="w-4 h-4" />
                    <span>
                      {assignments.users.length}{" "}
                      {assignments.users.length === 1 ? "user" : "users"}
                    </span>
                  </div>
                )}
                {assignments && assignments.groups.length > 0 && (
                  <div className="flex items-center gap-1.5 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span>
                      {assignments.groups.length}{" "}
                      {assignments.groups.length === 1 ? "group" : "groups"}
                    </span>
                  </div>
                )}
              </div>
            ) : (
              <p className="text-sm text-gray-400">Not published to anyone</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
