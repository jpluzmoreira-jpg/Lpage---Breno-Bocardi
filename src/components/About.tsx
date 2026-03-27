import { motion } from 'motion/react';
import { BrokerImage } from './BrokerImage';
import { brokerData } from '../config/brokerData';

export function About() {
  const { broker } = brokerData;

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const message = encodeURIComponent(broker.whatsappMessage);
    window.open(`https://wa.me/${broker.phone}?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 px-4 bg-darker border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex flex-col items-center"
        >
          <BrokerImage />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <a 
              href={`https://wa.me/${broker.phone}`}
              onClick={handleWhatsAppClick}
              className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(205,164,52,0.2)]"
            >
              Consultoria do {broker.name.split(' ')[0]}
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{broker.name}</h2>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-8">{broker.bio.title}</p>
          <div className="space-y-6 text-gray-300 text-lg font-light">
            {broker.bio.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-10 flex gap-8 items-center border-t border-white/10 pt-8">
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">CRECI</p>
              <p>{broker.creci}</p>
            </div>
            {brokerData.company.show && (
              <div className="text-sm text-gray-400">
                <p className="font-semibold text-white">Empresa</p>
                <p>{brokerData.company.name}</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
