import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { ApiKeyGate } from './ApiKeyGate';

export function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState('1K');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [{ text: `Luxurious real estate apartment in Porto Belo Brazil, highly detailed, photorealistic, cinematic lighting, ${prompt}` }]
        },
        config: {
          imageConfig: {
            aspectRatio: "16:9",
            imageSize: size as "1K" | "2K" | "4K"
          }
        }
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          setImageUrl(`data:image/png;base64,${part.inlineData.data}`);
          foundImage = true;
          break;
        }
      }
      if (!foundImage) throw new Error("Não foi possível gerar a imagem.");

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Erro ao gerar imagem.");
      if (err.message?.includes("Requested entity was not found")) {
         setError("Chave de API inválida ou sem acesso ao modelo. Por favor, reconfigure.");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section className="py-24 px-4 max-w-5xl mx-auto">
      <div className="bg-gradient-to-br from-card to-darker rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-50"></div>
        
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Visões do Futuro</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Descreva o apartamento dos seus sonhos e nossa IA (Nano Banana Pro) criará uma visualização em altíssima resolução para você.</p>
        </div>

        <ApiKeyGate>
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ex: Varanda gourmet com vista para o mar, decoração minimalista..."
              className="flex-1 bg-dark border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold transition-colors"
            />
            <select
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="bg-dark border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-gold appearance-none cursor-pointer"
            >
              <option value="1K">1K (Padrão)</option>
              <option value="2K">2K (Alta)</option>
              <option value="4K">4K (Ultra)</option>
            </select>
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt}
              className="bg-gold hover:bg-gold-hover disabled:opacity-50 disabled:hover:bg-gold text-dark font-bold px-8 py-4 rounded-xl transition-colors flex items-center justify-center min-w-[160px]"
            >
              {isGenerating ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Gerar Visão'}
            </button>
          </div>

          {error && <p className="text-red-400 text-center mb-6 bg-red-400/10 py-3 rounded-lg">{error}</p>}

          <div className="aspect-video w-full bg-dark rounded-2xl border border-white/5 overflow-hidden flex items-center justify-center relative">
            {imageUrl ? (
              <img src={imageUrl} alt="Generated Real Estate" className="w-full h-full object-cover" />
            ) : (
              <div className="text-gray-600 flex flex-col items-center">
                <ImageIcon className="w-12 h-12 mb-2 opacity-30" />
                <p className="text-sm">Sua imagem aparecerá aqui</p>
              </div>
            )}
            {isGenerating && (
              <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm flex items-center justify-center">
                <div className="flex flex-col items-center text-gold">
                  <Loader2 className="w-10 h-10 animate-spin mb-4" />
                  <p className="font-medium animate-pulse">Renderizando arquitetura...</p>
                </div>
              </div>
            )}
          </div>
        </ApiKeyGate>
      </div>
    </section>
  );
}
