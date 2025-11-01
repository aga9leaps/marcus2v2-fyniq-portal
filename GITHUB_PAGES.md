# GitHub Pages Deployment

This document explains how the FynIQ Document Portal is configured for GitHub Pages deployment.

## Overview

The application is deployed as a static site to GitHub Pages using Next.js static export and GitHub Actions for automated deployment.

## Live URL

Once deployed, the application will be available at:
```
https://aga9leaps.github.io/marcus2v2-fyniq-portal/
```

## Configuration

### Next.js Configuration

The `next.config.mjs` file supports two deployment targets:

1. **Docker Deployment** (default)
   - Uses `output: 'standalone'`
   - Optimized for containerized environments

2. **GitHub Pages Deployment**
   - Uses `output: 'export'` for static site generation
   - Configured with `DEPLOY_TARGET=github-pages` environment variable
   - Includes `basePath` and `assetPrefix` for repository subdirectory

### Build Scripts

Two build scripts are available in `package.json`:

```json
{
  "scripts": {
    "build": "next build",                                    // Docker build
    "build:github-pages": "DEPLOY_TARGET=github-pages next build"  // GitHub Pages build
  }
}
```

## Automated Deployment

### GitHub Actions Workflow

The `.github/workflows/deploy-github-pages.yml` workflow automatically:

1. Triggers on push to `main` branch
2. Installs dependencies
3. Builds the static site with `npm run build:github-pages`
4. Uploads the `out` directory as a Pages artifact
5. Deploys to GitHub Pages

### Manual Deployment

You can also trigger the deployment manually:
1. Go to repository **Actions** tab
2. Select **Deploy to GitHub Pages** workflow
3. Click **Run workflow**

## Local Testing

To test the GitHub Pages build locally:

```bash
# Build for GitHub Pages
npm run build:github-pages

# The static files will be in the 'out' directory
# You can serve them with any static file server:
npx serve out

# Or use Python's built-in server:
cd out && python3 -m http.server 8000
```

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save the settings

### 2. Push Changes

```bash
git add .
git commit -m "feat: Add GitHub Pages deployment"
git push origin main
```

### 3. Wait for Deployment

1. Go to **Actions** tab in your repository
2. Watch the **Deploy to GitHub Pages** workflow
3. Once complete, visit the live URL

## Technical Details

### Static Export Limitations

Because GitHub Pages only hosts static sites, some Next.js features are not available:

- ❌ API Routes - Not supported
- ❌ Server-side Rendering (SSR) - Not available
- ❌ Dynamic Routing without `generateStaticParams` - Not supported
- ✅ Client-side Rendering - Fully supported
- ✅ Static Site Generation (SSG) - Fully supported
- ✅ Client-side Routing - Fully supported

### How Dynamic Routes Work

The application uses dynamic routes for application details:
```
/dashboard/applications/[id]
```

To support static export, we use `generateStaticParams()` in `layout.tsx`:

```typescript
// src/app/(dashboard)/dashboard/applications/[id]/layout.tsx
export function generateStaticParams() {
  return MOCK_APPLICATIONS.map((app) => ({
    id: app.id,
  }));
}
```

This pre-generates static HTML for all application IDs at build time.

### Assets and Public Files

- All files in `public/` are copied to the root of the output
- `.nojekyll` file prevents Jekyll processing on GitHub Pages
- Images and static assets are configured with `unoptimized: true`

## Troubleshooting

### Build Fails with Dynamic Route Error

If you see:
```
Error: Page "/some-page/[id]" is missing "generateStaticParams()"
```

**Solution**: Add `generateStaticParams()` to the page's `layout.tsx` or convert to a Server Component.

### 404 on Client-side Navigation

If you get 404 errors when navigating:

**Cause**: GitHub Pages doesn't support client-side routing out of the box.

**Solution**: Next.js handles this with `trailingSlash: true` in the config.

### Assets Not Loading

If CSS or JavaScript files don't load:

**Cause**: Missing `basePath` or `assetPrefix` configuration.

**Check**: Verify `next.config.mjs` has correct repository name in paths.

### Workflow Permission Denied

If deployment fails with permission errors:

**Solution**:
1. Go to **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select **Read and write permissions**
3. Save and re-run the workflow

## Switching Between Deployments

### Use Docker

```bash
# Build and run with Docker
npm run build
docker compose --profile production up
```

### Use GitHub Pages

```bash
# Build for GitHub Pages
npm run build:github-pages

# Deploy via push to main
git push origin main
```

## File Structure

```
.
├── .github/
│   └── workflows/
│       └── deploy-github-pages.yml   # Deployment workflow
├── public/
│   └── .nojekyll                     # Disable Jekyll processing
├── src/
│   └── app/
│       └── (dashboard)/
│           └── dashboard/
│               └── applications/
│                   └── [id]/
│                       ├── layout.tsx    # generateStaticParams()
│                       └── page.tsx      # Dynamic page
├── next.config.mjs                   # Deployment configuration
└── package.json                      # Build scripts
```

## Environment Variables

No environment variables are needed for GitHub Pages deployment. All configuration is compile-time.

## Cache and Performance

GitHub Pages includes CDN caching:
- Static assets are cached automatically
- Cache is invalidated on new deployments
- Typical page load: < 1 second globally

## Security

- All traffic is served over HTTPS
- No server-side code execution
- Client-side authentication uses localStorage (mock data)
- No API keys or secrets in the frontend

## Monitoring

To monitor your GitHub Pages site:
1. Check **Actions** tab for deployment status
2. View deployment logs for errors
3. Use browser DevTools to debug client-side issues

## Support

If you encounter issues:
1. Check the Actions logs for build errors
2. Review this documentation
3. Test the build locally with `npm run build:github-pages`
4. Verify GitHub Pages is enabled in repository settings

---

**Last Updated**: 2025-11-01
**Next.js Version**: 14.2.33
**Deployment Type**: Static Site (GitHub Pages)
