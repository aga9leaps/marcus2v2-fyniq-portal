# PROJECT BRIEF - Customer Document Portal

**Version:** 1.0  
**Date:** January 16, 2025  
**Purpose:** Loan application document management portal for commercial real estate borrowers

---

## HOW TO USE THIS TEMPLATE

1. ✅ **Copy this template** for each new project → Save as `PROJECT_BRIEF.md` in project root
2. ✅ **Select your tech stack preset** (Next.js or Python FastAPI) in the "Standard Tech Stack" section
3. ✅ **Fill in all required sections** - The more detail, the better the AI can help
4. ✅ **Use the AI prompt guide** at the bottom to generate detailed requirements
5. ✅ **Review and approve** before starting development

**Key Benefit:** By selecting a predefined tech stack, you skip the "what framework should we use?" discussion and start building faster.

---

## STANDARD TECH STACK PRESETS

### Selected Stack: Custom Stack (Separated Frontend + Backend)

**Justification for Custom Stack:**

The standard Next.js full-stack doesn't fit because:
1. **Future AI Integration:** Backend will integrate ClearBinder AI document processing (Phase 2)
2. **Independent Scaling:** Document uploads and processing are resource-intensive, need separate scaling
3. **Multiple Frontends:** Planning mobile app in Phase 2, need API-first architecture
4. **Team Expertise:** Team has strong Node.js + Express background
5. **Flexibility:** Easier to add Python microservices later for ML/AI features

**Custom Tech Stack:**

**Frontend:**
- Framework: Next.js 14 (App Router), React 18, TypeScript
- Styling: Tailwind CSS + shadcn/ui (Anthropic design system)
- State: React Context + TanStack Query
- Forms: React Hook Form + Zod validation
- File Upload: react-dropzone + custom progress
- Deployment: Vercel

**Backend:**
- Framework: Node.js + Express.js + TypeScript
- Validation: Joi or Zod
- ORM: Prisma
- Authentication: JWT + bcrypt
- API Style: RESTful JSON
- Deployment: Railway.app or Render

**Database:**
- Primary: PostgreSQL 15+ (Supabase or Railway)
- Cache: Redis 7+ (Upstash)

**Storage:**
- Files: AWS S3 (or Cloudflare R2)
- Access: Pre-signed URLs

**Infrastructure:**
- CI/CD: GitHub Actions
- Monitoring: Sentry (errors) + BetterStack (uptime)
- Email: SendGrid or AWS SES
- Analytics: PostHog or Mixpanel

---

## PROJECT OVERVIEW

### Project Name
**Customer Document Portal** (also: Borrower Portal, Loan Document Hub)

### Project Description

The Customer Document Portal is a secure, web-based platform that enables commercial real estate loan applicants to upload, manage, and track documents throughout their loan application process. 

**Problem it solves:** Currently, borrowers email documents back and forth with loan officers, leading to lost files, missed deadlines, confusion about what's been submitted, and operational inefficiency. Loan processors spend hours managing unstructured document submissions across email threads, Dropbox folders, and shared drives.

**Solution:** The portal brings structure, transparency, and efficiency to document collection. Borrowers get a centralized dashboard showing all their loan applications, clear document requirements for each application, upload status tracking, and notifications when documents are reviewed. This eliminates the back-and-forth email chaos and gives both borrowers and loan officers visibility into the process.

**Who benefits:**
- **Borrowers** get clarity on what's needed, easy upload process, and status transparency
- **Loan officers** save time managing documents, reduce email volume by 80%, and can focus on underwriting
- **Encore Finance** accelerates loan processing, improves customer experience, and scales operations

### Target Users

**Primary Users:** Commercial real estate borrowers/applicants
- Real estate investors and developers
- Property owners seeking financing (multifamily, office, retail, industrial)
- Business owners applying for CRE loans
- Typically managing 1-5 active loan applications simultaneously
- Need to submit 10-20 documents per application
- Age range: 35-65, mix of tech-savvy and traditional users
- Access from office computers, tablets, and mobile devices
- User motivation: Get loan approved faster, avoid missing deadlines
- Pain points: Confusion about requirements, lost emails, unclear status

**Secondary Users (Phase 2):** Loan officers and processors at Encore Finance
- Review and approve/reject documents
- Request additional documentation
- Communicate with borrowers
- Track document collection progress across multiple deals

### Success Criteria

**Phase 1 - Beta (Weeks 1-12):**
- ✅ 10+ beta users successfully complete full document upload flow
- ✅ Average document upload time: <2 minutes (vs. 10+ minutes via email)
- ✅ 80%+ of users upload at least one document within 24 hours of registration
- ✅ 99.5%+ uptime during beta period
- ✅ <2 second page load time (P95)
- ✅ Zero critical security vulnerabilities
- ✅ Mobile responsive (works on tablet/phone)
- ✅ User satisfaction: 4/5+ rating
- ✅ <5% support ticket rate

**Phase 2 - Production (Months 3-6):**
- 100+ active borrowers using portal
- 500+ applications created
- 2,000+ documents uploaded
- 80% reduction in document-related email volume
- 50% reduction in time from application to document completion
- 90%+ document submission accuracy (correct types)
- $50K+ saved in loan officer operational costs
- 99.5%+ uptime SLA

**Phase 3 - Scale (Months 7-12):**
- 500+ active borrowers
- 2,000+ applications
- 10,000+ documents
- Integration with ClearBinder AI (auto-classification)
- Integration with loan management system (LOS)
- White-label capability for other lenders
- Net Promoter Score (NPS): >50

---

## STAGE SELECTION

### Initial Stage
- [ ] **MVP** - Prove concept (1-3 developers, <100 users, manual testing, basic auth)
- [x] **Startup** - Add stability (3-10 developers, 100-1K users, 60% test coverage, JWT + rate limiting)
- [ ] **Growth** - Production scale (10-50 developers, 1K-10K users, 80% coverage, RBAC + audit logs)
- [ ] **Enterprise** - Full compliance (50+ developers, 10K+ users, SOC2, chaos engineering)

### Justification

Starting at **Startup stage** because:

1. **Not MVP:** This goes to production immediately with real customers, not internal testing. We need proper security (JWT, encryption), monitoring (Sentry), and infrastructure (CI/CD, staging) from day one.

2. **Team size:** 2-3 full-stack developers for 8 weeks

3. **User scale:** Expecting 50-100 borrowers in first 3 months, scaling to 500+ in year 1

4. **Security requirements:** Handling sensitive financial documents requires:
   - Proper authentication and authorization
   - Encrypted file storage
   - Audit logging
   - Rate limiting and protection against attacks

5. **Business critical:** Direct revenue impact - poor experience loses customers and deals

6. **Integration needs:** Must send email notifications, connect to S3, integrate with future systems

7. **Compliance:** Financial services have regulatory obligations (GDPR, data retention policies)

**Why not MVP:** MVP skips security, testing, and monitoring we need for financial documents. Too risky.

**Why not Growth:** Don't need microservices, RBAC complexity, or advanced infrastructure yet. Can scale up in 6-12 months.

### Expected Progression

**Phase 1 - Startup (Weeks 1-8):**
- Build core features with Startup-level quality
- 60% test coverage
- CI/CD with staging and production
- Sentry error tracking
- JWT authentication + rate limiting
- PostgreSQL + Redis + S3
- Email notifications
- Beta launch with 10-15 borrowers

**Phase 2 - Maintain Startup (Months 3-6):**
- Add loan officer admin interface
- Document approval workflow
- In-app messaging
- Mobile app (PWA or React Native)
- Scale to 100+ borrowers
- Still Startup stage (same quality bar)

**Phase 3 - Transition to Growth (Months 7-12):**
- 80% test coverage
- RBAC with roles and permissions
- Advanced audit logs
- Integration with ClearBinder AI
- Integration with LOS
- Performance optimization
- Scale to 500+ borrowers
- Advanced monitoring and alerting

**Year 2+ - Growth/Enterprise:**
- E-signature integration
- Multi-lender white-label
- SOC2 compliance
- API for third parties
- Mobile native apps
- Scale to 1,000+ borrowers

---

## CORE FUNCTIONALITY

### Must-Have Features (Phase 1 MVP)

**1. User Authentication & Account Management**
- User registration with email verification
- Login with email/password
- Password reset via email link
- "Remember me" option (30-day session)
- User profile management (edit name, email, phone, company)
- Change password
- View login history
- Account deletion (soft delete with 30-day recovery)

**2. Loan Application Management**
- View list of all loan applications (dashboard)
- Create new loan application with form:
  - Property name/address
  - Loan type (bridge, acquisition, refinance, construction)
  - Loan amount
  - Property type (multifamily, office, retail, industrial, mixed-use)
  - Number of units (if applicable)
  - Description
- Save application as draft (continue later)
- Submit application for review
- View application detail page with all information
- Edit application (only if status = draft)
- Delete application
- Filter applications by status
- Search applications by property name or ID
- Sort applications (most recent, oldest, loan amount)

**3. Document Upload & Management**
- View list of required documents per application
- Document categories (predefined):
  - Term Sheet
  - Rent Roll
  - Operating Statement (T-12)
  - Property Condition Assessment (PCA)
  - Appraisal Report
  - Environmental Report (Phase I)
  - Title Report
  - Insurance Certificate
  - Bank Statements
  - Tax Returns
  - Lease Agreements
  - Purchase Agreement
  - Other (with custom description)
- Upload documents with drag-and-drop interface
- Multi-file upload (up to 10 files at once)
- File validation:
  - Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG
  - Max size per file: 10 MB
  - Max total per application: 50 MB
  - Virus scanning (ClamAV or cloud service)
- Real-time upload progress tracking:
  - Individual file progress bars
  - Overall percentage
  - Upload speed and time remaining
  - Cancel upload button
- Document status tracking:
  - Uploaded (green)
  - Under Review (blue)
  - Approved (green checkmark)
  - Rejected (red X with reason)
  - Missing (gray warning)
- View document (PDF in-browser viewer, download others)
- Download document
- Replace document (new version, old one archived)
- Delete document (soft delete)
- Add comments to documents
- View document upload history and versions

**4. Progress Tracking & Status**
- Visual progress bar (X of Y documents uploaded)
- Status badges for each document (color-coded)
- Application-level status (Draft, Submitted, Under Review, etc.)
- Timeline/activity feed showing all actions with timestamps
- Missing document warnings (highlighted in red/warning color)
- Due date indicators (if applicable)

**5. Notifications System**
- Email notifications:
  - Welcome email on registration
  - Email verification
  - Password reset link
  - Document uploaded confirmation
  - Document approved
  - Document rejected (with reason)
  - Additional documents requested
  - Application status change
  - Weekly digest of outstanding items
- In-app notifications:
  - Bell icon with unread count badge
  - Notification panel slides in from right
  - Mark as read/unread
  - Click notification navigates to relevant page

**6. Help & Support**
- FAQ page
- Help documentation
- "Contact Support" button (opens form)
- Support form sends email to support@encore.finance

**7. User Profile & Settings**
- View/edit profile information
- Change password
- View login history (last 10 logins with IP and device)
- Notification preferences (Phase 2)

### Should-Have Features (Phase 2 - Months 3-6)

**1. Loan Officer Admin Interface**
- Separate admin dashboard for loan officers
- View all borrower applications
- Document review workflow (approve/reject with comments)
- Request additional documents from borrowers
- Assign applications to loan officers
- Bulk document download

**2. In-App Messaging**
- Chat/messaging between borrower and loan officer
- Thread-based conversations per application
- Message notifications (email + in-app)
- File attachments in messages

**3. Enhanced Notifications**
- Notification preferences (toggle email on/off per type)
- Frequency settings (realtime, daily digest, weekly digest)
- Push notifications (browser push or mobile)
- SMS notifications for urgent items

**4. Mobile App**
- React Native or PWA mobile app
- Native upload from phone camera
- Push notifications
- Offline capability (view cached data)

**5. Document Classification**
- Integration with ClearBinder AI
- Auto-classify uploaded documents into categories
- Confidence scores and manual override

**6. Advanced Search & Filtering**
- Full-text search across documents
- Advanced filters (date range, document type, status, etc.)
- Saved search queries
- Export search results

**7. Integration with Loan Management System**
- Sync applications with LOS
- Real-time status updates from LOS
- Document metadata sent to LOS

### Nice-to-Have Features (Phase 3 - Future)

**1. E-Signature Integration**
- DocuSign or HelloSign integration
- Sign documents directly in portal
- Track signature status

**2. Document Comparison**
- Side-by-side comparison of document versions
- Highlight changes/differences (redlining)

**3. Batch Operations**
- Bulk document download as ZIP
- Bulk document delete/replace
- Batch upload via folder drag-and-drop

**4. White-Label / Multi-Tenant**
- Rebrand portal for other lenders
- Multi-tenant architecture
- Per-tenant configuration

**5. API for Third Parties**
- RESTful API for external integrations
- API keys and authentication
- Rate limiting per API consumer
- OpenAPI documentation

**6. Advanced Analytics**
- Borrower behavior analytics
- Document processing time metrics
- Bottleneck identification
- Conversion funnel analysis

**7. Team/Organization Accounts**
- Multiple users per borrower account
- Role-based permissions (owner, admin, uploader, viewer)
- Team member invitations

**8. Calendar Integration**
- Deadline reminders
- Sync with Google Calendar / Outlook
- Automated deadline setting

**9. OCR & Document Extraction**
- Extract data from documents (loan amounts, dates, etc.)
- Pre-fill forms with extracted data
- Validation against requirements

---

## UI/UX & WIREFRAMES

### Primary User Flows

**1. Registration & First Login**
```
User visits portal URL
↓
Clicks "Create Account"
↓
Fills registration form (name, email, company, password)
↓
Accepts terms of service
↓
Submits form → Account created
↓
Email verification sent
↓
User clicks link in email → Email verified
↓
User logs in with email/password
↓
Lands on dashboard (empty state - no applications yet)
```

**2. Create Application & Upload Documents**
```
User clicks "+ New Application" on dashboard
↓
Fills application form (property name, loan type, amount, etc.)
↓
Saves as draft OR submits for review
↓
Application created → Redirected to application detail page
↓
Sees list of required documents (all showing "Missing" status)
↓
Clicks "Upload" button for a document category (e.g., Rent Roll)
↓
Upload modal opens
↓
Selects document category from dropdown
↓
Drags PDF file into dropzone (or clicks "Browse Files")
↓
File validates → Upload begins with progress bar
↓
Upload completes → Success animation & toast notification
↓
Modal closes → Document now shows "Uploaded" status
↓
Repeat for other documents
↓
When all required documents uploaded → Progress bar shows 100%
```

**3. Check Document Status & Respond to Rejection**
```
User receives email: "Document rejected - action required"
↓
Clicks link in email → Logs in (if not already)
↓
Lands on application detail page
↓
Sees rejected document with red "Rejected" badge
↓
Clicks to expand document card
↓
Reads rejection reason/comment from loan officer
↓
Clicks "Replace" button
↓
Uploads corrected document
↓
New version uploaded → Status changes to "Uploaded" (awaiting review)
↓
Email notification sent to loan officer
```

### Key Screens/Pages

**Complete wireframes and design system available at:**
`/mnt/user-data/outputs/CUSTOMER_PORTAL_UI_SPEC.md`

**Screens include:**
1. **Login / Registration Screen** - Split view with brand on left, form on right
2. **Dashboard (Applications List)** - Card-based list with status badges and progress bars
3. **Application Detail View** - Tabbed interface (Overview, Documents, Activity)
4. **Document Upload Modal** - Drag-drop with real-time progress
5. **Document Viewer** - Split view (PDF on right, metadata/comments on left)
6. **Notifications Panel** - Slide-in from right with filtering
7. **Settings / Profile Page** - Clean profile and preferences management
8. **Help Center** - FAQ and support contact

### Wireframe/Design Links
- **UI/UX Specification:** `/mnt/user-data/outputs/CUSTOMER_PORTAL_UI_SPEC.md`
- **Figma:** [To be created based on UI spec]
- **Original Requirements:** `/mnt/user-data/uploads/User_document_management_portal_spec.pdf`

### UI/UX Priorities
- [x] Mobile-responsive (required - works on tablet/phone)
- [x] Desktop-first (primary use case - 1024px+)
- [x] Accessibility (WCAG 2.1 AA compliance)
- [ ] Dark mode support (NOT in Phase 1)
- [ ] Internationalization (English only Phase 1)

### Design System
- [x] **shadcn/ui** (customized with Anthropic-inspired design)
- [x] Tailwind CSS with custom design tokens
- [x] Warm terracotta accent color (#CC7A3E) - NOT corporate blue
- [x] Generous white space and breathing room
- [x] Clean typography (system fonts + Inter)
- [x] Subtle, purposeful animations
- [x] 8px spacing grid

### User Experience Goals
- **Simple onboarding:** Register and upload first document in <5 minutes
- **Clear status:** Always know what documents are needed and their review status
- **Fast uploads:** Upload 5 documents in <3 minutes
- **Mobile-friendly:** Check status and upload documents from phone
- **Zero confusion:** No help documentation needed for core tasks
- **Trust & security:** Design communicates safety of sensitive financial documents
- **Effortless interaction:** Complex tasks feel simple and natural

---

## DATABASE SCHEMA

### Core Tables (PostgreSQL)

**users**
```sql
id                UUID PRIMARY KEY
email             VARCHAR(255) UNIQUE NOT NULL
password_hash     VARCHAR(255) NOT NULL
first_name        VARCHAR(100)
last_name         VARCHAR(100)
phone             VARCHAR(20)
company           VARCHAR(200)
email_verified    BOOLEAN DEFAULT FALSE
is_active         BOOLEAN DEFAULT TRUE
created_at        TIMESTAMP DEFAULT NOW()
updated_at        TIMESTAMP DEFAULT NOW()
deleted_at        TIMESTAMP
```

**sessions**
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id) ON DELETE CASCADE
refresh_token   VARCHAR(500) UNIQUE NOT NULL
expires_at      TIMESTAMP NOT NULL
ip_address      INET
user_agent      TEXT
created_at      TIMESTAMP DEFAULT NOW()
revoked_at      TIMESTAMP
```

**applications**
```sql
id                  UUID PRIMARY KEY
user_id             UUID REFERENCES users(id) ON DELETE CASCADE
property_name       VARCHAR(200) NOT NULL
property_address    TEXT
loan_type           VARCHAR(50) NOT NULL
loan_amount         DECIMAL(15,2) NOT NULL
property_type       VARCHAR(50)
unit_count          INTEGER
description         TEXT
status              VARCHAR(50) DEFAULT 'draft'
loan_officer_id     UUID REFERENCES users(id)
submitted_at        TIMESTAMP
created_at          TIMESTAMP DEFAULT NOW()
updated_at          TIMESTAMP DEFAULT NOW()
deleted_at          TIMESTAMP
```

**document_categories**
```sql
id               UUID PRIMARY KEY
name             VARCHAR(100) UNIQUE NOT NULL
description      TEXT
display_order    INTEGER
is_required      BOOLEAN DEFAULT FALSE
applicable_to    VARCHAR(50)[]
created_at       TIMESTAMP DEFAULT NOW()
```

**documents**
```sql
id                  UUID PRIMARY KEY
application_id      UUID REFERENCES applications(id) ON DELETE CASCADE
category_id         UUID REFERENCES document_categories(id)
filename            VARCHAR(255) NOT NULL
original_filename   VARCHAR(255) NOT NULL
file_size           BIGINT NOT NULL
mime_type           VARCHAR(100) NOT NULL
s3_key              VARCHAR(500) NOT NULL
s3_bucket           VARCHAR(100) NOT NULL
version             INTEGER DEFAULT 1
uploaded_by         UUID REFERENCES users(id)
status              VARCHAR(50) DEFAULT 'uploaded'
reviewed_by         UUID REFERENCES users(id)
reviewed_at         TIMESTAMP
rejection_reason    TEXT
virus_scan_status   VARCHAR(50)
virus_scan_at       TIMESTAMP
created_at          TIMESTAMP DEFAULT NOW()
updated_at          TIMESTAMP DEFAULT NOW()
deleted_at          TIMESTAMP
replaced_by         UUID REFERENCES documents(id)
```

**comments**
```sql
id              UUID PRIMARY KEY
commentable_type VARCHAR(50) NOT NULL
commentable_id  UUID NOT NULL
user_id         UUID REFERENCES users(id)
content         TEXT NOT NULL
created_at      TIMESTAMP DEFAULT NOW()
updated_at      TIMESTAMP DEFAULT NOW()
deleted_at      TIMESTAMP
```

**notifications**
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id) ON DELETE CASCADE
type            VARCHAR(50) NOT NULL
title           VARCHAR(200) NOT NULL
message         TEXT NOT NULL
link_url        VARCHAR(500)
read_at         TIMESTAMP
created_at      TIMESTAMP DEFAULT NOW()
```

**activity_log**
```sql
id              UUID PRIMARY KEY
user_id         UUID REFERENCES users(id)
action          VARCHAR(100) NOT NULL
entity_type     VARCHAR(50)
entity_id       UUID
metadata        JSONB
ip_address      INET
user_agent      TEXT
created_at      TIMESTAMP DEFAULT NOW()
```

### Key Indexes
```sql
CREATE INDEX idx_applications_user ON applications(user_id);
CREATE INDEX idx_applications_status ON applications(status);
CREATE INDEX idx_documents_application ON documents(application_id);
CREATE INDEX idx_documents_status ON documents(status);
CREATE INDEX idx_notifications_user_unread ON notifications(user_id, read_at) WHERE read_at IS NULL;
```

---

## API ENDPOINTS

### Authentication
- `POST /api/v1/auth/register` - Create new user account
- `POST /api/v1/auth/login` - Login with email/password
- `POST /api/v1/auth/refresh` - Refresh access token
- `POST /api/v1/auth/logout` - Logout and revoke tokens
- `POST /api/v1/auth/forgot-password` - Request password reset
- `POST /api/v1/auth/reset-password` - Reset password with token
- `POST /api/v1/auth/verify-email` - Verify email with token

### Applications
- `GET /api/v1/applications` - List all applications (paginated, filterable)
- `POST /api/v1/applications` - Create new application
- `GET /api/v1/applications/:id` - Get application details
- `PATCH /api/v1/applications/:id` - Update application
- `DELETE /api/v1/applications/:id` - Delete application

### Documents
- `POST /api/v1/applications/:applicationId/documents` - Upload document(s)
- `GET /api/v1/documents/:id` - Get document details + download URL
- `PATCH /api/v1/documents/:id` - Update document metadata
- `DELETE /api/v1/documents/:id` - Delete document
- `POST /api/v1/documents/:id/replace` - Replace with new version

### Comments
- `GET /api/v1/documents/:id/comments` - List comments
- `POST /api/v1/documents/:id/comments` - Add comment

### Notifications
- `GET /api/v1/notifications` - List notifications
- `PATCH /api/v1/notifications/:id/read` - Mark as read
- `POST /api/v1/notifications/mark-all-read` - Mark all as read

### User Profile
- `GET /api/v1/users/me` - Get current user profile
- `PATCH /api/v1/users/me` - Update profile
- `POST /api/v1/users/me/change-password` - Change password
- `GET /api/v1/users/me/login-history` - Get login history

### Document Categories
- `GET /api/v1/document-categories` - List all categories

---

## ARCHITECTURE DECISIONS

### Application Architecture
**Separated Frontend + Backend**
- Frontend: Next.js (static/SSG where possible, SSR for dynamic)
- Backend: Node.js + Express API
- Communication: RESTful JSON API
- Deployment: Separate services (Vercel + Railway)

### Authentication Strategy
- JWT-based authentication (access token + refresh token)
- Access token: 24-hour expiration
- Refresh token: 7-30 days (based on "remember me")
- Passwords: bcrypt hashing (cost factor: 12)
- Session management: Redis for refresh tokens
- Rate limiting: 5 login attempts per 15 minutes

### File Storage Strategy
- Primary: AWS S3 (or Cloudflare R2)
- Virus scanning: ClamAV or cloud service
- Access: Pre-signed URLs (15-minute expiration)
- Encryption: Server-side encryption (AES-256)
- Versioning: Enabled (can recover deleted files)
- Lifecycle: Retain for 2 years, then archive to Glacier

### Real-Time Updates
**Phase 1:** HTTP polling (every 30 seconds)
**Phase 2:** WebSockets or Server-Sent Events

### Error Handling
- Sentry for error tracking and alerting
- Structured logging (JSON format)
- Error codes and user-friendly messages
- Automatic retry for transient failures

---

## DEPLOYMENT REQUIREMENTS

### Environment Setup
- [x] Local development (Docker Compose for full stack)
- [x] Staging server (mirrors production, for QA)
- [x] Production server (live customer-facing)

### CI/CD Strategy
**GitHub Actions:**
- Run on every PR: lint, type-check, tests
- Auto-deploy to staging on merge to `develop`
- Manual approval gate for production
- Deploy to production on merge to `main`
- Run security scans (Snyk, Dependabot)

### Deployment Targets
- **Frontend:** Vercel (or Netlify)
- **Backend:** Railway.app (or Render, AWS ECS)
- **Database:** Supabase (managed PostgreSQL)
- **Redis:** Upstash (serverless Redis)
- **Storage:** AWS S3

### Monitoring & Operations
- **Uptime Monitoring:** BetterStack (1-minute checks)
- **Error Tracking:** Sentry
- **Logging:** BetterStack or Logtail
- **Analytics:** PostHog or Mixpanel
- **Alerts:** Slack channel for critical issues

---

## SECURITY & COMPLIANCE

### Security Requirements
- [x] **Startup Level Security**
  - HTTPS enforced (automatic via hosting)
  - JWT tokens with short expiration
  - Refresh token rotation
  - Bcrypt password hashing (cost: 12)
  - Rate limiting on auth endpoints
  - CORS configured properly
  - Helmet.js for security headers
  - Input validation on all endpoints
  - SQL injection prevention (ORM parameterized queries)
  - XSS prevention (sanitize inputs, CSP headers)
  - CSRF tokens for state-changing requests
  - Session management (auto-logout after 30 min inactivity)
  - Audit logging (all actions logged)
  - File upload validation (type, size, virus scan)

### Compliance Needs
- [x] **GDPR - Partial**
  - Privacy policy and terms of service
  - Data export capability
  - Account deletion (soft delete with 30-day recovery)
  - Consent tracking
  - Phase 2: Full GDPR (DPO, data processing agreements)

### Data Handling
- **Passwords:** Bcrypt hashed, never stored plain-text
- **Session tokens:** httpOnly cookies
- **PII:** Encrypted at rest in database
- **Documents:** S3 with server-side encryption (AES-256)
- **Access:** Pre-signed URLs with short expiration
- **Transmission:** HTTPS/TLS 1.2+ only
- **Backups:** Encrypted, daily, 7-day retention

---

## TESTING STRATEGY

### Test Coverage Targets
**Startup Stage: 60% minimum**
- Backend: 70% coverage (critical paths)
- Frontend: 50% coverage (key components)

### Testing Approach
**Backend:**
- Unit tests: Business logic, utilities
- Integration tests: API endpoints, database
- Security tests: Auth, authorization, rate limiting
- Tools: Jest, Supertest

**Frontend:**
- Unit tests: Utilities, hooks, helpers
- Component tests: Key UI components
- Integration tests: User flows
- Tools: Jest, React Testing Library

**E2E Tests (Phase 2):**
- Critical user paths
- Tools: Playwright or Cypress

### Manual Testing
- QA checklist before each release
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Responsive testing (mobile, tablet, desktop)
- Accessibility testing (keyboard, screen reader)

---

## TEAM & TIMELINE

### Team Composition
- **2-3 Full-Stack Developers** (Node.js + React expertise)
- **1 UI/UX Designer** (part-time, Weeks 1-2 for Figma)
- **1 QA/Tester** (part-time, Weeks 7-8)
- **1 Product Manager** (stakeholder, UAT)

### Timeline (8 Weeks)

**Week 1-2: Foundation**
- Project setup, infrastructure, design finalization
- Database schema, auth scaffolding
- Milestone: Can deploy Hello World

**Week 3-4: Authentication & Core Pages**
- User registration, login, password reset
- Dashboard, application management
- Profile and settings
- Milestone: Users can register, login, create applications

**Week 5-6: Document Upload**
- Document upload (backend + frontend)
- S3 integration, file validation
- PDF viewer, download, replace
- Milestone: End-to-end document upload works

**Week 7: Notifications & Polish**
- Email and in-app notifications
- UI polish, loading states, empty states
- Responsive design QA
- Milestone: All Phase 1 features complete

**Week 8: Testing & Launch**
- QA testing, bug fixes
- Beta launch prep
- Production deploy
- Beta user onboarding
- Milestone: Production live with beta users

### Post-Launch (Weeks 9-12)
- Monitor production, fix bugs
- Gather beta user feedback
- Iterate on UX improvements
- Expand to 50 users
- Plan Phase 2

---

## BUDGET & RESOURCES

### Development Cost
- **Labor:** 2 developers × 8 weeks × 40 hours × $100/hr = ~$64K
- **Designer:** 2 weeks × 20 hours × $80/hr = ~$3K
- **Total Labor:** ~$67K

### Infrastructure Cost
**Phase 1 (Beta, Months 1-3):** ~$111/month
- Vercel: $20/month
- Railway: $20/month
- AWS S3: $10/month
- SendGrid: $15/month
- Sentry: $29/month
- BetterStack: $15/month
- Domain: $2/month

**Phase 2 (Production, Months 4-6):** ~$194/month
**Phase 3 (Scale, Months 7-12):** ~$527/month

---

## RISKS & CONSTRAINTS

### Known Risks

**1. Security Breach (CRITICAL)**
- Risk: Sensitive financial documents exposed
- Mitigation: Security audit, penetration testing, OWASP compliance, encryption

**2. Data Loss (HIGH)**
- Risk: Database failure or S3 corruption
- Mitigation: Daily backups, point-in-time recovery, S3 versioning, disaster recovery plan

**3. Poor Performance / Slow Uploads (MEDIUM)**
- Risk: Large files take too long, users give up
- Mitigation: Direct-to-S3 upload, multipart for large files, progress tracking

**4. Scope Creep (HIGH)**
- Risk: Stakeholders request extra features mid-development
- Mitigation: Document clear MVP scope, maintain Phase 2 backlog, weekly stakeholder updates

**5. User Adoption (MEDIUM)**
- Risk: Users find portal confusing, continue emailing documents
- Mitigation: User testing before launch, intuitive UI, onboarding guide, video tutorials

### Technical Constraints
- File size limit: 10 MB per file (API Gateway limit)
- Browser support: Modern browsers only (no IE11)
- Single region: US-East-1 only (Phase 1)
- No offline support (requires internet)

### Business Constraints
- English only (Phase 1)
- Single lender (Encore Finance only, Phase 1)
- No mobile app (web-responsive only, Phase 1)
- Free for borrowers (no monetization Phase 1)

---

## SUCCESS METRICS

### Technical Metrics
- **Uptime:** 99.5%+ (Startup stage target)
- **Page Load Time:** <2 seconds (P95)
- **API Response Time:** <500ms (P95)
- **Upload Success Rate:** >98%
- **Error Rate:** <1% of requests
- **Test Coverage:** 60%+ (Startup stage target)

### Business Metrics
- **Active Users:** 10+ beta users (Phase 1), 100+ (Phase 2), 500+ (Phase 3)
- **Applications Created:** 50+ (Phase 1), 500+ (Phase 2)
- **Documents Uploaded:** 200+ (Phase 1), 2,000+ (Phase 2)
- **Email Volume Reduction:** 50% (Phase 1), 80% (Phase 2)
- **Document Collection Time:** 30% faster (Phase 1), 50% faster (Phase 2)
- **User Satisfaction:** 4/5+ rating
- **Support Ticket Rate:** <5%

### Quality Metrics
- **Zero** critical security vulnerabilities
- **<3** P0 bugs at launch
- **<24 hours** to fix critical bugs
- **<3 days** to fix normal bugs

---

## OPEN QUESTIONS

1. **User Registration:** Should we allow self-registration or require admin approval? (Yellow highlight in original spec)
   - **Answer needed from:** Product team
   - **Blocker?** No - can default to self-registration with email verification

2. **Multi-Factor Authentication:** Phase 1 or Phase 2? (Yellow highlight in original spec)
   - **Answer needed from:** Product + Security team
   - **Recommendation:** Phase 2 (can launch without it, add if customers demand it)

3. **Loan Officer Accounts:** Should loan officers have separate login or use same system?
   - **Answer needed from:** Product team
   - **Blocker?** No - Phase 1 is borrower-only, loan officers get email notifications

4. **Document Retention:** How long to keep documents after loan closes?
   - **Answer needed from:** Legal/Compliance team
   - **Blocker?** No - can default to 2 years, then archive to Glacier

5. **Branding:** Final logo, colors, brand guidelines?
   - **Answer needed from:** Marketing team
   - **Blocker?** No - using Anthropic-inspired design as default, can rebrand later

---

## PROMPT GUIDE FOR CLAUDE CODE

**Use this prompt when starting development with Claude Code:**

```
I'm building a Customer Document Portal for loan applications using the marcus2 methodology. I have a complete project brief that defines all requirements, architecture, and design specifications.

**Project Files:**
- Project Brief: /path/to/CUSTOMER_PORTAL_PROJECT_BRIEF.md
- UI/UX Specification: /path/to/CUSTOMER_PORTAL_UI_SPEC.md
- Original Requirements: /path/to/User_document_management_portal_spec.pdf

**Project Overview:**
- Name: Customer Document Portal
- Purpose: Secure document upload and management for commercial real estate loan applications
- Stage: Startup (3-10 developers, 100-1K users, 60% test coverage)
- Timeline: 8 weeks to beta launch
- Team: 2-3 full-stack developers

**Tech Stack:**
Frontend:
- Next.js 14 (App Router) + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (Anthropic design system)
- TanStack Query for server state
- React Hook Form + Zod validation
- react-dropzone for file uploads

Backend:
- Node.js + Express + TypeScript
- Prisma ORM + PostgreSQL
- JWT authentication with refresh tokens
- AWS S3 for file storage
- SendGrid for email

Infrastructure:
- Frontend: Vercel
- Backend: Railway.app
- Database: Supabase (PostgreSQL)
- Redis: Upstash
- CI/CD: GitHub Actions
- Monitoring: Sentry + BetterStack

**Phase 1 MVP Scope (8 weeks):**
1. User authentication (register, login, password reset, email verification)
2. Loan application management (create, view, edit, delete, search, filter)
3. Document upload with drag-and-drop (multi-file, progress tracking)
4. Document viewing (PDF in-browser viewer)
5. Document management (download, replace, delete, comment)
6. Email notifications (welcome, upload confirmation, document status)
7. In-app notifications (bell icon, slide-in panel)
8. User profile management (edit profile, change password, login history)
9. Help center (FAQ, support contact)
10. Mobile responsive design

**Phase 1 Explicitly OUT OF SCOPE:**
- Loan officer admin interface
- In-app messaging
- E-signature integration
- Mobile native apps
- Document OCR/AI classification
- Integration with loan management system
- White-label/multi-tenant
- API for third parties

**What to build first:**
Week 1-2: Project setup, infrastructure, database schema, auth system
Week 3-4: Application management, dashboard UI
Week 5-6: Document upload system with S3, PDF viewer
Week 7: Notifications, UI polish
Week 8: Testing, bug fixes, beta launch

**Design System:**
- Anthropic-inspired aesthetic (warm, sophisticated)
- Terracotta accent color (#CC7A3E) - NOT corporate blue
- Generous white space
- Clean typography (system fonts + Inter)
- Subtle animations
- 8px spacing grid
- Full design spec in CUSTOMER_PORTAL_UI_SPEC.md

**Please help me:**
1. Create the project structure (frontend + backend)
2. Set up development environment (Docker Compose)
3. Implement database schema with Prisma
4. Build authentication system (JWT + refresh tokens)
5. Create API endpoints (REST)
6. Implement UI following Anthropic design system
7. Set up CI/CD with GitHub Actions
8. Configure monitoring and error tracking

**Let's start with:**
1. Project structure and initial setup
2. Database schema implementation
3. Authentication flow (backend + frontend)

Ready to build this? Let me know if you need any clarification!
```

---

## APPROVAL CHECKLIST

Before starting development, ensure:

- [x] All sections of this brief are completed
- [x] Tech stack selected and justified
- [x] Stage selection matches team size and timeline
- [x] Database schema drafted
- [x] API endpoints listed
- [x] UI/UX wireframes complete
- [x] Success metrics defined
- [x] Timeline is realistic (8 weeks)
- [ ] Product Owner approval
- [ ] Technical Lead approval
- [ ] **Ready to start development**

---

**END OF PROJECT BRIEF v1.0**
