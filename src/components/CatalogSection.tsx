import { useState } from 'react';
import Icon from '@/components/ui/icon';

const animalTypes = [
  { id: 'dogs', emoji: '🐶', label: 'Собаки', count: 18420 },
  { id: 'cats', emoji: '🐱', label: 'Кошки', count: 14100 },
  { id: 'birds', emoji: '🐦', label: 'Птицы', count: 3200 },
  { id: 'fish', emoji: '🐠', label: 'Рыбки', count: 2100 },
  { id: 'rabbits', emoji: '🐰', label: 'Грызуны', count: 1800 },
  { id: 'reptiles', emoji: '🦎', label: 'Рептилии', count: 890 },
  { id: 'accessories', emoji: '🛍️', label: 'Аксессуары', count: 6400 },
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

const accessoryCategories = [
  { id: 'toys', emoji: '🎾', label: 'Игрушки', count: 1240 },
  { id: 'beds', emoji: '🛏️', label: 'Лежанки', count: 890 },
  { id: 'cages', emoji: '🏠', label: 'Клетки и вольеры', count: 560 },
  { id: 'bowls', emoji: '🥣', label: 'Миски и поилки', count: 720 },
  { id: 'collars', emoji: '🔗', label: 'Ошейники и поводки', count: 1050 },
  { id: 'clothes', emoji: '👗', label: 'Одежда', count: 480 },
  { id: 'carriers', emoji: '🧳', label: 'Переноски', count: 310 },
  { id: 'hygiene', emoji: '🛁', label: 'Уход и гигиена', count: 640 },
  { id: 'food', emoji: '🍖', label: 'Корм и лакомства', count: 510 },
];

const accessories: Record<string, { name: string; emoji: string; desc: string; tags: string[]; price: string; rating: number }[]> = {
  toys: [
    { name: 'Мячик с пищалкой', emoji: '🎾', desc: 'Резиновый мяч для собак среднего размера, пищит при сжатии', tags: ['Для собак', 'Резина', 'Пищалка'], price: 'от 250 ₽', rating: 4.7 },
    { name: 'Удочка для кошки', emoji: '🎣', desc: 'Интерактивная игрушка с перьями на верёвочке', tags: ['Для кошек', 'Интерактивная'], price: 'от 180 ₽', rating: 4.8 },
    { name: 'Канат-перетяжка', emoji: '🪢', desc: 'Прочный хлопковый канат для игры с хозяином', tags: ['Для собак', 'Хлопок', 'Прочный'], price: 'от 350 ₽', rating: 4.6 },
    { name: 'Туннель для кошек', emoji: '🌀', desc: 'Складной туннель с шуршащим наполнителем и окошками', tags: ['Для кошек', 'Складной'], price: 'от 800 ₽', rating: 4.9 },
    { name: 'Мышка с кошачьей мятой', emoji: '🐭', desc: 'Плюшевая мышка с натуральной валерьяной внутри', tags: ['Для кошек', 'Натуральный'], price: 'от 120 ₽', rating: 4.5 },
    { name: 'Диск-фрисби', emoji: '🥏', desc: 'Лёгкий силиконовый диск для активных игр на улице', tags: ['Для собак', 'Силикон', 'Улица'], price: 'от 450 ₽', rating: 4.7 },
  ],
  beds: [
    { name: 'Лежанка-пончик', emoji: '🍩', desc: 'Мягкая круглая лежанка с высокими бортами для уютного сна', tags: ['Мягкая', 'Уют', 'До 8 кг'], price: 'от 1 200 ₽', rating: 4.9 },
    { name: 'Лежак ортопедический', emoji: '🛏️', desc: 'Ортопедический матрас с памятью формы для пожилых животных', tags: ['Ортопедический', 'Память формы'], price: 'от 3 500 ₽', rating: 4.8 },
    { name: 'Гамак для кошки', emoji: '🌺', desc: 'Навесной гамак на батарею или подоконник из плюша', tags: ['Для кошек', 'Плюш', 'Навесной'], price: 'от 650 ₽', rating: 4.7 },
    { name: 'Будка деревянная', emoji: '🏡', desc: 'Деревянная будка для улицы с утеплённым полом', tags: ['Для улицы', 'Дерево', 'Утеплённая'], price: 'от 5 500 ₽', rating: 4.6 },
    { name: 'Лежанка-конверт', emoji: '📦', desc: 'Тёплый флисовый конверт для маленьких пород', tags: ['Флис', 'Для малышей'], price: 'от 900 ₽', rating: 4.8 },
    { name: 'Диван для питомца', emoji: '🛋️', desc: 'Миниатюрный диванчик из искусственной замши', tags: ['Замша', 'Стильный', 'Мебель'], price: 'от 4 200 ₽', rating: 4.7 },
  ],
  cages: [
    { name: 'Клетка для попугая', emoji: '🦜', desc: 'Просторная клетка 60×40 с кормушками и жёрдочками', tags: ['Для птиц', '60×40', 'Комплект'], price: 'от 2 800 ₽', rating: 4.8 },
    { name: 'Клетка для грызунов', emoji: '🐹', desc: 'Двухэтажная клетка с лесенкой и колесом для бега', tags: ['Для грызунов', '2 этажа', 'Колесо'], price: 'от 1 500 ₽', rating: 4.7 },
    { name: 'Вольер для собаки', emoji: '🐕', desc: 'Металлический вольер 2×2 м для улицы или квартиры', tags: ['Для собак', 'Металл', '2×2 м'], price: 'от 8 500 ₽', rating: 4.6 },
    { name: 'Аквариум 50 л', emoji: '🐠', desc: 'Аквариум из закалённого стекла с крышкой и фильтром', tags: ['Для рыб', '50 л', 'Фильтр'], price: 'от 4 000 ₽', rating: 4.9 },
    { name: 'Террариум 40×30', emoji: '🦎', desc: 'Стеклянный террариум с вентиляционными сетками', tags: ['Для рептилий', 'Стекло', 'Вентиляция'], price: 'от 3 200 ₽', rating: 4.7 },
    { name: 'Вольер складной', emoji: '🏗️', desc: 'Лёгкий складной манеж для щенков и котят', tags: ['Складной', 'Для щенков', 'Манеж'], price: 'от 2 200 ₽', rating: 4.5 },
  ],
  bowls: [
    { name: 'Миска с медленным кормлением', emoji: '🥣', desc: 'Лабиринт-миска для замедления еды и пищеварения', tags: ['Здоровье', 'Антиобжора'], price: 'от 550 ₽', rating: 4.8 },
    { name: 'Автопоилка 2 л', emoji: '💧', desc: 'Автоматическая поилка-фонтан с угольным фильтром', tags: ['Автомат', 'Фильтр', '2 л'], price: 'от 1 800 ₽', rating: 4.9 },
    { name: 'Двойная миска на подставке', emoji: '🎯', desc: 'Стальные миски на регулируемой деревянной подставке', tags: ['Двойная', 'Дерево', 'Сталь'], price: 'от 1 200 ₽', rating: 4.7 },
    { name: 'Дозатор корма', emoji: '🤖', desc: 'Умный автокормушка с таймером на 5 порций', tags: ['Умный', 'Таймер', 'Авто'], price: 'от 3 500 ₽', rating: 4.8 },
    { name: 'Миска складная силикон', emoji: '🧃', desc: 'Силиконовая складная миска для прогулок', tags: ['Дорога', 'Силикон', 'Компакт'], price: 'от 280 ₽', rating: 4.5 },
    { name: 'Миска керамическая', emoji: '🏺', desc: 'Тяжёлая керамика с нескользящим дном, 600 мл', tags: ['Керамика', 'Устойчивая', '600 мл'], price: 'от 650 ₽', rating: 4.6 },
  ],
  collars: [
    { name: 'Ошейник кожаный', emoji: '🔗', desc: 'Натуральная кожа с латунными кольцами, регулируемый', tags: ['Кожа', 'Натуральный', 'Регулируемый'], price: 'от 850 ₽', rating: 4.8 },
    { name: 'Шлейка H-образная', emoji: '⚓', desc: 'Мягкая шлейка без давления на шею для прогулок', tags: ['Без давления', 'Мягкая', 'Шлейка'], price: 'от 950 ₽', rating: 4.9 },
    { name: 'Поводок-рулетка 5 м', emoji: '🎀', desc: 'Рулетка с кнопкой фиксации и ремнём 5 метров', tags: ['Рулетка', '5 м', 'Фиксатор'], price: 'от 700 ₽', rating: 4.6 },
    { name: 'Светящийся ошейник', emoji: '💡', desc: 'LED ошейник для безопасных прогулок в темноте', tags: ['LED', 'Безопасность', 'Ночь'], price: 'от 1 100 ₽', rating: 4.7 },
    { name: 'Мартингейл ошейник', emoji: '🔐', desc: 'Противопобеговый ошейник для борзых пород', tags: ['Борзые', 'Безопасный'], price: 'от 600 ₽', rating: 4.5 },
    { name: 'GPS-трекер на ошейник', emoji: '📡', desc: 'Компактный GPS-трекер с приложением и 30 дней работы', tags: ['GPS', 'Приложение', 'Умный'], price: 'от 4 500 ₽', rating: 4.8 },
  ],
  clothes: [
    { name: 'Зимний комбинезон', emoji: '🧥', desc: 'Тёплый водонепроницаемый комбинезон для зимних прогулок', tags: ['Зима', 'Водонепроницаемый', 'Тёплый'], price: 'от 1 500 ₽', rating: 4.7 },
    { name: 'Дождевик с капюшоном', emoji: '🌧️', desc: 'Лёгкий дождевик из полиэстера с застёжкой', tags: ['Дождь', 'Лёгкий', 'Полиэстер'], price: 'от 650 ₽', rating: 4.6 },
    { name: 'Футболка с принтом', emoji: '👕', desc: 'Хлопковая футболка для фотосессий и прогулок', tags: ['Хлопок', 'Стильный', 'Лето'], price: 'от 400 ₽', rating: 4.4 },
    { name: 'Носки антискользящие', emoji: '🧦', desc: 'Защитные носки с резиновой подошвой, набор 4 шт', tags: ['Защита', 'Набор 4 шт', 'Резина'], price: 'от 350 ₽', rating: 4.5 },
    { name: 'Пальто твидовое', emoji: '🎩', desc: 'Элегантное пальто из твида для светских выходов', tags: ['Твид', 'Элегантный', 'Осень'], price: 'от 2 200 ₽', rating: 4.8 },
    { name: 'Жилет спасательный', emoji: '🦺', desc: 'Спасательный жилет для собак на воде с ручкой', tags: ['Вода', 'Безопасность', 'Ручка'], price: 'от 1 800 ₽', rating: 4.9 },
  ],
  carriers: [
    { name: 'Рюкзак-переноска', emoji: '🎒', desc: 'Рюкзак с иллюминатором для кошек и малых пород', tags: ['Рюкзак', 'Иллюминатор', 'До 6 кг'], price: 'от 2 800 ₽', rating: 4.9 },
    { name: 'Сумка-переноска', emoji: '👜', desc: 'Мягкая сумка с плечевым ремнём, авиадопуск', tags: ['Авиа', 'Мягкая', 'До 5 кг'], price: 'от 1 900 ₽', rating: 4.7 },
    { name: 'Пластиковая клетка-переноска', emoji: '🧳', desc: 'Жёсткая переноска с металлической решёткой, авиа', tags: ['Жёсткая', 'Авиа', 'Металл'], price: 'от 3 200 ₽', rating: 4.6 },
    { name: 'Велосипедная корзина', emoji: '🚲', desc: 'Передняя корзина для велосипеда с фиксацией питомца', tags: ['Велосипед', 'Активный', 'Фиксация'], price: 'от 4 500 ₽', rating: 4.7 },
    { name: 'Слинг для переноски', emoji: '🌂', desc: 'Тканевый слинг-кенгуру для маленьких питомцев', tags: ['Слинг', 'Ткань', 'Малыши'], price: 'от 1 100 ₽', rating: 4.5 },
    { name: 'Автомобильная переноска', emoji: '🚗', desc: 'Фиксируется ремнём безопасности, краш-тест', tags: ['Авто', 'Безопасный', 'Краш-тест'], price: 'от 5 500 ₽', rating: 4.8 },
  ],
  hygiene: [
    { name: 'Шампунь без слёз', emoji: '🧴', desc: 'Гипоаллергенный шампунь с ромашкой, без запаха', tags: ['Гипоаллерген', 'Ромашка', 'Мягкий'], price: 'от 350 ₽', rating: 4.7 },
    { name: 'Когтерезка с подсветкой', emoji: '✂️', desc: 'LED подсветка сосудов при стрижке когтей', tags: ['LED', 'Безопасная', 'Удобная'], price: 'от 680 ₽', rating: 4.8 },
    { name: 'Расчёска-фурминатор', emoji: '🪮', desc: 'Удаляет подшёрсток, снижает линьку до 90%', tags: ['Линька', 'Подшёрсток', '−90%'], price: 'от 1 200 ₽', rating: 4.9 },
    { name: 'Зубная щётка силикон', emoji: '🦷', desc: 'Силиконовая насадка на палец для чистки зубов', tags: ['Силикон', 'Зубы', 'Здоровье'], price: 'от 180 ₽', rating: 4.5 },
    { name: 'Влажные салфетки', emoji: '🧻', desc: 'Гипоаллергенные салфетки для лап и шерсти, 80 шт', tags: ['Лапы', 'Гипоаллерген', '80 шт'], price: 'от 220 ₽', rating: 4.6 },
    { name: 'Ванночка для купания', emoji: '🛁', desc: 'Складная ванночка с нескользящим дном и трубкой', tags: ['Складная', 'Удобная', 'Слив'], price: 'от 1 500 ₽', rating: 4.7 },
  ],
  food: [
    { name: 'Сухой корм премиум', emoji: '🍖', desc: 'Полноценный рацион с ягнёнком для средних пород', tags: ['Премиум', 'Ягнёнок', 'Средние'], price: 'от 1 800 ₽/кг', rating: 4.8 },
    { name: 'Влажный корм паштет', emoji: '🥩', desc: 'Нежный паштет с курицей и овощами без злаков', tags: ['Без злаков', 'Курица', 'Паштет'], price: 'от 120 ₽/банка', rating: 4.7 },
    { name: 'Лакомства Freeze Dry', emoji: '🍗', desc: 'Сублимированные куриные грудки, 100% мясо', tags: ['100% мясо', 'Сублимат', 'Лакомство'], price: 'от 450 ₽', rating: 4.9 },
    { name: 'Корм для котят', emoji: '🐱', desc: 'Специальная формула для котят до 1 года с DHA', tags: ['Для котят', 'DHA', 'До 1 года'], price: 'от 900 ₽/кг', rating: 4.8 },
    { name: 'Зубные палочки', emoji: '🦴', desc: 'Натуральные жевательные палочки для чистки зубов', tags: ['Натуральные', 'Зубы', 'Жевательные'], price: 'от 280 ₽', rating: 4.6 },
    { name: 'Витамины Омега-3', emoji: '💊', desc: 'Рыбий жир в капсулах для блеска шерсти и суставов', tags: ['Омега-3', 'Шерсть', 'Суставы'], price: 'от 750 ₽', rating: 4.7 },
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
  const [activeAccessory, setActiveAccessory] = useState('toys');
  const [search, setSearch] = useState('');

  const isAccessories = activeType === 'accessories';
  const current = isAccessories
    ? (accessories[activeAccessory] || [])
    : (breeds[activeType as keyof typeof breeds] || []);
  const filtered = current.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="tag-pill bg-orange-100 text-brand-orange mb-3">
              {isAccessories ? '🛍️ Аксессуары' : '🐾 Каталог пород'}
            </div>
            <h2 className="section-title text-brand-dark">
              {isAccessories ? 'Товары для' : 'Все виды'}<br />
              <span className="text-gradient">{isAccessories ? 'питомцев' : 'животных'}</span>
            </h2>
          </div>
          <div className="relative">
            <Icon name="Search" size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={isAccessories ? 'Найти товар...' : 'Найти породу...'}
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-11 pr-4 py-3 rounded-2xl border border-gray-200 bg-gray-50 font-golos text-sm focus:outline-none focus:border-brand-orange focus:bg-white transition-all w-72"
            />
          </div>
        </div>

        <div className="flex gap-3 mb-6 overflow-x-auto pb-2 scrollbar-hide">
          {animalTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => { setActiveType(type.id); setSearch(''); }}
              className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl whitespace-nowrap font-golos font-medium text-sm transition-all duration-200 flex-shrink-0 ${
                activeType === type.id
                  ? type.id === 'accessories'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                    : 'bg-brand-dark text-white shadow-lg shadow-slate-200'
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

        {isAccessories && (
          <div className="flex gap-2 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            {accessoryCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => { setActiveAccessory(cat.id); setSearch(''); }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl whitespace-nowrap font-golos text-sm font-medium flex-shrink-0 transition-all ${
                  activeAccessory === cat.id
                    ? 'bg-purple-100 text-purple-700 border border-purple-200'
                    : 'bg-gray-100 text-gray-500 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <span>{cat.emoji}</span>
                {cat.label}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeAccessory === cat.id ? 'bg-purple-200 text-purple-700' : 'bg-gray-200 text-gray-400'}`}>
                  {cat.count.toLocaleString('ru')}
                </span>
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <div
              key={item.name}
              className="group bg-white border border-gray-100 rounded-3xl p-6 card-hover cursor-pointer"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform ${
                  isAccessories
                    ? 'bg-gradient-to-br from-purple-100 to-pink-100'
                    : 'bg-gradient-to-br from-orange-100 to-amber-100'
                }`}>
                  {item.image ?? item.emoji}
                </div>
                <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-red-100 transition-colors">
                  <Icon name="Heart" size={16} className="text-gray-400 group-hover:text-red-400 transition-colors" />
                </button>
              </div>

              <h3 className="font-oswald text-xl font-bold text-brand-dark mb-1">{item.name}</h3>
              <p className="text-sm text-gray-500 font-golos mb-3">{item.desc}</p>
              <StarRating value={item.rating} />

              <div className="flex flex-wrap gap-1.5 my-3">
                {item.tags.map(tag => (
                  <span key={tag} className={`tag-pill text-xs ${isAccessories ? 'bg-purple-50 text-purple-600' : 'bg-orange-50 text-orange-600'}`}>{tag}</span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <span className={`font-oswald font-bold text-lg ${isAccessories ? 'text-purple-600' : 'text-brand-orange'}`}>{item.price}</span>
                <button className={`flex items-center gap-1.5 text-sm font-golos font-medium transition-colors ${isAccessories ? 'text-gray-500 hover:text-purple-600' : 'text-gray-500 hover:text-brand-orange'}`}>
                  {isAccessories ? 'В корзину' : 'Смотреть'} <Icon name={isAccessories ? 'ShoppingCart' : 'ArrowRight'} size={14} />
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