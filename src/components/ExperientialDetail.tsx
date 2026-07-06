import { useRouter } from '../context/RouterContext';
import { EXPERIENTIAL_ITEMS, getRelatedItems } from '../data/experientialData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Info, Heart, Compass, Sparkles, MapPin, CheckCircle } from 'lucide-react';

export default function ExperientialDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  
  // Extract parameters
  const { activityId, dishId, experienceId } = route.params || {};
  const currentId = activityId || dishId || experienceId;

  // Find the experience item
  const item = EXPERIENTIAL_ITEMS.find((ex) => ex.id === currentId) || EXPERIENTIAL_ITEMS[0];

  if (!item) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Experience Profile Not Found</h2>
        <button onClick={() => navigate('things-to-do')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to Things to Do
        </button>
      </div>
    );
  }

  const isFav = isInWishlist(item.id);
  const relatedItems = getRelatedItems(item.id, 3);

  // Retrieve actual State objects for cross-tagging/recommending states
  const matchedStates = DESTINATIONS.filter((state) => item.recommendedStates.includes(state.id));

  return (
    <div className="bg-cream min-h-screen py-12" id={`experiential-detail-${item.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('things-to-do')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Things to Do</span>
          </button>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">{item.category} DEEP DIVE</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-[10px] font-bold text-teal-light tracking-[0.2em] uppercase">EXPERIENTIAL INTENT</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-bold tracking-tight">
                  {item.title}
                </h1>
                <button
                  onClick={() => toggleWishlist(item.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    isFav ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              <p className="mt-4 text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic">
                “{item.tagline}”
              </p>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* In-Depth Description */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-3">
                The Narrative & Philosophy
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line">
                {item.description}
              </p>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line pt-4 border-t border-gold/5">
                {item.experienceDeepDive}
              </p>
            </div>

            {/* Key Highlights */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal">Signature Encounters & Highlights</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {item.keyHighlights.map((hl, idx) => (
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
              <h3 className="font-serif text-2xl font-bold text-charcoal">Top States to Experience This</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {matchedStates.map((state) => (
                  <div
                    key={state.id}
                    onClick={() => navigate('destination-detail', { id: state.id })}
                    className="bg-white border border-gold/15 rounded-2xl overflow-hidden hover:border-gold/40 transition-all cursor-pointer flex group shadow-sm"
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
                        Explore State &rarr;
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Practical Logistics Widget */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">PRACTICAL LEDGER</span>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start border-b border-gold/10 pb-4">
                  <Info className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Guidance & Rules</span>
                    <p className="text-xs font-sans text-charcoal-light font-semibold mt-1 leading-relaxed">{item.practicalInformation}</p>
                  </div>
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Experience Intent Class</span>
                  <span className="inline-block bg-gold/15 text-heritage-red text-[10px] font-bold uppercase px-3 py-1 rounded-full mt-2 tracking-widest">
                    {item.category}
                  </span>
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
                Add {item.title} directly into your customized India tour planner. Build a beautiful, shareable itinerary of your dream journey.
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
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-1">NEVER DEAD-END</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">You Might Also Like</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedItems.map((item) => (
              <div
                key={item.id}
                onClick={() => navigate(item.path, { stateId: item.stateId, attractionId: item.id, parkId: item.id, siteId: item.id, activityId: item.id, dishId: item.id, experienceId: item.id })}
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
