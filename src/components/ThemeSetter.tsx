import React, { useEffect } from 'react';
import { brokerData } from '../config/brokerData';

export const ThemeSetter: React.FC = () => {
  useEffect(() => {
    const root = document.documentElement;
    const { theme } = brokerData;

    root.style.setProperty('--color-gold', theme.primary);
    root.style.setProperty('--color-gold-hover', theme.primaryHover);
    root.style.setProperty('--color-dark', theme.background);
    root.style.setProperty('--color-card', theme.cardBg);

    // Optional: If you want to dynamically inject Google Fonts based on config
    // For now, we assume Inter and Playfair Display are loaded in index.html
    // but we can set the CSS variables for them
    root.style.setProperty('--font-sans', theme.fontPrimary);
    root.style.setProperty('--font-display', theme.fontSecondary);

  }, []);

  return null;
};
