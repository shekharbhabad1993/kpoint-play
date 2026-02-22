/**
 * Test/Demo file for play link generation
 * Run this with: npx ts-node lib/utils/play-link.test.ts
 */

import { generatePlayLink } from "./play-link";

console.log("\n🎬 KPOINT Play Link Generation Examples\n");
console.log("=" .repeat(80));

// Example 1: IL Hindi with customer personalization
console.log("\n1️⃣ IL Hindi Insurance Video");
console.log("-".repeat(80));
const ilHindiLink = generatePlayLink({
  videoId: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
  packageId: "52eutbewxdcu",
  fields: {
    customer_name: "Rajesh Kumar",
    policy_number: "POL-2024-001",
    support_language: "Hindi",
  },
});
console.log("Video ID:", "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7");
console.log("Package ID:", "52eutbewxdcu");
console.log("Fields:", {
  customer_name: "Rajesh Kumar",
  policy_number: "POL-2024-001",
  support_language: "Hindi",
});
console.log("\n📎 Generated Link:");
console.log(ilHindiLink);

// Example 2: Product Dashboard Tutorial
console.log("\n\n2️⃣ Product Dashboard Tutorial");
console.log("-".repeat(80));
const dashboardLink = generatePlayLink({
  videoId: "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8",
  packageId: "quiz123abc",
  fields: {
    employee_name: "Sarah Johnson",
    department: "Sales",
    training_date: "2026-02-25",
  },
});
console.log("Video ID:", "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8");
console.log("Package ID:", "quiz123abc");
console.log("Fields:", {
  employee_name: "Sarah Johnson",
  department: "Sales",
  training_date: "2026-02-25",
});
console.log("\n📎 Generated Link:");
console.log(dashboardLink);

// Example 3: Sales Strategy with DRAFT state
console.log("\n\n3️⃣ Q1 Sales Strategy (DRAFT)");
console.log("-".repeat(80));
const salesLink = generatePlayLink({
  videoId: "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9",
  packageId: "poll456def",
  fields: {
    team_member: "Michael Chen",
    region: "North",
    target_quarter: "Q1 2026",
  },
  state: "DRAFT",
});
console.log("Video ID:", "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9");
console.log("Package ID:", "poll456def");
console.log("State:", "DRAFT");
console.log("Fields:", {
  team_member: "Michael Chen",
  region: "North",
  target_quarter: "Q1 2026",
});
console.log("\n📎 Generated Link:");
console.log(salesLink);

// Example 4: RR Video (Parima Tyres)
console.log("\n\n4️⃣ RR Video - Parima Tyres");
console.log("-".repeat(80));
const rrLink = generatePlayLink({
  videoId: "gcc-a0935947-c987-4ef4-b171-10392afef509",
  packageId: "custom-pkg-001",
  fields: {
    store_name: "Parima Tyres Indore",
    location: "AB Road, Rajendra Nagar",
    offer: "Blockbuster EMI Days",
  },
});
console.log("Video ID:", "gcc-a0935947-c987-4ef4-b171-10392afef509");
console.log("Package ID:", "custom-pkg-001");
console.log("Fields:", {
  store_name: "Parima Tyres Indore",
  location: "AB Road, Rajendra Nagar",
  offer: "Blockbuster EMI Days",
});
console.log("\n📎 Generated Link:");
console.log(rrLink);

// Example 5: Minimal example (no fields)
console.log("\n\n5️⃣ Minimal Example (No Personalization)");
console.log("-".repeat(80));
const minimalLink = generatePlayLink({
  videoId: "gcc-d941d952-1097-4588-832d-c3585963d33e",
  packageId: "pkg-minimal",
});
console.log("Video ID:", "gcc-d941d952-1097-4588-832d-c3585963d33e");
console.log("Package ID:", "pkg-minimal");
console.log("Fields:", "None");
console.log("\n📎 Generated Link:");
console.log(minimalLink);

// Example 6: Complex data with special characters
console.log("\n\n6️⃣ Complex Data with Special Characters");
console.log("-".repeat(80));
const complexLink = generatePlayLink({
  videoId: "gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886",
  packageId: "pkg-complex",
  fields: {
    company_name: "Tata & Sons",
    partnership: "AI+Data Analytics",
    email: "contact@example.com",
    message: "Welcome! Let's collaborate",
  },
});
console.log("Video ID:", "gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886");
console.log("Package ID:", "pkg-complex");
console.log("Fields:", {
  company_name: "Tata & Sons",
  partnership: "AI+Data Analytics",
  email: "contact@example.com",
  message: "Welcome! Let's collaborate",
});
console.log("\n📎 Generated Link:");
console.log(complexLink);

// Decode example
console.log("\n\n🔍 Decoding Example");
console.log("-".repeat(80));
console.log("To decode a data parameter, use:");
console.log("\n// Extract data parameter from URL");
console.log('const url = new URL(playLink);');
console.log('const encodedData = url.searchParams.get("data");');
console.log("\n// Decode from base64");
console.log('const decodedData = Buffer.from(encodedData, "base64").toString();');
console.log('console.log(decodedData);');
console.log("\n// Result: customer_name:Rajesh Kumar;policy_number:POL-2024-001;support_language:Hindi;");

console.log("\n" + "=".repeat(80));
console.log("\n✅ All examples generated successfully!");
console.log("\n💡 Tip: Copy any link above and test it in your browser\n");
