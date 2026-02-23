"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/shared/stat-card";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { Video, Package, Users, Activity } from "lucide-react";

export default function AdminDashboard() {
  const [stats, setStats] = useState<{
    videoCount: number;
    loading: boolean;
    error: string | null;
  }>({ videoCount: 0, loading: true, error: null });

  useEffect(() => {
    fetchStats();
  }, []);

  async function fetchStats() {
    setStats((s) => ({ ...s, loading: true, error: null }));
    try {
      const res = await fetch("/api/kpoint/videos?scope=trending");
      if (!res.ok) throw new Error("Failed to fetch videos");
      const data = await res.json();
      const videos = data.videos || data.results || [];
      setStats({
        videoCount: Array.isArray(videos) ? videos.length : 0,
        loading: false,
        error: null,
      });
    } catch (err) {
      setStats({
        videoCount: 0,
        loading: false,
        error: err instanceof Error ? err.message : "Failed to load",
      });
    }
  }

  return (
    <>
      <Header title="Dashboard" subtitle="Overview of your KPOINT content" />
      <div className="p-6">
        {stats.loading ? (
          <LoadingSpinner />
        ) : stats.error ? (
          <ErrorState message={stats.error} onRetry={fetchStats} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total Videos"
              value={stats.videoCount}
              icon={<Video className="w-5 h-5" />}
            />
            <StatCard
              label="Active Packages"
              value="--"
              icon={<Package className="w-5 h-5" />}
              trend="Fetched from KPOINT"
            />
            <StatCard
              label="Partners"
              value="--"
              icon={<Users className="w-5 h-5" />}
              trend="Managed via KPOINT"
            />
            <StatCard
              label="API Status"
              value="Connected"
              icon={<Activity className="w-5 h-5" />}
            />
          </div>
        )}

        <div className="mt-8 card">
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <a
              href="/admin/videos"
              className="btn-secondary text-center block"
            >
              Browse Videos
            </a>
            <a
              href="/admin/upload"
              className="btn-secondary text-center block"
            >
              Upload Video
            </a>
            <button className="btn-secondary" disabled>
              View Analytics (Coming Soon)
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
