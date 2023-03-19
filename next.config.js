/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP','FCP','FID','INP','TTFB']
  }
}

module.exports = nextConfig
