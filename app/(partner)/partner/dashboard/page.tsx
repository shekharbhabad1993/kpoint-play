"use client";

import { useEffect, useState } from "react";
import { Header } from "@/components/layout/header";
import { StatCard } from "@/components/shared/stat-card";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { FileText, Link2, Share2 } from "lucide-react";

export default function PartnerDashboard() {
  const [templateCount, setTemplateCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/kpoint/partner");
      if (!res.ok) throw new Error("Failed to fetch templates");
      const data = await res.json();
      const templates = data.templates || data.results || [];
      setTemplateCount(Array.isArray(templates) ? templates.length : 0);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header
        title="Partner Dashboard"
        subtitle="Personalize and share video content"
      />
      <div className="p-6">
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorState message={error} onRetry={fetchData} />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <StatCard
                label="Available Templates"
                value={templateCount}
                icon={<FileText className="w-5 h-5" />}
              />
              <StatCard
                label="Links Generated"
                value="--"
                icon={<Link2 className="w-5 h-5" />}
                trend="Not tracked (stateless)"
              />
              <StatCard
                label="Shares"
                value="--"
                icon={<Share2 className="w-5 h-5" />}
                trend="Not tracked (stateless)"
              />
            </div>

            <div className="card">
              <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a
                  href="/partner/templates"
                  className="btn-primary text-center block"
                >
                  Browse Templates
                </a>
                <button className="btn-secondary" disabled>
                  View History (Coming Soon)
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
