'use client';

import { useState, useEffect, useRef, ReactNode } from 'react';
import styles from './page.module.css';
import Header from '@/components/Header';
import PhoneMockup from '@/components/PhoneMockup';
import ComparisonTimeline from '@/components/ComparisonTimeline';
import Roadmap from '@/components/Roadmap';
import FloatingBubbles from '@/components/FloatingBubbles';

// ==================== CONSTANTS ====================

const BOT_LINK = 'https://t.me/Volna360_bot';

// ==================== ICONS ====================

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

const BrainIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const SourcesIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const NoiseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h2l3-9 4 18 4-18 3 9h2" />
  </svg>
);

const FomoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);

const AiIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a4 4 0 0 1 4 4v2a4 4 0 0 1-8 0V6a4 4 0 0 1 4-4Z" />
    <path d="M12 12v10" />
    <path d="M8 18h8" />
    <circle cx="12" cy="6" r="1" />
  </svg>
);

const VoiceIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
    <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
    <line x1="12" y1="19" x2="12" y2="23" />
    <line x1="8" y1="23" x2="16" y2="23" />
  </svg>
);

const GameIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 11h4M8 9v4M15 12h.01M18 10h.01" />
    <rect width="20" height="12" x="2" y="6" rx="2" />
  </svg>
);

const SpeedIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const StarIcon = ({ filled = true, half = false }: { filled?: boolean; half?: boolean }) => (
  <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
    {half ? (
      <>
        <defs>
          <linearGradient id="halfStar">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          fill="url(#halfStar)"
        />
      </>
    ) : (
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    )}
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12,5 19,12 12,19" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

// ==================== DATA ====================

const tickerItems = [
  { flag: '🇺🇸', source: 'TechCrunch', text: 'DeepSeek R1 обогнал ChatGPT в App Store' },
  { flag: '🇺🇸', source: 'Bloomberg', text: 'Apple готовит складной iPhone к 2026' },
  { flag: '🇺🇸', source: 'CoinDesk', text: 'Bitcoin преодолел отметку $100K' },
  { flag: '🇺🇸', source: 'The Verge', text: 'Google достиг квантового превосходства' },
  { flag: '🇺🇸', source: 'Reuters', text: 'Nvidia стала самой дорогой компанией мира' },
  { flag: '🇺🇸', source: 'OpenAI Blog', text: 'OpenAI запустила o3 с новым reasoning' },
  { flag: '🇬🇧', source: 'BBC', text: 'Робот-хирург провёл операцию без врачей' },
  { flag: '🇷🇺', source: 'РБК', text: 'Яндекс представил новую нейросеть' },
  { flag: '🇨🇳', source: 'SCMP', text: 'Китай запустил крупнейший ИИ-центр' },
  { flag: '🇩🇪', source: 'Handelsblatt', text: 'Volkswagen инвестирует в ИИ €5B' },
];

const problems = [
  { icon: <ClockIcon />, title: '3+ часа в день', desc: 'Тратите на мониторинг новостей вместо работы' },
  { icon: <NoiseIcon />, title: 'Информационный шум', desc: '90% контента — повторы и кликбейт' },
  { icon: <SourcesIcon />, title: '10+ источников', desc: 'Приходится переключаться между приложениями' },
  { icon: <FomoIcon />, title: 'Страх упустить', desc: 'FOMO держит в постоянном напряжении' },
  { icon: <BrainIcon />, title: 'Когнитивная нагрузка', desc: 'Мозг устаёт фильтровать нерелевантное' },
  { icon: <AnalyticsIcon />, title: 'Нет аналитики', desc: 'Сложно отследить тренды и паттерны' },
];

const features = [
  { icon: <AiIcon />, title: 'AI-персонализация', desc: 'Нейросеть изучает ваши интересы и подбирает только релевантные новости', large: true },
  { icon: <VoiceIcon />, title: 'Голосовые дайджесты', desc: 'Слушайте новости за 5 минут по дороге на работу или в спортзале' },
  { icon: <GameIcon />, title: 'Геймификация', desc: 'Стрики, достижения и уровни — читать новости теперь интересно' },
  { icon: <SpeedIcon />, title: 'Мгновенная доставка', desc: 'Дайджест в Telegram ровно в выбранное вами время' },
  { icon: <ShieldIcon />, title: 'Без рекламы и спама', desc: 'Только полезный контент, никаких отвлечений' },
];

const steps = [
  { num: '01', title: 'Запустите бота', desc: 'Нажмите кнопку и откройте Volna360 в Telegram' },
  { num: '02', title: 'Выберите темы', desc: 'Укажите интересующие категории и источники' },
  { num: '03', title: 'Получайте дайджест', desc: 'Каждое утро — персональная подборка новостей' },
];

const testimonials = [
  { text: 'Наконец-то я трачу на новости 15 минут вместо 2 часов. AI реально понимает, что мне интересно.', author: 'Алексей К.', role: 'Продуктовый менеджер', rating: 5, color: '#06b6d4' },
  { text: 'Голосовой дайджест — находка. Слушаю по дороге на работу, экономлю время.', author: 'Мария С.', role: 'Директор стартапа', rating: 5, color: '#8b5cf6' },
  { text: 'Геймификация затягивает. Уже 45 дней стрик, не хочу терять!', author: 'Дмитрий В.', role: 'Аналитик данных', rating: 5, color: '#D4A853' },
  { text: 'Отличный сервис для тех, кто ценит своё время. Рекомендую коллегам.', author: 'Елена П.', role: 'Финансовый директор', rating: 4.5, color: '#ec4899' },
  { text: 'Подборка новостей очень точная. Иногда кажется, что бот читает мысли.', author: 'Игорь М.', role: 'Инвестор', rating: 5, color: '#34d399' },
  { text: 'Пользуюсь каждый день уже 3 месяца. Качество растёт с каждым обновлением.', author: 'Анна Р.', role: 'Маркетолог', rating: 4.5, color: '#f59e0b' },
  { text: 'Наконец-то могу быть в курсе без информационного перегруза.', author: 'Сергей Т.', role: 'Разработчик', rating: 5, color: '#6366f1' },
  { text: 'Удобный интерфейс, быстрая работа. Всё что нужно от новостного бота.', author: 'Ольга Н.', role: 'Предприниматель', rating: 5, color: '#14b8a6' },
];

const pricing = [
  {
    name: 'Бесплатно',
    price: '0',
    period: 'навсегда',
    features: ['1 дайджест в день', '5 категорий новостей', 'Базовая персонализация', 'Текстовый формат'],
    popular: false,
  },
  {
    name: 'Pro',
    price: '299',
    period: '/месяц',
    features: ['Безлимитные дайджесты', 'Все категории', 'AI-персонализация', 'Голосовые дайджесты', 'Приоритетная поддержка', 'Без рекламы'],
    popular: true,
  },
  {
    name: 'Команда',
    price: '999',
    period: '/месяц',
    features: ['Всё из Pro', 'До 10 участников', 'Общие дайджесты', 'Аналитика команды', 'API доступ', 'Персональный менеджер'],
    popular: false,
  },
];

const faqs = [
  { q: 'Как бот понимает мои интересы?', a: 'Volna360 использует машинное обучение для анализа ваших реакций на новости. Чем больше вы взаимодействуете с ботом, тем точнее становятся рекомендации.' },
  { q: 'Откуда берутся новости?', a: 'Мы агрегируем контент из 100+ проверенных источников: ведущие СМИ, отраслевые издания, Telegram-каналы экспертов и официальные блоги компаний.' },
  { q: 'Можно ли слушать дайджест?', a: 'Да! Пользователи Pro-тарифа получают аудио-версию дайджеста, озвученную нейросетью с естественным голосом. Идеально для прослушивания в дороге.' },
  { q: 'Как работает геймификация?', a: 'За ежедневное чтение новостей вы получаете стрики, достижения и поднимаетесь по уровням. Это мотивирует оставаться в курсе событий.' },
  { q: 'Мои данные в безопасности?', a: 'Абсолютно. Мы не передаём данные третьим лицам, не показываем рекламу и храним информацию на защищённых серверах.' },
];

// ==================== HOOKS ====================

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

function useTypingEffect(words: string[], typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return currentText;
}

// ==================== COMPONENTS ====================

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  scale?: number;
}

function TiltCard({ children, className = '', maxTilt = 10, scale = 1.02 }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: 'transform 0.1s ease-out' }}
    >
      {children}
    </div>
  );
}

// ==================== MAIN COMPONENT ====================

export default function Home() {
  const typingWords = ['за 5 минут', 'без шума', 'с AI', 'в Telegram'];
  const typedText = useTypingEffect(typingWords);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Scroll animations
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();
  const { ref: problemsRef, isVisible: problemsVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: comparisonRef, isVisible: comparisonVisible } = useScrollAnimation();
  const { ref: stepsRef, isVisible: stepsVisible } = useScrollAnimation();
  const { ref: testimonialsRef, isVisible: testimonialsVisible } = useScrollAnimation();
  const { ref: pricingRef, isVisible: pricingVisible } = useScrollAnimation();

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<StarIcon key={i} filled />);
    }
    if (hasHalf) {
      stars.push(<StarIcon key="half" half />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<StarIcon key={i} filled={false} />);
    }
    return stars;
  };

  return (
    <div className={styles.container}>
      {/* Floating Bubbles - GLOBAL */}
      <FloatingBubbles />

      {/* Header */}
      <Header botLink={BOT_LINK} />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroLogo}>
            <div className={styles.heroLogoGlow} />
            <img
              src="/images/logo-icon.png"
              alt="Volna360"
              className={styles.heroLogoImage}
            />
          </div>
          <h1 className={`${styles.title} ${styles.heroTitle}`}>
            <span className={styles.titleStatic}>Все новости дня</span>
            <span className={styles.titleDynamic}>{typedText}|</span>
          </h1>
          <p className={`${styles.description} ${styles.heroDescription}`}>
            AI-дайджест из 100+ источников. Персонально для вас, каждое утро в Telegram
          </p>
          <div className={styles.heroButton}>
            <a href={BOT_LINK} className={styles.button}>
              Запустить бесплатно
            </a>
          </div>
          <div className={`${styles.rating} ${styles.heroRating}`}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <span key={i} className={styles.star}><StarIcon filled /></span>
              ))}
            </div>
            <span>4.9 — уже 250+ пользователей</span>
          </div>
        </div>
      </section>

      {/* Ticker — Бегущая строка */}
      <div className={styles.ticker}>
        <div className={styles.tickerTrack}>
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className={styles.tickerItem}>
              <span className={styles.tickerFlag}>{item.flag}</span>
              <span className={styles.tickerSource}>{item.source}</span>
              <span className={styles.tickerText}>{item.text}</span>
            </div>
          ))}
          <div className={styles.tickerLive}>
            <span className={styles.tickerLiveDot} />
            LIVE
          </div>
        </div>
      </div>

      {/* Stats */}
      <section className={styles.section}>
        <div
          ref={statsRef}
          className={`${styles.sectionInner} ${styles.statsGrid} ${statsVisible ? styles.scrollVisible : styles.scrollHidden}`}
        >
          <div className={styles.statCard}>
            <div className={styles.statNumber}>100+</div>
            <div className={styles.statLabel}>Источников</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>93%</div>
            <div className={styles.statLabel}>Релевантность</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>~2ч</div>
            <div className={styles.statLabel}>Экономия в день</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>250+</div>
            <div className={styles.statLabel}>Пользователей</div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Информационная перегрузка</h2>
          <p className={styles.sectionSubtitle}>
            Современный профессионал тратит 3+ часа в день на мониторинг новостей
          </p>
          <div
            ref={problemsRef}
            className={styles.problemsGrid}
          >
            {problems.map((problem, i) => (
              <TiltCard
                key={i}
                className={`${styles.problemCard} ${problemsVisible ? styles.scrollVisible : styles.scrollHidden}`}
                maxTilt={8}
                scale={1.02}
              >
                <div className={styles.problemIcon}>{problem.icon}</div>
                <div className={styles.problemContent}>
                  <h3 className={styles.problemTitle}>{problem.title}</h3>
                  <p className={styles.problemDesc}>{problem.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Features with Mockup */}
      <section id="features" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Технологии будущего</h2>
          <p className={styles.sectionSubtitle}>
            Всё, что нужно для эффективного потребления новостей
          </p>
          <div
            ref={featuresRef}
            className={styles.featuresWithMockup}
          >
            {/* Phone Mockup */}
            <div className={styles.mockupWrapper}>
              <PhoneMockup />
            </div>

            {/* Features Grid */}
            <div className={styles.bento}>
              {features.map((feature, i) => (
                <TiltCard
                  key={i}
                  className={`${styles.bentoCard} ${feature.large ? styles.bentoLarge : ''} ${featuresVisible ? styles.scrollVisible : styles.scrollHidden}`}
                  maxTilt={6}
                  scale={1.02}
                >
                  <div className={styles.bentoIcon}>{feature.icon}</div>
                  <div className={styles.bentoContent}>
                    <h3 className={styles.bentoTitle}>{feature.title}</h3>
                    <p className={styles.bentoDesc}>{feature.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Timeline */}
      <section className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Утро профессионала</h2>
          <p className={styles.sectionSubtitle}>
            Сравните типичное утро с Volna360 и без
          </p>
          <div
            ref={comparisonRef}
            className={comparisonVisible ? styles.scrollVisible : styles.scrollHidden}
          >
            <ComparisonTimeline />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Начать просто</h2>
          <p className={styles.sectionSubtitle}>
            Три шага до персонального AI-дайджеста
          </p>
          <div
            ref={stepsRef}
            className={styles.stepsGrid}
          >
            {steps.map((step, i) => (
              <TiltCard
                key={i}
                className={`${styles.stepCard} ${stepsVisible ? styles.scrollVisible : styles.scrollHidden}`}
                maxTilt={5}
                scale={1.01}
              >
                <div className={styles.stepNumber}>{step.num}</div>
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Нам доверяют</h2>
          <p className={styles.sectionSubtitle}>Отзывы наших пользователей</p>

          <div
            ref={testimonialsRef}
            className={styles.testimonialsScroll}
          >
            <div className={styles.testimonialsTrack}>
              {testimonials.map((t, i) => (
                <TiltCard
                  key={i}
                  className={`${styles.testimonialCard} ${testimonialsVisible ? styles.scrollVisible : styles.scrollHidden}`}
                  maxTilt={5}
                  scale={1.01}
                >
                  <div className={styles.testimonialHeader}>
                    <div
                      className={styles.testimonialAvatar}
                      style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}88)` }}
                    >
                      {t.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className={styles.testimonialMeta}>
                      <div className={styles.testimonialName}>{t.author}</div>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </div>
                  <div className={styles.testimonialStars}>
                    {renderStars(t.rating).map((star, idx) => (
                      <span key={idx} className={styles.testimonialStar}>{star}</span>
                    ))}
                  </div>
                  <p className={styles.testimonialText}>"{t.text}"</p>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className={`${styles.section} ${styles.sectionRoadmap}`}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Развитие проекта</h2>
          <p className={styles.sectionSubtitle}>
            От идеи до глобального продукта
          </p>
          <Roadmap />
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Тарифы</h2>
          <p className={styles.sectionSubtitle}>
            Выберите подходящий план. Первые пользователи получают Pro бесплатно!
          </p>
          <div
            ref={pricingRef}
            className={styles.pricingGrid}
          >
            {pricing.map((plan, i) => (
              <TiltCard
                key={i}
                className={`${styles.pricingCard} ${plan.popular ? styles.pricingPopular : ''} ${pricingVisible ? styles.scrollVisible : styles.scrollHidden}`}
                maxTilt={4}
                scale={1.01}
              >
                {plan.popular && <div className={styles.pricingBadge}>Популярный</div>}
                <h3 className={styles.pricingName}>{plan.name}</h3>
                <div className={styles.pricingPrice}>
                  <span className={styles.pricingAmount}>{plan.price}₽</span>
                  <span className={styles.pricingPeriod}>{plan.period}</span>
                </div>
                <ul className={styles.pricingFeatures}>
                  {plan.features.map((feature, j) => (
                    <li key={j}>
                      <span className={styles.pricingCheck}><CheckIcon /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href={BOT_LINK} className={styles.pricingButton}>
                  {plan.popular ? 'Попробовать Pro' : 'Выбрать'}
                </a>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section}>
        <div className={styles.sectionInner}>
          <h2 className={styles.sectionTitle}>Вопросы и ответы</h2>
          <p className={styles.sectionSubtitle}>
            Всё, что вы хотели знать о Volna360
          </p>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div key={i} className={styles.faqItem}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <span className={`${styles.faqIcon} ${openFaq === i ? styles.faqIconOpen : ''}`}>
                    ▼
                  </span>
                </button>
                <div className={`${styles.faqAnswerWrapper} ${openFaq === i ? styles.faqAnswerWrapperOpen : ''}`}>
                  <div className={styles.faqAnswerInner}>
                    <div className={styles.faqAnswer}>{faq.a}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Готовы экономить 2 часа каждый день?</h2>
          <p className={styles.ctaSubtitle}>
            Присоединяйтесь к 250+ профессионалам, которые уже используют Volna360
          </p>
          <a href={BOT_LINK} className={styles.ctaButton}>
            <TelegramIcon />
            <span>Запустить бота</span>
            <span className={styles.ctaArrow}><ArrowRightIcon /></span>
          </a>
          <p className={styles.ctaNote}>Бесплатно • Без карты • Настройка за 30 секунд</p>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          {/* Top Section */}
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <img
                src="/images/logo-icon.png"
                alt="Volna360"
                className={styles.footerLogo}
              />
              <div className={styles.footerBrandText}>
                <span className={styles.footerBrandName}>VOLNA360</span>
                <span className={styles.footerBrandTagline}>Умные новости для занятых людей</span>
              </div>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.footerLinkGroup}>
                <div className={styles.footerLinkTitle}>Продукт</div>
                <a href="#features" className={styles.footerLink}>Возможности</a>
                <a href="#pricing" className={styles.footerLink}>Тарифы</a>
                <a href="#roadmap" className={styles.footerLink}>Развитие</a>
              </div>
              <div className={styles.footerLinkGroup}>
                <div className={styles.footerLinkTitle}>Поддержка</div>
                <a href="#faq" className={styles.footerLink}>Частые вопросы</a>
                <a href={BOT_LINK} className={styles.footerLink}>Написать в бот</a>
                <a href="mailto:hello@volna360.ru" className={styles.footerLink}>Email</a>
              </div>
              <div className={styles.footerLinkGroup}>
                <div className={styles.footerLinkTitle}>Компания</div>
                <a href="#" className={styles.footerLink}>О нас</a>
                <a href="#" className={styles.footerLink}>Блог</a>
                <a href="#" className={styles.footerLink}>Карьера</a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className={styles.footerDivider} />

          {/* Bottom Section */}
          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              <p>© 2024-2025 Volna360. Все права защищены.</p>
              <p className={styles.footerLegal}>
                <a href="#">Политика конфиденциальности</a>
                <span>•</span>
                <a href="#">Условия использования</a>
              </p>
            </div>

            <div className={styles.footerStatus}>
              <div className={styles.footerStatusDot} />
              <span>Все системы работают</span>
            </div>

            <div className={styles.footerTech}>
              <span>Сделано с</span>
              <span className={styles.footerHeart}>♥</span>
              <span>в России</span>
            </div>
          </div>

          {/* Decorative Tags */}
          <div className={styles.footerTags}>
            <span className={styles.footerTag}>AI-персонализация</span>
            <span className={styles.footerTag}>100+ источников</span>
            <span className={styles.footerTag}>Голосовой дайджест</span>
            <span className={styles.footerTag}>Telegram Bot</span>
            <span className={styles.footerTag}>Геймификация</span>
            <span className={styles.footerTag}>Без рекламы</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
