
import React from 'react';
import { MapPin, Phone, Mail, Building2 } from 'lucide-react';
import { LanguageType } from '../App';

const translations = {
  en: {
    head: "Headquarters",
    academy: "Academy Inquiry",
    academySub: "For class registrations and inquiries.",
    business: "Business Inquiry",
    businessSub: "Available Mon - Fri, 10:00 AM - 6:00 PM",
    addr: "3F, K-Building, 50 Giji-ro, Iseo-myeon, Wanju-gun, Jeonbuk State"
  },
  ko: {
    head: "본사",
    academy: "아카데미 문의",
    academySub: "클래스 등록 및 상담 문의",
    business: "비즈니스 문의",
    businessSub: "월 - 금 운영, 오전 10시 - 오후 6시",
    addr: "전북특별자치도 완주군 이서면 기지로 50 케이빌딩 3층 디아트댄스스튜디오"
  },
  ja: {
    head: "本社",
    academy: "アカデミーお問い合わせ",
    academySub: "クラス登録および相談について",
    business: "ビジネスお問い合わせ",
    businessSub: "月 - 金、午前 10:00 - 午후 6:00",
    addr: "全北特別自治道 完州郡 伊西面 基地路 50 Kビル 3階 ディアートダンススタジオ"
  },
  zh: {
    head: "总部",
    academy: "学院咨询",
    academySub: "关于课程注册及咨询",
    business: "业务咨询",
    businessSub: "周一 - 周五, 上午 10:00 - 下午 6:00",
    addr: "全北特别自治道 完州郡 伊西面 基地路 50 K大厦 3层 迪艺术舞蹈工作室"
  }
};

const ContactInfo: React.FC<{ lang: LanguageType }> = ({ lang }) => {
  const t = translations[lang];

  const contactData = [
    {
      title: t.head,
      icon: <MapPin size={20} />,
      content: (
        <div className="space-y-1">
          <p className="font-bold text-lg">010-9584-9901</p>
          <p className="text-gray-600 leading-relaxed">{t.addr}</p>
        </div>
      )
    },
    {
      title: t.academy,
      icon: <Mail size={20} />,
      content: (
        <div className="space-y-1">
          <a href="mailto:theart1120@naver.com" className="font-bold hover:underline">theart1120@naver.com</a>
          <p className="text-gray-500 text-sm">{t.academySub}</p>
        </div>
      )
    },
    {
      title: t.business,
      icon: <Building2 size={20} />,
      content: (
        <div className="space-y-3">
          <div className="space-y-1">
            <p className="font-bold">010-9584-9901</p>
            <a href="mailto:theart1120@naver.com" className="font-bold hover:underline">theart1120@naver.com</a>
          </div>
          <p className="text-gray-500 text-sm italic">{t.businessSub}</p>
        </div>
      )
    }
  ];

  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-200 pt-16">
        {contactData.map((item, index) => (
          <div key={`${lang}-${index}`} className="space-y-6 animate-in fade-in duration-700" style={{ animationDelay: `${index * 150}ms` }}>
            <div className="flex items-center space-x-3">
              <span className="p-2 bg-black text-white rounded-full">
                {item.icon}
              </span>
              <h3 className="text-xl font-black uppercase tracking-tight">{item.title}</h3>
            </div>
            <div className="text-base">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfo;
