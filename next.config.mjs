const isGithubPages = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: isGithubPages ? "/Lume" : "",
  assetPrefix: isGithubPages ? "/Lume/" : "",
};

export default nextConfig;
