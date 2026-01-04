
import React from 'react';
import { LanguageType } from '../App';
import { ArrowUpRight } from 'lucide-react';

const translations = {
  en: { faq: "FAQ", inq: "DIRECT", faqSub: "COMMON QUESTIONS", inqSub: "TALK TO US" },
  ko: { faq: "자주 묻는 질문", inq: "1:1 문의", faqSub: "무엇이든 물어보세요", inqSub: "실시간 상담하기" },
  ja: { faq: "よくある質問", inq: "お問い合わせ", faqSub: "疑問を解決", inqSub: "直接サポート" },
  zh: { faq: "常见问题", inq: "在线咨询", faqSub: "常见疑问", inqSub: "即시支持" }
};

const InquirySection: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = translations[lang];
  const targetLink = "https://stupendous-shortbread-e6c2e2.netlify.app";

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* FAQ Card */}
        <a 
          href={targetLink}
          target="_self"
          className="group relative h-[500px] overflow-hidden bg-studio-gray flex flex-col justify-end p-12 transition-all duration-700 hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-black scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
          <div className="relative z-10 transition-all duration-700 group-hover:text-white">
            <div className="flex justify-between items-start mb-8">
               <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-60">{t.faqSub}</span>
               <ArrowUpRight size={32} strokeWidth={1} className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">{t.faq}</h2>
          </div>
        </a>

        {/* Direct Card */}
        <a 
          href={targetLink}
          target="_self"
          className="group relative h-[500px] overflow-hidden bg-studio-gray flex flex-col justify-end p-12 transition-all duration-700 hover:shadow-2xl"
        >
          <div className="absolute inset-0 bg-studio-red scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-[0.16,1,0.3,1]"></div>
          <div className="relative z-10 transition-all duration-700 group-hover:text-white">
            <div className="flex justify-between items-start mb-8">
               <span className="text-[10px] font-black tracking-[0.4em] uppercase opacity-40 group-hover:opacity-60">{t.inqSub}</span>
               <ArrowUpRight size={32} strokeWidth={1} className="opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0" />
            </div>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">{t.inq}</h2>
          </div>
        </a>
      </div>
    </section>
  );
};

export default InquirySection;
