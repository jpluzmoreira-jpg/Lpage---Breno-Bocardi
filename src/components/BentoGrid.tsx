import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { brokerData } from '../config/brokerData';

// Helper to dynamically render Lucide icons
const IconComponent = ({ name, className }: { name: string, className?: string }) => {
  const Icon = (LucideIcons as any)[name];
  if (!Icon) return <LucideIcons.CheckCircle className={className} />;
  return <Icon className={className} />;
};

export function BentoGrid() {
  const [isMobile, setIsMobile] = useState(false);
  const { benefits } = brokerData;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  const gradientVariants = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  };

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{benefits.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Oportunidades únicas em um mercado com crescimento acelerado e segurança jurídica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">
        {benefits.cards.map((card, index) => {
          // Make the first and last cards span 2 columns on desktop for the bento effect
          const isWide = index === 0 || index === 3;
          
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${isWide ? 'md:col-span-2' : ''} bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group`}
            >
              <motion.div 
                variants={isMobile ? gradientVariants : {}}
                transition={{ delay: 1 + (index * 0.1), duration: 1 }}
                className={`absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent transition-opacity ${!isMobile ? 'opacity-0 group-hover:opacity-100' : ''}`}
              ></motion.div>
              <IconComponent name={card.icon} className="w-10 h-10 text-gold mb-6 relative z-10" />
              <h3 className="text-2xl font-display font-bold mb-3 relative z-10">{card.title}</h3>
              <p className="text-gray-400 relative z-10">{card.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
