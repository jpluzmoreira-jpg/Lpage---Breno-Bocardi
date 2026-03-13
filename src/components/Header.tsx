import { motion } from 'motion/react';

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <div className="font-display font-bold text-2xl tracking-wider text-white">
          BRENO<span className="text-gold">BOCARDI</span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-300">
          <a href="#diferenciais" className="hover:text-gold transition-colors">Diferenciais</a>
          <a href="#sobre" className="hover:text-gold transition-colors">Sobre</a>
          <a href="#visoes" className="hover:text-gold transition-colors">Visões do Futuro</a>
        </nav>
        <a
          href="#contato"
          className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors border border-white/10"
        >
          Contato
        </a>
      </div>
    </motion.header>
  );
}
