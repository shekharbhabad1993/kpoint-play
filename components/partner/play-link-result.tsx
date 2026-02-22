"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ExternalLink,
  MessageCircle,
  Mail,
  ArrowLeft,
  Share2,
} from "lucide-react";

interface PlayLinkResultProps {
  result: {
    playLink: string;
    whatsappLink: string;
    emailLink: string;
  };
  onBack: () => void;
  onDone: () => void;
}

export function PlayLinkResult({
  result,
  onBack,
  onDone,
}: PlayLinkResultProps) {
  const [copied, setCopied] = useState(false);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(result.playLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = result.playLink;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Personalized Video",
          text: "Check out this personalized video created just for you!",
          url: result.playLink,
        });
      } catch (err) {
        // User cancelled or share failed
        console.log("Share cancelled or failed", err);
      }
    } else {
      // Fallback to copy if native share not available
      copyToClipboard();
    }
  }

  return (
    <div className="space-y-5">
      {/* Success indicator */}
      <div className="text-center py-2">
        <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
          <Check className="w-6 h-6 text-green-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900">Link Generated</h3>
        <p className="text-sm text-gray-500 mt-1">
          Your personalized video link is ready to share
        </p>
      </div>

      {/* Play Link Display */}
      <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
        <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wider">
          Play Link
        </p>
        <p className="text-sm text-gray-900 break-all font-mono leading-relaxed">
          {result.playLink}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3">
        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className={`flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
            copied
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50"
          }`}
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              <span className="hidden sm:inline">Copied!</span>
              <span className="sm:hidden">✓</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copy</span>
            </>
          )}
        </button>

        {/* Native Share Button */}
        <button
          onClick={handleNativeShare}
          className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-xs sm:text-sm bg-kpoint-600 text-white hover:bg-kpoint-700 transition-colors"
        >
          <Share2 className="w-4 h-4" />
          <span className="hidden sm:inline">Share</span>
        </button>

        {/* Preview Button */}
        <a
          href={result.playLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-xs sm:text-sm bg-gray-700 text-white hover:bg-gray-800 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          <span className="hidden sm:inline">Preview</span>
        </a>
      </div>

      {/* Share Options */}
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-3">
          Or share via
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3">
          <a
            href={result.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-xs sm:text-sm bg-green-600 text-white hover:bg-green-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={result.emailLink}
            className="flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-2 sm:px-4 rounded-xl font-medium text-xs sm:text-sm bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0 pt-2 border-t border-gray-100">
        <button
          onClick={onBack}
          className="btn-ghost text-xs sm:text-sm flex items-center justify-center gap-2 w-full sm:w-auto"
        >
          <ArrowLeft className="w-4 h-4" />
          Personalize Again
        </button>
        <button onClick={onDone} className="btn-secondary text-xs sm:text-sm w-full sm:w-auto">
          Done
        </button>
      </div>
    </div>
  );
}
