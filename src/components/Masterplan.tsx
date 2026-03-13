import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Map, Anchor, TreePine, ChevronLeft, ChevronRight } from 'lucide-react';

const videoIds = [
  "1G7ish7AKz3Xl6A9KPYRHHuJZf9KTe3Sr",
  "1sCcHYPAJykTVFbNjAFJpoNzrMpRS4pb4",
  "1k3f7n6LaUNqM9hf9io--ZVQ6P-uI5XH3"
];

export function Masterplan() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videoIds.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + videoIds.length) % videoIds.length);
  };

  return (
    <section className="py-24 px-4 bg-dark relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Transformações Arquitetônicas e o <span className="text-gold">Futuro</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              A cidade está prestes a passar por uma das maiores transformações urbanísticas do Brasil. O <strong>Masterplan do Perequê</strong> trará um novo padrão de vida e infraestrutura, elevando o patamar da região e redefinindo o luxo no litoral catarinense.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Anchor className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Novo Píer Turístico</h4>
                  <p className="text-gray-400 text-sm">Estrutura de classe mundial para receber embarcações, integrando lazer e fomentando o turismo de alto padrão.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <Map className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Revitalização da Orla</h4>
                  <p className="text-gray-400 text-sm">Alargamento da faixa de areia e um novo calçadão moderno, valorizando exponencialmente os imóveis frente-mar.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <TreePine className="text-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Parques e Mobilidade</h4>
                  <p className="text-gray-400 text-sm">Criação de novas áreas verdes, ciclovias e vias planejadas para garantir sustentabilidade e qualidade de vida.</p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-gold/20 mb-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h4 className="text-gold font-bold mb-2 relative z-10">A Janela de Oportunidade</h4>
              <p className="text-sm text-gray-300 relative z-10">
                Investir agora significa entrar <strong>antes</strong> da conclusão destas grandes obras. A valorização imobiliária projetada para os próximos anos, impulsionada pelo Masterplan, criará um cenário de altíssima rentabilidade para os investidores pioneiros.
              </p>
            </div>

            <a 
              href="https://drive.google.com/file/d/1tOc8_vH3sS6NEFSdVCdTtiVsxmMCMsuG/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-semibold"
            >
              Conheça o Masterplan Completo <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[9/16] md:aspect-[4/3] lg:aspect-[9/16] border border-white/10 bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentVideo}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <iframe 
                    src={`https://drive.google.com/file/d/${videoIds[currentVideo]}/preview`}
                    className="w-full h-full border-0"
                    allow="autoplay; fullscreen"
                  />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-y-0 left-0 flex items-center">
                <button 
                  onClick={prevVideo}
                  className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-r-xl backdrop-blur-sm transition-colors"
                  aria-label="Vídeo anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button 
                  onClick={nextVideo}
                  className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-l-xl backdrop-blur-sm transition-colors"
                  aria-label="Próximo vídeo"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                {videoIds.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentVideo(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors pointer-events-auto ${
                      currentVideo === idx ? 'bg-gold' : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Ir para o vídeo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
