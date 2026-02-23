/**
 * Test script for KPOINT JWT token generation
 *
 * Usage: npx tsx scripts/test-jwt.ts
 */

import dotenv from "dotenv";

// Load environment variables from .env.local BEFORE importing other modules
dotenv.config({ path: ".env.local" });

import { generateKPointToken, getKPointAuthParams } from "../lib/kpoint/jwt";

console.log("Testing KPOINT JWT Token Generation\n");
console.log("=====================================\n");

try {
  // Test 1: Generate token
  console.log("1. Generating JWT token...");
  const token = generateKPointToken("Shekhar Bhabad", "shekhar.bhabad@kpoint.com");
  console.log(`✓ Token generated (length: ${token.length} chars)`);
  console.log(`Token preview: ${token.substring(0, 50)}...\n`);

  // Test 2: Generate auth parameters
  console.log("2. Generating auth parameters...");
  const authParams = getKPointAuthParams("Shekhar Bhabad", "shekhar.bhabad@kpoint.com");
  console.log(`✓ Auth parameters generated:`);
  console.log(`  - kcid: ${authParams.kcid}`);
  console.log(`  - token (preview): ${authParams.token.substring(0, 50)}...\n`);

  // Test 3: Show example API URL
  console.log("3. Example API URL:");
  const exampleUrl = `https://ktpl.kpoint.com/api/v3/videos?token=${encodeURIComponent(authParams.token)}&kcid=${authParams.kcid}`;
  console.log(`${exampleUrl.substring(0, 100)}...\n`);

  console.log("=====================================");
  console.log("✓ All tests passed!\n");
} catch (error) {
  console.error("✗ Error:", error instanceof Error ? error.message : error);
  process.exit(1);
}
