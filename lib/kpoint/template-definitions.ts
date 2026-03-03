/**
 * Predefined template definitions for KPOINT interactivity
 */

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  category: "shoppable" | "quiz" | "poll" | "form" | "greetings" | "custom";
  htmlTemplate: string;
}

/**
 * Greetings template HTML
 * Placeholders to be replaced:
 * - {video_host} -> actual video domain
 * - {video_id} -> actual video ID
 * - {fullname} -> customer's full name (personalization)
 */
const GREETINGS_TEMPLATE_HTML = `<div class="kpoint-embedded-video"
  data-video-host="{video_host}"
  data-samesite="true"
  data-kvideo-id="{video_id}"
  style="height: 100%; width: 100%"
  data-ar="16:9"
  data-video-params='{
    "resume": false,
    "search": false,
    "like": false,
    "add-widgets": "utils,kpw_text,kpw_actionbutton,fontloader",
    "autoplay": true,
    "trk_package_id": "52yovfxjvcdm"
  }'
  data-personalization-info='{
    "fullname": "{fullname}"
  }'
  data-widgets-config='{
    "kpw_text": {
      "list": [{
        "text": "Hi {fullname}, Happy {occasion}",
        "style": {
          "color": "#ffffff",
          "background-color": "#FF6B00",
          "font-family": "Rubik",
          "font-size": "24px",
          "border-radius": "8px",
          "padding": "12px 24px"
        },
        "position": {
          "top": "10%",
          "left": "50%",
          "transform": "translateX(-50%)"
        }
      }]
    },
    "kpw_actionbutton": {
      "list": [{
        "text": "Apply Now",
        "link": "https://www.icicibank.com",
        "style": {
          "background-color": "#FF6B00",
          "color": "#ffffff",
          "font-family": "Rubik"
        },
        "position": {
          "bottom": "15%",
          "left": "50%",
          "transform": "translateX(-50%)"
        }
      }]
    },
    "fontloader": {
      "list": [{
        "name": "Rubik",
        "google": {
          "styles": ["400", "500", "700"]
        }
      }]
    }
  }'
></div>
<script
  type="text/javascript"
  src="https://assets.kpoint.com/orca/media/embed/videofront-vega.js"
></script>`;

/**
 * All available template definitions
 */
export const TEMPLATE_DEFINITIONS: TemplateDefinition[] = [
  {
    id: "52yovfxjvcdm",
    name: "Greetings",
    description: "Personalized greeting template with customer name and action button",
    category: "greetings",
    htmlTemplate: GREETINGS_TEMPLATE_HTML,
  },
  // More templates can be added here in the future
  // {
  //   id: "quiz-v1",
  //   name: "Quiz Template",
  //   description: "Add interactive quizzes to engage viewers",
  //   category: "quiz",
  //   htmlTemplate: "...",
  // },
];

/**
 * Get template definition by ID
 */
export function getTemplateDefinition(
  templateId: string
): TemplateDefinition | undefined {
  return TEMPLATE_DEFINITIONS.find((t) => t.id === templateId);
}

/**
 * Get all templates by category
 */
export function getTemplatesByCategory(
  category: string
): TemplateDefinition[] {
  return TEMPLATE_DEFINITIONS.filter((t) => t.category === category);
}
