/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === "production";
const assetPrefix = isProduction ? "/modularizing-react-apps" : "";

const nextConfig = {
  trailingSlash: true,
  basePath: assetPrefix,
  output: "export",
};

export default nextConfig;
