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

  // Placeholder for features array, as it was not present in the original code
  // and is required by the provided edit.
  // Assuming 'features' would be an array of objects like:
  // { icon: SomeIconComponent, title: string, desc: string }
  const features = [
    { icon: Plus, title: "Expert Guidance", desc: "Benefit from the knowledge of leading medical professionals." },
    { icon: Plus, title: "Innovative Solutions", desc: "Access cutting-edge treatments and technologies." },
    { icon: Plus, title: "Personalized Support", desc: "Receive care tailored to your unique health journey." },
  ];

  return (
    <section id="why-choose-us" className="pt-[60px] pb-[60px] bg-white overflow-hidden relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-[70px] gap-8">
          <div className="max-w-[800px]">
            <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em] mb-6">
              <span className="text-[22px] font-bold text-[#10B981]">+</span> WHY CHOSE US
            </span>
            <h2 className="text-[52px] font-extrabold text-[#1E3A5F] leading-[1.1] tracking-tight">
              A Simplified Path to <br /> Comprehensive Medical Care
            </h2>
          </div>
          <div className="max-w-[420px] lg:pt-16">
            <p className="text-[17px] text-[#6B7C93] leading-[1.7] font-medium opacity-80">
              Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
            </p>
          </div>
        </div>

        {/* Feature Cards Section - Added */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] mb-[70px]"> {/* Added margin-bottom for spacing */}
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-[50px] rounded-[40px] border border-gray-100 shadow-soft hover:shadow-premium hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="text-[13px] font-bold text-[#1E3A5F20] tracking-[0.2em] mb-[45px]">FEATURE 0{index + 1}</div>
              <div className="w-16 h-16 bg-[#1E3A5F05] rounded-[22px] flex items-center justify-center text-[#1E3A5F] mb-[35px] group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors duration-300">
                <feature.icon size={32} />
              </div>
              <h3 className="text-[24px] font-extrabold text-[#1E3A5F] mb-[20px]">{feature.title}</h3>
              <p className="text-[16px] text-[#6B7C93] font-medium leading-relaxed opacity-80">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content Layout */}
        <div className="flex flex-col lg:flex-row gap-[40px] items-stretch min-h-[600px]">
          
          {/* Left: Values List Sidebar */}
          <div className="w-full lg:w-[320px] flex flex-col justify-between py-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-8">
                <span className="text-[14px] font-black text-[#1E3A5F] uppercase tracking-widest">Values List</span>
                <span className="text-[14px] font-bold text-[#1E3A5F40]">01/05</span>
              </div>
              
              <div className="flex flex-col gap-6">
                {values.map((v) => (
                  <button 
                    key={v}
                    onClick={() => setActiveValue(v)}
                    className={`text-[20px] font-extrabold text-left transition-all hover:translate-x-2 ${
                      activeValue === v ? 'text-[#5DA9C6] translate-x-2' : 'text-[#1E3A5F30]'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <button className="bg-[#1E3A5F] text-white px-[40px] py-[18px] rounded-full font-bold text-[15px] flex items-center gap-3 shadow-premium w-fit mt-12 hover:scale-105 transition-all">
              Book Appointment
              <div className="bg-white/20 rounded-full p-1.5">
                <ArrowRight size={14} />
              </div>
            </button>
          </div>

          {/* Center: Main Portrait Card */}
          <div className="flex-1 relative">
            <div className="rounded-[40px] overflow-hidden bg-gray-100 h-full relative group">
              <img 
                src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1000" 
                alt="Expert Medical Consultation"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right: Info Cluster Card */}
          <div className="w-full lg:w-[420px] flex flex-col gap-6">
            <div className="flex-1 bg-[#2F6F8F] rounded-[40px] p-[50px] text-white flex flex-col justify-between shadow-soft relative overflow-hidden group">
              {/* Subtle light effect */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 blur-[80px] rounded-full group-hover:scale-110 transition-transform" />
              
              <p className="text-[28px] font-extrabold leading-[1.4] relative z-10">
                "We’re committed to delivering the highest standard of medical care with sensitivity."
              </p>

              <div className="grid grid-cols-2 gap-3 relative z-10">
                {values.map(v => (
                  <div key={v} className="bg-white/10 backdrop-blur-md rounded-full py-3 px-4 flex items-center justify-between border border-white/10 text-[13px] font-bold">
                    {v}
                    <Plus size={14} className="rotate-45 opacity-50" />
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
