import { useRouter } from '../context/RouterContext';
import { HERITAGE_SITES, getRelatedItems } from '../data/experientialData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Landmark, Award, Heart, Compass, Sparkles, MapPin } from 'lucide-react';

// 1. Heritage Sites Grid / Index Page (/heritage-sites)
export function HeritageSitesGrid() {
  const { navigate } = useRouter();

  return (
    <div className="bg-cream min-h-screen py-16" id="heritage-sites-grid-root">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">UNESCO WORLD HERITAGE</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
            UNESCO World Heritage Sites
          </h1>
          <p className="mt-4 text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
            Explore masterpieces of human creative genius and natural wonder. India is home to 42 UNESCO World Heritage Sites, testifying to the deep architectural, spiritual, and chronological history of the subcontinent.
          </p>
        </div>

        {/* Heritage Sites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HERITAGE_SITES.map((site) => {
            const stateObj = DESTINATIONS.find(d => d.id === site.stateId);
            return (
              <div
                key={site.id}
                onClick={() => navigate('heritage-site-detail', { siteId: site.id })}
                className="bg-white rounded-2xl overflow-hidden shadow-md border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={site.image}
                      alt={site.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-gold text-charcoal font-sans text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow">
                      Declared {site.yearDeclared}
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-cream">
                      <MapPin className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-semibold uppercase tracking-wider">{stateObj?.name || 'India'}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors">
                      {site.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-charcoal-light font-sans line-clamp-3 leading-relaxed">
                      {site.description}
                    </p>
                  </div>
                </div>
                
                <div className="p-6 pt-0 border-t border-gold/10 mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                  <span className="text-gold flex items-center gap-1">
                    <Landmark className="w-4 h-4 text-gold" />
                    <span>UNESCO Masterpiece</span>
                  </span>
                  <span className="text-heritage-red group-hover:translate-x-1.5 transition-transform flex items-center gap-1">
                    <span>Explore Site</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

// 2. Heritage Site Detail Page (/heritage-sites/:siteId)
export function HeritageSiteDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const { siteId } = route.params || {};

  // Find site
  const site = HERITAGE_SITES.find(s => s.id === siteId) || HERITAGE_SITES[0];

  if (!site) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Heritage Site Not Found</h2>
        <button onClick={() => navigate('heritage-sites')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to Heritage Sites
        </button>
      </div>
    );
  }

  const stateObj = DESTINATIONS.find(d => d.id === site.stateId);
  const isFav = isInWishlist(site.id);
  const relatedItems = getRelatedItems(site.id, 3);

  return (
    <div className="bg-cream min-h-screen py-12" id={`heritage-site-detail-${site.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('heritage-sites')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Heritage Sites</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">UNESCO INSCRIPTION</span>
                {stateObj && (
                  <>
                    <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                    <button
                      onClick={() => navigate('destination-detail', { stateId: stateObj.id })}
                      className="text-xs font-bold text-teal-light hover:text-gold tracking-[0.2em] uppercase transition-colors hover:underline cursor-pointer"
                    >
                      {stateObj.name}
                    </button>
                  </>
                )}
                {site.additionalStateIds?.map(id => {
                  const addState = DESTINATIONS.find(d => d.id === id);
                  if (!addState) return null;
                  return (
                    <span key={id} className="flex items-center gap-2">
                      <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                      <button
                        onClick={() => navigate('destination-detail', { stateId: id })}
                        className="text-xs font-bold text-teal-light hover:text-gold tracking-[0.2em] uppercase transition-colors hover:underline cursor-pointer"
                      >
                        {addState.name}
                      </button>
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
                  {site.name}
                </h1>
                <button
                  onClick={() => toggleWishlist(site.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    isFav ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              <p className="mt-4 text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic">
                “{site.description}”
              </p>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={site.image}
                alt={site.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Inscription & Global Significance */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <div className="flex items-center gap-2 border-b border-gold/10 pb-3">
                <Award className="w-6 h-6 text-gold" />
                <h2 className="font-serif text-2xl font-bold text-heritage-red">
                  UNESCO Universal Outstanding Value
                </h2>
              </div>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line">
                {site.significance}
              </p>
            </div>

            {/* Inscription tips */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <Landmark className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl font-bold text-charcoal">Recommended Signature Walks & Viewing spots</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {site.visitingTips.map((tip, idx) => (
                  <div key={idx} className="bg-cream-dark border-l-4 border-gold p-6 rounded-r-xl shadow-sm hover:shadow-md transition-all">
                    <span className="block text-gold font-sans font-black text-xs uppercase tracking-widest mb-2">Walk {idx + 1}</span>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-light leading-relaxed font-semibold">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Inscription Fast facts */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-5">
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">INSCRIPTION INFORMATION</span>
              
              <div className="space-y-4 text-xs font-sans">
                <div className="border-b border-gold/10 pb-3">
                  <span className="block text-charcoal/50 font-bold uppercase tracking-wider">Year of Declaration</span>
                  <span className="text-sm font-semibold text-charcoal-light block mt-1">{site.yearDeclared}</span>
                </div>
                <div className="border-b border-gold/10 pb-3">
                  <span className="block text-charcoal/50 font-bold uppercase tracking-wider mb-1.5">State Entity</span>
                  <div className="flex flex-wrap gap-1.5">
                    {stateObj && (
                      <button
                        onClick={() => navigate('destination-detail', { stateId: stateObj.id })}
                        className="text-xs font-semibold bg-gold/10 hover:bg-gold/20 text-heritage-red px-2 py-1 rounded transition-colors cursor-pointer"
                      >
                        {stateObj.name}
                      </button>
                    )}
                    {site.additionalStateIds?.map(id => {
                      const addState = DESTINATIONS.find(d => d.id === id);
                      if (!addState) return null;
                      return (
                        <button
                          key={id}
                          onClick={() => navigate('destination-detail', { stateId: id })}
                          className="text-xs font-semibold bg-gold/10 hover:bg-gold/20 text-heritage-red px-2 py-1 rounded transition-colors cursor-pointer"
                        >
                          {addState.name}
                        </button>
                      );
                    })}
                    {!stateObj && !site.additionalStateIds?.length && (
                      <span className="text-sm font-semibold text-charcoal-light block">Various States</span>
                    )}
                  </div>
                </div>
                <div>
                  <span className="block text-charcoal/50 font-bold uppercase tracking-wider">Category Status</span>
                  <span className="text-sm font-semibold text-charcoal-light block mt-1">UNESCO World Cultural Monument</span>
                </div>
              </div>
            </div>

            {/* Trip Planner CTA Widget */}
            <div className="bg-[#134E4A] text-cream rounded-2xl p-6 border border-gold/20 shadow-lg space-y-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-teal-dark">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Incorporate into Itinerary</h3>
              <p className="text-xs font-sans text-cream/80 leading-relaxed">
                Add {site.name} directly into your customized India tour planner. Build a beautiful, shareable itinerary of your dream journey.
              </p>
              <button
                onClick={() => navigate('trip-planner')}
                className="w-full py-2.5 bg-gold hover:bg-gold-light text-teal-dark font-bold text-xs uppercase tracking-widest rounded transition-colors cursor-pointer shadow-md text-center"
              >
                Plan My Tour &rarr;
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
                onClick={() => navigate(item.path, { stateId: site.stateId, attractionId: item.id, parkId: item.id, siteId: item.id, activityId: item.id, dishId: item.id, experienceId: item.id })}
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
