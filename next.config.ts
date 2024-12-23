import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    basePath:"/blog",
    output:"export",
    transpilePackages: ['next-mdx-remote']
};

export default nextConfig;
