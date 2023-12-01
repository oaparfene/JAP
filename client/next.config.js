/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  output: "standalone",
  images: {
    domains: ['images.unsplash.com', 'localhost'],
  }
}

module.exports = nextConfig
