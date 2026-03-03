"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Header } from "@/components/layout/header";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { VideoJourneyStepper } from "@/components/admin/video-journey-stepper";
import { TemplatesModal } from "@/components/admin/templates-modal";
import { AddTemplateModal } from "@/components/admin/add-template-modal";
import { PublishVideoModal } from "@/components/admin/publish-video-modal";
import { ArrowLeft, Share2, Palette } from "lucide-react";
import { getMockVideos, simulateDelay } from "@/lib/kpoint/mock-data";
import { getClientSession } from "@/lib/utils/cookies";

interface Video {
  id: string;
  displayname: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  created_at?: string;
  duration?: number;
  status?: string;
  interactivity_packages?: { id: string; name?: string }[];
  [key: string]: unknown;
}

export default function VideoDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const videoId = params?.videoId as string;

  const [video, setVideo] = useState<Video | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState(3);
  const [userEmail, setUserEmail] = useState<string>("");
  const [publishComplete, setPublishComplete] = useState(false);

  // Templates Modal
  const [templatesVideo, setTemplatesVideo] = useState<Video | null>(null);

  // Add Template Modal
  const [addTemplateVideo, setAddTemplateVideo] = useState<Video | null>(null);

  // Share Video Modal
  const [publishVideo, setPublishVideo] = useState<Video | null>(null);

  // Get user email from session
  useEffect(() => {
    const session = getClientSession();
    console.log("👤 Client session:", session);
    console.log("📧 User email from session:", session?.email);
    setUserEmail(session?.email || "");
  }, []);

  // Fetch video details
  useEffect(() => {
    async function fetchVideo() {
      if (!videoId) return;

      setLoading(true);
      setError(null);
      try {
        console.log(`📦 Fetching video ${videoId} from mock data`);
        await simulateDelay(300);

        const mockVideos = getMockVideos();
        const foundVideo = mockVideos.find((v) => v.id === videoId);

        if (!foundVideo) {
          setError("Video not found");
          return;
        }

        const displayname = (foundVideo as any).displayname || foundVideo.title;
        const videoData: Video = {
          id: foundVideo.id,
          displayname: displayname,
          title: displayname,
          description: (foundVideo as any).description,
          thumbnail_url: foundVideo.images.thumb,
          created_at: foundVideo.time_created,
          duration: (foundVideo as any).duration,
          status: foundVideo.status,
          interactivity_packages: (foundVideo as any).interactivity_packages || [],
        };

        setVideo(videoData);
        console.log(`✅ Loaded video:`, videoData);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load video");
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [videoId]);

  // Calculate current step based on video state
  const calculateStep = (video: Video | null): number => {
    if (!video) return 3;

    const hasTemplates =
      video.interactivity_packages && video.interactivity_packages.length > 0;

    if (hasTemplates) {
      return 4; // Video has templates, ready to publish
    }

    return 3; // Ready to manage template
  };

  // Update step when video changes
  useEffect(() => {
    if (video) {
      const newStep = calculateStep(video);
      setCurrentStep(newStep);

      // Auto-advance to step 4 if step 3 is completed
      if (newStep === 4) {
        console.log("✅ Step 3 completed, auto-advancing to Step 4");
      }
    }
  }, [video]);

  // Load KPOINT video embed script
  useEffect(() => {
    if (!video?.id) return;

    const container = document.getElementById('kpoint-video-container');
    if (!container) return;

    // Clear any existing content
    container.innerHTML = '';

    // Create the video div
    const videoDiv = document.createElement('div');
    videoDiv.setAttribute('data-video-host', 'ktpl.kpoint.com');
    videoDiv.setAttribute('data-kvideo-id', video.id);
    videoDiv.style.width = '100%';
    videoDiv.style.height = '100%';
    container.appendChild(videoDiv);

    // Load the script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://assets.kpoint.com/assets/orca/media/embed/videofront-vega.js';
    script.async = true;
    container.appendChild(script);

    console.log('📹 Loading KPOINT video embed for:', video.id);

    return () => {
      // Cleanup
      if (container) {
        container.innerHTML = '';
      }
    };
  }, [video?.id]);

  // Stepper action handlers
  const handleTemplateManage = () => {
    if (video) {
      setTemplatesVideo(video);
    }
  };

  const handlePublish = () => {
    if (video) {
      setPublishVideo(video);
    }
  };

  if (loading) {
    return (
      <>
        <Header title="Loading..." subtitle="Please wait" />
        <div className="flex items-center justify-center h-64">
          <LoadingSpinner />
        </div>
      </>
    );
  }

  if (error || !video) {
    return (
      <>
        <Header title="Error" subtitle="Video not found" />
        <div className="p-6">
          <ErrorState message={error || "Video not found"} onRetry={() => router.push("/admin/videos")} />
        </div>
      </>
    );
  }

  return (
    <>
      <Header
        title={video.displayname}
      >
        <button
          onClick={() => router.push("/admin/videos")}
          className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors ${
            publishComplete ? "animate-pulse-highlight border-kpoint-500 bg-kpoint-50" : ""
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">Back to Videos</span>
          <span className="sm:hidden">Back</span>
        </button>
      </Header>

      {/* Video Journey Stepper - Progress Indicator Only */}
      <VideoJourneyStepper
        currentStep={currentStep}
        hasActiveVideo={false}
        activeVideoTitle={video.displayname}
        activeVideoId={video.id}
        videos={[{ id: video.id, title: video.displayname }]}
        onTemplateManage={handleTemplateManage}
        onPublish={handlePublish}
      />

      <div className="p-3 sm:p-6 h-[calc(100vh-110px)] overflow-auto">
        <div className="max-w-6xl mx-auto h-full flex flex-col items-center justify-center gap-4">
          {/* Video Player Container - Enlarged and Centered */}
          <div className="w-full bg-white rounded-lg shadow-lg p-2 sm:p-4">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden" id="kpoint-video-container" style={{ maxHeight: '57vh' }}>
              {/* KPOINT Video Embed - Loaded via useEffect */}
            </div>
          </div>

          {/* Action CTA - Smaller, Centered Below Video with Pulse Animation */}
          {currentStep === 3 && (
            <button
              onClick={() => setTemplatesVideo(video)}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-md border border-kpoint-500 bg-kpoint-50 flex items-center gap-2 transition-all hover:bg-kpoint-100 hover:shadow animate-pulse-highlight w-full sm:w-auto justify-center"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold bg-kpoint-600 text-white">
                3
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-900">Add Template</span>
              <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kpoint-600" />
            </button>
          )}

          {currentStep === 4 && !publishComplete && (
            <button
              onClick={() => setPublishVideo(video)}
              className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-md border border-kpoint-500 bg-kpoint-50 flex items-center gap-2 transition-all hover:bg-kpoint-100 hover:shadow animate-pulse-highlight w-full sm:w-auto justify-center"
            >
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold bg-kpoint-600 text-white">
                4
              </div>
              <span className="text-xs sm:text-sm font-medium text-gray-900">Publish to Users</span>
              <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-kpoint-600" />
            </button>
          )}

          {/* Journey Complete Message */}
          {publishComplete && (
            <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
              <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Journey Complete! Click &quot;Back to Videos&quot; to continue.</span>
            </div>
          )}
        </div>
      </div>

      {/* Templates Modal */}
      <TemplatesModal
        video={templatesVideo}
        open={!!templatesVideo}
        onClose={() => setTemplatesVideo(null)}
        onAddTemplate={() => {
          setAddTemplateVideo(templatesVideo);
        }}
        onPublish={() => {
          // Open the publish modal (step 4)
          if (templatesVideo) {
            setPublishVideo(templatesVideo);
          }
        }}
      />

      {/* Add Template Modal */}
      <AddTemplateModal
        video={addTemplateVideo}
        open={!!addTemplateVideo}
        onClose={() => setAddTemplateVideo(null)}
        userEmail={userEmail}
        onSuccess={async () => {
          setAddTemplateVideo(null);

          // Wait for KPOINT API to update (1 second delay)
          await new Promise((resolve) => setTimeout(resolve, 1000));

          // Update video to reflect template has been applied
          if (video && addTemplateVideo?.id === video.id) {
            const updatedVideo = {
              ...video,
              interactivity_packages: [{ id: "temp-id", name: "Applied Template" }],
            };
            setVideo(updatedVideo);
            setCurrentStep(4); // Move to publish step
          }

          // Close the templates modal automatically
          setTemplatesVideo(null);
        }}
      />

      {/* Publish Video Modal */}
      <PublishVideoModal
        video={publishVideo}
        open={!!publishVideo}
        onClose={() => setPublishVideo(null)}
        onSuccess={() => {
          console.log("✅ Video published successfully");
          // Mark step 4 as completed
          setCurrentStep(5);
          setPublishComplete(true);
        }}
      />
    </>
  );
}
