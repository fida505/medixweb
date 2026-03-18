import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';

const ModelSection = () => {
  const steps = [
    { step: "01", title: "Diagnostic", desc: "Advanced screenings to understand your unique health profile." },
    { step: "02", title: "Treatment", desc: "Personalized therapeutic interventions from top specialists." },
    { step: "03", title: "Recovery", desc: "Comprehensive follow-up care for long-term health." }
  ];

  return (
    <section id="approach" className="pt-[40px] pb-[60px] bg-white">
      <div className="container-custom text-center">
        {/* Section Header */}
        <div className="max-w-[900px] mx-auto mb-[50px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em] mb-6">
            <span className="text-[22px] font-bold text-[#10B981]">+</span> APPROACH
          </span>
          <h2 className="text-[52px] font-extrabold text-[#1E3A5F] leading-[1.1] tracking-tight mb-8">
            The MedixWeb Total Care™ Model
          </h2>
          <p className="text-[17px] text-[#6B7C93] leading-[1.7] font-medium opacity-80 max-w-[650px] mx-auto">
            Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
          </p>
        </div>

        {/* Feature Visual Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-[1240px] mx-auto"
        >
          <div className="rounded-[40px] overflow-hidden shadow-[0_30px_70px_rgba(30,58,95,0.1)] relative aspect-[21/11] group">
            <img 
              src="https://images.unsplash.com/photo-1584432833037-cf1f03b4fdad?auto=format&fit=crop&q=80&w=1600" 
              alt="Medical Care Model" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600";
              }}
            />
            
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-full border border-white/40 flex items-center justify-center text-white shadow-2xl transition-all"
              >
                <Play size={32} fill="white" className="ml-1" />
              </motion.button>
            </div>

            {/* Bottom Summary Bar with Figma-accurate Gradient */}
            <div className="absolute bottom-0 left-0 right-0 p-8 pt-24 bg-gradient-to-t from-[#2F6F8F] via-[#2F6F8F90] to-transparent">
               <div className="glass-premium p-10 rounded-[35px] border border-white/30 text-left max-w-[1100px] mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                  <p className="text-[20px] font-bold text-white leading-relaxed">
                    Our MedixWeb™ model unites doctors, specialists, and wellness experts in one place. From diagnostics to recovery, we ensure holistic healing and long-term wellness.
                  </p>
               </div>
            </div>
          </div>
        </motion.div>

        {/* Approach Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[40px] mt-[80px]"> {/* Added margin-top */}
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative group p-[50px] rounded-[45px] bg-[#F8FAFC]/50 border border-gray-100 hover:bg-white hover:shadow-premium transition-all duration-500"
            >
              <div className="text-[85px] font-black text-[#1E3A5F08] absolute -top-4 -left-2 leading-none group-hover:text-[#1E3A5F12] transition-colors">{item.step}</div>
              <div className="relative z-10 pt-4">
                <h3 className="text-[28px] font-extrabold text-[#1E3A5F] mb-6 tracking-tight">{item.title}</h3>
                <p className="text-[16px] text-[#6B7C93] font-bold leading-relaxed mb-10 opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
                <button className="flex items-center gap-3 text-[#1E3A5F] font-black text-[13px] uppercase tracking-widest group-hover:gap-5 transition-all">
                  Learn More <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelSection;
