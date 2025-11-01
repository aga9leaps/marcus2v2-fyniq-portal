# fyniq_document_portal - CLAUDE CONTEXT

**Auto-loaded on every Claude Code session**

---

## PROJECT OVERVIEW

**Name:** fyniq_document_portal
**Description:** Customer document portal for CRE Lending Group loan applications
**Stage:** MVP
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

---

## CRITICAL: ALWAYS READ FIRST

1. **Read this file** every session start
2. **Read `.claude/PROJECT_STATE.md`** to understand current state
3. **Read `PROJECT_BRIEF.md`** in project root for complete requirements
4. **Read `DESIGN_SPEC.md`** for UI/UX specifications
5. **Follow MARCUS2 V2.2 methodology** (link to /home/aga/marcus2-v2-beta/methodology/)

---

## AI MODEL RESTRICTIONS ⚠️

**CRITICAL:** Read [AI_MODELS.md](/home/aga/marcus2-v2-beta/methodology/00-foundation/AI_MODELS.md) for STRICT model restrictions.

**APPROVED MODELS ONLY (November 2025):**
- gpt-5-mini-2025-08-07 (default for general tasks)
- gpt-5-2025-08-07 (complex reasoning)
- gemini-2.5-flash (long documents, multimodal)
- text-embedding-3-small (embeddings)

**NEVER use unapproved models without explicit user approval.**

---

## TECH STACK

**Frontend:**
- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS + MARCUS2 Design System
- UI Components: shadcn/ui (to be installed)
- Forms: React Hook Form + Zod validation
- File Upload: react-dropzone
- State: React Context + TanStack Query

**Backend (Phase 2):**
- Framework: Node.js + Express + TypeScript
- Database: PostgreSQL (Supabase or Railway)
- ORM: Prisma
- Authentication: JWT + bcrypt
- Storage: AWS S3 or Cloudflare R2

**Project Structure:**
```
fyniq_document_portal/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # Landing page
│   │   ├── layout.tsx    # Root layout
│   │   ├── (auth)/       # Auth routes group
│   │   │   ├── login/
│   │   │   └── signup/
│   │   ├── (dashboard)/  # Dashboard routes group
│   │   │   ├── applications/
│   │   │   ├── documents/
│   │   │   └── settings/
│   │   └── api/          # API routes (if needed)
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── custom/       # Custom components
│   ├── lib/
│   │   ├── utils.ts      # Utilities
│   │   └── validations/  # Zod schemas
│   └── styles/
│       └── globals.css   # Design system CSS
├── public/
├── PROJECT_BRIEF.md      # Complete requirements
├── DESIGN_SPEC.md        # UI/UX specifications
└── .claude/              # Claude context files
```

---

## DESIGN SYSTEM

**Following MARCUS2 UI/UX Standards:**
- See: `/home/aga/marcus2-v2-beta/methodology/00-foundation/UI_UX_STANDARDS.md`
- Design tokens in `src/app/globals.css`
- Tailwind config in `tailwind.config.ts`

**Color Palette (Warm & Sophisticated):**
- Primary Accent: `#CC7A3E` (Terracotta - Financial Services)
- Background: `#FAFAF8` (Warm off-white)
- Surface: `#FFFFFF` (Cards)
- Text Primary: `#191919` (Near-black)

**Design Philosophy:**
- Anthropic-inspired aesthetic
- Warm, sophisticated, trustworthy
- Clarity above all
- Generous white space
- Subtle animations
- WCAG 2.1 AA accessibility compliance

---

## STAGE REQUIREMENTS (MVP)

**MVP Stage:**
- ✅ Manual testing (no coverage required)
- ✅ Basic security (env secrets, HTTPS)
- ✅ Simple deployment (Vercel)
- ✅ Console logging (no monitoring required)
- ❌ No CI/CD required
- ❌ No backend initially (Phase 1 is frontend only)

**Phase 1 Scope:**
- Login screen (mock authentication)
- Dashboard with applications list
- Application detail view
- Document upload modal (mock)
- All UI/UX finalized, no real functionality

---

## DEVELOPMENT WORKFLOW (MARCUS2 V2.2)

**ALWAYS Follow This Order:**
1. **Explore** - Read relevant files FIRST
2. **Plan** - Create detailed plan, get user approval
3. **Code** - Implement according to plan
4. **Test** - Manual testing, verify functionality
5. **Document** - Update PROJECT_STATE.md
6. **Commit** - Clear commit messages (if git enabled)

---

## MARCUS2 METHODOLOGY LINKS

**Location:** `/home/aga/marcus2-v2-beta/methodology/`

**Read These:**
- `INDEX.md` - Quick reference
- `00-foundation/TECH_STACK.md` - Tech stack details
- `00-foundation/AI_MODELS.md` - **STRICT model restrictions**
- `00-foundation/UI_UX_STANDARDS.md` - **UI/UX methodology**
- `00-foundation/STAGE_DEFINITIONS.md` - MVP requirements

---

## KEY SCREENS TO BUILD (Phase 1)

1. **Login Screen**
   - Split screen design (brand left, form right)
   - Email/password inputs
   - "Remember me" checkbox
   - SSO options (Google, Microsoft)
   - Mock authentication (no real backend)

2. **Dashboard / Applications List**
   - Application cards with status
   - Document upload progress bars
   - Status badges (Under Review, Approved, etc.)
   - Search and filter functionality

3. **Application Detail View**
   - Tabbed interface (Overview, Documents, Activity, Messages)
   - Document list with status indicators
   - Upload buttons
   - Loan details sidebar

4. **Document Upload Modal**
   - Drag & drop zone
   - File type selector dropdown
   - Progress indicators
   - Success/error states

5. **Document Viewer (if time permits)**
   - PDF viewer integration
   - Sidebar with metadata
   - Comments section

---

## CRITICAL RULES

### 🔴 NEVER:
- Skip reading this file and PROJECT_STATE.md at session start
- Use unapproved AI models (see AI_MODELS.md)
- Jump straight to coding without planning
- Hardcode secrets or API keys
- Skip accessibility requirements
- Violate design system specifications

### ✅ ALWAYS:
- Read context files first
- Create detailed plan before coding
- Use approved AI models only (November 2025)
- Follow MARCUS2 design system
- Ensure WCAG 2.1 AA compliance
- Test with keyboard navigation
- Update PROJECT_STATE.md after completing tasks
- Use Tailwind CSS classes (no custom CSS unless necessary)

---

## ENVIRONMENT VARIABLES

```bash
# Phase 1 (Frontend Only - Mock Data)
NEXT_PUBLIC_APP_NAME=FynIQ Document Portal
NEXT_PUBLIC_STAGE=mvp

# Phase 2 (Backend Integration - Future)
# NEXT_PUBLIC_API_URL=
# JWT_SECRET=
# DATABASE_URL=
# AWS_S3_BUCKET=
```

---

## COMMON TASKS

### Start Development
```bash
npm run dev
# Open http://localhost:3000
```

### Install shadcn/ui Components
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card input badge
```

### Build for Production
```bash
npm run build
npm start
```

---

## ACCESSIBILITY CHECKLIST

Phase 1 Requirements:
- [ ] All colors meet WCAG 2.1 AA contrast (4.5:1 text, 3:1 UI)
- [ ] All interactive elements keyboard accessible
- [ ] Focus indicators visible (3:1 contrast)
- [ ] All images have alt text
- [ ] Forms have associated labels
- [ ] Semantic HTML structure
- [ ] Skip to main content link
- [ ] ARIA labels where needed
- [ ] Screen reader tested (NVDA or VoiceOver)

---

## NEXT STEPS

**Phase 1 (UI/UX Finalization - 2 weeks):**
1. Set up shadcn/ui components
2. Build login screen
3. Build dashboard with mock data
4. Build application detail view
5. Build document upload modal
6. Polish animations and interactions
7. Accessibility testing
8. User testing

**Phase 2 (Backend Integration - Future):**
- Express backend with PostgreSQL
- Real authentication (JWT)
- File upload to S3
- Document status tracking
- Email notifications

---

**Last Updated:** 2025-11-01
**Status:** Initialized
**Stage:** MVP
**Stack:** Next.js 14 + TypeScript + Tailwind CSS

**Current Focus:** Phase 1 - UI/UX finalization with mock data
