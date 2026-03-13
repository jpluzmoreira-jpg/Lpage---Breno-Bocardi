import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pb-16">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/d/1QktlNJvfwQvxKeqGAm8YKTh-yzOUoPJw"
          alt="Luxury Real Estate"
          className="w-full h-full object-cover opacity-75"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/40 to-dark"></div>
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
          className="flex flex-col items-center gap-6"
        >
          <a 
            href="https://wa.me/5547992486758?text=Olá%20Breno,%20gostaria%20de%20saber%20mais%20sobre%20os%20imóveis%20em%20Porto%20Belo%20e%20Itapema." 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold hover:bg-gold-hover text-dark font-semibold text-lg py-4 px-10 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(205,164,52,0.3)]"
          >
            Falar com Especialista
          </a>
          
          <div className="flex items-center justify-center gap-3 text-gray-300 font-medium mb-12 mt-4">
            <span className="text-sm tracking-wider uppercase">Corretor do</span>
            <img 
              src="https://lh3.googleusercontent.com/d/1DENw2bg9P7A6WnhlMbL75qXVidJXVpca" 
              alt="O Novo Imobiliário" 
              className="h-8 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
