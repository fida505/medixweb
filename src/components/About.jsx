import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Shield, ArrowRight } from 'lucide-react';
import aboutImg from '../assets/about.png';

const DoctorAnimation = () => (
  <motion.div 
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="relative w-[190px] h-[190px]"
  >
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background Glow */}
      <circle cx="100" cy="100" r="80" fill="url(#paint0_radial)" fillOpacity="0.4"/>
      
      {/* Body / Lab Coat */}
      <motion.path 
        d="M50 180C50 146.863 76.8629 120 110 120H90C123.137 120 150 146.863 150 180V200H50V180Z" 
        fill="white"
      />
      <path d="M100 120L80 200H120L100 120Z" fill="#F1F5F9"/>
      
      {/* Head */}
      <motion.circle 
        animate={{ y: [0, -2, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        cx="100" cy="80" r="35" fill="#FFE4D6"
      />
      <path d="M75 60C75 46.1929 86.1929 35 100 35C113.807 35 125 46.1929 125 60V80H75V60Z" fill="#475569"/>
      
      {/* Stethoscope */}
      <path d="M85 120C85 140 115 140 115 120" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round"/>
      <motion.circle 
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        cx="100" cy="145" r="8" fill="#5DA9C6"
      />

      <defs>
        <radialGradient id="paint0_radial" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(100 100) rotate(90) scale(80)">
          <stop stopColor="#5DA9C6"/>
          <stop offset="1" stopColor="#5DA9C6" stopOpacity="0"/>
        </radialGradient>
      </defs>
    </svg>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="relative w-full bg-white pt-[60px] pb-[60px] overflow-hidden">
      {/* Sharp Background DNA */}
      <div className="absolute top-[5%] -left-[10%] md:left-0 z-0 opacity-[0.9] pointer-events-none contrast-125 saturate-150">
        <img 
          src={aboutImg} 
          alt=""
          className="w-[600px] md:w-[1000px] h-auto object-contain"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-[80px] items-stretch">
          
          {/* Left Column: Vertical Info (Impact) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[339px] flex flex-col justify-between py-6"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em]">
                <span className="text-[22px] font-bold text-[#10B981]">+</span> ABOUT US
              </span>
            </div>

            <div className="space-y-[40px] mb-12">
              <div className="flex items-center gap-4">
                <span className="text-[14px] font-black text-[#1E3A5F] uppercase tracking-widest">Our Impact</span>
                <div className="flex gap-2.5">
                  <div className="w-[36px] h-[36px] rounded-full border border-gray-100 flex items-center justify-center text-[#1E3A5F15]">
                    <ArrowRight size={16} className="rotate-180" />
                  </div>
                  <div className="w-[36px] h-[36px] rounded-full bg-[#1E3A5F] text-white flex items-center justify-center shadow-premium">
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-[54px] md:text-[72px] font-extrabold text-[#1E3A5F] leading-none tracking-tighter mb-4">
                  50+
                </div>
                <p className="text-[16px] text-[#6B7C93] font-bold leading-[1.6]">
                  Healthcare Professionals <br /> 
                  <span className="text-[#1E3A5F80]">Supporting Lives Worldwide</span>
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Main Content Cluster */}
          <div className="flex-1 flex flex-col gap-[65px]">
            
            {/* Top Row: Animation + Heading */}
            <div className="flex flex-col md:flex-row gap-[50px] items-center">
               {/* Premium Animated Character Cluster */}
               <div className="relative shrink-0">
                  <div className="w-[190px] h-[190px] rounded-[45px] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border-[8px] border-white shadow-[0_20px_45px_rgba(30,58,95,0.08)] overflow-hidden">
                    <DoctorAnimation />
                  </div>
               </div>

               <h2 className="text-[28px] md:text-[38px] leading-[1.2] font-extrabold text-[#1E3A5F] tracking-tight text-center md:text-left">
                 MedixWeb Clinic connects doctors and patients effortlessly, providing smarter, safer, and compassionate healthcare from diagnosis to full recovery.
               </h2>
            </div>

            {/* Bottom Row: Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[28px]">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="glass-premium p-[40px] rounded-[30px] border border-white/50 flex flex-col gap-[35px] shadow-soft active:scale-[0.98] transition-transform cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-blue-50/50 rounded-[18px] flex items-center justify-center text-[#5DA9C6]">
                    <Heart size={28} fill="currentColor" fillOpacity={0.15} />
                  </div>
                  <span className="text-[11px] font-black text-[#1E3A5F20] uppercase tracking-widest">CONNECTED CARE</span>
                </div>
                <div>
                  <h4 className="text-[22px] font-extrabold text-[#1E3A5F] mb-3">Smart Care</h4>
                  <p className="text-[15px] text-[#6B7C93] font-bold leading-relaxed opacity-80">
                    Smart digital health tracking ensures accurate insights and better outcomes.
                  </p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="glass-premium p-[40px] rounded-[30px] border border-white/50 flex flex-col gap-[35px] shadow-soft active:scale-[0.98] transition-transform cursor-default"
              >
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 bg-gray-50/50 rounded-[18px] flex items-center justify-center text-[#1E3A5F]">
                    <Shield size={28} fill="currentColor" fillOpacity={0.1} />
                  </div>
                  <span className="text-[11px] font-black text-[#1E3A5F20] uppercase tracking-widest">DATA PRIVACY</span>
                </div>
                <div>
                  <h4 className="text-[22px] font-extrabold text-[#1E3A5F] mb-3">Secure Data</h4>
                  <p className="text-[15px] text-[#6B7C93] font-bold leading-relaxed opacity-80">
                    Protecting patient data through secure, HIPAA-compliant digital health systems.
                  </p>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
