import jwt from "jsonwebtoken";
import crypto from "crypto";
import { config } from "../config";

/**
 * JWT Token Generation for KPOINT API
 *
 * According to KPOINT documentation, the token generation process involves:
 * 1. Create JWT payload with required claims
 * 2. Sign with HMAC SHA-256 (HS256)
 * 3. Encrypt the signed JWT with AES-128-CBC
 * 4. Base64 encode the encrypted result
 */

interface KPointJWTPayload {
  client_id: string;
  user_email: string;
  user_name: string;
  user_account_number: string;
  challenge: string;
}

/**
 * Generate KPOINT JWT token
 *
 * @param userName - Display name for the user
 * @param userAccountNumber - User ID/account number (optional, defaults to email)
 * @returns Encrypted and base64-encoded JWT token
 */
export function generateKPointToken(
  userName: string = "User",
  userAccountNumber?: string
): string {
  if (!config.kpoint.clientId || !config.kpoint.clientSecret) {
    throw new Error("KPOINT_CLIENT_ID and KPOINT_CLIENT_SECRET must be set");
  }

  if (!config.kpoint.userEmail) {
    throw new Error("KPOINT_USER_EMAIL must be set");
  }

  // Step 1: Create JWT payload with required claims
  const payload: KPointJWTPayload = {
    client_id: config.kpoint.clientId,
    user_email: config.kpoint.userEmail,
    user_name: userName,
    user_account_number: userAccountNumber || config.kpoint.userEmail,
    challenge: Math.floor(Date.now() / 1000).toString(), // Current epoch timestamp as string
  };

  // Step 2: Sign JWT with HS256 (HMAC SHA-256)
  const signedToken = jwt.sign(payload, config.kpoint.clientSecret, {
    algorithm: "HS256",
    noTimestamp: true, // Don't add iat/exp automatically
  });

  // Step 3: Encrypt with AES-128-CBC
  const encryptedToken = encryptToken(signedToken, config.kpoint.clientSecret);

  // Step 4: Base64 encode
  return encryptedToken.toString("base64");
}

/**
 * Encrypt token with AES-128-CBC
 *
 * @param token - The JWT token to encrypt
 * @param secret - The secret key for encryption
 * @returns Encrypted token as binary buffer
 */
function encryptToken(token: string, secret: string): Buffer {
  // AES-128 requires a 16-byte (128-bit) key
  // Use the first 16 characters of the secret key
  const key = Buffer.from(secret.substring(0, 16), "utf8");

  // Use a 16-byte IV filled with zeros (as per KPOINT documentation)
  const iv = Buffer.alloc(16, 0);

  // Create cipher
  const cipher = crypto.createCipheriv("aes-128-cbc", key, iv);

  // Encrypt the token and return as buffer
  const encrypted = Buffer.concat([
    cipher.update(token, "utf8"),
    cipher.final(),
  ]);

  return encrypted;
}

/**
 * Get the query parameters needed for KPOINT API authentication
 *
 * @param userName - Display name for the user
 * @param userAccountNumber - User ID/account number (optional)
 * @returns Object with token and kcid parameters
 */
export function getKPointAuthParams(
  userName: string = "User",
  userAccountNumber?: string
): { token: string; kcid: string } {
  const token = generateKPointToken(userName, userAccountNumber);
  return {
    token,
    kcid: config.kpoint.clientId,
  };
}

/**
 * Get the Authorization header value for KPOINT API
 *
 * @param userName - Display name for the user
 * @param userAccountNumber - User ID/account number (optional)
 * @returns Authorization header value
 */
export function getKPointAuthHeader(
  userName: string = "User",
  userAccountNumber?: string
): string {
  const token = generateKPointToken(userName, userAccountNumber);
  return `OAuth ${token}`;
}
