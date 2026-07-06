import { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { ADVENTURE_ACTIVITIES, AdventureActivity, AdventureRoute, getRelatedAdventureActivities } from '../data/adventureData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Compass, Sparkles, MapPin, CheckCircle, Shield, Briefcase, Calendar, Info, Clock, Route, Award, Search, Filter, SlidersHorizontal, ChevronRight, AlertTriangle, Activity } from 'lucide-react';

// 1. Adventure Activities Catalog / Hub Page (/things-to-do/adventure)
export function AdventureHub() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTerrain, setSelectedTerrain] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');

  // Filter Categories
  const terrains = ['All', 'Himalayas', 'Waters', 'Deserts', 'Forests', 'Skies', 'Plains'];
  const difficulties = ['All', 'Easy', 'Moderate', 'Demanding', 'Extreme'];

  // Filter Logic
  const filteredActivities = useMemo(() => {
    return ADVENTURE_ACTIVITIES.filter((act) => {
      // Matches Search Query
      const matchesSearch =
        act.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        act.altitudeOrLocation.toLowerCase().includes(searchQuery.toLowerCase());

      // Matches Terrain Filter
      const matchesTerrain = selectedTerrain === 'All' || act.terrainType === selectedTerrain;

      // Matches Difficulty Filter
      const matchesDifficulty = selectedDifficulty === 'All' || act.difficulty === selectedDifficulty;

      return matchesSearch && matchesTerrain && matchesDifficulty;
    });
  }, [searchQuery, selectedTerrain, selectedDifficulty]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTerrain('All');
    setSelectedDifficulty('All');
  };

  return (
    <div className="bg-cream min-h-screen py-16" id="adventure-activities-hub-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">WILD FRONTIERS</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
            Adventure & Expeditions
          </h1>
          <p className="mt-4 text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
            From the frozen high-altitude canyons of Ladakh to warm, volcanic coral reefs in the Andaman sea, explore India\'s dramatic geography and conquer thrilling outdoor trails.
          </p>
        </div>

        {/* Filter Widget */}
        <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-md mb-12 space-y-6" id="adventure-hub-filters">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative md:col-span-6">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="text"
                placeholder="Search expeditions by name, terrain, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream/30 border border-gold/15 rounded-xl text-sm font-sans focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/40 font-medium"
              />
            </div>

            {/* Terrain Category Filter */}
            <div className="relative md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider shrink-0 flex items-center gap-1">
                <Compass className="w-3.5 h-3.5 text-gold" />
                <span>Terrain:</span>
              </span>
              <select
                value={selectedTerrain}
                onChange={(e) => setSelectedTerrain(e.target.value)}
                className="w-full bg-cream/30 border border-gold/15 rounded-xl py-2.5 px-4 text-xs font-bold text-charcoal uppercase tracking-wider focus:outline-none focus:border-gold cursor-pointer"
              >
                {terrains.map((terr) => (
                  <option key={terr} value={terr}>
                    {terr === 'All' ? 'All Terrains' : terr}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div className="relative md:col-span-3 flex items-center gap-3">
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider shrink-0 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
                <span>Risk:</span>
              </span>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full bg-cream/30 border border-gold/15 rounded-xl py-2.5 px-4 text-xs font-bold text-charcoal uppercase tracking-wider focus:outline-none focus:border-gold cursor-pointer"
              >
                {difficulties.map((diff) => (
                  <option key={diff} value={diff}>
                    {diff === 'All' ? 'All Difficulties' : `${diff} Level`}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Info Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gold/10">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-dark animate-pulse"></span>
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
                Found <strong className="text-heritage-red">{filteredActivities.length}</strong> Wilderness Activities
              </p>
            </div>
            {(searchQuery || selectedTerrain !== 'All' || selectedDifficulty !== 'All') && (
              <button
                onClick={handleResetFilters}
                className="text-xs font-black uppercase tracking-widest text-heritage-red hover:underline cursor-pointer"
              >
                Reset Search Filters &times;
              </button>
            )}
          </div>
        </div>

        {/* Adventure Grid */}
        {filteredActivities.length === 0 ? (
          <div className="bg-white border border-gold/15 rounded-2xl p-16 text-center max-w-xl mx-auto shadow-sm">
            <Route className="w-12 h-12 text-gold/40 mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">No Expeditions Found</h3>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans mb-6">
              We couldn\'t find any adventure activities matching your filters. Try refining your search query or choosing "All Terrains".
            </p>
            <button
              onClick={handleResetFilters}
              className="px-5 py-2.5 bg-heritage-red text-cream text-xs font-bold tracking-wider uppercase rounded-xl shadow-md hover:bg-heritage-red-light transition-colors cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredActivities.map((act) => {
              const stateNames = act.recommendedStates
                .map((id) => DESTINATIONS.find((d) => d.id === id)?.name)
                .filter(Boolean)
                .join(', ');

              return (
                <div
                  key={act.id}
                  onClick={() => navigate('adventure-activity-detail', { activityId: act.id })}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      
                      {/* Difficulty Badge */}
                      <div className={`absolute top-4 right-4 text-cream font-sans text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm ${
                        act.difficulty === 'Extreme' ? 'bg-heritage-red' :
                        act.difficulty === 'Demanding' ? 'bg-orange-600' :
                        act.difficulty === 'Moderate' ? 'bg-amber-600' : 'bg-teal-700'
                      }`}>
                        {act.difficulty}
                      </div>

                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span className="text-xs font-semibold uppercase tracking-wider truncate max-w-[200px]">
                          {stateNames || 'India'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="text-[10px] font-bold tracking-widest text-gold uppercase">{act.category}</span>
                        <span className="text-charcoal/20">•</span>
                        <span className="text-[10px] font-bold text-teal-dark uppercase">{act.terrainType}</span>
                      </div>
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors line-clamp-1">
                        {act.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-charcoal-light font-sans line-clamp-3 leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 border-t border-gold/10 mt-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-charcoal/80">
                    <span className="text-gold">Season: {act.bestSeason.split(' (')[0]}</span>
                    <span className="text-heritage-red group-hover:translate-x-1.5 transition-transform flex items-center gap-1 shrink-0">
                      <span>Explore activity</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
}

// 2. Adventure Activity Detail Page (/adventure-activity-detail)
export function AdventureDetail() {
  const { route, navigate } = useRouter();
  const { activityId } = route.params || {};

  // Find activity
  const act = ADVENTURE_ACTIVITIES.find((a) => a.id === activityId) || ADVENTURE_ACTIVITIES[0];

  if (!act) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Adventure Activity Not Found</h2>
        <button onClick={() => navigate('adventure')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to Adventures
        </button>
      </div>
    );
  }

  // Cross-link state recommendations
  const matchedStates = DESTINATIONS.filter((s) => act.recommendedStates.includes(s.id));
  const relatedExp = getRelatedAdventureActivities(act.id, 3);

  return (
    <div className="bg-cream min-h-screen py-12" id={`adventure-detail-${act.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('adventure')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Adventures Hub</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">{act.category} EXPLORATION</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-[10px] font-bold text-teal-dark tracking-[0.2em] uppercase">{act.terrainType} Category</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-bold tracking-tight mb-3">
                {act.title}
              </h1>
              <p className="text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic border-l-4 border-gold pl-4 py-1">
                “{act.tagline}”
              </p>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={act.image}
                alt={act.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* In-Depth Description */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-3">
                Narrative Overview
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed">
                {act.intro}
              </p>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed">
                {act.description}
              </p>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed pt-4 border-t border-gold/5">
                {act.experienceDeepDive}
              </p>
            </div>

            {/* MULTIPLE ROUTES SUB-PAGES SECTION */}
            {act.routes && act.routes.length > 0 && (
              <div className="space-y-6 bg-white border border-gold/15 rounded-2xl p-8 shadow-sm">
                <div className="flex items-center gap-2 border-b border-gold/10 pb-3">
                  <Route className="w-6 h-6 text-heritage-red" />
                  <h3 className="font-serif text-2xl font-bold text-charcoal">Available Routes & Excursions</h3>
                </div>
                <p className="text-xs sm:text-sm text-charcoal-light font-sans">
                  This legendary activity contains multiple distinct trails. Click on any route to open its dedicated individual page featuring day-by-day itineraries and topographic guides.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {act.routes.map((routeItem) => (
                    <div
                      key={routeItem.id}
                      onClick={() => navigate('adventure-route-detail', { activityId: act.id, routeId: routeItem.id })}
                      className="bg-cream-dark/40 border border-gold/10 hover:border-gold/30 rounded-xl overflow-hidden cursor-pointer group hover:shadow-md transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="relative h-40 overflow-hidden">
                          <img
                            src={routeItem.image}
                            alt={routeItem.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute top-3 right-3 text-[9px] font-bold text-cream bg-black/40 px-2 py-0.5 rounded-full uppercase tracking-wider">
                            {routeItem.difficulty}
                          </div>
                          {routeItem.altitude && (
                            <div className="absolute bottom-3 left-3 text-[10px] font-semibold text-cream bg-gold/90 px-2 py-0.5 rounded shadow-sm">
                              Max Elev: {routeItem.altitude}
                            </div>
                          )}
                        </div>
                        <div className="p-4">
                          <h4 className="font-serif text-base font-bold text-charcoal group-hover:text-heritage-red transition-colors">
                            {routeItem.name}
                          </h4>
                          <p className="text-xs text-charcoal-light font-sans line-clamp-2 mt-1 leading-relaxed">
                            {routeItem.description}
                          </p>
                        </div>
                      </div>
                      <div className="p-4 pt-0 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                        <span>Duration: {routeItem.duration}</span>
                        <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          <span>Open route guide</span>
                          <span>&rarr;</span>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Signature Encounters & Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {act.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="bg-cream-dark border-l-4 border-gold p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <CheckCircle className="w-5 h-5 text-gold mb-3" />
                      <p className="text-xs sm:text-sm font-sans text-charcoal-light leading-relaxed font-semibold">{hl}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended States Grid (Cross-tagging!) */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Top Locations to Experience This</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {matchedStates.map((state) => (
                  <div
                    key={state.id}
                    onClick={() => navigate('destination-detail', { id: state.id })}
                    className="bg-white border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all cursor-pointer flex group shadow-sm animate-fade-in"
                  >
                    <div className="w-24 h-24 overflow-hidden shrink-0">
                      <img
                        src={state.image}
                        alt={state.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-center">
                      <span className="text-[9px] uppercase tracking-wider text-gold font-bold">{state.region} Region</span>
                      <h4 className="font-serif text-base font-bold text-charcoal mt-0.5 group-hover:text-heritage-red transition-colors">{state.name}</h4>
                      <span className="text-[10px] text-teal-dark font-sans font-semibold mt-1 block">
                        Explore State Guide &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Practical Logistics Ledger Widget */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-black tracking-widest text-gold uppercase block border-b border-gold/10 pb-2">PRACTICAL LEDGER</span>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-bold uppercase tracking-wider border-b border-gold/10 pb-4">
                <div>
                  <span className="text-[10px] text-charcoal-light tracking-wide block mb-0.5">Difficulty</span>
                  <span className={`text-xs px-2 py-0.5 rounded text-cream inline-block font-black ${
                    act.difficulty === 'Extreme' ? 'bg-heritage-red' :
                    act.difficulty === 'Demanding' ? 'bg-orange-600' : 'bg-teal-700'
                  }`}>{act.difficulty}</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-light tracking-wide block mb-0.5">Duration</span>
                  <span className="text-charcoal block">{act.duration}</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-light tracking-wide block mb-0.5">Altitude/Location</span>
                  <span className="text-charcoal block truncate">{act.altitudeOrLocation.split(',')[0]}</span>
                </div>
                <div>
                  <span className="text-[10px] text-charcoal-light tracking-wide block mb-0.5">Best Season</span>
                  <span className="text-charcoal block truncate">{act.bestSeason.split(' (')[0]}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3 items-start border-b border-gold/5 pb-3">
                  <Shield className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Safety Protocol</span>
                    <p className="text-[11px] font-sans text-charcoal-light font-medium mt-1 leading-relaxed">{act.practicalInformation.safety}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-b border-gold/5 pb-3">
                  <Briefcase className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Gear Checklist</span>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {act.practicalInformation.gearNeeded.map((g, i) => (
                        <span key={i} className="text-[9px] bg-cream font-bold text-charcoal px-2 py-0.5 rounded border border-gold/10">
                          {g}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 items-start border-b border-gold/5 pb-3">
                  <Info className="w-5 h-5 text-teal-dark mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Permits Required</span>
                    <p className="text-[11px] font-sans text-charcoal-light font-medium mt-1 leading-relaxed">{act.practicalInformation.permitsRequired}</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Activity className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Physical Preparation</span>
                    <p className="text-[11px] font-sans text-charcoal-light font-medium mt-1 leading-relaxed">{act.practicalInformation.physicalPrep}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Planner CTA Widget */}
            <div className="bg-[#134E4A] text-cream rounded-2xl p-6 border border-gold/20 shadow-lg space-y-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-teal-dark">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Integrate into Trip Plan</h3>
              <p className="text-xs font-sans text-cream/80 leading-relaxed">
                Add {act.title} directly into your customized India tour planner. Build a beautiful, shareable itinerary of your dream journey.
              </p>
              <button
                onClick={() => navigate('trip-planner')}
                className="w-full py-2.5 bg-gold hover:bg-gold-light text-teal-dark font-bold text-xs uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md text-center"
              >
                Plan My Journey &rarr;
              </button>
            </div>

          </div>

        </div>

        {/* Similar recommendations */}
        <div className="mt-20 pt-12 border-t border-gold/20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-1">UNLIMITED HORIZON</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">Other Wild Adventures</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedExp.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate('adventure-activity-detail', { activityId: item.id })}
                className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-gold font-sans text-[9px] uppercase tracking-wider font-bold">
                      {item.category}
                    </span>
                    <h4 className="text-white text-base font-serif font-bold mt-0.5">{item.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                  <span className="text-[10px] font-sans font-bold text-heritage-red group-hover:text-heritage-red-light mt-3 block">
                    Learn More &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

// 3. Adventure Route Detail Page (/adventure-route-detail)
export function AdventureRouteDetail() {
  const { route, navigate } = useRouter();
  const { activityId, routeId } = route.params || {};

  const act = ADVENTURE_ACTIVITIES.find((a) => a.id === activityId);
  const selectedRoute = act?.routes?.find((r) => r.id === routeId);

  if (!act || !selectedRoute) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Route Guide Not Found</h2>
        <button
          onClick={() => navigate('adventure')}
          className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded"
        >
          Return to Adventures
        </button>
      </div>
    );
  }

  // Find states matching this route specifically or the parent activity
  const matchedStates = DESTINATIONS.filter((s) => act.recommendedStates.includes(s.id));

  return (
    <div className="bg-cream min-h-screen py-12" id={`adventure-route-${selectedRoute.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('adventure-activity-detail', { activityId: act.id })}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {act.title} Overview</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">INDIVIDUAL EXPEDITION PROFILE</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-[10px] font-bold text-teal-dark tracking-[0.2em] uppercase">{selectedRoute.difficulty} LEVEL</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-bold tracking-tight mb-3">
                {selectedRoute.name}
              </h1>
              <p className="text-sm sm:text-base font-sans text-charcoal-light font-medium leading-relaxed">
                {selectedRoute.description}
              </p>
            </div>

            {/* Cinematic Route Header Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={selectedRoute.image}
                alt={selectedRoute.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* In-Depth Route Highlights */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Specific Route Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {selectedRoute.highlights.map((hl, idx) => (
                  <div key={idx} className="bg-white border border-gold/15 p-6 rounded-xl shadow-sm flex flex-col justify-between">
                    <div>
                      <CheckCircle className="w-5 h-5 text-gold mb-3" />
                      <p className="text-xs sm:text-sm font-sans text-charcoal-light leading-relaxed font-semibold">{hl}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DAY-BY-DAY INTERACTIVE ITINERARY TIMELINE */}
            <div className="space-y-8 bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm">
              <div className="flex items-center gap-2.5 border-b border-gold/10 pb-4">
                <Route className="w-6 h-6 text-heritage-red" />
                <h3 className="font-serif text-2xl font-bold text-charcoal">Expedition Itinerary</h3>
              </div>
              
              <div className="relative border-l border-gold/30 ml-3 space-y-10 pl-6 sm:pl-8">
                {selectedRoute.itinerary.map((dayItem, idx) => (
                  <div key={idx} className="relative">
                    {/* Node Dot */}
                    <span className="absolute -left-[35px] sm:-left-[43px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-cream border-2 border-gold ring-4 ring-white">
                      <span className="h-2 w-2 rounded-full bg-heritage-red" />
                    </span>
                    
                    <div>
                      <span className="inline-block bg-gold/15 text-heritage-red text-[10px] font-black uppercase px-2.5 py-0.5 rounded tracking-widest mb-1.5">
                        {dayItem.day}
                      </span>
                      <h4 className="font-serif text-lg font-bold text-charcoal">
                        {dayItem.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans mt-1">
                        {dayItem.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety advisory */}
            <div className="bg-red-50/50 border border-heritage-red/15 rounded-2xl p-6 flex gap-4 items-start">
              <AlertTriangle className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
              <div>
                <h4 className="font-serif text-base font-bold text-heritage-red">High-Altitude Wilderness Advisory</h4>
                <p className="text-xs text-charcoal-light leading-relaxed font-sans mt-1">
                  Wilderness trails present intrinsic meteorological and physical trials. This route involves thin air, steep ascents, or freezing temperatures. Ensure you have fully acclimatized, hire local registered guides, and adhere to forest department conservation guidelines.
                </p>
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Route Ledger Widget */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-black tracking-widest text-gold uppercase block border-b border-gold/10 pb-2">ROUTE PROFILE</span>
              
              <div className="space-y-4">
                {selectedRoute.altitude && (
                  <div className="flex justify-between items-center border-b border-gold/5 pb-2.5">
                    <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider">Max Elevation</span>
                    <span className="text-xs font-black text-heritage-red">{selectedRoute.altitude}</span>
                  </div>
                )}
                <div className="flex justify-between items-center border-b border-gold/5 pb-2.5">
                  <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider">Duration</span>
                  <span className="text-xs font-bold text-charcoal">{selectedRoute.duration}</span>
                </div>
                <div className="flex justify-between items-center border-b border-gold/5 pb-2.5">
                  <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider">Difficulty Risk</span>
                  <span className={`text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded text-cream ${
                    selectedRoute.difficulty === 'Extreme' ? 'bg-heritage-red' :
                    selectedRoute.difficulty === 'Demanding' ? 'bg-orange-600' : 'bg-teal-700'
                  }`}>{selectedRoute.difficulty}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider">Category</span>
                  <span className="text-xs font-bold text-charcoal">{act.category}</span>
                </div>
              </div>
            </div>

            {/* Host State Crosslink Card */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-4">
              <span className="text-[10px] font-black tracking-widest text-gold uppercase block">HOST REGIONS & STATES</span>
              <div className="space-y-3">
                {matchedStates.map((state) => (
                  <div
                    key={state.id}
                    onClick={() => navigate('destination-detail', { id: state.id })}
                    className="flex items-center gap-3 bg-cream/40 border border-gold/10 hover:border-gold/30 rounded-xl p-3 cursor-pointer group transition-all"
                  >
                    <img
                      src={state.image}
                      alt={state.name}
                      className="w-12 h-12 rounded-lg object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="text-xs font-black uppercase text-charcoal group-hover:text-heritage-red transition-colors">
                        {state.name}
                      </h4>
                      <span className="text-[10px] text-teal-dark font-sans font-semibold">View state details &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical Preparations Tips */}
            <div className="bg-[#134E4A] text-cream rounded-2xl p-6 border border-gold/20 shadow-lg space-y-4">
              <Award className="w-8 h-8 text-gold" />
              <h3 className="font-serif text-lg font-bold text-white">Required Gear & Prep</h3>
              <p className="text-xs font-sans text-cream/80 leading-relaxed">
                Ensure you pack sturdy high-ankle boots, warm down clothing (-10°C rated for high altitudes), a headlamp, and water purification tablets. Conditioning cardio preparation starting 4 weeks before arrival will significantly elevate your comfort and safety.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
