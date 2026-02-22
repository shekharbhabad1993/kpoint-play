"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { VideoCard } from "@/components/admin/video-card";
import { TemplatesModal } from "@/components/admin/templates-modal";
import { PublishModal } from "@/components/admin/publish-modal";

interface Video {
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  created_at?: string;
  duration?: number;
  status?: string;
  interactivity_packages?: { id: string; name?: string }[];
  [key: string]: unknown;
}

export default function VideosPage() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Templates Modal
  const [templatesVideo, setTemplatesVideo] = useState<Video | null>(null);

  // Publish Modal
  const [publishPackage, setPublishPackage] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/kpoint/videos");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      // Handle various response shapes from KPOINT
      const videoList = data.videos || data.results || data.data || [];
      setVideos(Array.isArray(videoList) ? videoList : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <>
      <Header
        title="Videos"
        subtitle="Manage your KPOINT video library"
      />
      <div className="p-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchVideos} />
        ) : videos.length === 0 ? (
          <EmptyState
            title="No videos found"
            description="Videos will appear here once they're available in your KPOINT account."
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onViewTemplates={() => setTemplatesVideo(video)}
              />
            ))}
          </div>
        )}
      </div>

      {/* Templates Modal */}
      <TemplatesModal
        video={templatesVideo}
        open={!!templatesVideo}
        onClose={() => setTemplatesVideo(null)}
        onPublish={(pkg) => {
          setTemplatesVideo(null);
          setPublishPackage(pkg);
        }}
      />

      {/* Publish Modal */}
      <PublishModal
        packageInfo={publishPackage}
        open={!!publishPackage}
        onClose={() => setPublishPackage(null)}
      />
    </>
  );
}
