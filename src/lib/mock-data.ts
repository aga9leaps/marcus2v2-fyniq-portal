/**
 * MOCK DATA FOR FYNIQ DOCUMENT PORTAL
 * Phase 1: UI/UX finalization with realistic sample data
 */

export type DocumentStatus =
  | 'pending'
  | 'uploaded'
  | 'under_review'
  | 'approved'
  | 'rejected'
  | 'resubmit_requested';

export type ApplicationStatus =
  | 'document_collection'
  | 'under_review'
  | 'approved'
  | 'additional_info_needed'
  | 'on_hold'
  | 'withdrawn';

export interface Document {
  id: string;
  name: string;
  category: string;
  status: DocumentStatus;
  uploadedDate?: string;
  reviewedDate?: string;
  fileSize?: string;
  fileType?: string;
  notes?: string;
  required: boolean;
}

export interface ActivityLog {
  id: string;
  timestamp: string;
  type: 'document_uploaded' | 'status_change' | 'comment_added' | 'document_approved' | 'document_rejected';
  user: string;
  description: string;
}

export interface Message {
  id: string;
  from: string;
  timestamp: string;
  subject: string;
  body: string;
  read: boolean;
}

export interface LoanApplication {
  id: string;
  propertyAddress: string;
  loanAmount: string;
  loanType: 'Purchase' | 'Refinance' | 'Bridge Loan' | 'Construction';
  status: ApplicationStatus;
  submittedDate: string;
  lastUpdated: string;
  documentsRequired: number;
  documentsSubmitted: number;
  documentsApproved: number;
  completionPercentage: number;
  documents: Document[];
  activity: ActivityLog[];
  messages: Message[];
  loanOfficer: {
    name: string;
    email: string;
    phone: string;
  };
}

// Mock Users
export const MOCK_USER = {
  name: 'Sarah Johnson',
  email: 'sarah.johnson@example.com',
  company: 'Horizon Property Group LLC',
};

// Mock Loan Applications
export const MOCK_APPLICATIONS: LoanApplication[] = [
  {
    id: 'APP-2025-001',
    propertyAddress: '1234 Market Street, San Francisco, CA 94103',
    loanAmount: '$4,500,000',
    loanType: 'Purchase',
    status: 'document_collection',
    submittedDate: '2025-10-15',
    lastUpdated: '2025-10-28',
    documentsRequired: 12,
    documentsSubmitted: 8,
    documentsApproved: 5,
    completionPercentage: 67,
    loanOfficer: {
      name: 'Michael Chen',
      email: 'michael.chen@encorefinance.com',
      phone: '(415) 555-0123',
    },
    documents: [
      {
        id: 'DOC-001',
        name: 'Purchase Agreement',
        category: 'Property Documents',
        status: 'approved',
        uploadedDate: '2025-10-16',
        reviewedDate: '2025-10-18',
        fileSize: '2.4 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-002',
        name: 'Property Appraisal',
        category: 'Property Documents',
        status: 'approved',
        uploadedDate: '2025-10-20',
        reviewedDate: '2025-10-22',
        fileSize: '5.1 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-003',
        name: 'Environmental Site Assessment',
        category: 'Property Documents',
        status: 'under_review',
        uploadedDate: '2025-10-25',
        fileSize: '12.3 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-004',
        name: 'Operating Statements (Last 3 Years)',
        category: 'Financial Documents',
        status: 'approved',
        uploadedDate: '2025-10-17',
        reviewedDate: '2025-10-19',
        fileSize: '1.8 MB',
        fileType: 'XLSX',
        required: true,
      },
      {
        id: 'DOC-005',
        name: 'Rent Roll',
        category: 'Financial Documents',
        status: 'approved',
        uploadedDate: '2025-10-18',
        reviewedDate: '2025-10-20',
        fileSize: '856 KB',
        fileType: 'XLSX',
        required: true,
      },
      {
        id: 'DOC-006',
        name: 'Personal Financial Statement',
        category: 'Financial Documents',
        status: 'uploaded',
        uploadedDate: '2025-10-28',
        fileSize: '1.2 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-007',
        name: 'Tax Returns (Last 2 Years)',
        category: 'Financial Documents',
        status: 'uploaded',
        uploadedDate: '2025-10-27',
        fileSize: '3.5 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-008',
        name: 'Bank Statements (Last 3 Months)',
        category: 'Financial Documents',
        status: 'uploaded',
        uploadedDate: '2025-10-26',
        fileSize: '2.1 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-009',
        name: 'Insurance Certificate',
        category: 'Insurance Documents',
        status: 'pending',
        required: true,
      },
      {
        id: 'DOC-010',
        name: 'Title Report',
        category: 'Legal Documents',
        status: 'pending',
        required: true,
      },
      {
        id: 'DOC-011',
        name: 'Entity Documents (LLC Operating Agreement)',
        category: 'Legal Documents',
        status: 'pending',
        required: true,
      },
      {
        id: 'DOC-012',
        name: 'Personal Guarantee',
        category: 'Legal Documents',
        status: 'pending',
        required: false,
      },
    ],
    activity: [
      {
        id: 'ACT-001',
        timestamp: '2025-10-28T10:30:00Z',
        type: 'document_uploaded',
        user: 'Sarah Johnson',
        description: 'Uploaded Personal Financial Statement',
      },
      {
        id: 'ACT-002',
        timestamp: '2025-10-27T14:15:00Z',
        type: 'document_uploaded',
        user: 'Sarah Johnson',
        description: 'Uploaded Tax Returns (Last 2 Years)',
      },
      {
        id: 'ACT-003',
        timestamp: '2025-10-26T09:45:00Z',
        type: 'document_uploaded',
        user: 'Sarah Johnson',
        description: 'Uploaded Bank Statements',
      },
      {
        id: 'ACT-004',
        timestamp: '2025-10-25T16:20:00Z',
        type: 'document_uploaded',
        user: 'Sarah Johnson',
        description: 'Uploaded Environmental Site Assessment',
      },
      {
        id: 'ACT-005',
        timestamp: '2025-10-22T11:00:00Z',
        type: 'document_approved',
        user: 'Michael Chen',
        description: 'Approved Property Appraisal',
      },
    ],
    messages: [
      {
        id: 'MSG-001',
        from: 'Michael Chen',
        timestamp: '2025-10-28T08:00:00Z',
        subject: 'Great progress on your application!',
        body: 'Hi Sarah, we\'ve reviewed the recently uploaded financial documents. Everything looks good so far. Please remember to upload the Insurance Certificate and Title Report by Nov 5 to keep things moving smoothly.',
        read: false,
      },
      {
        id: 'MSG-002',
        from: 'Michael Chen',
        timestamp: '2025-10-22T13:30:00Z',
        subject: 'Property Appraisal Approved',
        body: 'The property appraisal has been reviewed and approved. The valuation aligns with our expectations.',
        read: true,
      },
    ],
  },
  {
    id: 'APP-2025-002',
    propertyAddress: '5678 Oak Avenue, Austin, TX 78701',
    loanAmount: '$2,800,000',
    loanType: 'Refinance',
    status: 'under_review',
    submittedDate: '2025-09-20',
    lastUpdated: '2025-10-25',
    documentsRequired: 10,
    documentsSubmitted: 10,
    documentsApproved: 10,
    completionPercentage: 100,
    loanOfficer: {
      name: 'Emily Rodriguez',
      email: 'emily.rodriguez@encorefinance.com',
      phone: '(512) 555-0456',
    },
    documents: [
      {
        id: 'DOC-201',
        name: 'Current Loan Statement',
        category: 'Financial Documents',
        status: 'approved',
        uploadedDate: '2025-09-21',
        reviewedDate: '2025-09-23',
        fileSize: '1.1 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-202',
        name: 'Property Appraisal',
        category: 'Property Documents',
        status: 'approved',
        uploadedDate: '2025-09-25',
        reviewedDate: '2025-09-28',
        fileSize: '4.2 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-203',
        name: 'Operating Statements',
        category: 'Financial Documents',
        status: 'approved',
        uploadedDate: '2025-09-22',
        reviewedDate: '2025-09-24',
        fileSize: '2.3 MB',
        fileType: 'XLSX',
        required: true,
      },
      {
        id: 'DOC-204',
        name: 'Tax Returns',
        category: 'Financial Documents',
        status: 'approved',
        uploadedDate: '2025-09-23',
        reviewedDate: '2025-09-25',
        fileSize: '3.1 MB',
        fileType: 'PDF',
        required: true,
      },
    ],
    activity: [
      {
        id: 'ACT-201',
        timestamp: '2025-10-25T15:00:00Z',
        type: 'status_change',
        user: 'Emily Rodriguez',
        description: 'Application moved to Underwriting Review',
      },
      {
        id: 'ACT-202',
        timestamp: '2025-10-20T10:30:00Z',
        type: 'document_approved',
        user: 'Emily Rodriguez',
        description: 'All documents approved',
      },
    ],
    messages: [
      {
        id: 'MSG-201',
        from: 'Emily Rodriguez',
        timestamp: '2025-10-25T15:05:00Z',
        subject: 'Application in Final Review',
        body: 'Congratulations! All your documents have been approved and your application is now in final underwriting review. We expect a decision within 5-7 business days.',
        read: false,
      },
    ],
  },
  {
    id: 'APP-2025-003',
    propertyAddress: '9012 Pine Boulevard, Denver, CO 80202',
    loanAmount: '$6,200,000',
    loanType: 'Bridge Loan',
    status: 'additional_info_needed',
    submittedDate: '2025-10-01',
    lastUpdated: '2025-10-27',
    documentsRequired: 14,
    documentsSubmitted: 11,
    documentsApproved: 8,
    completionPercentage: 57,
    loanOfficer: {
      name: 'David Kim',
      email: 'david.kim@encorefinance.com',
      phone: '(303) 555-0789',
    },
    documents: [
      {
        id: 'DOC-301',
        name: 'Exit Strategy Documentation',
        category: 'Property Documents',
        status: 'resubmit_requested',
        uploadedDate: '2025-10-05',
        reviewedDate: '2025-10-27',
        fileSize: '1.5 MB',
        fileType: 'PDF',
        notes: 'Please provide more detail on the refinancing timeline and backup exit strategies.',
        required: true,
      },
      {
        id: 'DOC-302',
        name: 'Property Condition Report',
        category: 'Property Documents',
        status: 'approved',
        uploadedDate: '2025-10-08',
        reviewedDate: '2025-10-10',
        fileSize: '8.7 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-303',
        name: 'Renovation Budget',
        category: 'Financial Documents',
        status: 'rejected',
        uploadedDate: '2025-10-12',
        reviewedDate: '2025-10-27',
        fileSize: '950 KB',
        fileType: 'XLSX',
        notes: 'Budget appears incomplete. Please include detailed line items for all renovation work and contractor quotes.',
        required: true,
      },
    ],
    activity: [
      {
        id: 'ACT-301',
        timestamp: '2025-10-27T14:20:00Z',
        type: 'status_change',
        user: 'David Kim',
        description: 'Additional information requested',
      },
      {
        id: 'ACT-302',
        timestamp: '2025-10-27T14:15:00Z',
        type: 'document_rejected',
        user: 'David Kim',
        description: 'Renovation Budget rejected - needs more detail',
      },
    ],
    messages: [
      {
        id: 'MSG-301',
        from: 'David Kim',
        timestamp: '2025-10-27T14:30:00Z',
        subject: 'Additional Documentation Needed',
        body: 'Hi there, I\'ve reviewed your bridge loan application. We need some additional information on the exit strategy and a more detailed renovation budget. Please see the notes on the rejected documents for specific requirements. Let me know if you have any questions!',
        read: false,
      },
    ],
  },
  {
    id: 'APP-2024-089',
    propertyAddress: '3456 Commerce Drive, Seattle, WA 98101',
    loanAmount: '$8,900,000',
    loanType: 'Construction',
    status: 'approved',
    submittedDate: '2024-08-10',
    lastUpdated: '2024-10-15',
    documentsRequired: 16,
    documentsSubmitted: 16,
    documentsApproved: 16,
    completionPercentage: 100,
    loanOfficer: {
      name: 'Jennifer Lee',
      email: 'jennifer.lee@encorefinance.com',
      phone: '(206) 555-0321',
    },
    documents: [
      {
        id: 'DOC-401',
        name: 'Construction Plans',
        category: 'Property Documents',
        status: 'approved',
        uploadedDate: '2024-08-12',
        reviewedDate: '2024-08-20',
        fileSize: '25.4 MB',
        fileType: 'PDF',
        required: true,
      },
      {
        id: 'DOC-402',
        name: 'General Contractor Agreement',
        category: 'Legal Documents',
        status: 'approved',
        uploadedDate: '2024-08-15',
        reviewedDate: '2024-08-22',
        fileSize: '1.9 MB',
        fileType: 'PDF',
        required: true,
      },
    ],
    activity: [
      {
        id: 'ACT-401',
        timestamp: '2024-10-15T16:00:00Z',
        type: 'status_change',
        user: 'Jennifer Lee',
        description: 'Loan approved and funded',
      },
    ],
    messages: [
      {
        id: 'MSG-401',
        from: 'Jennifer Lee',
        timestamp: '2024-10-15T16:10:00Z',
        subject: 'Congratulations! Loan Approved',
        body: 'Great news! Your construction loan has been approved and funded. The funds have been wired to the escrow account. Construction can begin per the approved timeline. Best of luck with the project!',
        read: true,
      },
    ],
  },
];

// Helper functions
export function getApplicationById(id: string): LoanApplication | undefined {
  return MOCK_APPLICATIONS.find(app => app.id === id);
}

export function getApplicationsByStatus(status: ApplicationStatus): LoanApplication[] {
  return MOCK_APPLICATIONS.filter(app => app.status === status);
}

export function getDocumentsByStatus(applicationId: string, status: DocumentStatus): Document[] {
  const application = getApplicationById(applicationId);
  return application?.documents.filter(doc => doc.status === status) || [];
}

export function getUnreadMessages(applicationId: string): Message[] {
  const application = getApplicationById(applicationId);
  return application?.messages.filter(msg => !msg.read) || [];
}

export function getRecentActivity(applicationId: string, limit: number = 5): ActivityLog[] {
  const application = getApplicationById(applicationId);
  return application?.activity.slice(0, limit) || [];
}

// Status badge color mapping
export function getStatusColor(status: ApplicationStatus | DocumentStatus): string {
  const colorMap: Record<string, string> = {
    // Application statuses
    'document_collection': 'warning',
    'under_review': 'info',
    'approved': 'success',
    'additional_info_needed': 'warning',
    'on_hold': 'secondary',
    'withdrawn': 'secondary',

    // Document statuses
    'pending': 'secondary',
    'uploaded': 'info',
    'under_review': 'info',
    'approved': 'success',
    'rejected': 'error',
    'resubmit_requested': 'warning',
  };

  return colorMap[status] || 'secondary';
}

// Format status for display
export function formatStatus(status: ApplicationStatus | DocumentStatus): string {
  return status
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Mock authentication function
export function mockLogin(email: string, password: string): Promise<{ success: boolean; user?: typeof MOCK_USER; error?: string }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (email === MOCK_USER.email && password === 'demo123') {
        resolve({ success: true, user: MOCK_USER });
      } else {
        resolve({ success: false, error: 'Invalid email or password' });
      }
    }, 1000); // Simulate network delay
  });
}
