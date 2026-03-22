import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      title: "Friendly stall review",
      text: "The team made every step stress-free and supportive. I finally feel confident about my treatment. The team made every step stress-free.",
      name: "Robert Fox",
      role: "Regular Tester",
      image: "https://i.pravatar.cc/150?u=fox",
      width: "571px"
    },
    {
      id: 2,
      name: "Cody Fisher",
      role: "Regular Tester",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2??auto=format&fit=crop&q=80&w=600",
      width: "428px",
      type: "checker"
    },
    {
      id: 3,
      title: "Friendly stall review",
      text: "The team made every step stress-free and supportive. I finally feel confident about my treatment. The team made every step stress-free.",
      name: "Robert Fox",
      role: "Regular Tester",
      image: "https://i.pravatar.cc/150?u=fox",
      width: "571px"
    }
  ];

  return (
    <section id="testimonials" className="section-padding bg-white overflow-hidden">
      <div className="max-w-[1728px] mx-auto min-h-[960px] flex flex-col items-center justify-center px-[4%]">
        
        {/* Section Header */}
        <div className="text-center mb-[80px]">
          <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em] mb-6">
            <span className="text-[18px] font-bold">+</span>
            TESTIMONIALS
          </span>
          <h2 className="text-[34px] md:text-[52px] font-medium text-[#2F6F8F] leading-[1.1] tracking-tight mb-8">
            The MedixWeb Total Care Model <br /> Our Community
          </h2>
          <p className="text-[18px] text-[#6B7C93] leading-[1.8] font-medium opacity-80 max-w-[800px] mx-auto">
            Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way. We ensure holistic healing and wellness.
          </p>
        </div>

        {/* Testimonials Grid - Literal 1618px Cluster */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-[24px] w-full max-w-[1618px] mx-auto">
          {reviews.map((r) => (
            r.type === "checker" ? (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full lg:w-[428px] h-[493px] rounded-[20px] overflow-hidden relative group border-2 border-gray-100 flex flex-col bg-gradient-to-b from-[#f0f4f8] to-[#5DA9C6]"
              >
                {/* Checkerboard Background Pattern for high-fidelity parity */}
                <div className="absolute inset-0 z-0 opacity-40" style={{ 
                  backgroundImage: 'radial-gradient(#d1dae5 1px, transparent 1px)', 
                  backgroundSize: '30px 30px' 
                }} />
                
                <img src={r.image} alt={r.name} className="absolute inset-x-0 bottom-0 w-full h-[60%] object-cover group-hover:scale-105 transition-transform duration-700 mix-blend-multiply opacity-80" />
                
                <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10">
                  <h4 className="font-bold text-[20px]">{r.name}</h4>
                  <p className="text-[12px] opacity-80 font-bold uppercase tracking-wider">{r.role}</p>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`w-full lg:w-[571px] h-[493px] bg-white p-[45px] rounded-[20px] flex flex-col justify-between border-2 border-gray-50 shadow-soft hover:translate-y-[-5px] transition-all`}
              >
                <div>
                  <h3 className="text-[24px] font-bold text-[#2F6F8F] mb-6 tracking-tight">{r.title}</h3>
                  <p className="text-[#6B7C93] text-[18px] leading-[1.7] font-medium opacity-90">
                    {r.text}
                  </p>
                </div>
                
                <div className="flex items-center gap-4 mt-8">
                  <img src={r.image} alt={r.name} className="w-16 h-16 rounded-[12px] object-cover bg-white p-0.5 shadow-sm" />
                  <div>
                    <h5 className="font-bold text-[18px] text-[#2F6F8F] tracking-tight">{r.name}</h5>
                    <p className="text-[12px] font-bold text-[#1E3A5F40] uppercase tracking-wider">{r.role}</p>
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
