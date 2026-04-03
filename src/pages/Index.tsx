import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CatalogSection from '@/components/CatalogSection';
import ListingsSection from '@/components/ListingsSection';
import SheltersSection from '@/components/SheltersSection';
import ChatSection from '@/components/ChatSection';
import SavedSection from '@/components/SavedSection';
import ProfileSection from '@/components/ProfileSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const navigate = (section: string) => {
    setActiveSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} onNavigate={navigate} />

      {activeSection === 'home' && (
        <>
          <HeroSection onNavigate={navigate} />
          <CatalogSection />
          <ListingsSection />
          <SheltersSection />
        </>
      )}
      {activeSection === 'catalog' && <div className="pt-16"><CatalogSection /></div>}
      {activeSection === 'listings' && <div className="pt-16"><ListingsSection /></div>}
      {activeSection === 'shelters' && <div className="pt-16"><SheltersSection /></div>}
      {activeSection === 'chat' && <div className="pt-16"><ChatSection /></div>}
      {activeSection === 'saved' && <div className="pt-16"><SavedSection /></div>}
      {activeSection === 'profile' && <div className="pt-16"><ProfileSection /></div>}

      <Footer onNavigate={navigate} />
    </div>
  );
}
