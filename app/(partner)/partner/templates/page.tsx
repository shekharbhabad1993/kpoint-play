"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { TemplateCard } from "@/components/partner/template-card";
import { PersonalizationModal } from "@/components/partner/personalization-modal";
import { UserSwitcher } from "@/components/partner/user-switcher";
import { getClientSession } from "@/lib/utils/cookies";

// Extract partner from email (e.g., hdfcuser1@kpoint.com -> hdfc)
function getPartnerTag(email?: string): string | null {
  if (!email) return null;
  const match = email.match(/^(hdfc|icici|bom)/i);
  return match ? match[1].toLowerCase() : null;
}

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
  const [userEmail, setUserEmail] = useState<string>("");
  const [partnerTag, setPartnerTag] = useState<string | null>(null);

  // Get user email and partner tag on mount
  useEffect(() => {
    const session = getClientSession();
    console.log("🔐 Full session object:", session);

    const email = session?.email || "";
    setUserEmail(email);

    console.log("👤 Partner logged in with email:", email);

    if (email) {
      const tag = getPartnerTag(email);
      console.log("🏷️ Partner tag detected:", tag);
      setPartnerTag(tag);
    } else {
      console.log("⚠️ No email found in session! Please log in with an email.");
    }
  }, []);

  const fetchTemplates = useCallback(async () => {
    console.log("🚀 fetchTemplates called with partnerTag:", partnerTag);
    setLoading(true);
    setError(null);
    try {
      let videoList: Video[] = [];

      if (partnerTag) {
        // Fetch partner-specific videos from KPOINT API
        const apiUrl = `https://ktpl.kpoint.com/api/v3/search?facet.tag=${partnerTag}`;
        console.log("🔍 Fetching partner templates from:", apiUrl);

        const res = await fetch(apiUrl);
        if (!res.ok) throw new Error("Failed to fetch partner templates");
        const data = await res.json();

        console.log("📦 Partner templates API response:", data);
        videoList = data.results || [];
        console.log(`✅ Found ${videoList.length} videos for partner: ${partnerTag}`);
      } else {
        // Fallback to default API if no partner tag
        console.log("📦 No partner tag, using default API");
        const res = await fetch("/api/kpoint/videos?scope=trending");
        if (!res.ok) throw new Error("Failed to fetch videos");
        const data = await res.json();
        videoList = data.videos || data.list || data.results || data.data || [];
      }

      // Filter to only show videos with interactive packages
      const videosWithPackages = Array.isArray(videoList)
        ? videoList.filter((video: Video) =>
            video.interactivity_packages &&
            video.interactivity_packages.length > 0
          )
        : [];

      console.log(`📊 Videos with templates: ${videosWithPackages.length}`);

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
      console.error("❌ Error fetching templates:", err);
      setError(
        err instanceof Error ? err.message : "Failed to load templates"
      );
    } finally {
      setLoading(false);
    }
  }, [partnerTag]);

  useEffect(() => {
    fetchTemplates();
  }, [fetchTemplates]);

  return (
    <>
      <Header
        title="Templates"
        subtitle={
          partnerTag
            ? `Partner: ${partnerTag.toUpperCase()} - Select a template to personalize and share`
            : "Select a template to personalize and share"
        }
      >
        <UserSwitcher />
      </Header>

      {/* Partner Info Bar */}
      {partnerTag && userEmail && (
        <div className="px-6 pt-4 pb-2 bg-white border-b border-gray-200">
          <p className="text-xs text-gray-500">
            📧 Logged in as: <span className="font-medium">{userEmail}</span> - Showing <span className="font-medium text-kpoint-600">{partnerTag.toUpperCase()}</span> templates
          </p>
        </div>
      )}

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
