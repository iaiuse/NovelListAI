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
  experimental: {
    runtime: 'experimental-edge',
  },
  // 添加以下配置以支持动态路由的静态生成
  //async rewrites() {
  //  return [
  //    {
  //      source: '/:locale/dashboard/:path*',
  //      destination: '/dashboard/:path*',
  //    },
  //  ];
  //},
};

const withNextIntl = createNextIntlPlugin('./i18n.ts');

// 应用 next-intl 插件并导出配置
export default withNextIntl(nextConfig);