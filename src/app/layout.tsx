import type { Metadata, Viewport } from "next";
import { Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";

// Same typefaces as zenpod.me, so the hop from here to the site feels seamless.
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const title = "Zen Pod — Links";
const description = "Free Qigong flow, sessions and retreats from Zen Pod in Pattaya, Thailand.";

// Absolute base for the share-card image. Set SITE_URL to the live address
// (e.g. https://links.zenpod.me) in Cloudflare's build settings; Cloudflare
// Pages builds fall back to their own deployment URL.
const siteUrl = process.env.SITE_URL || process.env.CF_PAGES_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: { title, description, images: ["/bg-zenpod-poster.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/bg-zenpod-poster.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#2c1f0e",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${unbounded.variable} ${dmSans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
