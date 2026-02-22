# KPOINT Play

A modern, personalized video platform that enables partners to create and share customized video experiences using KPOINT's interactive video technology.

## 🎯 Project Intent

KPOINT Play bridges the gap between KPOINT's powerful video personalization API and end-users (partners/agents) who need a simple, intuitive interface to:

1. **Browse** available video templates with interactivity packages
2. **Personalize** videos by filling in dynamic fields (names, offers, etc.)
3. **Generate** unique play links with embedded personalization data
4. **Share** personalized videos via WhatsApp, Email, or native sharing

The platform serves two user roles:
- **Admins**: Manage videos, templates, and control which partners have access to specific content
- **Partners/Agents**: Create personalized video links for their customers

## ✨ Key Features

### For Partners/Agents
- 📱 **Mobile-First Design** - Fully responsive interface optimized for smartphones
- 🎬 **Template Library** - Browse video templates published to you or your group
- ✏️ **Dynamic Personalization** - Form fields automatically extracted from video configuration
- 🔗 **Instant Link Generation** - Create personalized play links with base64-encoded data
- 📤 **Native Sharing** - Share via WhatsApp, Email, or device's native share panel
- 👤 **User Switcher** - Test different user perspectives (mock mode only)

### For Admins
- 📊 **Dashboard** - Overview of videos, templates, and system metrics
- 🎥 **Video Management** - Upload and manage KPOINT videos
- 📝 **Template Publishing** - Assign templates to specific users or groups
- 👥 **User & Group Management** - Control access to templates
- 🔍 **Package Discovery** - View interactivity packages within videos

### Technical Features
- 🎭 **Mock Mode** - Develop without KPOINT API credentials using realistic mock data
- 🔐 **Role-Based Access** - Middleware-protected routes for admin and partner areas
- 🚀 **Dynamic Field Extraction** - Automatically parse personalization fields from `widgetsConfig`
- 📦 **Template Auto-Discovery** - Extract templates from video `interactivity_packages` property
- 🌐 **PWA Support** - Installable as a progressive web app

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **HTTP Client**: Native Fetch API with custom wrapper

### Project Structure

```
kpoint_play/
├── app/                          # Next.js App Router
│   ├── (admin)/                  # Admin-only routes
│   │   ├── admin/
│   │   │   ├── dashboard/        # Admin dashboard
│   │   │   ├── videos/          # Video library
│   │   │   ├── templates/       # Template management
│   │   │   └── upload/          # Video upload
│   │   └── layout.tsx           # Admin shell wrapper
│   ├── (partner)/               # Partner-only routes
│   │   ├── partner/
│   │   │   ├── dashboard/       # Partner dashboard
│   │   │   └── templates/       # Available templates
│   │   └── layout.tsx          # Partner shell wrapper
│   ├── (auth)/                  # Authentication pages
│   │   └── login/
│   ├── api/                     # API Routes
│   │   ├── auth/               # Authentication endpoints
│   │   ├── kpoint/             # KPOINT API proxy
│   │   │   ├── admin/          # Admin-specific endpoints
│   │   │   ├── partner/        # Partner-specific endpoints
│   │   │   └── videos/         # Video & field extraction
│   │   └── debug/              # Debug endpoints (dev only)
│   └── embed/                   # Embed player pages
├── components/
│   ├── admin/                   # Admin-specific components
│   ├── partner/                 # Partner-specific components
│   ├── layout/                  # Layout components (sidebar, header)
│   └── shared/                  # Reusable components
├── lib/
│   ├── kpoint/                  # KPOINT API integration
│   │   ├── client.ts           # HTTP client wrapper
│   │   ├── mock-data.ts        # Mock video/template data
│   │   ├── users-mock-data.ts  # Mock users & groups
│   │   ├── videos.ts           # Video API functions
│   │   ├── partner.ts          # Partner template functions
│   │   └── packages.ts         # Package functions
│   ├── utils/                   # Utility functions
│   │   ├── play-link.ts        # Play link generation
│   │   └── cookies.ts          # Cookie helpers
│   └── config/                  # App configuration
└── middleware.ts                # Route protection

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- KPOINT API credentials (or use mock mode)

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd kpoint_play
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment**

Create `.env.local` file:

```env
# KPOINT API Configuration
KPOINT_BASE_URL=https://ktpl.kpoint.com
KPOINT_API_VERSION=v3
KPOINT_CLIENT_ID=your_client_id
KPOINT_CLIENT_SECRET=your_client_secret
KPOINT_USER_NAME=your_username
KPOINT_PASSWORD=your_password

# Mock Mode (for development without API access)
KPOINT_MOCK_MODE=true

# Session Secret (generate a random string)
SESSION_SECRET=your-secret-key-here
```

4. **Run development server**
```bash
npm run dev
```

5. **Open in browser**
```
http://localhost:3000
```

### Default Login Credentials (Mock Mode)

**Admin:**
- Username: `admin`
- Password: `admin123`

**Partner:**
- Username: `partner`
- Password: `partner123`

## 📖 How It Works

### 1. Template Discovery

Videos in KPOINT contain an `interactivity_packages` property that lists available packages:

```json
{
  "properties": {
    "interactivity_packages": "[{\"id\":\"52eutbewxdcu\",\"displayname\":\"Untitled\",\"state\":\"PUBLISHED\"}]"
  }
}
```

The system automatically:
- Parses this JSON array
- Creates template entries for each PUBLISHED package
- Extracts thumbnail, title, and metadata

### 2. Dynamic Field Extraction

When a user selects a template, the system fetches the package configuration:

```
GET /api/kpoint/videos/{videoId}/fields?packageId={packageId}
```

This endpoint:
1. Fetches package `widgetsConfig` from KPOINT API
2. Recursively searches for text widgets
3. Extracts field patterns like `{first_name}`, `{company}`, etc.
4. Converts to form fields: `first_name` → "First Name"

**Example widgetsConfig:**
```json
{
  "kpw_text": {
    "list": [{
      "text": "{first_name}",
      "track": {"name": "{first_name}"}
    }]
  }
}
```

**Extracted field:**
```json
{
  "key": "first_name",
  "label": "First Name",
  "type": "text",
  "required": true
}
```

### 3. Play Link Generation

When user submits personalization data:

```typescript
// Input
{
  first_name: "John",
  company: "Acme Corp"
}

// Step 1: Convert to key:value format
"first_name:John;company:Acme Corp;"

// Step 2: Base64 encode
"Zmlyc3RfbmFtZTpKb2huO2NvbXBhbnk6QWNtZSBDb3JwOw=="

// Step 3: Build URL (NO URL-encoding)
https://ktpl.kpoint.com/web/videos/gcc-5f2ec840.../play?id=52eutbewxdcu&data=Zmlyc3RfbmFtZTpKb2huO2NvbXBhbnk6QWNtZSBDb3JwOw==
```

**Important**: The base64 data is NOT URL-encoded. KPOINT player expects raw `=` padding, not `%3D`.

### 4. Template Access Control

Admins can publish templates to:
- **Specific Users**: Individual agents
- **Groups**: Teams like "Sales", "Marketing", "Insurance"

Partners only see templates published to them or their groups:

```typescript
function getTemplatesForUser(userId: string): string[] {
  const user = getMockUserById(userId);
  const templateIds = new Set<string>();

  mockTemplateAssignments.forEach((assignment) => {
    // Direct user assignment
    if (assignment.assigned_to.user_ids.includes(userId)) {
      templateIds.add(assignment.template_id);
    }

    // Group assignment
    const hasGroupAccess = user.group_ids.some((groupId) =>
      assignment.assigned_to.group_ids.includes(groupId)
    );
    if (hasGroupAccess) {
      templateIds.add(assignment.template_id);
    }
  });

  return Array.from(templateIds);
}
```

## 🎭 Mock Mode

Mock mode enables development without KPOINT API credentials by using realistic test data.

### Enabling Mock Mode

Set in `.env.local`:
```env
KPOINT_MOCK_MODE=true
```

### Mock Data Includes

- **8 Videos** with real KPOINT API response structure
- **8 Users** across 5 groups (Sales, Marketing, Insurance, Product, Training)
- **3 Templates** with pre-configured fields
- **Template Assignments** for testing access control

### Mock vs Real API

| Feature | Mock Mode | Real API |
|---------|-----------|----------|
| Video listing | ✅ Mock data | ✅ KPOINT API |
| Template extraction | ✅ From mock videos | ✅ From real videos |
| Field extraction | ✅ From mock widgetsConfig | ✅ From KPOINT API |
| Play link generation | ✅ Works identically | ✅ Works identically |
| User/Group management | ✅ Mock users | ⚠️ Not implemented |
| Authentication | ✅ Mock credentials | ⚠️ Not implemented |

## 📱 Mobile Responsiveness

### Design Principles

1. **Touch-First**: All interactive elements are finger-friendly (min 44px)
2. **Native Feel**: Uses device's native share panel when available
3. **Optimized Forms**: Prevents iOS zoom with proper input font sizes
4. **Hamburger Menu**: Sidebar hidden on mobile, accessible via menu button
5. **Responsive Grid**: Adapts from 1 → 2 → 3 columns based on screen size

### Breakpoints

```css
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
```

## 🔗 API Endpoints

### Public Endpoints

#### Authentication
```
POST /api/auth/login          # User login
POST /api/auth/logout         # User logout
GET  /api/auth/session        # Get current session
```

### Partner Endpoints

```
GET  /api/kpoint/partner      # Get accessible templates
POST /api/kpoint/partner/play-link  # Generate play link
```

### Admin Endpoints

```
GET  /api/kpoint/videos                    # List all videos
GET  /api/kpoint/videos/{id}               # Get video details
GET  /api/kpoint/videos/{id}/fields        # Extract personalization fields

GET  /api/kpoint/admin/templates           # List all templates
GET  /api/kpoint/admin/templates/{id}/assignments  # Get template assignments
POST /api/kpoint/admin/templates/{id}/publish      # Publish to users/groups

GET  /api/kpoint/admin/users               # List all users
GET  /api/kpoint/admin/groups              # List all groups
```

### Debug Endpoints (Development)

```
GET /api/debug/templates       # View extracted templates
GET /api/debug/user           # View current user context
```

## 🛠️ Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `KPOINT_BASE_URL` | KPOINT API base URL | `https://ktpl.kpoint.com` |
| `KPOINT_API_VERSION` | API version | `v3` |
| `KPOINT_MOCK_MODE` | Enable mock mode | `false` |
| `KPOINT_CLIENT_ID` | OAuth client ID | - |
| `KPOINT_CLIENT_SECRET` | OAuth client secret | - |
| `KPOINT_USER_NAME` | API username | - |
| `KPOINT_PASSWORD` | API password | - |
| `SESSION_SECRET` | Session encryption key | - |

### App Configuration

Edit `lib/config/index.ts`:

```typescript
export const config = {
  kpoint: {
    mockMode: process.env.KPOINT_MOCK_MODE === "true",
    baseUrl: process.env.KPOINT_BASE_URL || "https://ktpl.kpoint.com",
    apiVersion: process.env.KPOINT_API_VERSION || "v3",
    playerBaseUrl: "https://ktpl.kpoint.com/web/videos",
    // ...
  },
  auth: {
    sessionCookieName: "kpoint-session",
    sessionMaxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
};
```

## 🧪 Testing

### Manual Testing Workflow

1. **Enable Mock Mode**
   ```env
   KPOINT_MOCK_MODE=true
   ```

2. **Login as Admin**
   - Go to `/login`
   - Use `admin` / `admin123`

3. **View Videos**
   - Navigate to Admin → Videos
   - Click "View Templates" on IL Hindi video

4. **Publish Template**
   - Click "Publish" on template
   - Select users/groups
   - Save

5. **Switch to Partner**
   - Use user switcher in top-right
   - Select a partner user (e.g., "Rajesh Kumar")

6. **Generate Play Link**
   - Go to Partner → Templates
   - Click "Personalize" on template
   - Fill in fields
   - Click "Generate Play Link"

7. **Test Sharing**
   - Click "Share" button
   - Verify native share panel opens (mobile)
   - Or copy link (desktop)

8. **Verify Play Link**
   - Check browser console for encoding logs
   - Use decode utility: `node decode-play-link.js "<link>"`

### Encoding Test

```bash
node test-encoding.js
```

### URL Encoding Test

```bash
node test-url-encoding.js
```

## 📚 Key Concepts

### Base64 Encoding (Critical)

KPOINT player requires **raw base64** without URL-encoding:

✅ **Correct**: `data=Zmlyc3RfbmFtZTpKb2huOw==`
❌ **Wrong**: `data=Zmlyc3RfbmFtZTpKb2huOw%3D`

The `=` padding must NOT be encoded to `%3D`. This is why we manually construct URLs instead of using `URLSearchParams`:

```typescript
// WRONG - will URL-encode
url.searchParams.set("data", encoded);

// CORRECT - keeps raw base64
url += `&data=${encoded}`;
```

### Field Extraction Logic

The system recursively searches `widgetsConfig` for text patterns:

```typescript
function extractFieldsFromWidgetsConfig(widgetsConfig: any): string[] {
  const allFields = new Set<string>();

  function searchForTextFields(obj: any) {
    // Check text property
    if (typeof obj.text === "string") {
      const fields = extractFieldsFromText(obj.text);
      fields.forEach((f) => allFields.add(f));
    }

    // Check track.name
    if (obj.track?.name) {
      const fields = extractFieldsFromText(obj.track.name);
      fields.forEach((f) => allFields.add(f));
    }

    // Recurse into nested objects/arrays
    for (const key in obj) {
      if (Array.isArray(obj[key])) {
        obj[key].forEach(searchForTextFields);
      } else if (typeof obj[key] === "object") {
        searchForTextFields(obj[key]);
      }
    }
  }

  searchForTextFields(widgetsConfig);
  return Array.from(allFields);
}
```

## 🔒 Security Considerations

### Current Implementation

- ✅ Route protection via middleware
- ✅ Role-based access control
- ✅ Session-based authentication
- ✅ HTTP-only cookies
- ⚠️ Mock authentication (development only)

### Production Recommendations

1. **Replace Mock Auth** with OAuth 2.0 or JWT
2. **Add CSRF Protection** for form submissions
3. **Implement Rate Limiting** on API endpoints
4. **Enable HTTPS Only** in production
5. **Sanitize User Input** before encoding in play links
6. **Add API Key Rotation** for KPOINT credentials
7. **Implement Audit Logging** for admin actions

## 🚢 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
2. **Import to Vercel**
3. **Configure Environment Variables**
4. **Deploy**

```bash
vercel --prod
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables (Production)

```env
NODE_ENV=production
KPOINT_MOCK_MODE=false
KPOINT_BASE_URL=https://ktpl.kpoint.com
KPOINT_CLIENT_ID=<production-client-id>
KPOINT_CLIENT_SECRET=<production-secret>
SESSION_SECRET=<strong-random-string>
```

## 🤝 Contributing

### Development Workflow

1. Create a feature branch
2. Make changes
3. Test in mock mode
4. Test with real API (if available)
5. Commit with descriptive message
6. Push and create PR

### Commit Convention

```
feat: Add template publishing to groups
fix: Correct base64 encoding in play links
docs: Update README with API examples
refactor: Extract field parsing to separate function
```

## 📄 License

[Add your license here]

## 🙏 Acknowledgments

- **KPOINT** for the interactive video platform API
- **Next.js** team for the excellent framework
- **Tailwind CSS** for the utility-first CSS framework
- **Claude Code** for development assistance

## 📞 Support

For issues or questions:
- Create an issue in this repository
- Contact: [your-email@example.com]
- Documentation: [link to docs]

## 🗺️ Roadmap

- [ ] Real KPOINT OAuth integration
- [ ] Video upload functionality
- [ ] Template analytics dashboard
- [ ] Email template customization
- [ ] Multi-language support
- [ ] Bulk link generation
- [ ] QR code generation for play links
- [ ] Link expiration and tracking
- [ ] Custom branding per partner

---

**Built with ❤️ using Next.js and KPOINT API**
