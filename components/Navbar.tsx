
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { LanguageType } from '../App';

const languages: { code: LanguageType; label: string; region: string }[] = [
  { code: 'en', label: 'English', region: 'Global' },
  { code: 'ko', label: '한국어', region: 'Korea' },
  { code: 'ja', label: '日本語', region: 'Japan' },
  { code: 'zh', label: '中文', region: 'China' }
];

const scheduleLink = "https://illustrious-pegasus-596112.netlify.app";

const menuData = {
  en: [
    { name: 'Dancers', link: 'https://kaleidoscopic-moxie-80c5dc.netlify.app' },
    { name: 'Classes', link: scheduleLink },
    { name: 'Store', link: '#' }
  ],
  ko: [
    { name: '댄서', link: 'https://kaleidoscopic-moxie-80c5dc.netlify.app' },
    { name: '클래스', link: scheduleLink },
    { name: '스토어', link: '#' }
  ],
  ja: [
    { name: 'ダンサー', link: 'https://kaleidoscopic-moxie-80c5dc.netlify.app' },
    { name: 'クラス', link: scheduleLink },
    { name: 'ストア', link: '#' }
  ],
  zh: [
    { name: '舞者', link: 'https://kaleidoscopic-moxie-80c5dc.netlify.app' },
    { name: '课程', link: scheduleLink },
    { name: '商店', link: '#' }
  ]
};

interface NavbarProps {
  currentLang: LanguageType;
  onLangChange: (lang: LanguageType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentLang, onLangChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGlobalOpen, setIsGlobalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentMenu = menuData[currentLang];
  const homeLink = "https://theartdancestudio1120.netlify.app";

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-[0_1px_0_0_rgba(0,0,0,0.05)]' : 'bg-transparent py-8'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href={homeLink} target="_self" className="group flex flex-col items-start leading-none no-underline">
            <span className="text-2xl font-[900] tracking-tighter uppercase text-black transition-all duration-500 group-hover:tracking-[0.15em]">THEART</span>
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase opacity-30 -mt-0.5 text-black">PREMIUM STUDIO</span>
          </a>

          <div className="hidden lg:flex items-center space-x-12 text-[11px] font-bold uppercase tracking-[0.2em]">
            {currentMenu.map((item) => (
              <a key={item.name} href={item.link} target="_self" className="relative group overflow-hidden py-2">
                <span className="block group-hover:-translate-y-full transition-transform duration-700 ease-out text-black">{item.name}</span>
                <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-700 ease-out text-gray-400">{item.name}</span>
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            <button onClick={() => setIsGlobalOpen(true)} className="flex items-center space-x-2 cursor-pointer hover:opacity-40 transition-all duration-500">
              <Globe size={15} strokeWidth={2} className="text-black" />
              <span className="text-[10px] font-black uppercase tracking-widest text-black">
                {languages.find(l => l.code === currentLang)?.label}
              </span>
            </button>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) lg:hidden pt-32 px-10 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-10">
            {currentMenu.map((item) => (
              <a key={item.name} href={item.link} target="_self" className="text-5xl font-black uppercase tracking-tighter hover:text-studio-red transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{item.name}</a>
            ))}
            <div className="pt-12 border-t border-gray-100">
               <button onClick={() => { setIsMobileMenuOpen(false); setIsGlobalOpen(true); }} className="flex items-center space-x-4">
                 <Globe size={24} />
                 <span className="text-sm font-bold uppercase tracking-[0.2em]">Region / Language</span>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Panel */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-700 ${isGlobalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setIsGlobalOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-lg bg-white shadow-2xl transition-transform duration-1000 cubic-bezier(0.16, 1, 0.3, 1) p-16 flex flex-col ${isGlobalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-24">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300">Region Selection</span>
            <button onClick={() => setIsGlobalOpen(false)} className="group flex items-center space-x-3 text-black hover:opacity-50 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-widest">Close</span>
              <X size={28} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-700" />
            </button>
          </div>
          <div className="flex-grow">
            <h2 className="serif text-5xl font-normal italic mb-16 leading-tight">Art flows beyond borders. <br /><span className="not-italic font-black text-black uppercase tracking-tighter">Choose your language</span></h2>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => { onLangChange(lang.code); setTimeout(() => setIsGlobalOpen(false), 500); }}
                  className={`w-full group flex items-center justify-between py-8 border-b border-gray-100 transition-all duration-700 ${currentLang === lang.code ? 'text-black' : 'text-gray-300 hover:text-black hover:pl-6'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] mb-2">{lang.region}</span>
                    <span className="text-3xl font-black uppercase tracking-tighter">{lang.label}</span>
                  </div>
                  <ChevronRight size={24} strokeWidth={1} className={`transition-all duration-700 ${currentLang === lang.code ? 'opacity-100 translate-x-0 text-studio-red' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
