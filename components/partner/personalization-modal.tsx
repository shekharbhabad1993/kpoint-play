"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "@/components/shared/modal";
import { PlayLinkResult } from "./play-link-result";
import { Wand2 } from "lucide-react";

interface PersonalizationModalProps {
  template: {
    id: string;
    package_id: string;
    package_name: string;
    video_id: string;
    fields?: {
      key: string;
      label: string;
      type: string;
      required?: boolean;
      default_value?: string;
    }[];
  } | null;
  open: boolean;
  onClose: () => void;
}

interface LinkResult {
  playLink: string;
  whatsappLink: string;
  emailLink: string;
}

export function PersonalizationModal({
  template,
  open,
  onClose,
}: PersonalizationModalProps) {
  const [generating, setGenerating] = useState(false);
  const [linkResult, setLinkResult] = useState<LinkResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [dynamicFields, setDynamicFields] = useState<any[] | null>(null);
  const [loadingFields, setLoadingFields] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Fetch dynamic fields when modal opens
  useEffect(() => {
    if (open && template) {
      fetchDynamicFields();
    }
  }, [open, template]);

  async function fetchDynamicFields() {
    if (!template) return;

    setLoadingFields(true);
    try {
      const res = await fetch(
        `/api/kpoint/videos/${template.video_id}/fields?packageId=${template.package_id}`
      );

      if (res.ok) {
        const data = await res.json();
        if (data.fields && data.fields.length > 0) {
          console.log("📋 Dynamic fields loaded:", data.fields);
          setDynamicFields(data.fields);
        } else {
          // Fall back to template fields
          setDynamicFields(null);
        }
      } else {
        // Fall back to template fields
        setDynamicFields(null);
      }
    } catch (err) {
      console.error("Failed to fetch dynamic fields", err);
      // Fall back to template fields
      setDynamicFields(null);
    } finally {
      setLoadingFields(false);
    }
  }

  // Use dynamic fields if available, otherwise use template fields or defaults
  const fields =
    dynamicFields ||
    template?.fields || [
      // Default fields if none specified by KPOINT
      { key: "first_name", label: "First Name", type: "text", required: true },
      { key: "last_name", label: "Last Name", type: "text", required: false },
      { key: "company", label: "Company", type: "text", required: false },
      { key: "offer", label: "Offer / Message", type: "text", required: false },
    ];

  async function onSubmit(data: Record<string, string>) {
    if (!template) return;

    setGenerating(true);
    setError(null);

    // Filter out empty values
    const personalizationFields: Record<string, string> = {};
    for (const [key, value] of Object.entries(data)) {
      if (value && value.trim()) {
        personalizationFields[key] = value.trim();
      }
    }

    try {
      const res = await fetch("/api/kpoint/partner/play-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          videoId: template.video_id,
          packageId: template.package_id,
          fields: personalizationFields,
          state: "DRAFT",
        }),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.error || "Failed to generate link");
      }

      const result = await res.json();
      setLinkResult(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate link");
    } finally {
      setGenerating(false);
    }
  }

  function handleClose() {
    reset();
    setLinkResult(null);
    setError(null);
    setDynamicFields(null);
    onClose();
  }

  function handleBack() {
    setLinkResult(null);
    setError(null);
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={
        linkResult
          ? "Your Personalized Link"
          : `Personalize: ${template?.package_name || "Template"}`
      }
      size="lg"
    >
      {linkResult ? (
        <PlayLinkResult
          result={linkResult}
          onBack={handleBack}
          onDone={handleClose}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {error && (
            <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          {loadingFields ? (
            <div className="flex items-center justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-kpoint-600" />
              <p className="ml-3 text-sm text-gray-500">Loading fields...</p>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-500">
                Fill in the personalization fields below to generate a unique
                play link.
                {dynamicFields && (
                  <span className="block mt-1 text-xs text-kpoint-600">
                    ✨ Dynamic fields loaded from video template
                  </span>
                )}
              </p>

              {fields.map((field) => (
            <div key={field.key}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {field.label || field.key}
                {field.required && (
                  <span className="text-red-500 ml-0.5">*</span>
                )}
              </label>
              {field.type === "textarea" ? (
                <textarea
                  {...register(field.key, {
                    required: field.required
                      ? `${field.label || field.key} is required`
                      : false,
                  })}
                  className="input-field"
                  rows={3}
                  placeholder={`Enter ${(field.label || field.key).toLowerCase()}`}
                  defaultValue={field.default_value || ""}
                />
              ) : (
                <input
                  type={field.type === "email" ? "email" : "text"}
                  {...register(field.key, {
                    required: field.required
                      ? `${field.label || field.key} is required`
                      : false,
                  })}
                  className="input-field"
                  placeholder={`Enter ${(field.label || field.key).toLowerCase()}`}
                  defaultValue={field.default_value || ""}
                />
              )}
              {errors[field.key] && (
                <p className="text-xs text-red-500 mt-1">
                  {errors[field.key]?.message as string}
                </p>
              )}
            </div>
              ))}
            </>
          )}

          <div className="flex justify-end gap-3 pt-2">
            <button type="button" onClick={handleClose} className="btn-secondary">
              Cancel
            </button>
            <button
              type="submit"
              disabled={generating}
              className="btn-primary flex items-center gap-2"
            >
              {generating ? (
                <>
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Generating...
                </>
              ) : (
                <>
                  <Wand2 className="w-4 h-4" />
                  Generate Play Link
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
