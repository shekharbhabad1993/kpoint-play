/**
 * Predefined template definitions for KPOINT interactivity
 */

export interface TemplateDefinition {
  id: string;
  name: string;
  description: string;
  category: "shoppable" | "quiz" | "poll" | "form" | "custom";
  htmlTemplate: string;
}

/**
 * Shoppable template HTML
 * Placeholders to be replaced:
 * - {video_host} -> actual video domain
 * - {video_id} -> actual video ID
 */
const SHOPPABLE_TEMPLATE_HTML = `<div  class="kpoint-embedded-video"

  data-video-host="{video_host}"
  data-samesite="true"
  data-kvideo-id="{video_id}"
  style="height: 100%; width: 100%"
  data-ar="16:9"
  data-video-params= '{
    "resume": false,
    "search": false,
    "like": false,
    "add-widgets": "utils,kpw_shoppable,fontloader",
    "autoplay": true
  }'
  data-personalization-info='{
    "product_link": "https://cms-assets.bajajfinserv.in/is/image/bajajfinancestage/gcc-fd03f6e3-6639-4b74-aaa9-c61bd316efcd-1",
    "product_image": "https://cms-assets.bajajfinserv.in/is/image/bajajfinance/bajaj-logo-sep-15?scl=1&fmt=png-alpha",
    "product_title": "sdv",
    "product_price": "sdv",
    "product_strike_price": "sdfvfsg"
  }'
  data-widgets-config='{
    "kpw_shoppable": {
        "list": [
            {
                "style": {
                    "color": "",
                    "background-color": "",
                    "know-more-color": "",
                    "font-family": "Rubik"
                },
                "button": {
                    "text": "sf",
                    "type": "link",
                    "sec-text": "",
                    "sec-color": "",
                    "background-color": "",
                    "color": ""
                },
                "product": {
                    "link": "{product_link}",
                    "image": "{product_image}",
                    "title": "{product_title}",
                    "price": "{product_price}",
                    "strike_price": "{product_strike_price}",
                    "description": "sdv",
                    "discount": "sfd",
                    "features": [
"f"
 ]
                },
                "track": {
                    "name": " sdv"
                },
                "id": " sdv"
            }
        ]
    },
    "fontloader": {
        "list": [
            {
                "name": "Rubik",
                "google": {
                    "styles": [
                        "500"
                    ]
                }
            }
        ]
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
    id: "shoppable-v1",
    name: "Shoppable Template",
    description: "Add interactive product showcases to your videos",
    category: "shoppable",
    htmlTemplate: SHOPPABLE_TEMPLATE_HTML,
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
