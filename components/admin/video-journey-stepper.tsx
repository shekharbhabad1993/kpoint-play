"use client";

import { Upload, Settings, Palette, Check as CheckIcon, Share2, Video } from "lucide-react";

interface Step {
  id: number;
  title: string;
  icon: React.ReactNode;
  status: "completed" | "current" | "upcoming";
  clickable: boolean;
  onClick?: () => void;
}

interface VideoOption {
  id: string;
  title: string;
}

interface VideoJourneyStepperProps {
  currentStep?: number; // 1-4
  onTemplateManage?: () => void;
  onPublish?: () => void;
  hasActiveVideo?: boolean;
  activeVideoTitle?: string;
  activeVideoId?: string;
  videos?: VideoOption[];
  onVideoSelect?: (videoId: string) => void;
}

export function VideoJourneyStepper({
  currentStep = 3,
  onTemplateManage,
  onPublish,
  hasActiveVideo = false,
  activeVideoTitle,
  activeVideoId,
  videos = [],
  onVideoSelect,
}: VideoJourneyStepperProps) {
  const steps: Step[] = [
    {
      id: 1,
      title: "Video Upload",
      icon: <Upload className="w-5 h-5" />,
      status: currentStep > 1 ? "completed" : currentStep === 1 ? "current" : "upcoming",
      clickable: false,
    },
    {
      id: 2,
      title: "Video Processed",
      icon: <Settings className="w-5 h-5" />,
      status: currentStep > 2 ? "completed" : currentStep === 2 ? "current" : "upcoming",
      clickable: false,
    },
    {
      id: 3,
      title: "Template",
      icon: <Palette className="w-5 h-5" />,
      status: currentStep > 3 ? "completed" : currentStep === 3 ? "current" : "upcoming",
      clickable: hasActiveVideo && currentStep >= 3,
      onClick: onTemplateManage,
    },
    {
      id: 4,
      title: "Publish to Users",
      icon: <Share2 className="w-5 h-5" />,
      status: currentStep > 4 ? "completed" : currentStep === 4 ? "current" : "upcoming",
      clickable: hasActiveVideo && currentStep >= 4,
      onClick: onPublish,
    },
  ];

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-1 gap-4">

          {/* Video Selector */}
          {videos.length > 1 && (
            <div className="flex items-center gap-2">
              <Video className="w-3 h-3 text-gray-500" />
              <select
                value={activeVideoId || ""}
                onChange={(e) => onVideoSelect?.(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-kpoint-500 focus:border-transparent bg-white cursor-pointer hover:border-kpoint-400 transition-colors min-w-[200px]"
              >
                <option value="" disabled>
                  Select a video...
                </option>
                {videos.map((video) => (
                  <option key={video.id} value={video.id}>
                    {video.title}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center relative">
                <button
                  onClick={step.clickable ? step.onClick : undefined}
                  disabled={!step.clickable}
                  title={
                    step.clickable
                      ? `Click to ${step.title.toLowerCase()}`
                      : step.title
                  }
                  className={`
                    w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                    ${
                      step.status === "completed"
                        ? "bg-green-500 text-white"
                        : step.status === "current"
                        ? "bg-kpoint-600 text-white ring-2 ring-kpoint-100"
                        : "bg-gray-200 text-gray-400"
                    }
                    ${
                      step.clickable
                        ? "cursor-pointer hover:scale-105 hover:shadow"
                        : "cursor-default"
                    }
                  `}
                >
                  {step.status === "completed" ? (
                    <CheckIcon className="w-4 h-4" />
                  ) : (
                    <span className="text-xs font-bold">{step.id}</span>
                  )}
                </button>
                <span
                  className={`
                    mt-0.5 text-[10px] font-medium text-center whitespace-nowrap
                    ${
                      step.status === "completed"
                        ? "text-green-600"
                        : step.status === "current"
                        ? "text-kpoint-600"
                        : "text-gray-500"
                    }
                  `}
                >
                  {step.title}
                </span>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 -mt-4">
                  <div
                    className={`
                      h-full transition-all duration-300
                      ${
                        steps[index + 1].status === "completed" || steps[index + 1].status === "current"
                          ? "bg-green-500"
                          : "bg-gray-200"
                      }
                    `}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
