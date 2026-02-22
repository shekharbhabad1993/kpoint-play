"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { TemplateCard } from "@/components/partner/template-card";
import { PersonalizationModal } from "@/components/partner/personalization-modal";
import { UserSwitcher } from "@/components/partner/user-switcher";

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
      const res = await fetch("/api/kpoint/partner");
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
