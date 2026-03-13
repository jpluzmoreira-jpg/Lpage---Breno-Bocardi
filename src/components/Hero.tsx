import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight tracking-tight"
        >
          Multiplique seu Patrimônio no Litoral que Mais Valoriza no Brasil
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-light"
        >
          Invista em imóveis na planta em Porto Belo e Itapema com rentabilidade média de 15% ao ano e condições exclusivas de pré-lançamento.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a href="#contato" className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(205,164,52,0.3)]">
            Falar com Especialista
          </a>
        </motion.div>
      </div>
    </section>
  );
}
