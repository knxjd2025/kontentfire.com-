import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Increase static generation timeout for large page count
  staticPageGenerationTimeout: 300,
};

export default nextConfig;
