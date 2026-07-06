import { useRouter } from '../context/RouterContext';
import { ATTRACTIONS, getRelatedItems } from '../data/experientialData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Ticket, Heart, ShieldAlert, Navigation, Sparkles } from 'lucide-react';

export default function AttractionDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const { stateId, attractionId } = route.params || {};

  // Find attraction
  const attraction = ATTRACTIONS.find((a) => a.id === attractionId) || ATTRACTIONS[0];

  if (!attraction) {
    return (
      <div className="min-h-screen bg-cream flex flex-col items-center justify-center p-8">
        <h2 className="font-serif text-3xl font-bold text-heritage-red">Attraction Not Found</h2>
        <button onClick={() => navigate('destinations')} className="mt-4 px-6 py-2.5 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded">
          Return to Destinations
        </button>
      </div>
    );
  }

  // Find associated State
  const stateObj = DESTINATIONS.find((d) => d.id === stateId || d.id === attraction.stateId);
  const stateName = stateObj?.name || 'Various States';

  const isFav = isInWishlist(attraction.id);
  const relatedItems = getRelatedItems(attraction.id, 3);

  return (
    <div className="bg-cream min-h-screen py-12" id={`attraction-detail-${attraction.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8">
          <button
            onClick={() => navigate('destination-detail', { id: attraction.stateId })}
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
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">MONUMENT SPOTLIGHT</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-xs font-bold text-teal-light tracking-[0.2em] uppercase">{stateName}</span>
              </div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
                  {attraction.name}
                </h1>
                <button
                  onClick={() => toggleWishlist(attraction.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer ${
                    isFav ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              <p className="mt-4 text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic">
                “{attraction.description}”
              </p>
            </div>

            {/* Cinematic Hero Image */}
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-xl border-4 border-gold/15">
              <img
                src={attraction.image}
                alt={attraction.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>

            {/* Historical deep-dive block */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <h2 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-3">
                Historical Chronology & Narrative
              </h2>
              <p className="font-sans text-sm sm:text-base text-charcoal-light leading-relaxed whitespace-pre-line">
                {attraction.history}
              </p>
            </div>

            {/* Pro-Traveler Tips */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <ShieldAlert className="w-6 h-6 text-gold" />
                <h3 className="font-serif text-2xl font-bold text-charcoal">Pro Tips for Visiting</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {attraction.tips.map((tip, idx) => (
                  <div key={idx} className="bg-cream-dark border-t-4 border-heritage-red p-6 rounded-b-xl shadow-sm hover:shadow-md transition-all">
                    <span className="block text-heritage-red font-sans font-black text-xs uppercase tracking-widest mb-2">Rule {idx + 1}</span>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-light leading-relaxed font-semibold">{tip}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cross-linking Nearby Attractions */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Navigation className="w-5 h-5 text-gold" />
                <h3 className="font-serif text-xl font-bold text-charcoal">Nearby Landmarks to Combine</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {attraction.nearbyAttractions.map((item, idx) => {
                  const checkSelf = ATTRACTIONS.find((a) => a.name.toLowerCase() === item.toLowerCase());
                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        if (checkSelf) {
                          navigate('attraction-detail', { stateId: attraction.stateId, attractionId: checkSelf.id });
                        }
                      }}
                      className={`p-4 border rounded-xl text-center flex flex-col justify-center items-center h-24 transition-all ${
                        checkSelf ? 'bg-white border-gold/30 cursor-pointer hover:border-heritage-red hover:shadow-md' : 'bg-cream-dark/50 border-gold/10'
                      }`}
                    >
                      <span className="font-serif text-sm font-bold text-charcoal block">{item}</span>
                      {checkSelf && (
                        <span className="text-[9px] font-sans font-bold text-heritage-red mt-1 block uppercase tracking-wider">
                          View Standalone Guide &rarr;
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Timings, Fees, Fast Info */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block">LOGISTICS LEDGER</span>
              
              <div className="space-y-5">
                <div className="flex gap-4 items-start border-b border-gold/10 pb-4">
                  <Clock className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Visiting Hours</span>
                    <span className="text-sm font-sans text-charcoal-light font-semibold block mt-1">{attraction.visitingHours}</span>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Ticket className="w-5 h-5 text-heritage-red mt-0.5 shrink-0" />
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal block">Entry Tariffs</span>
                    <span className="text-sm font-sans text-charcoal-light font-semibold block mt-1">{attraction.entryFee}</span>
                  </div>
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
                Add {attraction.name} directly into your customized India tour planner. Build a beautiful, shareable itinerary of your dream journey.
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
                onClick={() => navigate(item.path, { stateId: attraction.stateId, attractionId: item.id, parkId: item.id, siteId: item.id, activityId: item.id, dishId: item.id, experienceId: item.id })}
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
