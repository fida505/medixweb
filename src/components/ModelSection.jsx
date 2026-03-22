import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const ModelSection = () => {

  return (
    <section id="approach" className="section-padding bg-[#E9F2F8] overflow-hidden">
      <div className="max-w-[1708px] mx-auto min-h-[1213px] flex flex-col items-center justify-center px-[4%]">
        
        {/* Section Header */}
        <div className="max-w-[900px] mx-auto mb-[80px] text-center">
          <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em] mb-8">
            <span className="text-[18px] font-bold">+</span>
            APPROACH
          </span>
          <h2 className="text-[34px] md:text-[52px] font-medium text-[#2F6F8F] leading-[1.1] tracking-tight mb-8">
            The MedixWeb Total Care Model
          </h2>
          <p className="text-[18px] text-[#6B7C93] leading-[1.8] font-medium opacity-80 max-w-[700px] mx-auto">
            Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way. We ensure holistic healing and wellness.
          </p>
        </div>

        {/* Feature Visual Card - Literal 1353x706 layout */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-[1353px] mx-auto"
        >
          <div className="rounded-[23px] overflow-hidden shadow-[0_40px_100px_rgba(30,58,95,0.15)] relative h-[706px] group border border-white/40 bg-white p-2">
            <div className="w-full h-full rounded-[18px] overflow-hidden relative">
              {/* Checkerboard Background Pattern for high-fidelity parity */}
              <div className="absolute inset-0 bg-[#f0f4f8]" style={{ 
                backgroundImage: 'radial-gradient(#d1dae5 1px, transparent 1px)', 
                backgroundSize: '40px 40px' 
              }} />
              
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2070&auto=format&fit=crop" 
                alt="Medical Care Model" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 mix-blend-multiply"
              />
            </div>
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 bg-white/20 backdrop-blur-2xl rounded-full border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all"
              >
                <Play size={40} fill="white" className="ml-1" />
              </motion.button>
            </div>

            {/* Bottom Summary Bar - Figma-accurate Parity */}
            <div className="absolute bottom-10 left-10 right-10">
               <div className="glass-premium p-8 md:p-14 rounded-[45px] border border-white/40 text-left max-w-[1200px] mx-auto shadow-premium bg-gradient-to-r from-[#2F6F8F] to-[#5DA9C6]">
                  <p className="text-[18px] md:text-[26px] font-bold text-white leading-tight tracking-tight">
                    Our MedixWeb™ model unites doctors, specialists, and wellness experts in one place. From diagnostics to recovery, we ensure holistic healing and long-term wellness.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ModelSection;
