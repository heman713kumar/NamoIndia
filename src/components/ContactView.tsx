import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { ShieldCheck, Send, Compass, MapPin, Calendar, Mail, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ContactView() {
  const { navigate } = useRouter();

  // Inputs state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedDest, setSelectedDest] = useState(DESTINATIONS[0]?.id || 'rajasthan');
  const [dates, setDates] = useState('');
  const [intent, setIntent] = useState('culture');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const currentMatchedDest = DESTINATIONS.find(d => d.id === selectedDest);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="contact-concierge-view">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">PLAN YOUR TRIP</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
          Plan Your Incredible Journey
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
          Connect directly with our luxury heritage concierge desk. Specify your desired states, seasonal times, and style, and we will formulate a bespoke travel proposal within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Concierge details, trust elements */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="relative h-64 rounded-2xl overflow-hidden shadow-md border border-gold/15">
            <img 
              src="https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800" 
              alt="Indian palace gates representing royal welcome" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 text-cream">
              <span className="text-[9px] uppercase tracking-wider text-gold font-bold">THE ROYAL WELCOME</span>
              <h3 className="font-serif text-lg font-bold mt-1">Atithi Devo Bhava</h3>
              <p className="text-xs text-cream/85 font-sans">"The Guest is equivalent to God." Our ancestral creed of travel care.</p>
            </div>
          </div>

          <div className="bg-cream-dark p-8 rounded-2xl border border-gold/15 space-y-6">
            <h3 className="font-serif text-xl font-bold text-charcoal">The Concierge Service</h3>
            
            <div className="space-y-4 font-sans text-xs sm:text-sm text-charcoal/80">
              <div className="flex gap-3 items-start">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-charcoal">Bespoke Curation</h4>
                  <p className="text-xs text-charcoal/65 mt-0.5">We design hand-crafted schedules based on historical monuments, premium boutique lodgings, and licensed expert guides.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <CheckCircle2 className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-charcoal">Visa & Logistics Support</h4>
                  <p className="text-xs text-charcoal/65 mt-0.5">Assistance with official e-Visa applications, bullet train reservation desks, and luxury chauffeur services.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Compass className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-charcoal">Wellness Alignment</h4>
                  <p className="text-xs text-charcoal/65 mt-0.5">Direct partnership with leading Ayurvedic retreats in Kerala and licensed meditation ashrams in Rishikesh.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Interactive Form */}
        <div className="lg:col-span-7 bg-white border border-gold/15 rounded-2xl p-8 shadow-sm relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6 font-sans"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>

                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@travel.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Primary State Interest */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Primary Destination</label>
                    <select
                      value={selectedDest}
                      onChange={(e) => setSelectedDest(e.target.value)}
                      className="w-full bg-cream/50 border border-gold/20 rounded-xl px-3 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer"
                    >
                      {DESTINATIONS.map((d) => (
                        <option key={d.id} value={d.id}>{d.name} ({d.region})</option>
                      ))}
                    </select>
                  </div>

                  {/* Ideal Dates */}
                  <div>
                    <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Proposed Dates</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. October 2026, 12 Days"
                      value={dates}
                      onChange={(e) => setDates(e.target.value)}
                      className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                {/* Main Travel Intent */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Travel Intent Focus</label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { value: 'culture', label: 'Culture & Stone' },
                      { value: 'food', label: 'Culinary Master' },
                      { value: 'adventure', label: 'Nature & Safari' },
                      { value: 'wellness', label: 'Spirit & Yoga' }
                    ].map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => setIntent(item.value)}
                        className={`p-3 text-[10px] font-bold uppercase tracking-wider rounded-lg border transition-all ${
                          intent === item.value 
                            ? 'bg-heritage-red border-heritage-red text-cream font-bold' 
                            : 'bg-white border-gold/15 text-charcoal hover:bg-gold/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Notes / Specific requirements */}
                <div>
                  <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Specific Requirements or Dreams</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your ideal accommodations, food requirements, interest in a specific festival, or physical trekking boundaries..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-sm text-charcoal focus:outline-none focus:border-gold placeholder:text-charcoal/30"
                  />
                </div>

                {/* Submit Inquiry Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-heritage-red hover:bg-heritage-red-light text-cream rounded-xl text-xs font-bold tracking-widest uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Concierge Inquiry</span>
                </button>

              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 px-4 flex flex-col items-center justify-center space-y-6"
                id="contact-submission-success-block"
              >
                <div className="w-16 h-16 rounded-full bg-teal-dark/10 flex items-center justify-center text-teal-dark animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-serif text-2xl font-bold text-charcoal">Concierge Dispatch Confirmed</h3>
                  <p className="text-xs sm:text-sm text-charcoal/65 max-w-sm leading-relaxed">
                    Thank you, <strong className="text-charcoal">{name}</strong>. Your custom inquiry for <strong className="text-charcoal">{currentMatchedDest?.name}</strong> has been received by our luxury concierge desk.
                  </p>
                </div>

                <div className="bg-cream p-4 rounded-xl text-xs font-sans border border-gold/15 max-w-md text-charcoal-light leading-relaxed">
                  Our travel curators are matching your desired intent with regional boutique hotels and expert guides. An elegant, custom-designed PDF proposal will arrive at <strong className="text-charcoal">{email}</strong> within 24 hours.
                </div>

                <button
                  onClick={() => {
                    setName('');
                    setEmail('');
                    setNotes('');
                    setSubmitted(false);
                    navigate('home');
                  }}
                  className="px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
                >
                  Return to Home
                </button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </div>
  );
}
