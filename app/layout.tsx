import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://volna360.ru'),
  title: 'Volna360 — Умный новостной агрегатор',
  description: 'Персонализированная лента новостей с AI-фильтрацией. Экономьте 2 часа в день.',
  keywords: 'новости, агрегатор, AI, персонализация, дайджест, telegram бот',
  openGraph: {
    title: 'Volna360 — Умный новостной агрегатор',
    description: 'Персонализированная лента новостей с AI-фильтрацией.',
    images: ['/images/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
