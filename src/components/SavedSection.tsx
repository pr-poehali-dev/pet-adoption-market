import { useState } from 'react';
import Icon from '@/components/ui/icon';

const initialSaved = [
  { id: 1, title: 'Мейн-кун, шоу-класс', emoji: '🐱', price: '45 000 ₽', city: 'СПб', age: '3 мес', seller: 'Михаил О.', rating: 5.0, date: '2 апр' },
  { id: 2, title: 'Попугай ара, синий', emoji: '🦜', price: '95 000 ₽', city: 'Казань', age: '6 мес', seller: 'Юля В.', rating: 4.8, date: '1 апр' },
  { id: 3, title: 'Шпиц оранжевый', emoji: '🦊', price: '30 000 ₽', city: 'Москва', age: '2 мес', seller: 'Катя Н.', rating: 4.9, date: '31 мар' },
  { id: 4, title: 'Хаски, голубоглазый', emoji: '🐺', price: '35 000 ₽', city: 'Новосибирск', age: '1.5 мес', seller: 'Сергей П.', rating: 4.7, date: '30 мар' },
];

export default function SavedSection() {
  const [saved, setSaved] = useState(initialSaved);

  const remove = (id: number) => setSaved(prev => prev.filter(i => i.id !== id));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="tag-pill bg-red-100 text-red-500 mb-3">❤️ Избранное</div>
            <h2 className="section-title text-brand-dark">Сохранённые<br /><span className="text-gradient">объявления</span></h2>
          </div>
          <div className="text-sm text-gray-400 font-golos">{saved.length} объявлений сохранено</div>
        </div>

        {saved.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-7xl mb-4">💔</div>
            <h3 className="font-oswald text-2xl text-gray-300 mb-2">Пока пусто</h3>
            <p className="text-gray-400 font-golos">Нажмите ❤️ на объявлении, чтобы сохранить</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {saved.map((item) => (
              <div key={item.id} className="bg-white border border-gray-100 rounded-3xl overflow-hidden card-hover group">
                <div className="relative bg-gradient-to-br from-red-50 to-orange-50 h-44 flex items-center justify-center">
                  <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                  <button
                    onClick={() => remove(item.id)}
                    className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors shadow-md"
                  >
                    <Icon name="Heart" size={16} />
                  </button>
                  <div className="absolute bottom-3 left-3 bg-white/90 rounded-lg px-2.5 py-1 text-xs text-gray-500 font-golos">
                    {item.date}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-oswald font-bold text-brand-dark mb-1">{item.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-gray-400 font-golos mb-3">
                    <Icon name="MapPin" size={11} />
                    <span>{item.city}</span>
                    <span>·</span>
                    <span>{item.age}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="font-oswald font-bold text-brand-orange text-lg">{item.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-2">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 flex items-center justify-center text-white text-xs font-bold">
                      {item.seller[0]}
                    </div>
                    <span className="text-xs text-gray-500 font-golos">{item.seller}</span>
                    <span className="text-xs text-amber-400 ml-auto">★ {item.rating}</span>
                  </div>
                  <button className="w-full mt-3 btn-primary py-2 text-sm text-center">
                    Написать
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
