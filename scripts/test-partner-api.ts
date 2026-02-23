/**
 * Test script for KPOINT Partner Templates API
 *
 * Usage: npx tsx scripts/test-partner-api.ts
 */

import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import jwt from "jsonwebtoken";
import crypto from "crypto";

console.log("Testing KPOINT Partner Templates API\n");
console.log("=====================================\n");

// Generate JWT token directly
function generateToken() {
  const clientId = process.env.KPOINT_CLIENT_ID!;
  const clientSecret = process.env.KPOINT_CLIENT_SECRET!;
  const userEmail = process.env.KPOINT_USER_EMAIL!;

  const payload = {
    client_id: clientId,
    user_email: userEmail,
    user_name: "Shekhar Bhabad",
    user_account_number: userEmail,
    challenge: Math.floor(Date.now() / 1000).toString(),
  };

  const signedToken = jwt.sign(payload, clientSecret, {
    algorithm: "HS256",
    noTimestamp: true,
  });

  const key = Buffer.from(clientSecret.substring(0, 16), "utf8");
  const iv = Buffer.alloc(16, 0);
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
  const encrypted = Buffer.concat([
    cipher.update(signedToken, "utf8"),
    cipher.final(),
  ]);

  return encrypted.toString("base64");
}

async function testPartnerApi() {
  try {
    // Generate auth parameters
    console.log("1. Generating JWT auth parameters...");
    const token = generateToken();
    const kcid = process.env.KPOINT_CLIENT_ID!;
    console.log(`✓ Auth parameters generated\n`);

    // Test partner templates endpoint
    const baseUrl = `https://ktpl.kpoint.com/api/v3/partner/templates`;
    const url = `${baseUrl}?token=${encodeURIComponent(token)}&kcid=${kcid}`;

    console.log("2. Making API call to KPOINT...");
    console.log(`URL: ${baseUrl}`);
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

    const responseText = await response.text();

    if (!response.ok) {
      console.error(`✗ API Error Response:`);
      console.error(responseText.substring(0, 1000));
      console.log("\n\n===========================================");
      console.log("Trying alternative endpoint: /videos");
      console.log("===========================================\n");

      // Try videos endpoint as alternative
      const altUrl = `https://ktpl.kpoint.com/api/v3/videos?token=${encodeURIComponent(token)}&kcid=${kcid}`;
      const altResponse = await fetch(altUrl);
      console.log(`Videos endpoint status: ${altResponse.status}`);
      const altData = await altResponse.json();
      console.log(`Videos response structure:`, Object.keys(altData));

      process.exit(1);
    }

    const data = JSON.parse(responseText);
    console.log(`✓ API call successful!`);
    console.log(`Response data structure:`, Object.keys(data));
    console.log(`Full response (preview):`);
    console.log(JSON.stringify(data, null, 2).substring(0, 1000) + "...\n");

    console.log("=====================================");
    console.log("✓ Partner templates API working!\n");
  } catch (error) {
    console.error("✗ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

testPartnerApi();
