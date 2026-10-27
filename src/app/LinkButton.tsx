"use client";

import { track } from "@vercel/analytics";
import type { LinkItem } from "@/links";

export function LinkButton({ link }: { link: LinkItem }) {
  return (
    <a
      href={link.href}
      className={`zl-button${link.featured ? " zl-button-featured" : ""}`}
      onClick={() => track("link_click", { id: link.id })}
    >
      <span className="zl-button-label">{link.label}</span>
      {link.sublabel ? <span className="zl-button-sublabel">{link.sublabel}</span> : null}
      <span className="zl-button-arrow" aria-hidden="true">
        →
      </span>
    </a>
  );
}
