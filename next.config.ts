import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/vi/**",
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com",
        pathname: "/s/files/**",
      },
    ],
  },
  async redirects() {
    return [
      { source: "/art", destination: "/#art", permanent: false },
      { source: "/training", destination: "/#plan", permanent: false },
      { source: "/my_space", destination: "/", permanent: false },
      { source: "/store", destination: "/#shop", permanent: false },
    ];
  },
};

export default nextConfig;
