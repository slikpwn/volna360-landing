import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
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
    <html lang="ru" data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme') || 'dark';
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
