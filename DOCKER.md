# Docker Guide - FynIQ Document Portal

Complete guide for running the FynIQ Document Portal using Docker.

---

## Quick Start

### 🚀 Fastest Way (Using Helper Script)

```bash
# Development mode with hot reload
./docker-run.sh dev

# Production mode (optimized)
./docker-run.sh prod
```

### 📋 Manual Commands

```bash
# Development
docker compose --profile dev up --build

# Production
docker compose --profile production build
docker compose --profile production up -d
```

---

## Prerequisites

- **Docker Desktop** or **Docker Engine** (v20.10+)
- **Docker Compose** v2 (included in Docker Desktop)

### Check Installation

```bash
docker --version
docker compose version
```

---

## Architecture

### Multi-Stage Build

The production Dockerfile uses a 3-stage build process:

1. **deps** - Install production dependencies
2. **builder** - Build the Next.js application
3. **runner** - Minimal runtime image

**Benefits:**
- Smaller final image size (~200MB vs ~1GB)
- Faster deployments
- Better security (no build tools in production)

### Security Features

- ✅ Non-root user (`nextjs:nodejs`)
- ✅ Minimal Alpine Linux base image
- ✅ Health checks for container monitoring
- ✅ No development dependencies in production
- ✅ `.dockerignore` excludes sensitive files

---

## Available Commands

### Development Mode

**Start with hot reload:**
```bash
./docker-run.sh dev
```

**What happens:**
- Uses `Dockerfile.dev`
- Mounts local code for hot reload
- Runs on port 3000
- Changes sync immediately

**Stop:**
```bash
./docker-run.sh stop
# or press Ctrl+C
```

### Production Mode

**Build and run:**
```bash
./docker-run.sh prod
```

**What happens:**
- Uses multi-stage `Dockerfile`
- Optimized production build
- Runs in detached mode
- Minimal image size

**View logs:**
```bash
./docker-run.sh logs
```

**Stop:**
```bash
./docker-run.sh stop
```

### Utility Commands

```bash
# Build production image only
./docker-run.sh build

# Clean up containers, networks, volumes
./docker-run.sh clean

# Open shell in running container
./docker-run.sh shell

# View real-time logs
./docker-run.sh logs
```

---

## Docker Compose Profiles

The `docker-compose.yml` uses profiles to manage different environments:

### Development Profile

```bash
docker compose --profile dev up
```

**Features:**
- Hot reload enabled
- Source code mounted as volume
- Port 3000 exposed
- Uses `Dockerfile.dev`

### Production Profile

```bash
docker compose --profile production up
```

**Features:**
- Optimized build
- Health checks enabled
- Restart policy: `unless-stopped`
- Uses multi-stage `Dockerfile`

---

## Environment Variables

### Phase 1 (Current - Mock Data)

No environment variables required. The application runs with mock data.

**Optional variables:**
```bash
NODE_ENV=production          # Set environment
NEXT_TELEMETRY_DISABLED=1    # Disable Next.js telemetry
PORT=3000                     # Application port
HOSTNAME=0.0.0.0             # Listen on all interfaces
```

### Phase 2 (Future - Backend Integration)

When integrating with a real backend, you'll need:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgresql://user:pass@host:5432/db
JWT_SECRET=your-secret-key
AWS_S3_BUCKET=your-bucket-name
```

**Usage:**
1. Create `.env` file in project root
2. Add variables
3. Docker Compose will automatically load them

---

## Building Custom Images

### Build Production Image

```bash
docker build -t fyniq-portal:latest .
```

### Build with Custom Tag

```bash
docker build -t myregistry/fyniq-portal:v1.0.0 .
```

### Build Development Image

```bash
docker build -f Dockerfile.dev -t fyniq-portal:dev .
```

---

## Deployment

### Deploy to Docker Registry

**Docker Hub:**
```bash
# Tag image
docker tag fyniq-portal:latest username/fyniq-portal:latest

# Push to Docker Hub
docker push username/fyniq-portal:latest
```

**GitHub Container Registry:**
```bash
# Login
echo $GITHUB_TOKEN | docker login ghcr.io -u USERNAME --password-stdin

# Tag
docker tag fyniq-portal:latest ghcr.io/username/fyniq-portal:latest

# Push
docker push ghcr.io/username/fyniq-portal:latest
```

### Deploy to Cloud Platforms

#### AWS ECS/Fargate

```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com
docker tag fyniq-portal:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/fyniq-portal:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/fyniq-portal:latest
```

#### Google Cloud Run

```bash
# Build and push
gcloud builds submit --tag gcr.io/PROJECT_ID/fyniq-portal

# Deploy
gcloud run deploy fyniq-portal \
  --image gcr.io/PROJECT_ID/fyniq-portal \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

#### Azure Container Instances

```bash
# Login to ACR
az acr login --name myregistry

# Tag and push
docker tag fyniq-portal:latest myregistry.azurecr.io/fyniq-portal:latest
docker push myregistry.azurecr.io/fyniq-portal:latest

# Deploy
az container create \
  --resource-group myResourceGroup \
  --name fyniq-portal \
  --image myregistry.azurecr.io/fyniq-portal:latest \
  --dns-name-label fyniq-portal \
  --ports 3000
```

---

## Troubleshooting

### Container Won't Start

**Check logs:**
```bash
./docker-run.sh logs
```

**Common issues:**
- Port 3000 already in use
- Missing dependencies
- Build errors

**Solution:**
```bash
# Stop all containers
./docker-run.sh stop

# Clean up
./docker-run.sh clean

# Rebuild
./docker-run.sh prod
```

### Hot Reload Not Working (Dev Mode)

**Check volume mounts:**
```bash
docker compose --profile dev config
```

**Verify node_modules:**
```bash
./docker-run.sh shell
ls -la /app/node_modules
```

### Build Takes Too Long

**Use BuildKit:**
```bash
DOCKER_BUILDKIT=1 docker build -t fyniq-portal:latest .
```

**Cache issues:**
```bash
# Clear build cache
docker builder prune -a

# Rebuild from scratch
docker build --no-cache -t fyniq-portal:latest .
```

### Permission Denied Errors

**Make script executable:**
```bash
chmod +x docker-run.sh
```

### Health Check Failing

**Verify application is running:**
```bash
docker exec <container-id> wget -O- http://localhost:3000
```

---

## Performance Optimization

### Image Size

**Current production image:** ~200MB (with multi-stage build)

**Further optimization:**
1. Use `node:20-alpine` (already implemented)
2. Enable standalone output (already implemented)
3. Remove unused dependencies
4. Use `.dockerignore` (already implemented)

### Build Speed

**Use BuildKit:**
```bash
export DOCKER_BUILDKIT=1
```

**Cache npm packages:**
```bash
# Already implemented in Dockerfile
# COPY package*.json before COPY . .
```

### Runtime Performance

**Use production mode:**
```bash
NODE_ENV=production npm start
```

**Configure health checks:**
```yaml
# Already configured in docker-compose.yml
healthcheck:
  interval: 30s
  timeout: 10s
  retries: 3
```

---

## Advanced Usage

### Custom Port Mapping

```bash
# Run on port 8080
docker run -p 8080:3000 fyniq-portal:latest
```

### Override Environment Variables

```bash
docker run -e NODE_ENV=production -e PORT=3000 fyniq-portal:latest
```

### Mount Custom Config

```bash
docker run -v $(pwd)/custom.config.js:/app/next.config.mjs fyniq-portal:latest
```

### Run with Docker Secrets

```bash
echo "secret-value" | docker secret create jwt_secret -
docker service create --secret jwt_secret fyniq-portal:latest
```

---

## Monitoring & Logging

### View Logs

**Real-time:**
```bash
./docker-run.sh logs
```

**Last 100 lines:**
```bash
docker logs --tail 100 fyniq_document_portal
```

**Follow logs:**
```bash
docker logs -f fyniq_document_portal
```

### Container Stats

```bash
docker stats fyniq_document_portal
```

### Health Status

```bash
docker inspect --format='{{.State.Health.Status}}' fyniq_document_portal
```

---

## File Structure

```
fyniq_document_portal/
├── Dockerfile              # Production multi-stage build
├── Dockerfile.dev          # Development with hot reload
├── docker-compose.yml      # Orchestration config
├── .dockerignore          # Exclude files from build
├── docker-run.sh          # Helper script
└── DOCKER.md              # This file
```

---

## Best Practices

### Development

✅ Use `./docker-run.sh dev` for hot reload
✅ Mount volumes for code changes
✅ Keep image updated: `docker pull node:20-alpine`

### Production

✅ Use multi-stage builds
✅ Run as non-root user
✅ Enable health checks
✅ Use environment variables for config
✅ Tag images with version numbers
✅ Scan images for vulnerabilities

### Security

✅ Never commit `.env` files
✅ Use secrets management
✅ Regular security updates
✅ Scan images: `docker scan fyniq-portal:latest`
✅ Limit container resources

---

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Next.js Docker Example](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Docker Security Best Practices](https://docs.docker.com/develop/security-best-practices/)

---

**Last Updated:** 2025-11-01
**Docker Version:** 20.10+
**Compose Version:** v2
