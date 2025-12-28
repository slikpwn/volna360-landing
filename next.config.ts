import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: '/volna360-landing',
  assetPrefix: '/volna360-landing/'
}

export default nextConfig
