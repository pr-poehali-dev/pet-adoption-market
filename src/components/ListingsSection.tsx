import { useState } from 'react';
import Icon from '@/components/ui/icon';

const listings = [
  {
    id: 1, title: 'Лабрадор-ретривер, щенки', breed: 'Лабрадор', age: '2 мес', price: '25 000 ₽',
    city: 'Москва', emoji: '🐕', seller: 'Анна К.', sellerRating: 4.9, reviews: 34,
    verified: true, tags: ['Привит', 'Документы'], urgent: false, saved: false,
    description: 'Щенки от родителей-чемпионов. Мальчики и девочки. Все привиты, дегельминтизированы, ветпаспорта оформлены. Передаём в 2 месяца. Родители здоровы, рядом.',
  },
  {
    id: 2, title: 'Мейн-кун, шоу-класс', breed: 'Мейн-кун', age: '3 мес', price: '45 000 ₽',
    city: 'СПб', emoji: '🐱', seller: 'Михаил О.', sellerRating: 5.0, reviews: 12,
    verified: true, tags: ['Привит', 'Выставочный'], urgent: true, saved: true,
    description: 'Котята от выставочных родителей WCF. Окрас серебристый тэбби и браун. Документы, метрики, генетические тесты. Возможен показ котят в Питере.',
  },
  {
    id: 3, title: 'Попугай ара, синий', breed: 'Ара', age: '6 мес', price: '95 000 ₽',
    city: 'Казань', emoji: '🦜', seller: 'Юля В.', sellerRating: 4.8, reviews: 7,
    verified: false, tags: ['Говорит', 'Ручной'], urgent: false, saved: false,
    description: 'Синий ара, выкормлен вручную с рождения. Говорит 12 слов и фраз. Привязан к людям, легко идёт на руки. Документы СИТЕС в наличии. Отдаём с клеткой.',
  },
  {
    id: 4, title: 'Хаски, рабочие линии', breed: 'Хаски', age: '1.5 мес', price: '35 000 ₽',
    city: 'Новосибирск', emoji: '🐺', seller: 'Сергей П.', sellerRating: 4.7, reviews: 21,
    verified: true, tags: ['Привит', 'Чипирован'], urgent: false, saved: false,
    description: 'Щенки сибирского хаски от рабочих ездовых собак. Папа — победитель гонок Берингия 2024. Голубые и карие глаза. Чипированы, привиты, договор купли-продажи.',
  },
  {
    id: 5, title: 'Британская кошка, голубая', breed: 'Британская', age: '2.5 мес', price: '22 000 ₽',
    city: 'Краснодар', emoji: '😺', seller: 'Ольга М.', sellerRating: 4.6, reviews: 9,
    verified: true, tags: ['Привит', 'Документы'], urgent: true, saved: false,
    description: 'Голубая британская девочка. Спокойный уравновешенный характер. Приучена к лотку и когтеточке. Глаза насыщенно медного цвета. Отдаём срочно — переезжаем.',
  },
  {
    id: 6, title: 'Бородатый агама', breed: 'Агама', age: '4 мес', price: '7 000 ₽',
    city: 'Екатеринбург', emoji: '🦎', seller: 'Денис Т.', sellerRating: 4.5, reviews: 5,
    verified: false, tags: ['Ручной', 'Комплект'], urgent: false, saved: false,
    description: 'Молодой бородатый агама, ручной с рождения. В комплекте: террариум 120 л, ультрафиолет, подогрев, кормушки и поилки. Объясню содержание и кормление.',
  },
];

const filters = ['Все', 'Собаки', 'Кошки', 'Птицы', 'Рыбки', 'Грызуны', 'Рептилии'];
const cities = ['Любой город', 'Москва', 'СПб', 'Казань', 'Новосибирск', 'Краснодар', 'Екатеринбург'];

function StarRating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      <span className="text-amber-400 text-xs">★</span>
      <span className="text-xs font-golos font-semibold text-brand-dark">{value}</span>
      <span className="text-xs text-gray-400 font-golos">({count})</span>
    </div>
  );
}

const docOptions = [
  { id: 'passport', label: '📋 Ветеринарный паспорт' },
  { id: 'vaccinated', label: '💉 Привит' },
  { id: 'chipped', label: '📡 Чипирован' },
  { id: 'pedigree', label: '🏆 Родословная' },
  { id: 'dewormed', label: '🔬 Дегельминтизирован' },
  { id: 'contract', label: '📝 Договор купли-продажи' },
];

export default function ListingsSection() {
  const [activeFilter, setActiveFilter] = useState('Все');
  const [activeCity, setActiveCity] = useState('Любой город');
  const [saved, setSaved] = useState<number[]>([2]);
  const [showForm, setShowForm] = useState(false);
  const [checkedDocs, setCheckedDocs] = useState<string[]>(['passport']);

  const toggleDoc = (id: string) => {
    setCheckedDocs(prev => prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]);
  };

  const toggleSave = (id: number) => {
    setSaved(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section className="py-20 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="tag-pill bg-orange-100 text-brand-orange mb-3">📋 Объявления</div>
            <h2 className="section-title text-brand-dark">Животные от<br /><span className="text-gradient">частных лиц</span></h2>
          </div>
          <button
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center gap-2 self-start md:self-auto"
          >
            <Icon name="Plus" size={18} />
            Подать объявление
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex gap-2 overflow-x-auto pb-1 flex-1">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-golos font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  activeFilter === f
                    ? 'bg-brand-orange text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-orange-50 border border-gray-200'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            value={activeCity}
            onChange={e => setActiveCity(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-200 bg-white font-golos text-sm text-gray-600 focus:outline-none focus:border-brand-orange"
          >
            {cities.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl overflow-hidden card-hover border border-gray-100 cursor-pointer group">
              <div className="relative bg-gradient-to-br from-orange-100 to-amber-50 h-48 flex items-center justify-center">
                <span className="text-8xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                {item.urgent && (
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-golos font-bold px-3 py-1 rounded-full">
                    СРОЧНО
                  </div>
                )}
                <button
                  onClick={(e) => { e.stopPropagation(); toggleSave(item.id); }}
                  className={`absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    saved.includes(item.id)
                      ? 'bg-red-500 text-white shadow-lg scale-110'
                      : 'bg-white/80 text-gray-400 hover:bg-white hover:text-red-400'
                  }`}
                >
                  <Icon name="Heart" size={16} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-oswald text-lg font-bold text-brand-dark leading-tight">{item.title}</h3>
                </div>

                <div className="flex items-center gap-3 mb-3 text-sm text-gray-500 font-golos">
                  <span className="flex items-center gap-1"><Icon name="MapPin" size={13} />{item.city}</span>
                  <span>·</span>
                  <span>{item.age}</span>
                </div>

                <p className="text-sm text-gray-500 font-golos leading-relaxed mb-3 line-clamp-3">{item.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map(t => (
                    <span key={t} className="tag-pill bg-green-50 text-green-700 text-xs">{t}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <div>
                    <div className="font-oswald font-bold text-2xl text-brand-orange">{item.price}</div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                        {item.seller[0]}
                      </div>
                      <span className="text-xs text-gray-500 font-golos">{item.seller}</span>
                      {item.verified && <Icon name="BadgeCheck" size={13} className="text-blue-500" />}
                    </div>
                    <div className="mt-0.5">
                      <StarRating value={item.sellerRating} count={item.reviews} />
                    </div>
                  </div>
                  <button className="btn-primary py-2 px-4 text-sm">Написать</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-outline flex items-center gap-2 mx-auto">
            Показать все объявления <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 w-full max-w-lg shadow-2xl animate-scale-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-oswald text-2xl font-bold text-brand-dark">Новое объявление</h3>
              <button onClick={() => setShowForm(false)} className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-gray-200">
                <Icon name="X" size={18} />
              </button>
            </div>
            <div className="space-y-4">
              <input className="w-full px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" placeholder="Название объявления" />
              <div className="grid grid-cols-2 gap-4">
                <select className="px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm text-gray-500 focus:outline-none focus:border-brand-orange">
                  <option>Вид животного</option>
                  {filters.slice(1).map(f => <option key={f}>{f}</option>)}
                </select>
                <input className="px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" placeholder="Порода" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input className="px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" placeholder="Цена (₽)" />
                <input className="px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" placeholder="Возраст" />
              </div>
              <input className="w-full px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" placeholder="Город" />
              <textarea className="w-full px-4 py-3 rounded-2xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange resize-none" rows={3} placeholder="Описание питомца..." />
              <div className="bg-gray-50 rounded-2xl p-4">
                <div className="text-xs font-golos font-semibold text-gray-500 uppercase tracking-wide mb-3">Документы и здоровье</div>
                <div className="grid grid-cols-2 gap-3">
                  {docOptions.map(item => {
                    const checked = checkedDocs.includes(item.id);
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => toggleDoc(item.id)}
                        className={`flex items-center gap-2.5 text-left transition-all rounded-xl px-3 py-2 ${checked ? 'bg-orange-100' : 'hover:bg-gray-100'}`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 transition-all ${checked ? 'bg-brand-orange border-brand-orange' : 'border-gray-300'}`}>
                          {checked && <Icon name="Check" size={12} className="text-white" />}
                        </div>
                        <span className={`text-sm font-golos transition-colors ${checked ? 'text-brand-dark font-medium' : 'text-gray-600'}`}>{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
              <button className="w-full btn-primary py-4 text-base">
                Опубликовать объявление
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}