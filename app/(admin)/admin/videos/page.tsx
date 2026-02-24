"use client";

import { useEffect, useState, useCallback } from "react";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { VideoCard } from "@/components/admin/video-card";
import { TemplatesModal } from "@/components/admin/templates-modal";
import { AddTemplateModal } from "@/components/admin/add-template-modal";
import { ShareVideoModal } from "@/components/admin/share-video-modal";
import { getMockVideos, simulateDelay } from "@/lib/kpoint/mock-data";

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

  // Add Template Modal
  const [addTemplateVideo, setAddTemplateVideo] = useState<Video | null>(null);

  // Share Video Modal
  const [shareVideo, setShareVideo] = useState<Video | null>(null);

  const fetchVideos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("📦 Using mock videos from mock-data.ts");
      // Simulate API delay for realistic UX
      await simulateDelay(500);

      // Get mock videos instead of fetching from API
      const mockVideos = getMockVideos();

      // Map mock video structure to Video interface
      const videoList = mockVideos.map((mockVideo) => ({
        id: mockVideo.id,
        title: mockVideo.title,
        description: mockVideo.description,
        thumbnail_url: mockVideo.images.thumb,
        created_at: mockVideo.time_created,
        duration: mockVideo.duration,
        status: mockVideo.status,
        interactivity_packages: mockVideo.interactivity_packages || [],
      }));

      setVideos(videoList);
      console.log(`✅ Loaded ${videoList.length} mock videos`);
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
                onShare={() => setShareVideo(video)}
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
        onAddTemplate={() => {
          setAddTemplateVideo(templatesVideo);
        }}
      />

      {/* Add Template Modal */}
      <AddTemplateModal
        video={addTemplateVideo}
        open={!!addTemplateVideo}
        onClose={() => setAddTemplateVideo(null)}
        onSuccess={async () => {
          setAddTemplateVideo(null);

          // Wait for KPOINT API to update (1 second delay)
          await new Promise(resolve => setTimeout(resolve, 1000));

          // Force refresh templates modal with updated data
          if (templatesVideo) {
            // Trigger re-fetch by changing the video object reference
            setTemplatesVideo({ ...templatesVideo, _refreshKey: Date.now() } as any);
          }
        }}
      />

      {/* Share Video Modal */}
      <ShareVideoModal
        video={shareVideo}
        open={!!shareVideo}
        onClose={() => setShareVideo(null)}
        onSuccess={() => {
          console.log("✅ Video shared successfully");
        }}
      />
    </>
  );
}
