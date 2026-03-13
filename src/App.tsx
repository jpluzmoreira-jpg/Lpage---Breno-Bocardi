/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { BentoGrid } from './components/BentoGrid';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { ImageGenerator } from './components/ImageGenerator';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark text-white font-sans selection:bg-gold selection:text-dark">
      <Header />
      <Hero />
      <Stats />
      <div id="diferenciais">
        <BentoGrid />
      </div>
      <div id="sobre">
        <About />
      </div>
      <Testimonials />
      <div id="visoes">
        <ImageGenerator />
      </div>
      <Footer />
      <Chatbot />
    </div>
  );
}
