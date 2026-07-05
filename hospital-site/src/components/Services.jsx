import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Bone, Activity, Spline, Baby, Crosshair } from 'lucide-react';

function Services() {
  const servicesList = [
    { 
      title: "Fracture & Trauma", 
      description: "Expert care and management for simple to complex fractures and traumatic orthopaedic injuries.", 
      // 2. Use the component directly
      icon: <Stethoscope className="w-8 h-8 text-primary" /> 
    },
    { 
      title: "Joint Replacement", 
      description: "Advanced knee and hip replacement surgeries focusing on precise alignment and quick recovery.", 
      icon: <Bone className="w-8 h-8 text-primary" /> 
    },
    { 
      title: "Arthroscopy & Sports", 
      description: "Minimally invasive diagnostic and surgical treatment for athletic injuries and joint disorders.", 
      icon: <Activity className="w-8 h-8 text-primary" /> 
    },
    { 
      title: "Spine Care", 
      description: "Specialized non-surgical and surgical treatments for spinal disorders, discs, and back pain.", 
      icon: <Spline className="w-8 h-8 text-primary" /> 
    },
    { 
      title: "Paediatric Orthopaedics", 
      description: "Dedicated, compassionate care for children's musculoskeletal conditions and developmental disorders.", 
      icon: <Baby className="w-8 h-8 text-primary" /> 
    },
    { 
      title: "Advanced Reconstruction", 
      description: "Complex surgical interventions designed to restore optimal function, mobility, and structural integrity.", 
      icon: <Crosshair className="w-8 h-8 text-primary" /> 
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-20 bg-site-bg">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Animated Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-heading mb-4">
            Specialized Orthopaedic Services
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          {/* Updated this paragraph with the exact hospital copy */}
          <p className="text-body max-w-2xl mx-auto text-lg leading-relaxed">
            We provide comprehensive diagnosis, treatment, and rehabilitation for a wide range of bone, joint, muscle, ligament, and spine disorders.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesList.map((service, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              className="bg-surface border border-site-border rounded-xl p-8 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.08)] hover:-translate-y-2 hover:shadow-xl transition-all duration-300 ease-in-out cursor-default"
            >
              {/* Removed text-4xl from here since we are using fixed-size SVGs */}
              <div className="mb-6 bg-accent-light w-16 h-16 flex items-center justify-center rounded-full shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-body leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Services;