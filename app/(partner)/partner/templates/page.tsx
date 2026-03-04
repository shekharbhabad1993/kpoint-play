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
import { getTemplateDefinition } from "@/lib/kpoint/template-definitions";
import { getMockVideos } from "@/lib/kpoint/mock-data";

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
      // Get only the Holi video (working end to end)
      console.log("📦 Getting video IDs from mock data...");
      const mockVideos = getMockVideos();
      const videoIds = mockVideos
        .filter((v: any) => v.displayname === "Happy Holi")
        .map((v: any) => v.id);
      console.log(`📋 Found ${videoIds.length} videos to fetch:`, videoIds);

      // Fetch real-time package data for each video from KPOINT API
      const videoList: Video[] = [];
      for (const videoId of videoIds) {
        try {
          console.log(`🌐 Fetching real-time data for video ${videoId}...`);
          const response = await fetch(`/api/kpoint/videos/${videoId}`);
          if (!response.ok) {
            console.warn(`⚠️ Failed to fetch video ${videoId}: ${response.statusText}`);
            continue;
          }
          const video = await response.json();

          // Parse interactivity_packages from properties (it's stored as JSON string)
          let packages: any[] = [];
          try {
            const packagesJson = video.properties?.interactivity_packages;
            if (packagesJson) {
              packages = JSON.parse(packagesJson);
              console.log(`📋 Video ${video.id} (${video.displayname}): ${packages.length} packages`, packages);
            }
          } catch (err) {
            console.error(`Failed to parse interactivity_packages for video ${video.id}:`, err);
          }

          videoList.push({
            id: video.id,
            title: video.displayname || video.name,
            description: video.description,
            thumbnail_url: video.images?.thumb,
            interactivity_packages: packages,
          });
        } catch (err) {
          console.error(`Error fetching video ${videoId}:`, err);
        }
      }

      console.log(`✅ Successfully fetched ${videoList.length} videos with real-time data`);

      // Filter to only show videos with interactive packages
      // No tag filtering - show all videos with packages to all partners
      const videosWithPackages = videoList.filter(
        (video: Video) =>
          video.interactivity_packages &&
          video.interactivity_packages.length > 0
      );

      console.log(`📊 Total videos with templates: ${videosWithPackages.length}`);

      console.log(`📊 Videos with templates: ${videosWithPackages.length}`);

      // Convert videos to template format for the UI
      const templateList = videosWithPackages.flatMap((video: Video) =>
        (video.interactivity_packages || [])
          .filter((pkg: InteractivityPackage) => pkg.id !== "52yovfxjvcdm") // Exclude non-functioning template
          .map((pkg: InteractivityPackage) => {
            // Get actual template definition details
            const templateDef = getTemplateDefinition(pkg.id);
            const templateName = templateDef?.name || pkg.name || "Greetings";
            const templateDescription = templateDef?.description || pkg.description || video.description;

            return {
              id: `${video.id}-${pkg.id}`,
              package_id: pkg.id,
              package_name: templateName,
              video_id: video.id,
              video_title: video.title,
              thumbnail_url: video.thumbnail_url,
              description: templateDescription,
              // Fields will come from the actual template data via API
            };
          })
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[34rem] max-w-7xl">
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
