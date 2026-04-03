import { useState } from 'react';
import Icon from '@/components/ui/icon';

const SHELTER_IMAGE = 'https://cdn.poehali.dev/projects/451fe26c-a3db-4ea3-8718-ef5a99958038/files/7721d3ed-fbda-40ac-9abe-dcd8217998a3.jpg';

const shelters = [
  {
    id: 1,
    name: 'Приют «Добрые руки»',
    city: 'Москва',
    address: 'ул. Лесная, 12',
    phone: '+7 (495) 123-45-67',
    animals: 145,
    rating: 4.9,
    reviews: 87,
    tags: ['Собаки', 'Кошки', 'Волонтёры'],
    description: 'Крупнейший приют Москвы. Открыт для волонтёров ежедневно. Принимает пожертвования кормом.',
    verified: true,
    emoji: '🏠',
  },
  {
    id: 2,
    name: 'Фонд «Хвост и лапа»',
    city: 'Санкт-Петербург',
    address: 'Невский пр., 89',
    phone: '+7 (812) 234-56-78',
    animals: 89,
    rating: 4.8,
    reviews: 64,
    tags: ['Кошки', 'Передержка'],
    description: 'Специализируемся на кошках. Стерилизация, вакцинация, чипирование перед передачей.',
    verified: true,
    emoji: '🐱',
  },
  {
    id: 3,
    name: 'Зоозащита «Искра»',
    city: 'Казань',
    address: 'ул. Советская, 45',
    phone: '+7 (843) 345-67-89',
    animals: 67,
    rating: 4.7,
    reviews: 41,
    tags: ['Собаки', 'Кошки', 'Экзотика'],
    description: 'Помогаем всем животным — от собак до экзотических птиц. Работаем 7 дней в неделю.',
    verified: false,
    emoji: '⭐',
  },
  {
    id: 4,
    name: 'Приют «Надежда»',
    city: 'Новосибирск',
    address: 'ул. Мира, 78',
    phone: '+7 (383) 456-78-90',
    animals: 112,
    rating: 4.6,
    reviews: 53,
    tags: ['Собаки', 'Волонтёры', 'Стерилизация'],
    description: 'Активный приют с сильной командой волонтёров. Проводим выставки и дни усыновления.',
    verified: true,
    emoji: '🌟',
  },
  {
    id: 5,
    name: 'Кошкин дом',
    city: 'Краснодар',
    address: 'ул. Красная, 23',
    phone: '+7 (861) 567-89-01',
    animals: 54,
    rating: 4.9,
    reviews: 29,
    tags: ['Только кошки', 'Вакцинация'],
    description: 'Уютный приют только для кошек. Все животные социализированы и готовы к новому дому.',
    verified: true,
    emoji: '🐾',
  },
  {
    id: 6,
    name: 'Фонд «Зоозащита Урал»',
    city: 'Екатеринбург',
    address: 'пр. Ленина, 56',
    phone: '+7 (343) 678-90-12',
    animals: 78,
    rating: 4.5,
    reviews: 38,
    tags: ['Собаки', 'Кошки', 'Пожертвования'],
    description: 'Работаем с 2010 года. Более 3000 животных нашли дом благодаря нашей работе.',
    verified: true,
    emoji: '💙',
  },
];

function StarRating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <span key={s} className={`text-xs ${s <= Math.floor(value) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
      ))}
      <span className="text-xs font-golos font-semibold text-brand-dark ml-1">{value}</span>
      <span className="text-xs text-gray-400 font-golos">({count})</span>
    </div>
  );
}

export default function SheltersSection() {
  const [selectedCity, setSelectedCity] = useState('Все города');
  const cities = ['Все города', ...Array.from(new Set(shelters.map(s => s.city)))];

  const filtered = selectedCity === 'Все города'
    ? shelters
    : shelters.filter(s => s.city === selectedCity);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="tag-pill bg-blue-100 text-blue-600 mb-3">🏠 Приюты России</div>
            <h2 className="section-title text-brand-dark mb-4">
              База приютов<br /><span className="text-gradient">всей страны</span>
            </h2>
            <p className="text-gray-500 font-golos text-lg leading-relaxed">
              Более 1 200 верифицированных приютов с актуальными контактами, рейтингами и отзывами от волонтёров.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
            <img src={SHELTER_IMAGE} alt="Приюты" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent flex items-end p-6">
              <div className="text-white">
                <div className="font-oswald text-3xl font-bold">1 200+ приютов</div>
                <div className="font-golos text-sm opacity-80">по всей России</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {cities.map(city => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-xl text-sm font-golos font-medium whitespace-nowrap transition-all flex-shrink-0 ${
                  selectedCity === city
                    ? 'bg-brand-dark text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-brand-orange'
                }`}
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((shelter) => (
            <div key={shelter.id} className="bg-white border border-gray-100 rounded-3xl p-6 card-hover cursor-pointer group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 group-hover:scale-110 transition-transform">
                  {shelter.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h3 className="font-oswald font-bold text-brand-dark text-base leading-tight truncate">{shelter.name}</h3>
                    {shelter.verified && <Icon name="BadgeCheck" size={15} className="text-blue-500 flex-shrink-0" />}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400 font-golos">
                    <Icon name="MapPin" size={11} />
                    <span>{shelter.city}</span>
                  </div>
                  <div className="mt-1">
                    <StarRating value={shelter.rating} count={shelter.reviews} />
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-500 font-golos leading-relaxed mb-4">{shelter.description}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {shelter.tags.map(t => (
                  <span key={t} className="tag-pill bg-blue-50 text-blue-600 text-xs">{t}</span>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-3 mb-4">
                <div className="flex items-center justify-between text-sm font-golos">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Icon name="Heart" size={14} className="text-red-400" />
                    <span>Животных: <strong className="text-brand-dark">{shelter.animals}</strong></span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Icon name="Phone" size={14} className="text-brand-orange" />
                    <span className="text-brand-dark">{shelter.phone}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button className="py-2.5 rounded-2xl bg-blue-50 text-blue-600 text-sm font-golos font-medium hover:bg-blue-100 transition-colors flex items-center justify-center gap-1.5">
                  <Icon name="Phone" size={14} />
                  Позвонить
                </button>
                <button className="py-2.5 rounded-2xl bg-brand-orange text-white text-sm font-golos font-medium hover:bg-orange-600 transition-colors flex items-center justify-center gap-1.5">
                  <Icon name="MessageCircle" size={14} />
                  Написать
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
