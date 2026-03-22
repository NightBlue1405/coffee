import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Users, Clock, ArrowRight, ShieldCheck, Coffee, Info, CheckCircle2 } from 'lucide-react';

export default function Bookings() {
  const [formData, setFormData] = useState({
    type: 'Standard',
    date: '',
    partySize: '2 Guests',
    time: '10:30'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.date) return;
    
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setIsSuccess(true);
      }
    } catch (error) {
      console.error("Booking error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="pt-48 pb-24 flex flex-col items-center justify-center text-center px-8"
      >
        <CheckCircle2 size={80} className="text-primary mb-8" />
        <h1 className="font-headline text-5xl text-primary mb-4">Reservation Confirmed</h1>
        <p className="text-on-surface-variant max-w-md text-lg leading-relaxed mb-12">
          Your table is waiting. We've sent a confirmation to your email. We look forward to hosting your quiet moment.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="bg-primary text-on-primary px-12 py-4 font-headline text-lg hover:bg-primary-container transition-colors"
        >
          Book Another Session
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 pb-24"
    >
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <h1 className="font-headline text-5xl md:text-7xl text-primary leading-tight -tracking-widest">
              Reserve Your <br/><span className="italic font-normal">Quiet Moment.</span>
            </h1>
            <p className="mt-8 text-on-surface-variant max-w-lg text-lg leading-relaxed">
              Whether it's a solitary morning with a pour-over or an intimate workshop for friends, we curate the space for your experience.
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <div className="w-full aspect-[4/5] bg-surface-container-high relative overflow-hidden editorial-shadow">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9epKr--IXw38Jfq4K41Mey9VN4Q2Q9RCmVKibCYIa8SMYb0-7xfaRKbCOjZ_ZcSEluQ9S3TppkNeuxW_84qg63G6MxVT6sKx3re_9b5Lg2lj57GviFJ4fHPhJmGdAPRYFY8ESsFhiDjAeyacZL24LwjbE6cEz-LY4R74pqplTrv168QfYv1YKz8PJGnGNhmnAYPKxzh6_r0kui5JNZCPRHfewp37SwjIW2ohjr_36MNX7uogSuQ4KFdqGLpMatCssZUaMM8_YyPM" 
                alt="Interior"
                className="object-cover w-full h-full opacity-90"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Interface */}
      <section className="max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-low p-1 rounded-none grid grid-cols-1 lg:grid-cols-2 gap-px bg-outline-variant/10">
          {/* Form Section */}
          <div className="bg-surface p-12 md:p-16">
            <div className="max-w-md mx-auto">
              <div className="mb-12">
                <span className="font-label text-xs tracking-widest uppercase text-tertiary mb-2 block">The Experience</span>
                <h2 className="font-headline text-3xl text-primary">Table Details</h2>
              </div>
              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Experience Type */}
                <div className="flex gap-4">
                  {['Standard', 'Private', 'Workshop'].map((type) => (
                    <label key={type} className="flex-1 cursor-pointer group">
                      <input 
                        type="radio" 
                        name="type" 
                        className="hidden peer" 
                        checked={formData.type === type}
                        onChange={() => setFormData({ ...formData, type })}
                      />
                      <div className="p-6 border-b border-outline-variant/20 peer-checked:bg-secondary-container transition-colors duration-300">
                        <p className="font-headline text-lg text-primary">{type}</p>
                        <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mt-1">
                          {type === 'Standard' ? 'Main Gallery' : type === 'Private' ? 'Nook & Garden' : 'Roasting Lab'}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
                {/* Inputs Grid */}
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Date</label>
                    <div className="relative group">
                      <input 
                        type="date" 
                        required
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 py-4 focus:ring-0 focus:border-primary transition-colors" 
                      />
                      <Calendar size={16} className="absolute right-2 top-4 text-outline pointer-events-none" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Party Size</label>
                    <div className="relative group">
                      <select 
                        value={formData.partySize}
                        onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
                        className="w-full bg-surface-container-low border-0 border-b border-outline-variant/20 py-4 focus:ring-0 focus:border-primary transition-colors appearance-none"
                      >
                        <option>1 Guest</option>
                        <option>2 Guests</option>
                        <option>4 Guests</option>
                        <option>6+ (Private)</option>
                      </select>
                      <Users size={16} className="absolute right-2 top-4 text-outline" />
                    </div>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="font-label text-xs tracking-widest uppercase text-on-surface-variant">Time</label>
                    <div className="grid grid-cols-4 gap-2 mt-4">
                      {['09:00', '10:30', '12:00', '14:30'].map((time) => (
                        <button 
                          key={time} 
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`py-3 px-1 text-sm border border-outline-variant/20 transition-all ${formData.time === time ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-on-primary py-6 font-headline text-lg flex items-center justify-center gap-3 hover:bg-primary-container transition-colors shadow-xl shadow-primary/10 disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming...' : 'Confirm Reservation'}
                  {!isSubmitting && <ArrowRight size={20} />}
                </button>
              </form>
            </div>
          </div>
          {/* Summary / Sidebar */}
          <div className="bg-surface-container-high p-12 md:p-16 flex flex-col justify-between">
            <div>
              <div className="mb-12">
                <span className="font-label text-xs tracking-widest uppercase text-tertiary mb-2 block">Our Philosophy</span>
                <h2 className="font-headline text-3xl text-primary">Space & Time</h2>
              </div>
              <div className="space-y-12">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest rounded-full shrink-0">
                    <Clock size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-primary mb-2">90-Minute Sanctuary</h3>
                    <p className="text-on-surface-variant leading-relaxed">Each reservation is paced to allow for slow immersion. We never rush the pour-over experience.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 flex items-center justify-center bg-surface-container-lowest rounded-full shrink-0">
                    <Coffee size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline text-xl text-primary mb-2">Curated Pairing</h3>
                    <p className="text-on-surface-variant leading-relaxed">Private bookings include a signature tasting flight of seasonal single-origins.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-16 pt-12 border-t border-outline-variant/20">
              <div className="p-8 bg-surface-container-lowest border border-outline-variant/10">
                <p className="font-label text-[10px] tracking-[0.2em] uppercase text-tertiary mb-4">A Note on Arrival</p>
                <p className="text-sm italic text-on-surface-variant leading-loose">
                  "Please arrive five minutes prior to your seated time. We hold tables for exactly fifteen minutes to maintain the flow of our gallery."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Sessions */}
      <section className="max-w-7xl mx-auto px-8 mt-32">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="font-headline text-4xl text-primary mb-4 italic">Tailored Sessions</h2>
          <p className="text-on-surface-variant font-body">Beyond daily service, we offer specialized encounters with the bean.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 group relative h-80 overflow-hidden bg-surface-container-lowest flex items-end p-10">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgyjQ-_N5IkVlC5H0XOdxNtY-Np5rS9fA7sLVCvDfxHEFKvzmxGv2WWu_ZE6gG_5AO5brY0N7k0QltkgbHByuTk3zeeF1jd5bAUidiTbCNP0kx_Fb6Qm24xhE54vNhxmzSMa8AeddhNEJCING6XzeoUATozaZW1RwKYZVPDBRirB1jtV3SIA0KUzWODvgtrY91z-yPgUxgb8XWKq-gjjVOBaOXv4qATLIFFC1PC2kyGFR-0w4qN-0KdrJCojGEh3F0wXEJ9IA92A" 
              alt="Roasting Lab"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="relative z-10 max-w-md">
              <h3 className="font-headline text-3xl text-primary mb-2">Roasting Lab</h3>
              <p className="text-on-surface-variant text-sm mb-6">A hands-on workshop guiding you through the alchemy of heat and origin.</p>
              <a href="#" className="font-label text-xs tracking-widest uppercase text-primary font-bold border-b border-primary/30 pb-1">View Schedule</a>
            </div>
          </div>
          <div className="bg-primary text-on-primary p-10 flex flex-col justify-between">
            <div>
              <ShieldCheck size={40} className="mb-6" />
              <h3 className="font-headline text-2xl mb-4 leading-snug">Private Suite Booking</h3>
            </div>
            <div>
              <p className="text-secondary-fixed text-sm leading-relaxed mb-6">Perfect for small teams or celebratory mornings. Secluded from the main gallery floor.</p>
              <button className="bg-primary-container text-white px-6 py-3 font-label text-[10px] tracking-widest uppercase">Inquire Now</button>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
