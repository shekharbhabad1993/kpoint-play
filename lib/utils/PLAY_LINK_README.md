# Play Link Generation

## Overview

The play link generator creates personalized KPOINT video URLs with encoded data parameters. These links allow viewers to watch videos with personalized content based on the provided fields.

## URL Format

```
https://ktpl.kpoint.com/web/videos/{videoId}/play?id={packageId}&data={base64EncodedData}
```

### Parameters

- **videoId**: The unique identifier for the video (e.g., `gcc-a0935947-c987-4ef4-b171-10392afef509`)
- **packageId**: The interactivity package ID (e.g., `52eutbewxdcu`)
- **data**: Base64-encoded personalization fields in the format `key:value;key:value;`

## Basic Usage

```typescript
import { generatePlayLink } from '@/lib/utils/play-link';

const playLink = generatePlayLink({
  videoId: "gcc-a0935947-c987-4ef4-b171-10392afef509",
  packageId: "pkg-12345",
  fields: {
    customer_name: "John Doe",
    email: "john@example.com",
    product: "Premium Plan"
  }
});

console.log(playLink);
// Output: https://ktpl.kpoint.com/web/videos/gcc-a0935947-c987-4ef4-b171-10392afef509/play?id=pkg-12345&data=Y3VzdG9tZXJfbmFtZTpKb2huIERvZTtlbWFpbDpqb2huQGV4YW1wbGUuY29tO3Byb2R1Y3Q6UHJlbWl1bSBQbGFuOw==
```

## How Data Encoding Works

### Input Data
```javascript
{
  customer_name: "John Doe",
  policy_number: "12345",
  support_language: "Hindi"
}
```

### Step 1: Convert to Key:Value Format
```
customer_name:John Doe;policy_number:12345;support_language:Hindi;
```

### Step 2: Base64 Encode
```
Y3VzdG9tZXJfbmFtZTpKb2huIERvZTtwb2xpY3lfbnVtYmVyOjEyMzQ1O3N1cHBvcnRfbGFuZ3VhZ2U6SGluZGk7
```

### Step 3: Final URL
```
https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/play?id=52eutbewxdcu&data=Y3VzdG9tZXJfbmFtZTpKb2huIERvZTtwb2xpY3lfbnVtYmVyOjEyMzQ1O3N1cHBvcnRfbGFuZ3VhZ2U6SGluZGk7
```

## Examples with Mock Data

### Example 1: IL Hindi Insurance Video

```typescript
import { generatePlayLink } from '@/lib/utils/play-link';

const ilHindiLink = generatePlayLink({
  videoId: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
  packageId: "52eutbewxdcu",
  fields: {
    customer_name: "Rajesh Kumar",
    policy_number: "POL-2024-001",
    support_language: "Hindi"
  }
});

// Result:
// https://ktpl.kpoint.com/web/videos/gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7/play?id=52eutbewxdcu&data=Y3VzdG9tZXJfbmFtZTpSYWplc2ggS3VtYXI7cG9saWN5X251bWJlcjpQT0wtMjAyNC0wMDE7c3VwcG9ydF9sYW5ndWFnZTpIaW5kaTs=
```

### Example 2: Product Dashboard Tutorial

```typescript
const dashboardLink = generatePlayLink({
  videoId: "gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8",
  packageId: "quiz123abc",
  fields: {
    employee_name: "Sarah Johnson",
    department: "Sales",
    training_date: "2026-02-25"
  }
});

// Result:
// https://ktpl.kpoint.com/web/videos/gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8/play?id=quiz123abc&data=ZW1wbG95ZWVfbmFtZTpTYXJhaCBKb2huc29uO2RlcGFydG1lbnQ6U2FsZXM7dHJhaW5pbmdfZGF0ZToyMDI2LTAyLTI1Ow==
```

### Example 3: Sales Strategy with State

```typescript
const salesLink = generatePlayLink({
  videoId: "gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9",
  packageId: "poll456def",
  fields: {
    team_member: "Michael Chen",
    region: "North",
    target_quarter: "Q1 2026"
  },
  state: "DRAFT"  // Optional: DRAFT or PUBLISHED
});

// Result:
// https://ktpl.kpoint.com/web/videos/gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9/play?id=poll456def&data=dGVhbV9tZW1iZXI6TWljaGFlbCBDaGVuO3JlZ2lvbjpOb3J0aDt0YXJnZXRfcXVhcnRlcjpRMSAyMDI2Ow==&state=DRAFT
```

### Example 4: Real Video from Mock Data

```typescript
// Using the RR (Parima Tyres) video
const rrVideoLink = generatePlayLink({
  videoId: "gcc-a0935947-c987-4ef4-b171-10392afef509",
  packageId: "custom-pkg-001",
  fields: {
    store_name: "Parima Tyres Indore",
    offer_period: "October 2025",
    customer_type: "Premium"
  }
});
```

### Example 5: KLI Dinesh Pillai Video

```typescript
const kliLink = generatePlayLink({
  videoId: "gcc-d941d952-1097-4588-832d-c3585963d33e",
  packageId: "custom-pkg-002",
  fields: {
    client_name: "Amit Sharma",
    insurance_plan: "Life Plus",
    agent_name: "Dinesh Pillai"
  }
});
```

### Example 6: Tata AIA Video

```typescript
const tataAIALink = generatePlayLink({
  videoId: "gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886",
  packageId: "custom-pkg-003",
  fields: {
    partner_name: "AIA Group",
    collaboration_type: "Joint Venture",
    region: "India"
  }
});
```

## Using with Mock Partner Templates

The mock data includes partner templates with predefined fields. Here's how to use them:

```typescript
import { getMockPartnerTemplateById } from '@/lib/kpoint/mock-data';
import { generatePlayLink } from '@/lib/utils/play-link';

// Get template
const template = getMockPartnerTemplateById("tmpl-001"); // IL Hindi Template

// Generate link using template fields
const playLink = generatePlayLink({
  videoId: template.video_id,
  packageId: template.package_id,
  fields: {
    customer_name: "Priya Patel",
    policy_number: "POL-2026-042",
    support_language: "English"
  }
});
```

## Sharing Generated Links

### WhatsApp Sharing

```typescript
import { generateWhatsAppShareLink } from '@/lib/utils/play-link';

const playLink = generatePlayLink({
  videoId: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
  packageId: "52eutbewxdcu",
  fields: { customer_name: "John" }
});

const whatsappLink = generateWhatsAppShareLink(
  playLink,
  "Hi! Here's your personalized insurance video:"
);

// Opens WhatsApp with pre-filled message
```

### Email Sharing

```typescript
import { generateEmailShareLink } from '@/lib/utils/play-link';

const emailLink = generateEmailShareLink({
  playUrl: playLink,
  subject: "Your Personalized Video",
  body: "Dear Customer, we've created a personalized video just for you!"
});

// Opens email client with pre-filled subject and body
```

## Complete Integration Example

```typescript
// Component for generating personalized video links
import { useState } from 'react';
import { generatePlayLink } from '@/lib/utils/play-link';
import { getMockPartnerTemplates } from '@/lib/kpoint/mock-data';

export function PersonalizedVideoGenerator() {
  const [formData, setFormData] = useState({
    customer_name: '',
    policy_number: '',
    support_language: 'English'
  });

  const handleGenerate = () => {
    const playLink = generatePlayLink({
      videoId: "gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7",
      packageId: "52eutbewxdcu",
      fields: formData
    });

    console.log("Generated Link:", playLink);
    // Copy to clipboard, share, etc.
  };

  return (
    <div>
      <input
        value={formData.customer_name}
        onChange={(e) => setFormData({ ...formData, customer_name: e.target.value })}
        placeholder="Customer Name"
      />
      <input
        value={formData.policy_number}
        onChange={(e) => setFormData({ ...formData, policy_number: e.target.value })}
        placeholder="Policy Number"
      />
      <select
        value={formData.support_language}
        onChange={(e) => setFormData({ ...formData, support_language: e.target.value })}
      >
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>
      <button onClick={handleGenerate}>Generate Link</button>
    </div>
  );
}
```

## Mock Mode Compatibility

All the video IDs and package IDs used in these examples are available in mock mode:

```env
KPOINT_MOCK_MODE=true
```

This means you can develop and test play link generation without needing actual API access.

## Video IDs Available in Mock Data

- `gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7` - IL Hindi
- `gcc-a7b3c940-f41d-5294-cf4f-bg48db23e1e8` - Product Dashboard Tutorial
- `gcc-c8d4e051-g52e-6405-dg5g-ch59ec34f2f9` - Q1 Sales Strategy 2026
- `gcc-d9e5f162-h63f-7516-eh6h-di60fd45g3g0` - Tech Trends Webinar 2026
- `gcc-e0f6g273-i74g-8627-fi7i-ej71ge56h4h1` - 5 Productivity Hacks
- `gcc-d941d952-1097-4588-832d-c3585963d33e` - KLI Dinesh Pillai
- `gcc-a0935947-c987-4ef4-b171-10392afef509` - RR (Parima Tyres)
- `gcc-d0e09cb8-c094-4dc0-aca1-9ec89e2d8886` - Tata AIA

## Package IDs Available in Mock Data

- `52eutbewxdcu` - IL Hindi Interactive Package
- `quiz123abc` - Product Dashboard Quiz
- `poll456def` - Sales Strategy Poll

## Notes

- All personalization field values are automatically URL-encoded
- Empty fields are omitted from the final URL
- The `state` parameter is optional (defaults to published view)
- Base64 encoding ensures special characters are properly handled
- The generated links work with both mock mode and production KPOINT API
