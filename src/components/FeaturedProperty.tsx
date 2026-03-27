import React from 'react';
import { motion } from 'motion/react';
import { Bed, Car, Maximize, MapPin, ArrowRight } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export const FeaturedProperty: React.FC = () => {
  const { featuredProperty, broker } = brokerData;

  if (!featuredProperty.show) return null;

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Olá ${broker.name}, gostaria de receber o material completo do ${featuredProperty.title}.`);
    window.open(`https://wa.me/${broker.phone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 bg-dark relative overflow-hidden" id="empreendimento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative group">
              <img 
                src={featuredProperty.image} 
                alt={featuredProperty.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <span className="inline-block px-4 py-1.5 bg-gold text-dark text-sm font-bold tracking-wider uppercase rounded-full mb-4">
                  {featuredProperty.badge}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-medium text-white mb-2">
                  {featuredProperty.title}
                </h3>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-4 h-4 mr-2 text-gold" />
                  {featuredProperty.location}
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold/30 rounded-tl-3xl" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold/30 rounded-br-3xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Empreendimento Destaque
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              {featuredProperty.description}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {featuredProperty.features.map((feature, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <div className="w-10 h-10 rounded-full bg-card border border-white/5 flex items-center justify-center mr-4">
                    {index === 0 && <Bed className="w-5 h-5 text-gold" />}
                    {index === 1 && <Car className="w-5 h-5 text-gold" />}
                    {index === 2 && <Maximize className="w-5 h-5 text-gold" />}
                    {index === 3 && <MapPin className="w-5 h-5 text-gold" />}
                  </div>
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-card border border-white/5 mb-8">
              <p className="text-sm text-gray-400 mb-1">Investimento</p>
              <p className="text-3xl font-display text-white">{featuredProperty.price}</p>
            </div>

            <button 
              onClick={handleWhatsAppClick}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-gold text-dark font-medium rounded-full hover:bg-gold-hover transition-all duration-300"
            >
              {featuredProperty.ctaText}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
