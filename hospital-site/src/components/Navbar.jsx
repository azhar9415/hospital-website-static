import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.jpeg';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  // Parent container animation (Slides down and staggers children)
  const menuVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.1 }
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      transition: { duration: 0.2, ease: "easeIn" } 
    }
  };

  // Individual link animation (Slides in from the left)
  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
  };

  return (
    <nav className="bg-surface shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] w-full fixed top-0 left-0 z-50 border-b border-site-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex justify-between items-center relative z-50 bg-surface">
        
        {/* Logo Section */}
        <a href="#home" className="flex items-center space-x-3 cursor-pointer group">
          <img 
            src={logo} 
            alt="Riaz Orthopaedic Hospital Logo" 
            className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full border-2 border-accent-light group-hover:shadow-md transition-all" 
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold text-primary tracking-wide leading-tight">
              RIAZ ORTHOPAEDIC
            </span>
            <span className="text-xs md:text-sm font-semibold text-secondary tracking-widest">
              HOSPITAL
            </span>
          </div>
        </a>

        {/* Desktop Navigation - Hidden on Mobile */}
        <div className="hidden lg:flex items-center space-x-4">
          <ul className="flex space-x-2 text-body font-medium mr-4">
            {/* Reverted hover states back to hover:bg-site-bg and hover:text-primary */}
            <li><a href="#home" className="px-4 py-2 rounded-lg hover:bg-site-bg hover:text-primary active:scale-95 transition-all duration-200 block">Home</a></li>
            <li><a href="#services" className="px-4 py-2 rounded-lg hover:bg-site-bg hover:text-primary active:scale-95 transition-all duration-200 block">Services</a></li>
            <li><a href="#specialist" className="px-4 py-2 rounded-lg hover:bg-site-bg hover:text-primary active:scale-95 transition-all duration-200 block">Specialists</a></li>
            <li><a href="#contact" className="px-4 py-2 rounded-lg hover:bg-site-bg hover:text-primary active:scale-95 transition-all duration-200 block">Contact</a></li>
          </ul>

          <a href="tel:+919876543210" className="group flex items-center gap-2 bg-primary text-surface px-6 py-2.5 rounded-full font-medium hover:bg-secondary transition-all shadow-sm hover:shadow-lg hover:-translate-y-0.5 active:scale-95">
            <Phone className="w-4 h-4 text-accent" />
            <span>Call: +91 98765 43210</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="lg:hidden p-2 text-primary hover:bg-site-bg rounded-md active:scale-95 transition-transform"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {/* Animate the icon switch */}
          <AnimatePresence mode="wait">
            <motion.div
              key={isMobileMenuOpen ? "close" : "menu"}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 90 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Animated Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden absolute top-full left-0 w-full bg-surface border-b border-site-border shadow-xl py-4 px-6 flex flex-col space-y-2 -z-10"
          >
            <motion.a variants={linkVariants} href="#home" onClick={closeMenu} className="text-lg font-medium text-body hover:text-primary py-3 border-b border-site-border/50">Home</motion.a>
            <motion.a variants={linkVariants} href="#services" onClick={closeMenu} className="text-lg font-medium text-body hover:text-primary py-3 border-b border-site-border/50">Services</motion.a>
            <motion.a variants={linkVariants} href="#specialist" onClick={closeMenu} className="text-lg font-medium text-body hover:text-primary py-3 border-b border-site-border/50">Specialists</motion.a>
            <motion.a variants={linkVariants} href="#contact" onClick={closeMenu} className="text-lg font-medium text-body hover:text-primary py-3 border-b border-site-border/50">Contact</motion.a>
            
            <motion.a 
              variants={linkVariants}
              href="tel:+919876543210" 
              onClick={closeMenu} 
              className="flex items-center justify-center gap-2 bg-primary text-surface px-6 py-3.5 rounded-full font-medium mt-6 active:scale-95 transition-transform"
            >
              <Phone className="w-5 h-5 text-accent" />
              <span>Call: +91 98765 43210</span>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;