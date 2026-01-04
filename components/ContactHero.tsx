
import React from 'react';
import { LanguageType } from '../App';

const translations = {
  en: { title: "CONTACT", sub: "EXPRESSION STARTS WITH A SINGLE QUESTION" },
  ko: { title: "문의하기", sub: "모든 움직임은 하나의 질문에서 시작됩니다" },
  ja: { title: "お問い合わせ", sub: "すべての表現は、一つの問いから始まる" },
  zh: { title: "联系我们", sub: "所有的表达都始于一个问题" }
};

const ContactHero: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const { title, sub } = translations[lang];
  return (
    <section className="px-6 md:px-12 pt-32 pb-24 text-center overflow-hidden bg-white">
      <div className="max-w-[1440px] mx-auto">
        <span className="text-[10px] md:text-[12px] font-black tracking-[0.6em] text-studio-red uppercase block mb-8 animate-in fade-in duration-1000">
          THE ART OF MOVEMENT
        </span>
        <h1 className="text-7xl md:text-9xl lg:text-[180px] font-black uppercase tracking-tighter mb-10 leading-[0.85] animate-in fade-in slide-in-from-bottom-8 duration-1000">
          {title}
        </h1>
        <div className="flex flex-col items-center">
            <div className="w-px h-24 bg-black/10 mb-10"></div>
            <p className="serif italic text-lg md:text-2xl text-gray-500 animate-in fade-in duration-1000 delay-500 max-w-2xl">
              {sub}
            </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
