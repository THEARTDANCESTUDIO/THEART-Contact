
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ContactHero from './components/ContactHero';
import MapSection from './components/MapSection';
import ContactInfo from './components/ContactInfo';
import InquirySection from './components/InquirySection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export type LanguageType = 'en' | 'ko' | 'ja' | 'zh';

const App: React.FC = () => {
  const [lang, setLang] = useState<LanguageType>('en');

  return (
    <div className="min-h-screen flex flex-col selection:bg-black selection:text-white">
      <Navbar currentLang={lang} onLangChange={setLang} />
      <main className="flex-grow pt-24">
        <ContactHero lang={lang} />
        <MapSection />
        <ContactInfo lang={lang} />
        <CTASection lang={lang} />
        <InquirySection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default App;
