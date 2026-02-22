"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { AdminTemplateCard } from "@/components/admin/admin-template-card";
import { PublishTemplateModal } from "@/components/admin/publish-template-modal";

interface Template {
  id: string;
  package_id: string;
  package_name: string;
  video_id: string;
  video_title?: string;
  thumbnail_url?: string;
  fields?: {
    key: string;
    label: string;
    type: string;
    required?: boolean;
    default_value?: string;
  }[];
  [key: string]: unknown;
}

export default function AdminTemplatesPage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const fetchTemplates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/kpoint/admin/templates");
      if (!res.ok) throw new Error("Failed to fetch templates");
      const data = await res.json();
      const list = data.templates || data.results || data.data || [];
      setTemplates(Array.isArray(list) ? list : []);
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
        title="Template Management"
        subtitle="Publish templates to users and groups"
      />
      <div className="p-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchTemplates} />
        ) : templates.length === 0 ? (
          <EmptyState
            title="No templates found"
            description="Create interactivity packages for your videos to make them available as templates."
          />
        ) : (
          <div className="space-y-4 max-w-6xl">
            {templates.map((template) => (
              <AdminTemplateCard
                key={template.id || template.package_id}
                template={template}
                onPublish={() => setSelectedTemplate(template)}
                onRefresh={fetchTemplates}
              />
            ))}
          </div>
        )}
      </div>

      <PublishTemplateModal
        template={selectedTemplate}
        open={!!selectedTemplate}
        onClose={() => setSelectedTemplate(null)}
        onSuccess={fetchTemplates}
      />
    </>
  );
}
