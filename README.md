# D'Belkis Cleaning Services

Marketing landing page for **D'Belkis**, a professional cleaning company based in Dubai. The site lets potential clients learn about the services offered, read customer reviews, find answers to common questions, and get in touch via a contact form or a WhatsApp floating button.

## Architecture

Single-page Next.js application using the **App Router**. There is one route (`app/page.tsx`) that composes the full page from a stack of independent section components:

```
HeroSection → ServicesSection → ReviewsSection → FAQSection → ContactSection → FooterSection
```

The contact form is handled by a **Next.js Server Action** (`actions/sendMail.ts`) that sends a notification email through Gmail SMTP via Nodemailer — no API routes needed.

Runtime configuration (SMTP credentials, WhatsApp deep-link, Calendly URL, site base URL) is managed through environment variables defined in `.env.local`.

## Main Dependencies

| Package | Purpose |
|---|---|
| `next` 16 | Framework — App Router, Server Actions, image optimisation |
| `react` 19 | UI library |
| `typescript` 5 | Static typing |
| `tailwindcss` 4 | Utility-first styling |
| `@fortawesome/react-fontawesome` | Social / UI icons (WhatsApp, Instagram, Facebook) |
| `nodemailer` | Contact-form email delivery via Gmail SMTP |
| `next/font/google` | Self-hosted Inter & Sansation fonts |

Dev tooling: ESLint (with `eslint-config-next`), Prettier with `prettier-plugin-tailwindcss`.

## Environment Variables

| Variable | Description |
|---|---|
| `SMTP_USER` | Gmail address used as sender and recipient |
| `SMTP_PASS` | Gmail app password |
| `WS_HI_LINK` | WhatsApp deep-link URL for the floating button |
| `SITE_URL` | Public base URL (used in metadata and Open Graph) |

## Getting Started

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build
pnpm start
```

Deployed on **Vercel**. Started 2025-01-13.
