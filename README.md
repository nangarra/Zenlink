# Zenlink

Zen Pod's "link in bio" page — the page people land on from the link in our
YouTube (and other) profiles. Mobile first, works on desktop too. Hosted on
Cloudflare as plain static files.

## Editing the buttons

All buttons live in [`src/links.ts`](src/links.ts). Each one has a label, an
optional smaller line under it, the URL it opens, and `featured: true` for the
gold highlighted button.

## Development

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint
npm run build     # static site in ./out
npm run preview   # serve ./out on Cloudflare's local runtime
```

## Deploying to Cloudflare

Next.js builds the page as static files (`output: "export"` in
`next.config.ts`), which Cloudflare serves as Workers static assets
(`wrangler.jsonc`).

**Automatic deploys from GitHub (recommended, one-time setup):** in the
Cloudflare dashboard go to *Workers & Pages → Create → Import a repository*,
pick `nangarra/Zenlink`, and use:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`

Every push to `main` then goes live. Add your own domain (e.g.
`links.zenpod.me`) under the worker's *Settings → Domains & Routes*, and set
the `SITE_URL` build variable to that address so link previews use it.

**Manual deploy from a computer:** `npx wrangler login`, then `npm run deploy`.

Visitor numbers: turn on *Web Analytics* for the worker in the Cloudflare
dashboard — no code needed.
