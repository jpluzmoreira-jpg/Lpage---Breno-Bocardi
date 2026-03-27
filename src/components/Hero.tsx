import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Hero() {
  const { hero, broker, company } = brokerData;

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const message = encodeURIComponent(broker.whatsappMessage);
    window.open(`https://wa.me/${broker.phone}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="Luxury Real Estate"
          className="w-full h-full object-cover opacity-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        {hero.badge && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold text-sm font-bold tracking-wider uppercase rounded-full border border-gold/30">
              {hero.badge}
            </span>
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
        >
          {hero.subheadline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <a 
            href={`https://wa.me/${broker.phone}`}
            onClick={handleWhatsAppClick}
            className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(205,164,52,0.3)]"
          >
            {hero.ctaText}
          </a>
          
          {company.show && (
            <div className="flex items-center justify-center gap-3 text-gray-300 font-medium mb-12 mt-4">
              <span className="text-sm tracking-wider uppercase">Associado</span>
              <span className="text-lg font-display text-gold">{company.name}</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
