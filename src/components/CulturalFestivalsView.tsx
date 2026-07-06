import React, { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { CULTURAL_FESTIVALS, CulturalFestival } from '../data/culturalFestivalsData';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Calendar, MapPin, Search, Copy, Check, ArrowLeft, 
  Info, Compass, Heart, Award, ArrowRight, MessageSquare, Send 
} from 'lucide-react';

export default function CulturalFestivalsView() {
  const { navigate, toggleWishlist, isInWishlist } = useRouter();
  
  // States
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'browse' | 'matcher' | 'concierge'>('browse');

  // Matcher Widget States
  const [matcherRegion, setMatcherRegion] = useState<string>('');
  const [matcherSeason, setMatcherSeason] = useState<string>('');
  const [matcherVibe, setMatcherVibe] = useState<string>('');
  const [isMatchedSubmitted, setIsMatchedSubmitted] = useState<boolean>(false);

  // Concierge Form States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [] as string[],
    customInterest: '',
    notes: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Region tabs
  const regions = [
    { id: 'all', label: 'All of India' },
    { id: 'North', label: 'North India', desc: 'Heritage, Spirituality & Himalayan Culture' },
    { id: 'West', label: 'West India', desc: 'Color, Dance & Coastal Vibes' },
    { id: 'South', label: 'South India', desc: 'Sacred Devotion, Rhythms & Harvests' },
    { id: 'East & Northeast', label: 'East & Northeast', desc: 'Art Carnivals, Tribal Rites & Spring Harmony' }
  ];

  // Filtering logic for the 50 events
  const filteredFestivals = useMemo(() => {
    return CULTURAL_FESTIVALS.filter((fest) => {
      const matchRegion = selectedRegion === 'all' || fest.region === selectedRegion;
      const matchSearch = searchQuery === '' || 
        fest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fest.vibe.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRegion && matchSearch;
    });
  }, [selectedRegion, searchQuery]);

  // Copy to clipboard helper
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  // Dynamic recommendations for the matcher widget
  const matches = useMemo(() => {
    if (!isMatchedSubmitted) return [];
    return CULTURAL_FESTIVALS.filter((fest) => {
      let score = 0;
      if (matcherRegion && fest.region === matcherRegion) score += 3;
      
      const textToSearch = (fest.significance + ' ' + fest.vibe + ' ' + fest.bestTime).toLowerCase();
      
      if (matcherSeason) {
        if (matcherSeason === 'winter' && (textToSearch.includes('nov') || textToSearch.includes('dec') || textToSearch.includes('jan') || textToSearch.includes('feb') || textToSearch.includes('winter'))) {
          score += 2;
        } else if (matcherSeason === 'spring' && (textToSearch.includes('mar') || textToSearch.includes('apr') || textToSearch.includes('spring'))) {
          score += 2;
        } else if (matcherSeason === 'monsoon' && (textToSearch.includes('jun') || textToSearch.includes('jul') || textToSearch.includes('aug') || textToSearch.includes('sep') || textToSearch.includes('monsoon'))) {
          score += 2;
        } else if (matcherSeason === 'autumn' && (textToSearch.includes('sep') || textToSearch.includes('oct') || textToSearch.includes('nov') || textToSearch.includes('autumn'))) {
          score += 2;
        }
      }

      if (matcherVibe) {
        if (matcherVibe === 'spiritual' && (textToSearch.includes('spirit') || textToSearch.includes('sacred') || textToSearch.includes('god') || textToSearch.includes('devotion'))) score += 2;
        if (matcherVibe === 'energetic' && (textToSearch.includes('dance') || textToSearch.includes('energy') || textToSearch.includes('race') || textToSearch.includes('drum'))) score += 2;
        if (matcherVibe === 'bohemian' && (textToSearch.includes('music') || textToSearch.includes('indie') || textToSearch.includes('art') || textToSearch.includes('lit'))) score += 2;
        if (matcherVibe === 'tribal' && (textToSearch.includes('tribal') || textToSearch.includes('warrior') || textToSearch.includes('indigenous') || textToSearch.includes('harvest'))) score += 2;
      }

      return score >= 2;
    }).slice(0, 4);
  }, [isMatchedSubmitted, matcherRegion, matcherSeason, matcherVibe]);

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        interests: [],
        customInterest: '',
        notes: ''
      });
    }, 4000);
  };

  const currentRegionInfo = regions.find(r => r.id === selectedRegion);

  return (
    <div className="bg-cream min-h-screen pb-24" id="cultural-festivals-root">
      
      {/* Editorial Symmetrical Hero Banner */}
      <section className="relative bg-charcoal text-cream py-24 sm:py-32 border-b border-gold/20 overflow-hidden" id="festivals-hero">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid-mandate" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="1.5" fill="#D4AF37" />
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#D4AF37" strokeWidth="0.25" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-mandate)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="text-gold uppercase tracking-[0.35em] text-xs font-sans font-bold mb-4 block">
            UNESCO-Grade Cultural Legacy
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-extrabold text-cream leading-tight mb-6">
            Iconic Festivals of India <br />
            <span className="italic font-light text-gold text-3xl sm:text-5xl">The High-Utility Travel Guide</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-cream/80 leading-relaxed font-sans font-light">
            Act as an expert cultural guide and Indian tourism strategist. Explore our comprehensive, structured atlas of 50 of India's most significant cultural celebrations, complete with dynamic significance descriptions and custom AI image generation blueprints.
          </p>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <button
              onClick={() => setActiveTab('browse')}
              className={`px-6 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'browse' 
                  ? 'bg-gold text-charcoal shadow-lg' 
                  : 'bg-white/10 text-cream hover:bg-white/20 border border-gold/20'
              }`}
            >
              Browse 50 Events
            </button>
            <button
              onClick={() => setActiveTab('matcher')}
              className={`px-6 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'matcher' 
                  ? 'bg-gold text-charcoal shadow-lg' 
                  : 'bg-white/10 text-cream hover:bg-white/20 border border-gold/20'
              }`}
            >
              Festival Matcher Widget
            </button>
            <button
              onClick={() => setActiveTab('concierge')}
              className={`px-6 py-2.5 rounded-sm font-sans text-xs uppercase tracking-widest font-semibold transition-all cursor-pointer ${
                activeTab === 'concierge' 
                  ? 'bg-gold text-charcoal shadow-lg' 
                  : 'bg-white/10 text-cream hover:bg-white/20 border border-gold/20'
              }`}
            >
              Travel Concierge
            </button>
          </div>
        </div>
      </section>

      {/* Main Tab Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: BROWSE ALL 50 EVENTS */}
          {activeTab === 'browse' && (
            <motion.div
              key="browse-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Back to Home & Search panel */}
              <div className="flex flex-col md:flex-row gap-6 justify-between items-center bg-white border border-gold/15 p-6 rounded-2xl shadow-sm">
                
                {/* Search query box */}
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gold" />
                  <input
                    type="text"
                    placeholder="Search 50 events by name, location, keyword..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-cream/40 border border-gold/25 rounded-lg focus:outline-none focus:border-gold text-xs text-charcoal placeholder:text-charcoal/40"
                  />
                </div>

                {/* Return button */}
                <div className="flex gap-4 items-center w-full md:w-auto justify-end">
                  <span className="text-xs text-charcoal/50 font-sans hidden sm:inline">
                    Showing {filteredFestivals.length} of 50 Celebrations
                  </span>
                  <button
                    onClick={() => navigate('home')}
                    className="flex items-center gap-1.5 px-4 py-2.5 bg-cream hover:bg-gold/10 border border-gold/15 text-xs font-semibold tracking-wider uppercase text-charcoal rounded transition-all cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5 text-gold" />
                    <span>Back to Portal</span>
                  </button>
                </div>
              </div>

              {/* Geographical Region Selector (Tabs) */}
              <div className="border-b border-gold/15">
                <div className="flex overflow-x-auto pb-px gap-2 sm:gap-6 no-scrollbar">
                  {regions.map((reg) => {
                    const isSelected = selectedRegion === reg.id;
                    return (
                      <button
                        key={reg.id}
                        onClick={() => setSelectedRegion(reg.id)}
                        className={`pb-4 px-2 text-xs uppercase tracking-widest font-bold whitespace-nowrap border-b-2 transition-all cursor-pointer ${
                          isSelected 
                            ? 'border-heritage-red text-heritage-red scale-102 font-extrabold' 
                            : 'border-transparent text-charcoal/60 hover:text-heritage-red hover:border-gold/20'
                        }`}
                      >
                        {reg.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Region description banner */}
              {currentRegionInfo && currentRegionInfo.desc && (
                <div className="bg-charcoal/5 border-l-4 border-gold p-4 rounded-r-lg">
                  <h4 className="font-serif text-sm font-bold text-charcoal">{currentRegionInfo.label}</h4>
                  <p className="text-xs text-charcoal/70 mt-1 font-sans">{currentRegionInfo.desc}</p>
                </div>
              )}

              {/* 50 Festivals Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="festivals-guide-grid">
                {filteredFestivals.map((fest, idx) => {
                  const hasFavorite = isInWishlist(fest.id);
                  return (
                    <motion.div
                      layout
                      key={fest.id}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.35, delay: Math.min(idx * 0.02, 0.4) }}
                      className="bg-white rounded-2xl overflow-hidden border border-gold/15 hover:border-gold/30 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all flex flex-col justify-between"
                    >
                      <div>
                        {/* Image banner with season/region tag */}
                        <div className="relative h-48 overflow-hidden bg-charcoal">
                          <img 
                            src={fest.image} 
                            alt={fest.name} 
                            className="w-full h-full object-cover opacity-80"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent" />
                          
                          {/* Tags on top of image */}
                          <div className="absolute top-4 left-4 flex gap-2">
                            <span className="px-2 py-0.5 bg-gold/90 text-[8px] font-bold tracking-widest text-charcoal uppercase rounded-sm shadow-sm">
                              {fest.region} India
                            </span>
                            <span className="px-2 py-0.5 bg-cream text-[8px] font-bold tracking-widest text-charcoal-light uppercase rounded-sm shadow-sm border border-gold/10">
                              {fest.bestTime}
                            </span>
                          </div>

                          {/* Wishlist Button */}
                          <button
                            onClick={() => toggleWishlist(fest.id)}
                            className="absolute top-4 right-4 p-2 bg-cream/90 hover:bg-cream text-charcoal hover:text-heritage-red rounded-full shadow-md transition-colors cursor-pointer"
                            title="Add to Itinerary Wishlist"
                          >
                            <Heart className={`w-3.5 h-3.5 ${hasFavorite ? 'fill-heritage-red text-heritage-red' : ''}`} />
                          </button>

                          {/* Location & Title on bottom of image */}
                          <div className="absolute bottom-4 left-4 right-4 text-cream">
                            <div className="flex items-center gap-1 text-[9px] text-gold font-sans font-bold uppercase tracking-wider">
                              <MapPin className="w-2.5 h-2.5" />
                              <span>{fest.location}</span>
                            </div>
                            <h3 className="font-serif text-lg font-bold text-cream mt-0.5 leading-tight">
                              {fest.name}
                            </h3>
                          </div>
                        </div>

                        {/* Event Details Content */}
                        <div className="p-6 space-y-4 font-sans">
                          {/* Significance & Vibe block */}
                          <div className="space-y-1.5">
                            <h4 className="text-[10px] font-bold tracking-widest text-gold uppercase">
                              Significance & Vibe
                            </h4>
                            <p className="text-xs text-charcoal/80 leading-relaxed font-light">
                              <strong className="font-semibold text-charcoal">{fest.significance} </strong>
                              {fest.vibe}
                            </p>
                          </div>

                          {/* AI Image Generation Blueprint */}
                          <div className="bg-charcoal text-cream rounded-lg p-4 border border-gold/20 relative group/prompt">
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="text-[8px] tracking-[0.2em] text-gold font-bold uppercase flex items-center gap-1">
                                <Sparkles className="w-2.5 h-2.5" />
                                <span>AI Image Prompt Blueprint</span>
                              </span>
                              <button
                                onClick={() => handleCopy(fest.id, fest.visualBlueprint)}
                                className="text-gold/80 hover:text-gold hover:scale-105 transition-all p-1 rounded hover:bg-white/10 cursor-pointer"
                                title="Copy blueprint to clipboard"
                              >
                                {copiedId === fest.id ? (
                                  <Check className="w-3 h-3 text-emerald-400 animate-bounce" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                            </div>
                            <p className="text-[11px] font-mono leading-relaxed text-cream/90 italic border-l-2 border-gold/40 pl-2">
                              "{fest.visualBlueprint}"
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Footer CTA of Card */}
                      <div className="px-6 pb-6 pt-2 border-t border-gold/5 flex justify-between items-center">
                        <span className="text-[9px] uppercase tracking-widest font-bold text-charcoal/40 font-mono">
                          Event Code: CF-{fest.id.slice(0, 3).toUpperCase()}
                        </span>
                        <button
                          onClick={() => {
                            setFormData(prev => ({
                              ...prev,
                              notes: `I am highly interested in attending "${fest.name}" in ${fest.location}. Please help me formulate an experiential cultural itinerary.`
                            }));
                            setActiveTab('concierge');
                          }}
                          className="text-[10px] font-bold uppercase tracking-widest text-heritage-red hover:text-heritage-red-light hover:underline flex items-center gap-1 group/btn cursor-pointer"
                        >
                          <span>Plan Trip</span>
                          <ArrowRight className="w-2.5 h-2.5 group-hover/btn:translate-x-0.5 transition-transform" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Fallback empty state */}
              {filteredFestivals.length === 0 && (
                <div className="text-center py-20 bg-white border border-gold/15 rounded-2xl">
                  <Info className="w-8 h-8 text-gold mx-auto mb-3" />
                  <p className="font-serif text-lg font-bold text-charcoal">No festivals found matching your search</p>
                  <p className="text-xs text-charcoal/60 mt-1">Try typing a different keyword or resetting your regional filters.</p>
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedRegion('all');
                    }}
                    className="mt-4 px-6 py-2 bg-gold hover:bg-gold-light text-charcoal text-xs uppercase tracking-widest font-bold rounded-sm transition-all"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: INTERACTIVE FESTIVAL MATCHER */}
          {activeTab === 'matcher' && (
            <motion.div
              key="matcher-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white border-2 border-gold/20 rounded-3xl p-8 sm:p-12 shadow-xl space-y-8">
                
                <div className="text-center space-y-2">
                  <Award className="w-8 h-8 text-gold mx-auto" />
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                    Find Your Perfect Festival Match
                  </h2>
                  <p className="text-xs sm:text-sm text-charcoal/70 max-w-lg mx-auto font-sans">
                    Answer three simple queries to immediately unlock hand-selected cultural events from our global list of 50 iconic festivals.
                  </p>
                </div>

                {/* Question form */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 font-sans">
                  
                  {/* Q1: Region choice */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gold block">
                      1. Preferred Region
                    </label>
                    <select
                      value={matcherRegion}
                      onChange={(e) => {
                        setMatcherRegion(e.target.value);
                        setIsMatchedSubmitted(false);
                      }}
                      className="w-full px-4 py-3 bg-cream/40 border border-gold/20 rounded-lg text-xs focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="">Select Region</option>
                      <option value="North">North India (Himalayas & Heritage)</option>
                      <option value="West">West India (Desert Dunes & Dance)</option>
                      <option value="South">South India (Sacred Temples & Backwaters)</option>
                      <option value="East & Northeast">East & Northeast India (Tribes & Arts)</option>
                    </select>
                  </div>

                  {/* Q2: Season choice */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gold block">
                      2. Travel Season
                    </label>
                    <select
                      value={matcherSeason}
                      onChange={(e) => {
                        setMatcherSeason(e.target.value);
                        setIsMatchedSubmitted(false);
                      }}
                      className="w-full px-4 py-3 bg-cream/40 border border-gold/20 rounded-lg text-xs focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="">Select Season</option>
                      <option value="winter">Winter (Nov - Feb)</option>
                      <option value="spring">Spring (Mar - Apr)</option>
                      <option value="monsoon">Monsoon (Jun - Sep)</option>
                      <option value="autumn">Autumn (Sep - Nov)</option>
                    </select>
                  </div>

                  {/* Q3: Cultural Vibe */}
                  <div className="space-y-2">
                    <label className="text-[11px] font-bold uppercase tracking-widest text-gold block">
                      3. Emotional Vibe
                    </label>
                    <select
                      value={matcherVibe}
                      onChange={(e) => {
                        setMatcherVibe(e.target.value);
                        setIsMatchedSubmitted(false);
                      }}
                      className="w-full px-4 py-3 bg-cream/40 border border-gold/20 rounded-lg text-xs focus:outline-none focus:border-gold cursor-pointer"
                    >
                      <option value="">Select Vibe</option>
                      <option value="spiritual">Deeply Spiritual & Sacred</option>
                      <option value="energetic">High-Energy & Rhythm</option>
                      <option value="bohemian">Bohemian Lit, Arts & Music</option>
                      <option value="tribal">Indigenous & Warrior Heritage</option>
                    </select>
                  </div>

                </div>

                <div className="text-center pt-4">
                  <button
                    onClick={() => setIsMatchedSubmitted(true)}
                    disabled={!matcherRegion && !matcherSeason && !matcherVibe}
                    className="px-10 py-3.5 bg-charcoal hover:bg-charcoal/90 text-cream disabled:bg-charcoal/20 disabled:text-charcoal/40 text-xs uppercase tracking-widest font-bold rounded shadow-lg transition-all cursor-pointer"
                  >
                    Match Me Now
                  </button>
                </div>

                {/* Results Section */}
                <AnimatePresence>
                  {isMatchedSubmitted && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="border-t border-gold/15 pt-8 space-y-6 overflow-hidden"
                    >
                      <h3 className="font-serif text-xl font-bold text-center text-charcoal">
                        Your Curated Festival Recommendations
                      </h3>

                      {matches.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          {matches.map((match) => (
                            <div 
                              key={match.id} 
                              className="bg-cream/40 border border-gold/20 p-5 rounded-xl hover:border-gold/50 transition-all flex flex-col justify-between"
                            >
                              <div>
                                <span className="text-[8px] font-bold uppercase tracking-widest text-gold bg-charcoal px-2 py-0.5 rounded">
                                  {match.region} India • {match.bestTime}
                                </span>
                                <h4 className="font-serif text-base font-bold text-charcoal mt-2 flex items-center gap-1">
                                  <Compass className="w-4 h-4 text-heritage-red" />
                                  <span>{match.name}</span>
                                </h4>
                                <p className="text-[10px] text-charcoal/50 font-sans font-medium mt-0.5">
                                  {match.location}
                                </p>
                                <p className="text-xs text-charcoal/80 mt-3 font-sans leading-relaxed line-clamp-3">
                                  {match.significance} {match.vibe}
                                </p>
                              </div>

                              <div className="pt-4 flex justify-between items-center border-t border-gold/10 mt-4">
                                <button
                                  onClick={() => toggleWishlist(match.id)}
                                  className="text-xs text-charcoal/60 hover:text-heritage-red flex items-center gap-1 cursor-pointer"
                                >
                                  <Heart className={`w-3.5 h-3.5 ${isInWishlist(match.id) ? 'fill-heritage-red text-heritage-red' : ''}`} />
                                  <span>{isInWishlist(match.id) ? 'Saved' : 'Save'}</span>
                                </button>
                                <button
                                  onClick={() => {
                                    setFormData(prev => ({
                                      ...prev,
                                      notes: `I utilized the Festival Matcher and got matched to "${match.name}". I would love to formulate a complete travel strategy centering this event.`
                                    }));
                                    setActiveTab('concierge');
                                  }}
                                  className="text-[10px] font-bold uppercase tracking-wider text-heritage-red hover:underline flex items-center gap-1 cursor-pointer"
                                >
                                  <span>Formulate Plan</span>
                                  <ArrowRight className="w-3 h-3" />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-6">
                          <p className="text-xs text-charcoal/60 font-sans">
                            No perfect match found for this narrow combination. Try changing your parameters (e.g. choose a different season or vibe).
                          </p>
                        </div>
                      )}

                      <div className="text-center pt-2">
                        <button
                          onClick={() => {
                            setMatcherRegion('');
                            setMatcherSeason('');
                            setMatcherVibe('');
                            setIsMatchedSubmitted(false);
                          }}
                          className="text-xs font-bold uppercase tracking-widest text-heritage-red hover:underline cursor-pointer"
                        >
                          Clear Selections
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          )}

          {/* TAB 3: TRAVEL CONCIERGE & INQUIRY */}
          {activeTab === 'concierge' && (
            <motion.div
              key="concierge-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-xl mx-auto"
            >
              <div className="bg-white border border-gold/15 rounded-3xl p-8 sm:p-10 shadow-xl space-y-6">
                
                <div className="text-center space-y-1">
                  <MessageSquare className="w-8 h-8 text-gold mx-auto" />
                  <h2 className="font-serif text-2xl font-bold text-charcoal">
                    Consult Our Tourism Strategist
                  </h2>
                  <p className="text-xs text-charcoal/60 font-sans">
                    Plan your experiential cultural journey to the subcontinent with our luxury planning experts.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="text-center py-10 space-y-4"
                    >
                      <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-sm">
                        <Check className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal">Strategy Inquiry Logged</h3>
                      <p className="text-xs text-charcoal/70 max-w-sm mx-auto font-sans leading-relaxed">
                        Your custom festival travel parameters have been securely stored. Our expert cultural guide will formulate a bespoke travel proposal and contact you shortly.
                      </p>
                      <p className="text-[10px] text-gold font-mono uppercase tracking-widest">
                        Inquiry Reference: CF-LOG-{Math.floor(100000 + Math.random() * 900000)}
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5 font-sans text-xs text-charcoal">
                      
                      {/* Name input */}
                      <div className="space-y-1">
                        <label className="font-bold uppercase tracking-wider text-charcoal/60">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                          placeholder="Lord/Lady Traveler"
                          className="w-full px-4 py-3 bg-cream/40 border border-gold/15 rounded-lg focus:outline-none focus:border-gold"
                        />
                      </div>

                      {/* Contact details */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="font-bold uppercase tracking-wider text-charcoal/60">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                            placeholder="traveler@luxury.com"
                            className="w-full px-4 py-3 bg-cream/40 border border-gold/15 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-bold uppercase tracking-wider text-charcoal/60">
                            Phone (Optional)
                          </label>
                          <input
                            type="text"
                            value={formData.phone}
                            onChange={(e) => setFormData(p => ({ ...p, phone: e.target.value }))}
                            placeholder="+1 (555) 019-2834"
                            className="w-full px-4 py-3 bg-cream/40 border border-gold/15 rounded-lg focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      {/* Multiselect Interests */}
                      <div className="space-y-2">
                        <label className="font-bold uppercase tracking-wider text-charcoal/60">
                          Primary Interest Categories
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {['Himalayan Buddhist', 'Rajasthani Royal', 'River Pilgrimages', 'Northeast Tribal', 'Coastal Carnivals', 'South Sacred Rhythms'].map((interest) => {
                            const isSelected = formData.interests.includes(interest);
                            return (
                              <button
                                type="button"
                                key={interest}
                                onClick={() => toggleInterest(interest)}
                                className={`p-2.5 rounded-lg border text-left flex items-center justify-between transition-colors cursor-pointer ${
                                  isSelected 
                                    ? 'bg-gold/10 border-gold text-charcoal font-semibold' 
                                    : 'bg-cream/20 border-gold/15 text-charcoal/70 hover:bg-cream/40'
                                }`}
                              >
                                <span>{interest}</span>
                                {isSelected && <Check className="w-3 h-3 text-gold" />}
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Notes / Special Instructions */}
                      <div className="space-y-1">
                        <label className="font-bold uppercase tracking-wider text-charcoal/60">
                          Bespoke Planning Instructions
                        </label>
                        <textarea
                          rows={4}
                          value={formData.notes}
                          onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))}
                          placeholder="Note down any special dietary, mobility, or photographic access preferences..."
                          className="w-full px-4 py-3 bg-cream/40 border border-gold/15 rounded-lg focus:outline-none focus:border-gold resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gold hover:bg-gold-light text-charcoal uppercase tracking-widest font-bold rounded shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                        <span>Formulate Cultural Blueprint</span>
                      </button>

                    </form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

    </div>
  );
}
