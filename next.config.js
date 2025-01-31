/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {},
  reactStrictMode: true,
  swcMinify: true,
  experimental: {},
  eslint: {
    dirs: ['app'],
  },
  images: {
    unoptimized: true,
    domains: ['static.wixstatic.com'],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
