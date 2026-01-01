
import React from 'react';

const MapSection: React.FC = () => {
  // 전북특별자치도 완주군 이서면 기지로 50 주소에 맞춘 구글 지도 임베드 URL
  const mapUrl = "https://maps.google.com/maps?q=%EC%A0%84%EB%B6%81%ED%8A%B9%EB%B3%84%EC%9E%90%EC%B9%98%EB%8F%84%20%EC%99%84%EC%A3%BC%20%EC%9D%B4%EC%84%9C%EB%A9%B4%20%EA%B8%B0%EC%A7%80%EB%A1%9C%2050&t=&z=17&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="w-full h-[400px] md:h-[600px] relative overflow-hidden grayscale contrast-125 hover:grayscale-0 transition-all duration-700">
      <iframe 
        src={mapUrl}
        className="absolute inset-0 w-full h-full border-0"
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="THEART DANCE STUDIO Location"
      ></iframe>
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/20 to-transparent"></div>
      
      {/* Floating Address Indicator for better UX */}
      <div className="absolute bottom-8 left-8 bg-black text-white p-6 hidden md:block z-10 shadow-2xl">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-60 mb-1">Location</p>
        <p className="text-sm font-black uppercase tracking-tight">Wanju Innovation City</p>
      </div>
    </section>
  );
};

export default MapSection;
