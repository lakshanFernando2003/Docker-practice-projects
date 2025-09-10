# Docker Commands and Concepts

This README documents the Docker commands and concepts used across my Docker practice projects.

## Table of Contents

- [Docker Commands](#docker-commands)
  - [Basic Commands](#basic-commands)
  - [Docker Compose Commands](#docker-compose-commands)
  - [Additional Useful Commands](#additional-useful-commands)
- [Docker Concepts](#docker-concepts)
- [Project-Specific Notes](#project-specific-notes)

## Docker Commands

### Basic Commands

```bash
# Build an image from a Dockerfile
docker build -t <image-name> <source-directory>

# Run a container from an image
docker run --name <container-name> <image-name>

# Run with port mapping
docker run -p 3000:8080 --name <container-name> <image-name>

# Run with volume mounting
docker run -v ./app/<file-name>:/app/<file-name> --name <container-name> <image-name>
docker run -v ${PWD}:/app --name <container-name> <image-name>

# List all images
docker images

# List running containers
docker ps

# List all containers (including stopped)
docker ps -a

# Stop a running container
docker stop <container-name>

# Start a stopped container
docker start <container-name>

# Remove a container
docker rm <container-name>

# Remove an image
docker rmi <image-name>
```

### Docker Compose Commands

```bash
# Start services defined in docker-compose.yml
docker compose up

# Start in detached mode (background)
docker compose up -d

# Build or rebuild services
docker compose build

# Stop and remove containers, networks
docker compose down
```

### Additional Commands learnt from kode-kloud

```bash

# Inspect container details
docker inspect <container-name>

# Prune unused resources
docker system prune

```

## Docker Concepts

### 1. Containerization

Creating isolated environments for applications that include all dependencies, ensuring consistency across development, testing, and production environments.

### 2. Docker Images

Read-only templates containing application code, libraries, dependencies, tools, and other files needed for an application to run.

Projects use:

- `node:20-alpine` and `node:22-alpine` for Node.js applications
- Custom Dockerfiles for server and client components

### 3. Docker Containers

Runnable instances of Docker images with specific runtime configurations:

- Isolated processes
- Dedicated network interfaces
- Custom names and settings

### 4. Volumes

Persistent data storage mechanism that:

- Persists data between container restarts
- Enables sharing files between host and containers
- Allows for live development with code changes reflected immediately

Used as:

```bash
volumes:
  - ./client:/app
  - /app/node_modules
```

### 5. Port Mapping

Connecting container ports to host ports to access services:

```bash
-p <host-port>:<container-port>
```

Examples:

- Node.js application on port 5000
- React client on port 5173

### 6. Docker Networking

Communication layer between containers:

- Bridge networks for container-to-container communication
- Host network for container-to-host communication
- Custom networks for multi-container applications

### 7. Multi-Container Applications

Applications with multiple interconnected services:

- Frontend and backend services
- Application and database services
- API and UI components

### 8. Environment Variables

Configuration parameters passed to containers:

- API URLs
- Database credentials
- Application settings

### 9. Docker Compose

Tool for defining and running multi-container Docker applications:

- Service definitions
- Volume mounts
- Network configuration
- Container dependencies

## Project-Specific Notes

### sampledocker-node-app

Simple Node.js application containerized with Docker:

- Uses `node:20-alpine` base image
- Exposes application on port specified in the app
- Simple CMD to start the application

### fullstack_docker

Full-stack application with separate frontend and backend:

- Client container (React) exposing port 5173
- Server container (Node.js) exposing port 5000
- Connected via Docker network
- Volume mounts for live development
- Environment variable configuration

### docker_node_react

Node.js and React application with Docker:

- Exposes port 5000
- Uses `node:22-alpine` base image
- Optimized build process with layered copying
