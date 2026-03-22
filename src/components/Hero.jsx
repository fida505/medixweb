import React, { useState } from 'react';
import { ArrowRight, Plus, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <div className="w-full flex justify-center pb-4 relative z-0 bg-[#7AADD0]">
      <div id="home" className="w-[1697px] h-[1078px] bg-[#7AADD0] rounded-b-[19px] relative overflow-hidden font-sans mx-auto shadow-sm">
        
        {/* Navigation Bar - 1636x66 */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-[1636px] h-[66px] absolute top-[31px] left-[34px] z-50 flex items-center justify-between"
        >
          {/* Left: Logo Area */}
          <div className="w-[180px] h-full bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
             <Logo dark={false} showText={false} />
          </div>

          {/* Center: Links */}
          <div className="hidden lg:flex items-center justify-center gap-[40px] xl:gap-[60px] text-white font-medium text-[16px]">
            <a href="#home" className="hover:opacity-70 transition-all tracking-tight whitespace-nowrap">Home</a>
            <a href="#about" className="hover:opacity-70 transition-all tracking-tight whitespace-nowrap">About</a>
            <a href="#services" className="hover:opacity-70 transition-all tracking-tight whitespace-nowrap">Services</a>
            <a href="#blog" className="hover:opacity-70 transition-all tracking-tight whitespace-nowrap">Contact</a>
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-4">
            <a href="#booking" className="hidden sm:flex bg-white text-[#1E3A5F] px-8 py-3 h-full rounded-full font-bold text-[15px] items-center gap-4 shadow-sm hover:translate-y-[-2px] transition-all whitespace-nowrap">
              Book Appointment
              <div className="bg-[#7AADD0] text-white rounded-full p-2 ml-2 flex items-center justify-center w-[30px] h-[30px]">
                <ArrowRight size={14} />
              </div>
            </a>
            
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-all"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-[80px] left-0 right-0 z-50 bg-white p-8 rounded-[30px] shadow-2xl lg:hidden flex flex-col gap-6 font-bold text-[18px] text-[#1E3A5F]"
              >
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#blog" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="#booking" onClick={() => setIsMenuOpen(false)} className="bg-[#1E3A5F] text-white p-4 rounded-xl text-center">Book Now</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Logo Area (Left Column Content) - 564x694 */}
        <div className="absolute top-[237px] left-[34px] w-[564px] h-[694px] flex flex-col gap-[121px] z-10">
          
          {/* Slogan Section - 564x439 */}
          <div className="w-[564px] h-[439px] flex flex-col gap-[18px]">
             
             {/* Trust Container - 368x48 */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="w-[368px] h-[48px] flex items-center gap-[12px]"
             >
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-[48px] h-[48px] rounded-full bg-white/40 border-2 border-[#7AADD0]" />
                 ))}
               </div>
               <span className="text-[16px] font-medium opacity-90 text-white ml-2 tracking-tight">Trusted by 135k+ people</span>
             </motion.div>

              {/* Main Headline Container - 564x373 */}
              <div className="w-[564px] h-[373px] flex flex-col gap-[64px]">
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-[72px] font-medium leading-[1.12] tracking-[-0.01em] text-white m-0"
                >
                  Your Trusted <br /> <span className="whitespace-nowrap">Partner in Modern</span> <br /> Healthcare
                </motion.h1>

                <motion.button 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white text-[#1E3A5F] w-[210px] h-[64px] rounded-full font-bold text-[16px] flex items-center justify-center gap-4 shadow-xl hover:translate-y-[-2px] transition-all group shrink-0"
                >
                  Explore Services
                  <div className="bg-[#7AADD0] text-white rounded-full p-2 flex items-center justify-center w-[36px] h-[36px]">
                    <ArrowRight size={18} />
                  </div>
                </motion.button>
              </div>
          </div>

          {/* Service Info Container - 564x134 */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-[564px] h-[134px] flex flex-col gap-[16px]"
          >
            <h3 className="text-[28px] font-semibold text-white tracking-tight m-0">Comprehensive Care</h3>
            <p className="text-[18px] leading-[1.5] opacity-90 font-medium text-white m-0">
              Accessible, modern medical care -- lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
            </p>
          </motion.div>

        </div>

        {/* Service Highlight Section - 588x283 */}
        <div className="absolute top-[707px] left-[1075px] w-[588px] h-[283px] flex gap-[22px] z-10">
           
           {/* Container 1 (Trusted Care Rate) - 283x283 */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
             className="w-[283px] h-[283px] bg-white/20 backdrop-blur-xl border border-white/30 rounded-[38px] p-[30px] flex flex-col text-white shadow-sm"
           >
             <div className="text-[15px] font-semibold opacity-80 mb-6 text-white tracking-tight">Trusted Care Rate</div>
             <div className="text-[72px] font-semibold leading-none mb-4 text-white tracking-tighter">97%</div>
             <p className="text-[14px] font-medium leading-[1.4] opacity-90 text-white flex-1 flex items-end">
               Our patients trust us and are consistently satisfied with our satisfied with our
             </p>
           </motion.div>

           {/* Container 2 (Tags) - 283x283 */}
           <motion.div 
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.5 }}
             className="w-[283px] h-[283px] bg-[#9BBED4] border border-white/30 rounded-[38px] p-[20px] flex flex-col justify-between shadow-sm"
           >
             <div className="flex gap-[12px] h-[72px]">
               <div className="w-[72px] h-[72px] rounded-full border border-white/40 flex items-center justify-center text-white shrink-0"><X size={24} /></div>
               <div className="flex-1 h-[72px] border border-white/40 rounded-full flex items-center justify-center text-white font-medium text-[15px]">Caring</div>
             </div>
             
             {/* Center bubble */}
             <div className="w-[124px] h-[72px] bg-white rounded-full flex items-center justify-center text-[#7AADD0] font-bold text-[13px] self-center z-10 -my-4 relative shadow-sm">
               Personalized
             </div>

             <div className="flex justify-between gap-[12px] h-[72px]">
               <div className="w-[72px] h-[72px] rounded-full border border-white/40 flex items-center justify-center text-white shrink-0"><X size={24} /></div>
               <div className="flex-1 h-[72px] border border-white/40 rounded-full flex items-center justify-center text-white font-medium text-[15px]">Reliable</div>
             </div>
           </motion.div>
        </div>

        {/* Separater Line - 1625x6 */}
        <div className="absolute top-[1029px] left-[36px] w-[1625px] h-[6px] z-10 flex gap-[28px]">
          <div className="w-[498px] h-full bg-white rounded-full" />
          <div className="w-[525px] h-full bg-white rounded-full" />
          <div className="flex-1 h-full bg-white rounded-full" />
        </div>

      </div>
    </div>
  );
};

export default Hero;
