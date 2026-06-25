# Daniel Njama Portfolio

Personal developer portfolio built with Next.js, React, and TypeScript.

## Structure

```text
app/
  components/      Page sections and small client interactions
  data/            Portfolio data used by components
  globals.css      Global theme, layout, and component styles
  layout.tsx       App metadata and document shell
  page.tsx         One-page portfolio composition
public/
  favicon.svg
  resume.pdf
```

## Commands

```bash
npm run dev
npm run lint
npm run build
npm run start
```

## Production Notes

- The portfolio is intentionally a one-page scrolling site for fast recruiter scanning.
- Project cards are driven by `app/data/projects.ts`.
- The contact form currently posts to FormSubmit. A future production hardening step is to replace that with a Next.js route handler plus a server-side email provider.
- `public/resume.pdf` is linked from the hero as the downloadable CV.
