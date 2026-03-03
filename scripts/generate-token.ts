// IMPORTANT: Load dotenv BEFORE any other imports that use process.env
require("dotenv").config({ path: require("path").join(__dirname, "../.env.local") });

console.log("\n=== Environment Variables ===");
console.log("KPOINT_CLIENT_ID:", process.env.KPOINT_CLIENT_ID ? `${process.env.KPOINT_CLIENT_ID.substring(0, 20)}...` : "NOT SET");
console.log("KPOINT_CLIENT_SECRET:", process.env.KPOINT_CLIENT_SECRET ? "SET (hidden)" : "NOT SET");
console.log("KPOINT_USER_EMAIL:", process.env.KPOINT_USER_EMAIL || "NOT SET");

// Now directly use token generation with process.env
import jwt from "jsonwebtoken";
import crypto from "crypto";

const clientId = process.env.KPOINT_CLIENT_ID!;
const clientSecret = process.env.KPOINT_CLIENT_SECRET!;
const userEmail = process.env.KPOINT_USER_EMAIL!;

// Generate JWT payload
const payload = {
  client_id: clientId,
  user_email: userEmail,
  user_name: "User",
  user_account_number: userEmail,
  challenge: Math.floor(Date.now() / 1000).toString(),
};

// Sign with HS256
const signedToken = jwt.sign(payload, clientSecret, {
  algorithm: "HS256",
  noTimestamp: true,
});

// Encrypt with AES-128-CBC
const key = Buffer.from(clientSecret.substring(0, 16), "utf8");
const iv = Buffer.alloc(16, 0);
const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);
const encrypted = Buffer.concat([
  cipher.update(signedToken, "utf8"),
  cipher.final(),
]);

// Base64 encode
const token = encrypted.toString("base64");
const authParams = { token, kcid: clientId };

console.log("\n=== KPOINT JWT Token Generated ===\n");
console.log("Token:", authParams.token);
console.log("\nKCID:", authParams.kcid);
console.log("\nClient ID:", clientId);
console.log("User Email:", userEmail);
console.log("\n=== Token Details ===");
console.log("Token Length:", authParams.token.length, "characters");
console.log("Generated at:", new Date().toISOString());
console.log("\n=== JWT Payload ===");
console.log(JSON.stringify(payload, null, 2));
console.log("\n=== Full Auth Params ===");
console.log(JSON.stringify(authParams, null, 2));
