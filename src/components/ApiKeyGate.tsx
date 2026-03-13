import React, { useState, useEffect } from 'react';

declare global {
  interface Window {
    aistudio?: {
      hasSelectedApiKey: () => Promise<boolean>;
      openSelectKey: () => Promise<void>;
    };
  }
}

export function ApiKeyGate({ children }: { children: React.ReactNode }) {
  const [hasKey, setHasKey] = useState(true);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkKey = async () => {
      if (window.aistudio?.hasSelectedApiKey) {
        try {
          const result = await window.aistudio.hasSelectedApiKey();
          setHasKey(result);
        } catch (e) {
          console.error(e);
        }
      }
      setIsChecking(false);
    };
    checkKey();
  }, []);

  const handleSelectKey = async () => {
    if (window.aistudio?.openSelectKey) {
      try {
        await window.aistudio.openSelectKey();
        setHasKey(true);
      } catch (e) {
        console.error(e);
      }
    }
  };

  if (isChecking) return <div className="animate-pulse h-32 bg-white/5 rounded-xl"></div>;

  if (!hasKey) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-dark rounded-2xl border border-white/10 text-center">
        <h3 className="text-2xl font-display mb-4">Acesso Premium Necessário</h3>
        <p className="text-gray-400 mb-6 max-w-md">
          Para utilizar o Gerador de Visões em Alta Resolução (Nano Banana Pro), é necessário configurar sua chave de API do Google Cloud.
        </p>
        <button
          onClick={handleSelectKey}
          className="bg-gold hover:bg-gold-hover text-dark font-semibold py-3 px-8 rounded-full transition-colors"
        >
          Configurar Chave
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
