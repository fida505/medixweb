import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Youtube } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      title: "Friendly staff review",
      text: "The team made every step stress-free and supportive. I finally feel confident about my treatment.",
      name: "Robert Fox",
      role: "Regular Tester",
      image: "https://i.pravatar.cc/150?u=fox",
      type: "card"
    },
    {
      id: 2,
      name: "Cody Fisher",
      role: "Regular Tester",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
      type: "portrait"
    },
    {
      id: 3,
      title: "Seamless experience",
      text: "The team made every step stress-free and supportive. I finally feel confident about my treatment.",
      name: "Albert Flores",
      role: "Regular Tester",
      image: "https://i.pravatar.cc/150?u=flores",
      type: "card"
    }
  ];

  const SocialIcons = () => (
    <div className="flex gap-2 opacity-50">
      <Facebook size={12} fill="currentColor" />
      <Twitter size={12} fill="currentColor" />
      <Youtube size={12} fill="currentColor" />
    </div>
  );

  return (
    <section id="testimonials" className="pt-[60px] pb-[120px] bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-[70px]">
          <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em] mb-6">
            <span className="text-[22px] font-bold text-[#10B981]">+</span> TESTIMONIALS
          </span>
          <h2 className="text-[52px] font-extrabold text-[#1E3A5F] leading-[1.1] tracking-tight mb-8">
            Real Stories, Real Healing — <br /> From Our Community
          </h2>
          <p className="text-[17px] text-[#6B7C93] leading-[1.7] font-medium opacity-80 max-w-[650px] mx-auto">
            Providing patient-centered care through expert guidance, innovative solutions, and personalized support every step of the way.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 max-w-[1400px] mx-auto px-4">
          {reviews.map((r) => (
            r.type === "portrait" ? (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full lg:w-[450px] min-h-[450px] rounded-[30px] overflow-hidden relative group shadow-soft flex flex-col"
              >
                <img src={r.image} alt={r.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-[#1E3A5FB0] to-transparent text-white mt-auto z-10">
                  <div className="flex items-end justify-between uppercase">
                    <div>
                      <div className="flex gap-1 mb-2">
                        {[...Array(5)].map((_, i) => <div key={i} className="w-1.5 h-1.5 rounded-full bg-white/40" />)}
                      </div>
                      <h4 className="font-extrabold text-[22px]">{r.name}</h4>
                      <p className="text-[11px] font-bold opacity-60 mt-1">{r.role}</p>
                    </div>
                    <SocialIcons />
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div 
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-full lg:w-[400px] bg-[#EBF4FF] p-10 rounded-[30px] flex flex-col justify-between min-h-[450px] border border-[#DEEBFB]"
              >
                <div>
                  <div className="flex gap-4 mb-6">
                    <span className="px-3 py-1 bg-white/50 text-[10px] font-bold text-[#2F6F8F] rounded-full uppercase tracking-wider">Verified</span>
                    <span className="px-3 py-1 bg-white/50 text-[10px] font-bold text-[#2F6F8F] rounded-full uppercase tracking-wider">Health Care</span>
                  </div>
                  <h4 className="text-[20px] font-extrabold text-[#1E3A5F] mb-4">{r.title}</h4>
                  <p className="text-[#6B7C93] text-[16px] leading-relaxed font-medium">
                    {r.text}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mt-8 border-t border-[#DEEBFB] pt-8 uppercase">
                  <div className="flex items-center gap-3">
                    <img src={r.image} alt={r.name} className="w-12 h-12 rounded-xl object-contain bg-white p-1" />
                    <div>
                      <h5 className="font-extrabold text-[14px] text-[#1E3A5F]">{r.name}</h5>
                      <p className="text-[10px] font-black text-[#1E3A5F40] mt-0.5">{r.role}</p>
                    </div>
                  </div>
                  <SocialIcons />
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
