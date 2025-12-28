/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Для кастомного домена basePath НЕ НУЖЕН!
  basePath: '',
  assetPrefix: '',
};

module.exports = nextConfig;
