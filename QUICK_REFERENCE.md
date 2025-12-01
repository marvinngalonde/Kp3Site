# 🚀 Quick Deployment Reference

Quick reference card for deploying your Next.js app to Coolify.

## 📋 Pre-Deployment Checklist

- [ ] Coolify installed on VPS
- [ ] GitHub repository connected
- [ ] Docker files committed (Dockerfile, .dockerignore)
- [ ] Next.js configured with standalone output

## ⚡ Quick Setup (5 Minutes)

### 1. Create Application in Coolify

```
1. Click "+ New Resource"
2. Select "Public Repository"
3. Repository: https://github.com/marvinngalonde/Kp3Site.git
4. Branch: main
```

### 2. Configure Build

```yaml
Build Pack: Dockerfile
Port: 3000
Dockerfile Location: ./Dockerfile
```

### 3. Enable Auto-Deploy

```
Toggle "Auto Deploy" → ON
Deploy Branch: main
```

### 4. Deploy

```
Click "Deploy" button
Wait for deployment to complete (~3-6 minutes first time)
```

## 🔄 Daily Workflow

```bash
# 1. Make changes
vim app/page.tsx

# 2. Test locally
npm run dev

# 3. Commit and push
git add .
git commit -m "feat: your changes"
git push origin main

# 4. Auto-deploys! (1-2 minutes)
# Monitor in Coolify dashboard
```

## 🧪 Local Testing

### Test with npm

```bash
npm run build
npm start
# Visit http://localhost:3000
```

### Test with Docker

```bash
# Build image
docker build -t kp3site .

# Run container
docker run -p 3000:3000 kp3site

# Or use docker-compose
docker-compose up
```

## 🌐 Domain Setup

### Option A: Coolify Subdomain
```
Use: kp3site.your-coolify-domain.com
Auto-configured by Coolify
```

### Option B: Custom Domain
```
1. Add domain in Coolify
2. Configure DNS:
   Type: A
   Name: @ (or www)
   Value: YOUR_VPS_IP
   TTL: 3600
3. SSL auto-configured by Coolify
```

## 🔧 Environment Variables

```bash
# In Coolify Dashboard → Environment Variables
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.com
# Add your variables here
```

## 📊 Monitoring

### Check Deployment Status
```
Coolify Dashboard → Your App → Deployments
```

### View Logs
```
Coolify Dashboard → Your App → Logs
```

### Deployment History
```
Coolify Dashboard → Your App → Deployments Tab
```

## 🔥 Troubleshooting

### Auto-deploy not working?
```bash
# Check webhook
GitHub → Settings → Webhooks
# Should see Coolify webhook with recent deliveries

# Re-enable in Coolify
Coolify → Your App → Auto Deploy → Toggle OFF then ON
```

### Build fails?
```bash
# Test locally
docker build -t test .

# Check logs
Coolify → Your App → Deployments → Latest → View Logs
```

### Container won't start?
```bash
# Check port (must be 3000)
Coolify → Your App → Settings → Port

# Check environment variables
Coolify → Your App → Environment Variables

# View container logs
Coolify → Your App → Logs
```

## ⏮️ Rollback

### Option 1: Redeploy Previous Version
```
Coolify → Deployments → Select working version → Redeploy
```

### Option 2: Git Revert
```bash
git revert HEAD
git push origin main
# Auto-deploys reverted version
```

## 📚 Full Documentation

- **Auto-Deploy Guide**: [COOLIFY_AUTO_DEPLOY.md](./COOLIFY_AUTO_DEPLOY.md)
- **Manual Deployment**: [COOLIFY_DEPLOYMENT.md](./COOLIFY_DEPLOYMENT.md)
- **Project README**: [README.md](./README.md)

## 🎯 Key Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server

# Docker
docker build -t kp3site .              # Build image
docker run -p 3000:3000 kp3site        # Run container
docker-compose up                       # Run with compose

# Git
git add .                               # Stage changes
git commit -m "message"                 # Commit
git push origin main                    # Push (triggers deploy)

# Deployment
# Just push to main - auto-deploys!
```

## ⚙️ Configuration Files

```
Kp3Site/
├── Dockerfile              # Docker build config
├── .dockerignore          # Build optimization
├── docker-compose.yml     # Local testing
├── next.config.mjs        # Next.js config (standalone mode)
├── .env.example           # Environment template
└── COOLIFY_AUTO_DEPLOY.md # Full setup guide
```

## 🔐 Security Checklist

- [ ] Environment variables in Coolify (not in code)
- [ ] `.env*` files in `.gitignore`
- [ ] HTTPS enabled (auto by Coolify)
- [ ] Container runs as non-root user (configured)
- [ ] Dependencies up to date

## 📈 Performance Tips

- ✅ Docker layer caching enabled
- ✅ Multi-stage build (optimized)
- ✅ Standalone Next.js output
- ✅ .dockerignore configured
- 💡 Monitor resource usage in Coolify
- 💡 Set appropriate CPU/memory limits

## 💰 Estimated Costs

```
VPS (Development):  $5-10/month
VPS (Production):   $10-20/month
Coolify:            Free (open-source)
Domain:             $10-15/year (optional)
SSL:                Free (Let's Encrypt)
```

## ⏱️ Deployment Timeline

```
First deployment:     3-6 minutes
Subsequent deploys:   1-2 minutes
DNS propagation:      5 minutes - 48 hours
SSL certificate:      1-5 minutes
```

## 🎉 Success Indicators

✅ Deployment status: "Running" or "Healthy"
✅ Build logs show no errors
✅ Site accessible via domain
✅ HTTPS working (green lock icon)
✅ Auto-deploy triggering on push

## 🆘 Need Help?

1. Check [COOLIFY_AUTO_DEPLOY.md](./COOLIFY_AUTO_DEPLOY.md) for detailed guide
2. Review Coolify logs for errors
3. Test Docker build locally
4. Check GitHub webhook deliveries
5. Verify DNS configuration

---

**Ready to deploy?** Follow the 5-minute quick setup above! 🚀
