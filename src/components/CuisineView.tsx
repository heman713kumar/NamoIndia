import { useState, useMemo } from 'react';
import { useRouter } from '../context/RouterContext';
import { CUISINES, RegionalCuisine, SignatureDish, getRelatedCuisines } from '../data/cuisineData';
import { DESTINATIONS } from '../data/destinations';
import { 
  ArrowLeft, MapPin, Compass, Utensils, Flame, BookOpen, 
  Sparkles, Coffee, Award, Search, Filter, HelpCircle, Heart, ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

// ==========================================
// 1. CUISINE HUB (Main Culinary Page)
// ==========================================
export function CuisineHub() {
  const { navigate } = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedDiet, setSelectedDiet] = useState('All');

  // Regions list
  const regions = ['All', 'North India', 'South India', 'East India', 'West India', 'Northeast India', 'Deccan India'];

  // Diets list (represented as tags/categories)
  const diets = [
    { label: 'All', value: 'All' },
    { label: 'Vegetarian Specialties', value: 'Vegetarian' },
    { label: 'Royal & Non-Veg', value: 'Non-Vegetarian' },
    { label: 'Sweets & Desserts', value: 'Sweet' },
    { label: 'Beverages', value: 'Beverage' }
  ];

  // Filtering logic
  const filteredCuisines = useMemo(() => {
    return CUISINES.filter(cuisine => {
      // 1. Search Query
      const matchesSearch = 
        cuisine.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cuisine.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cuisine.intro.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cuisine.keyIngredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase())) ||
        cuisine.signatureDishes.some(d => d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.description.toLowerCase().includes(searchQuery.toLowerCase()));

      // 2. Region Filter
      const matchesRegion = selectedRegion === 'All' || cuisine.region.includes(selectedRegion);

      // 3. Diet/Dish type Filter
      const matchesDiet = selectedDiet === 'All' || cuisine.signatureDishes.some(d => d.type === selectedDiet);

      return matchesSearch && matchesRegion && matchesDiet;
    });
  }, [searchQuery, selectedRegion, selectedDiet]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="cuisine-hub-view">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-3">THE SPICE TRAILS</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight leading-tight">
          Regional Cuisines of India
        </h1>
        <p className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed font-sans">
          To cook in India is an act of deep alchemy. Every region is its own culinary continent, distinguished by native soil, grains, climate, and ancient Ayurvedic principles of flavor harmony and digestive balance.
        </p>
      </div>

      {/* Filter and Search Bar Panel */}
      <div className="bg-white rounded-2xl border border-gold/15 p-6 md:p-8 shadow-sm mb-12" id="cuisine-filter-panel">
        <div className="flex flex-col lg:flex-row gap-6 justify-between items-stretch lg:items-center">
          
          {/* Search Input */}
          <div className="relative flex-grow max-w-lg">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gold">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search cuisines, signature dishes, ingredients (e.g. biryani, ghee)..."
              className="w-full pl-10 pr-4 py-3 bg-cream/40 border border-gold/25 rounded-xl text-sm font-sans focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold"
            />
          </div>

          {/* Region selector buttons */}
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                  selectedRegion === region
                    ? 'bg-gold text-cream shadow-sm'
                    : 'bg-cream/40 text-charcoal/75 hover:bg-cream border border-gold/15 hover:border-gold/30'
                }`}
              >
                {region}
              </button>
            ))}
          </div>

        </div>

        {/* Diet/Dish type secondary filter */}
        <div className="flex flex-wrap items-center gap-3 mt-6 pt-6 border-t border-gold/10">
          <span className="text-xs font-bold uppercase tracking-wider text-gold flex items-center gap-1.5 mr-2">
            <Filter className="w-3.5 h-3.5" /> Filter by specialty:
          </span>
          <div className="flex flex-wrap gap-2">
            {diets.map((diet) => (
              <button
                key={diet.value}
                onClick={() => setSelectedDiet(diet.value)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  selectedDiet === diet.value
                    ? 'bg-heritage-red text-cream font-semibold'
                    : 'bg-cream/30 text-charcoal/65 hover:bg-cream/70 border border-gold/10'
                }`}
              >
                {diet.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of cuisines */}
      {filteredCuisines.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="cuisine-cards-grid">
          {filteredCuisines.map((cuisine, idx) => (
            <motion.div
              key={cuisine.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.05, 0.4) }}
              onClick={() => navigate('cuisine-detail', { cuisineId: cuisine.id })}
              className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/35 shadow-sm hover:shadow-xl transition-all group cursor-pointer flex flex-col justify-between"
              id={`cuisine-card-${cuisine.id}`}
            >
              <div>
                {/* Banner image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={cuisine.image}
                    alt={cuisine.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                  
                  {/* Region badge */}
                  <div className="absolute top-4 left-4 bg-cream/90 backdrop-blur-sm border border-gold/20 px-3 py-1 rounded-full text-[10px] font-bold text-heritage-red tracking-wider uppercase">
                    {cuisine.region}
                  </div>
                </div>

                {/* Content body */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-bold text-charcoal group-hover:text-heritage-red transition-colors duration-200">
                    {cuisine.title}
                  </h3>
                  <p className="text-xs text-charcoal/50 italic font-sans mt-1 line-clamp-1">
                    {cuisine.tagline}
                  </p>
                  <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans mt-4 line-clamp-3">
                    {cuisine.intro}
                  </p>

                  {/* Signature Dishes Preview */}
                  <div className="mt-5 pt-4 border-t border-gold/10">
                    <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-2">Signature Dishes</span>
                    <div className="flex flex-wrap gap-1.5">
                      {cuisine.signatureDishes.map((dish, dIdx) => (
                        <span 
                          key={dIdx} 
                          className="text-[10px] font-semibold bg-cream border border-gold/15 text-charcoal-light px-2 py-1 rounded"
                        >
                          {dish.name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 pb-6 pt-0 mt-auto flex justify-between items-center border-t border-gold/5 pt-4">
                <span className="text-[10px] font-bold text-gold uppercase tracking-wider">
                  {cuisine.signatureDishes.length} curated highlights
                </span>
                <span className="text-xs font-bold text-heritage-red uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  <span>Explore Guide</span>
                  <span>&rarr;</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gold/15 p-12 text-center" id="cuisine-empty-state">
          <Utensils className="w-12 h-12 text-gold/30 mx-auto mb-4 animate-bounce" />
          <h3 className="font-serif text-xl font-bold text-charcoal">No Cuisines Match Your Search</h3>
          <p className="text-xs text-charcoal/50 mt-2 max-w-md mx-auto leading-relaxed">
            Try resetting your search query or choosing another regional tab to discover other culinary traditions across the sub-continent.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedRegion('All');
              setSelectedDiet('All');
            }}
            className="mt-6 px-5 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs font-bold tracking-wider uppercase rounded shadow-md transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Culinary Philosophy Accent Banner */}
      <div className="mt-20 bg-cream-dark border border-gold/20 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
        <div className="max-w-2xl">
          <h3 className="font-serif text-2xl text-heritage-red font-bold">The Science of Six Tastes (Shad Rasa)</h3>
          <p className="text-sm text-charcoal/70 mt-2 font-sans leading-relaxed">
            In classical Indian cooking, a complete and satisfying meal must contain all six tastes in perfect equilibrium: <strong>Sweet</strong> (for energy), <strong>Sour</strong> (for digestion), <strong>Salty</strong> (for mineral balance), <strong>Bitter</strong> (for detoxification), <strong>Pungent</strong> (for metabolic fire), and <strong>Astringent</strong> (for cooling). That is why Indian spices are roasted, tempered, and synchronized with meticulous seasonal precision.
          </p>
        </div>
        <div className="bg-white border border-gold/15 rounded-xl p-5 shadow-sm text-center min-w-[200px]">
          <span className="text-xs text-gold font-bold uppercase tracking-widest block mb-1">Cuisines Available</span>
          <span className="font-serif text-5xl font-bold text-heritage-red">12</span>
          <span className="text-[10px] text-charcoal/50 uppercase tracking-wider block mt-1">Historic Regions</span>
        </div>
      </div>

    </div>
  );
}

// ==========================================
// 2. CUISINE DETAIL (Individual Cuisine)
// ==========================================
export function CuisineDetail() {
  const { route, navigate } = useRouter();
  const cuisineId = route.params?.cuisineId || route.params?.id || '';

  // Find current cuisine
  const cuisine = CUISINES.find(c => c.id === cuisineId);

  if (!cuisine) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center" id="cuisine-not-found">
        <Compass className="w-16 h-16 text-gold/30 mx-auto mb-4" />
        <h2 className="font-serif text-2xl font-bold text-charcoal">Cuisine Guide Not Found</h2>
        <p className="text-sm text-charcoal/50 mt-2">The regional culinary identifier could not be resolved.</p>
        <button
          onClick={() => navigate('food')}
          className="mt-6 px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
        >
          Return to Cuisine Guides
        </button>
      </div>
    );
  }

  // Find matching destination state(s) to create interactive cross links
  const matchingStates = DESTINATIONS.filter(d => cuisine.recommendedStates.includes(d.id));

  // Related cuisines recommendation
  const relatedCuisines = getRelatedCuisines(cuisine.id, 3);

  return (
    <div className="bg-cream min-h-screen" id={`cuisine-detail-${cuisine.id}-view`}>
      
      {/* 1. CINEMATIC HERO HEADER */}
      <div className="relative h-[65vh] min-h-[400px] w-full overflow-hidden">
        {/* Parallax cover image */}
        <img
          src={cuisine.image}
          alt={cuisine.title}
          className="absolute inset-0 w-full h-full object-cover scale-[1.02]"
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-black/40 to-black/50"></div>

        {/* Floating navigational controls */}
        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('food')}
            className="flex items-center gap-2 px-4 py-2 bg-white/95 hover:bg-white backdrop-blur-md text-charcoal text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all border border-gold/10 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Cuisines</span>
          </button>
        </div>

        {/* Hero typography elements */}
        <div className="absolute bottom-12 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-15">
          <div className="max-w-3xl">
            <span className="bg-heritage-red text-cream px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-heritage-red/30 shadow-sm inline-block mb-4">
              {cuisine.region}
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-black tracking-tight leading-tight">
              {cuisine.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-charcoal/90 font-medium leading-relaxed font-sans max-w-2xl drop-shadow-sm">
              {cuisine.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* 2. CORE STATS AND PRACTICAL OVERVIEW PANEL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-8 relative z-20">
        <div className="bg-white rounded-2xl border border-gold/15 p-6 sm:p-8 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex gap-4 items-start border-b md:border-b-0 md:border-r border-gold/10 pb-6 md:pb-0 md:pr-6">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-0.5">Key Aromatics</span>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                {cuisine.keyIngredients.join(', ')}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start border-b md:border-b-0 md:border-r border-gold/10 pb-6 md:pb-0 md:pr-6">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <Utensils className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-0.5">Dining Etiquette</span>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
                {cuisine.diningProtocol}
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-gold uppercase tracking-widest block mb-0.5">Geographic Core</span>
              <p className="text-xs text-charcoal/80 font-sans leading-relaxed">
                Centered in {cuisine.region}. Highly celebrated across matching states like {matchingStates.map(s => s.name).join(', ')}.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* 3. DETAILED NARRATIVE SECTIONS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main detailed articles (Left 2 columns) */}
          <div className="lg:col-span-2 space-y-12">
            
            <section className="bg-white rounded-2xl border border-gold/10 p-8 shadow-sm">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">THE CULINARY SOUL</span>
              <h2 className="font-serif text-2xl font-bold text-heritage-red mb-4">Introduction & Flavor Profile</h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                {cuisine.intro}
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-gold/10 p-8 shadow-sm">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">HISTORICAL CHRONOLOGY</span>
              <h2 className="font-serif text-2xl font-bold text-heritage-red mb-4">Origins & Royal Influences</h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans whitespace-pre-line">
                {cuisine.historyAndCulture}
              </p>
            </section>

            <section className="bg-white rounded-2xl border border-gold/10 p-8 shadow-sm">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">THE PROTOCOL OF FEASTING</span>
              <h2 className="font-serif text-2xl font-bold text-heritage-red mb-4">Ancestral Dining Rituals</h2>
              <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans">
                {cuisine.diningProtocol}
              </p>
            </section>

            {/* Signature Dishes Showcase */}
            <section className="border-t border-gold/15 pt-12">
              <div className="mb-8">
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">SIGNATURE SAMPLING</span>
                <h2 className="font-serif text-3xl font-bold text-charcoal">Must-Try Iconic Preparations</h2>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {cuisine.signatureDishes.map((dish, index) => (
                  <div 
                    key={index}
                    className="bg-white border border-gold/10 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6 items-stretch"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 my-auto">
                      {dish.type === 'Sweet' ? <Sparkles className="w-6 h-6" /> : dish.type === 'Beverage' ? <Coffee className="w-6 h-6" /> : <Utensils className="w-6 h-6" />}
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                        <h4 className="font-serif text-lg font-bold text-charcoal">
                          {dish.name}
                        </h4>
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          dish.type === 'Vegetarian' ? 'bg-green-100 text-green-800 border border-green-200' :
                          dish.type === 'Non-Vegetarian' ? 'bg-red-100 text-red-800 border border-red-200' :
                          dish.type === 'Sweet' ? 'bg-purple-100 text-purple-800 border border-purple-200' :
                          'bg-amber-100 text-amber-800 border border-amber-200'
                        }`}>
                          {dish.type}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
                        {dish.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* Right column sidebar */}
          <div className="space-y-8">
            
            {/* Best Venues & historic dining recommendations */}
            <div className="bg-white rounded-2xl border border-gold/15 p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2 border-b border-gold/10 pb-3">
                <MapPin className="w-5 h-5 text-heritage-red" /> Where to Taste
              </h3>
              <div className="space-y-6">
                {cuisine.bestPlacesToTry.map((place, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-bold text-gold uppercase tracking-wider">
                      <span>{place.city}</span>
                    </div>
                    <h4 className="font-sans text-sm font-bold text-charcoal">{place.venue}</h4>
                    <p className="text-xs text-charcoal/65 leading-relaxed font-sans">{place.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* State Destination Guides cross link */}
            {matchingStates.length > 0 && (
              <div className="bg-heritage-red text-cream rounded-2xl p-6 shadow-md border border-heritage-red/20 space-y-4">
                <span className="text-[10px] font-bold text-gold uppercase tracking-widest block">DESTINATION BINDING</span>
                <h3 className="font-serif text-xl font-bold">Explore the State of Origin</h3>
                <p className="text-xs text-cream/80 leading-relaxed font-sans">
                  The soul of a cuisine is deeply tied to its sacred landscapes, ancient monuments, and royal cities. Explore our comprehensive travel guides for:
                </p>
                <div className="space-y-2">
                  {matchingStates.map((state) => (
                    <button
                      key={state.id}
                      onClick={() => navigate('destination-detail', { id: state.id })}
                      className="w-full flex justify-between items-center bg-white/10 hover:bg-white/20 transition-all border border-white/15 rounded-xl px-4 py-3 text-left text-xs font-bold tracking-wider uppercase cursor-pointer"
                    >
                      <span>{state.name} Guide</span>
                      <ChevronRight className="w-4 h-4 text-gold" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quick travel disclaimer */}
            <div className="bg-cream-dark/50 rounded-2xl border border-gold/10 p-6">
              <span className="text-[9px] font-bold text-gold uppercase tracking-widest block mb-1">TRAVEL TIP</span>
              <h4 className="font-sans text-xs font-bold text-charcoal">Culinary Walking Tours</h4>
              <p className="text-[11px] text-charcoal/65 leading-relaxed mt-1 font-sans">
                Many historic food centers like Delhi’s Chandni Chowk, Lucknow’s Aminabad, and Kolkata’s sweet lanes are highly atmospheric and crowded. We strongly recommend booking a certified heritage food walking tour to taste historical dishes with hygienic, ancestral family-owned stalls.
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* 4. HORIZONTAL RELATED CUISINES BAR */}
      {relatedCuisines.length > 0 && (
        <div className="bg-white border-t border-gold/15 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">CONTINUING THE JOURNEY</span>
              <h3 className="font-serif text-2xl font-bold text-charcoal">Browse Other Aromatic Traditions</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedCuisines.map((c) => (
                <div
                  key={c.id}
                  onClick={() => navigate('cuisine-detail', { cuisineId: c.id })}
                  className="group bg-cream rounded-xl p-5 border border-gold/10 hover:border-gold/25 cursor-pointer shadow-sm hover:shadow-md transition-all flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <img 
                      src={c.image} 
                      alt={c.title} 
                      className="w-12 h-12 rounded-lg object-cover shrink-0 border border-gold/15"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">
                        {c.title}
                      </h4>
                      <p className="text-[10px] text-charcoal/50 uppercase tracking-wider mt-0.5">{c.region}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
