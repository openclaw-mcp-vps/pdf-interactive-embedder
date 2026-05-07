# Build Task: pdf-interactive-embedder

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: pdf-interactive-embedder
HEADLINE: Embed interactive elements into PDFs easily
WHAT: Tool to add games, forms, and interactive content to PDFs without complex programming
WHY: Tetris-in-PDF shows creative potential - businesses need simple interactive PDF creation
WHO PAYS: Marketing teams, educators, training companies, consultants
NICHE: document-tools
PRICE: $$39/mo

ARCHITECTURE SPEC:
A Next.js web app with drag-and-drop PDF editor for embedding interactive elements like forms, games, and widgets. Uses PDF-lib for manipulation and React components for the interactive elements that get compiled into the final PDF.

PLANNED FILES:
- app/page.tsx
- app/editor/page.tsx
- app/api/pdf/upload/route.ts
- app/api/pdf/embed/route.ts
- app/api/webhooks/lemonsqueezy/route.ts
- components/PDFViewer.tsx
- components/InteractiveElementLibrary.tsx
- components/ElementEditor.tsx
- lib/pdf-processor.ts
- lib/interactive-elements.ts
- lib/lemonsqueezy.ts
- types/pdf.ts

DEPENDENCIES: next, react, tailwindcss, pdf-lib, react-pdf, react-dnd, react-dnd-html5-backend, @lemonsqueezy/lemonsqueezy.js, zustand, lucide-react, canvas-confetti, framer-motion

REQUIREMENTS:
- Next.js 15 with App Router (app/ directory)
- TypeScript
- Tailwind CSS v4
- shadcn/ui components (npx shadcn@latest init, then add needed components)
- Dark theme ONLY — background #0d1117, no light mode
- Stripe Payment Link for payments (hosted checkout — use the URL directly as the Buy button href)
- Landing page that converts: hero, problem, solution, pricing, FAQ
- The actual tool/feature behind a paywall (cookie-based access after purchase)
- Mobile responsive
- SEO meta tags, Open Graph tags
- /api/health endpoint that returns {"status":"ok"}
- NO HEAVY ORMs: Do NOT use Prisma, Drizzle, TypeORM, Sequelize, or Mongoose. If the tool needs persistence, use direct SQL via `pg` (Postgres) or `better-sqlite3` (local), or just filesystem JSON. Reason: these ORMs require schema files and codegen steps that fail on Vercel when misconfigured.
- INTERNAL FILE DISCIPLINE: Every internal import (paths starting with `@/`, `./`, or `../`) MUST refer to a file you actually create in this build. If you write `import { Card } from "@/components/ui/card"`, then `components/ui/card.tsx` MUST exist with a real `export const Card` (or `export default Card`). Before finishing, scan all internal imports and verify every target file exists. Do NOT use shadcn/ui patterns unless you create every component from scratch — easier path: write all UI inline in the page that uses it.
- DEPENDENCY DISCIPLINE: Every package imported in any .ts, .tsx, .js, or .jsx file MUST be
  listed in package.json dependencies (or devDependencies for build-only). Before finishing,
  scan all source files for `import` statements and verify every external package (anything
  not starting with `.` or `@/`) appears in package.json. Common shadcn/ui peers that MUST
  be added if used:
  - lucide-react, clsx, tailwind-merge, class-variance-authority
  - react-hook-form, zod, @hookform/resolvers
  - @radix-ui/* (for any shadcn component)
- After running `npm run build`, if you see "Module not found: Can't resolve 'X'", add 'X'
  to package.json dependencies and re-run npm install + npm run build until it passes.

ENVIRONMENT VARIABLES (create .env.example):
- NEXT_PUBLIC_STRIPE_PAYMENT_LINK  (full URL, e.g. https://buy.stripe.com/test_XXX)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY  (pk_test_... or pk_live_...)
- STRIPE_WEBHOOK_SECRET  (set when webhook is wired)

BUY BUTTON RULE: the Buy button's href MUST be `process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK`
used as-is — do NOT construct URLs from a product ID, do NOT prepend any base URL,
do NOT wrap it in an embed iframe. The link opens Stripe's hosted checkout directly.

After creating all files:
1. Run: npm install
2. Run: npm run build
3. Fix any build errors
4. Verify the build succeeds with exit code 0

Do NOT use placeholder text. Write real, helpful content for the landing page
and the tool itself. The tool should actually work and provide value.


PREVIOUS ATTEMPT FAILED WITH:
Codex exited 1: Reading additional input from stdin...
OpenAI Codex v0.121.0 (research preview)
--------
workdir: /tmp/openclaw-builds/pdf-interactive-embedder
model: gpt-5.3-codex
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019e0452-f04a-7881-816d-96b957984350
--------
user
# Build Task: pdf-interactive-embedder

Build a complete, production-ready Next.js 15 App Router application.

PROJECT: pdf-interactive-embedder
HEADLINE: Embed 
Please fix the above errors and regenerate.