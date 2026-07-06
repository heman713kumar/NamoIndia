import { useRouter } from '../context/RouterContext';
import { Mail, Compass, Heart, MapPin, Sparkles, Send, ShieldCheck, Github, Instagram, Twitter } from 'lucide-react';
import React, { useState } from 'react';

export default function Footer() {
  const { navigate, wishlist } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const footerSlices = [
    {
      num: '01',
      title: 'Be Inspired',
      desc: 'Cultural festivals & Heritage',
      path: 'festivals',
      hoverBg: 'hover:bg-heritage-red'
    },
    {
      num: '02',
      title: 'Places to Go',
      desc: '28 States & 8 Territories',
      path: 'destinations',
      hoverBg: 'hover:bg-teal-light'
    },
    {
      num: '03',
      title: 'Things to Do',
      desc: 'Food, Adventure & Wellness',
      path: 'things-to-do',
      hoverBg: 'hover:bg-heritage-red'
    },
    {
      num: '04',
      title: 'Plan Your Trip',
      desc: 'Itinerary Builder & Maps',
      path: 'trip-planner',
      hoverBg: 'hover:bg-teal-light'
    }
  ];

  return (
    <footer className="bg-cream text-charcoal border-t-2 border-gold/40 flex flex-col" id="main-site-footer">
      
      {/* Upper 4-Slice Artistic Navigation (Mental Models) */}
      <div className="grid grid-cols-1 md:grid-cols-4 border-b border-gold/20">
        {footerSlices.map((slice, i) => (
          <div
            key={i}
            onClick={() => navigate(slice.path)}
            className={`border-b md:border-b-0 md:border-r border-gold/20 p-6 group cursor-pointer transition-all duration-300 ${slice.hoverBg} hover:text-cream`}
          >
            <span className="block text-gold font-sans text-xs uppercase tracking-widest mb-2 group-hover:text-cream-dark font-bold">
              {slice.num}
            </span>
            <h4 className="font-serif text-2xl font-bold tracking-tight text-heritage-red group-hover:text-white transition-colors">
              {slice.title}
            </h4>
            <p className="text-xs font-sans text-charcoal-light group-hover:text-cream-dark/90 mt-1 uppercase tracking-wider font-semibold transition-colors">
              {slice.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Main Footer Sitemap section: Logo, description, and newsletter signup */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo & Mission Statement */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-3 cursor-pointer mb-6" onClick={() => navigate('home')}>
              <div className="w-10 h-10 bg-heritage-red rounded-full flex items-center justify-center shadow-md">
                <span className="text-gold font-serif font-bold text-xl">अ</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-black tracking-tight text-heritage-red leading-none">
                  India<span className="italic font-light text-gold">.com</span>
                </span>
                <span className="font-sans text-[9px] tracking-[0.25em] text-charcoal-light uppercase font-semibold">
                  Incredible Journeys
                </span>
              </div>
            </div>
            <p className="text-charcoal-light text-sm leading-relaxed max-w-sm mb-6 font-sans">
              Inspired by the cinematic, emotional storytelling of luxury travel portals, we invite you to experience the deep heritage, spiritual wellness, legendary cuisines, and natural wonders of India's 36 diverse states and territories.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="p-2.5 bg-cream-dark hover:bg-gold/20 rounded-full text-heritage-red transition-all duration-200 border border-gold/10">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-cream-dark hover:bg-gold/20 rounded-full text-heritage-red transition-all duration-200 border border-gold/10">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 bg-cream-dark hover:bg-gold/20 rounded-full text-heritage-red transition-all duration-200 border border-gold/10">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-serif text-lg text-heritage-red font-bold tracking-wide mb-4 border-b border-gold/30 pb-2">Explore</h4>
              <ul className="space-y-2.5 text-sm text-charcoal-light">
                <li><button onClick={() => navigate('home')} className="hover:text-heritage-red transition-colors font-medium">Home Portal</button></li>
                <li><button onClick={() => navigate('destinations')} className="hover:text-heritage-red transition-colors font-medium">Places to Go (States)</button></li>
                <li><button onClick={() => navigate('weddings')} className="hover:text-heritage-red transition-colors font-medium font-semibold text-gold">Destination Weddings</button></li>
                <li><button onClick={() => navigate('festivals')} className="hover:text-heritage-red transition-colors font-medium">Festivals Calendar</button></li>
                <li><button onClick={() => navigate('festivals-guide')} className="hover:text-heritage-red transition-colors font-semibold text-gold">50 Iconic Festivals Guide</button></li>
                <li><button onClick={() => navigate('social-atlas')} className="hover:text-heritage-red transition-colors font-semibold text-gold">Social Media Atlas</button></li>
                <li><button onClick={() => navigate('blog')} className="hover:text-heritage-red transition-colors font-medium">Travel Stories & Blog</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif text-lg text-heritage-red font-bold tracking-wide mb-4 border-b border-gold/30 pb-2">Experiential</h4>
              <ul className="space-y-2.5 text-sm text-charcoal-light font-medium">
                <li><button onClick={() => navigate('things-to-do')} className="hover:text-heritage-red transition-colors">Things to Do Hub</button></li>
                <li><button onClick={() => navigate('culture')} className="hover:text-heritage-red transition-colors">Culture & Heritage</button></li>
                <li><button onClick={() => navigate('food')} className="hover:text-heritage-red transition-colors">Food & Cuisine</button></li>
                <li><button onClick={() => navigate('adventure')} className="hover:text-heritage-red transition-colors">Adventure & Nature</button></li>
                <li><button onClick={() => navigate('wellness')} className="hover:text-heritage-red transition-colors">Wellness & Spirit</button></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Newsletter Sign up box */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg text-heritage-red font-bold tracking-wide mb-4 border-b border-gold/30 pb-2">Plan Your Journey</h4>
            <ul className="space-y-2.5 text-sm text-teal-light mb-6 font-semibold">
              <li><button onClick={() => navigate('trip-planner')} className="hover:text-heritage-red transition-colors font-bold text-teal-dark">Interactive Trip Planner</button></li>
              <li><button onClick={() => navigate('contact')} className="hover:text-heritage-red transition-colors">Contact Travel Concierge</button></li>
            </ul>
            
            <div className="bg-cream-dark border-2 border-gold/20 rounded-lg p-4 shadow-sm">
              <span className="text-xs font-semibold tracking-wider uppercase text-heritage-red block mb-2">Be Inspired Weekly</span>
              {subscribed ? (
                <div className="text-teal-dark text-xs font-medium py-2">
                  ✓ Thank you! You've joined our heritage travel dispatch.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Enter email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-cream border border-gold/30 rounded px-3 py-2 text-xs text-charcoal focus:outline-none focus:border-heritage-red placeholder:text-charcoal/40 pr-8"
                    />
                    <Mail className="w-4 h-4 text-heritage-red/50 absolute right-2.5 top-2.5" />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-heritage-red hover:bg-heritage-red-light text-cream font-bold text-xs py-2 rounded uppercase tracking-wider transition-colors duration-200"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* Lower Footer section: Legal and credits */}
      <div className="border-t border-gold/20 bg-cream-dark py-8 text-center text-xs text-charcoal-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans font-medium">© 2026 Incredible India Tourism. Crafted with absolute premium travel intent.</p>
          <div className="flex gap-6 font-semibold">
            <button onClick={() => navigate('privacy-policy')} className="hover:text-heritage-red transition-colors cursor-pointer">Privacy Policy</button>
            <button onClick={() => navigate('terms')} className="hover:text-heritage-red transition-colors cursor-pointer">Terms of Use</button>
            <button onClick={() => navigate('travel-tips')} className="hover:text-heritage-red transition-colors cursor-pointer">Travel & Visa Tips</button>
          </div>
        </div>
      </div>

    </footer>
  );
}
