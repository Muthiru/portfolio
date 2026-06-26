# Daniel Njama Portfolio

Personal developer portfolio built with Next.js, React, and TypeScript.

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
```

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Resend API key (for contact form)

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

## Contact Form

The contact form uses:
- **Resend** for email delivery
- **Zod** for server-side validation
- **Rate limiting** (5 requests per hour per IP)
- **Server-side API route** (`/api/contact`)

Emails are sent to: `njamadaniel3@gmail.com`

## Production Notes

- One-page scrolling site optimized for quick recruiter scanning
- Project data from `app/data/projects.ts`
- Certifications from `app/data/certifications.ts`
- Contact form secured with server-side validation
- Rate limiting prevents spam
- `public/resume.pdf` is downloadable from hero section

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: CSS Modules + CSS Variables
- **Email**: Resend
- **Validation**: Zod
- **Deployment**: Vercel

## License

© 2026 Daniel Njama. All rights reserved.