import { kpointClient } from "./client";
import { config } from "../config";
import {
  getMockVideos,
  getMockVideoById,
  simulateDelay,
  type MockVideo,
} from "./mock-data";

export interface KPointVideo {
  id: string;
  title: string;
  description?: string;
  thumbnail_url?: string;
  created_at?: string;
  updated_at?: string;
  duration?: number;
  status?: string;
  interactivity_packages?: InteractivityPackage[];
  [key: string]: unknown;
}

export interface InteractivityPackage {
  id: string;
  name?: string;
  description?: string;
  [key: string]: unknown;
}

export interface VideoListResponse {
  videos: KPointVideo[];
  total?: number;
  page?: number;
  per_page?: number;
  [key: string]: unknown;
}

/**
 * Convert mock video data to KPointVideo format
 */
function convertMockToKPointVideo(mockVideo: MockVideo): KPointVideo {
  // Parse interactivity_packages from properties if present
  let interactivityPackages: InteractivityPackage[] | undefined = undefined;

  if (mockVideo.properties.interactivity_packages) {
    try {
      const parsed = JSON.parse(mockVideo.properties.interactivity_packages);
      if (Array.isArray(parsed)) {
        interactivityPackages = parsed.map((pkg) => ({
          id: pkg.id,
          name: pkg.displayname || pkg.name,
          description: pkg.description,
          state: pkg.state,
          time_created: pkg.time_created,
          time_last_published: pkg.time_last_published,
          time_last_update: pkg.time_last_update,
        }));
      }
    } catch (err) {
      console.error(`Failed to parse interactivity_packages for video ${mockVideo.id}:`, err);
    }
  }

  return {
    ...mockVideo,
    id: mockVideo.id,
    title: mockVideo.displayname,
    description: mockVideo.description,
    thumbnail_url: mockVideo.images.thumb,
    created_at: mockVideo.time_created,
    updated_at: mockVideo.time_last_update,
    duration: mockVideo.published_duration,
    status: mockVideo.status,
    interactivity_packages: interactivityPackages,
  };
}

export async function listVideos(
  scope?: string
): Promise<VideoListResponse> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log("🎭 Mock mode enabled - returning mock video data");
    await simulateDelay(300); // Simulate network delay

    const mockVideos = getMockVideos();
    const convertedVideos = mockVideos.map(convertMockToKPointVideo);

    return {
      videos: convertedVideos,
      total: mockVideos.length,
      page: 1,
      per_page: mockVideos.length,
    };
  }

  // Real API call
  const params: Record<string, string> = {};
  if (scope) params.scope = scope;

  const data = await kpointClient.get("/videos", params);

  // KPOINT API returns data in this format:
  // { list: [...], totalcount: ..., last_index: ... }
  // We need to transform it to our VideoListResponse format
  const response = data as any;
  const videos = response.list || response.videos || response.results || response.data || [];

  return {
    videos: Array.isArray(videos) ? videos : [],
    total: response.totalcount || response.total || videos.length,
    page: 1,
    per_page: videos.length,
  };
}

export async function getVideo(videoId: string): Promise<KPointVideo> {
  // Use mock data if in mock mode
  if (config.kpoint.mockMode) {
    console.log(`🎭 Mock mode enabled - returning mock video: ${videoId}`);
    await simulateDelay(200); // Simulate network delay

    const mockVideo = getMockVideoById(videoId);
    if (!mockVideo) {
      throw new Error(`Video not found: ${videoId}`);
    }

    return convertMockToKPointVideo(mockVideo);
  }

  // Real API call
  const data = await kpointClient.get(`/videos/${videoId}`);
  return data as KPointVideo;
}
