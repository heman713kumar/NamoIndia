import { useState, useTransition } from 'react';
import { useRouter } from '../context/RouterContext';
import { FESTIVALS } from '../data/festivals';
import { Search, Calendar, Compass, Grid, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function FestivalsGrid() {
  const { navigate } = useRouter();

  // Search and Filter states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSeason, setSelectedSeason] = useState<string>('all');
  const [, startTransition] = useTransition();

  const seasons = ['Spring', 'Summer', 'Monsoon', 'Autumn', 'Winter'];

  // Filtering Logic
  const filteredFestivals = FESTIVALS.filter((fest) => {
    const matchesSearch = fest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          fest.significance.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          fest.howCelebrated.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSeason = selectedSeason === 'all' || fest.season === selectedSeason;

    return matchesSearch && matchesSeason;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="festivals-calendar-view">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">BE INSPIRED</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
          Festivals Calendar
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
          India's soul is celebrated through color, clay idols, sacred bonfires, and colossal river bathings. Explore the major seasonal celebrations of the subcontinent.
        </p>
      </div>

      {/* Search and Filters panel */}
      <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          
          {/* Search box */}
          <div className="md:col-span-7 relative">
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gold" />
            <input
              type="text"
              placeholder="Search festivals by name, rituals, deities..."
              value={searchQuery}
              onChange={(e) => startTransition(() => setSearchQuery(e.target.value))}
              className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-gold/20 rounded-xl focus:outline-none focus:border-gold text-sm text-charcoal placeholder:text-charcoal/40"
            />
          </div>

          {/* Season Filter Dropdown */}
          <div className="md:col-span-4 relative">
            <select
              value={selectedSeason}
              onChange={(e) => setSelectedSeason(e.target.value)}
              className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer appearance-none"
            >
              <option value="all">All Seasons</option>
              {seasons.map((season) => (
                <option key={season} value={season}>{season} Celebrations</option>
              ))}
            </select>
          </div>

          {/* Reset button */}
          <div className="md:col-span-1 flex justify-end">
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSeason('all');
              }}
              className="w-full md:w-auto text-center px-4 py-3 text-xs font-bold uppercase text-heritage-red hover:text-heritage-red-light hover:underline"
            >
              Clear
            </button>
          </div>

        </div>
      </div>

      {/* Festivals List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="festivals-cards-grid">
        <AnimatePresence mode="popLayout">
          {filteredFestivals.map((fest, idx) => (
            <motion.div
              layout
              key={fest.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all cursor-pointer group flex flex-col justify-between"
              onClick={() => navigate('festival-detail', { id: fest.id })}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={fest.image}
                  alt={fest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-gold/80 text-charcoal text-[9px] font-bold tracking-wider uppercase rounded-full border border-gold">
                    {fest.season}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-cream z-10">
                  <span className="text-[9px] font-bold tracking-widest uppercase text-gold-light">
                    {fest.region}
                  </span>
                  <h3 className="font-serif text-xl font-bold mt-1 leading-none">{fest.name}</h3>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-gold font-semibold mb-3">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Dates: {fest.dates}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans line-clamp-3 mb-6">
                    {fest.significance}
                  </p>
                </div>

                <div className="flex justify-between items-center border-t border-gold/10 pt-4 mt-auto">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-heritage-red group-hover:text-heritage-red-light">
                    View Festival Guide &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* No results */}
      {filteredFestivals.length === 0 && (
        <div className="text-center py-20 bg-white border border-gold/10 rounded-2xl shadow-sm">
          <Compass className="w-16 h-16 text-gold/30 mx-auto mb-4 animate-spin" style={{ animationDuration: '8s' }} />
          <h3 className="font-serif text-xl font-bold text-charcoal">No festivals matched your search</h3>
          <p className="text-sm text-charcoal/50 mt-2 max-w-sm mx-auto">Try refining your search keyword or selecting a different season filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedSeason('all');
            }}
            className="mt-6 px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
          >
            Reset Calendar
          </button>
        </div>
      )}

    </div>
  );
}
