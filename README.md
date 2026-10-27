# Zenlink

Zen Pod's "link in bio" page — the page people land on from the link in our
YouTube (and other) profiles. Mobile first, works on desktop too.

## Editing the buttons

All buttons live in [`src/links.ts`](src/links.ts). Each one has a label, an
optional smaller line under it, the URL it opens, and `featured: true` for the
gold highlighted button. Taps are counted in Vercel Analytics as the
`link_click` event, by the link's `id`.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Deploys on Vercel like zenpod.me — import this repo as a new Vercel project;
no environment variables are needed.
