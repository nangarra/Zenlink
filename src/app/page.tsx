import { LINKS } from "@/links";
import { LinkButton } from "./LinkButton";

export default function Home() {
  return (
    <main className="zl-page">
      {/* Same background video as the zenpod.me homepage hero. HEVC first —
          under half the size, so Safari/iOS start playing sooner; other
          browsers skip it for the H.264 file. The poster shows until the
          video plays (and stays if autoplay is blocked, e.g. Low Power Mode). */}
      <video className="zl-bg" autoPlay muted loop playsInline preload="auto" poster="/bg-zenpod-poster.jpg" aria-hidden="true">
        <source src="/bg-zenpod-hevc.mp4" type="video/mp4; codecs=hvc1" />
        <source src="/bg-zenpod.mp4" type="video/mp4" />
      </video>
      <div className="zl-bg-overlay" aria-hidden="true" />

      <div className="zl-content">
        <header className="zl-header">
          {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo, next/image adds nothing */}
          <img src="/zenpod-logo-white.svg" alt="Zen Pod" className="zl-logo" width={220} height={76} />
          <p className="zl-tagline">Heal. Restore. Transform.</p>
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
