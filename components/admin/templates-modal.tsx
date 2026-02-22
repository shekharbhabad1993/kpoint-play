"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/shared/modal";
import { LoadingSpinner } from "@/components/shared/loading-spinner";
import { ErrorState } from "@/components/shared/error-state";
import { EmptyState } from "@/components/shared/empty-state";
import { Package, Send } from "lucide-react";

interface TemplatesModalProps {
  video: {
    id: string;
    title: string;
    interactivity_packages?: { id: string; name?: string }[];
  } | null;
  open: boolean;
  onClose: () => void;
  onPublish: (pkg: { id: string; name: string }) => void;
}

interface PackageDetail {
  id: string;
  name: string;
  description?: string;
  [key: string]: unknown;
}

export function TemplatesModal({
  video,
  open,
  onClose,
  onPublish,
}: TemplatesModalProps) {
  const [packages, setPackages] = useState<PackageDetail[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!video || !open) return;

    const pkgIds = video.interactivity_packages;
    if (!pkgIds || pkgIds.length === 0) {
      setPackages([]);
      return;
    }

    fetchPackages(pkgIds);
  }, [video, open]);

  async function fetchPackages(
    pkgRefs: { id: string; name?: string }[]
  ) {
    setLoading(true);
    setError(null);
    try {
      const results = await Promise.all(
        pkgRefs.map(async (ref) => {
          try {
            const res = await fetch(
              `/api/kpoint/packages?packageId=${ref.id}`
            );
            if (!res.ok) {
              // If individual fetch fails, return minimal info
              return { id: ref.id, name: ref.name || ref.id } as PackageDetail;
            }
            return (await res.json()) as PackageDetail;
          } catch {
            return { id: ref.id, name: ref.name || ref.id } as PackageDetail;
          }
        })
      );
      setPackages(results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load packages"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={`Templates - ${video?.title || "Video"}`}
      size="lg"
    >
      {loading ? (
        <LoadingSpinner />
      ) : error ? (
        <ErrorState message={error} />
      ) : packages.length === 0 ? (
        <EmptyState
          title="No templates found"
          description="This video has no interactivity packages associated with it."
        />
      ) : (
        <div className="space-y-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-kpoint-50 flex items-center justify-center">
                  <Package className="w-5 h-5 text-kpoint-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {pkg.name || pkg.id}
                  </p>
                  {pkg.description && (
                    <p className="text-xs text-gray-500 mt-0.5">
                      {pkg.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-0.5 font-mono">
                    ID: {pkg.id}
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  onPublish({ id: pkg.id, name: pkg.name || pkg.id })
                }
                className="btn-primary text-sm flex items-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                Publish
              </button>
            </div>
          ))}
        </div>
      )}
    </Modal>
  );
}
