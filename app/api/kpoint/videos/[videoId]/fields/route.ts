import { NextRequest, NextResponse } from "next/server";
import { config } from "@/lib/config";
import { getMockPackageById } from "@/lib/kpoint/mock-data";

/**
 * Extract personalization fields from text with curly brackets
 * Example: "Hello {first_name}, your {product} is ready" -> ["first_name", "product"]
 */
function extractFieldsFromText(text: string): string[] {
  const regex = /\{([^}]+)\}/g;
  const fields: string[] = [];
  let match;

  while ((match = regex.exec(text)) !== null) {
    const fieldName = match[1].trim();
    if (fieldName && !fields.includes(fieldName)) {
      fields.push(fieldName);
    }
  }

  return fields;
}

/**
 * Extract fields from widgetsConfig generically
 * Searches through all text widgets to find {field} patterns
 */
function extractFieldsFromWidgetsConfig(widgetsConfig: any): string[] {
  const allFields = new Set<string>();

  // Helper to recursively search for text fields
  function searchForTextFields(obj: any) {
    if (!obj || typeof obj !== "object") return;

    // Check if this is a text widget with a "text" property
    if (typeof obj.text === "string") {
      const fields = extractFieldsFromText(obj.text);
      fields.forEach((f) => allFields.add(f));
    }

    // Check track.name for text patterns
    if (obj.track && typeof obj.track.name === "string") {
      const fields = extractFieldsFromText(obj.track.name);
      fields.forEach((f) => allFields.add(f));
    }

    // Recursively search nested objects and arrays
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach((item: any) => searchForTextFields(item));
      } else if (typeof obj[key] === "object") {
        searchForTextFields(obj[key]);
      }
    }
  }

  searchForTextFields(widgetsConfig);
  return Array.from(allFields);
}

/**
 * Convert field names to user-friendly labels
 * Example: "first_name" -> "First Name"
 */
function fieldNameToLabel(fieldName: string): string {
  return fieldName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

export async function GET(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const { searchParams } = new URL(request.url);
    const packageId = searchParams.get("packageId");
    const videoId = params.videoId;

    if (!packageId) {
      return NextResponse.json(
        { error: "packageId query parameter is required" },
        { status: 400 }
      );
    }

    // In mock mode, extract fields from package widgetsConfig
    if (config.kpoint.mockMode) {
      console.log(
        `🎭 Mock mode: Fetching fields for video ${videoId}, package ${packageId}`
      );

      const mockPackage = getMockPackageById(packageId);

      if (!mockPackage) {
        return NextResponse.json(
          { error: "Package not found" },
          { status: 404 }
        );
      }

      let fields: any[] = [];

      // Extract fields from widgetsConfig if present
      if (mockPackage.widgetsConfig) {
        const fieldNames = extractFieldsFromWidgetsConfig(
          mockPackage.widgetsConfig
        );

        console.log(`📋 Extracted field names from widgetsConfig:`, fieldNames);

        fields = fieldNames.map((fieldName) => ({
          key: fieldName,
          label: fieldNameToLabel(fieldName),
          type: "text",
          required: true,
        }));
      } else if (mockPackage.fields && mockPackage.fields.length > 0) {
        // Fallback to package.fields if no widgetsConfig
        fields = mockPackage.fields;
      }

      console.log(`✅ Returning ${fields.length} fields:`, fields);

      return NextResponse.json({
        success: true,
        fields,
        videoId,
        packageId,
      });
    }

    // Real API call to KPOINT
    const kpointUrl = `${config.kpoint.baseUrl}/api/${config.kpoint.apiVersion}/videos/${videoId}/dyn/embed?id=${packageId}&extract=true`;

    console.log(`🔗 Fetching dynamic fields from: ${kpointUrl}`);

    const response = await fetch(kpointUrl, {
      headers: {
        "Content-Type": "application/json",
        // Add auth headers if needed
      },
    });

    if (!response.ok) {
      throw new Error(`KPOINT API error: ${response.status}`);
    }

    const data = await response.json();

    // Extract fields from widgetsConfig using generic extraction
    let fields: any[] = [];

    if (data.widgetsConfig) {
      const fieldNames = extractFieldsFromWidgetsConfig(data.widgetsConfig);

      console.log(`📋 Extracted field names from widgetsConfig:`, fieldNames);

      // Convert to field objects
      fields = fieldNames.map((fieldName) => ({
        key: fieldName,
        label: fieldNameToLabel(fieldName),
        type: "text",
        required: true,
      }));
    }

    console.log(`✅ Extracted ${fields.length} fields:`, fields);

    return NextResponse.json({
      success: true,
      fields,
      videoId,
      packageId,
      raw: data, // Include raw response for debugging
    });
  } catch (error) {
    console.error("❌ Failed to fetch personalization fields:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Failed to fetch personalization fields";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
