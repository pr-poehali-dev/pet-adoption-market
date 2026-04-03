import { useState } from 'react';
import Icon from '@/components/ui/icon';

const conversations = [
  {
    id: 1, name: 'Анна К.', emoji: '🐕', topic: 'Лабрадор, щенок',
    lastMsg: 'Да, щенки ещё есть! Приезжайте смотреть 🐾', time: '14:30', unread: 2, online: true,
  },
  {
    id: 2, name: 'Приют «Добрые руки»', emoji: '🏠', topic: 'Вопрос о Бобике',
    lastMsg: 'Бобик уже нашёл хозяина, но есть похожие', time: '12:15', unread: 0, online: false,
  },
  {
    id: 3, name: 'Михаил О.', emoji: '🐱', topic: 'Мейн-кун',
    lastMsg: 'Котёнок здоров, все документы готовы', time: 'Вчера', unread: 1, online: true,
  },
  {
    id: 4, name: 'Юля В.', emoji: '🦜', topic: 'Попугай ара',
    lastMsg: 'Договорились, жду в субботу!', time: 'Пт', unread: 0, online: false,
  },
];

const mockMessages = [
  { id: 1, from: 'other', text: 'Здравствуйте! Увидела объявление о щенках лабрадора', time: '14:20' },
  { id: 2, from: 'me', text: 'Добрый день! Да, есть ещё 3 щеночка — 2 мальчика и девочка 🐾', time: '14:22' },
  { id: 3, from: 'other', text: 'Отлично! Они привиты? И можно приехать посмотреть?', time: '14:25' },
  { id: 4, from: 'me', text: 'Да, все привиты и дегельминтизированы. Документы племенные. Приезжайте в любой день с 10 до 19', time: '14:27' },
  { id: 5, from: 'other', text: 'Да, щенки ещё есть! Приезжайте смотреть 🐾', time: '14:30' },
];

export default function ChatSection() {
  const [activeChat, setActiveChat] = useState(1);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState(mockMessages);

  const activeConv = conversations.find(c => c.id === activeChat);

  const sendMessage = () => {
    if (!message.trim()) return;
    setMessages(prev => [...prev, {
      id: prev.length + 1,
      from: 'me',
      text: message,
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    }]);
    setMessage('');
  };

  return (
    <section className="py-20 bg-mesh">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <div className="tag-pill bg-purple-100 text-purple-600 mb-3">💬 Чат</div>
          <h2 className="section-title text-brand-dark">
            Общайся напрямую<br /><span className="text-gradient">с продавцами</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100" style={{ height: '600px' }}>
          <div className="flex h-full">
            <div className="w-80 border-r border-gray-100 flex flex-col flex-shrink-0">
              <div className="p-4 border-b border-gray-100">
                <div className="relative">
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    className="w-full pl-9 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm font-golos focus:outline-none focus:bg-white border border-transparent focus:border-orange-200"
                    placeholder="Поиск..."
                  />
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                {conversations.map((conv) => (
                  <button
                    key={conv.id}
                    onClick={() => setActiveChat(conv.id)}
                    className={`w-full flex items-start gap-3 p-4 hover:bg-orange-50/50 transition-colors text-left ${activeChat === conv.id ? 'bg-orange-50 border-r-2 border-brand-orange' : ''}`}
                  >
                    <div className="relative flex-shrink-0">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-2xl">
                        {conv.emoji}
                      </div>
                      {conv.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-0.5">
                        <span className="font-golos font-semibold text-sm text-brand-dark truncate">{conv.name}</span>
                        <span className="text-xs text-gray-400 font-golos flex-shrink-0 ml-1">{conv.time}</span>
                      </div>
                      <div className="text-xs text-brand-orange font-golos font-medium mb-1">{conv.topic}</div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-golos truncate">{conv.lastMsg}</span>
                        {conv.unread > 0 && (
                          <span className="w-5 h-5 bg-brand-orange text-white text-xs rounded-full flex items-center justify-center font-bold flex-shrink-0 ml-1">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 flex flex-col">
              {activeConv && (
                <>
                  <div className="flex items-center gap-3 p-4 border-b border-gray-100">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center text-xl">
                        {activeConv.emoji}
                      </div>
                      {activeConv.online && (
                        <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div>
                      <div className="font-golos font-semibold text-brand-dark text-sm">{activeConv.name}</div>
                      <div className="text-xs text-gray-400 font-golos">
                        {activeConv.online ? (
                          <span className="text-green-500">● онлайн</span>
                        ) : 'был недавно'}
                      </div>
                    </div>
                    <div className="ml-auto flex gap-2">
                      <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-orange-50 transition-colors">
                        <Icon name="Phone" size={16} className="text-gray-500" />
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-orange-50 transition-colors">
                        <Icon name="MoreHorizontal" size={16} className="text-gray-500" />
                      </button>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {messages.map((msg) => (
                      <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-xs lg:max-w-md px-4 py-2.5 rounded-2xl text-sm font-golos ${
                          msg.from === 'me'
                            ? 'bg-gradient-to-br from-brand-orange to-brand-amber text-white rounded-br-sm'
                            : 'bg-gray-100 text-brand-dark rounded-bl-sm'
                        }`}>
                          <p>{msg.text}</p>
                          <div className={`text-xs mt-1 ${msg.from === 'me' ? 'text-white/70 text-right' : 'text-gray-400'}`}>
                            {msg.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 border-t border-gray-100">
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center hover:bg-orange-50 transition-colors flex-shrink-0">
                        <Icon name="Paperclip" size={18} className="text-gray-500" />
                      </button>
                      <input
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && sendMessage()}
                        className="flex-1 px-4 py-2.5 bg-gray-50 rounded-xl text-sm font-golos focus:outline-none focus:bg-white border border-transparent focus:border-orange-200 transition-all"
                        placeholder="Написать сообщение..."
                      />
                      <button
                        onClick={sendMessage}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-brand-amber flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-opacity shadow-md"
                      >
                        <Icon name="Send" size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
