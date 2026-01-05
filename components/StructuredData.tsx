export default function StructuredData() {
  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Волна360',
    alternateName: 'Volna360',
    description: 'AI-новостной Telegram-бот с персонализацией, голосовыми дайджестами и умной фильтрацией спама',
    url: 'https://volna360.ru',
    applicationCategory: 'NewsApplication',
    operatingSystem: 'Telegram',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '0',
      highPrice: '299',
      priceCurrency: 'RUB',
      offerCount: 3,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    author: {
      '@type': 'Organization',
      name: 'Волна360 Team',
      url: 'https://volna360.ru',
    },
    featureList: [
      'AI-персонализация новостей',
      'Голосовые дайджесты',
      'Фильтрация спама и дубликатов',
      '50+ проверенных источников',
      'Геймификация и достижения',
    ],
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Волна360',
    url: 'https://volna360.ru',
    logo: 'https://volna360.ru/logo.png',
    sameAs: [
      'https://t.me/volna360_bot',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://t.me/volna360_bot',
      availableLanguage: ['Russian'],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Что такое Волна360?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Волна360 — это Telegram-бот для персонализированного потребления новостей с AI-фильтрацией, голосовыми дайджестами и геймификацией.',
        },
      },
      {
        '@type': 'Question',
        name: 'Сколько стоит Волна360?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Базовый тариф бесплатный. Pro-подписка стоит 99₽/месяц, Ultimate — 299₽/месяц с расширенными возможностями.',
        },
      },
      {
        '@type': 'Question',
        name: 'Как начать пользоваться?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Найдите @volna360_bot в Telegram, нажмите Start и следуйте инструкциям по настройке категорий и источников.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
