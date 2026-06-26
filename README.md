# Daniel Njama Portfolio

Personal developer portfolio built with Next.js, React, and TypeScript.

[![CI](https://github.com/Muthiru/portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Muthiru/portfolio/actions/workflows/ci.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://daniel-njama.vercel.app)

## Features

- 🚀 **Modern Stack**: Next.js 16, React 19, TypeScript
- 🔒 **Secure Contact Form**: Server-side validation, rate limiting, Resend integration
- 📱 **Responsive Design**: Mobile-first, works on all devices
- ♿ **Accessible**: ARIA labels, keyboard navigation, reduced motion support
- ⚡ **Performance Optimized**: Lazy loading, image optimization, code splitting
- 🎨 **Dark Theme**: Clean, professional design with CSS variables
- 📊 **Analytics**: Vercel Analytics integration

## Structure

```text
app/
  components/      Page sections and small client interactions
  data/            Portfolio data used by components
  api/             Server-side API routes (contact form)
  globals.css      Global theme, layout, and component styles
  layout.tsx       App metadata and document shell
  page.tsx         One-page portfolio composition
public/
  favicon.svg
  resume.pdf
.github/
  workflows/       CI/CD pipelines
```

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Resend API key (for contact form)
- Git (for version control)

## Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp .env.example .env.local
```

Edit `.env.local` and add your Resend API key:

```env
RESEND_API_KEY=re_your_actual_api_key_here
EMAIL_FROM=Portfolio <your-verified-domain@resend.dev>
RATE_LIMIT_MAX=5
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

**Getting a Resend API Key:**
1. Sign up at [resend.com](https://resend.com)
2. Go to Settings → API Keys
3. Create a new key
4. Copy it to your `.env.local` file

**Email From Address:**
- By default, use `onboarding@resend.dev` (for testing)
- For production, add your domain in Resend and use `yourname@yourdomain.com`

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript check
npm test         # Run unit tests (Vitest)
npm run test:e2e # Run E2E tests (Playwright)
```

## Testing

### Unit Tests

```bash
npm test              # Run tests
npm run test:ui       # Run tests with UI
npm run test:coverage # Run tests with coverage report
```

### E2E Tests

```bash
npm run test:e2e      # Run Playwright tests
npm run test:e2e:ui   # Run with UI
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `RESEND_API_KEY`
   - `EMAIL_FROM`
   - `RATE_LIMIT_MAX`
   - `NEXT_PUBLIC_SITE_URL`
4. Deploy

### Environment Variables in Production

Make sure to add all environment variables in your Vercel project settings:
- Go to Project Settings → Environment Variables
- Add each variable from `.env.example`

### Continuous Integration

CI pipeline runs on every push and PR:
- ✅ ESLint checks
- ✅ TypeScript type checking
- ✅ Production build verification

Configure branch protection rules in GitHub to require CI checks before merging.

## Contact Form

The contact form uses:
- **Resend** for email delivery
- **Zod** for server-side validation
- **Rate limiting** (5 requests per hour per IP)
- **Server-side API route** (`/api/contact`)

Emails are sent to: `njamadaniel3@gmail.com`

### API Rate Limiting

- Max 5 submissions per hour per IP address
- Prevents spam and abuse
- Returns 429 status code when limit exceeded

### Form Validation

Server-side validation ensures:
- Name: Required, 2-100 characters
- Email: Valid email format
- Message: Required, 10-5000 characters

## Performance

Optimized for speed:
- **Lazy Loading**: Certifications and Projects components load on demand
- **Image Optimization**: WebP/AVIF formats, responsive sizes
- **Code Splitting**: Reduced initial bundle size
- **Canvas Optimization**: Animation pauses on tab hide (saves battery)

## Accessibility

- ✅ Skip links for keyboard navigation
- ✅ ARIA labels on interactive elements
- ✅ Reduced motion support
- ✅ Semantic HTML structure
- ✅ Color contrast compliance

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript 5
- **UI**: React 19
- **Styling**: CSS Modules + CSS Variables
- **Email**: Resend
- **Validation**: Zod
- **Testing**: Vitest (unit), Playwright (E2E)
- **CI/CD**: GitHub Actions
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics

## Development Workflow

1. Create feature branch: `git checkout -b feature/your-feature`
2. Make changes and commit: `git commit -m "Add feature"`
3. Push to GitHub: `git push origin feature/your-feature`
4. Create Pull Request
5. CI checks run automatically
6. Merge after approval

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

© 2026 Daniel Njama. All rights reserved.