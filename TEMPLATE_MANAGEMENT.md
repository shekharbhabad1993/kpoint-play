# Template Publishing & User Management System

## Overview

A complete user/group-based template publishing system that allows admins to publish video templates to specific users or groups, and filters templates for agents based on their assignments.

## Features

✅ **User & Group Management** - 8 mock users across 5 groups
✅ **Template Publishing** - Admins can publish templates to users/groups
✅ **Access Control** - Agents only see templates published to them
✅ **Thumbnail Display** - One template per row with video thumbnails
✅ **User Switcher** - Test different user perspectives (mock mode)
✅ **Real-time Filtering** - Templates filtered based on user assignments

## Mock Users

### Agent Users (8 users)

| User ID | Name | Email | Groups | Templates Access |
|---------|------|-------|--------|-----------------|
| user-001 | Rajesh Kumar | rajesh.kumar@company.com | North Region, Insurance Team | IL Hindi |
| user-002 | Priya Sharma | priya.sharma@company.com | South Region, Insurance Team | IL Hindi |
| user-003 | Amit Patel | amit.patel@company.com | North Region, Sales Team | Sales Strategy |
| user-004 | Sneha Desai | sneha.desai@company.com | South Region, Sales Team | Sales Strategy |
| user-005 | Vikram Singh | vikram.singh@company.com | Insurance Team | IL Hindi |
| user-006 | Ananya Iyer | ananya.iyer@company.com | Sales Team | Sales Strategy |
| user-007 | Karthik Reddy | karthik.reddy@company.com | Product Training | Product Dashboard |
| user-008 | Neha Gupta | neha.gupta@company.com | North Region, Product Training | Product Dashboard |

## Mock Groups

| Group ID | Name | Description | Members |
|----------|------|-------------|---------|
| group-001 | North Region | Agents in North India | 3 users |
| group-002 | South Region | Agents in South India | 2 users |
| group-003 | Insurance Team | Insurance specialists | 3 users |
| group-004 | Sales Team | Sales team members | 3 users |
| group-005 | Product Training | Training participants | 2 users |

## Template Assignments

### Template 1: IL Hindi (tmpl-001)
- **Assigned Users**: Rajesh Kumar, Priya Sharma, Vikram Singh
- **Assigned Groups**: Insurance Team
- **Total Access**: All insurance team members

### Template 2: Product Dashboard (tmpl-002)
- **Assigned Users**: Karthik Reddy
- **Assigned Groups**: Product Training
- **Total Access**: All product training participants

### Template 3: Sales Strategy (tmpl-003)
- **Assigned Users**: Amit Patel, Sneha Desai
- **Assigned Groups**: Sales Team
- **Total Access**: All sales team members

## Usage

### For Admins

#### Access Template Management
Navigate to `/admin/templates` to manage template publishing.

#### Publish a Template
1. Click the **"Publish"** button on any template card
2. Select users and/or groups to publish to
3. Click **"Publish Template"**

#### View Current Assignments
Each template card shows:
- Number of users assigned
- Number of groups assigned
- "Not published to anyone" if no assignments

### For Agents (Partners)

#### View Available Templates
Navigate to `/partner/templates` to see templates published to you.

#### Switch User (Testing)
Click the user switcher in the header to test different user perspectives.

#### Use a Template
1. Click **"Use Template"** on any available template
2. Fill in personalization fields
3. Generate and share the personalized video link

## API Endpoints

### Admin Endpoints

#### Get All Templates
```
GET /api/kpoint/admin/templates
```
Returns all templates without filtering.

#### Get All Users
```
GET /api/kpoint/admin/users
```
Returns all agent users.

#### Get All Groups
```
GET /api/kpoint/admin/groups
```
Returns all groups.

#### Get Template Assignments
```
GET /api/kpoint/admin/templates/:id/assignments
```
Returns users and groups assigned to a specific template.

#### Publish Template
```
POST /api/kpoint/admin/templates/:id/publish
```
Body:
```json
{
  "user_ids": ["user-001", "user-002"],
  "group_ids": ["group-003"]
}
```

### Partner Endpoints

#### Get User's Templates
```
GET /api/kpoint/partner
```
Returns templates published to the current user (filtered).

#### Get Current User
```
GET /api/kpoint/user/current
```
Returns the currently logged-in user.

#### Switch User (Mock Mode Only)
```
POST /api/kpoint/user/switch
```
Body:
```json
{
  "user_id": "user-001"
}
```

## File Structure

```
lib/kpoint/
├── users-mock-data.ts         # User/group data and filtering logic
├── mock-data.ts                # Template mock data
└── partner.ts                  # Partner API with filtering

components/
├── admin/
│   ├── admin-template-card.tsx        # Template card for admin view
│   └── publish-template-modal.tsx     # Modal for publishing templates
└── partner/
    ├── template-card.tsx              # Template card for partner view (with thumbnail)
    └── user-switcher.tsx              # User switcher component

app/
├── (admin)/admin/templates/page.tsx   # Admin template management page
├── (partner)/partner/templates/page.tsx # Partner templates page
└── api/kpoint/
    ├── admin/
    │   ├── templates/route.ts
    │   ├── templates/[id]/assignments/route.ts
    │   ├── templates/[id]/publish/route.ts
    │   ├── users/route.ts
    │   └── groups/route.ts
    ├── partner/route.ts
    └── user/
        ├── current/route.ts
        └── switch/route.ts
```

## Access Control Logic

### How It Works

1. **Admin publishes template** to users/groups via `/admin/templates`
2. **Assignment is stored** in `mockTemplateAssignments`
3. **Partner requests templates** via `/partner/templates`
4. **System filters templates** based on:
   - Direct user assignments
   - Group memberships
5. **Only matching templates** are returned to the partner

### Example Scenario

**User**: Rajesh Kumar (user-001)
**Groups**: North Region, Insurance Team

**Templates Accessible**:
- IL Hindi (directly assigned)
- IL Hindi (via Insurance Team group)
- Any other templates assigned to North Region or Insurance Team

### Filtering Code
```typescript
export function getTemplatesForUser(userId: string): string[] {
  const user = getMockUserById(userId);
  if (!user) return [];

  const templateIds = new Set<string>();

  mockTemplateAssignments.forEach((assignment) => {
    // Check direct assignment
    if (assignment.assigned_to.user_ids.includes(userId)) {
      templateIds.add(assignment.template_id);
    }

    // Check group membership
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

## Testing

### Test Scenario 1: Rajesh Kumar
1. Switch to Rajesh Kumar using user switcher
2. Navigate to `/partner/templates`
3. **Expected**: See only IL Hindi template

### Test Scenario 2: Karthik Reddy
1. Switch to Karthik Reddy
2. Navigate to `/partner/templates`
3. **Expected**: See only Product Dashboard template

### Test Scenario 3: Admin Publishing
1. Navigate to `/admin/templates`
2. Click Publish on any template
3. Select different combinations of users/groups
4. Switch to those users in partner view
5. **Expected**: Templates appear/disappear based on assignments

## Template Display

### Partner View (One Per Row)
- **Layout**: Horizontal card with thumbnail on left
- **Thumbnail**: 192px wide (sm) / full width (mobile)
- **Content**: Title, video name, fields, action button
- **Spacing**: Stacked vertically with 16px gap

### Admin View (One Per Row)
- **Layout**: Horizontal card with larger thumbnail
- **Thumbnail**: 256px wide (lg) / full width (mobile)
- **Content**: Title, fields, publish button, assignment status
- **Status**: Shows user/group counts

## Mock Mode Requirements

To use this system in mock mode:

```env
KPOINT_MOCK_MODE=true
```

All API calls will use mock data and filtering logic instead of real backend.

## Future Enhancements

- [ ] Real-time updates when assignments change
- [ ] Bulk publishing to multiple templates
- [ ] Template categories and filtering
- [ ] Assignment history and audit log
- [ ] Email notifications when templates are published
- [ ] Group hierarchy support
- [ ] Role-based access control (RBAC)
- [ ] Template expiration dates
- [ ] Usage analytics per template/user

## Notes

- User switching only works in mock mode
- Default user is Rajesh Kumar (user-001)
- All data resets on server restart (in-memory mock data)
- Assignments are stored in `mockTemplateAssignments` array
- Filtering happens server-side in `/api/kpoint/partner`
- Thumbnails load from KPOINT CDN URLs
- Template IDs match video package IDs from mock-data.ts
