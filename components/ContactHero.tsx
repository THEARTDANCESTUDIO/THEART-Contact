
import React from 'react';
import { LanguageType } from '../App';

const translations = {
  en: { title: "CONTACT US", sub: "Let's Connect and Create Art Together" },
  ko: { title: "문의하기", sub: "함께 연결되어 예술을 만들어 나갑시다" },
  ja: { title: "お問い合わせ", sub: "共につながり、アートを創造しましょう" },
  zh: { title: "联系我们", sub: "让我们连接在一起，共同创造艺术" }
};

const ContactHero: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const { title, sub } = translations[lang];
  return (
    <section className="px-6 md:px-12 pt-16 pb-12 text-center">
      <h1 className="text-6xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tighter mb-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        {title}
      </h1>
      <p className="text-sm md:text-base font-medium tracking-widest text-gray-500 uppercase">
        {sub}
      </p>
    </section>
  );
};

export default ContactHero;
