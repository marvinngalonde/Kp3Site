# Kp3Site

A modern Next.js application with automated deployment to Coolify.

## 🚀 Quick Start

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 📦 Deployment

This project is configured for automatic deployment to Coolify using Docker.

### Auto-Deploy (Recommended)

Every push to the `main` branch automatically deploys to production.

**Setup Instructions**: See [COOLIFY_AUTO_DEPLOY.md](./COOLIFY_AUTO_DEPLOY.md)

### Manual Deployment

For manual deployment instructions, see [COOLIFY_DEPLOYMENT.md](./COOLIFY_DEPLOYMENT.md)

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Deployment**: [Coolify](https://coolify.io/) + Docker

## 📁 Project Structure

```
Kp3Site/
├── app/                    # Next.js app directory
├── components/             # React components
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
├── Dockerfile              # Docker configuration
├── docker-compose.yml      # Local Docker testing
└── .dockerignore          # Docker ignore rules
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

See [.env.example](./.env.example) for available variables.

### Docker

The project includes Docker configuration for containerized deployment:

- **Dockerfile**: Multi-stage build for optimized production images
- **docker-compose.yml**: Local testing with Docker
- **.dockerignore**: Optimized build context

Test locally with Docker:

```bash
docker build -t kp3site .
docker run -p 3000:3000 kp3site
```

## 📚 Documentation

- [Coolify Auto-Deploy Setup](./COOLIFY_AUTO_DEPLOY.md) - Automated deployment guide
- [Manual Deployment Guide](./COOLIFY_DEPLOYMENT.md) - Manual deployment instructions
- [Environment Variables](./.env.example) - Configuration template

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit a pull request

## 📝 License

This project is private.

## 🔗 Links

- **Repository**: [github.com/marvinngalonde/Kp3Site](https://github.com/marvinngalonde/Kp3Site)
- **Deployment**: Coolify on VPS
