import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#1E3A5F] text-white pt-16 md:pt-[100px] pb-[40px]">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between mb-[80px] gap-16">
          
          {/* Newsletter Side */}
          <div className="lg:w-[40%]">
            <h2 className="text-[32px] md:text-[48px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Stay ahead of your <br /> health journey
            </h2>
            <p className="text-white/50 text-[14px] leading-relaxed font-medium mb-10 max-w-[380px]">
              Get expert insights, wellness guides, and clinic news — delivered monthly.
            </p>
            
            <div className="relative max-w-[420px]">
              <div className="flex items-center bg-[#0D253F] rounded-full p-1.5 border border-white/5 group focus-within:border-white/20 transition-all">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="bg-transparent border-none outline-none pl-5 pr-3 w-full text-white placeholder:text-white/20 font-semibold text-[14px]"
                />
                <button className="bg-white text-[#1E3A5F] px-8 py-3 rounded-full font-black text-[14px] hover:bg-gray-100 transition-all shadow-lg active:scale-95 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid Area */}
          <div className="flex-1 grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-4">
            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 text-white/30">Quick Links</h4>
              <ul className="space-y-4 text-[15px] font-bold text-white/50">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Book Now</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 text-white/30">Our Services</h4>
              <ul className="space-y-4 text-[15px] font-bold text-white/50">
                <li><a href="#services" className="hover:text-white transition-colors">General Medicine</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Dental Care</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cardiology</a></li>
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h4 className="text-[12px] font-black uppercase tracking-[0.2em] mb-8 text-white/30">Doctors</h4>
              <ul className="space-y-4 text-[15px] font-bold text-white/50">
                <li><a href="#approach" className="hover:text-white transition-colors">Our Specialists</a></li>
                <li><a href="#approach" className="hover:text-white transition-colors">Qualifications</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Patient Reviews</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <Logo dark={true} className="scale-100" />
          
          <div className="flex gap-3">
            {[Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-[#1E3A5F] transition-all group border border-white/5">
                {i === 0 ? (
                  <span className="font-black text-[16px]">X</span>
                ) : (
                  <Icon size={18} strokeWidth={2.5} />
                )}
              </a>
            ))}
          </div>

          <div className="text-right">
            <p className="text-[13px] font-bold text-white/20 tracking-tight">© 2025 MedixWeb. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
