'use client'

import Script from 'next/script'

const YM_ID = '106150824'
const GA_ID = 'G-X414Y22LYP'

export default function Analytics() {
  return (
    <>
      {/* Яндекс.Метрика */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
          ym(106150824, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}
      </Script>
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/106150824" style={{ position: 'absolute', left: '-9999px' }} alt="" />
        </div>
      </noscript>

      {/* Google Analytics */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-X414Y22LYP" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-X414Y22LYP');
        `}
      </Script>
    </>
  )
}
