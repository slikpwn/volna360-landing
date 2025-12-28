'use client';

import styles from './ComparisonTimeline.module.css';

const withoutData = [
  { time: '7:00', icon: 'chaos', title: 'Открываете 10+ приложений', desc: 'Telegram, Twitter, РБК, VC, Habr...' },
  { time: '7:30', icon: 'scroll', title: 'Листаете бесконечные ленты', desc: 'Алгоритмы показывают не то, что нужно' },
  { time: '8:15', icon: 'noise', title: 'Тонете в информационном шуме', desc: '90% — повторы, кликбейт, реклама' },
  { time: '8:45', icon: 'stress', title: 'Опаздываете и нервничаете', desc: 'Потеряно 2+ часа, а важное пропущено' },
];

const withData = [
  { time: '7:00', icon: 'notification', title: 'Получаете 1 дайджест', desc: 'Персональная подборка в Telegram' },
  { time: '7:05', icon: 'headphones', title: 'Слушаете за 5 минут', desc: 'Голосовой дайджест в душе или по дороге' },
  { time: '7:10', icon: 'target', title: 'В курсе всего важного', desc: 'AI отфильтровал только релевантное' },
  { time: '7:15', icon: 'coffee', title: 'Пьёте кофе спокойно', desc: 'Экономия 2+ часа каждый день' },
];

// SVG Icons
const Icons: Record<string, JSX.Element> = {
  chaos: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="7" height="7" rx="1.5"/>
      <rect x="15" y="3" width="7" height="7" rx="1.5"/>
      <rect x="2" y="14" width="7" height="7" rx="1.5"/>
      <rect x="15" y="14" width="7" height="7" rx="1.5"/>
      <path d="M9 6.5h6M9 17.5h6M5.5 10v4M18.5 10v4" strokeDasharray="2 2"/>
    </svg>
  ),
  scroll: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2"/>
      <path d="M8 6h8M8 10h8M8 14h5"/>
      <path d="M12 18v-4M9 16l3 4 3-4"/>
    </svg>
  ),
  noise: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M8 9s1-1 4-1 4 1 4 1"/>
      <circle cx="9" cy="10" r="1.5" fill="currentColor"/>
      <circle cx="15" cy="10" r="1.5" fill="currentColor"/>
      <path d="M8 15s1 2 4 2 4-2 4-2"/>
      <path d="M4 4l16 16"/>
    </svg>
  ),
  stress: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v4l2.5 2.5"/>
      <path d="M4.5 4.5l2 2M19.5 4.5l-2 2"/>
      <path d="M8 16s1.5-2 4-2 4 2 4 2"/>
    </svg>
  ),
  notification: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
      <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
      <circle cx="18" cy="4" r="3" fill="#34d399" stroke="none"/>
    </svg>
  ),
  headphones: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z"/>
      <path d="M6 1v3M10 1v3M14 1v3"/>
    </svg>
  ),
  // Результаты — кастомные SVG вместо эмодзи
  timeLost: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l-4 2"/>
      <path d="M4 4l16 16"/>
    </svg>
  ),
  timeSaved: (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 6v6l3 3" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 8l2-2M19 10l2-1M20 14h2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
};

export default function ComparisonTimeline() {
  return (
    <div className={styles.container}>
      {/* WITHOUT */}
      <div className={styles.column}>
        <div className={styles.columnHeader}>
          <div className={`${styles.headerBadge} ${styles.headerBadgeBad}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.headerBadgeIcon}>
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
            Без Volna360
          </div>
        </div>
        <div className={styles.timeline}>
          {withoutData.map((item, i) => (
            <div key={i} className={`${styles.timelineItem} ${styles.timelineItemBad}`}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineTime}>{item.time}</div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineIcon}>
                  {Icons[item.icon]}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <div className={styles.timelineDesc}>{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <div className={`${styles.timelineResult} ${styles.timelineResultBad}`}>
            <span className={styles.resultIconSvg}>{Icons.timeLost}</span>
            <span>−3 часа</span>
          </div>
        </div>
      </div>

      {/* VS Divider */}
      <div className={styles.divider}>
        <div className={styles.dividerLine} />
        <div className={styles.dividerText}>VS</div>
        <div className={styles.dividerLine} />
      </div>

      {/* WITH */}
      <div className={styles.column}>
        <div className={styles.columnHeader}>
          <div className={`${styles.headerBadge} ${styles.headerBadgeGood}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className={styles.headerBadgeIcon}>
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            С Volna360
          </div>
        </div>
        <div className={styles.timeline}>
          {withData.map((item, i) => (
            <div key={i} className={`${styles.timelineItem} ${styles.timelineItemGood}`}>
              <div className={styles.timelineDot} />
              <div className={styles.timelineTime}>{item.time}</div>
              <div className={styles.timelineCard}>
                <div className={styles.timelineIcon}>
                  {Icons[item.icon]}
                </div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineTitle}>{item.title}</div>
                  <div className={styles.timelineDesc}>{item.desc}</div>
                </div>
              </div>
            </div>
          ))}
          <div className={`${styles.timelineResult} ${styles.timelineResultGood}`}>
            <span className={styles.resultIconSvg}>{Icons.timeSaved}</span>
            <span>+2 часа</span>
          </div>
        </div>
      </div>
    </div>
  );
}
