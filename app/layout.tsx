import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://volna360.ru'),

  title: {
    default: 'Волна360 — Telegram бот новости с AI персонализацией | Новостной агрегатор',
    template: '%s | Волна360',
  },

  description: 'Умный новостной агрегатор в Telegram с ИИ. Голосовой дайджест, фильтрация спама, персональная лента новостей. Экономьте 2 часа в день.',

  keywords: [
    'telegram бот новости',
    'новостной бот телеграм',
    'новостной агрегатор',
    'агрегатор новостей',
    'ии новости',
    'ai персонализация',
    'голосовой дайджест новостей',
    'новости без спама',
    'волна360',
    'volna360',
  ],

  authors: [{ name: 'Волна360 Team' }],
  creator: 'Волна360',

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://volna360.ru',
    siteName: 'Волна360',
    title: 'Волна360 — Telegram бот новости | AI новостной агрегатор',
    description: 'Персональная лента новостей без спама. Голосовой дайджест, ИИ-фильтрация, 50+ источников.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Волна360 — AI новостной агрегатор',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Волна360 — Telegram бот новости с AI',
    description: 'Новостной агрегатор с ИИ. Голосовой дайджест, фильтрация спама.',
    images: ['/og-image.png'],
  },

  verification: {
    google: 'sUeTxQ0TwQIdD-1Pm1MRD7AfJz03q7_hI0SWNsnPBh8',
    yandex: '949987988fe62edc',
  },

  alternates: {
    canonical: 'https://volna360.ru',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" data-theme="dark">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <StructuredData />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
