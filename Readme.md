# Docker Production Deployment

## Overview
This project demonstrates a production-style Docker deployment using:
- Node.js
- Docker
- Docker Compose
- Nginx Reverse Proxy

## Features
- Dockerized Node.js application
- Nginx reverse proxy
- Containerized deployment
- Docker Compose orchestration

## Tech Stack
- Docker
- Docker Compose
- Node.js
- Nginx
- Linux

## Project Structure

```bash
docker-production-deployment/
├── app/
├── nginx/
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## Deployment

```bash
docker-compose up --build -d
```

## Output
Application runs successfully through Nginx reverse proxy.
