import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "*.ngrok-free.app",
    "*10.26.181.13",
    "localhost",
    "10.57.194.13"
  ],
};

export default nextConfig;