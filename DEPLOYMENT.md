# 🚀 Deployment Guide - Amazigh Learning Platform

This guide covers multiple deployment options for the Amazigh Learning Platform, from simple static hosting to full production deployments.

## 📋 Pre-Deployment Checklist

### ✅ Code Preparation
- [ ] All features tested and working
- [ ] Code linted and formatted (`npm run lint:fix`)
- [ ] TypeScript compilation successful (`npm run type-check`)
- [ ] Production build successful (`npm run build`)
- [ ] Environment variables configured
- [ ] Security headers implemented
- [ ] Performance optimized

### ✅ Content Review
- [ ] All lesson content reviewed for accuracy
- [ ] Tifinagh script properly displayed
- [ ] Audio files optimized and compressed
- [ ] Images optimized for web
- [ ] Cultural content reviewed by native speakers

## 🌐 Deployment Options

### 1. Vercel (Recommended) ⭐

**Best for**: Quick deployment, automatic CI/CD, global CDN

#### Quick Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy to Vercel
vercel --prod
```

#### Manual Setup
1. **Connect Repository**: Link your GitHub/GitLab repository
2. **Configure Build**: Vercel auto-detects Next.js settings
3. **Environment Variables**: Add any required env vars
4. **Custom Domain**: Configure your domain in Vercel dashboard
5. **Deploy**: Push to main branch for automatic deployment

#### Vercel Configuration
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`
- Development Command: `npm run dev`

### 2. Netlify

**Best for**: Static site hosting, form handling, edge functions

#### Deploy Steps
```bash
# Build for static export
npm run build
npm run export

# Deploy to Netlify (drag & drop the 'out' folder)
# Or use Netlify CLI
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

#### Netlify Configuration
- Build Command: `npm run build && npm run export`
- Publish Directory: `out`
- Node Version: `18`

### 3. AWS Amplify

**Best for**: AWS ecosystem integration, scalability

#### Deploy Steps
1. **Connect Repository**: Link your Git repository
2. **Build Settings**: Use the provided amplify.yml
3. **Environment Variables**: Configure in Amplify console
4. **Custom Domain**: Add your domain in Amplify console
5. **Deploy**: Automatic deployment on code push

#### Amplify Configuration (amplify.yml)
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
        - npm run export
  artifacts:
    baseDirectory: out
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
      - .next/cache/**/*
```

### 4. GitHub Pages

**Best for**: Free hosting, open source projects

#### Deploy Steps
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
# "deploy": "npm run build && npm run export && gh-pages -d out"

# Deploy
npm run deploy
```

#### GitHub Pages Setup
1. **Enable Pages**: Go to repository Settings > Pages
2. **Source**: Deploy from a branch (gh-pages)
3. **Custom Domain**: Configure in repository settings
4. **HTTPS**: Enable force HTTPS

### 5. Docker Deployment

**Best for**: Containerized environments, Kubernetes, self-hosting

#### Build and Run
```bash
# Build Docker image
docker build -t amazigh-learning-platform .

# Run container
docker run -p 3000:3000 amazigh-learning-platform

# Or use Docker Compose
docker-compose up -d
```

#### Production Docker Compose
```bash
# Run with production profile
docker-compose --profile production up -d
```

### 6. Traditional VPS/Server

**Best for**: Full control, custom configurations

#### Server Requirements
- **OS**: Ubuntu 20.04+ or CentOS 8+
- **Node.js**: Version 18+
- **Memory**: Minimum 1GB RAM
- **Storage**: 10GB+ available space
- **Network**: Public IP with ports 80/443 open

#### Deployment Steps
```bash
# 1. Clone repository
git clone https://github.com/your-repo/amazigh-learning-platform.git
cd amazigh-learning-platform

# 2. Install dependencies
npm install

# 3. Build application
npm run build

# 4. Install PM2 for process management
npm install -g pm2

# 5. Start application
pm2 start npm --name "amazigh-learning" -- start

# 6. Setup PM2 startup
pm2 startup
pm2 save

# 7. Configure reverse proxy (Nginx)
sudo apt install nginx
# Copy nginx configuration
sudo systemctl enable nginx
sudo systemctl start nginx
```

## 🔧 Environment Configuration

### Environment Variables
Create `.env.local` for local development:
```bash
# Application
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME="Amazigh Learning Platform"

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# API Keys (Future features)
OPENAI_API_KEY=your-openai-key
ELEVENLABS_API_KEY=your-elevenlabs-key

# Database (Future)
DATABASE_URL=your-database-url
```

### Production Environment Variables
Set these in your deployment platform:
- `NODE_ENV=production`
- `NEXT_TELEMETRY_DISABLED=1`
- All custom environment variables from `.env.local`

## 🔒 Security Configuration

### Security Headers
Already configured in `vercel.json` and `netlify.toml`:
- Content Security Policy
- X-Frame-Options
- X-XSS-Protection
- X-Content-Type-Options
- Referrer Policy

### HTTPS Configuration
- **Vercel/Netlify**: Automatic HTTPS
- **Custom Domain**: Configure SSL certificate
- **Self-hosted**: Use Let's Encrypt or commercial SSL

## 📊 Performance Optimization

### Build Optimization
```bash
# Analyze bundle size
npm install -g @next/bundle-analyzer
ANALYZE=true npm run build
```

### Image Optimization
- Use Next.js Image component
- Optimize images before upload
- Use WebP format when possible
- Implement lazy loading

### Caching Strategy
- Static assets: 1 year cache
- API responses: Appropriate cache headers
- CDN configuration for global delivery

## 🔍 Monitoring & Analytics

### Performance Monitoring
- **Vercel Analytics**: Built-in performance monitoring
- **Google Analytics**: User behavior tracking
- **Lighthouse**: Regular performance audits

### Error Tracking
- **Sentry**: Error monitoring and reporting
- **LogRocket**: Session replay and debugging
- **Server logs**: Monitor application logs

## 🚀 CI/CD Pipeline

### GitHub Actions Example
```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install
      - run: npm run lint
      - run: npm run type-check
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🔄 Post-Deployment

### Testing
- [ ] All pages load correctly
- [ ] Navigation works properly
- [ ] Lessons display correctly
- [ ] Tifinagh script renders properly
- [ ] Mobile responsiveness
- [ ] Performance metrics acceptable

### Monitoring
- [ ] Set up uptime monitoring
- [ ] Configure error alerts
- [ ] Monitor performance metrics
- [ ] Track user analytics

### Maintenance
- [ ] Regular dependency updates
- [ ] Security patch monitoring
- [ ] Content updates and reviews
- [ ] Performance optimization
- [ ] User feedback integration

## 📞 Support

### Deployment Issues
- Check build logs for errors
- Verify environment variables
- Test locally before deploying
- Review platform-specific documentation

### Performance Issues
- Run Lighthouse audits
- Check bundle size analysis
- Monitor Core Web Vitals
- Optimize images and assets

---

**Congratulations! Your Amazigh Learning Platform is now live and ready to help preserve and teach this beautiful language! 🏔️**
