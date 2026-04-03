import { useState } from 'react';
import Icon from '@/components/ui/icon';

const breeders = [
  {
    id: 1, name: 'Анна Константинова', city: 'Москва', emoji: '🐕',
    specialty: 'Лабрадоры, Голден ретриверы', rating: 4.9, reviews: 134,
    sales: 87, since: '2019', verified: true, badge: '🥇',
    about: 'Профессиональный заводчик с 5-летним стажем. Все щенки с ветпаспортами, привиты и дегельминтизированы. Выставочные линии.',
    tags: ['Собаки', 'Выставочные', 'Документы'],
  },
  {
    id: 2, name: 'Михаил Орлов', city: 'Санкт-Петербург', emoji: '🐱',
    specialty: 'Мейн-куны, Норвежские', rating: 5.0, reviews: 89,
    sales: 54, since: '2020', verified: true, badge: '🥇',
    about: 'Питомник WCF. Котята от чемпионов выставок. Полный пакет документов, генетические тесты.',
    tags: ['Кошки', 'WCF', 'Чемпионы'],
  },
  {
    id: 3, name: 'Елена Смирнова', city: 'Казань', emoji: '🦜',
    specialty: 'Попугаи ара, Какаду', rating: 4.9, reviews: 61,
    sales: 42, since: '2018', verified: true, badge: '🥈',
    about: 'Специализируюсь на крупных попугаях. Все птицы ручные, говорящие, с документами СИТЕС.',
    tags: ['Птицы', 'СИТЕС', 'Говорящие'],
  },
  {
    id: 4, name: 'Сергей Петров', city: 'Новосибирск', emoji: '🐺',
    specialty: 'Хаски, Маламуты', rating: 4.8, reviews: 78,
    sales: 63, since: '2017', verified: true, badge: '🥈',
    about: 'Рабочие ездовые линии. Чемпионы соревнований. Питомник с 7-летней историей.',
    tags: ['Собаки', 'Рабочие', 'Ездовые'],
  },
  {
    id: 5, name: 'Юлия Волкова', city: 'Краснодар', emoji: '🐠',
    specialty: 'Аквариумные рыбки, Дискусы', rating: 4.8, reviews: 45,
    sales: 310, since: '2021', verified: false, badge: '🥉',
    about: 'Разведение редких видов дискусов и апистограмм. Доставка по всей России с живыми гарантиями.',
    tags: ['Рыбки', 'Редкие', 'Доставка'],
  },
  {
    id: 6, name: 'Денис Тарасов', city: 'Екатеринбург', emoji: '🦎',
    specialty: 'Агамы, Хамелеоны', rating: 4.7, reviews: 38,
    sales: 29, since: '2022', verified: true, badge: '🥉',
    about: 'Террариумистика с 2010 года. Разведение редких рептилий. Консультации и поддержка после покупки.',
    tags: ['Рептилии', 'Редкие', 'Консультации'],
  },
];

const privatesellers = [
  {
    id: 1, name: 'Ольга М.', city: 'Москва', emoji: '😺',
    listing: 'Британская кошка, голубая', rating: 4.9, reviews: 22,
    sales: 8, verified: true,
    about: 'Продаю котят от домашних кошек. Без разведения, от случайного помёта. Котята здоровы, привиты.',
    tags: ['Кошки', 'Домашние'],
  },
  {
    id: 2, name: 'Катя Н.', city: 'Москва', emoji: '🦊',
    listing: 'Шпиц оранжевый', rating: 4.9, reviews: 17,
    sales: 5, verified: true,
    about: 'Один помёт в год. Щенки растут дома, с детьми. Все прививки, ветпаспорт, договор.',
    tags: ['Собаки', 'Домашние', 'Договор'],
  },
  {
    id: 3, name: 'Артём В.', city: 'Ростов-на-Дону', emoji: '🐰',
    listing: 'Карликовые крольчата', rating: 4.8, reviews: 31,
    sales: 19, verified: false,
    about: 'Разведение карликовых кроликов как хобби. Клетки, кормёшка в подарок. Фото и видео родителей.',
    tags: ['Грызуны', 'Хобби'],
  },
  {
    id: 4, name: 'Ирина Д.', city: 'Воронеж', emoji: '🐦',
    listing: 'Волнистые попугаи', rating: 4.7, reviews: 14,
    sales: 11, verified: true,
    about: 'Держу стайку волнистиков, продаю птенцов когда появляются. Ручные, подросшие.',
    tags: ['Птицы', 'Ручные'],
  },
  {
    id: 5, name: 'Павел Ж.', city: 'Самара', emoji: '🐹',
    listing: 'Сирийские хомяки', rating: 4.7, reviews: 9,
    sales: 14, verified: false,
    about: 'Случайный помёт хомячат. Здоровые, активные. Продаю с клеткой и кормом.',
    tags: ['Грызуны', 'С аксессуарами'],
  },
  {
    id: 6, name: 'Наташа Р.', city: 'СПб', emoji: '🐱',
    listing: 'Котята дворовые', rating: 4.6, reviews: 19,
    sales: 7, verified: true,
    about: 'Подобрала кошку — родила котят. Все котята обработаны, привиты, ищут добрые руки. Бесплатно.',
    tags: ['Кошки', 'Бесплатно', 'Добрые руки'],
  },
];

function StarRating({ value, count }: { value: number; count: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map(s => (
        <span key={s} className={`text-sm ${s <= Math.floor(value) ? 'text-amber-400' : 'text-gray-200'}`}>★</span>
      ))}
      <span className="text-sm font-golos font-bold text-brand-dark ml-1">{value}</span>
      <span className="text-xs text-gray-400 font-golos">({count} отз.)</span>
    </div>
  );
}

function SellerCard({ seller, rank }: { seller: typeof breeders[0]; rank: number }) {
  const rankColors = ['from-yellow-400 to-amber-500', 'from-gray-300 to-gray-400', 'from-orange-300 to-orange-400'];
  const rankColor = rankColors[rank - 1] || 'from-gray-200 to-gray-300';

  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-6 card-hover group relative overflow-hidden">
      {rank <= 3 && (
        <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${rankColor} opacity-10 rounded-bl-3xl`} />
      )}

      <div className="flex items-start gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
            {seller.emoji}
          </div>
          <div className="absolute -top-2 -left-2 text-lg">{seller.badge}</div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 mb-0.5">
            <h3 className="font-oswald font-bold text-brand-dark text-base leading-tight">{seller.name}</h3>
            {seller.verified && <Icon name="BadgeCheck" size={15} className="text-blue-500 flex-shrink-0" />}
          </div>
          <div className="text-xs text-gray-400 font-golos flex items-center gap-1 mb-1">
            <Icon name="MapPin" size={11} />{seller.city}
          </div>
          <StarRating value={seller.rating} count={seller.reviews} />
        </div>
        <div className="text-right flex-shrink-0">
          <div className="font-oswald font-bold text-2xl text-brand-dark">#{rank}</div>
          <div className="text-xs text-gray-400 font-golos">рейтинг</div>
        </div>
      </div>

      <p className="text-sm text-gray-500 font-golos leading-relaxed mb-3">{seller.about}</p>

      <div className="text-xs text-brand-orange font-golos font-medium mb-3 flex items-center gap-1">
        <Icon name="Star" size={12} />{seller.specialty}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {seller.tags.map(t => (
          <span key={t} className="tag-pill bg-orange-50 text-orange-600 text-xs">{t}</span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100 mb-4">
        <div className="text-center">
          <div className="font-oswald font-bold text-xl text-brand-dark">{seller.sales}</div>
          <div className="text-xs text-gray-400 font-golos">продаж</div>
        </div>
        <div className="text-center">
          <div className="font-oswald font-bold text-xl text-brand-dark">с {seller.since}</div>
          <div className="text-xs text-gray-400 font-golos">на платформе</div>
        </div>
      </div>

      <button className="w-full btn-primary py-2.5 text-sm flex items-center justify-center gap-2">
        <Icon name="MessageCircle" size={15} />
        Написать
      </button>
    </div>
  );
}

function PrivateSellerCard({ seller, rank }: { seller: typeof privatesellers[0]; rank: number }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 card-hover group">
      <div className="flex items-start gap-3 mb-3">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
          {seller.emoji}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5">
            <h3 className="font-oswald font-bold text-brand-dark text-sm">{seller.name}</h3>
            {seller.verified && <Icon name="BadgeCheck" size={13} className="text-blue-500" />}
            <span className="ml-auto font-oswald font-bold text-gray-300 text-sm">#{rank}</span>
          </div>
          <div className="text-xs text-gray-400 font-golos flex items-center gap-1">
            <Icon name="MapPin" size={10} />{seller.city}
          </div>
          <StarRating value={seller.rating} count={seller.reviews} />
        </div>
      </div>

      <div className="bg-orange-50 rounded-xl px-3 py-2 mb-3">
        <div className="text-xs text-gray-400 font-golos">Объявление</div>
        <div className="text-sm font-golos font-semibold text-brand-dark">{seller.listing}</div>
      </div>

      <p className="text-xs text-gray-500 font-golos leading-relaxed mb-3">{seller.about}</p>

      <div className="flex flex-wrap gap-1 mb-3">
        {seller.tags.map(t => (
          <span key={t} className="tag-pill bg-purple-50 text-purple-600 text-xs">{t}</span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-3 border-t border-gray-100">
        <div className="text-center">
          <div className="font-oswald font-bold text-lg text-brand-dark">{seller.sales}</div>
          <div className="text-xs text-gray-400 font-golos">продаж</div>
        </div>
        <button className="btn-primary py-2 px-4 text-xs flex items-center gap-1.5">
          <Icon name="MessageCircle" size={13} />
          Написать
        </button>
      </div>
    </div>
  );
}

export default function SellersSection() {
  const [tab, setTab] = useState<'breeders' | 'private'>('breeders');

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-10">
          <div className="tag-pill bg-yellow-100 text-yellow-700 mb-3">🏆 Рейтинг продавцов</div>
          <h2 className="section-title text-brand-dark">
            Лучшие продавцы<br /><span className="text-gradient">по отзывам</span>
          </h2>
        </div>

        <div className="flex gap-2 mb-8 bg-gray-100 p-1.5 rounded-2xl w-fit">
          <button
            onClick={() => setTab('breeders')}
            className={`px-6 py-2.5 rounded-xl text-sm font-golos font-semibold transition-all duration-200 ${
              tab === 'breeders'
                ? 'bg-white text-brand-dark shadow-md'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            🎖️ Заводчики
          </button>
          <button
            onClick={() => setTab('private')}
            className={`px-6 py-2.5 rounded-xl text-sm font-golos font-semibold transition-all duration-200 ${
              tab === 'private'
                ? 'bg-white text-brand-dark shadow-md'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            👤 Частные лица
          </button>
        </div>

        {tab === 'breeders' && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {breeders.slice(0, 3).map((seller, i) => (
                <SellerCard key={seller.id} seller={seller} rank={i + 1} />
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {breeders.slice(3).map((seller, i) => (
                <SellerCard key={seller.id} seller={seller} rank={i + 4} />
              ))}
            </div>
          </>
        )}

        {tab === 'private' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {privatesellers.map((seller, i) => (
              <PrivateSellerCard key={seller.id} seller={seller} rank={i + 1} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
