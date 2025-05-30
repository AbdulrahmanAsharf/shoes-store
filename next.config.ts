import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
        remotePatterns: [
            { protocol: "https", hostname: "utfs.io", port: "", },
            { protocol: "https", hostname: "lh3.googleusercontent.com", port: "", },
            { protocol: "https", hostname: "platform-lookaside.fbsbx.com", port: "", },
        ],
    },
     experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
