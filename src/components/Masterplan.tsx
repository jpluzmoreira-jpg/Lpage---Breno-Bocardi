import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { brokerData } from '../config/brokerData';

// Helper to dynamically render Lucide icons
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.CheckCircle className={className} />;
  return <Icon className={className} />;
};

export function Masterplan() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const { region } = brokerData;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % region.videoIds.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) => (prev - 1 + region.videoIds.length) % region.videoIds.length);
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
              {region.title} <span className="text-gold">{region.highlight}</span>
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              {region.description}
            </p>
            
            <div className="space-y-6 mb-8">
              {region.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                    <IconComponent name={feature.icon} className="text-gold w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-2xl border border-gold/20 mb-8 relative overflow-hidden group">
              <motion.div 
                initial={isMobile ? { opacity: 0 } : {}}
                whileInView={isMobile ? { opacity: 1 } : {}}
                transition={{ delay: 1, duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent transition-opacity ${!isMobile ? 'opacity-0 group-hover:opacity-100' : ''}`}
              ></motion.div>
              <h4 className="text-gold font-bold mb-2 relative z-10">{region.opportunityBox.title}</h4>
              <p className="text-sm text-gray-300 relative z-10">
                {region.opportunityBox.description}
              </p>
            </div>

            {region.masterplanLink && (
              <a 
                href={region.masterplanLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-semibold"
              >
                Conheça o Masterplan Completo <LucideIcons.ArrowRight className="w-5 h-5" />
              </a>
            )}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative flex justify-center"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[9/16] w-full max-w-[320px] md:max-w-none md:aspect-[4/3] lg:aspect-[9/16] lg:max-w-[400px] border border-white/10 bg-black shadow-2xl">
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
                    src={`https://drive.google.com/file/d/${region.videoIds[currentVideo]}/preview`}
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
                  <LucideIcons.ChevronLeft className="w-6 h-6" />
                </button>
              </div>
              
              <div className="absolute inset-y-0 right-0 flex items-center">
                <button 
                  onClick={nextVideo}
                  className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-l-xl backdrop-blur-sm transition-colors"
                  aria-label="Próximo vídeo"
                >
                  <LucideIcons.ChevronRight className="w-6 h-6" />
                </button>
              </div>

              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 pointer-events-none">
                {region.videoIds.map((_, idx) => (
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
