'use client';

import { useState } from 'react';
import styles from './Roadmap.module.css';

const roadmapData = [
  {
    phase: 'Начало',
    period: 'Дек 2024',
    status: 'done',
    color: '#34d399',
    items: ['Исследование', 'Концепция', 'Прототипы'],
  },
  {
    phase: 'Основа',
    period: 'Q1 2025',
    status: 'done',
    color: '#06b6d4',
    items: ['Запуск бота', 'Персонализация', 'Голос'],
  },
  {
    phase: 'Рост',
    period: 'Q2 2025',
    status: 'done',
    color: '#8b5cf6',
    items: ['Достижения', 'Рейтинг', 'Бета-тест'],
  },
  {
    phase: 'Масштаб',
    period: 'Q3 2025',
    status: 'done',
    color: '#D4A853',
    items: ['Публичный запуск', 'Тарифы', 'Клиенты'],
  },
  {
    phase: 'Развитие',
    period: 'Q4 2025',
    status: 'current',
    color: '#ec4899',
    items: ['Дайджест 2.0', 'Расширение', 'Приложение'],
  },
  {
    phase: 'Будущее',
    period: '2026',
    status: 'upcoming',
    color: '#6366f1',
    items: ['AI-помощник', 'Интеграции', 'Глобально'],
  },
];

const statusLabels: Record<string, string> = {
  done: 'Завершено',
  current: 'Сейчас',
  upcoming: 'Скоро',
};

export default function Roadmap() {
  const [activePhase, setActivePhase] = useState(4);

  return (
    <div className={styles.wrapper}>
      {/* Timeline Line */}
      <div className={styles.timelineLine}>
        <div className={styles.timelineProgress} />
      </div>

      {/* Phases */}
      <div className={styles.phases}>
        {roadmapData.map((phase, i) => (
          <div
            key={i}
            className={`${styles.phase} ${activePhase === i ? styles.phaseActive : ''}`}
            onClick={() => setActivePhase(i)}
          >
            {/* Node */}
            <div
              className={`${styles.node} ${styles[`node${phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}`]}`}
              style={{ borderColor: phase.color }}
            >
              {(phase.status === 'done' || phase.status === 'current') && (
                <div className={styles.nodeInner} style={{ background: phase.color }} />
              )}
              {phase.status === 'current' && <div className={styles.nodePulse} style={{ borderColor: phase.color }} />}
            </div>

            {/* Status */}
            <div className={`${styles.status} ${styles[`status${phase.status.charAt(0).toUpperCase() + phase.status.slice(1)}`]}`}>
              {statusLabels[phase.status]}
            </div>

            {/* Card */}
            <div className={styles.card}>
              <div className={styles.cardHeader} style={{ color: phase.color }}>
                {phase.phase}
              </div>
              <div className={styles.cardPeriod}>{phase.period}</div>
              <div className={styles.cardItems}>
                {phase.items.map((item, j) => (
                  <div key={j} className={styles.cardItem}>
                    <span className={styles.cardItemDot} style={{
                      background: phase.status === 'upcoming' ? 'var(--border-secondary)' : phase.color
                    }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={styles.legendDot} style={{ background: '#34d399' }} />
          Завершено
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDotPulse}>
            <span style={{ background: '#ec4899' }} />
          </span>
          Сейчас
        </div>
        <div className={styles.legendItem}>
          <span className={styles.legendDotEmpty} />
          Планируется
        </div>
      </div>
    </div>
  );
}
