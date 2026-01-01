
import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { LanguageType } from '../App';

const languages: { code: LanguageType; label: string; region: string }[] = [
  { code: 'en', label: 'English', region: 'Global' },
  { code: 'ko', label: '한국어', region: 'Korea' },
  { code: 'ja', label: '日本語', region: 'Japan' },
  { code: 'zh', label: '中文', region: 'China' }
];

const menuTranslations = {
  en: ['Dancers', 'Classes', 'Store'],
  ko: ['댄서', '클래스', '스토어'],
  ja: ['ダンサー', 'クラス', 'ストア'],
  zh: ['舞者', '课程', '商店']
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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isGlobalOpen || isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isGlobalOpen, isMobileMenuOpen]);

  const currentMenu = menuTranslations[currentLang];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-7'}`}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="group text-2xl font-black tracking-tighter uppercase flex flex-col leading-none">
            <span className="text-xl group-hover:tracking-[0.1em] transition-all duration-500 text-black">THEART</span>
            <span className="text-[10px] tracking-[0.3em] font-medium opacity-60 -mt-0.5 text-black">DANCE STUDIO</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-12 text-[12px] font-bold uppercase tracking-[0.15em]">
            {currentMenu.map((item) => (
              <a key={item} href="#" className="relative group overflow-hidden">
                <span className="block group-hover:-translate-y-full transition-transform duration-500 text-black">{item}</span>
                <span className="absolute top-full left-0 block group-hover:-translate-y-full transition-transform duration-500 text-gray-400">{item}</span>
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => setIsGlobalOpen(true)}
              className="border-l border-gray-200 pl-6 flex items-center space-x-2 cursor-pointer hover:opacity-50 transition-all duration-300"
            >
              <Globe size={16} strokeWidth={2.5} className="text-black" />
              <span className="text-[11px] font-black uppercase tracking-wider text-black">
                {languages.find(l => l.code === currentLang)?.label}
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 transition-transform duration-700 ease-in-out lg:hidden pt-24 px-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col space-y-8 mt-12">
            {currentMenu.map((item) => (
              <a key={item} href="#" className="text-4xl font-black uppercase tracking-tighter" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
            ))}
            
            <div className="pt-12 border-t border-gray-100">
               <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsGlobalOpen(true);
                }}
                className="flex items-center space-x-4 mb-8"
               >
                 <Globe size={20} />
                 <span className="text-sm font-bold uppercase tracking-widest">Global / Language</span>
               </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Global Sidebar Panel */}
      <div className={`fixed inset-0 z-[60] transition-opacity duration-500 ${isGlobalOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsGlobalOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-700 ease-out p-12 flex flex-col ${isGlobalOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex justify-between items-center mb-16">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Settings</span>
            <button onClick={() => setIsGlobalOpen(false)} className="group p-2 -mr-2 flex items-center space-x-2 text-black hover:opacity-50 transition-all">
              <span className="text-[10px] font-bold uppercase tracking-widest">Close</span>
              <X size={24} strokeWidth={1.5} className="group-hover:rotate-90 transition-transform duration-500" />
            </button>
          </div>

          <div className="flex-grow">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-12">Select<br />Language</h2>
            <div className="space-y-2">
              {languages.map((lang, index) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onLangChange(lang.code);
                    setTimeout(() => setIsGlobalOpen(false), 300);
                  }}
                  className={`w-full group flex items-center justify-between py-6 border-b border-gray-100 transition-all duration-500 ${currentLang === lang.code ? 'text-black' : 'text-gray-300 hover:text-black hover:pl-4'}`}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-widest mb-1">{lang.region}</span>
                    <span className="text-2xl font-black uppercase">{lang.label}</span>
                  </div>
                  <ChevronRight size={20} className={`transition-transform duration-500 ${currentLang === lang.code ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-gray-100 text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 space-y-4">
            <div className="flex justify-between">
              <span>Currency</span>
              <span className="text-black">KRW (₩)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
