import './globals.css';
import type { Metadata } from 'next';
import SiteBackground from './components/SiteBackground';
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: 'Daniel Njama – Full Stack Developer',
  description: 'Daniel Njama — Full Stack Developer specializing in React, TypeScript, Node.js, and Python. Building production SaaS features, full-stack platforms, and AI-driven tools.',
  openGraph: {
    title: 'Daniel Njama – Full Stack Developer',
    description: 'Full Stack Developer working across React, TypeScript, Node.js, Python and SQL — from frontends to cloud deployments.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body suppressHydrationWarning>
        <SiteBackground />
        <a href="#main" className="sr-only focus-visible">Skip to content</a>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
