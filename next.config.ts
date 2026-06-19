import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "https://*.ngrok-free.app",
    "10.26.181.13",
    "localhost",
  ],
};

export default nextConfig;