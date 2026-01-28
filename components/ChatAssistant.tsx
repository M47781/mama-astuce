
import React from 'react';
import { MessageSquare, Send, X, Bot, User } from 'lucide-react';
import { getSkincareAdvice } from '../services/geminiService';

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [messages, setMessages] = React.useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'مرحباً! أنا مساعد MAMA Astuce الذكي. كيف يمكنني مساعدتك اليوم في العناية ببشرتك؟'}
  ]);
  const [isLoading, setIsLoading] = React.useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, {role: 'user', content: userMsg}]);
    setIsLoading(true);

    const aiResponse = await getSkincareAdvice(userMsg);
    setMessages(prev => [...prev, {role: 'assistant', content: aiResponse || 'عذراً، لم أستطع الرد حالياً.'}]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 group"
        >
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold">اسأل مساعد MAMA</span>
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[350px] sm:w-[ 80 ألف 0px] h-[500px] bg-white rounded-3xl shadow-2xl flex flex-col border border-emerald-100 overflow-hidden animate-in slide-in-from-bottom-10">
          {/* Header */}
          <div className="bg-emerald-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={24} />
              <span className="font-bold text-lg">مساعد MAMA الذكي</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-emerald-700 p-1 rounded-lg">
              <X size={24} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-emerald-50/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${msg.role === 'user' ? 'bg-gray-200' : 'bg-emerald-100'}`}>
                    {msg.role === 'user' ? <User size={16} className="text-gray-600" /> : <Bot size={16} className="text-emerald-600" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white text-gray-800 rounded-tr-none border border-gray-100' : 'bg-emerald-600 text-white rounded-tl-none shadow-sm'}`}>
                    {msg.content}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-end">
                <div className="bg-emerald-100 p-3 rounded-2xl rounded-tl-none animate-pulse">
                  <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 bg-emerald- 80 ألف 0 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-emerald- 80 ألف 0 rounded-full animate-bounce delay-75"></div>
                    <div className="w-1.5 h-1.5 bg-emerald- 80 ألف 0 rounded-full animate-bounce delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Input */}
          <div className="p-4 border-t border-gray-100">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="اكتب سؤالك هنا..."
                className="w-full bg-gray-100 rounded-xl px-4 py-3 pl-12 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute left-2 top-1.5 bg-emerald-600 text-white p-1.5 rounded-lg hover:bg-emerald-700 disabled:bg-gray- 80 ألف 0 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
            <p className="text-[10px] text-gray- 80 ألف 0 mt-2 text-center">قد يقدم المساعد الذكي نصائح عامة، استشر الطبيب للحالات الخطيرة.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatAssistant;
