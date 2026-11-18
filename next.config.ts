import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root to this project; a stray package-lock.json in the
  // user home directory otherwise makes Next.js infer the wrong root.
  outputFileTracingRoot: __dirname,
  turbopack: { root: __dirname },
};

export default nextConfig;
