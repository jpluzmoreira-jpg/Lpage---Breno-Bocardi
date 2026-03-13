import { motion } from 'motion/react';
import { Shield, TrendingUp, Clock, Globe } from 'lucide-react';

export function BentoGrid() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Por que investir agora?</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Oportunidades únicas em um mercado com crescimento acelerado e segurança jurídica.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto md:auto-rows-[250px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-2 bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <TrendingUp className="w-10 h-10 text-gold mb-6 relative z-10" />
          <h3 className="text-2xl font-display font-bold mb-3 relative z-10">Alta Rentabilidade</h3>
          <p className="text-gray-400 relative z-10">A região de Porto Belo valorizou incríveis 132% nos últimos 2 anos. Uma média de 15% ao ano, superando qualquer aplicação de renda fixa nacional.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Clock className="w-10 h-10 text-gold mb-6 relative z-10" />
          <h3 className="text-2xl font-display font-bold mb-3 relative z-10">10 Anos para Pagar</h3>
          <p className="text-gray-400 relative z-10">Financiamento direto com a construtora, sem juros, com fluxo de pagamento flexível, pagamento em até 132 vezes.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Shield className="w-10 h-10 text-gold mb-6 relative z-10" />
          <h3 className="text-2xl font-display font-bold mb-3 relative z-10">Parcerias Sólidas</h3>
          <p className="text-gray-400 relative z-10">Trabalhamos apenas com as maiores e mais seguras construtoras da região.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="md:col-span-2 bg-card rounded-3xl p-8 border border-white/5 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <Globe className="w-10 h-10 text-gold mb-6 relative z-10" />
          <h3 className="text-2xl font-display font-bold mb-3 relative z-10">Processo 100% Digital</h3>
          <p className="text-gray-400 relative z-10">Atendimento global. Não importa onde você mora (EUA, Europa ou Brasil), todo o processo de aquisição é feito de forma digital, transparente e segura.</p>
        </motion.div>
      </div>
    </section>
  );
}
