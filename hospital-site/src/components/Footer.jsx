import React from 'react';
import logo from '../assets/logo.jpeg';

function Footer() {
  return (
    <footer className="bg-footer pt-16 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1: Brand & About */}
          <div>
            <div className="flex items-center space-x-3 mb-6 bg-surface p-2 rounded-lg inline-flex">
              <img 
                src={logo} 
                alt="Riaz Orthopaedic Hospital Logo" 
                className="h-10 w-10 object-contain rounded-full" 
              />
              <span className="text-lg font-bold text-primary tracking-wide">
                RIAZ ORTHO
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Dedicated to excellence in orthopaedic care. We combine advanced medical technology with compassionate patient care to help you regain your mobility.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#home" className="hover:text-accent transition-colors block">Home</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors block">Our Services</a></li>
              <li><a href="#specialist" className="hover:text-accent transition-colors block">Specialists</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors block">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Emergency Info */}
          <div>
            <h4 className="text-white text-lg font-bold mb-6">Emergency Care</h4>
            <p className="text-slate-300 mb-4">
              For orthopaedic emergencies, fractures, or severe trauma, please contact our emergency response immediately.
            </p>
            <a 
              href="tel:+919580334242" 
              className="bg-primary p-4 rounded-lg border border-secondary inline-block hover:bg-secondary transition-all active:scale-95 group cursor-pointer"
            >
              <span className="block text-slate-300 text-sm mb-1 group-hover:text-white transition-colors">24/7 Helpline</span>
              <span className="text-accent font-bold text-xl group-hover:text-white transition-colors">+91 95803 34242</span>
            </a>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-secondary pt-8 text-center md:flex md:justify-between items-center text-slate-300 text-sm">
          <p>&copy; {new Date().getFullYear()} Riaz Orthopaedic Hospital. All rights reserved.</p>
          <p className="mt-4 md:mt-0">Developed with precision and care.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;