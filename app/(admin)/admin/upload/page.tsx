"use client";

import { Header } from "@/components/layout/header";
import { Upload, Cloud } from "lucide-react";

export default function UploadPage() {
  return (
    <>
      <Header title="Upload" subtitle="Upload videos to KPOINT" />
      <div className="p-6">
        <div className="card max-w-2xl mx-auto">
          <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
            <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Cloud className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Upload Coming Soon
            </h3>
            <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
              Video upload will be available in a future update. For now, please
              use the KPOINT dashboard directly to upload videos.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button className="btn-primary flex items-center gap-2" disabled>
                <Upload className="w-4 h-4" />
                Select Files
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Supported formats: MP4, MOV, AVI, WMV (coming soon)
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
