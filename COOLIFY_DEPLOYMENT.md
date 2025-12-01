# Deploying to Coolify

This guide will help you deploy your Next.js application to Coolify on your VPS.

> [!TIP]
> **Recommended**: Use [Coolify Auto-Deploy](./COOLIFY_AUTO_DEPLOY.md) for automatic deployments on every push to GitHub. This guide covers manual deployment setup.

## Prerequisites

- Coolify installed and running on your VPS
- Git repository connected to Coolify
- Docker support enabled in Coolify

## Deployment Steps

### 1. Push Your Code to Git Repository

Make sure all the Docker configuration files are committed:

```bash
git add Dockerfile .dockerignore docker-compose.yml next.config.mjs
git commit -m "Add Docker configuration for Coolify deployment"
git push
```

### 2. Create a New Application in Coolify

1. Log in to your Coolify dashboard
2. Click on "New Resource" or "Add New Application"
3. Select your Git repository
4. Choose the branch you want to deploy (usually `main` or `master`)

### 3. Configure the Application

In Coolify's application settings:

- **Build Pack**: Select "Dockerfile" or "Docker"
- **Port**: Set to `3000` (the port exposed in the Dockerfile)
- **Dockerfile Location**: Leave as default (`./Dockerfile`)

### 4. Environment Variables (Optional)

If your application needs environment variables, add them in Coolify:

1. Go to the "Environment Variables" section
2. Add any required variables (e.g., API keys, database URLs)
3. Example variables you might need:
   ```
   NODE_ENV=production
   NEXT_PUBLIC_API_URL=https://your-api.com
   ```

### 5. Deploy

1. Click "Deploy" or "Save & Deploy"
2. Coolify will:
   - Clone your repository
   - Build the Docker image using the Dockerfile
   - Start the container
   - Expose it on the configured port

### 6. Configure Domain (Optional)

1. In Coolify, go to "Domains"
2. Add your custom domain or use the Coolify-provided domain
3. Coolify will automatically configure SSL/TLS certificates

## Local Testing (Optional)

Before deploying to Coolify, you can test the Docker build locally:

```bash
# Build the Docker image
docker build -t kp3site .

# Run the container
docker run -p 3000:3000 kp3site

# Or use docker-compose
docker-compose up
```

Visit `http://localhost:3000` to verify the application works correctly.

## Troubleshooting

### Build Fails

- Check Coolify build logs for specific errors
- Ensure all dependencies are listed in `package.json`
- Verify the Dockerfile syntax is correct

### Application Won't Start

- Check container logs in Coolify
- Verify the port configuration (should be 3000)
- Ensure environment variables are set correctly

### Performance Issues

- Consider adjusting the container resources in Coolify
- Enable caching in Coolify for faster rebuilds
- Monitor memory and CPU usage

## Updating the Application

To deploy updates:

1. Make your code changes
2. Commit and push to your Git repository
3. Coolify will automatically rebuild and redeploy (if auto-deploy is enabled)
4. Or manually trigger a deployment in Coolify

## Additional Configuration

### Custom Build Args

If you need custom build arguments, add them in Coolify's build settings.

### Health Checks

Coolify can perform health checks. Configure them in the application settings:
- **Path**: `/` or `/api/health`
- **Port**: `3000`
- **Interval**: `30s`

### Scaling

For high traffic, you can scale your application in Coolify by increasing the number of replicas.

## Notes

- The Dockerfile uses a multi-stage build for optimal image size
- The application runs as a non-root user for security
- Next.js standalone mode is enabled for minimal production builds
- Static assets are properly copied and served
