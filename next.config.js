/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cloudflare-ipfs.com", "loremflickr.com"],
  },
  experimental: { appDir: true },
  use: ["style-loader", "css-loader", "sass-loader"],
  exclude: [/node_modules/],
};

module.exports = nextConfig;
