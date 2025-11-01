#!/bin/bash

# FynIQ Document Portal - Docker Helper Script
# Makes it easy to run the application in Docker

set -e

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}  FynIQ Document Portal - Docker Management${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Function to display usage
usage() {
    echo -e "${YELLOW}Usage:${NC}"
    echo "  ./docker-run.sh [command]"
    echo ""
    echo -e "${YELLOW}Commands:${NC}"
    echo "  dev       - Run in development mode with hot reload"
    echo "  prod      - Build and run in production mode"
    echo "  build     - Build production Docker image"
    echo "  stop      - Stop all containers"
    echo "  clean     - Stop and remove containers, networks"
    echo "  logs      - View logs from running containers"
    echo "  shell     - Open shell in running container"
    echo ""
    exit 1
}

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo -e "${RED}Error: Docker is not installed${NC}"
    echo "Please install Docker from https://docs.docker.com/get-docker/"
    exit 1
fi

# Check if docker-compose is available
if ! docker compose version &> /dev/null; then
    echo -e "${RED}Error: docker compose is not available${NC}"
    echo "Please install Docker Compose v2"
    exit 1
fi

# Handle commands
case "${1:-}" in
    dev)
        echo -e "${GREEN}Starting in DEVELOPMENT mode...${NC}"
        echo "App will be available at http://localhost:3000"
        echo "Press Ctrl+C to stop"
        echo ""
        docker compose --profile dev up --build
        ;;

    prod)
        echo -e "${GREEN}Starting in PRODUCTION mode...${NC}"
        echo "Building optimized image..."
        docker compose --profile production build
        echo ""
        echo "Starting container..."
        docker compose --profile production up -d
        echo ""
        echo -e "${GREEN}✓ Application started!${NC}"
        echo "URL: http://localhost:3000"
        echo ""
        echo "View logs: ./docker-run.sh logs"
        echo "Stop: ./docker-run.sh stop"
        ;;

    build)
        echo -e "${GREEN}Building production image...${NC}"
        docker compose --profile production build
        echo -e "${GREEN}✓ Build complete!${NC}"
        ;;

    stop)
        echo -e "${YELLOW}Stopping containers...${NC}"
        docker compose --profile dev down 2>/dev/null || true
        docker compose --profile production down 2>/dev/null || true
        echo -e "${GREEN}✓ Containers stopped${NC}"
        ;;

    clean)
        echo -e "${YELLOW}Cleaning up...${NC}"
        docker compose --profile dev down -v 2>/dev/null || true
        docker compose --profile production down -v 2>/dev/null || true
        echo -e "${GREEN}✓ Cleanup complete${NC}"
        ;;

    logs)
        echo -e "${BLUE}Showing logs (Ctrl+C to exit)...${NC}"
        docker compose --profile production logs -f 2>/dev/null || \
        docker compose --profile dev logs -f 2>/dev/null || \
        echo -e "${RED}No containers running${NC}"
        ;;

    shell)
        echo -e "${BLUE}Opening shell in container...${NC}"
        docker compose --profile production exec fyniq-portal sh 2>/dev/null || \
        docker compose --profile dev exec fyniq-portal-dev sh 2>/dev/null || \
        echo -e "${RED}No containers running${NC}"
        ;;

    *)
        usage
        ;;
esac
