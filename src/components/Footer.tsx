const PETS_IMAGE = 'https://cdn.poehali.dev/projects/451fe26c-a3db-4ea3-8718-ef5a99958038/files/21c1f34f-acea-4d7f-8c0b-920bbf5b6890.jpg';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center text-white font-bold font-oswald text-xl">
                П
              </div>
              <span className="font-oswald font-bold text-2xl">Питомец<span className="text-brand-orange">РФ</span></span>
            </div>
            <p className="font-golos text-white/60 text-base leading-relaxed max-w-sm">
              Маркетплейс животных России. Найди питомца, помоги приюту или стань заводчиком.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-40 shadow-2xl opacity-80 hover:opacity-100 transition-opacity">
            <img src={PETS_IMAGE} alt="Питомцы" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {[
            {
              title: 'Платформа',
              links: [
                { label: 'Главная', id: 'home' },
                { label: 'Каталог', id: 'catalog' },
                { label: 'Объявления', id: 'listings' },
                { label: 'Приюты', id: 'shelters' },
              ],
            },
            {
              title: 'Аккаунт',
              links: [
                { label: 'Личный кабинет', id: 'profile' },
                { label: 'Избранное', id: 'saved' },
                { label: 'Сообщения', id: 'chat' },
                { label: 'Настройки', id: 'profile' },
              ],
            },
            {
              title: 'Помощь',
              links: [
                { label: 'О проекте', id: 'home' },
                { label: 'Правила', id: 'home' },
                { label: 'Как разместить', id: 'listings' },
                { label: 'Поддержка', id: 'home' },
              ],
            },
            {
              title: 'Контакты',
              links: [
                { label: 'Telegram', id: 'home' },
                { label: 'ВКонтакте', id: 'home' },
                { label: 'Email', id: 'home' },
                { label: 'Пресса', id: 'home' },
              ],
            },
          ].map(col => (
            <div key={col.title}>
              <h4 className="font-oswald font-bold text-white mb-4 text-sm uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map(link => (
                  <li key={link.label}>
                    <button
                      onClick={() => onNavigate(link.id)}
                      className="text-white/50 hover:text-brand-orange text-sm font-golos transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-4">
          <p className="text-white/30 text-sm font-golos">© 2026 ПитомецРФ. Все права защищены</p>
          <div className="flex items-center gap-3">
            {['🐶', '🐱', '🐦', '🐰', '🐠'].map((a, i) => (
              <span key={i} className="text-xl opacity-40 hover:opacity-100 transition-opacity cursor-default">{a}</span>
            ))}
          </div>
          <p className="text-white/20 text-xs font-golos">Сделано с ❤️ для питомцев</p>
        </div>
      </div>
    </footer>
  );
}
