
import React from 'react';
import { Youtube, Instagram, Twitter, Music2 } from 'lucide-react';
import { LanguageType } from '../App';

const translations = {
  en: {
    class: "Class",
    info: "Information",
    sched: "Class Schedule",
    dance: "Dancers",
    about: "About Studio",
    faq: "FAQ",
    contact: "Contact Us",
    address: "3F, K-Building, 50 Giji-ro, Iseo-myeon, Wanju-gun, Jeonbuk State",
    ceo: "CEO: Taeart Kim",
    company: "THEART Co., Ltd."
  },
  ko: {
    class: "클래스",
    info: "정보",
    sched: "클래스 스케줄",
    dance: "댄서 소개",
    about: "스튜디오 소개",
    faq: "자주 묻는 질문",
    contact: "문의하기",
    address: "전북특별자치도 완주군 이서면 기지로 50 케이빌딩 3층 디아트댄스스튜디오",
    ceo: "대표이사 : 김태아트",
    company: "(주)디아트"
  },
  ja: {
    class: "クラス",
    info: "情報",
    sched: "クラススケジュール",
    dance: "ダンサー紹介",
    about: "スタジオ紹介",
    faq: "よくある質問",
    contact: "お問い合わせ",
    address: "全北特別自治道 完州郡 伊西面 基地路 50 Kビル 3階 ディアートダンススタジオ",
    ceo: "代表理事 : キム・テアート",
    company: "株式会社ディアート"
  },
  zh: {
    class: "课程",
    info: "信息",
    sched: "课程安排",
    dance: "舞者介绍",
    about: "关于工作室",
    faq: "常见问题",
    contact: "联系我们",
    address: "全北特别自治道 完州郡 伊西面 基地路 50 K大厦 3层 迪艺术舞蹈工作室",
    ceo: "代表理事 : 金泰艺术",
    company: "迪艺术股份有限公司"
  }
};

const Footer: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = translations[lang];
  const faqLink = "https://stupendous-shortbread-e6c2e2.netlify.app";
  const dancersLink = "https://kaleidoscopic-moxie-80c5dc.netlify.app";

  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-6 md:px-12">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-gray-400">{t.class}</h4>
            <ul className="space-y-2 text-[13px] font-bold">
              <li><a href="#" className="hover:opacity-50">{t.sched}</a></li>
              <li><a href={dancersLink} className="hover:opacity-50">{t.dance}</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[12px] font-bold uppercase tracking-widest text-gray-400">{t.info}</h4>
            <ul className="space-y-2 text-[13px] font-bold">
              <li><a href="#" className="hover:opacity-50">{t.about}</a></li>
              <li><a href={faqLink} className="hover:opacity-50">{t.faq}</a></li>
              <li><a href="#" className="hover:opacity-50 font-black">{t.contact}</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-4 flex flex-col items-center justify-center lg:items-end space-y-6">
            <div className="text-center lg:text-right">
              <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">THEART</h2>
              <p className="text-lg font-bold tracking-[0.2em] uppercase">Dance Studio HEAD OFFICE</p>
              <p className="text-2xl font-black mt-2">010-9584-9901</p>
              <p className="text-sm font-medium tracking-wider opacity-60">THEART1120@NAVER.COM</p>
            </div>
            <div className="flex space-x-4">
              <div className="h-10 w-32 bg-black rounded flex items-center justify-center cursor-pointer hover:bg-gray-800">
                <span className="text-white text-[10px] font-bold uppercase">App Store</span>
              </div>
              <div className="h-10 w-32 bg-black rounded flex items-center justify-center cursor-pointer hover:bg-gray-800">
                <span className="text-white text-[10px] font-bold uppercase">Google Play</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-12 pb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 text-[11px] text-gray-400 font-medium">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-black uppercase font-bold">
               <span>{t.company}</span>
               <span>{t.address}</span>
               <span>{t.ceo}</span>
            </div>
          </div>
          <div className="flex items-end justify-center lg:justify-end space-x-6">
            <a href="#" className="text-black hover:opacity-50 transition-opacity"><Youtube size={24} /></a>
            <a href="#" className="text-black hover:opacity-50 transition-opacity"><Instagram size={22} /></a>
            <a href="#" className="text-black hover:opacity-50 transition-opacity"><Twitter size={22} /></a>
            <a href="#" className="text-black hover:opacity-50 transition-opacity"><Music2 size={22} /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-400 border-t border-gray-50 pt-8">
          <p>© 2024 THEART Dance Studio. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
