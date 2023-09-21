/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:locale/:slug-category",
        destination: "/:locale/category/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
