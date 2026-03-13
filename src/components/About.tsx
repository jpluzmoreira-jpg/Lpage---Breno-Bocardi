import { motion } from 'motion/react';

export function About() {
  return (
    <section className="py-24 px-4 bg-darker border-y border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
            alt="Breno Bocardi"
            className="rounded-3xl object-cover aspect-[4/5] w-full max-w-md mx-auto grayscale hover:grayscale-0 transition-all duration-700 border border-white/10"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Breno Bocardi</h2>
          <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-8">Engenheiro & Especialista Imobiliário</p>
          <div className="space-y-6 text-gray-300 text-lg font-light">
            <p>Com 15 anos de atuação no mercado imobiliário e formação em Engenharia, ofereço uma consultoria técnica e analítica para seus investimentos.</p>
            <p>Faço parte d'O Novo Imobiliário, a terceira maior imobiliária do Brasil, garantindo acesso a condições exclusivas de preço e pagamento que você não encontra em outro lugar.</p>
            <p>Meu objetivo é trazer clareza e suporte em cada etapa do processo, garantindo que seu patrimônio cresça com segurança e alta rentabilidade.</p>
          </div>
          <div className="mt-10 flex gap-8 items-center border-t border-white/10 pt-8">
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">CRECI</p>
              <p>73645</p>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Empresa</p>
              <p>O Novo Imobiliário</p>
            </div>
            <div className="text-sm text-gray-400">
              <p className="font-semibold text-white">Avaliações</p>
              <p>4.862 no Google</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
