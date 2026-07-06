import { useRouter } from '../context/RouterContext';
import { getCitiesForState, ATTRACTIONS, getRelatedItems, EXPERIENTIAL_ITEMS, HERITAGE_SITES } from '../data/experientialData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, MapPin, Heart, Compass, Sparkles, BookOpen } from 'lucide-react';

export default function CityDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const { stateId, cityId } = route.params || {};

  // Find the state
  const stateObj = DESTINATIONS.find((d) => d.id === stateId);
  const stateName = stateObj?.name || 'Various States';

  // Find the city
  const stateCities = getCitiesForState(stateId || '', stateName);
  const city = stateCities.find((c) => c.id === cityId) || stateCities[0];

  if (!city) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">City Profile Not Found</h2>
        <button onClick={() => navigate('destinations')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to Destinations
        </button>
      </div>
    );
  }

  const isFav = isInWishlist(city.id);
  const relatedItems = getRelatedItems(city.id, 3);

  // Match city's attractions to standalone attractions or heritage sites if they match
  const getAttractionLink = (attrName: string) => {
    const matchedAttr = ATTRACTIONS.find((a) => a.name.toLowerCase() === attrName.toLowerCase());
    if (matchedAttr) {
      return { path: 'attraction-detail', params: { stateId: stateId || '', attractionId: matchedAttr.id } };
    }
    const matchedHeritage = HERITAGE_SITES.find((h) => 
      h.name.toLowerCase().includes(attrName.toLowerCase()) ||
      attrName.toLowerCase().includes(h.name.toLowerCase())
    );
    if (matchedHeritage) {
      return { path: 'heritage-site-detail', params: { siteId: matchedHeritage.id } };
    }
    return null;
  };

  return (
    <div className="bg-cream min-h-screen py-12" id={`city-detail-${city.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('destination-detail', { id: stateId || '' })}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to {stateName}</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Main Header / Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">CITY SPOTLIGHT</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-xs font-bold text-teal-light tracking-[0.2em] uppercase">{stateName}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
                  {city.name}
                </h1>
                <button
                  onClick={() => toggleWishlist(city.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    isFav ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              <p className="mt-4 text-lg font-sans text-charcoal-light font-medium leading-relaxed italic">
                “{city.description}”
              </p>
            </div>

            {/* Large Cinematic Image with golden overlay border */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Overview Editorial text */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-3">
                About the Experience
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line">
                {city.overview}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gold/10">
                <div className="flex gap-3 items-start">
                  <Clock className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Best Time to Visit</span>
                    <span className="text-sm font-sans text-charcoal-light font-semibold">{city.bestTimeToVisit}</span>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <Compass className="w-5 h-5 text-gold mt-1 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Signature Culinary Experience</span>
                    {(() => {
                      const matchedDish = EXPERIENTIAL_ITEMS.find(item => 
                        item.category === 'food' && 
                        (item.title.toLowerCase().includes(city.signatureDish.toLowerCase()) || 
                         city.signatureDish.toLowerCase().includes(item.title.toLowerCase()) ||
                         (item.id === 'goan-fish-curry' && city.signatureDish.toLowerCase().includes('goan fish')) ||
                         (item.id === 'idli-dosa' && city.signatureDish.toLowerCase().includes('idli')) ||
                         (item.id === 'butter-chicken' && city.signatureDish.toLowerCase().includes('butter chicken')) ||
                         (item.id === 'vada-pav' && city.signatureDish.toLowerCase().includes('vada pav')) ||
                         (item.id === 'pyaaz-kachori' && city.signatureDish.toLowerCase().includes('pyaaz kachori')) ||
                         (item.id === 'mewari-laal-maas' && city.signatureDish.toLowerCase().includes('mewari laal')) ||
                         (item.id === 'street-food-delhi' && city.signatureDish.toLowerCase().includes('street food')) ||
                         (item.id === 'tandoor-clay-oven' && city.signatureDish.toLowerCase().includes('tandoor')) ||
                         (item.id === 'coastal-seafood' && city.signatureDish.toLowerCase().includes('seafood')) ||
                         (item.id === 'hyderabadi-biryani' && city.signatureDish.toLowerCase().includes('biryani')) ||
                         (item.id === 'litti-chokha' && city.signatureDish.toLowerCase().includes('litti'))
                        )
                      );
                      return (
                        <span 
                          className="text-sm font-sans text-teal-dark font-bold hover:underline cursor-pointer block mt-1" 
                          onClick={() => {
                            if (matchedDish) {
                              navigate('food-detail', { dishId: matchedDish.id });
                            } else {
                              navigate('food');
                            }
                          }}
                        >
                          {city.signatureDish} &rarr;
                        </span>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Key Highlights (Jali motif backdrop or borders) */}
            <div className="space-y-6">
              <h2 className="font-serif text-2xl font-bold text-charcoal">Recommended Signature Walks & Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {city.highlights.map((highlight, index) => (
                  <div key={index} className="bg-cream-dark border-l-4 border-gold p-5 rounded-r-xl shadow-sm hover:shadow-md transition-all">
                    <span className="block text-gold font-sans font-black text-xs uppercase tracking-widest mb-2">0{index + 1}</span>
                    <p className="text-sm font-sans text-charcoal-light font-semibold leading-relaxed">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Attractions Layer */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Must-See Local Attractions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {city.topAttractions.map((attr, idx) => {
                  const link = getAttractionLink(attr);
                  return (
                    <div key={idx} className="bg-white border border-gold/15 p-5 rounded-2xl shadow-sm flex flex-col justify-between hover:border-gold/40 transition-colors">
                      <div>
                        <div className="flex items-center gap-2 text-gold mb-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-[10px] font-sans font-bold uppercase tracking-wider">Point of Interest</span>
                        </div>
                        <h4 className="font-serif text-lg font-bold text-charcoal">{attr}</h4>
                        <p className="text-xs text-charcoal-light font-sans mt-2">
                          Discover one of the finest landmarks representing the local culture and heritage of {city.name}.
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-gold/10">
                        {link ? (
                          <button
                            onClick={() => navigate(link.path, link.params)}
                            className="text-xs font-bold text-heritage-red hover:text-heritage-red-light flex items-center gap-1 group cursor-pointer"
                          >
                            <span>Explore Standalone Guide</span>
                            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                          </button>
                        ) : (
                          <span className="text-xs font-semibold text-charcoal/40 italic">Curated State Highlight</span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Editorial Sidebar (4 columns) */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Quick Facts panel */}
            <div className="bg-[#134E4A] text-cream rounded-2xl p-6 border border-gold/20 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-10 pointer-events-none">
                <svg width="200" height="200" viewBox="0 0 100 100" className="animate-slow-spin">
                  <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" fill="#D4AF37" />
                </svg>
              </div>
              <span className="text-xs font-bold tracking-[0.25em] text-gold uppercase block mb-1">REGION FAST FACTS</span>
              <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-gold/20 pb-2">Traveler Ledger</h3>
              <div className="space-y-4 text-xs font-sans">
                <div>
                  <span className="block text-gold uppercase font-bold tracking-wider">State Entity</span>
                  <span className="text-sm font-semibold">{stateName}</span>
                </div>
                <div>
                  <span className="block text-gold uppercase font-bold tracking-wider">Atmosphere style</span>
                  <span className="text-sm font-semibold">Cinematic Heritage & Culture Walks</span>
                </div>
                <div>
                  <span className="block text-gold uppercase font-bold tracking-wider">Ideal Duration</span>
                  <span className="text-sm font-semibold">2 - 3 Days</span>
                </div>
              </div>
            </div>

            {/* Interactive Trip Planner CTA Widget */}
            <div className="bg-cream-dark border-2 border-gold/30 rounded-2xl p-6 shadow-sm space-y-4">
              <div className="w-10 h-10 bg-heritage-red rounded-full flex items-center justify-center text-gold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-charcoal">Design Your Custom Itinerary</h3>
              <p className="text-xs font-sans text-charcoal-light leading-relaxed">
                Add {city.name} directly into our multi-day, intelligent itinerary planner. Create your daily ledger, dining recommendations, and travel routes.
              </p>
              <button
                onClick={() => navigate('trip-planner')}
                className="w-full py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream font-bold text-xs uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md text-center"
              >
                Plan My Trip &rarr;
              </button>
            </div>

          </div>

        </div>

        {/* You Might Also Like Section (Australia.com never dead-end strategy) */}
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
                onClick={() => navigate(item.path, { stateId: stateId || '', attractionId: item.id, parkId: item.id, siteId: item.id, activityId: item.id, dishId: item.id, experienceId: item.id })}
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
