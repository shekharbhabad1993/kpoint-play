import { NextRequest, NextResponse } from "next/server";
import { kpointClient } from "@/lib/kpoint/client";
import { config } from "@/lib/config";
import { simulateDelay } from "@/lib/kpoint/mock-data";

interface UserGroupSearchResult {
  id: string;
  name: string;
  displayname?: string;
  type: "user" | "group";
  email?: string;
}

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const qtext = searchParams.get("qtext");

    if (!qtext) {
      return NextResponse.json(
        { error: "qtext parameter is required" },
        { status: 400 }
      );
    }

    if (config.kpoint.mockMode) {
      console.log(`🎭 Mock mode: Searching users/groups for "${qtext}"`);
      await simulateDelay(300);

      // Mock search results
      const mockResults: UserGroupSearchResult[] = [
        {
          id: "user123",
          name: "john.doe",
          displayname: "John Doe",
          type: "user",
          email: "john.doe@example.com",
        },
        {
          id: "group456",
          name: "test-group",
          displayname: "Test Group",
          type: "group",
        },
      ].filter((item) =>
        item.name.toLowerCase().includes(qtext.toLowerCase()) ||
        item.displayname?.toLowerCase().includes(qtext.toLowerCase())
      );

      return NextResponse.json({
        results: mockResults,
      });
    }

    // Real API mode
    console.log(`🔍 Searching users/groups for: "${qtext}"`);
    console.log(`📤 Query params:`, { qtext });
    const path = `/search/usersgroups`;

    const response = await kpointClient.get<any>(path, {
      qtext,
    });

    console.log(`📥 Raw API response:`, JSON.stringify(response, null, 2));

    // Transform response to consistent format
    const results: UserGroupSearchResult[] = [];

    // Check if response is an array (actual KPOINT API format)
    if (Array.isArray(response)) {
      for (const item of response) {
        if (item.type === "USER") {
          results.push({
            id: item.name || item.username || String(item.id),
            name: item.name || item.username,
            displayname: item.displayname || item.display_name,
            type: "user",
            email: item.email,
          });
        } else if (item.type === "GROUP") {
          results.push({
            id: item.name || item.groupname || String(item.id),
            name: item.name || item.groupname,
            displayname: item.displayname || item.display_name,
            type: "group",
          });
        }
      }
    } else {
      // Fallback: check for users/groups properties (alternative API format)
      if (response.users) {
        for (const user of response.users) {
          results.push({
            id: user.username || user.name,
            name: user.username || user.name,
            displayname: user.displayname || user.display_name,
            type: "user",
            email: user.email,
          });
        }
      }

      if (response.groups) {
        for (const group of response.groups) {
          results.push({
            id: group.name || group.groupname,
            name: group.name || group.groupname,
            displayname: group.displayname || group.display_name,
            type: "group",
          });
        }
      }
    }

    console.log(`✅ Found ${results.length} users/groups:`, results);

    return NextResponse.json({
      results,
    });
  } catch (error: any) {
    console.error("Error in search users/groups API:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
