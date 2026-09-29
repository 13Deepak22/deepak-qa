import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  allowedDevOrigins: ["127.0.0.1"],
  outputFileTracingIncludes: {
    "/resume/download/[format]": [
      "./node_modules/@fontsource/source-sans-3/files/source-sans-3-latin-{400,600}-normal.woff",
      "./node_modules/@fontsource/fraunces/files/fraunces-latin-400-normal.woff",
    ],
  },
};

export default nextConfig;
