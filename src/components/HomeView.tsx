import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import MandalaHero from './MandalaHero';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { Compass, Calendar, ArrowRight, Heart, Sparkles, Clock, Globe, Shield } from 'lucide-react';
import { useState } from 'react';

export default function HomeView() {
  const { navigate, toggleWishlist, isInWishlist } = useRouter();
  const [activeEpoch, setActiveEpoch] = useState(0);

  // Epoch timeline data for deep historical storytelling
  const epochs = [
    {
      year: '3300 BCE – 1300 BCE',
      title: 'Indus Valley Civilization',
      description: 'One of the world\'s earliest urban societies, celebrated for advanced grid planning, masonry, and peaceful bronze craftsmanship in Harappa and Mohenjo-daro.',
      site: 'Rakhigarhi (Haryana), Dholavira (Gujarat)'
    },
    {
      year: '322 BCE – 550 CE',
      title: 'Golden Age of Empires',
      description: 'The era of the Mauryas and Guptas. Flourishing of mathematics (discovery of zero), astronomy, the rock-cut arts of Ajanta, and the spread of non-violence by Emperor Ashoka.',
      site: 'Nalanda (Bihar), Sanchi Stupa (Madhya Pradesh)'
    },
    {
      year: '850 CE – 1646 CE',
      title: 'Medieval Dynasties',
      description: 'The zenith of Dravidian temple building under Cholas and Pandyas, the stone cities of Hampi under the Vijayanagara Empire, and the rising hilltop forts of Rajasthan.',
      site: 'Hampi (Karnataka), Thanjavur (Tamil Nadu)'
    },
    {
      year: '1526 CE – 1857 CE',
      title: 'Mughal Architecture',
      description: 'The synthesis of Persian, Islamic, and Hindu craft. An era of magnificent red sandstone fortresses, walled gardens, and the eternal marble symmetry of the Taj Mahal.',
      site: 'Agra (Uttar Pradesh), Delhi Red Fort (Delhi)'
    },
    {
      year: '1947 CE – Present',
      title: 'Sovereign Modernity',
      description: 'The birth of the world\'s largest secular democracy. Bridging ancient spiritual traditions and hand-woven crafts alongside skyscrapers, tech hubs, and space research.',
      site: 'Chandigarh Capital Complex, Bengaluru Silicon Valley'
    }
  ];

  // Highlights 4 highly popular states to go
  const featuredStates = DESTINATIONS.filter(d => ['rajasthan', 'kerala', 'ladakh-ut', 'uttar-pradesh'].includes(d.id));
  
  // Highlight 3 upcoming/popular festivals
  const featuredFestivals = FESTIVALS.filter(f => ['diwali', 'holi', 'durga-puja'].includes(f.id));

  return (
    <div className="bg-cream overflow-hidden" id="homepage-root-view">
      
      {/* 1. Artistic Flair Editorial Hero Layout */}
      <section className="relative min-h-screen flex flex-col lg:flex-row bg-cream border-b border-gold/20 overflow-hidden" id="hero-interactive-segment">
        
        {/* Left Column: Editorial content and call-to-actions */}
        <div className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-16 py-16 lg:py-0 flex flex-col justify-center text-left bg-cream z-20 relative min-h-[55vh] lg:min-h-screen">
          <span className="text-teal-light uppercase tracking-[0.4em] text-xs sm:text-sm font-sans font-bold mb-4 italic block animate-pulse">
            Experience the Eternal
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black leading-[0.85] text-heritage-red mb-6 sm:mb-8 font-serif">
            Incredible<br />
            <span className="italic font-light text-gold font-serif">India</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-sans text-charcoal-light max-w-md mb-8 sm:mb-10 font-medium">
            From the snow-capped peaks of the Himalayas to the sun-drenched beaches of Kerala, discover a land where heritage meets high adventure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md">
            <button
              onClick={() => navigate('destinations')}
              className="px-8 py-3.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-md hover:shadow-lg text-center"
            >
              Explore Places to Go
            </button>
            <button
              onClick={() => navigate('trip-planner')}
              className="px-8 py-3.5 bg-cream hover:bg-cream-dark text-charcoal border border-gold/40 text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 text-center"
            >
              Build Itinerary
            </button>
          </div>

          {/* Scrolling assistance / inline progress bar */}
          <div 
            onClick={() => {
              const el = document.getElementById('civilization-timeline-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-12 flex items-center gap-3 group cursor-pointer self-start"
          >
            <span className="h-[1px] w-12 bg-gold group-hover:w-20 transition-all duration-300"></span>
            <span className="uppercase tracking-widest text-[10px] font-bold font-sans text-charcoal hover:text-heritage-red transition-colors">
              Start your journey (Scroll below)
            </span>
          </div>
        </div>

        {/* Right Column: Immersive visual pattern, WebGL, and Hawa Mahal Spotlight Card */}
        <div className="w-full lg:w-1/2 relative bg-teal-dark overflow-hidden min-h-[50vh] lg:min-h-screen flex items-center justify-center border-t lg:border-t-0 lg:border-l border-gold/20">
          
          {/* Background WebGL Mandala with elegant opacity */}
          <div className="absolute inset-0 opacity-40">
            <MandalaHero />
          </div>

          {/* Floating animated mathematical mandala SVG pattern */}
          <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
             <svg width="600" height="600" viewBox="0 0 100 100" className="animate-slow-spin w-[300px] h-[300px] sm:w-[500px] sm:h-[500px]">
               <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#D4AF37" />
               <circle cx="50" cy="50" r="15" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
               <circle cx="50" cy="50" r="30" fill="none" stroke="#D4AF37" strokeWidth="0.2" />
             </svg>
          </div>

          {/* Floating Spotlight Card (Hawa Mahal, Jaipur) */}
          <div 
            onClick={() => navigate('destination-detail', { id: 'rajasthan' })}
            className="absolute bottom-10 lg:bottom-16 left-6 sm:left-12 lg:-left-24 w-72 sm:w-80 bg-cream shadow-2xl p-5 border-l-8 border-gold flex flex-col cursor-pointer hover:translate-y-[-6px] hover:shadow-gold/15 transition-all duration-300 group z-30 rounded-r-lg"
          >
            <div className="h-40 sm:h-44 bg-charcoal-light mb-4 overflow-hidden relative rounded-md">
               <img 
                 src="https://images.unsplash.com/photo-1477584322904-487272e5a64b?q=80&w=600" 
                 alt="Hawa Mahal, Jaipur" 
                 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                 referrerPolicy="no-referrer"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               <div className="absolute bottom-3 left-3">
                 <span className="text-gold font-sans text-[10px] uppercase tracking-wider font-bold">Spotlight</span>
                 <h3 className="text-white text-lg font-serif font-bold">Hawa Mahal, Jaipur</h3>
               </div>
            </div>
            <p className="text-[11px] sm:text-xs font-sans text-charcoal-light italic leading-relaxed">
              “The Palace of Winds was built so royal ladies could observe everyday life without being seen.”
            </p>
            <span className="text-[10px] font-sans font-bold text-teal-dark mt-2.5 block group-hover:text-teal-light transition-colors">
              Explore Rajasthan &rarr;
            </span>
          </div>
          
        </div>

      </section>

      {/* 2. Interactive Historical Timeline (Epochs Section) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="civilization-timeline-section">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">5,000 YEARS OF CIVILIZATION</span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal">The Epochs of Heritage</h2>
          <p className="text-sm sm:text-base text-charcoal/60 mt-4 leading-relaxed font-sans">
            To walk in India is to step across multiple dimensions of time. Select an epoch below to explore the chronological heritage of the subcontinent.
          </p>
        </div>

        {/* Timeline Selector Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 border-b border-gold/15 pb-6 mb-10">
          {epochs.map((ep, idx) => (
            <button
              key={idx}
              onClick={() => setActiveEpoch(idx)}
              className={`p-4 rounded-xl text-left transition-all ${
                activeEpoch === idx 
                  ? 'bg-heritage-red text-cream shadow-md scale-[1.02]' 
                  : 'bg-white text-charcoal hover:bg-gold/10'
              } border border-gold/10`}
            >
              <span className="text-[9px] block uppercase opacity-80 tracking-wider font-semibold">{ep.year}</span>
              <span className="font-serif text-sm font-bold block mt-1 truncate">{ep.title}</span>
            </button>
          ))}
        </div>

        {/* Active Epoch Display Block with animation key */}
        <div className="bg-cream-dark border border-gold/15 rounded-2xl p-8 sm:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative">
          <div className="md:col-span-8">
            <span className="text-[10px] bg-gold/15 text-heritage-red px-3 py-1 rounded-full font-bold uppercase tracking-wider">
              {epochs[activeEpoch].year}
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal mt-4 mb-3">
              {epochs[activeEpoch].title}
            </h3>
            <p className="text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
              {epochs[activeEpoch].description}
            </p>
          </div>
          <div className="md:col-span-4 border-t md:border-t-0 md:border-l border-gold/15 pt-6 md:pt-0 md:pl-8">
            <span className="text-[10px] tracking-wider uppercase text-gold block font-semibold">EPITOME PRESERVATIONS</span>
            <span className="font-serif text-lg font-bold text-heritage-red mt-2 block">{epochs[activeEpoch].site}</span>
            <button
              onClick={() => navigate('destinations')}
              className="text-xs font-semibold text-teal-dark hover:text-teal-light flex items-center gap-1.5 mt-4 group"
            >
              <span>Explore related states</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. Featured Destinations (Places to Go Teaser) */}
      <section className="bg-cream-dark py-24 border-y border-gold/15" id="featured-destinations-teaser">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block">PLACES TO GO</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal mt-1">Cinematic Landscapes</h2>
            </div>
            <button
              onClick={() => navigate('destinations')}
              className="text-xs font-bold text-heritage-red uppercase tracking-widest hover:text-heritage-red-light flex items-center gap-2 group whitespace-nowrap"
            >
              <span>Browse All 36 Places</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStates.map((state) => (
              <div 
                key={state.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => navigate('destination-detail', { id: state.id })}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={state.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  
                  {/* Heart / Wishlist icon */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(state.id);
                    }}
                    className="absolute top-4 right-4 p-2 bg-cream/80 hover:bg-cream rounded-full text-heritage-red shadow-md transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(state.id) ? 'fill-heritage-red text-heritage-red animate-pulse' : ''}`} />
                  </button>

                  <div className="absolute bottom-4 left-4 text-cream">
                    <span className="text-[10px] tracking-widest uppercase text-gold font-bold">{state.region} Region</span>
                    <h3 className="font-serif text-xl font-bold mt-1 leading-none">{state.name}</h3>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs text-charcoal/65 leading-relaxed line-clamp-3 mb-4 font-sans">{state.description}</p>
                  <span className="text-xs font-bold text-teal-dark group-hover:text-teal-light flex items-center gap-1">
                    <span>Explore State</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Things to Do (Curated Intent Teaser) */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="intent-teaser-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">EXPERIENTIAL INTENT</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-charcoal leading-tight">
              Slicing Your Travels by Pure Intent
            </h2>
            <p className="text-sm sm:text-base text-charcoal/70 mt-6 leading-relaxed font-sans">
              Unlike ordinary sites that organize travel purely by geographic coordinates, we design our contents by internal intent. Seek physical adventure, culinary legacy, historical heritage, or absolute restorative silence.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { title: 'Adventure & Nature', path: 'adventure', desc: 'Himalayan treks & wild tigers.' },
                { title: 'Food & Cuisine', path: 'food', desc: 'Spices, clay ovens & coastal stews.' },
                { title: 'Culture & Heritage', path: 'culture', desc: 'Stone temples & royal fortresses.' },
                { title: 'Wellness & Spirituality', path: 'wellness', desc: 'Ayurveda, yoga & monastery silence.' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  onClick={() => navigate(item.path)}
                  className="p-4 bg-white hover:bg-gold/10 border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer flex justify-between items-center transition-all group"
                >
                  <div>
                    <h4 className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">{item.title}</h4>
                    <p className="text-[10px] text-charcoal/50 mt-0.5">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gold/15">
              <img 
                src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200" 
                alt="Boats in Kerala Backwaters representing Slow Travel" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 text-cream max-w-sm">
                <span className="text-[10px] uppercase tracking-wider text-gold font-bold">Featured Experience</span>
                <h3 className="font-serif text-xl font-bold mt-1">Kerala Backwaters Slow Sailing</h3>
                <p className="text-xs text-cream/80 mt-1 font-sans">Trade cities for palm canals on traditional houseboats.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4.5 Curated Destination Weddings Teaser Banner */}
      <section className="bg-cream border-t border-b border-gold/15 py-24 overflow-hidden relative" id="weddings-teaser-section">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0 50 Q 25 0 50 50 T 100 50" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-charcoal text-cream rounded-3xl p-8 sm:p-12 lg:p-16 border-4 border-gold/20 shadow-2xl relative flex flex-col lg:flex-row items-center gap-12">
            
            <div className="w-full lg:w-1/2 space-y-6">
              <span className="text-gold uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold block">
                EPITOME OF ETERNAL VOWS
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-cream leading-tight">
                Destination Weddings <br />
                <span className="italic font-light text-gold">in Incredible India</span>
              </h2>
              <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-sans font-light">
                Exchange sacred vows in architectural marvels and pristine environments. From royal brick palaces in Bengaluru and one hundred thousand golden lightbulbs in Mysuru, to the high-altitude snowy romance of Gulmarg and turquoise tides of Havelock Island. 
              </p>
              
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-gold/90 font-medium font-sans">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Palatial Splendor</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Misty Highlands</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Turquoise Islands</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span>Sacred Devotion</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('weddings')}
                  className="px-8 py-3.5 bg-gold hover:bg-gold-light text-charcoal text-xs uppercase tracking-widest font-bold rounded-sm transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  Explore Wedding Venues
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden shadow-xl border border-gold/15 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1000" 
                  alt="Bengaluru Palace Tudor Royal Wedding Backdrop" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                <div className="absolute bottom-6 left-6 text-cream">
                  <span className="text-[9px] uppercase tracking-wider text-gold font-bold">Featured Spotlight</span>
                  <h4 className="font-serif text-lg font-bold">Bengaluru Palace Grounds</h4>
                  <p className="text-xs text-cream/80 font-sans mt-0.5">Windsor-inspired architecture with manicured English gardens.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Festival Season Teaser */}
      <section className="bg-charcoal text-cream py-24 border-t border-gold/15" id="festivals-teaser-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold tracking-widest text-gold uppercase block">BE INSPIRED</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-cream mt-1">Festivals of Light & Color</h2>
            </div>
            <div className="flex flex-wrap gap-4 w-full md:w-auto">
              <button
                onClick={() => navigate('festivals')}
                className="px-5 py-2.5 bg-transparent hover:bg-white/5 border border-gold/20 text-xs font-bold text-gold uppercase tracking-widest transition-all rounded-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Calendar View</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => navigate('festivals-guide')}
                className="px-5 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-xs font-bold uppercase tracking-widest transition-all rounded-sm shadow-md hover:scale-[1.02] flex items-center gap-2 cursor-pointer"
              >
                <span>50 Iconic Events Guide</span>
                <Sparkles className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFestivals.map((fest) => (
              <div 
                key={fest.id}
                onClick={() => navigate('festival-detail', { id: fest.id })}
                className="bg-charcoal-light border border-gold/10 rounded-2xl overflow-hidden hover:border-gold/30 cursor-pointer shadow-lg group transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={fest.image} 
                    alt={fest.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-0.5 bg-gold/80 text-[8px] font-bold tracking-wider text-charcoal uppercase rounded">
                      {fest.season}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-[10px] text-gold font-sans font-medium">{fest.dates}</span>
                  <h3 className="font-serif text-lg font-bold text-cream mt-1 leading-none group-hover:text-gold transition-colors">{fest.name}</h3>
                  <p className="text-xs text-cream/70 mt-3 line-clamp-2 leading-relaxed font-sans">{fest.significance}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5.5 Social Media Atlas Promo Section */}
      <section className="bg-cream py-24 border-t border-gold/15 relative overflow-hidden" id="social-media-atlas-home">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-br from-white to-gold/5 rounded-3xl p-8 sm:p-12 lg:p-16 border border-gold/25 shadow-xl flex flex-col lg:flex-row items-center gap-12">
            
            {/* Visual Collage Column */}
            <div className="w-full lg:w-1/2 relative order-last lg:order-first">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gold/15 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=400" 
                      alt="Rajasthan Vlog" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">YouTube</span>
                  </div>
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gold/15 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=400" 
                      alt="Kerala Backwaters" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">Reel</span>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg border border-gold/15 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=400" 
                      alt="Ladakh Travel" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">Instagram</span>
                  </div>
                  <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg border border-gold/15 relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=400" 
                      alt="Spice Market Delhi" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute bottom-4 left-4 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase">Vlog</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text Column */}
            <div className="w-full lg:w-1/2 space-y-6 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 text-gold-dark rounded-full text-xs font-semibold tracking-wider uppercase">
                <Globe className="w-3.5 h-3.5" />
                Vlogger & Creator Hub
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
                Experience India <br />
                <span className="italic font-light text-gold-dark">In Real Motion</span>
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-sans">
                Witness independent travel creators, local vloggers, and food enthusiasts as they trek high mountain passes, review midnight food stalls, and reveal ancient temple mysteries. Easily find content categorized by your dream destinations.
              </p>
              
              <div className="space-y-3.5 font-sans text-xs sm:text-sm text-gray-700">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center font-bold">✓</div>
                  <p><span className="font-semibold text-charcoal">Geotagged Discovery:</span> Filter stories instantly by Indian State or Territory.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center font-bold">✓</div>
                  <p><span className="font-semibold text-charcoal">Independent Voices:</span> Support original content creators and travel channels.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gold/15 text-gold-dark flex items-center justify-center font-bold">✓</div>
                  <p><span className="font-semibold text-charcoal">Interactive Submissions:</span> Recommend your own favorite videos and shorts.</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => navigate('social-atlas')}
                  className="px-8 py-3.5 bg-gold hover:bg-gold-light text-charcoal text-xs uppercase tracking-widest font-bold rounded-xl transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  Explore Social Media Atlas
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
