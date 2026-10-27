import type { Metadata, Viewport } from "next";
import { Unbounded, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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

// Absolute base for the share-card image. Vercel sets this to the project's
// production domain; falls back to localhost for local builds.
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;

export const metadata: Metadata = {
  metadataBase: new URL(productionHost ? `https://${productionHost}` : "http://localhost:3000"),
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
        <Analytics />
      </body>
    </html>
  );
}
