import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "old-images.hb.ru-msk.vkcs.cloud",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
