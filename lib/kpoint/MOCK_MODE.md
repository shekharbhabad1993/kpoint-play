# Mock Mode Documentation

## Overview

Mock Mode allows you to develop and test the KPOINT Play application using dummy data instead of making real API calls. This is particularly useful for:

- Development without API credentials
- Testing with consistent, reproducible data
- Working with public data examples
- Demonstrating features without affecting production data

## Enabling Mock Mode

### Option 1: Environment Variable

Add to your `.env.local` file:

```env
KPOINT_MOCK_MODE=true
```

### Option 2: Default Configuration

Mock mode is controlled by the `KPOINT_MOCK_MODE` environment variable. If not set, it defaults to `false`.

## Mock Data Structure

The mock data is based on actual KPOINT API responses and includes:

### 5 Sample Videos

1. **IL Hindi** - Short 9:16 video (13 seconds)
   - Insurance/customer service content
   - Bilingual (English/Hindi)
   - 129 views

2. **Product Dashboard Tutorial** - Standard tutorial (4:05 minutes)
   - 16:9 aspect ratio
   - Featured video
   - 542 views, 23 likes
   - Includes quiz package

3. **Q1 Sales Strategy 2026** - Long presentation (30:47 minutes)
   - Private visibility
   - SCORM enabled
   - 387 views, 15 likes
   - Includes poll package

4. **Tech Trends Webinar 2026** - Full webinar (1:00:25)
   - Public event
   - 1024 views, 67 likes
   - Expiry date set
   - No transcript

5. **5 Productivity Hacks** - Short vertical video (58 seconds)
   - 9:16 aspect ratio
   - Processing status
   - 12 views, 2 likes
   - Pending review

### Video Properties Included

All mock videos include complete API response data:

- Basic metadata (id, displayname, description)
- Images (thumbnail, full, vthumb with fallbacks)
- Status and flags (published, featured, deleted)
- Engagement metrics (views, likes, comments, ratings)
- Timestamps (created, updated, published)
- Interactivity data (packages, transcripts, quizzes, polls)
- Owner information
- Embed codes and URLs
- Processing details
- Various configuration flags

## Usage in Code

The mock mode is automatically handled by the video service functions:

```typescript
import { listVideos, getVideo } from '@/lib/kpoint/videos';

// These will automatically use mock data when KPOINT_MOCK_MODE=true
const videos = await listVideos();
const video = await getVideo('gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7');
```

### Network Delay Simulation

Mock responses include realistic delays:
- `listVideos()`: 300ms delay
- `getVideo()`: 200ms delay

This helps simulate real network conditions during development.

## Mock Data File

Mock data is defined in [`lib/kpoint/mock-data.ts`](./mock-data.ts):

```typescript
import { getMockVideos, getMockVideoById, simulateDelay } from './mock-data';

// Get all mock videos
const allVideos = getMockVideos();

// Get a specific video by ID
const video = getMockVideoById('gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7');

// Manually simulate delay in your code
await simulateDelay(500); // 500ms delay
```

## Console Indicators

When mock mode is active, you'll see console logs:

```
🎭 Mock mode enabled - returning mock video data
🎭 Mock mode enabled - returning mock video: gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7
```

## Adding More Mock Data

To add more mock videos, edit [`lib/kpoint/mock-data.ts`](./mock-data.ts) and add new entries to the `mockVideos` array following the `MockVideo` interface structure.

## Switching to Production

To switch back to real API calls:

1. Remove or set to false in `.env.local`:
   ```env
   KPOINT_MOCK_MODE=false
   ```

2. Ensure your API credentials are configured:
   ```env
   KPOINT_CLIENT_ID=your_real_client_id
   KPOINT_CLIENT_SECRET=your_real_client_secret
   ```

3. Restart your development server

## Testing Scenarios

The mock data includes various scenarios for testing:

- ✅ **Ready videos** - Fully processed and available
- ⏳ **Processing videos** - Still being processed
- 🔒 **Private videos** - Limited visibility
- 🌟 **Featured videos** - Highlighted content
- 📝 **Videos with transcripts** - Searchable content
- 🎯 **Videos with interactivity** - Quizzes, polls, packages
- ⏰ **Videos with expiry** - Time-limited content
- 📊 **Videos with various metrics** - Different view/like counts
- 📐 **Different aspect ratios** - 16:9 and 9:16
- 👥 **Different owners** - Multiple content creators

## API Compatibility

The mock data structure matches the actual KPOINT API v3 response format, ensuring that code written against mock data will work seamlessly with the real API.

## Limitations

- Mock mode only affects video listing and retrieval
- Other API operations (upload, delete, update) are not mocked
- Authentication still requires valid credentials (or skip auth in mock mode)
- Some advanced features may require real API access

## Best Practices

1. **Use mock mode during initial development** to build UI and logic
2. **Test with real API** before production deployment
3. **Keep mock data updated** to match current API response structure
4. **Document any custom mock data** you add for your team
5. **Don't commit `.env.local`** with mock mode enabled to version control
