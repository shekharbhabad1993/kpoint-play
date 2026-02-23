/**
 * Test script for KPOINT API calls with JWT authentication
 *
 * Usage: npx tsx scripts/test-api-call.ts
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { getKPointAuthParams } from "../lib/kpoint/jwt";

console.log("Testing KPOINT API Call with JWT Authentication\n");
console.log("=================================================\n");

async function testApiCall() {
  try {
    // Generate auth parameters
    console.log("1. Generating JWT auth parameters...");
    const authParams = getKPointAuthParams("Shekhar Bhabad", "shekhar.bhabad@kpoint.com");
    console.log(`✓ Auth parameters generated\n`);

    // Build API URL - Test with specific video
    const videoId = "gcc-6560f726-4c24-4e17-8300-35a499b2f732";
    const baseUrl = `https://ktpl.kpoint.com/api/v3/videos/${videoId}`;
    const url = `${baseUrl}?token=${encodeURIComponent(authParams.token)}&kcid=${authParams.kcid}`;

    console.log("2. Making API call to KPOINT...");
    console.log(`URL: ${baseUrl}`);
    console.log(`Video ID: ${videoId}`);
    console.log(`Method: GET\n`);

    // Make the API call
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`3. Response received:`);
    console.log(`Status: ${response.status} ${response.statusText}`);
    console.log(`Content-Type: ${response.headers.get("content-type")}\n`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`✗ API Error Response:`);
      console.error(errorText.substring(0, 500));
      process.exit(1);
    }

    const data = await response.json();
    console.log(`✓ API call successful!`);
    console.log(`Response data (preview):`);
    console.log(JSON.stringify(data, null, 2).substring(0, 500) + "...\n");

    console.log("=================================================");
    console.log("✓ API authentication working correctly!\n");
  } catch (error) {
    console.error("✗ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

testApiCall();
