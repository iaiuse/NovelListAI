/** @type {import("next").NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: ""
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "pub-b7fd9c30cdbf439183b75041f5f71b92.r2.dev",
        port: ""
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "images.clerk.dev",
        port: ""
      },
      {
        protocol: "https",
        hostname: "www.faviconextractor.com",
        port: ""
      },
      {
        protocol: "https",
        hostname: "favicon.im",
        port: ""
      },
      {
        protocol: "https",
        hostname: "icon.bqb.cool",
        port: ""
      }
    ]
  },
  reactStrictMode: true,
  output: 'standalone',
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// Apply the next-intl plugin
export default withNextIntl(nextConfig);
