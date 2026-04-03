/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "proglideexpresscarwash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "proglideexpresscarwash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "washworldcarwash.net",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
