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
}

export const mockVideos: MockVideo[] = [
  {
    comment_count: 0,
    non_interactive_flag: false,
    _score: 1,
    live_event: null,
    time_created: "2026-01-12T12:23:33+05:30",
    review_request_state: "NA",
    teleport_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/teleport",
    id: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    suggested_tags: [
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
      "support",
    ],
    images: {
      thumb:
        "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
      fallback: {
        thumb:
          "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-thumb.jpg",
        full: "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-full.jpg",
        vthumb:
          "https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/vthumb.jpg",
      },
      full: "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/16x9-full.jpg",
      vthumb:
        "https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/i/vthumb.jpg",
    },
    bookmarks_suffix:
      "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/bookmarks",
    v4_embed_url:
      "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/nv4/embedded",
    offline_hls_url: "",
    has_transcript: true,
    tags: [],
    status: "ready",
    aspect_ratio: "9:16",
    gif_path: null,
    transcript_name: "auto",
    quiz_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/quiz",
    comments_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/comments",
    deleted_flag: false,
    can_access_kapsule: true,
    categories: {},
    time_metadata_update: "20260222T15:53:34",
    expiry_date: null,
    standard_embed_code:
      "<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>",
    polls_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/polls",
    show_transcript_flag: false,
    scorm_created_flag: false,
    api_prefix: "https://ktpl.kpoint.com/api/v3",
    featured_flag: false,
    displayname: "IL Hindi",
    api_suffix: "/video/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    owner_displayname: "shekhar.bhabad",
    view_count: 129,
    time_publish: "2026-01-12T12:23:33+05:30",
    delete_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/delete",
    time_last_update: "2026-02-22T15:53:34+05:30",
    questions_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/questions",
    comment_enabled_flag: true,
    artifacts: ["TRANSCRIPT", "SCENE"],
    like_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/like",
    owner_name: "shekharb11534180",
    like_count: 0,
    live_event_flag: false,
    visibility: "PUBLIC",
    can_manage: true,
    author: null,
    review_update_date: null,
    time_last_featured: null,
    review_comments: null,
    time_last_generate: "2026-01-12T12:25:26+05:30",
    reviewer_displayname: null,
    scorm_enabled_flag: false,
    revision: 5,
    rating_count: 0,
    published_duration: 13,
    cdn_url:
      "ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/v5/view/html5",
    share_url:
      "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7?vsrc=shm",
    name: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    notify_flag: true,
    published_flag: true,
    description: "",
    embed_markup: {
      standard:
        "<iframe src='https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>",
      advanced:
        "<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>",
    },
    transcript_suffix:
      "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/transcripts/default",
    thumbnail_path: "thumb.jpg",
    reviewer_username: null,
    owner_email: "shekhar.bhabad@kpoint.com",
    app_url:
      "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
    play_url:
      "https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/play",
    src: "VIDEO",
    scenes_suffix: "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/scenes",
    annotations_suffix:
      "/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/annotations",
    properties: {
      interactivity_packages:
        '[{"time_last_published":"2026-02-22 15:53:34","displayname":"Untitled","time_last_update":"2026-02-22 15:53:34","time_created":"2026-02-22 13:57:59","id":"52eutbewxdcu","state":"PUBLISHED"}]',
      upload_video_path:
        "upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up840253/o_1jeofm9o91mha1bbnmg31ftueied/o_1jeofm9o91mha1bbnmg31ftueied.mp4",
      "stt.confidence": "1.0",
      "smart.scene.artifact.count": "3",
      hlsonly: "true",
      "stt.language": "en-IN",
      "video.res.720": "done",
      video_download_flag: "false",
      "video.res.240": "done",
      "video.res.360": "done",
      "stt.state": "done",
      comment_type: "ALL",
      "video.res.480": "done",
      "stt.start_time": "1768200948403",
      "scene.artifact.count": "1",
    },
    time_sort: null,
  },
  {"comment_count":0,"non_interactive_flag":false,"_score":1,"live_event":null,"time_created":"2026-02-10T14:26:35+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/teleport","id":"gcc-d941d952-1097-4588-832d-c3585963d33e","suggested_tags":[],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/nv4/embedded","offline_hls_url":"","has_transcript":true,"tags":[],"status":"ready","aspect_ratio":"9:16","gif_path":null,"transcript_name":"auto","quiz_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/quiz","comments_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/comments","deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20260210T14:35:42","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-d941d952-1097-4588-832d-c3585963d33e' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"KLI Dinesh Pillai","api_suffix":"/video/gcc-d941d952-1097-4588-832d-c3585963d33e","owner_displayname":"Anisha Vijayan","view_count":73,"time_publish":"2026-02-10T14:26:35+05:30","delete_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/delete","time_last_update":"2026-02-22T12:15:07+05:30","questions_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/questions","comment_enabled_flag":true,"artifacts":["TRANSCRIPT","TAG_INDEXER"],"like_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/like","owner_name":"anis.vijxe29a56fb7863644","like_count":0,"live_event_flag":false,"visibility":"PUBLIC","can_manage":false,"author":"","review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2026-02-10T14:29:27+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"revision":6,"rating_count":0,"published_duration":49,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d941d952-1097-4588-832d-c3585963d33e/v6/view/html5","share_url":"https://ktpl.kpoint.com/web/videos/gcc-d941d952-1097-4588-832d-c3585963d33e?vsrc=shm","name":"gcc-d941d952-1097-4588-832d-c3585963d33e","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-d941d952-1097-4588-832d-c3585963d33e' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"anisha.vijayan@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-d941d952-1097-4588-832d-c3585963d33e","play_url":"https://ktpl.kpoint.com/web/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/play","src":"VIDEO","scenes_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/scenes","annotations_suffix":"/videos/gcc-d941d952-1097-4588-832d-c3585963d33e/annotations","properties":{"upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up280429/o_1jh3c8bnmc671vrh1d1askm1rm6d/o_1jh3c8bnmc671vrh1d1askm1rm6d.mp4","stt.confidence":"1.0","smart.scene.artifact.count":"3","hlsonly":"true","stt.language":"en-IN","video_download_flag":"false","video.res.720":"done","video.res.240":"done","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","stt.start_time":"1770713990027","short_video":"true","scene.artifact.count":"2","restricted_video":"false"},"time_sort":null},
  {"comment_count":0,"non_interactive_flag":false,"_score":1,"live_event":null,"time_created":"2025-09-30T09:27:53+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/teleport","id":"gcc-a0935947-c987-4ef4-b171-10392afef509","suggested_tags":["AB_Road","Bajaj_Finserv","Blockbuster_EMI_Days","EMI","festival_shopping","festive_discounts","finance_options","Indore","Indore_location","offers","Parima_Tyres","promotional_period","Rajendra_Nagar","tire_store","tyohar"],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/nv4/embedded","offline_hls_url":"","has_transcript":true,"tags":[],"status":"ready","aspect_ratio":"9:16","gif_path":null,"transcript_name":"auto","quiz_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/quiz","comments_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/comments","deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20250930T09:36:24","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-a0935947-c987-4ef4-b171-10392afef509' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"RR","api_suffix":"/video/gcc-a0935947-c987-4ef4-b171-10392afef509","owner_displayname":"Swanand Pawar","view_count":62,"time_publish":"2025-09-30T09:27:53+05:30","delete_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/delete","time_last_update":"2026-02-06T18:31:19+05:30","questions_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/questions","comment_enabled_flag":true,"artifacts":["TRANSCRIPT","TAG_INDEXER","SCENE"],"like_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/like","owner_name":"swan.pawxaf9552808657712","like_count":0,"live_event_flag":false,"visibility":"USERS","can_manage":false,"author":null,"review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2025-09-30T09:29:59+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"revision":4,"rating_count":0,"published_duration":43,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-a0935947-c987-4ef4-b171-10392afef509/v4/view/html5","share_url":"https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509?vsrc=shm","name":"gcc-a0935947-c987-4ef4-b171-10392afef509","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-a0935947-c987-4ef4-b171-10392afef509' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"swanand.pawar@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509","play_url":"https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/play","src":"VIDEO","scenes_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/scenes","annotations_suffix":"/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/annotations","properties":{"upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up3721610/o_1j6cc9lgf18hc1aojvj92krmi9d/o_1j6cc9lgf18hc1aojvj92krmi9d.mp4","stt.confidence":"1.0","smart.scene.artifact.count":"3","hlsonly":"true","stt.language":"en-IN","video.res.720":"done","video_download_flag":"false","video.res.240":"done","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","stt.start_time":"1759204823648","short_video":"true","scene.artifact.count":"3","restricted_video":"false"},"time_sort":null},
{"comment_count":0,"non_interactive_flag":false,"_score":1,"live_event":null,"time_created":"2025-08-07T18:38:13+05:30","review_request_state":"NA","teleport_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/teleport","id":"gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886","suggested_tags":["AI_Group","Asia","business_collaboration","Data_AIA_Life_Insurance","deep_roots","excellent_work","expertise","financial_services","India","insurance","insurance_industry","joint_venture","market_expansion","powerful_partnership","Tata_Sunns"],"images":{"thumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/16x9-thumb.jpg","fallback":{"thumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/16x9-thumb.jpg","full":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/media/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/vthumb.jpg"},"full":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/16x9-full.jpg","vthumb":"https://ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/i/vthumb.jpg"},"bookmarks_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/bookmarks","v4_embed_url":"https://ktpl.kpoint.com/web/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/nv4/embedded","offline_hls_url":"","has_transcript":true,"tags":[],"status":"ready","aspect_ratio":"9:16","gif_path":null,"transcript_name":"auto","quiz_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/quiz","comments_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/comments","deleted_flag":false,"can_access_kapsule":true,"categories":{},"time_metadata_update":"20250807T18:46:25","expiry_date":null,"standard_embed_code":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-cdn.js'></script>","polls_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/polls","show_transcript_flag":false,"scorm_created_flag":false,"api_prefix":"https://ktpl.kpoint.com/api/v3","featured_flag":false,"displayname":"Nikhil__Tata AIA_Enhanced Audio","api_suffix":"/video/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886","owner_displayname":"Anisha Vijayan","view_count":65,"time_publish":"2025-08-07T18:38:13+05:30","delete_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/delete","time_last_update":"2026-02-06T18:31:35+05:30","questions_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/questions","comment_enabled_flag":true,"artifacts":["TRANSCRIPT","SCENE"],"like_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/like","owner_name":"anis.vijxe29a56fb7863644","like_count":0,"live_event_flag":false,"visibility":"PUBLIC","can_manage":false,"author":null,"review_update_date":null,"time_last_featured":null,"review_comments":null,"time_last_generate":"2025-08-07T18:40:05+05:30","reviewer_displayname":null,"scorm_enabled_flag":false,"revision":5,"rating_count":0,"published_duration":22,"cdn_url":"ktpl.kpoint.com/media/data.ap-southeast-1.kpoint/ktpl.kpoint.in/ktpl.kpoint.com/kapsule/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/v5/view/html5","share_url":"https://ktpl.kpoint.com/web/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886?vsrc=shm","name":"gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886","notify_flag":true,"published_flag":true,"description":"","embed_markup":{"standard":"<iframe src='https://ktpl.kpoint.com/web/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/nv4/embedded' allowFullScreen webkitallowFullScreen mozallowFullScreen width='640' height='360' rel='nofollow' style='border: 0px;'></iframe>","advanced":"<div data-video-host='ktpl.kpoint.com' data-kvideo-id='gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886' data-samesite=true data-ar='9:16' class='kpoint-embedded-video' style='width:320px' ></div><script type='text/javascript' src='https://ktpl.kpoint.com/assets/orca/media/embed/player-silk.js'></script>"},"transcript_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/transcripts/default","thumbnail_path":"thumb.jpg","reviewer_username":null,"owner_email":"anisha.vijayan@kpoint.com","app_url":"https://ktpl.kpoint.com/web/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886","play_url":"https://ktpl.kpoint.com/web/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/play","src":"VIDEO","scenes_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/scenes","annotations_suffix":"/videos/gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886/annotations","properties":{"upload_video_path":"upload.ap-southeast-1.kpoint/ktpl.kpoint.in/video/up6342208/o_1j22aa65g1nil1pmq9op188v1i00f/o_1j22aa65g1nil1pmq9op188v1i00f.mp4","stt.confidence":"1.0","smart.scene.artifact.count":"3","hlsonly":"true","stt.language":"en-IN","video_download_flag":"false","video.res.720":"done","video.res.240":"done","video.res.360":"done","stt.state":"done","comment_type":"ALL","video.res.480":"done","stt.start_time":"1754572227689","short_video":"true","scene.artifact.count":"1","restricted_video":"false"},"time_sort":null},
];

// Helper function to get mock videos
export function getMockVideos(): MockVideo[] {
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
    name: "Untitled",
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
