import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { brokerData } from '../config/brokerData';

export function BrokerImage() {
  const [isMobile, setIsMobile] = useState(false);
  const { broker } = brokerData;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="relative w-full max-w-md mx-auto group">
      <a 
        href={broker.instagram} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block"
      >
        <motion.img
          initial={isMobile ? { filter: 'grayscale(1)' } : {}}
          whileInView={isMobile ? { filter: 'grayscale(0)' } : {}}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 1, duration: 1 }}
          src={broker.profileImage}
          alt={broker.name}
          referrerPolicy="no-referrer"
          className={`rounded-3xl object-cover aspect-[4/5] w-full transition-all duration-700 border border-white/10 ${!isMobile ? 'grayscale group-hover:grayscale-0' : ''}`}
        />
      </a>
    </div>
  );
}
