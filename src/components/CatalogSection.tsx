import { useState } from 'react';
import Icon from '@/components/ui/icon';

const animalTypes = [
  { id: 'dogs', emoji: '🐶', label: 'Собаки', count: 18420 },
  { id: 'cats', emoji: '🐱', label: 'Кошки', count: 14100 },
  { id: 'birds', emoji: '🐦', label: 'Птицы', count: 3200 },
  { id: 'fish', emoji: '🐠', label: 'Рыбки', count: 2100 },
  { id: 'rabbits', emoji: '🐰', label: 'Грызуны', count: 1800 },
  { id: 'reptiles', emoji: '🦎', label: 'Рептилии', count: 890 },
];

const breeds = {
  dogs: [
    { name: 'Лабрадор', image: '🐕', desc: 'Дружелюбный, умный, отлично для семьи', tags: ['Семейный', 'Умный', 'Активный'], price: 'от 15 000 ₽', rating: 4.9 },
    { name: 'Хаски', image: '🐺', desc: 'Энергичный и независимый. Любит прогулки', tags: ['Активный', 'Независимый'], price: 'от 25 000 ₽', rating: 4.8 },
    { name: 'Мопс', image: '🐾', desc: 'Компактный и ласковый компаньон', tags: ['Компактный', 'Ласковый'], price: 'от 20 000 ₽', rating: 4.7 },
    { name: 'Немецкая овчарка', image: '🦮', desc: 'Верный защитник и рабочая собака', tags: ['Охрана', 'Умный', 'Верный'], price: 'от 30 000 ₽', rating: 4.9 },
    { name: 'Такса', image: '🐶', desc: 'Маленький охотник с большим сердцем', tags: ['Маленький', 'Игривый'], price: 'от 18 000 ₽', rating: 4.6 },
    { name: 'Шпиц', image: '🦊', desc: 'Пушистый и игривый домашний любимец', tags: ['Пушистый', 'Игривый'], price: 'от 22 000 ₽', rating: 4.8 },
  ],
  cats: [
    { name: 'Мейн-кун', image: '🐱', desc: 'Величественный гигант кошачьего мира', tags: ['Крупный', 'Ласковый', 'Умный'], price: 'от 30 000 ₽', rating: 4.9 },
    { name: 'Британская', image: '😺', desc: 'Спокойная и флегматичная красавица', tags: ['Спокойный', 'Независимый'], price: 'от 20 000 ₽', rating: 4.7 },
    { name: 'Сфинкс', image: '🙀', desc: 'Необычный и очень ласковый питомец', tags: ['Без шерсти', 'Ласковый'], price: 'от 25 000 ₽', rating: 4.6 },
    { name: 'Шотландская', image: '🐈', desc: 'Уши-лопатки и нежный характер', tags: ['Нежный', 'Компактный'], price: 'от 18 000 ₽', rating: 4.8 },
    { name: 'Сиамская', image: '🐈‍⬛', desc: 'Голубоглазая говорунья из Азии', tags: ['Общительный', 'Активный'], price: 'от 15 000 ₽', rating: 4.7 },
    { name: 'Персидская', image: '😸', desc: 'Пушистая аристократка с характером', tags: ['Пушистый', 'Спокойный'], price: 'от 22 000 ₽', rating: 4.8 },
  ],
  birds: [
    { name: 'Попугай ара', image: '🦜', desc: 'Яркий и разговорчивый компаньон', tags: ['Говорящий', 'Яркий'], price: 'от 80 000 ₽', rating: 4.8 },
    { name: 'Волнистый', image: '🐦', desc: 'Идеален для начинающих, говорит', tags: ['Доступный', 'Говорящий'], price: 'от 800 ₽', rating: 4.6 },
    { name: 'Корелла', image: '🐦‍⬛', desc: 'Нежный и музыкальный питомец', tags: ['Нежный', 'Музыкальный'], price: 'от 3 000 ₽', rating: 4.7 },
    { name: 'Канарейка', image: '🐤', desc: 'Певчая птица с золотым голосом', tags: ['Певчий', 'Красивый'], price: 'от 2 000 ₽', rating: 4.5 },
    { name: 'Какаду', image: '🦅', desc: 'Умная и преданная птица', tags: ['Умный', 'Преданный'], price: 'от 50 000 ₽', rating: 4.9 },
    { name: 'Амадина', image: '🐓', desc: 'Экзотическая певчая птица', tags: ['Экзотика', 'Певчий'], price: 'от 1 500 ₽', rating: 4.4 },
  ],
  fish: [
    { name: 'Золотая рыбка', image: '🐠', desc: 'Классика аквариумистики', tags: ['Классика', 'Неприхотливый'], price: 'от 150 ₽', rating: 4.5 },
    { name: 'Петушок', image: '🐟', desc: 'Яркий и воинственный красавец', tags: ['Яркий', 'Одиночный'], price: 'от 300 ₽', rating: 4.6 },
    { name: 'Неон', image: '🐡', desc: 'Стайная рыбка-огонёк', tags: ['Стайный', 'Яркий'], price: 'от 80 ₽', rating: 4.4 },
    { name: 'Дискус', image: '🎯', desc: 'Король аквариума — дорог, но прекрасен', tags: ['Редкий', 'Красивый'], price: 'от 2 500 ₽', rating: 4.8 },
    { name: 'Гурами', image: '💧', desc: 'Спокойная тропическая рыбка', tags: ['Спокойный', 'Тропический'], price: 'от 200 ₽', rating: 4.5 },
    { name: 'Скалярия', image: '🔱', desc: 'Изящная рыба-ангел для аквариума', tags: ['Изящный', 'Крупный'], price: 'от 400 ₽', rating: 4.6 },
  ],
  rabbits: [
    { name: 'Карликовый кролик', image: '🐰', desc: 'Пушистый и игривый малыш', tags: ['Маленький', 'Игривый'], price: 'от 2 500 ₽', rating: 4.7 },
    { name: 'Шиншилла', image: '🐭', desc: 'Мягкий как облако питомец', tags: ['Мягкий', 'Ночной'], price: 'от 4 000 ₽', rating: 4.6 },
    { name: 'Морская свинка', image: '🐹', desc: 'Общительная и забавная зверушка', tags: ['Общительный', 'Забавный'], price: 'от 1 200 ₽', rating: 4.5 },
    { name: 'Хомяк', image: '🐾', desc: 'Маленький ночной активист', tags: ['Маленький', 'Самостоятельный'], price: 'от 500 ₽', rating: 4.3 },
    { name: 'Дегу', image: '🐿', desc: 'Умная социальная белочка', tags: ['Умный', 'Социальный'], price: 'от 2 000 ₽', rating: 4.5 },
    { name: 'Крыса', image: '🐀', desc: 'Интеллектуал среди грызунов', tags: ['Умный', 'Ручной'], price: 'от 600 ₽', rating: 4.4 },
  ],
  reptiles: [
    { name: 'Бородатый агама', image: '🦎', desc: 'Спокойный дракон для дома', tags: ['Спокойный', 'Экзотика'], price: 'от 5 000 ₽', rating: 4.7 },
    { name: 'Леопардовый геккон', image: '🦖', desc: 'Неприхотливая ночная ящерица', tags: ['Неприхотливый', 'Ночной'], price: 'от 3 500 ₽', rating: 4.6 },
    { name: 'Красноухая черепаха', image: '🐢', desc: 'Долгожитель с характером', tags: ['Долгожитель', 'Водный'], price: 'от 1 500 ₽', rating: 4.4 },
    { name: 'Кукурузная змея', image: '🐍', desc: 'Спокойная и красивая змея', tags: ['Спокойный', 'Красивый'], price: 'от 4 000 ₽', rating: 4.5 },
    { name: 'Игуана', image: '🦗', desc: 'Эффектная зелёная красавица', tags: ['Экзотика', 'Крупный'], price: 'от 8 000 ₽', rating: 4.6 },
    { name: 'Хамелеон', image: '🎨', desc: 'Мастер маскировки и цвета', tags: ['Редкий', 'Экзотика'], price: 'от 10 000 ₽', rating: 4.8 },
  ],
};

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((s) => (
        <span key={s} className={`text-xs ${s <= Math.floor(value) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
      ))}
      <span className="text-xs text-gray-400 font-golos ml-1">{value}</span>
    </div>
  );
}

export default function CatalogSection() {
  const [activeType, setActiveType] = useState('dogs');
  const [search, setSearch] = useState('');

  const current = breeds[activeType as keyof typeof breeds] || [];
  const filtered = current.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="tag-pill bg-orange-100 text-brand-orange mb-3">🐾 Каталог пород</div>
            <h2 className="section-title text-brand-dark">Все виды<br /><span className="text-gradient">животных</span></h2>
          </div>
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Найти породу..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 font-golos text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all w-72"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
          {animalTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setActiveType(type.id)}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl whitespace-nowrap font-golos font-medium text-sm transition-all duration-200 flex-shrink-0 ${
                activeType === type.id
                  ? 'bg-brand-dark text-white shadow-lg shadow-slate-200'
                  : 'bg-gray-100 text-gray-600 hover:bg-orange-50 hover:text-brand-orange'
              }`}
            >
              <span className="text-xl">{type.emoji}</span>
              {type.label}
              <span className={`text-xs px-2 py-0.5 rounded-full ${activeType === type.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-500'}`}>
                {type.count.toLocaleString('ru')}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((breed, i) => (
            <div
              key={breed.name}
              className="group bg-white border border-gray-100 rounded-3xl p-6 card-hover cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
                  {breed.image}
                </div>
                <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Icon name="Heart" size={16} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                </button>
              </div>

              <h3 className="font-oswald text-xl font-bold text-brand-dark mb-1">{breed.name}</h3>
              <p className="text-sm text-gray-500 font-golos mb-3">{breed.desc}</p>
              <StarRating value={breed.rating} />

              <div className="flex flex-wrap gap-1.5 my-3">
                {breed.tags.map(tag => (
                  <span key={tag} className="tag-pill bg-orange-50 text-orange-600 text-xs">{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className="font-oswald font-bold text-brand-orange text-lg">{breed.price}</span>
                <button className="flex items-center gap-1.5 text-sm font-golos font-medium text-gray-500 hover:text-brand-orange transition-colors">
                  Смотреть <Icon name="ArrowRight" size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <p className="font-oswald text-xl text-gray-400">Ничего не найдено по запросу «{search}»</p>
          </div>
        )}
      </div>
    </section>
  );
}
