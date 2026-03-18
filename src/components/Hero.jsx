import React from 'react';
import { ArrowRight, Star, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <div id="home" className="bg-white pt-[15px] pb-[60px] px-[20px] flex justify-center scroll-mt-20">
      <section 
        className="relative bg-[radial-gradient(circle_at_top_right,_#8BB8D9_0%,_#7AADD0_100%)] rounded-[19px] max-w-[1697px] w-full pt-[35px] px-[60px] pb-[60px] text-white overflow-hidden"
      >
        
        {/* Navigation Bar */}
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[1636px] h-[66px] mx-auto flex items-center justify-between mb-[40px]"
        >
          <Logo dark={true} />

          <div className="hidden lg:flex items-center gap-[45px] font-extrabold text-[15px] tracking-tight">
            <a href="#home" className="hover:opacity-70 transition-all border-b-2 border-white pb-1">Home</a>
            <a href="#about" className="opacity-80 hover:opacity-100 transition-all">About</a>
            <a href="#services" className="opacity-80 hover:opacity-100 transition-all">Services</a>
            <a href="#approach" className="opacity-80 hover:opacity-100 transition-all">Our Team</a>
            <a href="#testimonials" className="opacity-80 hover:opacity-100 transition-all">Testimonials</a>
            <a href="#blog" className="opacity-80 hover:opacity-100 transition-all">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="#booking" className="hidden sm:flex bg-white text-[#1E3A5F] px-[32px] py-[14px] rounded-full font-bold text-[15px] items-center gap-3 shadow-premium hover:scale-105 transition-all">
              Book Appointment
              <div className="bg-[#1E3A5F] text-white rounded-full p-1">
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

          {/* Mobile Menu Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-[80px] left-0 right-0 z-50 bg-[#1E3A5F] p-8 rounded-2xl border border-white/10 shadow-2xl lg:hidden flex flex-col gap-6 font-extrabold text-[18px]"
              >
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
                <a href="#approach" onClick={() => setIsMenuOpen(false)}>Our Team</a>
                <a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
                <a href="#blog" onClick={() => setIsMenuOpen(false)}>Contact</a>
                <a href="#booking" onClick={() => setIsMenuOpen(false)} className="bg-white text-[#1E3A5F] p-4 rounded-xl text-center">Book Now</a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-[1636px] mx-auto flex flex-col lg:flex-row gap-[18px] items-center lg:items-end justify-between">
          
          {/* Left Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-[564px] flex flex-col gap-[32px] self-start lg:self-auto mb-[20px]"
          >
            <div className="flex items-center gap-[15px]">
              <div className="flex -space-x-[12px]">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+44}`} className="w-9 h-9 rounded-full border-2 border-[#7AADD0]" alt="Patient" />
                ))}
              </div>
              <span className="text-[14px] font-bold tracking-wide opacity-90">Trusted by 135k+ people</span>
            </div>

            <h1 className="text-[42px] md:text-[60px] lg:text-[72px] font-extrabold leading-[1.1] tracking-tight mb-4">
              Your Trusted Partner in <br /> Modern <span className="text-white/90">Healthcare</span>
            </h1>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-fit bg-white/10 backdrop-blur-lg border border-white/30 text-white px-[36px] py-[18px] rounded-full font-bold text-[17px] flex items-center gap-4 hover:bg-white/20 transition-all mt-4"
            >
              Explore Services
              <div className="bg-[#1E3A5F] rounded-full p-2">
                <ArrowRight size={18} />
              </div>
            </motion.button>

            {/* Service Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-[40px] max-w-[500px]"
            >
              <h3 className="text-[26px] font-bold mb-[15px] tracking-tight">Comprehensive Care</h3>
              <p className="text-[17px] leading-[1.7] opacity-85 font-medium">
                Accessible, modern medical care — where technology meets compassion. Book appointments, view reports, and stay healthy from anywhere.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Image & Advanced Glass Card */}
          <div className="relative w-full lg:w-auto h-full flex flex-col lg:flex-row items-end gap-[22px]">
            {/* Main Hero Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 1.1, y: 60 }}
              animate={{ opacity: 1, scale: 1.15, y: 48 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full lg:w-[850px] aspect-square lg:aspect-auto select-none"
            >
              <img 
                src={heroImg} 
                alt="Healthcare" 
                className="w-full h-full object-contain object-bottom mask-fade-extreme"
              />
              
              {/* Floating Content - Stat Cards */}
              <div className="absolute bottom-[40px] right-0 flex flex-col md:flex-row gap-[24px] items-end pointer-events-none">
                
                {/* Trusted Care Rate - Premium Glass */}
                <motion.div 
                   initial={{ opacity: 0, y: 20, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 0.8, duration: 0.6 }}
                   className="glass-premium p-6 md:p-[35px] rounded-[28px] w-full max-w-[310px]"
                >
                  <div className="text-[13px] font-extrabold opacity-60 uppercase tracking-[0.15em] mb-4">Trusted Care Rate</div>
                  <div className="text-[48px] md:text-[64px] font-extrabold leading-none mb-6">97%</div>
                  <p className="text-[14px] md:text-[15px] leading-[1.6] opacity-80 font-medium tracking-tight">
                    Our patients trust us and are consistently satisfied with our treatment & support.
                  </p>
                </motion.div>

                {/* Tags Carousel/Grid - Premium Glass */}
                <motion.div 
                   initial={{ opacity: 0, y: 20, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   transition={{ delay: 1, duration: 0.6 }}
                   className="hidden md:grid glass-premium p-[24px] rounded-[28px] w-[270px] grid-cols-2 gap-3"
                >
                  <motion.div 
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="bg-white/80 text-[#7AADD0] rounded-full py-3 px-4 flex items-center justify-between col-span-2 text-[13px] font-extrabold shadow-sm"
                  >
                    Personalized 
                    <Plus size={14} className="rotate-45 opacity-50" />
                  </motion.div>
                  <div className="border border-white/30 rounded-full py-3 px-4 flex items-center justify-between text-[13px] font-bold">
                    Caring
                    <Plus size={14} className="rotate-45 opacity-50" />
                  </div>
                  <div className="border border-white/30 rounded-full py-3 px-4 flex items-center justify-between text-[13px] font-bold">
                    Reliable
                    <Plus size={14} className="rotate-45 opacity-50" />
                  </div>
                  <div className="border border-white/20 rounded-full flex items-center justify-center py-2 opacity-30">
                    <Plus size={18} />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="relative z-10 w-full h-[6px] bg-white/10 rounded-full mt-[100px] mb-[20px]" />
      </section>
    </div>
  );
};

export default Hero;
