import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react';
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
    <section id="about" className="section-padding pt-[100px] pb-[80px] bg-white relative overflow-hidden">
      {/* Sharp Background DNA */}
      <div className="absolute top-[5%] -left-[10%] md:left-0 z-0 opacity-[0.9] pointer-events-none contrast-125 saturate-150">
        <img 
          src={aboutImg} 
          alt=""
          className="w-[600px] md:w-[1000px] h-auto object-contain"
        />
      </div>

      <div className="w-full px-[4%] relative z-10">
        <div className="flex flex-col lg:flex-row gap-[80px] items-stretch">
          
          {/* Left Column: Vertical Info (Impact) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[339px] flex flex-col justify-between py-6"
          >
              <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em]">
                <span className="text-[18px] font-bold">+</span>
                ABOUT US
              </span>

            <div className="space-y-[32px] mb-12">
              <div className="flex items-center gap-4">
                <div className="bg-[#7AADD0] px-6 py-3 rounded-full shadow-sm">
                  <span className="text-[14px] font-bold text-white uppercase tracking-wider">Our Impact</span>
                </div>
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#1E3A5F] hover:bg-gray-100 transition-colors">
                    <ArrowLeft size={18} />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#2F6F8F] text-white flex items-center justify-center shadow-sm hover:bg-[#255a75] transition-colors">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </div>

              {/* Structural Divider */}
              <div className="w-full h-[1px] bg-gray-200" />

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="pt-2"
              >
                <div className="text-[84px] font-medium text-[#7AADD0] leading-none tracking-tight mb-4">
                  50+
                </div>
                <div className="mt-4">
                  <p className="text-[18px] font-medium text-[#1E3A5F]">Healthcare Professionals</p>
                  <p className="text-[14px] text-[#6B7C93] opacity-70">Supporting Lives Worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Main Content Cluster */}
          <div className="flex-1 flex flex-col gap-[65px] items-end">
            
            {/* Top Row: Animation + Heading */}
            <div className="flex flex-col md:flex-row gap-[50px] items-center justify-end w-full">
               {/* Premium Animated Character Cluster */}
               <div className="relative shrink-0">
                  <div className="w-[190px] h-[190px] rounded-[45px] bg-gradient-to-br from-blue-50 to-white flex items-center justify-center border-[8px] border-white shadow-[0_20px_45px_rgba(30,58,95,0.08)] overflow-hidden">
                    <DoctorAnimation />
                  </div>
               </div>

               <h2 className="text-[24px] md:text-[32px] leading-[1.3] font-normal text-[#1E3A5F] tracking-tight text-center md:text-left max-w-[800px]">
                 MedixWeb Clinic connects doctors and patients effortlessly, providing smarter, safer, and compassionate healthcare from diagnosis to full recovery.
               </h2>
            </div>

            {/* Bottom Row: Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] justify-end">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-[#EBF4FF] rounded-[55px] shadow-soft border border-[#DEEBFB] relative overflow-hidden group flex flex-col min-h-[340px] max-w-[400px]"
              >
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 bg-[#5DA9C6] rounded-full flex items-center justify-center text-white shadow-sm">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="bg-white px-8 py-3 rounded-full text-[11px] font-bold text-[#2F6F8F] uppercase tracking-widest whitespace-nowrap shadow-sm">Connected Care</span>
                  </div>
                  <h4 className="text-[22px] font-bold text-[#2F6F8F] mb-4 tracking-tight">Smart Care</h4>
                  
                  <div className="mt-auto bg-white rounded-[30px] py-10 px-8 shadow-sm border border-[#EBF4FF]">
                    <p className="text-[#2F6F8F] text-[15px] leading-relaxed font-semibold opacity-90">
                      Smart digital health tracking ensures accurate insights and better outcomes.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-[#EBF4FF] rounded-[55px] shadow-soft border border-[#DEEBFB] relative overflow-hidden group flex flex-col min-h-[340px] max-w-[400px]"
              >
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-10 h-10 bg-[#5DA9C6] rounded-full flex items-center justify-center text-white shadow-sm">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="bg-white px-8 py-3 rounded-full text-[11px] font-bold text-[#2F6F8F] uppercase tracking-widest whitespace-nowrap shadow-sm">Data Privacy</span>
                  </div>
                  <h4 className="text-[22px] font-bold text-[#2F6F8F] mb-4 tracking-tight">Secure Data</h4>
                  
                  <div className="mt-auto bg-white rounded-[30px] py-10 px-8 shadow-sm border border-[#EBF4FF]">
                    <p className="text-[#2F6F8F] text-[15px] leading-relaxed font-semibold opacity-90">
                      Protecting patient data through secure, HIPAA-compliant digital health systems.
                    </p>
                  </div>
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
