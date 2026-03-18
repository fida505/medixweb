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
            className="flex flex-col xl:flex-row gap-16"
          >
            {/* Calendar */}
            <div className="flex-1 max-w-[450px]">
              <div className="flex items-center justify-between mb-8 px-4">
                <h5 className="text-[16px] font-black text-[#1E3A5F]">April, 2025</h5>
                <div className="flex gap-4">
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-all"><ChevronLeft size={18} /></button>
                  <button className="p-2 hover:bg-gray-50 rounded-lg transition-all"><ChevronRight size={18} /></button>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
                  <div key={day} className="h-10 flex items-center justify-center text-[10px] font-black text-[#1E3A5F30] uppercase">
                    {day}
                  </div>
                ))}
                {Array.from({ length: 30 }).map((_, i) => {
                  const day = i + 1;
                  const isSelected = day === selectedDate;
                  return (
                    <button 
                      key={i}
                      onClick={() => setSelectedDate(day)}
                      className={`h-11 w-11 rounded-xl flex items-center justify-center text-[13px] font-bold transition-all ${
                        isSelected ? 'bg-[#1E3A5F] text-white shadow-lg' : 'hover:bg-gray-50 text-[#1E3A5F]'
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Slots */}
            <div className="flex-1">
              <h5 className="text-[14px] font-black uppercase text-[#1E3A5F30] mb-8 tracking-widest">Available Slots</h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {timeSlots.map(time => {
                  const isSelected = time === selectedTime;
                  return (
                    <button 
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-4 rounded-xl text-[13px] font-black transition-all border ${
                        isSelected ? 'bg-[#1E3A5F] text-white border-transparent' : 'bg-white text-[#1E3A5F60] border-gray-100 hover:border-[#1E3A5F20]'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
              <div className="mt-12 flex justify-end gap-6 pt-10 border-t border-gray-100">
                <button 
                  onClick={nextStep}
                  className="bg-[#1E3A5F] text-white px-12 py-5 rounded-full font-black text-[15px] shadow-premium hover:scale-105 transition-all"
                >
                  Continue
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
    <section id="booking" className="py-[120px] bg-[#F8FAFC] scroll-mt-20">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row justify-between mb-16 gap-12">
          <div className="max-w-[600px]">
            <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[#1E3A5F60] uppercase tracking-[0.25em] mb-6">
              <span className="text-[22px] font-bold text-[#10B981]">+</span> BOOK NOW
            </span>
            <h2 className="text-[52px] font-extrabold text-[#1E3A5F] leading-[1.1] mb-8 tracking-tighter">
              Stronger Together <br /> for Your Health
            </h2>
          </div>

          <div className="flex flex-col gap-4 min-w-[320px]">
             {/* Contact Cards */}
             <div className="bg-white p-5 rounded-[22px] shadow-sm border border-gray-100 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A5F08] flex items-center justify-center text-[#1E3A5F]">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[#1E3A5F40] uppercase tracking-widest mb-0.5">Medical Location</p>
                <p className="text-[14px] font-bold text-[#1E3A5F]">Silk St, Barbican, London EC2Y</p>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-[22px] shadow-sm border border-gray-100 flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#1E3A5F08] flex items-center justify-center text-[#1E3A5F]">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] font-black text-[#1E3A5F40] uppercase tracking-widest mb-0.5">Medical Location</p>
                <p className="text-[14px] font-bold text-[#1E3A5F]">+91 87876 53652</p>
              </div>
            </div>

             {/* Dynamic progress tracker */}
             <div className="bg-[#1E3A5F] p-6 rounded-[24px] shadow-lg text-white">
               <div className="flex justify-between mb-3">
                 <span className="text-[10px] font-black uppercase text-white/40 tracking-widest">Process</span>
                 <span className="text-[10px] font-black text-white uppercase">Step {step + 1} of 4</span>
               </div>
               <div className="flex gap-1.5 mb-3">
                 {[0, 1, 2, 3].map(i => (
                   <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${i <= step ? 'bg-white' : 'bg-white/10'}`} />
                 ))}
               </div>
               <p className="text-[16px] font-black">{stepTitles[step]}</p>
             </div>
          </div>
        </div>

        <div className="bg-white rounded-[40px] shadow-premium border border-gray-100 p-10 min-h-[550px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Booking;
