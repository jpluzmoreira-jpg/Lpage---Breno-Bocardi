import React from 'react';
import { motion } from 'motion/react';
import { Building2, ShieldCheck, TrendingUp } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export const CompanyAuthority: React.FC = () => {
  const { company } = brokerData;

  if (!company.show) return null;

  return (
    <section className="py-24 bg-card relative overflow-hidden border-y border-white/5" id="empresa">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-gold text-sm font-bold tracking-[0.2em] uppercase mb-4">
              {company.name}
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
              {company.title}
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-12">
              {company.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {company.stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-4xl font-display text-gold mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden relative">
              <img 
                src={company.image} 
                alt={company.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-dark/40 mix-blend-multiply" />
              
              {/* Floating Badges */}
              <div className="absolute top-8 right-8 bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
                <ShieldCheck className="w-8 h-8 text-gold" />
                <div>
                  <div className="text-white font-medium">Segurança</div>
                  <div className="text-xs text-gray-400">Jurídica 100%</div>
                </div>
              </div>

              <div className="absolute bottom-8 left-8 bg-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
                <TrendingUp className="w-8 h-8 text-gold" />
                <div>
                  <div className="text-white font-medium">Rentabilidade</div>
                  <div className="text-xs text-gray-400">Acima da Média</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
