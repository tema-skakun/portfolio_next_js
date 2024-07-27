/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio_next_js",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  reactStrictMode: true,
  output: "export",
};

module.exports = nextConfig;
