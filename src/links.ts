// The buttons on the page, top to bottom. To add, remove or reorder a link,
// edit this list — nothing else needs to change.
//
// `id` is what shows up in Vercel Analytics when someone taps the button
// (event "link_click"), so keep it short and stable.

export type LinkItem = {
  id: string;
  label: string;
  sublabel?: string;
  href: string;
  // Highlighted with the gold gradient — use for the main thing you want
  // people to tap.
  featured?: boolean;
};

export const LINKS: LinkItem[] = [
  {
    id: "free-qigong-flow",
    label: "Free Qigong Flow",
    sublabel: "Follow along at home — no experience needed",
    href: "https://after-care-app.web.app/flows/play/90e96ca3-318a-49c0-820c-93c538b8a269",
    featured: true,
  },
  {
    id: "zenpod-website",
    label: "Visit the Zen Pod Website",
    sublabel: "Sessions, retreats & training in Pattaya, Thailand",
    href: "https://www.zenpod.me",
  },
];
