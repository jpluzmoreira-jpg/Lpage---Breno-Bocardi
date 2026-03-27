import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Header() {
  const { broker, featuredProperty, company } = brokerData;

  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const message = encodeURIComponent(broker.whatsappMessage);
    window.open(`https://wa.me/${broker.phone}?text=${message}`, '_blank');
  };

  // Helper to split name for styling (e.g., "BRENO" and "BOCARDI")
  const nameParts = broker.name.split(' ');
  const firstName = nameParts[0]?.toUpperCase() || '';
  const lastName = nameParts.slice(1).join(' ')?.toUpperCase() || '';

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {broker.logoSymbol && (
            <img src={broker.logoSymbol} alt="Logo" className="h-8 w-auto" referrerPolicy="no-referrer" />
          )}
          <div className="font-display font-bold text-2xl tracking-wider text-white">
            {firstName}<span className="text-gold">{lastName ? ` ${lastName}` : ''}</span>
          </div>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          {featuredProperty.show && (
            <a href="#empreendimento" className="hover:text-gold transition-colors">Destaque</a>
          )}
          <a href="#masterplan" className="hover:text-gold transition-colors">Região</a>
          {company.show && (
            <a href="#empresa" className="hover:text-gold transition-colors">Empresa</a>
          )}
        </nav>
        <a
          href={`https://wa.me/${broker.phone}`}
          onClick={handleWhatsAppClick}
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors border border-white/10"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}
