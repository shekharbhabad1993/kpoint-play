/**
 * Mock User and Group Data for Template Publishing
 */

// Helper function to simulate API delay
export function simulateDelay(ms: number = 500): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export interface MockUser {
  id: string;
  name: string;
  email: string;
  role: "admin" | "agent";
  group_ids: string[];
  avatar?: string;
  status: "active" | "inactive";
  created_at: string;
}

export interface MockGroup {
  id: string;
  name: string;
  description: string;
  user_count: number;
  created_at: string;
}

export interface TemplateAssignment {
  template_id: string;
  assigned_to: {
    user_ids: string[];
    group_ids: string[];
  };
  published_by: string;
  published_at: string;
}

// Mock Users (Agents)
export const mockUsers: MockUser[] = [
  {
    id: "user-001",
    name: "Rajesh Kumar",
    email: "rajesh.kumar@company.com",
    role: "agent",
    group_ids: ["group-001", "group-003"], // North Region, Insurance Team
    avatar: "RK",
    status: "active",
    created_at: "2025-01-15T10:00:00+05:30",
  },
  {
    id: "user-002",
    name: "Priya Sharma",
    email: "priya.sharma@company.com",
    role: "agent",
    group_ids: ["group-002", "group-003"], // South Region, Insurance Team
    avatar: "PS",
    status: "active",
    created_at: "2025-01-20T14:30:00+05:30",
  },
  {
    id: "user-003",
    name: "Amit Patel",
    email: "amit.patel@company.com",
    role: "agent",
    group_ids: ["group-001", "group-004"], // North Region, Sales Team
    avatar: "AP",
    status: "active",
    created_at: "2025-02-01T09:15:00+05:30",
  },
  {
    id: "user-004",
    name: "Sneha Desai",
    email: "sneha.desai@company.com",
    role: "agent",
    group_ids: ["group-002", "group-004"], // South Region, Sales Team
    avatar: "SD",
    status: "active",
    created_at: "2025-02-05T11:45:00+05:30",
  },
  {
    id: "user-005",
    name: "Vikram Singh",
    email: "vikram.singh@company.com",
    role: "agent",
    group_ids: ["group-003"], // Insurance Team Only
    avatar: "VS",
    status: "active",
    created_at: "2025-02-10T16:20:00+05:30",
  },
  {
    id: "user-006",
    name: "Ananya Iyer",
    email: "ananya.iyer@company.com",
    role: "agent",
    group_ids: ["group-004"], // Sales Team Only
    avatar: "AI",
    status: "active",
    created_at: "2025-02-12T08:30:00+05:30",
  },
  {
    id: "user-007",
    name: "Karthik Reddy",
    email: "karthik.reddy@company.com",
    role: "agent",
    group_ids: ["group-005"], // Product Training
    avatar: "KR",
    status: "active",
    created_at: "2025-02-15T13:00:00+05:30",
  },
  {
    id: "user-008",
    name: "Neha Gupta",
    email: "neha.gupta@company.com",
    role: "agent",
    group_ids: ["group-001", "group-005"], // North Region, Product Training
    avatar: "NG",
    status: "active",
    created_at: "2025-02-18T10:45:00+05:30",
  },
];

// Mock Groups
export const mockGroups: MockGroup[] = [
  {
    id: "group-001",
    name: "North Region",
    description: "Agents operating in North India region",
    user_count: 3,
    created_at: "2025-01-10T10:00:00+05:30",
  },
  {
    id: "group-002",
    name: "South Region",
    description: "Agents operating in South India region",
    user_count: 2,
    created_at: "2025-01-10T10:00:00+05:30",
  },
  {
    id: "group-003",
    name: "Insurance Team",
    description: "Specialists in insurance products",
    user_count: 3,
    created_at: "2025-01-12T11:30:00+05:30",
  },
  {
    id: "group-004",
    name: "Sales Team",
    description: "Sales and business development team",
    user_count: 3,
    created_at: "2025-01-12T11:30:00+05:30",
  },
  {
    id: "group-005",
    name: "Product Training",
    description: "Team members undergoing product training",
    user_count: 2,
    created_at: "2025-02-01T09:00:00+05:30",
  },
];

// Mock Template Assignments
export const mockTemplateAssignments: TemplateAssignment[] = [
  {
    template_id: "tmpl-52eutbewxdcu", // IL Hindi Template (extracted from video gcc-5f2ec840-e32c-4184-bf3e-af37ca12d0d7)
    assigned_to: {
      user_ids: ["user-001", "user-002", "user-005"], // Rajesh, Priya, Vikram
      group_ids: ["group-003"], // Insurance Team
    },
    published_by: "admin-001",
    published_at: "2026-01-12T12:30:00+05:30",
  },
  {
    template_id: "tmpl-002", // Product Dashboard Quiz Template
    assigned_to: {
      user_ids: ["user-007"], // Karthik
      group_ids: ["group-005"], // Product Training
    },
    published_by: "admin-001",
    published_at: "2026-01-15T10:00:00+05:30",
  },
  {
    template_id: "tmpl-003", // Sales Strategy Poll Template
    assigned_to: {
      user_ids: ["user-003", "user-004"], // Amit, Sneha
      group_ids: ["group-004"], // Sales Team
    },
    published_by: "admin-001",
    published_at: "2026-02-01T15:00:00+05:30",
  },
];

// Helper Functions

/**
 * Get all users
 */
export function getMockUsers(): MockUser[] {
  return mockUsers;
}

/**
 * Get user by ID
 */
export function getMockUserById(userId: string): MockUser | undefined {
  return mockUsers.find((user) => user.id === userId);
}

/**
 * Get users by group ID
 */
export function getMockUsersByGroupId(groupId: string): MockUser[] {
  return mockUsers.filter((user) => user.group_ids.includes(groupId));
}

/**
 * Get all groups
 */
export function getMockGroups(): MockGroup[] {
  return mockGroups;
}

/**
 * Get group by ID
 */
export function getMockGroupById(groupId: string): MockGroup | undefined {
  return mockGroups.find((group) => group.id === groupId);
}

/**
 * Get templates assigned to a specific user
 * This checks both direct user assignments and group memberships
 */
export function getTemplatesForUser(userId: string): string[] {
  const user = getMockUserById(userId);
  if (!user) return [];

  const templateIds = new Set<string>();

  mockTemplateAssignments.forEach((assignment) => {
    // Check if directly assigned to user
    if (assignment.assigned_to.user_ids.includes(userId)) {
      templateIds.add(assignment.template_id);
    }

    // Check if user's groups are assigned
    const hasGroupAccess = user.group_ids.some((groupId) =>
      assignment.assigned_to.group_ids.includes(groupId)
    );

    if (hasGroupAccess) {
      templateIds.add(assignment.template_id);
    }
  });

  return Array.from(templateIds);
}

/**
 * Get assignment details for a template
 */
export function getTemplateAssignment(
  templateId: string
): TemplateAssignment | undefined {
  return mockTemplateAssignments.find(
    (assignment) => assignment.template_id === templateId
  );
}

/**
 * Assign template to users/groups (for mock mode)
 */
export function assignTemplate(params: {
  templateId: string;
  userIds: string[];
  groupIds: string[];
  publishedBy: string;
}): TemplateAssignment {
  const { templateId, userIds, groupIds, publishedBy } = params;

  // Remove existing assignment if any
  const existingIndex = mockTemplateAssignments.findIndex(
    (a) => a.template_id === templateId
  );

  const newAssignment: TemplateAssignment = {
    template_id: templateId,
    assigned_to: {
      user_ids: userIds,
      group_ids: groupIds,
    },
    published_by: publishedBy,
    published_at: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    mockTemplateAssignments[existingIndex] = newAssignment;
  } else {
    mockTemplateAssignments.push(newAssignment);
  }

  return newAssignment;
}

/**
 * Get users and groups assigned to a template
 */
export function getAssignedUsersAndGroups(templateId: string): {
  users: MockUser[];
  groups: MockGroup[];
  assignment: TemplateAssignment | undefined;
} {
  const assignment = getTemplateAssignment(templateId);

  if (!assignment) {
    return { users: [], groups: [], assignment: undefined };
  }

  const users = assignment.assigned_to.user_ids
    .map((id) => getMockUserById(id))
    .filter((u): u is MockUser => u !== undefined);

  const groups = assignment.assigned_to.group_ids
    .map((id) => getMockGroupById(id))
    .filter((g): g is MockGroup => g !== undefined);

  return { users, groups, assignment };
}

/**
 * Get current logged-in user (mock)
 * In a real app, this would come from authentication
 */
let currentMockUserId: string | null = "user-001"; // Default to Rajesh Kumar

export function setCurrentMockUser(userId: string | null) {
  currentMockUserId = userId;
}

export function getCurrentMockUser(): MockUser | null {
  if (!currentMockUserId) return null;
  return getMockUserById(currentMockUserId) || null;
}

/**
 * Get templates available to current user
 */
export function getCurrentUserTemplates(): string[] {
  if (!currentMockUserId) return [];
  return getTemplatesForUser(currentMockUserId);
}
