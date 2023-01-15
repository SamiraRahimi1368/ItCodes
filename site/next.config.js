/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  i18n: {
    locales: [
      'en',
      'fa'
    ],
    defaultLocale: 'en',
    localeDetection: false,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig


