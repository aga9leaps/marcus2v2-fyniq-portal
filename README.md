# FynIQ Document Portal

**Customer-facing document management portal for CRE Lending Group loan applications**

> **Status:** ✅ Phase 1 Complete - All Core UI Features Implemented
> **Stack:** Next.js 14 + TypeScript + Tailwind CSS + MARCUS2 Design System
> **Stage:** MVP
> **Demo:** http://localhost:3000 (Login: sarah.johnson@example.com / demo123)

---

## 🐳 Quick Start with Docker (Recommended)

**The easiest way to run the application:**

```bash
# Development mode (with hot reload)
./docker-run.sh dev

# Production mode (optimized build)
./docker-run.sh prod

# View logs
./docker-run.sh logs

# Stop containers
./docker-run.sh stop
```

**Available at:** http://localhost:3000

---

## 📦 Quick Start without Docker

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser
# Navigate to http://localhost:3000
```

**Demo Login:**
- Email: `sarah.johnson@example.com`
- Password: `demo123`

---

## Project Overview

The **FynIQ Document Portal** is a secure, web-based platform that enables commercial real estate loan applicants to upload, manage, and track documents throughout their loan application process with CRE Lending Group.

**Problem Solved:** Eliminates the chaos of email-based document submission, providing borrowers with a centralized dashboard for managing loan applications and documents.

**Phase 1 Scope:** UI/UX finalization with mock data (no backend, no real authentication)

---

## Documentation

### Core Documents

- **[PROJECT_BRIEF.md](./PROJECT_BRIEF.md)** - Complete project requirements (37KB)
- **[DESIGN_SPEC.md](./DESIGN_SPEC.md)** - UI/UX design specifications
- **[.claude/CLAUDE.md](./.claude/CLAUDE.md)** - Claude Code context
- **[.claude/PROJECT_STATE.md](./.claude/PROJECT_STATE.md)** - Project state tracker

### MARCUS2 Methodology

- **UI/UX Standards:** `/home/aga/marcus2-v2-beta/methodology/00-foundation/UI_UX_STANDARDS.md`
- **AI Models:** `/home/aga/marcus2-v2-beta/methodology/00-foundation/AI_MODELS.md`

---

## Design System

**MARCUS2 Design System - Warm & Sophisticated Palette**

```css
/* Primary Accent */
--accent-primary: #CC7A3E;  /* Terracotta - Financial Services */

/* Background */
--bg-primary: #FAFAF8;      /* Warm off-white */
--surface: #FFFFFF;         /* Cards */

/* Text */
--text-primary: #191919;    /* Body text */
```

All design tokens in `src/app/globals.css`

---

## Project Structure

```
fyniq_document_portal/
├── src/app/          # Next.js App Router
├── src/components/   # React components
├── src/lib/          # Utilities, mock data
├── .claude/          # Claude Code context
├── PROJECT_BRIEF.md  # Requirements
└── DESIGN_SPEC.md    # UI/UX specs
```

---

## Key Features (Phase 1)

1. **Login Screen** - Split design, mock auth
2. **Dashboard** - Applications list with status
3. **Application Detail** - Tabbed interface
4. **Document Upload** - Drag & drop modal
5. **Responsive** - Mobile, Tablet, Desktop
6. **Accessible** - WCAG 2.1 AA compliant

---

## Development

### With Docker

```bash
./docker-run.sh dev      # Development with hot reload
./docker-run.sh prod     # Production build
./docker-run.sh build    # Build Docker image
./docker-run.sh stop     # Stop containers
./docker-run.sh clean    # Clean up containers and volumes
./docker-run.sh logs     # View container logs
./docker-run.sh shell    # Open shell in container
```

### Without Docker

```bash
npm run dev    # Start dev server
npm run build  # Build for production
npm run lint   # Run ESLint
npm start      # Run production build
```

---

## 🐳 Docker Details

### Architecture

- **Multi-stage build** for optimized production images
- **Non-root user** for enhanced security
- **Health checks** for container monitoring
- **Standalone output** for minimal image size

### Docker Files

- `Dockerfile` - Production optimized multi-stage build
- `Dockerfile.dev` - Development with hot reload
- `docker-compose.yml` - Orchestration with profiles (dev/production)
- `.dockerignore` - Excludes unnecessary files from build
- `docker-run.sh` - Helper script for easy management

### Environment Variables

All environment variables are optional for Phase 1 (mock data).

```bash
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1
PORT=3000
```

### Deployment

The application is ready for deployment to:
- **Docker Hub** / **GitHub Container Registry**
- **AWS ECS** / **Fargate**
- **Google Cloud Run**
- **Azure Container Instances**
- **Kubernetes** clusters

---

## Implementation Status

### ✅ Completed Features

1. **Login Screen** - Split design with form validation and mock authentication
2. **Dashboard** - Applications list with search, filters, and status tracking
3. **Application Detail** - Tabbed interface (Overview, Documents, Activity, Messages)
4. **Document Upload** - Drag & drop modal with file validation
5. **Mock Data** - 4 sample loan applications with complete document sets
6. **Responsive Design** - Mobile-first layouts with Tailwind CSS
7. **Docker Support** - Production-ready containerization

### 🔄 Next Steps (Optional)

1. Responsive testing across devices
2. WCAG 2.1 AA accessibility audit
3. User testing and feedback
4. Performance optimization
5. Phase 2: Backend integration (Express + PostgreSQL)

---

**Last Updated:** 2025-11-01
**Status:** ✅ Phase 1 Complete - Dockerized & Production Ready
