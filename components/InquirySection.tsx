
import React from 'react';
import { LanguageType } from '../App';

const translations = {
  en: { faq: "FAQ", inq: "INQUIRY", faqSub: "Common Questions", inqSub: "Direct Support" },
  ko: { faq: "자주 묻는 질문", inq: "1:1 문의", faqSub: "궁금한 점 확인하기", inqSub: "직접 문의하기" },
  ja: { faq: "よくある質問", inq: "お問い合わせ", faqSub: "よくあるご質問", inqSub: "直接サポート" },
  zh: { faq: "常见问题", inq: "咨询", faqSub: "常见疑问", inqSub: "直接支持" }
};

const InquirySection: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = translations[lang];
  const targetLink = "https://stupendous-shortbread-e6c2e2.netlify.app";

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* FAQ Card */}
        <a 
          href={targetLink}
          className="group relative h-[400px] overflow-hidden bg-gray-50 flex flex-col justify-center items-center cursor-pointer block"
        >
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          <div className="relative z-10 text-center transition-colors duration-500 group-hover:text-white px-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60 mb-2 block">{t.faqSub}</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{t.faq}</h2>
            <div className="w-12 h-[2px] bg-black group-hover:bg-white mx-auto transition-colors"></div>
          </div>
        </a>

        {/* Contact Form Link / Direct Card */}
        <a 
          href={targetLink}
          className="group relative h-[400px] overflow-hidden bg-gray-50 flex flex-col justify-center items-center cursor-pointer block"
        >
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>
          <div className="relative z-10 text-center transition-colors duration-500 group-hover:text-white px-4">
            <span className="text-xs font-bold tracking-[0.3em] uppercase opacity-60 mb-2 block">{t.inqSub}</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-4">{t.inq}</h2>
            <div className="w-12 h-[2px] bg-black group-hover:bg-white mx-auto transition-colors"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default InquirySection;
