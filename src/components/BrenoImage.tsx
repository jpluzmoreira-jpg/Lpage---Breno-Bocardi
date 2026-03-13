import { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Wand2 } from 'lucide-react';
import { motion } from 'motion/react';

export function BrenoImage() {
  const [imageUrl, setImageUrl] = useState<string | null>(localStorage.getItem('breno_edited_image') || '/original_breno.jpg');
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleEnhance = async () => {
    setIsGenerating(true);
    setError(null);
    try {
      // Ensure API key is selected
      if (window.aistudio?.hasSelectedApiKey) {
        const hasKey = await window.aistudio.hasSelectedApiKey();
        if (!hasKey) {
          await window.aistudio.openSelectKey();
        }
      }

      // Fetch the original image
      const res = await fetch('/original_breno.jpg');
      const blob = await res.blob();
      
      const reader = new FileReader();
      const base64data = await new Promise<string>((resolve) => {
        reader.onloadend = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
      });

      const base64 = base64data.split(',')[1];
      const mimeType = blob.type || 'image/jpeg';

      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image-preview',
        contents: {
          parts: [
            {
              inlineData: {
                data: base64,
                mimeType
              }
            },
            {
              text: 'Isolate the man, remove all text next to him (keep text on his shirt). Expand his cropped arm and shoulder. Enhance resolution and sharpness to 8k photorealistic quality. Maintain his exact facial features and expressions.'
            }
          ]
        }
      });

      let found = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const newImageUrl = `data:image/png;base64,${part.inlineData.data}`;
          setImageUrl(newImageUrl);
          localStorage.setItem('breno_edited_image', newImageUrl);
          found = true;
          break;
        }
      }
      if (!found) throw new Error("A IA não retornou uma imagem válida.");

    } catch (e: any) {
      console.error(e);
      setError(e.message || "Erro ao aprimorar imagem.");
    } finally {
      setIsGenerating(false);
    }
  };

  const isOriginal = imageUrl === '/original_breno.jpg';

  return (
    <div className="relative w-full max-w-md mx-auto group">
      <a 
        href="https://www.instagram.com/brenobocardi.imoveis/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <img
          src={imageUrl!}
          alt="Breno Bocardi"
          className="rounded-3xl object-cover aspect-[4/5] w-full grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
        />
      </a>
      
      {isGenerating && (
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center text-gold z-10">
          <Loader2 className="w-10 h-10 animate-spin mb-4" />
          <p className="font-medium text-center px-4">Aprimorando com Nano Banana Pro...</p>
          <p className="text-xs text-gray-400 mt-2 text-center px-4">Isolando fundo, expandindo ombros e aumentando para 8K.</p>
        </div>
      )}

      {isOriginal && !isGenerating && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleEnhance}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gold hover:bg-gold-hover text-dark font-semibold py-2 px-4 rounded-full flex items-center gap-2 shadow-lg transition-transform hover:scale-105 z-20 whitespace-nowrap"
        >
          <Wand2 className="w-4 h-4" />
          <span className="text-sm">Aprimorar Imagem (IA)</span>
        </motion.button>
      )}

      {error && (
        <div className="absolute top-4 left-4 right-4 bg-red-500/90 text-white text-xs p-3 rounded-lg z-20 backdrop-blur-md">
          {error}
        </div>
      )}
    </div>
  );
}
