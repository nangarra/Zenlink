import Image from "next/image";
import { LINKS } from "@/links";
import { LinkButton } from "./LinkButton";

export default function Home() {
  return (
    <main className="zl-page">
      <Image
        src="/bg-qigong-lake.webp"
        alt=""
        fill
        fetchPriority="high"
        sizes="100vw"
        className="zl-bg"
      />
      <div className="zl-bg-overlay" aria-hidden="true" />

      <div className="zl-content">
        <header className="zl-header">
          {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo, next/image adds nothing */}
          <img src="/zenpod-logo-white.svg" alt="Zen Pod" className="zl-logo" width={220} height={76} />
          <p className="zl-tagline">Breathwork · Qigong · Healing</p>
          <p className="zl-location">Bang Sare · Pattaya · Thailand</p>
        </header>

        <nav className="zl-links" aria-label="Zen Pod links">
          {LINKS.map((link) => (
            <LinkButton key={link.id} link={link} />
          ))}
        </nav>

        <footer className="zl-footer">© {new Date().getFullYear()} Zen Pod</footer>
      </div>
    </main>
  );
}
