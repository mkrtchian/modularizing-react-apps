/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/nextjs-template" : "";

const nextConfig = {
  trailingSlash: true,
  basePath: assetPrefix,
  output: "export",
};

export default nextConfig;
