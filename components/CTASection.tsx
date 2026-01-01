
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { LanguageType } from '../App';

const translations = {
  en: "Do you have any questions?",
  ko: "궁금한 점이 있으신가요?",
  ja: "ご不明な点はございますか？",
  zh: "您有什么疑问吗？"
};

const CTASection: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  return (
    <a 
      href="https://stupendous-shortbread-e6c2e2.netlify.app" 
      className="block bg-[#FF4F33] text-white py-12 px-6 overflow-hidden relative group cursor-pointer transition-colors duration-500 hover:bg-black"
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-4 animate-pulse">
           <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">{translations[lang]}</h2>
           <ArrowRight className="group-hover:translate-x-4 transition-transform duration-500" />
        </div>
        <div className="hidden md:block opacity-20 text-6xl font-black uppercase whitespace-nowrap tracking-tighter transition-all duration-700 group-hover:tracking-[0.1em] group-hover:opacity-40">
          SUPPORT SUPPORT SUPPORT SUPPORT SUPPORT
        </div>
      </div>
      {/* Decorative background overlay */}
      <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
    </a>
  );
};

export default CTASection;
