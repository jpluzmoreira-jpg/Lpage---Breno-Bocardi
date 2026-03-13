import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { MessageSquare, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  role: 'user' | 'model';
  text: string;
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o assistente virtual do Breno Bocardi. Como posso ajudar com seus investimentos em Porto Belo e Itapema hoje?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const initChat = () => {
    if (!chatRef.current) {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      chatRef.current = ai.chats.create({
        model: 'gemini-3.1-pro-preview',
        config: {
          systemInstruction: `Você é o assistente virtual de Breno Bocardi, corretor de imóveis (CRECI 73645) e engenheiro.
          Você ajuda investidores a entenderem o mercado de Porto Belo e Itapema-SC.
          Destaque sempre:
          - Valorização de 15% ao ano (Porto Belo valorizou 132% em 2 anos).
          - O Novo Imobiliário é a 3ª maior do Brasil (1.3 Bi VGV).
          - Condições: 10 anos para pagar, sem juros com a construtora.
          - Processo 100% digital.
          Seja educado, persuasivo, luxuoso e direto. Contato do Breno: 47 99248-6758 ou brenomb.eng@gmail.com.`,
        }
      });
    }
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    initChat();

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: 'Desculpe, ocorreu um erro na comunicação. Por favor, tente novamente ou contate o Breno diretamente.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gold hover:bg-gold-hover text-dark rounded-full shadow-[0_0_20px_rgba(205,164,52,0.4)] flex items-center justify-center transition-transform hover:scale-110 z-50 ${isOpen ? 'hidden' : 'flex'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 w-[350px] h-[500px] bg-card border border-white/10 rounded-2xl shadow-2xl flex flex-col z-50 overflow-hidden"
          >
            <div className="bg-darker p-4 border-b border-white/10 flex justify-between items-center">
              <div>
                <h3 className="font-display font-bold text-lg">Assistente Virtual</h3>
                <p className="text-xs text-gold">Breno Bocardi Imóveis</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark/50">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${msg.role === 'user' ? 'bg-gold text-dark rounded-tr-sm' : 'bg-white/10 text-white rounded-tl-sm'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-white p-3 rounded-2xl rounded-tl-sm flex gap-2 items-center">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-xs">Digitando...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 bg-darker border-t border-white/10">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 bg-dark border border-white/10 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-gold transition-colors"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="w-10 h-10 bg-gold hover:bg-gold-hover text-dark rounded-full flex items-center justify-center disabled:opacity-50 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
