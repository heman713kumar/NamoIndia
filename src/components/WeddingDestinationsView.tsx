import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { WEDDING_DESTINATIONS, WeddingDestination } from '../data/weddingData';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, MapPin, Calendar, Sparkles, Compass, Music, BookOpen, ArrowLeft, Award, Info, Layers, Search, Check, Gift, ArrowRight } from 'lucide-react';

export default function WeddingDestinationsView() {
  const { navigate, toggleWishlist, isInWishlist } = useRouter();
  
  // States for filtering
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'browse' | 'planner' | 'symbolism'>('browse');

  // Mini-wizard (interactive planner) state
  const [wizardStep, setWizardStep] = useState<number>(1);
  const [wizardAnswers, setWizardAnswers] = useState({
    desire: '',
    season: '',
    vibe: ''
  });

  // Symbolism matching state
  const [symbolismKeyword, setSymbolismKeyword] = useState<string>('');

  // Categories definition
  const categories = [
    { id: 'all', label: 'All Venues', desc: 'Browse all curated wedding locations' },
    { id: 'royal', label: 'Palatial Splendor', desc: 'Castles, fortresses & historic royal residencies' },
    { id: 'coastal', label: 'Coastal & Island', desc: 'Turquoise beaches, cliff edges & colonial sea towns' },
    { id: 'mountain', label: 'Misty Highlands', desc: 'Misty tea estates, alpine meadows & snow peaks' },
    { id: 'sacred', label: 'Sacred Devotion', desc: 'Vedic chants, ancient sandstone temples & spiritual blessings' },
    { id: 'unique', label: 'Rustic & Eco', desc: 'Jungle glamping, artisan studios & romantic monsoon pavilions' }
  ];

  // Regions definition
  const regions = [
    { id: 'all', label: 'All Regions' },
    { id: 'South', label: 'The Deccan & Southern Shores' },
    { id: 'East & Islands', label: 'East & Neighboring Islands' },
    { id: 'Hidden Gems', label: 'Secret Sanctuaries & North' }
  ];

  // Filtered destinations list
  const filteredDestinations = useMemo(() => {
    return WEDDING_DESTINATIONS.filter((item) => {
      const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchRegion = selectedRegion === 'all' || item.region === selectedRegion;
      const matchSearch = searchQuery === '' || 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.state.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.symbolism.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchRegion && matchSearch;
    });
  }, [selectedCategory, selectedRegion, searchQuery]);

  // Symbolism matches
  const symbolismMatchedItems = useMemo(() => {
    if (!symbolismKeyword) return WEDDING_DESTINATIONS;
    return WEDDING_DESTINATIONS.filter(item => 
      item.symbolism.toLowerCase().includes(symbolismKeyword.toLowerCase()) ||
      item.description.toLowerCase().includes(symbolismKeyword.toLowerCase())
    );
  }, [symbolismKeyword]);

  // Wizard dynamic recommendations
  const recommendedItems = useMemo(() => {
    if (wizardStep !== 4) return [];
    return WEDDING_DESTINATIONS.filter((item) => {
      let score = 0;
      // Desire match
      if (wizardAnswers.desire === 'royal' && item.category === 'royal') score += 3;
      if (wizardAnswers.desire === 'coastal' && item.category === 'coastal') score += 3;
      if (wizardAnswers.desire === 'mountain' && item.category === 'mountain') score += 3;
      if (wizardAnswers.desire === 'sacred' && item.category === 'sacred') score += 3;
      if (wizardAnswers.desire === 'eco' && item.category === 'unique') score += 3;

      // Season match
      const isWinterItem = item.bestSeason.toLowerCase().includes('october') || item.bestSeason.toLowerCase().includes('november') || item.bestSeason.toLowerCase().includes('december') || item.bestSeason.toLowerCase().includes('january') || item.bestSeason.toLowerCase().includes('february');
      const isMonsoonItem = item.bestSeason.toLowerCase().includes('july') || item.bestSeason.toLowerCase().includes('august') || item.bestSeason.toLowerCase().includes('monsoon');
      const isSpringItem = item.bestSeason.toLowerCase().includes('march') || item.bestSeason.toLowerCase().includes('april') || item.bestSeason.toLowerCase().includes('may');

      if (wizardAnswers.season === 'winter' && isWinterItem) score += 2;
      if (wizardAnswers.season === 'monsoon' && isMonsoonItem) score += 2;
      if (wizardAnswers.season === 'spring' && isSpringItem) score += 2;

      // Vibe match
      if (wizardAnswers.vibe === 'grand' && item.category === 'royal') score += 2;
      if (wizardAnswers.vibe === 'intimate' && (item.category === 'mountain' || item.category === 'unique')) score += 2;
      if (wizardAnswers.vibe === 'bohemian' && item.category === 'coastal') score += 2;

      return score >= 2;
    }).slice(0, 3);
  }, [wizardStep, wizardAnswers]);

  // Form inquiry submit state
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <div className="bg-cream min-h-screen pb-24" id="wedding-destinations-root">
      
      {/* Editorial Luxury Hero */}
      <section className="relative bg-charcoal text-cream py-24 sm:py-32 border-b border-gold/20 overflow-hidden" id="wedding-hero-section">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          {/* Symmetrical golden mandate-style background design lines */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-gold" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-gold)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.35em] text-xs font-sans font-bold mb-4 block">
            Epitome of Eternal Vows
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-cream leading-tight mb-6">
            Destination Weddings <br />
            <span className="italic font-light text-gold">in Incredible India</span>
          </h1>
          <p className="text-sm sm:text-base lg:text-lg text-cream/85 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            Step into a landscape where ancient history meets modern romance. From royal palaces lit by a hundred thousand lightbulbs to misty cardamom estates and exotic beach borders, discover the symbolic soul of your union.
          </p>

          {/* Tab Navigation Menu */}
          <div className="flex justify-center gap-4 mt-12 border-b border-gold/15 pb-4 max-w-lg mx-auto">
            <button
              onClick={() => { setActiveTab('browse'); setWizardStep(1); }}
              className={`pb-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'browse' ? 'text-gold border-b-2 border-gold font-bold' : 'text-cream/50 hover:text-cream'
              }`}
            >
              Browse Venues
            </button>
            <button
              onClick={() => setActiveTab('planner')}
              className={`pb-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'planner' ? 'text-gold border-b-2 border-gold font-bold' : 'text-cream/50 hover:text-cream'
              }`}
            >
              Wedding Vibe Planner
            </button>
            <button
              onClick={() => setActiveTab('symbolism')}
              className={`pb-2 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeTab === 'symbolism' ? 'text-gold border-b-2 border-gold font-bold' : 'text-cream/50 hover:text-cream'
              }`}
            >
              Symbolism Matcher
            </button>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* VIEW 1: BROWSE WEDDING DESTINATIONS */}
        {activeTab === 'browse' && (
          <div className="space-y-12 animate-fadeIn" id="wedding-browse-tab-view">
            
            {/* Header and Search */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gold/10 pb-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Curated Royal & Natural Sanctuaries</h2>
                <p className="text-xs sm:text-sm text-charcoal/60 mt-1 font-sans">
                  Choose a location that carries the specific symbolic message matching your love story.
                </p>
              </div>
              
              {/* Elegant Search Bar */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
                <input
                  type="text"
                  placeholder="Search venue, state, symbolism..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-gold/20 focus:border-gold rounded-full pl-10 pr-4 py-2.5 text-xs text-charcoal font-sans placeholder-charcoal/40 focus:outline-none focus:ring-1 focus:ring-gold"
                />
              </div>
            </div>

            {/* Symmetrical Category & Region Filters */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Sidebar Filters */}
              <div className="lg:col-span-3 space-y-6 lg:sticky lg:top-24">
                
                {/* Setting Category Filters */}
                <div className="bg-white border border-gold/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4" />
                    <span>Venue Type</span>
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all flex flex-col gap-0.5 cursor-pointer ${
                          selectedCategory === cat.id
                            ? 'bg-heritage-red text-cream border border-heritage-red shadow-sm'
                            : 'bg-cream/45 text-charcoal-light hover:bg-gold/10'
                        }`}
                      >
                        <span>{cat.label}</span>
                        <span className={`text-[9px] font-sans font-light leading-none ${
                          selectedCategory === cat.id ? 'text-cream/70' : 'text-charcoal-light/50'
                        }`}>
                          {cat.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Region Filters */}
                <div className="bg-white border border-gold/10 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>Geographic Realm</span>
                  </h3>
                  <div className="space-y-2">
                    {regions.map((reg) => (
                      <button
                        key={reg.id}
                        onClick={() => setSelectedRegion(reg.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                          selectedRegion === reg.id
                            ? 'bg-teal-dark text-cream border border-teal-dark shadow-sm'
                            : 'bg-cream/45 text-charcoal-light hover:bg-gold/10'
                        }`}
                      >
                        {reg.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Wishlist quick summary counter */}
                <div className="bg-cream-dark border border-gold/15 rounded-2xl p-5 space-y-3">
                  <span className="text-[10px] font-bold text-gold uppercase tracking-wider block">Saved Dream Board</span>
                  <p className="text-xs text-charcoal/65 font-sans leading-relaxed">
                    Click the heart icon on any wedding destination to save it instantly to your collaborative travel wishlist.
                  </p>
                </div>

              </div>

              {/* Right Cards Grid */}
              <div className="lg:col-span-9 space-y-8">
                
                {filteredDestinations.length === 0 ? (
                  <div className="bg-white border border-gold/10 rounded-2xl p-16 text-center">
                    <Compass className="w-12 h-12 text-gold/30 mx-auto mb-4" />
                    <h3 className="font-serif text-xl font-bold text-charcoal">No Matching Wedding Venues Found</h3>
                    <p className="text-xs sm:text-sm text-charcoal/50 mt-2 max-w-sm mx-auto font-sans">
                      Try broadening your search query or selecting "All Venues" / "All Regions" to explore more options.
                    </p>
                    <button
                      onClick={() => { setSelectedCategory('all'); setSelectedRegion('all'); setSearchQuery(''); }}
                      className="mt-6 px-5 py-2.5 bg-gold hover:bg-gold-light text-cream rounded text-xs tracking-wider uppercase font-bold transition-all"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredDestinations.map((dest) => {
                      const isFav = isInWishlist(dest.id);
                      return (
                        <div
                          key={dest.id}
                          className="bg-white border border-gold/10 hover:border-gold/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                          <div>
                            {/* Card Image */}
                            <div className="relative h-56 overflow-hidden">
                              <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                              
                              {/* Category Badge */}
                              <div className="absolute top-4 left-4">
                                <span className="bg-gold/95 backdrop-blur-sm text-charcoal text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded shadow-sm">
                                  {dest.categoryLabel}
                                </span>
                              </div>

                              {/* Wishlist Heart Toggle */}
                              <button
                                onClick={() => toggleWishlist(dest.id)}
                                className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full text-heritage-red shadow-md transition-all cursor-pointer"
                                title={isFav ? "Remove from Dream Board" : "Save to Dream Board"}
                              >
                                <Heart className={`w-4 h-4 ${isFav ? 'fill-heritage-red text-heritage-red animate-pulse' : ''}`} />
                              </button>

                              <div className="absolute bottom-4 left-4 text-cream">
                                <span className="text-[9px] text-gold font-bold uppercase tracking-widest block">
                                  {dest.state} • {dest.region}
                                </span>
                                <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight leading-none mt-1">
                                  {dest.name}
                                </h3>
                              </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 space-y-4">
                              {/* Symbolism Banner */}
                              <div className="bg-cream-dark/60 border border-gold/10 px-4 py-2.5 rounded-lg">
                                <span className="text-[10px] text-gold font-sans font-bold uppercase tracking-widest block leading-none mb-1">
                                  Sacred Symbolism
                                </span>
                                <p className="text-xs font-sans text-heritage-red font-medium leading-relaxed italic">
                                  “{dest.symbolism}”
                                </p>
                              </div>

                              <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                                {dest.description}
                              </p>

                              {/* Highlights list */}
                              <div className="space-y-1.5 pt-2">
                                <span className="text-[10px] text-charcoal-light uppercase tracking-wider font-bold block">Exclusive Highlights:</span>
                                {dest.highlights.map((hl, index) => (
                                  <div key={index} className="flex items-center gap-2 text-xs text-charcoal/70 font-sans">
                                    <Check className="w-3.5 h-3.5 text-gold shrink-0" />
                                    <span>{hl}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>

                          {/* Card Footer */}
                          <div className="p-6 pt-0 border-t border-gold/5 flex justify-between items-center bg-cream/20">
                            <div className="text-[10px] text-charcoal/50 font-sans">
                              <span className="font-bold text-charcoal-light block">Best Season</span>
                              <span>{dest.bestSeason}</span>
                            </div>

                            {/* Dynamic State Cross-linking */}
                            {dest.stateId ? (
                              <button
                                onClick={() => navigate('destination-detail', { id: dest.stateId! })}
                                className="text-xs font-bold text-heritage-red hover:text-heritage-red-light uppercase tracking-wider flex items-center gap-1 group/btn cursor-pointer"
                              >
                                <span>Explore State Guide</span>
                                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                              </button>
                            ) : (
                              <span className="text-[10px] font-bold text-teal-dark font-sans uppercase">
                                Custom Eco-Aesthetic
                              </span>
                            )}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}

              </div>

            </div>

          </div>
        )}

        {/* VIEW 2: WEDDING VIBE PLANNER (INTERACTIVE MINI-WIZARD) */}
        {activeTab === 'planner' && (
          <div className="bg-white border border-gold/15 rounded-3xl p-8 sm:p-12 shadow-xl max-w-4xl mx-auto animate-fadeIn" id="wedding-wizard-view">
            
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">DREAM UNION ASSISTANT</span>
              <h2 className="font-serif text-3xl font-bold text-heritage-red">Find Your Perfect Wedding Haven</h2>
              <p className="text-xs sm:text-sm text-charcoal/65 font-sans mt-2">
                Answer three elegant questions to align your cosmic romantic wishes with India\'s absolute finest palatial and wilderness wedding backdrops.
              </p>
            </div>

            {/* Steps Progress Indicator */}
            <div className="flex justify-between items-center max-w-md mx-auto mb-12">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center flex-1 last:flex-none">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    wizardStep === step 
                      ? 'bg-heritage-red text-cream scale-110 shadow-md border-2 border-gold' 
                      : wizardStep > step 
                        ? 'bg-teal-dark text-cream' 
                        : 'bg-cream-dark text-charcoal/40 border border-gold/15'
                  }`}>
                    {step === 4 ? <Sparkles className="w-4 h-4 text-gold" /> : step}
                  </div>
                  {step < 4 && (
                    <div className={`h-1 flex-1 mx-2 transition-all ${
                      wizardStep > step ? 'bg-teal-dark' : 'bg-cream-dark'
                    }`} />
                  )}
                </div>
              ))}
            </div>

            {/* STEP 1: SELECT YOUR SYMBOLIC DESIRE */}
            {wizardStep === 1 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal text-center mb-6">
                  What symbolic core should your wedding embody?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { id: 'royal', title: 'Royal Legacy & Palatial Grandeur', desc: 'Tudor brick balconies, gold lighting, and Nizam luxury.' },
                    { id: 'coastal', title: 'Coastal Horizon & Turquoise Infinity', desc: 'Barefoot sands, cliffside ocean view, and colonial lanes.' },
                    { id: 'mountain', title: 'Misty Highlands & Romantic Fog', desc: 'Pine forests, wild tea-estates, and snow-capped mountain sunrises.' },
                    { id: 'sacred', title: 'Sacred Devotion & Vedic Beginnings', desc: 'Temple sandstone arches, chanting, and pure cosmic blessings.' },
                    { id: 'eco', title: 'Untamed Wilds & Rustic Roots', desc: 'Jungle glamping, luxury tents, and handcrafted clay arts.' },
                  ].map((opt) => (
                    <div
                      key={opt.id}
                      onClick={() => setWizardAnswers({ ...wizardAnswers, desire: opt.id })}
                      className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between h-32 ${
                        wizardAnswers.desire === opt.id
                          ? 'border-heritage-red bg-heritage-red/5'
                          : 'border-gold/10 hover:border-gold/30 hover:bg-cream-dark/30'
                      }`}
                    >
                      <span className="font-serif text-base font-bold text-charcoal">{opt.title}</span>
                      <span className="text-xs text-charcoal/60 font-sans leading-relaxed block mt-2">{opt.desc}</span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end pt-8">
                  <button
                    disabled={!wizardAnswers.desire}
                    onClick={() => setWizardStep(2)}
                    className="px-6 py-3 bg-heritage-red text-cream rounded font-bold text-xs uppercase tracking-widest disabled:opacity-40 cursor-pointer hover:bg-heritage-red-light transition-all flex items-center gap-2"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2: SELECT PREFERRED SEASON */}
            {wizardStep === 2 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal text-center mb-6">
                  Select your preferred wedding weather & season
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'winter', title: 'Crisp Royal Winter', desc: 'October to February. Perfect weather for heavy velvet royal wedding outfits.', icon: Layers },
                    { id: 'monsoon', title: 'Romantic Monsoon Rain', desc: 'July to September. Thick fog, water lilies, and lush rain-washed forests.', icon: Compass },
                    { id: 'spring', title: 'Mild Spring Meadows', desc: 'March to May. Mild highland breeze, blooming orchids, and deep blue seas.', icon: Sparkles },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setWizardAnswers({ ...wizardAnswers, season: opt.id })}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center justify-between h-48 ${
                          wizardAnswers.season === opt.id
                            ? 'border-heritage-red bg-heritage-red/5'
                            : 'border-gold/10 hover:border-gold/30 hover:bg-cream-dark/30'
                        }`}
                      >
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-heritage-red">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-serif text-base font-bold text-charcoal block mt-3">{opt.title}</span>
                        <span className="text-xs text-charcoal/60 font-sans leading-relaxed block mt-2">{opt.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-8 border-t border-gold/10">
                  <button
                    onClick={() => setWizardStep(1)}
                    className="px-5 py-3 text-charcoal text-xs uppercase tracking-widest font-bold cursor-pointer hover:underline"
                  >
                    Back
                  </button>
                  <button
                    disabled={!wizardAnswers.season}
                    onClick={() => setWizardStep(3)}
                    className="px-6 py-3 bg-heritage-red text-cream rounded font-bold text-xs uppercase tracking-widest disabled:opacity-40 cursor-pointer hover:bg-heritage-red-light transition-all flex items-center gap-2"
                  >
                    <span>Next Question</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: PREFERRED GUEST VIBE */}
            {wizardStep === 3 && (
              <div className="space-y-6 animate-fadeIn">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal text-center mb-6">
                  What kind of guest experience would you like to host?
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { id: 'grand', title: 'Grand Royal Banquet', desc: 'Hundreds of guests dining in massive heritage halls with imperial buggy arrivals.', icon: Award },
                    { id: 'intimate', title: 'Intimate Glamping & Highlands', desc: 'Cosy luxury tents beneath star skies, campfires, and slow forest walks.', icon: Gift },
                    { id: 'bohemian', title: 'Bohemian Beach & fusion', desc: 'Chill beachside barefoot dancing, colonial town cycling, and seafood fusion.', icon: Music },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setWizardAnswers({ ...wizardAnswers, vibe: opt.id })}
                        className={`p-6 rounded-2xl border-2 transition-all cursor-pointer flex flex-col items-center text-center justify-between h-48 ${
                          wizardAnswers.vibe === opt.id
                            ? 'border-heritage-red bg-heritage-red/5'
                            : 'border-gold/10 hover:border-gold/30 hover:bg-cream-dark/30'
                        }`}
                      >
                        <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center text-heritage-red">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="font-serif text-base font-bold text-charcoal block mt-3">{opt.title}</span>
                        <span className="text-xs text-charcoal/60 font-sans leading-relaxed block mt-2">{opt.desc}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex justify-between pt-8 border-t border-gold/10">
                  <button
                    onClick={() => setWizardStep(2)}
                    className="px-5 py-3 text-charcoal text-xs uppercase tracking-widest font-bold cursor-pointer hover:underline"
                  >
                    Back
                  </button>
                  <button
                    disabled={!wizardAnswers.vibe}
                    onClick={() => setWizardStep(4)}
                    className="px-6 py-3 bg-heritage-red text-cream rounded font-bold text-xs uppercase tracking-widest disabled:opacity-40 cursor-pointer hover:bg-heritage-red-light transition-all flex items-center gap-2"
                  >
                    <span>Generate Matches</span>
                    <Sparkles className="w-4 h-4 text-gold" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4: RECOMMENDATIONS */}
            {wizardStep === 4 && (
              <div className="space-y-8 animate-fadeIn">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/15 text-heritage-red rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <Sparkles className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                    Your Perfect Romantic Destinations
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal/60 font-sans max-w-md mx-auto mt-2">
                    Based on your symbolic wishes, preferred climate, and hosting style, these three sanctuaries fit perfectly.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
                  {recommendedItems.length === 0 ? (
                    <div className="col-span-3 text-center py-6">
                      <p className="text-sm font-sans text-charcoal-light italic">
                        We have compiled our general master list for you. Click below to view the incredible venues!
                      </p>
                    </div>
                  ) : (
                    recommendedItems.map((rec) => (
                      <div
                        key={rec.id}
                        onClick={() => {
                          setSelectedCategory(rec.category);
                          setActiveTab('browse');
                          setSearchQuery(rec.name);
                        }}
                        className="bg-cream-dark/45 border border-gold/15 hover:border-heritage-red rounded-2xl overflow-hidden cursor-pointer group hover:shadow-lg transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="relative h-40 overflow-hidden">
                            <img
                              src={rec.image}
                              alt={rec.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <span className="absolute bottom-3 left-3 text-xs font-serif font-bold text-white leading-none">
                              {rec.name}
                            </span>
                          </div>
                          <div className="p-4 space-y-2">
                            <span className="text-[8px] bg-gold text-charcoal font-sans font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                              {rec.categoryLabel}
                            </span>
                            <p className="text-xs font-serif text-heritage-red italic line-clamp-2">
                              “{rec.symbolism}”
                            </p>
                            <p className="text-[11px] text-charcoal/70 line-clamp-2 font-sans">
                              {rec.description}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 pt-0 text-[10px] text-heritage-red font-bold uppercase tracking-wider flex justify-between items-center group-hover:underline">
                          <span>View Details</span>
                          <span>&rarr;</span>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                <div className="flex justify-center gap-4 pt-8 border-t border-gold/10">
                  <button
                    onClick={() => {
                      setWizardAnswers({ desire: '', season: '', vibe: '' });
                      setWizardStep(1);
                    }}
                    className="px-6 py-3 border border-gold/30 hover:border-gold text-charcoal text-xs uppercase tracking-widest font-bold rounded cursor-pointer transition-colors"
                  >
                    Reset & Restart
                  </button>
                  <button
                    onClick={() => setActiveTab('browse')}
                    className="px-6 py-3 bg-teal-dark hover:bg-teal-light text-cream text-xs uppercase tracking-widest font-bold rounded cursor-pointer transition-colors"
                  >
                    Explore All Venues
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* VIEW 3: SYMBOLISM MATCHER */}
        {activeTab === 'symbolism' && (
          <div className="space-y-8 animate-fadeIn" id="wedding-symbolism-tab-view">
            <div className="bg-white border border-gold/15 rounded-3xl p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">CONSCIOUS PHILOSOPHICAL MATCHING</span>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Align Your Cosmic Symbolism</h2>
                <p className="text-xs sm:text-sm text-charcoal/65 font-sans mt-2">
                  Weddings in India are deeply philosophical. Select or search for a romantic core principle below to reveal the precise geography built to mirror it.
                </p>
              </div>

              {/* Symbolism Buttons Cloud */}
              <div className="flex flex-wrap gap-2.5 justify-center mb-10">
                {[
                  'Serenity and fog',
                  'Urban royalty',
                  'Palatial opulence',
                  'Nizam-era luxury',
                  'Hills meet the sea',
                  'Ultimate devotion',
                  'Bohemian elegance',
                  'Intellectual heritage',
                  'High-altitude romance',
                  'Spiritual devotion',
                  'Wild adventure',
                  'Ethereal beauty',
                  'Mountain peace',
                  'Mystical isolation',
                  'Vibrant folklore',
                  'Exotic paradise',
                  'Winter wonderland',
                  'Artistic creation',
                  'Tragic, poetic romance'
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setSymbolismKeyword(term === symbolismKeyword ? '' : term)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                      symbolismKeyword.toLowerCase() === term.toLowerCase()
                        ? 'bg-gold text-charcoal border border-gold shadow-md'
                        : 'bg-cream-dark/65 text-charcoal hover:bg-gold/15 border border-gold/10'
                    }`}
                  >
                    {term}
                  </button>
                ))}
              </div>

              {/* Results Grid */}
              <div className="space-y-6">
                <h3 className="font-serif text-xl font-bold text-charcoal border-b border-gold/10 pb-2">
                  Matched Architectural Sages ({symbolismMatchedItems.length})
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {symbolismMatchedItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedCategory(item.category);
                        setActiveTab('browse');
                        setSearchQuery(item.name);
                      }}
                      className="bg-cream/40 border border-gold/10 hover:border-gold/30 p-5 rounded-2xl cursor-pointer group transition-all hover:shadow-md flex gap-4"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] text-gold font-bold uppercase tracking-widest block">
                          {item.state} • {item.categoryLabel}
                        </span>
                        <h4 className="font-serif text-base font-bold text-charcoal group-hover:text-heritage-red transition-colors leading-none">
                          {item.name}
                        </h4>
                        <p className="text-xs font-sans text-heritage-red font-medium italic mt-1 line-clamp-1">
                          “{item.symbolism}”
                        </p>
                        <p className="text-[11px] text-charcoal/60 leading-relaxed font-sans line-clamp-1">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Traditional Royal Inquiry Card Section */}
        <section className="mt-24 max-w-4xl mx-auto" id="wedding-inquiry-consultation">
          <div className="bg-charcoal border-4 border-gold/25 rounded-3xl p-8 sm:p-12 relative overflow-hidden text-cream shadow-2xl">
            
            <div className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none">
              {/* Elegant mandalic pattern */}
              <svg className="w-full h-full text-gold" viewBox="0 0 100 100">
                <circle cx="100" cy="0" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="100" cy="0" r="60" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="100" cy="0" r="40" fill="none" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold block mb-2">ROYAL CONCIERGE SERVICE</span>
              <h3 className="font-serif text-3xl font-bold text-cream">Enquire for Custom Wedding Curation</h3>
              <p className="text-xs sm:text-sm text-cream/75 font-sans mt-2">
                Allow our veteran wedding planners and travel concierge agents to curate complete, seamless stays, heritage catering, local artist bookings, and travel logistics for your guests in India.
              </p>
            </div>

            {inquirySubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-cream-dark/10 border border-gold/30 p-8 rounded-2xl text-center space-y-4"
              >
                <div className="w-12 h-12 bg-gold/20 text-gold rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-serif text-xl font-bold text-gold">Inquiry Scroll Received Safely</h4>
                <p className="text-xs font-sans text-cream/80 max-w-md mx-auto leading-relaxed">
                  We have cataloged your romantic desires. A representative from the Royal India Wedding Concierge will reach out to you within 24 business hours to share detailed venue catalogs.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="space-y-6 max-w-2xl mx-auto font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-2">Full Name</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g., Katherine & Dev"
                      className="w-full bg-cream-dark/10 border border-gold/20 focus:border-gold rounded p-3 text-sm text-cream placeholder-cream/45 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-2">Email Address</label>
                    <input
                      required
                      type="email"
                      placeholder="e.g., love@example.com"
                      className="w-full bg-cream-dark/10 border border-gold/20 focus:border-gold rounded p-3 text-sm text-cream placeholder-cream/45 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-2">Desired Venue Setting</label>
                    <select
                      className="w-full bg-charcoal border border-gold/20 focus:border-gold rounded p-3 text-sm text-cream/80 focus:outline-none"
                    >
                      <option value="royal">Palatial Splendor (Castles & Forts)</option>
                      <option value="coastal">Coastal & Island (Radhanagar Beach, Cliffs)</option>
                      <option value="mountain">Misty Highlands (Coffee estates, snow peaks)</option>
                      <option value="sacred">Sacred Devotion (Sandstone Temples)</option>
                      <option value="eco">Eco-Wilds & Rustic Artisan</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-2">Approximate Guest Count</label>
                    <select
                      className="w-full bg-charcoal border border-gold/20 focus:border-gold rounded p-3 text-sm text-cream/80 focus:outline-none"
                    >
                      <option value="small">Intimate Gathering (Under 50 guests)</option>
                      <option value="medium">Classical Reunion (50 - 200 guests)</option>
                      <option value="large">Grand Imperial Wedding (200+ guests)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gold font-bold uppercase tracking-widest block mb-2">Your Romantic Ambitions & Requests</label>
                  <textarea
                    rows={4}
                    placeholder="Describe any particular desires, traditional customs, musical plans, or state preferences..."
                    className="w-full bg-cream-dark/10 border border-gold/20 focus:border-gold rounded p-3 text-sm text-cream placeholder-cream/45 focus:outline-none"
                  ></textarea>
                </div>

                <div className="text-center pt-4">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-gold hover:bg-gold-light text-charcoal font-bold text-xs uppercase tracking-widest rounded transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.01]"
                  >
                    Submit Wedding Inquiry &rarr;
                  </button>
                </div>
              </form>
            )}

          </div>
        </section>

      </div>

    </div>
  );
}
