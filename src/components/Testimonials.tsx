import { motion } from 'motion/react';
import { Star } from 'lucide-react';
import { brokerData } from '../config/brokerData';

export function Testimonials() {
  const { testimonials } = brokerData;

  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">{testimonials.title}</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">A satisfação dos nossos clientes é a nossa maior garantia de um trabalho focado em resultados.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.items.map((testimonial, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-3xl p-8 border border-white/5 flex flex-col h-full"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-gray-300 mb-8 italic flex-grow">"{testimonial.text}"</p>
            <div className="flex items-center gap-4 mt-auto">
              {testimonial.image && (
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover border border-white/10"
                  referrerPolicy="no-referrer"
                />
              )}
              <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gold">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
