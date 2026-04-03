import { useState } from 'react';
import Icon from '@/components/ui/icon';

const myListings = [
  { id: 1, title: 'Лабрадор, щенки', emoji: '🐕', price: '25 000 ₽', views: 342, messages: 12, status: 'active' },
  { id: 2, title: 'Хомяк сирийский', emoji: '🐹', price: '600 ₽', views: 89, messages: 3, status: 'active' },
  { id: 3, title: 'Котёнок дворовый', emoji: '🐱', price: 'Бесплатно', views: 215, messages: 8, status: 'closed' },
];

const reviews = [
  { id: 1, author: 'Дмитрий С.', rating: 5, text: 'Отличный продавец! Щенок полностью соответствует описанию, здоров и привит. Рекомендую!', date: '28 мар 2026' },
  { id: 2, author: 'Наташа Р.', rating: 5, text: 'Всё быстро, честно и по-человечески. Котёнок уже дома, счастлив 🥰', date: '15 фев 2026' },
  { id: 3, author: 'Артём В.', rating: 4, text: 'Хороший продавец, немного долго отвечал, но животное в отличном состоянии', date: '3 янв 2026' },
];

function StarRating({ value, interactive = false, onChange }: { value: number; interactive?: boolean; onChange?: (v: number) => void }) {
  const [hover, setHover] = useState(0);
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map(s => (
        <button
          key={s}
          onClick={() => interactive && onChange && onChange(s)}
          onMouseEnter={() => interactive && setHover(s)}
          onMouseLeave={() => interactive && setHover(0)}
          className={`text-lg transition-transform ${interactive ? 'hover:scale-110 cursor-pointer' : 'cursor-default'} ${
            s <= (hover || value) ? 'text-amber-400' : 'text-gray-200'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  );
}

export default function ProfileSection() {
  const [tab, setTab] = useState<'listings' | 'reviews' | 'settings'>('listings');
  const [newReviewRating, setNewReviewRating] = useState(0);
  const [newReviewText, setNewReviewText] = useState('');

  return (
    <section className="py-20 bg-mesh">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="bg-dark-mesh relative overflow-hidden p-8 noise-overlay">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-3xl font-oswald font-bold text-white shadow-xl">
                  АК
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-oswald text-2xl font-bold text-white mb-1">Анна Константинова</h2>
                <div className="flex items-center gap-3 mb-3">
                  <StarRating value={4.9} />
                  <span className="text-white/70 text-sm font-golos">4.9 · 34 отзыва</span>
                  <Icon name="BadgeCheck" size={16} className="text-blue-400" />
                </div>
                <div className="flex items-center gap-4 text-white/60 text-sm font-golos">
                  <span className="flex items-center gap-1"><Icon name="MapPin" size={13} />Москва</span>
                  <span className="flex items-center gap-1"><Icon name="Calendar" size={13} />с марта 2024</span>
                  <span className="flex items-center gap-1"><Icon name="Package" size={13} />3 объявления</span>
                </div>
              </div>
              <button className="btn-primary py-2.5 px-5 text-sm flex items-center gap-2">
                <Icon name="Settings" size={15} />
                Настройки
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-6 relative z-10">
              {[
                { label: 'Продано', value: '12' },
                { label: 'Просмотры', value: '648' },
                { label: 'Рейтинг', value: '4.9 ⭐' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 rounded-2xl p-4 text-center backdrop-blur-sm">
                  <div className="font-oswald text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-white/60 text-xs font-golos mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-b border-gray-100">
            <div className="flex">
              {(['listings', 'reviews', 'settings'] as const).map((t) => {
                const labels = { listings: 'Мои объявления', reviews: 'Отзывы', settings: 'Профиль' };
                return (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-4 text-sm font-golos font-medium transition-all ${
                      tab === t
                        ? 'text-brand-orange border-b-2 border-brand-orange'
                        : 'text-gray-400 hover:text-gray-600'
                    }`}
                  >
                    {labels[t]}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="p-6">
            {tab === 'listings' && (
              <div className="space-y-3">
                {myListings.map(listing => (
                  <div key={listing.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-orange-50 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-2xl shadow-sm">
                      {listing.emoji}
                    </div>
                    <div className="flex-1">
                      <div className="font-golos font-semibold text-brand-dark text-sm">{listing.title}</div>
                      <div className="flex items-center gap-3 text-xs text-gray-400 font-golos mt-1">
                        <span className="flex items-center gap-1"><Icon name="Eye" size={11} />{listing.views}</span>
                        <span className="flex items-center gap-1"><Icon name="MessageCircle" size={11} />{listing.messages}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-oswald font-bold text-brand-orange">{listing.price}</div>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-golos ${
                        listing.status === 'active' ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-500'
                      }`}>
                        {listing.status === 'active' ? '● Активно' : '● Закрыто'}
                      </span>
                    </div>
                  </div>
                ))}
                <button className="w-full mt-4 border-2 border-dashed border-gray-200 rounded-2xl py-4 text-gray-400 font-golos text-sm hover:border-brand-orange hover:text-brand-orange transition-colors flex items-center justify-center gap-2">
                  <Icon name="Plus" size={16} />
                  Добавить объявление
                </button>
              </div>
            )}

            {tab === 'reviews' && (
              <div className="space-y-4">
                {reviews.map(review => (
                  <div key={review.id} className="p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                          {review.author[0]}
                        </div>
                        <span className="font-golos font-semibold text-sm text-brand-dark">{review.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <StarRating value={review.rating} />
                        <span className="text-xs text-gray-400 font-golos">{review.date}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-golos">{review.text}</p>
                  </div>
                ))}

                <div className="mt-6 p-5 bg-orange-50 rounded-2xl">
                  <h4 className="font-oswald font-bold text-brand-dark mb-3">Оставить отзыв</h4>
                  <div className="mb-3">
                    <StarRating value={newReviewRating} interactive onChange={setNewReviewRating} />
                  </div>
                  <textarea
                    value={newReviewText}
                    onChange={e => setNewReviewText(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 font-golos text-sm resize-none focus:outline-none focus:border-brand-orange"
                    rows={3}
                    placeholder="Напишите ваш отзыв..."
                  />
                  <button className="btn-primary mt-3 py-2.5 px-6 text-sm">
                    Опубликовать отзыв
                  </button>
                </div>
              </div>
            )}

            {tab === 'settings' && (
              <div className="space-y-4 max-w-md">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 font-golos mb-1.5">Имя</label>
                    <input defaultValue="Анна" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-golos mb-1.5">Фамилия</label>
                    <input defaultValue="Константинова" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-golos mb-1.5">Телефон</label>
                  <input defaultValue="+7 (977) 123-45-67" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-golos mb-1.5">Email</label>
                  <input defaultValue="anna@example.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 font-golos mb-1.5">Город</label>
                  <input defaultValue="Москва" className="w-full px-4 py-3 rounded-xl border border-gray-200 font-golos text-sm focus:outline-none focus:border-brand-orange" />
                </div>
                <button className="btn-primary py-3 px-8">Сохранить</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
