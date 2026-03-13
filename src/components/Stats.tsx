import { motion } from 'motion/react';

export function Stats() {
  return (
    <section className="py-12 border-y border-white/10 bg-darker overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 px-8 items-center shrink-0">
            <span className="text-2xl font-display"><span className="text-gold">1.3 Bi</span> VGV em 2025</span>
            <span className="text-white/20">•</span>
            <span className="text-2xl font-display"><span className="text-gold">+3.000</span> Investidores</span>
            <span className="text-white/20">•</span>
            <span className="text-2xl font-display"><span className="text-gold">132%</span> Valorização (2 anos)</span>
            <span className="text-white/20">•</span>
            <span className="text-2xl font-display">Sede em <span className="text-gold">4 Países</span></span>
            <span className="text-white/20">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
