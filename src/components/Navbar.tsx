import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navItems = [
  { id: 'home', label: 'Главная' },
  { id: 'catalog', label: 'Каталог' },
  { id: 'listings', label: 'Объявления' },
  { id: 'shelters', label: 'Приюты' },
  { id: 'sellers', label: 'Продавцы' },
  { id: 'saved', label: 'Избранное' },
  { id: 'profile', label: 'Кабинет' },
];

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 group"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-white text-lg font-bold font-oswald shadow-md group-hover:scale-105 transition-transform">
            P
          </div>
          <span className="font-oswald font-bold text-xl text-brand-dark">
            PETZZ<span className="text-brand-orange">.com</span>
          </span>
        </button>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`px-4 py-2 rounded-xl text-sm font-golos font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'bg-brand-orange text-white shadow-md'
                  : 'text-gray-600 hover:text-brand-orange hover:bg-orange-50'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => onNavigate('listings')}
            className="hidden md:flex btn-primary text-sm py-2 px-4 items-center gap-2"
          >
            <Icon name="Plus" size={16} />
            Разместить
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl hover:bg-orange-50 transition-colors"
          >
            <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} className="text-brand-dark" />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-orange-100 px-4 pb-4 pt-2 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { onNavigate(item.id); setMobileOpen(false); }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-golos font-medium transition-all duration-200 mb-1 ${
                activeSection === item.id
                  ? 'bg-brand-orange text-white'
                  : 'text-gray-600 hover:bg-orange-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => { onNavigate('listings'); setMobileOpen(false); }}
            className="w-full btn-primary mt-2 text-center"
          >
            + Разместить объявление
          </button>
        </div>
      )}
    </nav>
  );
}