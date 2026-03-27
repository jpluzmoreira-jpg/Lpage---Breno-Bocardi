import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function Stats() {
  const { stats } = brokerData;

  if (!stats || stats.length === 0) return null;

  return (
    <section className="py-12 border-y border-white/10 bg-darker overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 px-8 items-center shrink-0">
            {stats.map((stat, index) => (
              <div key={index} className="flex gap-16 items-center">
                <span className="text-2xl font-display">
                  {/* If the text ends with "em", we format it differently to match the original design */}
                  {stat.text.toLowerCase().endsWith('em') ? (
                    <>{stat.text} <span className="text-gold">{stat.highlight}</span></>
                  ) : (
                    <><span className="text-gold">{stat.highlight}</span> {stat.text}</>
                  )}
                </span>
                <span className="text-white/20">•</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
