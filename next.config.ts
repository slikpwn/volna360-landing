// next.config.ts (ПОЛНАЯ ВЕРСИЯ)
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',           // ← КРИТИЧНО для GitHub Pages
  trailingSlash: true,        // Для корректных путей
  images: {
    unoptimized: true,        // GitHub Pages не поддерживает Image Optimization
  },
  // basePath НЕ нужен для кастомного домена volna360.ru
}

export default nextConfig
