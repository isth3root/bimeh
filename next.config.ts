import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/bimeh',
  assetPrefix: '/bimeh',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
