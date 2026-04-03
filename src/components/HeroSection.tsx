import Icon from '@/components/ui/icon';

const HERO_IMAGE = 'https://cdn.poehali.dev/projects/451fe26c-a3db-4ea3-8718-ef5a99958038/files/91396890-ab98-40fd-bf59-da387ad5b385.jpg';

const stats = [
  { value: '48 000+', label: 'животных' },
  { value: '1 200+', label: 'приютов' },
  { value: '92%', label: 'счастливых' },
];

const animals = ['🐶', '🐱', '🐦', '🐠', '🐰', '🦜', '🐾'];

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-mesh pt-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-orange-200/40 to-amber-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-64 bg-gradient-to-tr from-lime-200/30 to-orange-100/20 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center py-16">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-brand-orange rounded-full px-4 py-1.5 text-sm font-golos font-semibold mb-6 animate-fade-in opacity-0-init">
            <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
            Маркетплейс животных России №1
          </div>

          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-brand-dark leading-[1.05] mb-6 animate-fade-in opacity-0-init animate-delay-100">
            Найди своего<br />
            <span className="text-gradient">идеального</span><br />
            питомца
          </h1>

          <p className="text-lg text-gray-500 font-golos leading-relaxed mb-8 max-w-lg animate-fade-in opacity-0-init animate-delay-200">
            Тысячи объявлений от проверенных заводчиков, частных лиц и приютов по всей России. Найди друга рядом.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12 animate-fade-in opacity-0-init animate-delay-300">
            <button onClick={() => onNavigate('catalog')} className="btn-primary flex items-center justify-center gap-2 text-base py-4 px-8">
              <Icon name="Search" size={20} />
              Найти питомца
            </button>
            <button onClick={() => onNavigate('shelters')} className="btn-outline flex items-center justify-center gap-2 text-base py-4 px-8">
              <Icon name="Heart" size={20} />
              Приюты
            </button>
          </div>

          <div className="flex items-center gap-8 animate-fade-in opacity-0-init animate-delay-400">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-oswald text-2xl font-bold text-brand-dark">{s.value}</div>
                <div className="text-sm text-gray-400 font-golos">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2 relative animate-scale-in opacity-0-init animate-delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
            <img
              src={HERO_IMAGE}
              alt="Питомцы"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/20 to-transparent" />
          </div>

          <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 animate-float">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">✅</div>
            <div>
              <div className="font-oswald font-bold text-brand-dark text-sm">Верифицированные</div>
              <div className="text-xs text-gray-400 font-golos">продавцы и заводчики</div>
            </div>
          </div>

          <div className="absolute -top-4 -right-4 bg-brand-orange rounded-2xl shadow-xl p-4 text-white animate-float" style={{ animationDelay: '1.5s' }}>
            <div className="font-oswald font-bold text-2xl">4.9 ⭐</div>
            <div className="text-xs opacity-80 font-golos">средний рейтинг</div>
          </div>

          <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white rounded-2xl shadow-xl p-3 flex gap-1">
            {animals.slice(0, 5).map((a, i) => (
              <span key={i} className="text-xl">{a}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-orange-100 bg-white/70 backdrop-blur-sm py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...animals, ...animals, ...animals, ...animals].map((a, i) => (
            <span key={i} className="mx-6 text-2xl">{a}</span>
          ))}
          <span className="mx-6 font-oswald text-brand-orange font-bold text-lg">СОБАКИ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          <span className="mx-6 font-oswald text-brand-amber font-bold text-lg">КОШКИ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          <span className="mx-6 font-oswald text-brand-orange font-bold text-lg">ПТИЦЫ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          <span className="mx-6 font-oswald text-brand-amber font-bold text-lg">РЫБКИ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          <span className="mx-6 font-oswald text-brand-orange font-bold text-lg">ГРЫЗУНЫ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          <span className="mx-6 font-oswald text-brand-amber font-bold text-lg">РЕПТИЛИИ</span>
          <span className="mx-6 font-oswald text-gray-300 font-bold text-lg">·</span>
          {[...animals, ...animals].map((a, i) => (
            <span key={`b-${i}`} className="mx-6 text-2xl">{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
