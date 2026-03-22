import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Plus } from 'lucide-react';

const WhyChooseUs = () => {
  const [activeValue, setActiveValue] = useState("Collaboration");
  
  const values = [
    "Compassion",
    "Collaboration",
    "Transparency",
    "Flexibility",
    "Excellence"
  ];


  return (
    <section id="why-choose-us" className="section-padding bg-white overflow-hidden relative">
      <div className="w-full px-[4%]">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-[70px] gap-8">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em] mb-6">
              <span className="text-[18px] font-bold">+</span>
              WHY CHOOSE US
            </span>
            <h2 className="text-[34px] md:text-[48px] font-bold text-[#2F6F8F] leading-[1.2] tracking-tight">
              A Simplified Path to <br /> Comprehensive Medical Care
            </h2>
          </div>
          <div className="max-w-[600px] lg:pt-20">
            <p className="text-[18px] text-[#2F6F8F] leading-[1.7] font-bold opacity-90">
              Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
            </p>
          </div>
        </div>


        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-stretch">
          
          {/* Left: Values List Sidebar */}
          <div className="w-full lg:w-[480px] flex flex-col justify-between py-4 min-h-[569px]">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#D1D5DB] pb-4 mb-4">
                <span className="text-[20px] font-bold text-[#5DA9C6]">Values List</span>
                <span className="text-[14px] font-bold text-[#1E3A5F]">02/05</span>
              </div>
              
              <div className="flex flex-col">
                {values.map((v) => (
                  <div key={v} className="border-b border-[#D1D5DB] last:border-0 py-4">
                    <button 
                      onClick={() => setActiveValue(v)}
                      className={`text-left transition-all duration-500 hover:translate-x-3 w-full ${
                        activeValue === v 
                          ? 'text-[32px] md:text-[38px] font-medium text-[#2F6F8F]' 
                          : 'text-[22px] md:text-[26px] font-normal text-[#1E3A5F40]'
                      }`}
                    >
                      {v}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <button className="bg-[#4E9ABC] text-white px-[45px] py-[18px] rounded-full flex items-center gap-4 font-bold text-[15px] shadow-premium hover:bg-[#3d7a96] transition-all group">
                Book Appointment
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#4E9ABC] group-hover:translate-x-1 transition-transform">
                  <ArrowRight size={18} />
                </div>
              </button>
            </div>
          </div>

          {/* Right side cluster: 1080px total (525 + 30 + 525) */}
          <div className="flex-1 flex flex-col lg:flex-row gap-[30px] items-stretch">
            {/* Image Card */}
            <div className="w-full lg:w-[525px] h-[569px] rounded-[24px] overflow-hidden bg-gray-100 relative group shadow-soft">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-217359f42f8c?q=80&w=2070&auto=format&fit=crop" 
                alt="Expert Medical Consultation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Info Cluster Card */}
            <div className="w-full lg:w-[525px] h-[569px] bg-gradient-to-b from-[#4E9ABC] to-[#2F6F8F] rounded-[24px] p-[32px] text-white flex flex-col justify-between shadow-premium relative overflow-hidden group">
              {/* Subtle light effect */}
              <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-white/10 blur-[120px] rounded-full group-hover:scale-110 transition-transform" />
              
              <div className="relative z-10">
                <p className="text-[28px] md:text-[32px] font-bold leading-[1.2] tracking-[-0.01em]">
                  We’re committed to delivering the highest standard of medical care with sensitivity.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                {values.map(v => (
                  <div key={v} className="w-full bg-black/30 backdrop-blur-xl rounded-full py-4 text-center flex items-center justify-center border border-white/10 text-[14px] font-bold tracking-[0.05em] uppercase relative">
                    <span className="px-6">{v}</span>
                    <Plus size={16} className="rotate-45 text-white/90 absolute right-5" />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
