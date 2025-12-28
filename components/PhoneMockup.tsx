'use client';

import { useState, useEffect } from 'react';
import styles from './PhoneMockup.module.css';

const demoNews = [
  { cat: '🤖 AI', title: 'DeepSeek R1 обогнал ChatGPT в App Store', time: '2 мин' },
  { cat: '🔬 Science', title: 'Google Quantum: первое квантовое превосходство', time: '5 мин' },
  { cat: '💰 Business', title: 'Alphabet вложит $4.75B в чистую энергию для AI', time: '3 мин' },
  { cat: '🏥 Health', title: 'Робот-хирург впервые провёл операцию без человека', time: '4 мин' },
  { cat: '🚀 Tech', title: 'Humanoid-роботы в Китае: 3x эффективнее людей', time: '3 мин' },
  { cat: '🌌 Space', title: 'Обсерватория Рубин: миллионы новых галактик', time: '6 мин' },
  { cat: '💹 Finance', title: 'Nvidia: спрос на чипы "вне графиков"', time: '2 мин' },
  { cat: '🧠 AI', title: 'AI научился анализировать собственное мышление', time: '4 мин' },
  { cat: '⚛️ Quantum', title: 'Квантовые компьютеры: самовосстановление в реальном времени', time: '5 мин' },
  { cat: '🌍 World', title: 'Встреча Трампа и Зеленского: итоги переговоров', time: '3 мин' },
];

export default function PhoneMockup() {
  const [currentTime, setCurrentTime] = useState('08:00');
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoNews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.phone}>
        {/* Dynamic Island */}
        <div className={styles.dynamicIsland}>
          <div className={styles.islandCamera} />
        </div>

        {/* Screen */}
        <div className={styles.screen}>
          {/* Status Bar */}
          <div className={styles.statusBar}>
            <span>{currentTime}</span>
            <div className={styles.statusIcons}>
              <span>5G</span>
              <span>100%</span>
            </div>
          </div>

          {/* Telegram Header */}
          <div className={styles.chatHeader}>
            <div className={styles.chatAvatar}>
              <img src="/images/logo-icon.png" alt="" />
            </div>
            <div className={styles.chatInfo}>
              <div className={styles.chatName}>Volna360</div>
              <div className={styles.chatStatus}>бот</div>
            </div>
          </div>

          {/* Messages */}
          <div className={styles.messages}>
            <div className={styles.messageBot}>
              <div className={styles.messageContent}>
                <div className={styles.messageGreeting}>
                  ☀️ Доброе утро!
                </div>
                <div className={styles.messageText}>
                  Ваш персональный дайджест на <strong>28 декабря 2025</strong>:
                </div>
              </div>
            </div>

            <div className={styles.newsList}>
              {demoNews.slice(0, 5).map((news, i) => (
                <div
                  key={i}
                  className={`${styles.newsItem} ${i === activeIndex % 5 ? styles.newsItemActive : ''}`}
                >
                  <span className={styles.newsNum}>{i + 1}.</span>
                  <span className={styles.newsCat}>{news.cat}</span>
                  <span className={styles.newsTitle}>{news.title}</span>
                  <span className={styles.newsTime}>{news.time}</span>
                </div>
              ))}
            </div>

            <div className={styles.messageActions}>
              <button className={styles.actionBtn}>
                <span>🎧</span> Прослушать
              </button>
              <button className={styles.actionBtnSecondary}>
                <span>📖</span> Ещё 5
              </button>
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className={styles.homeIndicator} />
      </div>

      {/* Reflection */}
      <div className={styles.reflection} />

      {/* Glow */}
      <div className={styles.glow} />
    </div>
  );
}
