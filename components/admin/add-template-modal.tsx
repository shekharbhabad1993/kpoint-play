"use client";

import { useState, useEffect } from "react";
import { X, ShoppingBag, Loader2, CheckCircle } from "lucide-react";
import { TEMPLATE_DEFINITIONS } from "@/lib/kpoint/template-definitions";

interface PartnerTemplate {
  id: string;
  name: string;
  description?: string;
  thumbnail_url?: string;
  images?: { thumb?: string };
}

interface AddTemplateModalProps {
  video: {
    id: string;
    title: string;
  } | null;
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  userEmail?: string;
}

export function AddTemplateModal({
  video,
  open,
  onClose,
  onSuccess,
  userEmail,
}: AddTemplateModalProps) {
  const [applying, setApplying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [partnerTemplates, setPartnerTemplates] = useState<PartnerTemplate[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);

  // Extract partner from email (e.g., hdfcuser1@kpoint.com -> hdfc)
  const getPartnerTag = (email?: string): string | null => {
    if (!email) return null;
    const match = email.match(/^(hdfc|icici|bom)/i);
    return match ? match[1].toLowerCase() : null;
  };

  useEffect(() => {
    if (open) {
      console.log("🔍 AddTemplateModal opened with userEmail:", userEmail);
      const partnerTag = getPartnerTag(userEmail);
      console.log("🏷️ Extracted partner tag:", partnerTag);

      if (partnerTag) {
        fetchPartnerTemplates(partnerTag);
      } else if (userEmail) {
        console.log("⚠️ No partner tag found for email:", userEmail);
      } else {
        console.log("⚠️ No user email provided");
      }
    }
  }, [open, userEmail]);

  async function fetchPartnerTemplates(partnerTag: string) {
    setLoadingTemplates(true);
    setError(null);
    try {
      const apiUrl = `https://ktpl.kpoint.com/api/v3/search?facet.tag=${partnerTag}`;
      console.log("🌐 Fetching partner templates from:", apiUrl);

      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Failed to fetch partner templates");
      const data = await res.json();

      console.log("✅ Partner templates response:", data);
      console.log(`📊 Found ${data.results?.length || 0} partner templates`);

      setPartnerTemplates(data.results || []);
    } catch (err: any) {
      console.error("❌ Error fetching partner templates:", err);
      setError(err.message || "Failed to load partner templates");
    } finally {
      setLoadingTemplates(false);
    }
  }

  async function handleSelectTemplate(templateId: string) {
    if (!video) return;

    setApplying(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch("/api/kpoint/templates/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          video_id: video.id,
          template_id: templateId,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to apply template");
      }

      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    } catch (err: any) {
      setError(err.message || "Failed to apply template");
    } finally {
      setApplying(false);
    }
  }

  function getTemplateIcon(category: string) {
    switch (category) {
      case "shoppable":
        return <ShoppingBag className="w-6 h-6" />;
      default:
        return <ShoppingBag className="w-6 h-6" />;
    }
  }

  if (!open || !video) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">
              Add Template
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Select a template type to add to: {video.title}
            </p>
          </div>
          <button
            onClick={onClose}
            disabled={applying}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {success ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Template Applied Successfully!
              </h3>
              <p className="text-gray-500">Refreshing templates...</p>
            </div>
          ) : loadingTemplates ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-8 h-8 text-kpoint-600 animate-spin" />
            </div>
          ) : (
            <>
              {error && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-600">{error}</p>
                </div>
              )}

              {/* Show partner templates if available, otherwise show default templates */}
              {partnerTemplates.length > 0 ? (
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Partner Templates ({getPartnerTag(userEmail)?.toUpperCase()})
                    </h3>
                  </div>
                  {partnerTemplates.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleSelectTemplate(template.id)}
                      disabled={applying}
                      className="flex items-start gap-4 p-5 rounded-lg border-2 border-gray-200 hover:border-kpoint-500 hover:bg-kpoint-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
                    >
                      {template.images?.thumb || template.thumbnail_url ? (
                        <img
                          src={template.images?.thumb || template.thumbnail_url}
                          alt={template.name}
                          className="flex-shrink-0 w-16 h-16 rounded-lg object-cover"
                        />
                      ) : (
                        <div className="flex-shrink-0 w-16 h-16 rounded-lg bg-kpoint-100 flex items-center justify-center text-kpoint-600">
                          <ShoppingBag className="w-8 h-8" />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {template.name}
                        </h3>
                        {template.description && (
                          <p className="text-sm text-gray-500">
                            {template.description}
                          </p>
                        )}
                      </div>
                      {applying && (
                        <Loader2 className="w-5 h-5 text-kpoint-600 animate-spin flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-4">
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-700">
                      Default Templates
                    </h3>
                  </div>
                  {TEMPLATE_DEFINITIONS.map((template) => (
                    <button
                      key={template.id}
                      onClick={() => handleSelectTemplate(template.id)}
                      disabled={applying}
                      className="flex items-start gap-4 p-5 rounded-lg border-2 border-gray-200 hover:border-kpoint-500 hover:bg-kpoint-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed text-left"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-kpoint-100 flex items-center justify-center text-kpoint-600">
                        {getTemplateIcon(template.category)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 mb-1">
                          {template.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {template.description}
                        </p>
                        <span className="inline-block mt-2 text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600 capitalize">
                          {template.category}
                        </span>
                      </div>
                      {applying && (
                        <Loader2 className="w-5 h-5 text-kpoint-600 animate-spin flex-shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}

              {partnerTemplates.length === 0 && TEMPLATE_DEFINITIONS.length === 0 && !loadingTemplates && (
                <div className="text-center py-12 text-gray-500">
                  <p>No templates available</p>
                </div>
              )}
            </>
          )}
        </div>

        {/* Footer */}
        {!success && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end">
            <button
              onClick={onClose}
              disabled={applying}
              className="btn-secondary"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
