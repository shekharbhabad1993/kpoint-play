"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { TemplateCard } from "@/components/partner/template-card";
import { PersonalizationModal } from "@/components/partner/personalization-modal";
import { UserSwitcher } from "@/components/partner/user-switcher";

interface InteractivityPackage {
  id: string;
  name?: string;
  description?: string;
  [key: string]: unknown;
}

interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  interactivity_packages?: InteractivityPackage[];
  [key: string]: unknown;
}

interface Template {
  id: string;
  package_id: string;
  package_name: string;
  video_id: string;
  video_title?: string;
  fields?: { key: string; label: string; type: string; required?: boolean; default_value?: string }[];
  [key: string]: unknown;
}

export default function PartnerTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const fetchTemplates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // Fetch videos with interactive packages (same as admin interface)
      const res = await fetch("/api/kpoint/videos?scope=trending");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      const videoList = data.videos || data.list || data.results || data.data || [];

      // Filter to only show videos with interactive packages
      const videosWithPackages = Array.isArray(videoList)
        ? videoList.filter((video: Video) =>
            video.interactivity_packages &&
            video.interactivity_packages.length > 0
          )
        : [];

      // Convert videos to template format for the UI
      const templateList = videosWithPackages.flatMap((video: Video) =>
        (video.interactivity_packages || []).map((pkg: InteractivityPackage) => ({
          id: `${video.id}-${pkg.id}`,
          package_id: pkg.id,
          package_name: pkg.name || "Interactive Package",
          video_id: video.id,
          video_title: video.title,
          thumbnail_url: video.thumbnail_url,
          description: pkg.description || video.description,
          fields: [], // TODO: Extract personalization fields from package
        }))
      );

      setTemplates(templateList);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load templates"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  return (
    <>
      <Header
        title="Templates"
        subtitle="Select a template to personalize and share"
      >
        <UserSwitcher />
      </Header>
      <div className="p-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchTemplates} />
        ) : templates.length === 0 ? (
          <EmptyState
            title="No templates available"
            description="Templates published to you will appear here. Contact your admin to get started."
          />
        ) : (
          <div className="space-y-4 max-w-5xl">
            {templates.map((template) => (
              <TemplateCard
                key={template.id || template.package_id}
                template={template}
                onUse={() => setSelectedTemplate(template)}
              />
            ))}
          </div>
        )}
      </div>

      <PersonalizationModal
        template={selectedTemplate}
        open={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
      />
    </>
  );
}
