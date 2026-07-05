import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import hospitalImg from './assets/Hospital.jpeg'; 
import Specialist from './components/Specialist';

function App() {
  return (
    <div className="min-h-screen bg-site-bg pt-24 font-sans text-body flex flex-col">
      <Navbar />
      
      <div id ="home"
       className="flex-grow">
        {/* Refined Hero Section with Image */}
        <main className="max-w-7xl mx-auto px-6 py-12">
          {/* Change 1: Reduce padding on mobile (p-6) but keep it large on desktop (md:p-12) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center bg-surface p-6 md:p-12 rounded-2xl shadow-lg border border-site-border"
        >
          <div>
            <span className="text-secondary font-semibold mb-2 block tracking-widest uppercase text-sm md:text-base">Est. 1992</span>
            
            {/* Change 2: Scale heading down on mobile (text-4xl) and up on desktop (md:text-5xl) */}
            <h1 className="text-4xl md:text-5xl font-bold text-heading mb-4 md:mb-6 leading-tight">
              Advanced Orthopaedic Care
            </h1>
            
            <p className="text-body text-base md:text-lg max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
              Expert care for your joints and bones at Riaz Orthopaedic Hospital, Gorakhpur. Led by the inspiration of Dr. Khalid Raza Azmi, we provide world-class, quick-recovery treatments.
            </p>
            
            <a 
              href="#services"
              className="inline-block w-full md:w-auto text-center bg-accent text-heading px-8 py-3 rounded-md font-bold hover:bg-[#B29D7A] transition-colors shadow-md cursor-pointer"
            >
              View Our Services
            </a>
          </div>
          
          {/* Image wrapper */}
          <div className="rounded-xl overflow-hidden shadow-2xl border-4 border-accent-light w-full aspect-video md:aspect-auto">
              <img src={hospitalImg} alt="Riaz Orthopaedic Hospital Building" className="w-full h-full object-cover" />
          </div>
        </motion.div>
        </main>
        <Services />
        <Specialist />
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;