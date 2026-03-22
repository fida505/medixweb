import React from 'react';
import { Facebook, Twitter, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#175C79] text-white pt-[117px] pb-[60px] min-h-[648px]">
      <div className="w-full max-w-[1728px] mx-auto px-[48px]">
        
        {/* Top Content Area - Literal 1506px width, 292px gap */}
        <div className="max-w-[1506px] mx-auto flex flex-col lg:flex-row justify-between mb-24 gap-[292px] items-start">
          
          {/* Newsletter / Info Side - Literal 624px width */}
          <div className="w-full lg:w-[624px] flex flex-col gap-10">
            <h2 className="text-[60px] font-normal text-white leading-[1.1] tracking-tight">
              Stay ahead of your <br /> health journey
            </h2>
            <div className="w-full lg:w-[509px] flex flex-col gap-[26px]">
              <p className="text-white text-[20px] leading-[1.52] font-medium opacity-90">
                Get expert insights, wellness guides, and clinic news — delivered monthly.
              </p>
              
              <div className="w-full lg:w-[492px] h-[72px] rounded-[93px] border-[1.4px] border-[#FFFFFF99] flex items-center p-1 pl-[30px] pr-1 group">
                <input 
                  type="email" 
                  placeholder="Enter Your Email" 
                  className="bg-transparent border-none outline-none w-full text-white placeholder:text-white/40 font-medium text-[16px]"
                />
                <button className="bg-white text-[#175C79] w-[168px] h-[64px] rounded-[87px] font-bold text-[16px] hover:bg-gray-100 transition-all shadow-lg shrink-0">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Links Grid Area - 590px total width */}
          <div className="flex-1 w-full max-w-[590px] grid grid-cols-2 md:grid-cols-3 gap-x-[113px] gap-y-12">
            <div>
              <h4 className="text-[18px] font-bold mb-8 text-white">Quick Links</h4>
              <ul className="space-y-4 text-[15px] font-medium text-white/50">
                <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[18px] font-bold mb-8 text-white">Our Services</h4>
              <ul className="space-y-4 text-[15px] font-medium text-white/50">
                <li><a href="#services" className="hover:text-white transition-colors">General Medicine</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Dental Care</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Women's Health</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Cardiology</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[18px] font-bold mb-8 text-white">Doctors</h4>
              <ul className="space-y-4 text-[15px] font-medium text-white/50">
                <li><a href="#approach" className="hover:text-white transition-colors">Dr. Iyyad</a></li>
                <li><a href="#approach" className="hover:text-white transition-colors">Dr. Name...</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Pediatrics</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Women's Health</a></li>
                <li><a href="#booking" className="hover:text-white transition-colors">Cardiology</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar Section - Literal 1633px width divider */}
        <div className="pt-[38px] border-t-[2px] border-[#6DA9C399] flex flex-col md:flex-row items-center justify-between gap-8 max-w-[1633px] mx-auto">
          <div className="w-[180px] h-[60px] bg-white/10 rounded-[12px] flex items-center justify-center opacity-20">
             {/* Checkerboard Placeholder for Logo */}
             <div className="w-full h-full" style={{ backgroundImage: 'repeating-conic-gradient(#000 0% 25%, #fff 0% 50%)', backgroundSize: '15px 15px' }} />
          </div>
          
          <div className="flex gap-4">
            {[Twitter, Facebook, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="w-[45px] h-[45px] rounded-[10px] border border-white/20 flex items-center justify-center hover:bg-white hover:text-[#175C79] transition-all group">
                {i === 0 ? (
                  <span className="font-bold text-[14px]">X</span>
                ) : (
                  <Icon size={18} strokeWidth={2.5} />
                )}
              </a>
            ))}
          </div>

          <div className="text-right">
            <p className="text-[14px] font-medium text-white/50 tracking-tight">© 2025 Dr.Buddies . All rights reserved.</p>
            <p className="text-[14px] font-medium text-white/50 tracking-tight">Design and Developed by Lumid.in</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
