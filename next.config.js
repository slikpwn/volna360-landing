/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Замени 'volna360-landing' на название твоего репозитория!
  basePath: process.env.NODE_ENV === 'production' ? '/volna360-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/volna360-landing/' : '',
};

module.exports = nextConfig;
