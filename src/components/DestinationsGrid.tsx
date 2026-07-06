import { useState, useTransition } from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { Heart, Search, Filter, MapPin, Compass, Grid, ListFilter } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function DestinationsGrid() {
  const { navigate, toggleWishlist, isInWishlist } = useRouter();
  
  // Search and Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [, startTransition] = useTransition();

  const regions = ['North', 'South', 'East', 'West', 'Northeast', 'Central'];
  const types = [
    { value: 'state', label: 'States' },
    { value: 'ut', label: 'Union Territories' }
  ];
  const tags = [
    { value: 'culture', label: 'Culture & Heritage' },
    { value: 'nature', label: 'Nature & Wildlife' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'food', label: 'Food & Cuisine' },
    { value: 'wellness', label: 'Wellness & Spirit' },
    { value: 'family', label: 'Family Travel' }
  ];

  // Filtering Logic
  const filteredDestinations = DESTINATIONS.filter((dest) => {
    const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          dest.capital.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dest.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesRegion = selectedRegion === 'all' || dest.region === selectedRegion;
    const matchesType = selectedType === 'all' || dest.type === selectedType;
    const matchesTag = selectedTag === 'all' || dest.tags.includes(selectedTag as any);

    return matchesSearch && matchesRegion && matchesType && matchesTag;
  });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegion('all');
    setSelectedType('all');
    setSelectedTag('all');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="destinations-explorer-view">
      
      {/* Editorial Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">PLACES TO GO</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
          Explore All 36 Entities
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
          From snow-capped Himalayan ridges to palm-shaded backwaters and massive white sand deserts. Walk across India's 28 sovereign states and 8 union territories.
        </p>
      </div>

      {/* Advanced Filter and Search Controls bar */}
      <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm mb-12" id="search-filter-controls-panel">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* Search Input */}
          <div className="lg:col-span-4 relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gold" />
            <input
              type="text"
              placeholder="Search states, capitals, attractions..."
              value={searchQuery}
              onChange={(e) => startTransition(() => setSearchQuery(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-gold/20 rounded-xl focus:outline-none focus:border-gold text-sm text-charcoal placeholder:text-charcoal/40"
            />
          </div>

          {/* Region Dropdown Filter */}
          <div className="lg:col-span-2 relative">
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="w-full bg-cream/50 border border-gold/20 rounded-xl px-3 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer appearance-none"
            >
              <option value="all">All Regions</option>
              {regions.map((reg) => (
                <option key={reg} value={reg}>{reg} Region</option>
              ))}
            </select>
          </div>

          {/* Administrative Type Dropdown Filter */}
          <div className="lg:col-span-2 relative">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-cream/50 border border-gold/20 rounded-xl px-3 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer appearance-none"
            >
              <option value="all">States & UTs</option>
              {types.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Experiential Tags Dropdown Filter */}
          <div className="lg:col-span-3 relative">
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full bg-cream/50 border border-gold/20 rounded-xl px-3 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer appearance-none"
            >
              <option value="all">All Travel Intent Styles</option>
              {tags.map((tag) => (
                <option key={tag.value} value={tag.value}>{tag.label}</option>
              ))}
            </select>
          </div>

          {/* Clear Filters Button */}
          <div className="lg:col-span-1 flex justify-end">
            <button
              onClick={clearFilters}
              className="w-full lg:w-auto text-center px-4 py-3 text-xs font-bold uppercase text-heritage-red hover:text-heritage-red-light hover:underline cursor-pointer"
            >
              Clear
            </button>
          </div>

        </div>
      </div>

      {/* Results Count Summary */}
      <div className="flex justify-between items-center mb-6 px-2 text-xs font-medium text-charcoal/50">
        <span>Showing {filteredDestinations.length} of 36 destinations</span>
        {(selectedRegion !== 'all' || selectedType !== 'all' || selectedTag !== 'all' || searchQuery !== '') && (
          <span className="text-heritage-red">✓ Active filters applied</span>
        )}
      </div>

      {/* Main destinations Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" id="destinations-cards-grid">
        <AnimatePresence mode="popLayout">
          {filteredDestinations.map((dest, idx) => (
            <motion.div
              layout
              key={dest.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3, delay: idx * 0.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 group flex flex-col justify-between cursor-pointer"
              onClick={() => navigate('destination-detail', { id: dest.id })}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                
                {/* Wishlist Heart Icon overlay */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(dest.id);
                  }}
                  className="absolute top-4 right-4 p-2 bg-cream/80 hover:bg-cream rounded-full text-heritage-red shadow-md transition-colors z-20"
                >
                  <Heart className={`w-4 h-4 ${isInWishlist(dest.id) ? 'fill-heritage-red' : ''}`} />
                </button>

                {/* Tags and Metadata on top of Image */}
                <div className="absolute bottom-4 left-4 text-cream z-10">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-gold-light">
                    {dest.region} • {dest.type === 'state' ? 'State' : 'UT'}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1 leading-none">{dest.name}</h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-charcoal/50 mb-3">
                    <MapPin className="w-3.5 h-3.5 text-gold" />
                    <span>Capital: <strong className="font-semibold">{dest.capital}</strong></span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans line-clamp-3 mb-6">
                    {dest.description}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-gold/10 pt-4 mt-auto">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-heritage-red group-hover:text-heritage-red-light">
                    Explore Guide &rarr;
                  </span>
                  <span className="text-[9px] uppercase font-semibold text-charcoal/40 font-sans">
                    {dest.bestTimeToVisit}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No results block */}
      {filteredDestinations.length === 0 && (
        <div className="text-center py-20 bg-white border border-gold/10 rounded-2xl shadow-sm">
          <Compass className="w-16 h-16 text-gold/30 mx-auto mb-4 animate-spin" style={{ animationDuration: '8s' }} />
          <h3 className="font-serif text-xl font-bold text-charcoal">No destinations matched your criteria</h3>
          <p className="text-sm text-charcoal/50 mt-2 max-w-sm mx-auto">Try refining your search text or clear filters to view all 36 states and Union Territories.</p>
          <button
            onClick={clearFilters}
            className="mt-6 px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
          >
            Reset Explorer
          </button>
        </div>
      )}

    </div>
  );
}
