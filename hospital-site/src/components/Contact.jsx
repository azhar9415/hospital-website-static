import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-surface border-t border-site-border">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Visit & Contact Us
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-body max-w-2xl mx-auto text-lg">
            We are dedicated to providing accessible care. Find our location, timings, and contact details below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column: Info Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            
            {/* Location Card */}
            <div className="p-6 border border-site-border rounded-xl flex items-start space-x-5 bg-site-bg shadow-sm hover:shadow-md transition-shadow">
              <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading mb-2">Location</h3>
                <p className="text-body leading-relaxed">
                  Riaz Orthopaedic Hospital<br/>
                  Gorakhpur, Uttar Pradesh<br/>
                  India
                </p>
              </div>
            </div>

            {/* Timings Card */}
            <div className="p-6 border border-site-border rounded-xl flex items-start space-x-5 bg-site-bg shadow-sm hover:shadow-md transition-shadow">
              <Clock className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading mb-2">Hospital Timings</h3>
                <p className="text-body leading-relaxed">
                  <span className="font-semibold text-heading">Mon - Sat:</span> 9:00 AM - 8:00 PM<br/>
                  <span className="font-semibold text-heading text-red-600">Sunday:</span> Emergency Services Only
                </p>
              </div>
            </div>

            {/* Phone & Email Card */}
            <div className="p-6 border border-site-border rounded-xl flex items-start space-x-5 bg-site-bg shadow-sm hover:shadow-md transition-shadow">
              <Phone className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-heading mb-2">Contact Details</h3>
                <p className="text-body leading-relaxed">
                  <span className="font-semibold text-heading">Phone:</span>{' '}
                  <a href="tel:+919580334242" className="hover:text-primary transition-colors">+91 95803 34242</a> ,{' '}
                  <a href="tel:+918795815384" className="hover:text-primary transition-colors">+91 87958 15384</a><br/>
                  <span className="font-semibold text-heading">Email:</span>{' '}
                  <a href="mailto:riazhospitalgkp@gmail.com" className="hover:text-primary transition-colors">riazhospitalgkp@gmail.com</a>
                </p>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Responsive Google Map */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            // Changed min-h to h-[350px] for mobile, and h-full for desktop grid stretch
            className="border-4 border-site-border rounded-2xl overflow-hidden shadow-xl h-[350px] lg:h-full lg:min-h-[400px]"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.876743891208!2d83.38962209090242!3d26.748309107186703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991449a1b76e5e9%3A0x7dafdfda37d58b98!2sRiaz%20Hospital!5e0!3m2!1sen!2sin!4v1783197348712!5m2!1sen!2sin"
              className="w-full h-full border-0 grayscale-[10%] hover:grayscale-0 transition-all duration-500" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Riaz Orthopaedic Hospital Location"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Contact;