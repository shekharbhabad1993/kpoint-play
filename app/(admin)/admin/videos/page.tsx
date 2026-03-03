"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { VideoCard } from "@/components/admin/video-card";
import { getMockVideos, simulateDelay } from "@/lib/kpoint/mock-data";
import { getClientSession } from "@/lib/utils/cookies";

interface Video {
  id: string;
  title: string;
  displayname: string;
  description?: string;
  thumbnail_url?: string;
  created_at?: string;
  duration?: number;
  status?: string;
  tags?: string[];
  interactivity_packages?: { id: string; name?: string }[];
  [key: string]: unknown;
}

const VIDEO_TAGS = [
  { label: "All Videos", value: "" },
  { label: "Birthday", value: "birthday" },
  { label: "Housewives", value: "housewives" },
  { label: "Working Professionals", value: "workingprofessionals" },
  { label: "New Year", value: "newyear" },
  { label: "Special Offers", value: "specialoffers" },
];

// Extract partner from email (e.g., hdfcuser1@kpoint.com -> hdfc)
function getPartnerTag(email?: string): string | null {
  if (!email) return null;
  const match = email.match(/^(hdfc|icici|bom)/i);
  return match ? match[1].toLowerCase() : null;
}

export default function VideosPage() {
  const router = useRouter();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [autoSelectedTag, setAutoSelectedTag] = useState<string | null>(null);

  // Get user email and auto-select partner tag on mount
  useEffect(() => {
    const session = getClientSession();
    const email = session?.email || "";
    setUserEmail(email);

    console.log("👤 Logged in user email:", email);

    if (email) {
      const partnerTag = getPartnerTag(email);
      console.log("🏷️ Auto-detected partner tag:", partnerTag);

      if (partnerTag) {
        setAutoSelectedTag(partnerTag);
        setSelectedTag(partnerTag);
      }
    }
  }, []);

  const fetchVideos = useCallback(async (tag: string = "") => {
    setLoading(true);
    setError(null);
    try {
      // Always use mock data for now
      console.log("📦 Using mock videos from mock-data.ts");
      await simulateDelay(500);
      const mockVideos = getMockVideos();

      let videoList = mockVideos.map((mockVideo: any) => ({
        id: mockVideo.id,
        title: mockVideo.name,
        displayname: mockVideo.displayname || mockVideo.name,
        description: mockVideo.description,
        thumbnail_url: mockVideo.images.thumb,
        created_at: mockVideo.time_created,
        duration: mockVideo.duration,
        status: mockVideo.status,
        tags: mockVideo.tags || [],
        interactivity_packages: mockVideo.interactivity_packages || [],
      }));

      // Filter by tag if selected
      if (tag) {
        console.log(`🔍 Filtering mock videos by tag: ${tag}`);
        videoList = videoList.filter((video: any) =>
          video.tags?.includes(tag) || false
        );
        console.log(`✅ Filtered to ${videoList.length} videos with tag: ${tag}`);
      } else {
        console.log(`✅ Loaded ${videoList.length} mock videos`);
      }

      setVideos(videoList);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load videos");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchVideos(selectedTag);
  }, [fetchVideos, selectedTag]);

  const handleTagChange = (tag: string) => {
    setSelectedTag(tag);
  };

  // Navigate to video details page
  const handleVideoClick = (videoId: string) => {
    router.push(`/admin/videos/${videoId}`);
  };

  return (
    <>
      <Header title="Videos" subtitle="Manage your KPOINT video library" />

      {/* Tag Filters */}
      <div className="px-6 pt-4 pb-2 bg-white border-b border-gray-200">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex flex-wrap gap-2">
            {VIDEO_TAGS.map((tag) => (
              <button
                key={tag.value}
                onClick={() => handleTagChange(tag.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedTag === tag.value
                    ? "bg-kpoint-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
        {autoSelectedTag && (
          <p className="text-xs text-gray-500">
            📧 Logged in as: <span className="font-medium">{userEmail}</span> - Showing <span className="font-medium text-kpoint-600">{autoSelectedTag.toUpperCase()}</span> videos
          </p>
        )}
      </div>

      <div className="p-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={() => handleVideoClick(video.id)}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
