import type { NextConfig } from "next";

// Built as plain static files (into ./out) and served by Cloudflare —
// see wrangler.jsonc and the README.
const nextConfig: NextConfig = {
  output: "export",
};

export default nextConfig;
