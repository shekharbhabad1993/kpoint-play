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
  "comment_count": 0,
  "non_interactive_flag": false,
  "html5_flag": true,
  "live_event": null,
  "time_created": "2026-03-03T20:40:20+05:30",
  "review_request_state": "NA",
  "teleport_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/teleport",
  "id": "gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73",
  "suggested_tags": [],
  "images": {
    "thumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/16x9-thumb.jpg",
    "fallback": {
      "thumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/16x9-thumb.jpg",
      "full": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/16x9-full.jpg",
      "vthumb": "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/vthumb.jpg"
    },
    "full": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/16x9-full.jpg",
    "vthumb": "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/i/vthumb.jpg"
  },
  "bookmarks_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/bookmarks",
  "v4_embed_url": "https://ktpl.kpoint.com/web/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/nv4/embedded",
  "offline_hls_url": "",
  "has_transcript": false,
  "tags": [],
  "authors": [
    "shekhar.bhabad"
  ],
  "status": "ready",
  "aspect_ratio": "9:16",
  "gif_path": null,
  "quiz_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/quiz",
  "original_html5_kapsule_state": "KAP_SUCCESS",
  "comments_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/comments",
  "org_branch_revision": null,
  "deleted_flag": false,
  "can_access_kapsule": true,
  "categories": {
  },
  "time_metadata_update": "20260303T21:47:37",
  "expiry_date": null,
  "standard_embed_code": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'\u003E\u003C/script\u003E",
  "polls_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/polls",
  "show_transcript_flag": false,
  "scorm_created_flag": false,
  "api_prefix": "https://ktpl.kpoint.com/api/v3",
  "featured_flag": false,
  "displayname": "Happy New Year",
  "api_suffix": "/video/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73",
  "owner_displayname": "shekhar.bhabad",
  "view_count": 0,
  "time_publish": "2026-03-03T20:40:20+05:30",
  "delete_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/delete",
  "time_last_update": "2026-03-03T21:47:37+05:30",
  "questions_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/questions",
  "comment_enabled_flag": true,
  "auth_reviewer": null,
  "artifacts": [
    "SCENE"
  ],
  "like_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/like",
  "owner_name": "shekharb11534180",
  "like_count": 0,
  "live_event_flag": false,
  "visibility": "PRIVATE",
  "can_manage": true,
  "author": null,
  "review_update_date": null,
  "time_last_featured": null,
  "review_comments": null,
  "time_last_generate": "2026-03-03T21:00:51+05:30",
  "reviewer_displayname": null,
  "scorm_enabled_flag": false,
  "revision": 4,
  "rating_count": 0,
  "published_duration": 10,
  "cdn_url": "ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/v4/view/html5",
  "expiry_date_v2": null,
  "share_url": "https://ktpl.kpoint.com/web/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73?vsrc=shm",
  "name": "gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73",
  "notify_flag": true,
  "published_flag": true,
  "description": "",
  "embed_markup": {
    "standard": "\u003Ciframe src='https://ktpl.kpoint.com/web/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'\u003E\u003C/iframe\u003E",
    "advanced": "\u003Cdiv data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' \u003E\u003C/div\u003E\u003Cscript type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'\u003E\u003C/script\u003E"
  },
  "transcript_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/transcripts/default",
  "thumbnail_path": "thumb.jpg",
  "reviewer_username": null,
  "owner_email": "shekhar.bhabad@kpoint.com",
  "app_url": "https://ktpl.kpoint.com/web/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73",
  "play_url": "https://ktpl.kpoint.com/web/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/play",
  "src": "VIDEO",
  "scenes_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/scenes",
  "annotations_suffix": "/videos/gcc-f5d321b1-3f95-4136-b29b-fe51afa0cb73/annotations",
  "category_text": [],
  "properties": {
    "video.res.240": "done",
    "upload_video_path": "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up7901329/o_1jiq3vup5159r1smr194n8uboeqi/o_1jiq3vup5159r1smr194n8uboeqi.mp4",
    "video.res.360": "done",
    "stt.state": "done",
    "comment_type": "ALL",
    "video.res.480": "done",
    "stt.start_time": "1772551877838",
    "smart.scene.artifact.count": "3",
    "hlsonly": "true",
    "stt.language": "en-IN",
    "scene.artifact.count": "1"
  },
  "time_sort": "20260303T21:00:51"
},
{"comment_count":0,"non_interactive_flag":false,"html5_flag":true,"live_event":null,"time_created":"2026-03-03T20:40:25+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/teleport","id":"gcc-01859645-6400-4d2d-988f-a02e13ea2999","suggested_tags":[],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/nv4/embedded","offline_hls_url":"","has_transcript":false,"tags":[],"authors":["shekhar.bhabad"],"status":"ready","aspect_ratio":"9:16","gif_path":null,"quiz_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/quiz","original_html5_kapsule_state":"KAP_SUCCESS","comments_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/comments","org_branch_revision":null,"deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20260303T21:11:14","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-01859645-6400-4d2d-988f-a02e13ea2999' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"Happy Holi","api_suffix":"/video/gcc-01859645-6400-4d2d-988f-a02e13ea2999","owner_displayname":"shekhar.bhabad","view_count":0,"time_publish":"2026-03-03T20:40:25+05:30","delete_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/delete","time_last_update":"2026-03-03T21:11:14+05:30","questions_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/questions","comment_enabled_flag":true,"auth_reviewer":null,"artifacts":["SCENE"],"like_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/like","owner_name":"shekharb11534180","like_count":0,"live_event_flag":false,"visibility":"PRIVATE","can_manage":true,"author":null,"review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2026-03-03T21:01:06+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"revision":4,"rating_count":0,"published_duration":14,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-01859645-6400-4d2d-988f-a02e13ea2999/v4/view/html5","expiry_date_v2":null,"share_url":"https://ktpl.kpoint.com/web/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999?vsrc=shm","name":"gcc-01859645-6400-4d2d-988f-a02e13ea2999","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-01859645-6400-4d2d-988f-a02e13ea2999' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"shekhar.bhabad@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999","play_url":"https://ktpl.kpoint.com/web/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/play","src":"VIDEO","scenes_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/scenes","annotations_suffix":"/videos/gcc-01859645-6400-4d2d-988f-a02e13ea2999/annotations","category_text":[],"properties":{"video.res.240":"done","upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up7901329/o_1jiq403u6kis32t1h1jaa716d2n/o_1jiq403u6kis32t1h1jaa716d2n.mp4","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","stt.start_time":"1772551901077","smart.scene.artifact.count":"3","hlsonly":"true","stt.language":"en-IN","scene.artifact.count":"1"},"time_sort":"20260303T21:01:06"},
{"comment_count":0,"non_interactive_flag":false,"html5_flag":true,"live_event":null,"time_created":"2026-03-03T20:40:31+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/teleport","id":"gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3","suggested_tags":[],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/nv4/embedded","offline_hls_url":"","has_transcript":false,"tags":["hdfc", "diwali", "greetings"],"authors":["shekhar.bhabad"],"status":"ready","aspect_ratio":"9:16","gif_path":null,"quiz_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/quiz","original_html5_kapsule_state":"KAP_SUCCESS","comments_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/comments","org_branch_revision":null,"deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20260303T22:39:45","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"Happy Diwali","api_suffix":"/video/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3","owner_displayname":"shekhar.bhabad","view_count":0,"time_publish":"2026-03-03T20:40:31+05:30","delete_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/delete","time_last_update":"2026-03-03T22:39:45+05:30","questions_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/questions","comment_enabled_flag":true,"auth_reviewer":null,"artifacts":["SCENE"],"like_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/like","owner_name":"shekharb11534180","like_count":0,"live_event_flag":false,"visibility":"PRIVATE","can_manage":true,"author":null,"review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2026-03-03T21:01:11+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"revision":4,"rating_count":0,"published_duration":11,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/v4/view/html5","expiry_date_v2":null,"share_url":"https://ktpl.kpoint.com/web/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3?vsrc=shm","name":"gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"shekhar.bhabad@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3","play_url":"https://ktpl.kpoint.com/web/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/play","src":"VIDEO","scenes_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/scenes","annotations_suffix":"/videos/gcc-fa070cd3-63b0-43f8-96d7-f6c8e2bf09e3/annotations","category_text":[],"properties":{"video.res.240":"done","interactivity_packages":"[{\"time_last_published\":\"2026-03-03 22:39:45\",\"displayname\":\"greetings\",\"time_last_update\":\"2026-03-03 22:39:45\",\"time_created\":\"2026-03-03 22:38:23\",\"id\":\"52yovfxjvcdm\",\"state\":\"PUBLISHED\"}]","upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up7901329/o_1jiq408mao4rt2fam714jt12eus/o_1jiq408mao4rt2fam714jt12eus.mp4","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","stt.start_time":"1772551922334","smart.scene.artifact.count":"3","hlsonly":"true","stt.language":"en-IN","scene.artifact.count":"43"},"time_sort":"20260303T21:01:11"},
{"comment_count":0,"non_interactive_flag":false,"html5_flag":true,"live_event":null,"time_created":"2026-03-03T20:40:14+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/teleport","id":"gcc-29f58b66-5a61-46a2-b124-a192ecf1750c","suggested_tags":[],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/nv4/embedded","offline_hls_url":"","has_transcript":false,"tags":[],"authors":["shekhar.bhabad"],"status":"ready","aspect_ratio":"9:16","gif_path":null,"quiz_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/quiz","original_html5_kapsule_state":"KAP_SUCCESS","comments_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/comments","org_branch_revision":null,"deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20260303T21:23:46","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-29f58b66-5a61-46a2-b124-a192ecf1750c' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"Happy Birthday","api_suffix":"/video/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c","owner_displayname":"shekhar.bhabad","view_count":0,"time_publish":"2026-03-03T20:40:14+05:30","delete_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/delete","time_last_update":"2026-03-03T21:23:46+05:30","questions_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/questions","comment_enabled_flag":true,"auth_reviewer":null,"artifacts":["SCENE"],"like_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/like","owner_name":"shekharb11534180","like_count":0,"live_event_flag":false,"visibility":"USERS","can_manage":true,"author":null,"review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2026-03-03T21:00:46+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"auth_flag":true,"revision":4,"rating_count":0,"published_duration":15,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/v4/view/html5","expiry_date_v2":null,"share_url":"https://ktpl.kpoint.com/web/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c?vsrc=shm","name":"gcc-29f58b66-5a61-46a2-b124-a192ecf1750c","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-29f58b66-5a61-46a2-b124-a192ecf1750c' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"shekhar.bhabad@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c","play_url":"https://ktpl.kpoint.com/web/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/play","src":"VIDEO","scenes_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/scenes","annotations_suffix":"/videos/gcc-29f58b66-5a61-46a2-b124-a192ecf1750c/annotations","category_text":[],"properties":{"video.res.240":"done","upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up7901329/o_1jiq3vos2djd4hp10qa1evf1i4td/o_1jiq3vos2djd4hp10qa1evf1i4td.mp4","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","smart.scene.artifact.count":"3","stt.start_time":"1772551880109","hlsonly":"true","stt.language":"en-IN","short_video":"true","scene.artifact.count":"2"},"time_sort":"20260303T21:00:46"},
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

        // Get actual template name from template definitions
        const templateName = getTemplateName(pkg.id);

        templates.push({
          id: `tmpl-${pkg.id}`, // Prefix with tmpl- to distinguish
          package_id: pkg.id,
          package_name: templateName,
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

  // Also update the video's interactivity_packages in properties
  const video = mockVideos.find((v) => v.id === videoId);
  if (video) {
    // Parse existing packages from properties
    let packages: any[] = [];
    try {
      const packagesJson = video.properties?.interactivity_packages;
      if (packagesJson) {
        packages = JSON.parse(packagesJson);
      }
    } catch (err) {
      console.error(`Failed to parse interactivity_packages for video ${videoId}:`, err);
    }

    // Check if package already exists
    const existingPackageIndex = packages.findIndex(
      (pkg: any) => pkg.id === packageId
    );

    const packageData = {
      id: packageId,
      displayname: getTemplateName(packageId),
      state: "PUBLISHED",
      time_created: timestamp,
      time_last_published: timestamp,
      time_last_update: timestamp,
    };

    if (existingPackageIndex >= 0) {
      // Update existing package
      packages[existingPackageIndex] = packageData;
    } else {
      // Add new package
      packages.push(packageData);
    }

    // Update the properties.interactivity_packages JSON string
    video.properties.interactivity_packages = JSON.stringify(packages);

    console.log(`✅ Updated mock video ${videoId} with template ${packageId}`);
  }
}

function getTemplateName(templateId: string): string {
  const nameMap: Record<string, string> = {
    "52yovfxjvcdm": "Greetings",
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
