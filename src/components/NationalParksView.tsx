import { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { NATIONAL_PARKS, getRelatedItems } from '../data/experientialData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Info, ShieldAlert, Heart, MapPin, Compass, Sparkles, Search, Filter, SlidersHorizontal } from 'lucide-react';

// 1. National Parks Grid / Index Page (/national-parks)
export function NationalParksGrid() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');

  // Species mapping for quick filtering
  const speciesFilters = [
    { label: 'All Species', value: 'All' },
    { label: '🐅 Tigers', value: 'tiger' },
    { label: '🦁 Asiatic Lions', value: 'lion' },
    { label: '🐘 Elephants', value: 'elephant' },
    { label: '🦏 One-horned Rhinos', value: 'rhino' },
    { label: '🐆 Snow Leopards', value: 'snow leopard' },
    { label: '🦅 Birds & Avifauna', value: 'bird' },
  ];

  // Regions list
  const regions = ['All', 'North', 'South', 'East', 'West', 'Northeast', 'Central'];

  // Filter national parks
  const filteredParks = useMemo(() => {
    return NATIONAL_PARKS.filter((park) => {
      const stateObj = DESTINATIONS.find((d) => d.id === park.stateId);
      const region = stateObj?.region || '';

      // Search query filter
      const matchesSearch =
        park.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        park.keyFauna.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (stateObj?.name || '').toLowerCase().includes(searchQuery.toLowerCase());

      // Species filter
      const matchesSpecies =
        selectedSpecies === 'All' ||
        park.keyFauna.some((f) => f.toLowerCase().includes(selectedSpecies.toLowerCase())) ||
        park.description.toLowerCase().includes(selectedSpecies.toLowerCase());

      // Region filter
      const matchesRegion = selectedRegion === 'All' || region === selectedRegion;

      return matchesSearch && matchesSpecies && matchesRegion;
    });
  }, [searchQuery, selectedSpecies, selectedRegion]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedSpecies('All');
    setSelectedRegion('All');
  };

  return (
    <div className="bg-cream min-h-screen py-16" id="national-parks-grid-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">WILD INDIA DIRECTORY</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
            Legendary Wildlife Sanctuaries
          </h1>
          <p className="mt-4 text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
            Home to major global biosphere reserves, India preserves crucial sanctuaries for endangered species. Traverse wet tall grasslands, dense sal forests, alpine heights, and dry-deciduous sanctuaries where tigers, elephants, and rhinos roam free.
          </p>
        </div>

        {/* Filters and Search Bar Widget */}
        <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-md mb-12 space-y-6" id="parks-directory-filters">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* Search Input */}
            <div className="relative md:col-span-7">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold" />
              <input
                type="text"
                placeholder="Search sanctuaries by name, key fauna, or state..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-cream/30 border border-gold/15 rounded-xl text-sm font-sans focus:outline-none focus:border-gold transition-colors text-charcoal placeholder:text-charcoal/40 font-medium"
              />
            </div>

            {/* Region Filter Dropdown */}
            <div className="relative md:col-span-5 flex items-center gap-3">
              <span className="text-xs font-bold text-charcoal uppercase tracking-wider shrink-0 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5 text-gold" />
                <span>Region:</span>
              </span>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full bg-cream/30 border border-gold/15 rounded-xl py-3 px-4 text-xs font-bold text-charcoal uppercase tracking-wider focus:outline-none focus:border-gold cursor-pointer"
              >
                {regions.map((reg) => (
                  <option key={reg} value={reg}>
                    {reg === 'All' ? 'All Regions' : `${reg} India`}
                  </option>
                ))}
              </select>
            </div>

          </div>

          {/* Quick Species Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gold/10">
            <span className="text-[10px] font-black uppercase tracking-widest text-charcoal/50 mr-2 flex items-center gap-1">
              <Filter className="w-3 h-3 text-gold" />
              <span>Target Fauna:</span>
            </span>
            {speciesFilters.map((spec) => (
              <button
                key={spec.value}
                onClick={() => setSelectedSpecies(spec.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                  selectedSpecies === spec.value
                    ? 'bg-heritage-red text-cream border-heritage-red shadow-sm'
                    : 'bg-cream/40 text-charcoal border-gold/10 hover:border-gold/30 hover:bg-cream/70'
                }`}
              >
                {spec.label}
              </button>
            ))}
          </div>
        </div>

        {/* Counter & Clear Button */}
        <div className="flex justify-between items-center mb-8">
          <p className="text-xs font-bold uppercase tracking-wider text-charcoal/60">
            Showing <strong className="text-heritage-red">{filteredParks.length}</strong> of {NATIONAL_PARKS.length} Protected Sanctuaries
          </p>
          {(searchQuery || selectedSpecies !== 'All' || selectedRegion !== 'All') && (
            <button
              onClick={handleResetFilters}
              className="text-xs font-black uppercase tracking-widest text-heritage-red hover:underline cursor-pointer"
            >
              Reset Filters &times;
            </button>
          )}
        </div>

        {/* National Parks Grid */}
        {filteredParks.length === 0 ? (
          <div className="bg-white border border-gold/15 rounded-2xl p-16 text-center max-w-xl mx-auto shadow-sm">
            <Compass className="w-12 h-12 text-gold/40 mx-auto mb-4 animate-pulse" />
            <h3 className="font-serif text-xl font-bold text-charcoal mb-2">No Protected Reserves Found</h3>
            <p className="text-xs sm:text-sm text-charcoal-light leading-relaxed font-sans mb-6">
              We couldn't find any national parks matching your current filters. Try refining your search query or choosing "All Species" and "All Regions".
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
            {filteredParks.map((park) => {
              const stateObj = DESTINATIONS.find((d) => d.id === park.stateId);
              return (
                <div
                  key={park.id}
                  onClick={() => navigate('national-park-detail', { parkId: park.id })}
                  className="bg-white rounded-2xl overflow-hidden shadow-md border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={park.image}
                        alt={park.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream">
                        <MapPin className="w-3.5 h-3.5 text-gold" />
                        <span className="text-xs font-semibold uppercase tracking-wider">{stateObj?.name || 'India'}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors">
                        {park.name}
                      </h2>
                      <p className="text-xs sm:text-sm text-charcoal-light font-sans line-clamp-3 leading-relaxed">
                        {park.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 border-t border-gold/10 mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-gold truncate max-w-[170px]">Fauna: {park.keyFauna[0]} & More</span>
                    <span className="text-heritage-red group-hover:translate-x-1.5 transition-transform flex items-center gap-1 shrink-0">
                      <span>Explore Park</span>
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

// 2. National Park Detail Page (/national-parks/:parkId)
export function NationalParkDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const { parkId } = route.params || {};

  // Find park
  const park = NATIONAL_PARKS.find(p => p.id === parkId) || NATIONAL_PARKS[0];

  if (!park) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Park Profile Not Found</h2>
        <button onClick={() => navigate('national-parks')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to National Parks
        </button>
      </div>
    );
  }

  const stateObj = DESTINATIONS.find(d => d.id === park.stateId);
  const isFav = isInWishlist(park.id);
  const relatedItems = getRelatedItems(park.id, 3);

  return (
    <div className="bg-cream min-h-screen py-12" id={`national-park-detail-${park.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('national-parks')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All National Parks</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">WILDLIFE PROFILE</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-xs font-bold text-teal-light tracking-[0.2em] uppercase">{stateObj?.name || 'India'}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
                  {park.name}
                </h1>
                <button
                  onClick={() => toggleWishlist(park.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    isFav ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              <p className="mt-4 text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic">
                “{park.description}”
              </p>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={park.image}
                alt={park.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Key Fauna / Animals Grid */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Key Animals & Avifauna Species</h3>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                {park.keyFauna.map((animal, idx) => (
                  <div key={idx} className="bg-white border border-gold/15 p-4 rounded-xl shadow-sm text-center flex flex-col items-center justify-center h-24">
                    <Compass className="w-5 h-5 text-gold mb-1.5" />
                    <span className="font-serif text-xs font-bold text-charcoal leading-tight block">{animal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pro-Traveler Tips */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-2xl font-bold text-charcoal">Important Safari & Visiting Protocols</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {park.tips.map((tip, idx) => (
                  <div key={idx} className="bg-cream-dark border-l-4 border-gold p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all">
                    <span className="block text-gold font-sans font-black text-xs uppercase tracking-widest mb-2">Rule {idx + 1}</span>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-light leading-relaxed font-semibold">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Logistics Widget */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">LOGISTICS LEDGER</span>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start border-b border-gold/10 pb-4">
                  <Clock className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Safari Timings</span>
                    <span className="text-xs font-sans text-charcoal-light font-semibold block mt-1 leading-relaxed">{park.safariTimings}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Info className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Best Seasonal Window</span>
                    <span className="text-xs font-sans text-charcoal-light font-semibold block mt-1 leading-relaxed">{park.bestTime}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trip Planner CTA Widget */}
            <div className="bg-[#134E4A] text-cream rounded-2xl p-6 border border-gold/20 shadow-lg space-y-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-teal-dark">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Design Your Safari Itinerary</h3>
              <p className="text-xs font-sans text-cream/80 leading-relaxed">
                Add {park.name} directly into your customized India wildlife tour. Create a multi-day itinerary with custom stops and safaris.
              </p>
              <button
                onClick={() => navigate('trip-planner')}
                className="w-full py-2.5 bg-gold hover:bg-gold-light text-teal-dark font-bold text-xs uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md text-center"
              >
                Plan My Safari &rarr;
              </button>
            </div>

          </div>

        </div>

        {/* Similar recommendations */}
        <div className="mt-20 pt-12 border-t border-gold/20">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-1">NEVER DEAD-END</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">You Might Also Like</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.path, { stateId: park.stateId, attractionId: item.id, parkId: item.id, siteId: item.id, activityId: item.id, dishId: item.id, experienceId: item.id })}
                className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name || item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-gold font-sans text-[9px] uppercase tracking-wider font-bold">
                      {item.typeName}
                    </span>
                    <h4 className="text-white text-base font-serif font-bold mt-0.5">{item.name || item.title}</h4>
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
