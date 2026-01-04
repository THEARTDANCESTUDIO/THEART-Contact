
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { LanguageType } from '../App';

const translations = {
  en: {
    head: "HQ / STUDIO",
    academy: "ACADEMY",
    academySub: "Curriculum & Registration",
    business: "PARTNERSHIP",
    businessSub: "Business & Projects",
    addr: "3F, K-Building, 50 Giji-ro, Iseo-myeon, Wanju-gun, Jeonbuk State",
    hours: "10:00 - 22:00 (KST)"
  },
  ko: {
    head: "스튜디오 위치",
    academy: "아카데미 상담",
    academySub: "클래스 등록 및 커리큘럼",
    business: "비즈니스 제휴",
    businessSub: "프로젝트 및 비즈니스 문의",
    addr: "전북특별자치도 완주군 이서면 기지로 50 케이빌딩 3층",
    hours: "평일 10:00 - 22:00"
  },
  ja: {
    head: "スタジオ位置",
    academy: "アカデミー",
    academySub: "登録および相談について",
    business: "ビジネス",
    businessSub: "協業およびプロジェクト",
    addr: "全北特別自治道 完州郡 伊西面 基地路 50 Kビル 3階",
    hours: "10:00 - 22:00"
  },
  zh: {
    head: "工作室地址",
    academy: "学院咨询",
    academySub: "课程注册及安排",
    business: "商务合作",
    businessSub: "项目及业务合作",
    addr: "全北特别自治道 完州郡 伊西面 基地路 50 K大厦 3层",
    hours: "10:00 - 22:00"
  }
};

const ContactInfo: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = translations[lang];

  const contactData = [
    {
      title: t.head,
      icon: <MapPin size={18} strokeWidth={1.5} />,
      content: (
        <div className="space-y-3">
          <p className="text-xl font-black tracking-tight leading-tight uppercase">THEART WANJU</p>
          <p className="text-gray-400 text-sm leading-relaxed max-w-[240px]">{t.addr}</p>
        </div>
      )
    },
    {
      title: t.academy,
      icon: <Phone size={18} strokeWidth={1.5} />,
      content: (
        <div className="space-y-3">
          <p className="text-xl font-black">010.9584.9901</p>
          <div className="flex items-center space-x-2 text-gray-400">
            <Clock size={14} />
            <p className="text-xs font-bold uppercase tracking-widest">{t.hours}</p>
          </div>
        </div>
      )
    },
    {
      title: t.business,
      icon: <Mail size={18} strokeWidth={1.5} />,
      content: (
        <div className="space-y-3">
          <a href="mailto:theart1120@naver.com" className="text-xl font-black block hover:text-studio-red transition-colors">THEART1120@NAVER.COM</a>
          <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">{t.businessSub}</p>
        </div>
      )
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-32 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
        {contactData.map((item, index) => (
          <div key={`${lang}-${index}`} className="flex flex-col space-y-10 reveal active">
            <div className="flex items-center space-x-4">
              <span className="w-10 h-10 flex items-center justify-center border border-gray-100 rounded-full text-black">
                {item.icon}
              </span>
              <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-studio-red">{item.title}</h3>
            </div>
            <div className="pt-4">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
