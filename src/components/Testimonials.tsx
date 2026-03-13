import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function Testimonials() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">O que dizem nossos investidores</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Com mais de 4.862 avaliações no Google, a satisfação dos nossos clientes é a nossa maior garantia.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            name: "Carlos Eduardo",
            role: "Empresário",
            text: "O processo foi 100% digital e extremamente transparente. Comprei meu segundo apartamento em Itapema com o Breno e a valorização já superou minhas expectativas."
          },
          {
            name: "Roberto Almeida",
            role: "Investidor",
            text: "A consultoria do Breno foi fundamental. Ele me mostrou dados reais de rentabilidade e me ajudou a escolher a melhor planta para locação de temporada."
          },
          {
            name: "Marcelo Silva",
            role: "Profissional Liberal",
            text: "Moro em Portugal e consegui fechar negócio com total segurança. A estrutura d'O Novo Imobiliário faz toda a diferença na hora de investir no Brasil."
          }
        ].map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-3xl p-8 border border-white/5"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gray-300 mb-8 italic">"{testimonial.text}"</p>
            <div>
              <p className="font-bold text-white">{testimonial.name}</p>
              <p className="text-sm text-gold">{testimonial.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
