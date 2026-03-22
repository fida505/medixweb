import React, { useState } from 'react';
import { MapPin, Phone, Calendar as CalendarIcon, ChevronLeft, ChevronRight, User, Mail, CreditCard, CheckCircle2, ArrowLeft } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const Booking = () => {
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState("9:00 AM");

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: ''
  });

  const nextStep = () => setStep(s => Math.min(s + 1, 3));
  const prevStep = () => setStep(s => Math.max(s - 1, 0));

  const timeSlots = [
    "5:00 AM", "6:00 AM", "7:00 AM", "8:00 AM", 
    "9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM", 
    "3:00 PM", "4:00 PM", "7:00 PM", "8:00 PM"
  ];

  const renderStep = () => {
    switch(step) {
      case 0: // Date & Time Selection
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col lg:flex-row gap-10 xl:gap-20 items-start"
          >
            {/* Calendar Container */}
            <div className="flex-1 max-w-[420px] bg-white border border-gray-100 rounded-[20px] p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h5 className="text-[15px] font-bold text-[#1E3A5F]">April,2021</h5>
                <div className="flex gap-6">
                  <button className="text-[#1E3A5F] hover:text-[#5DA9C6] transition-colors"><ChevronLeft size={18} /></button>
                  <button className="text-[#1E3A5F] hover:text-[#5DA9C6] transition-colors"><ChevronRight size={18} /></button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-0.5 text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                  <div key={day} className="h-10 flex items-center justify-center text-[10px] font-bold text-[#1E3A5F]">
                    {day}
                  </div>
                ))}
                
                {/* Previous month days */}
                {[29, 30, 31].map(day => (
                  <div key={day} className="h-12 flex items-center justify-center text-[13px] font-medium text-gray-300">
                    {day}
                  </div>
                ))}
                
                {/* Current month days */}
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDate;
                  const isSoftHighlight = day >= 19 && day <= 28;
                  return (
                    <button 
                      key={day}
                      onClick={() => setSelectedDate(day)}
                      className={`h-12 w-full flex items-center justify-center text-[13px] font-bold transition-all relative ${
                        isSelected 
                          ? 'text-[#1E3A5F] bg-gray-50' 
                          : isSoftHighlight
                            ? 'text-[#1E3A5F] bg-gray-50/50'
                            : 'text-[#1E3A5F] hover:bg-gray-50'
                      }`}
                    >
                      {day}
                      {isSelected && <div className="absolute bottom-2 w-1.5 h-1.5 rounded-full bg-[#1E3A5F]" />}
                    </button>
                  );
                })}

                {/* Next month days */}
                {[1, 2].map(day => (
                  <div key={day} className="h-12 flex items-center justify-center text-[13px] font-medium text-gray-300">
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* Slots Container */}
            <div className="flex-1">
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {timeSlots.map(time => {
                  const isSelected = time === selectedTime;
                  return (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-[180px] py-4 rounded-[12px] text-[15px] font-medium transition-all border ${
                        isSelected 
                          ? 'bg-gray-100 text-[#1E3A5F] border-transparent' 
                          : 'bg-white text-[#1E3A5F] border-gray-100 hover:border-gray-200 shadow-sm'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="mt-12 flex justify-end items-center gap-6">
                <button 
                  className="px-10 py-4 rounded-full text-[15px] font-bold text-gray-400 bg-[#f9fafb] hover:bg-gray-100 transition-all"
                >
                  Cancel
                </button>
                <button 
                  onClick={nextStep}
                  className="bg-[#2F6F8F] text-white px-10 py-4 rounded-full font-bold text-[15px] shadow-premium hover:bg-[#255a75] transition-all"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 1: // Patient Info
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-10"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[12px] font-black uppercase text-[#1E3A5F40] tracking-widest px-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1E3A5F40]" size={18} />
                  <input type="text" placeholder="John Doe" className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-5 pl-14 pr-6 font-bold text-[#1E3A5F] outline-none focus:border-[#1E3A5F20]" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[12px] font-black uppercase text-[#1E3A5F40] tracking-widest px-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1E3A5F40]" size={18} />
                  <input type="email" placeholder="john@example.com" className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-5 pl-14 pr-6 font-bold text-[#1E3A5F] outline-none focus:border-[#1E3A5F20]" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[12px] font-black uppercase text-[#1E3A5F40] tracking-widest px-1">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-[#1E3A5F40]" size={18} />
                  <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-5 pl-14 pr-6 font-bold text-[#1E3A5F] outline-none focus:border-[#1E3A5F20]" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[12px] font-black uppercase text-[#1E3A5F40] tracking-widest px-1">Reason for visit</label>
                <select className="w-full bg-gray-50/50 border border-gray-100 rounded-[20px] py-5 px-6 font-bold text-[#1E3A5F] outline-none focus:border-[#1E3A5F20] appearance-none">
                  <option>General Checkup</option>
                  <option>Dental Consultation</option>
                  <option>Pediatric Visit</option>
                  <option>Cardiology Screening</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between items-center pt-10 border-t border-gray-100">
              <button onClick={prevStep} className="flex items-center gap-2 font-black text-[#1E3A5F40] hover:text-[#1E3A5F] uppercase tracking-widest text-[13px]">
                <ArrowLeft size={16} /> Back
              </button>
              <button onClick={nextStep} className="bg-[#1E3A5F] text-white px-12 py-5 rounded-full font-black text-[15px] shadow-premium hover:scale-105 transition-all">
                Continue to Payment
              </button>
            </div>
          </motion.div>
        );

      case 2: // Payment
        return (
          <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }} 
            exit={{ opacity: 0, x: -20 }}
            className="grid md:grid-cols-2 gap-16"
          >
            <div>
              <h5 className="text-[14px] font-black uppercase text-[#1E3A5F30] mb-8 tracking-widest">Booking Summary</h5>
              <div className="bg-gray-50/50 rounded-[30px] p-8 space-y-6">
                <div className="flex justify-between">
                  <span className="font-bold text-[#1E3A5F40]">Service</span>
                  <span className="font-black text-[#1E3A5F]">General Consultation</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-[#1E3A5F40]">Date & Time</span>
                  <span className="font-black text-[#1E3A5F]">April {selectedDate}, 2025 at {selectedTime}</span>
                </div>
                <div className="pt-6 border-t border-gray-200 flex justify-between items-end">
                  <span className="font-bold text-[#1E3A5F40]">Total Amount</span>
                  <span className="text-[32px] font-black text-[#1E3A5F]">$85.00</span>
                </div>
              </div>
            </div>

            <div>
              <h5 className="text-[14px] font-black uppercase text-[#1E3A5F30] mb-8 tracking-widest">Payment Method</h5>
              <div className="grid gap-4 mb-10">
                <button className="flex items-center justify-between p-6 rounded-[24px] border-2 border-[#1E3A5F] bg-[#1E3A5F05]">
                   <div className="flex items-center gap-4">
                     <div className="w-10 h-10 rounded-full bg-[#1E3A5F] flex items-center justify-center text-white"><CreditCard size={18} /></div>
                     <span className="font-black text-[#1E3A5F]">Credit / Debit Card</span>
                   </div>
                   <div className="w-6 h-6 rounded-full border-4 border-[#1E3A5F] bg-white" />
                </button>
                <button className="flex items-center justify-between p-6 rounded-[24px] border border-gray-100 hover:border-gray-200">
                   <div className="flex items-center gap-4 opacity-50">
                     <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-white"><MapPin size={18} /></div>
                     <span className="font-black">Pay at Clinic</span>
                   </div>
                </button>
              </div>
              <div className="flex justify-between items-center pt-8 border-t border-gray-100">
                <button onClick={prevStep} className="flex items-center gap-2 font-black text-[#1E3A5F40] hover:text-[#1E3A5F] uppercase tracking-widest text-[13px]">
                  <ArrowLeft size={16} /> Back
                </button>
                <button onClick={nextStep} className="bg-[#10B981] text-white px-12 py-5 rounded-full font-black text-[15px] shadow-lg hover:scale-105 transition-all">
                  Confirm $85.00
                </button>
              </div>
            </div>
          </motion.div>
        );

      case 3: // Confirmation
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-10 text-center"
          >
            <div className="w-24 h-24 bg-[#10B98115] rounded-full flex items-center justify-center text-[#10B981] mb-10">
              <CheckCircle2 size={56} />
            </div>
            <h3 className="text-[42px] font-black text-[#1E3A5F] mb-6 tracking-tighter">Your Appointment is Confirmed!</h3>
            <p className="text-[#6B7C93] text-[18px] max-w-[480px] font-medium leading-relaxed mb-12">
              We've sent the confirmation details and medical preparation guide to your email address. See you soon!
            </p>
            <button 
              onClick={() => setStep(0)}
              className="bg-[#1E3A5F] text-white px-12 py-5 rounded-full font-black text-[15px] shadow-premium hover:scale-105 transition-all"
            >
              Done
            </button>
          </motion.div>
        );
      default: return null;
    }
  }

  const stepTitles = ["Schedule", "Information", "Payment", "Success"];

  return (
    <section id="booking" className="min-h-[1174px] flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white via-white/35 to-[#8AC0D8]">
      <div className="w-full max-w-[1708px] mx-auto px-[4%] py-20">
        
        {/* Main Card - Literal 1443px x 928.64px */}
        <div className="bg-white rounded-[41px] shadow-premium border border-[#EDEDED] w-full max-w-[1443px] min-h-[928px] mx-auto p-[60px] md:p-[80px] flex flex-col items-center">
          
          {/* Top Header & Location Cluster - Literal 1306.72px x 287.02px */}
          <div className="w-full max-w-[1306.72px] h-[287.02px] mx-auto flex flex-col lg:flex-row justify-between mb-12 gap-12 items-start">
            
            {/* Booking Content - Literal 598.56px x 287.02px */}
            <div className="w-full lg:w-[598.56px] h-full flex flex-col justify-start gap-[26.65px]">
              <div>
                <span className="inline-flex items-center gap-2.5 text-[14px] font-black text-[#5DA9C6] uppercase tracking-[0.2em] mb-6">
                  <span className="text-[18px] font-bold">+</span>
                  Book Now
                </span>
                <h2 className="text-[34px] md:text-[52px] font-medium text-[#2F6F8F] leading-[1.1] mb-8 tracking-tight">
                  Stronger Together <br /> for Your Health
                </h2>
                <p className="text-[18px] text-[#6B7C93] leading-[1.8] font-medium opacity-80">
                  Begin your wellness journey today! Discover personalized support & vibrant living options tailored to enhance your loved one's health & happiness.
                </p>
              </div>
            </div>

            {/* Location Info Container - Literal 462.24px x 245.98px */}
            <div className="w-full lg:w-[462.24px] h-[245.98px] bg-[#f9fafb] rounded-[16.4px] border-[1.43px] border-[#DADADA] p-8 flex flex-col justify-center gap-8">
               {/* Contact Items */}
               <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#2F6F8F] shadow-sm border border-gray-100">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-[#1E3A5F40] uppercase tracking-widest mb-1">Medical Location</p>
                    <p className="text-[16px] font-bold text-[#1E3A5F]">Silk St, Barbican, London EC2Y</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[#2F6F8F] shadow-sm border border-gray-100">
                    <Phone size={22} />
                  </div>
                  <div>
                    <p className="text-[11px] font-black text-[#1E3A5F40] uppercase tracking-widest mb-1">Medical Location</p>
                    <p className="text-[16px] font-bold text-[#1E3A5F]">+91 87876 53652</p>
                  </div>
                </div>
            </div>
          </div>

          {/* Calendar Card - Literal 1306.46px x 539.60px */}
          <div className="w-full max-w-[1306.46px] min-h-[539.60px] mx-auto bg-white rounded-[21.51px] border-[1.31px] border-[#DADADA] p-10 md:p-14">
            <h5 className="text-[18px] font-bold text-[#2F6F8F] mb-10">Pick a Date and time for appointment</h5>
            <div className="h-full">
              <AnimatePresence mode="wait">
                {renderStep()}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Booking;
