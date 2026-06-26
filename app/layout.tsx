import './globals.css';
import type { Metadata } from 'next';
import { ErrorBoundary } from './components/ErrorBoundary';
import SiteBackground from './components/SiteBackground';
import { Analytics } from "@vercel/analytics/next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://daniel-njama.vercel.app';

export const metadata: Metadata = {
  title: 'Daniel Njama – Full Stack Developer',
  description: 'Daniel Njama — Full Stack Developer specializing in React, TypeScript, Node.js, and Python. Building production SaaS features, full-stack platforms, and AI-driven tools.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: 'Daniel Njama – Full Stack Developer',
    description: 'Full Stack Developer working across React, TypeScript, Node.js, Python and SQL — from frontends to cloud deployments.',
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Daniel Njama - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    siteName: 'Daniel Njama Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Njama – Full Stack Developer',
    description: 'Full Stack Developer specializing in React, TypeScript, Node.js, and Python',
    images: ['/og-image.png'],
    creator: '@danielnjama',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  keywords: [
    'Full Stack Developer',
    'React',
    'TypeScript',
    'Node.js',
    'Python',
    'Software Engineer',
    'Web Developer',
    'Portfolio',
  ],
  authors: [{ name: 'Daniel Njama' }],
  creator: 'Daniel Njama',
  publisher: 'Daniel Njama',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Njama',
    url: siteUrl,
    image: `${siteUrl}/Daniel.jpeg`,
    sameAs: [
      'https://github.com/Muthiru',
      'https://www.linkedin.com/in/daniel-njama',
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'PRIOT Digital Systems',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'BSc Computer Science',
    },
    skills: ['React', 'TypeScript', 'Node.js', 'Python', 'Next.js', 'PostgreSQL', 'AWS'],
    description: 'Full Stack Developer specializing in React, TypeScript, Node.js, and Python. Building production SaaS features, full-stack platforms, and AI-driven tools.',
  };

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ErrorBoundary>
          <SiteBackground />
          <a href="#main" className="sr-only focus-visible">Skip to content</a>
          {children}
          <Analytics />
        </ErrorBoundary>
      </body>
    </html>
  );
}
