/**
 * Mock video data for development and testing
 * Based on actual KPOINT API response structure
 */

export interface MockVideo {
  comment_count: number;
  non_interactive_flag: boolean;
  _score: number;
  live_event: null | object;
  time_created: string;
  review_request_state: string;
  teleport_suffix: string;
  id: string;
  suggested_tags: string[];
  images: {
    thumb: string;
    fallback: {
      thumb: string;
      full: string;
      vthumb: string;
    };
    full: string;
    vthumb: string;
  };
  bookmarks_suffix: string;
  v4_embed_url: string;
  offline_hls_url: string;
  has_transcript: boolean;
  tags: string[];
  status: string;
  aspect_ratio: string;
  gif_path: null | string;
  transcript_name: string;
  quiz_suffix: string;
  comments_suffix: string;
  deleted_flag: boolean;
  can_access_kapsule: boolean;
  categories: object;
  time_metadata_update: string;
  expiry_date: null | string;
  standard_embed_code: string;
  polls_suffix: string;
  show_transcript_flag: boolean;
  scorm_created_flag: boolean;
  api_prefix: string;
  featured_flag: boolean;
  displayname: string;
  api_suffix: string;
  owner_displayname: string;
  view_count: number;
  time_publish: string;
  delete_suffix: string;
  time_last_update: string;
  questions_suffix: string;
  comment_enabled_flag: boolean;
  artifacts: string[];
  like_suffix: string;
  owner_name: string;
  like_count: number;
  live_event_flag: boolean;
  visibility: string;
  can_manage: boolean;
  author: null | string;
  review_update_date: null | string;
  time_last_featured: null | string;
  review_comments: null | string;
  time_last_generate: string;
  reviewer_displayname: null | string;
  scorm_enabled_flag: boolean;
  revision: number;
  rating_count: number;
  published_duration: number;
  cdn_url: string;
  share_url: string;
  name: string;
  notify_flag: boolean;
  published_flag: boolean;
  description: string;
  embed_markup: {
    standard: string;
    advanced: string;
  };
  transcript_suffix: string;
  thumbnail_path: string;
  reviewer_username: null | string;
  owner_email: string;
  app_url: string;
  play_url: string;
  src: string;
  scenes_suffix: string;
  annotations_suffix: string;
  properties: {
    interactivity_packages?: string;
    upload_video_path?: string;
    "stt.confidence"?: string;
    "smart.scene.artifact.count"?: string;
    hlsonly?: string;
    "stt.language"?: string;
    "video.res.720"?: string;
    video_download_flag?: string;
    "video.res.240"?: string;
    "video.res.360"?: string;
    "stt.state"?: string;
    comment_type?: string;
    "video.res.480"?: string;
    "stt.start_time"?: string;
    "scene.artifact.count"?: string;
    [key: string]: string | undefined;
  };
  time_sort: null | string;
  [key: string]: any;
}

export const mockVideos: any[] = [
  {
      "kapsule_id": "gcc-6560f726-4c24-4e17-8300-35a499b2f732",
      "id": "gcc-6560f726-4c24-4e17-8300-35a499b2f732",
      "story": null,
      "displayname": "Ipru Drona diya AI use cases",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 0,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-full.jpg",
          "vthumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-vthumb.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-full.jpg",
        "vthumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-vthumb.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-6560f726-4c24-4e17-8300-35a499b2f732/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-6560f726-4c24-4e17-8300-35a499b2f732' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-6560f726-4c24-4e17-8300-35a499b2f732",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-6560f726-4c24-4e17-8300-35a499b2f732/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-6560f726-4c24-4e17-8300-35a499b2f732/v4/i/16x9-thumb.jpg",
      "title": "Ipru Drona diya AI use cases",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20260213T16:46:16",
      "timeLastUpdated": "20260213T17:07:37",
      "timeLastGenerate": "20260213T16:59:32",
      "duration": 2159,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-6560f726-4c24-4e17-8300-35a499b2f732?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up2801027/e397cffe-a352-4131-8b7d-792271f12d6a/screen/data-",
        "high_precision": "0",
        "stt.state": "processing",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1770982199408",
        "scene.artifact.count": "143"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d",
      "id": "gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d",
      "story": null,
      "displayname": "Health Claim Process_v03 (1)",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 17,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/v5/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/v5/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/v5/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/v5/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d/v5/i/16x9-thumb.jpg",
      "title": "Health Claim Process_v03 (1)",
      "tags": [],
      "suggestedTags": [
        "cashless_everywhere",
        "cashless_treatment",
        "claim_form",
        "claim_status",
        "delisted_hospitals",
        "emergency_notification",
        "health_card",
        "health_insurance",
        "hospitalisation_documents",
        "ICICI_Lombard",
        "IL_Tacare_app",
        "medical_care",
        "network_hospital",
        "reimbursement_claims",
        "third_party_administrator"
      ],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20260112T14:06:09",
      "timeLastUpdated": "20260209T13:55:07",
      "timeLastGenerate": "20260112T14:09:17",
      "duration": 277,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-e84f5774-f9d1-445f-a2ed-db7ba282c77d?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PUBLIC",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "upload_video_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up840276/o_1jeolhlch1vr917sn4gpjge1h2bd/o_1jeolhlch1vr917sn4gpjge1h2bd.mp4",
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "video_download_flag": "false",
        "video.res.240": "done",
        "video.res.360": "done",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1768207179611",
        "scene.artifact.count": "11"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
      "id": "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
      "story": null,
      "displayname": "IL Hindi",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 146,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-full.jpg",
          "vthumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/vthumb.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-full.jpg",
        "vthumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/vthumb.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
      "title": "IL Hindi",
      "tags": ["icici", "insurance"],
      "suggestedTags": [
        "available",
        "bilingual_communication",
        "bottom_right_corner",
        "connect",
        "customer_service",
        "English",
        "help",
        "Hindi",
        "ICICI_Lombard",
        "IL_elevate",
        "insurance",
        "online_assistance",
        "policy",
        "query",
        "support"
      ],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "SCENE"
      ],
      "timeCreated": "20260112T12:23:33",
      "timeLastUpdated": "20260224T13:05:06",
      "timeLastGenerate": "20260112T12:25:26",
      "duration": 13,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PUBLIC",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "interactivity_packages": "[{\"time_last_published\":\"2026-02-22 15:53:34\",\"displayname\":\"Welcome\",\"time_last_update\":\"2026-02-22 15:53:34\",\"time_created\":\"2026-02-22 13:57:59\",\"id\":\"52eutbewxdcu\",\"state\":\"PUBLISHED\"}]",
        "upload_video_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up840253/o_1jeofm9o91mha1bbnmg31ftueied/o_1jeofm9o91mha1bbnmg31ftueied.mp4",
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "video_download_flag": "false",
        "video.res.240": "done",
        "video.res.360": "done",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1768200948403",
        "scene.artifact.count": "1"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "9:16",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-5c06e5d7-deec-4406-a693-908a65ad073a",
      "id": "gcc-5c06e5d7-deec-4406-a693-908a65ad073a",
      "story": null,
      "displayname": "Product meeting 2nd Dec",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 0,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-5c06e5d7-deec-4406-a693-908a65ad073a' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-5c06e5d7-deec-4406-a693-908a65ad073a",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5c06e5d7-deec-4406-a693-908a65ad073a/v4/i/16x9-thumb.jpg",
      "title": "Product meeting 2nd Dec",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "SCENE"
      ],
      "timeCreated": "20251202T18:46:08",
      "timeLastUpdated": "20251202T18:55:37",
      "timeLastGenerate": "20251202T18:48:01",
      "duration": 2456,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-5c06e5d7-deec-4406-a693-908a65ad073a?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up7351759/2b2b0bf8-cdcf-4883-903a-08ecf5389193/video/data-",
        "high_precision": "0",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1764681503681",
        "scene.artifact.count": "2"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8",
      "id": "gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8",
      "story": null,
      "displayname": "swayam 2.0 internal app deployement",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 1,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8/v4/i/16x9-thumb.jpg",
      "title": "swayam 2.0 internal app deployement",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "SCENE"
      ],
      "timeCreated": "20251201T15:42:00",
      "timeLastUpdated": "20251219T22:35:17",
      "timeLastGenerate": "20251201T15:47:08",
      "duration": 1629,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-03b6812e-f8ec-492b-ae99-06da43c9a8e8?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up7351475/7ede51e7-925c-4647-b286-4dbe9b76c9fc/video/data-",
        "high_precision": "0",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1764584250978",
        "scene.artifact.count": "2"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-707d8722-fe07-44f7-b623-f0636e588e37",
      "id": "gcc-707d8722-fe07-44f7-b623-f0636e588e37",
      "story": null,
      "displayname": "Sarvam 2.0 swagger documentation",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 1,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-707d8722-fe07-44f7-b623-f0636e588e37/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-707d8722-fe07-44f7-b623-f0636e588e37/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-707d8722-fe07-44f7-b623-f0636e588e37/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-707d8722-fe07-44f7-b623-f0636e588e37/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-707d8722-fe07-44f7-b623-f0636e588e37/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-707d8722-fe07-44f7-b623-f0636e588e37' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-707d8722-fe07-44f7-b623-f0636e588e37",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-707d8722-fe07-44f7-b623-f0636e588e37/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-707d8722-fe07-44f7-b623-f0636e588e37/v4/i/16x9-thumb.jpg",
      "title": "Sarvam 2.0 swagger documentation",
      "tags": [],
      "suggestedTags": [
        "API_integration",
        "authorization",
        "computational_thinking",
        "conversational_interface",
        "demo",
        "document",
        "DSA_course",
        "flashcards",
        "formative_assessment",
        "ingestion",
        "mind_maps",
        "summary_notes",
        "tender",
        "voice_interruptions",
        "web_RTC"
      ],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20251128T15:37:15",
      "timeLastUpdated": "20251219T22:38:39",
      "timeLastGenerate": "20251128T15:54:22",
      "duration": 1987,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-707d8722-fe07-44f7-b623-f0636e588e37?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up156983/4d9c1598-1961-44f4-be5a-da6f42eb971d/screen/data-",
        "high_precision": "0",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1764325484699",
        "scene.artifact.count": "2"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0",
      "id": "gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0",
      "story": null,
      "displayname": "Screen Recording 2025-11-11 131356 2",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 0,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0/v4/i/16x9-thumb.jpg",
      "title": "Screen Recording 2025-11-11 131356 2",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20251112T19:34:43",
      "timeLastUpdated": "20251112T19:55:33",
      "timeLastGenerate": "20251112T19:45:19",
      "duration": 2024,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-21164f76-9ce6-4ce1-9e9b-267ac0c5f5f0?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "video.res.240": "done",
        "upload_video_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up611708/o_1j9s5kqsg1u2oqn01o2pocb10kcd/o_1j9s5kqsg1u2oqn01o2pocb10kcd.mp4",
        "video.res.360": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "video.res.720": "done"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": false,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-aa272069-f59c-42c6-8842-2a86a3551d1d",
      "id": "gcc-aa272069-f59c-42c6-8842-2a86a3551d1d",
      "story": null,
      "displayname": "IL take care app - flutter SDK",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 6,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-aa272069-f59c-42c6-8842-2a86a3551d1d' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d/v4/i/16x9-thumb.jpg",
      "title": "IL take care app - flutter SDK",
      "tags": [],
      "suggestedTags": [
        "analytics_tracking",
        "app_development",
        "auto_play",
        "category",
        "content_management",
        "content_sequencing",
        "customer_support",
        "cut_off",
        "deep_linking",
        "fill_in",
        "home_page",
        "integration",
        "interactive_videos",
        "knowledge_base",
        "listing",
        "make_up_words",
        "multilingual_support",
        "playlist",
        "playlist_functionality",
        "real-time_updates",
        "SDK",
        "SDK_implementation",
        "sentence",
        "thumbnail",
        "thumbnail_mapping",
        "user_experience",
        "video",
        "video_categorization",
        "video_integration",
        "video_playback"
      ],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "VISMARK",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20251110T17:41:36",
      "timeLastUpdated": "20251111T18:50:04",
      "timeLastGenerate": "20251110T18:17:07",
      "duration": 4098,
      "show_transcript_flag": true,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-aa272069-f59c-42c6-8842-2a86a3551d1d?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "MEMBERS",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up944309/a466fdba-4558-4eda-97e7-3fb877a9f9f3/screen/data-",
        "high_precision": "0",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1762778849387",
        "scene.artifact.count": "2",
        "auto_highlight_job_status": "success"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": true,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1",
      "id": "gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1",
      "story": null,
      "displayname": "Academy_redirection",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 0,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1/v4/i/16x9-thumb.jpg",
      "title": "Academy_redirection",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20251105T15:31:48",
      "timeLastUpdated": "20251107T18:26:48",
      "timeLastGenerate": "20251105T15:48:23",
      "duration": 1359,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-3d9747e9-d7d0-40be-b295-25f43e6841c1?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "stt.confidence": "1.0",
        "smart.scene.artifact.count": "3",
        "hlsonly": "true",
        "stt.language": "en-IN",
        "video.res.720": "done",
        "quickshoot.video": "true",
        "video.res.240": "done",
        "video.res.360": "done",
        "upload_chunk_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/record/up4153/42617a64-2873-4df2-b12a-1d39e9071e9f/screen/data-",
        "high_precision": "0",
        "stt.state": "done",
        "comment_type": "ALL",
        "video.res.480": "done",
        "stt.start_time": "1762344059653",
        "scene.artifact.count": "66"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    },
    {
      "kapsule_id": "gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a",
      "id": "gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a",
      "story": null,
      "displayname": "chapter1_paper1",
      "likeCount": 0,
      "isLiked": 0,
      "playCount": 3,
      "description": "",
      "images": {
        "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/v4/i/16x9-thumb.jpg",
        "fallback": {
          "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/v4/i/16x9-thumb.jpg",
          "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/v4/i/16x9-full.jpg"
        },
        "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/v4/i/16x9-full.jpg"
      },
      "embedUrl": null,
      "embedMarkup": {
        "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
        "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a' data-samesite=true style='width:100%' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
      },
      "appUrl": "https://ktpl.kpoint.com/web/videos/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a",
      "v3EmbedUrl": null,
      "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/nv4/embedded",
      "ownerDisplayname": "shekhar.bhabad",
      "ownerName": "shekharb11534180",
      "author": "",
      "thumbnailUrl": null,
      "img": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a/v4/i/16x9-thumb.jpg",
      "title": "chapter1_paper1",
      "tags": [],
      "suggestedTags": [],
      "categories": {

      },
      "artifacts": [
        "TRANSCRIPT",
        "VISMARK",
        "TAG_INDEXER",
        "SCENE"
      ],
      "timeCreated": "20251101T23:40:04",
      "timeLastUpdated": "20251104T15:07:12",
      "timeLastGenerate": "20251101T23:49:19",
      "duration": 6989,
      "show_transcript_flag": false,
      "live_event": {

      },
      "src": "VIDEO",
      "shareUrl": "https://ktpl.kpoint.com/web/videos/gcc-484a6bab-018f-46f2-b0de-2f8d4f8f644a?vsrc=shm",
      "contentOwners": [],
      "thumbnailProcessing": false,
      "visibility": "PRIVATE",
      "isPodcast": "false",
      "isParticipantLinkEnabled": "false",
      "type": "VIDEO",
      "canManage": false,
      "content_owners": {

      },
      "commentEnabledFlag": true,
      "status": "ready",
      "liveEventFlag": false,
      "properties": {
        "video.res.240": "done",
        "upload_video_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up1871976/o_1j909jsfpe7d1uv21458102q41hd/o_1j909jsfpe7d1uv21458102q41hd.mp4",
        "video.res.360": "done",
        "stt.confidence": "1.0",
        "stt.state": "processing",
        "comment_type": "ALL",
        "video.res.480": "done",
        "smart.scene.artifact.count": "3",
        "stt.start_time": "1762021581533",
        "hlsonly": "true",
        "scene.artifact.count": "60",
        "auto_highlight_job_status": "success"
      },
      "deletedFlag": false,
      "canUserAccessKapsule": false,
      "canReview": false,
      "publishedFlag": true,
      "reviewRequestState": "NA",
      "reviewerUsername": "",
      "reviewerDisplayname": "",
      "reviewComments": "",
      "reviewUpdateDate": "",
      "expiryDate": "",
      "scormCreatedFlag": false,
      "scormEnabledFlag": false,
      "notifyFlag": true,
      "nonInteractiveFlag": false,
      "showTranscriptFlag": false,
      "serialNumber": "",
      "isQnAEnabled": false,
      "publishedOn": null,
      "transcriptUrl": "",
      "hasTranscript": true,
      "featuredFlag": false,
      "aspectRatio": "16:9",
      "isShortVideo": "false",
      "strictAccess": "false"
    }
];

// Helper function to get mock videos
export function getMockVideos(): any[] {
  return mockVideos;
}

// Helper function to get a single mock video by ID
export function getMockVideoById(id: string): MockVideo | undefined {
  return mockVideos.find((video) => video.id === id);
}

// Helper function to simulate API delay
export function simulateDelay(ms: number = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Mock Partner Template Data
 */
export interface MockPartnerTemplate {
  id: string;
  package_id: string;
  package_name: string;
  video_id: string;
  video_title?: string;
  thumbnail_url?: string;
  fields?: {
    key: string;
    label: string;
    type: string;
    required?: boolean;
    default_value?: string;
  }[];
  [key: string]: unknown;
}

export const mockPartnerTemplates: MockPartnerTemplate[] = [
  {
    id: "tmpl-001",
    package_id: "52eutbewxdcu",
    package_name: "IL Hindi Template",
    video_id: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    video_title: "IL Hindi",
    thumbnail_url:
      "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
    fields: [
      {
        key: "customer_name",
        label: "Customer Name",
        type: "text",
        required: true,
      },
      {
        key: "policy_number",
        label: "Policy Number",
        type: "text",
        required: true,
      },
      {
        key: "support_language",
        label: "Support Language",
        type: "select",
        required: false,
        default_value: "English",
      },
    ],
    description: "Personalized insurance support video template",
    status: "active",
    created_at: "2026-01-12T12:00:00+05:30",
  },
  {
    id: "tmpl-002",
    package_id: "quiz123abc",
    package_name: "Product Dashboard Quiz Template",
    video_id: "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8",
    video_title: "Product Dashboard Tutorial",
    thumbnail_url:
      "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8/v3/i/16x9-thumb.jpg",
    fields: [
      {
        key: "employee_name",
        label: "Employee Name",
        type: "text",
        required: true,
      },
      {
        key: "department",
        label: "Department",
        type: "text",
        required: false,
      },
      {
        key: "training_date",
        label: "Training Date",
        type: "date",
        required: false,
      },
    ],
    description: "Interactive product training with quiz",
    status: "active",
    created_at: "2026-01-15T09:00:00+05:30",
  },
  {
    id: "tmpl-003",
    package_id: "poll456def",
    package_name: "Sales Strategy Poll Template",
    video_id: "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9",
    video_title: "Q1 Sales Strategy 2026",
    thumbnail_url:
      "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9/v2/i/16x9-thumb.jpg",
    fields: [
      {
        key: "team_member",
        label: "Team Member Name",
        type: "text",
        required: true,
      },
      {
        key: "region",
        label: "Sales Region",
        type: "select",
        required: true,
        default_value: "North",
      },
      {
        key: "target_quarter",
        label: "Target Quarter",
        type: "text",
        required: false,
        default_value: "Q1 2026",
      },
    ],
    description: "Quarterly sales strategy presentation with polling",
    status: "active",
    created_at: "2026-02-01T14:00:00+05:30",
  },
];

// Helper function to get mock partner templates
export function getMockPartnerTemplates(): MockPartnerTemplate[] {
  return mockPartnerTemplates;
}

// Helper function to get a single mock partner template by ID
export function getMockPartnerTemplateById(
  id: string
): MockPartnerTemplate | undefined {
  return mockPartnerTemplates.find((template) => template.id === id);
}

/**
 * Mock Package Data
 */
export interface MockPackage {
  id: string;
  name: string;
  description?: string;
  video_id?: string;
  fields?: {
    key: string;
    label: string;
    type: string;
    required?: boolean;
    default_value?: string;
    [key: string]: unknown;
  }[];
  configuration?: Record<string, unknown>;
  [key: string]: unknown;
}

export const mockPackages: MockPackage[] = [
  {
    id: "52eutbewxdcu",
    name: "personalized package for Icicic users",
    description: "Interactive package for IL Hindi video",
    video_id: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    time_last_published: "2026-02-22 15:53:34",
    time_last_update: "2026-02-22 15:53:34",
    time_created: "2026-02-22 13:57:59",
    state: "PUBLISHED",
    fields: [],
    configuration: {
      interactivity_enabled: true,
      auto_play: false,
    },
    widgetsConfig: {
      kpw_text: {
        list: [
          {
            text: "{first_name}",
            track: { name: "{first_name}" },
          },
        ],
      },
    },
  },
   {
    id: "52eutbewxdcu",
    name: "personalized package for Icicic users - 2",
    description: "Interactive package for IL Hindi video",
    video_id: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    time_last_published: "2026-02-22 15:53:34",
    time_last_update: "2026-02-22 15:53:34",
    time_created: "2026-02-22 13:57:59",
    state: "PUBLISHED",
    fields: [],
    configuration: {
      interactivity_enabled: true,
      auto_play: false,
    },
    widgetsConfig: {
      kpw_text: {
        list: [
          {
            text: "{first_name}",
            track: { name: "{first_name}" },
          },
        ],
      },
    },
  },
   {
    id: "52eutbewxdcu",
    name: "personalized package for Icicic users - 3",
    description: "Interactive package for IL Hindi video",
    video_id: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    time_last_published: "2026-02-22 15:53:34",
    time_last_update: "2026-02-22 15:53:34",
    time_created: "2026-02-22 13:57:59",
    state: "PUBLISHED",
    fields: [],
    configuration: {
      interactivity_enabled: true,
      auto_play: false,
    },
    widgetsConfig: {
      kpw_text: {
        list: [
          {
            text: "{first_name}",
            track: { name: "{first_name}" },
          },
        ],
      },
    },
  },
  {
    id: "quiz123abc",
    name: "Quiz Package",
    description: "Product dashboard tutorial quiz",
    video_id: "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8",
    time_last_published: "2026-02-20 10:30:15",
    time_last_update: "2026-02-20 10:30:15",
    time_created: "2026-01-15 10:00:00",
    state: "PUBLISHED",
    fields: [
      {
        key: "user_name",
        label: "User Name",
        type: "text",
        required: true,
      },
      {
        key: "quiz_mode",
        label: "Quiz Mode",
        type: "select",
        required: false,
        default_value: "practice",
      },
    ],
    configuration: {
      quiz_enabled: true,
      passing_score: 80,
      show_correct_answers: true,
    },
  },
  {
    id: "poll456def",
    name: "Sales Poll",
    description: "Q1 Sales strategy polling package",
    video_id: "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9",
    time_last_published: "2026-02-18 16:45:20",
    time_last_update: "2026-02-18 16:45:20",
    time_created: "2026-02-05 11:30:00",
    state: "PUBLISHED",
    fields: [
      {
        key: "participant_name",
        label: "Participant Name",
        type: "text",
        required: true,
      },
      {
        key: "team",
        label: "Team",
        type: "text",
        required: false,
      },
    ],
    configuration: {
      poll_enabled: true,
      anonymous_voting: false,
      show_results_after: "vote",
    },
  },
];

// Helper function to get mock packages
export function getMockPackages(): MockPackage[] {
  return mockPackages;
}

// Helper function to get a single mock package by ID
export function getMockPackageById(id: string): MockPackage | undefined {
  return mockPackages.find((pkg) => pkg.id === id);
}

// Helper function to get packages for a specific video
export function getMockPackagesByVideoId(videoId: string): MockPackage[] {
  return mockPackages.filter((pkg) => pkg.video_id === videoId);
}

/**
 * Extract templates from videos' interactivity_packages property
 * This dynamically creates templates based on actual video data
 */
export function extractTemplatesFromVideos(): MockPartnerTemplate[] {
  const templates: MockPartnerTemplate[] = [];

  for (const video of mockVideos) {
    // Check if video has interactivity_packages property
    const packagesJson = video.properties.interactivity_packages;
    if (!packagesJson) continue;

    try {
      // Parse the JSON array of packages
      const packages = JSON.parse(packagesJson);
      if (!Array.isArray(packages)) continue;

      // Create a template for each package
      for (const pkg of packages) {
        // Only include PUBLISHED packages
        if (pkg.state !== "PUBLISHED") continue;

        templates.push({
          id: `tmpl-${pkg.id}`, // Prefix with tmpl- to distinguish
          package_id: pkg.id,
          package_name: pkg.displayname || "Untitled",
          video_id: video.id,
          video_title: video.displayname,
          thumbnail_url: video.images.thumb,
          fields: [], // Will be populated from dynamic fields API
          description: video.description || `Interactive template for ${video.displayname}`,
          status: "active",
          created_at: pkg.time_created,
          time_last_published: pkg.time_last_published,
          time_last_update: pkg.time_last_update,
        });
      }
    } catch (err) {
      console.error(`Failed to parse interactivity_packages for video ${video.id}:`, err);
    }
  }

  // Also include manually created templates that don't come from videos
  // (Only add templates whose package_id is NOT already in our extracted templates)
  const extractedPackageIds = new Set(templates.map((t) => t.package_id));
  const additionalTemplates = mockPartnerTemplates.filter(
    (t) => !extractedPackageIds.has(t.package_id)
  );
  templates.push(...additionalTemplates);

  return templates;
}

/**
 * Mock storage for shoppable templates applied to videos
 * In-memory storage that persists during development session
 */
export interface MockShoppableTemplate {
  videoId: string;
  packageId: string;
  embedCode: string;
  appliedAt: string;
  state: string;
}

// In-memory storage for mock shoppable templates
const mockShoppableTemplates = new Map<string, MockShoppableTemplate>();

/**
 * Add a shoppable template to a video (mock mode)
 */
export function addMockShoppableTemplate(
  videoId: string,
  packageId: string,
  embedCode: string
): void {
  const key = `${videoId}-${packageId}`;
  const timestamp = new Date().toISOString();

  mockShoppableTemplates.set(key, {
    videoId,
    packageId,
    embedCode,
    appliedAt: timestamp,
    state: "PUBLISHED",
  });

  // Also update the video's interactivity_packages array
  const video = mockVideos.find((v) => v.id === videoId);
  if (video) {
    // Initialize interactivity_packages as an array if it doesn't exist
    if (!(video as any).interactivity_packages) {
      (video as any).interactivity_packages = [];
    }

    // Check if package already exists
    const existingPackageIndex = (video as any).interactivity_packages.findIndex(
      (pkg: any) => pkg.id === packageId
    );

    const packageData = {
      id: packageId,
      name: getTemplateName(packageId),
      state: "PUBLISHED",
      time_created: timestamp,
      time_last_published: timestamp,
    };

    if (existingPackageIndex >= 0) {
      // Update existing package
      (video as any).interactivity_packages[existingPackageIndex] = packageData;
    } else {
      // Add new package
      (video as any).interactivity_packages.push(packageData);
    }

    console.log(`✅ Updated mock video ${videoId} with template ${packageId}`);
  }
}

function getTemplateName(templateId: string): string {
  const nameMap: Record<string, string> = {
    "shoppable-v1": "Shoppable Template",
  };
  return nameMap[templateId] || templateId;
}

/**
 * Get all shoppable templates (mock mode)
 * Optionally filter by package ID
 */
export function getMockShoppableTemplates(
  packageId?: string
): MockShoppableTemplate[] {
  const templates = Array.from(mockShoppableTemplates.values());

  if (packageId) {
    return templates.filter((t) => t.packageId === packageId);
  }

  return templates;
}

/**
 * Remove a shoppable template from a video (mock mode)
 */
export function removeMockShoppableTemplate(
  videoId: string,
  packageId: string
): boolean {
  const key = `${videoId}-${packageId}`;
  return mockShoppableTemplates.delete(key);
}

/**
 * Get shoppable template for a specific video and package (mock mode)
 */
export function getMockShoppableTemplate(
  videoId: string,
  packageId: string
): MockShoppableTemplate | undefined {
  const key = `${videoId}-${packageId}`;
  return mockShoppableTemplates.get(key);
}
