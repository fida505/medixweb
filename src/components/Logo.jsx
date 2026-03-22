import React from 'react';

const Logo = ({ dark = false, className = "", showText = true }) => {
  return (
    <div className={`flex items-center gap-[12px] ${className}`}>
      <div className={`w-[42px] h-[42px] rounded-full flex items-center justify-center transition-all ${dark ? 'bg-white' : 'bg-[#1E3A5F]'}`}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke={dark ? "#1E3A5F" : "white"} strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4" fill={dark ? "#1E3A5F" : "white"} />
          <circle cx="15" cy="9" r="1.5" fill={dark ? "#1E3A5F" : "white"} fillOpacity="0.5" />
        </svg>
      </div>
      {showText && (
        <span className={`text-[28px] font-extrabold tracking-tighter ${dark ? 'text-white' : 'text-[#1E3A5F]'}`}>
          MedixWeb
        </span>
      )}
    </div>
  );
};

export default Logo;
