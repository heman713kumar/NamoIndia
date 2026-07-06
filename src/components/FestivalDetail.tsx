import { useRouter } from '../context/RouterContext';
import { FESTIVALS } from '../data/festivals';
import { DESTINATIONS } from '../data/destinations';
import { Calendar, Compass, MapPin, ArrowLeft, Heart, Sparkles, BookOpen, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export default function FestivalDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const id = route.params?.id || '';

  // Find the current festival
  const festival = FESTIVALS.find((f) => f.id === id);

  if (!festival) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center" id="festival-not-found">
        <Compass className="w-16 h-16 text-gold/30 mx-auto mb-4 animate-spin" />
        <h2 className="font-serif text-2xl font-bold text-charcoal">Festival Profile Not Found</h2>
        <p className="text-sm text-charcoal/50 mt-2">The selected festival identifier could not be resolved.</p>
        <button
          onClick={() => navigate('festivals')}
          className="mt-6 px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
        >
          Return to Festivals List
        </button>
      </div>
    );
  }

  // Find the actual State/UT objects matching bestPlaces
  const experiencingStates = DESTINATIONS.filter((state) => festival.bestPlaces.includes(state.id));

  return (
    <div className="bg-cream min-h-screen" id={`festival-detail-${festival.id}-view`}>
      
      {/* 1. Epic Hero header block */}
      <div className="relative h-[60vh] sm:h-[70vh] flex items-end overflow-hidden" id="festival-detail-hero">
        <img 
          src={festival.image} 
          alt={festival.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('festivals')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cream hover:text-gold bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-gold/15 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Calendar</span>
          </button>
        </div>

        <div className="relative z-10 w-full pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 text-cream">
            <div>
              <span className="px-3.5 py-1 bg-gold/30 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase border border-gold/30 inline-block mb-3">
                {festival.season} Season • {festival.region}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg">
                {festival.name}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gold-light mt-2 drop-shadow">
                <Calendar className="w-4 h-4 text-gold" />
                <span>Season Timing: <strong className="font-semibold text-cream">{festival.dates}</strong></span>
              </div>
            </div>

            {/* Heart wishlist toggle for festival */}
            <button
              onClick={() => toggleWishlist(festival.id)}
              className="px-5 py-3.5 bg-cream/90 hover:bg-cream text-heritage-red rounded-lg text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 self-start md:self-auto transition-colors"
            >
              <Heart className={`w-4 h-4 ${isInWishlist(festival.id) ? 'fill-heritage-red text-heritage-red animate-pulse' : ''}`} />
              <span>{isInWishlist(festival.id) ? 'Saved' : 'Save Celebration'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Content blocks section */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Significance and Celebrations split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-serif text-3xl font-bold text-heritage-red border-b border-gold/15 pb-2">
              History & Significance
            </h2>
            <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-sans">
              {festival.significance}
            </p>
          </div>

          <div className="lg:col-span-6 bg-cream-dark p-8 rounded-2xl border border-gold/15 space-y-4">
            <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold" />
              <span>How It is Celebrated</span>
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
              {festival.howCelebrated}
            </p>
          </div>

        </div>

        {/* Rituals and traditional foods section (if available) */}
        {(festival.ritualSteps || festival.traditionalFoods) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 pb-16 border-b border-gold/15" id="festival-rituals-foods">
            {festival.ritualSteps && (
              <div className="lg:col-span-7 space-y-6" id="festival-ritual-timeline">
                <h3 className="font-serif text-2xl font-bold text-heritage-red flex items-center gap-2">
                  <Clock className="w-5 h-5 text-gold" />
                  <span>Rituals & Stages of Celebration</span>
                </h3>
                <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-3.5 before:w-0.5 before:bg-gold/20">
                  {festival.ritualSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-4 relative" id={`festival-step-${idx}`}>
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gold/10 border border-gold/40 flex items-center justify-center text-xs font-bold text-heritage-red z-10 bg-cream">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-charcoal text-sm">{step.title}</h4>
                        <p className="text-xs text-charcoal/75 leading-relaxed font-sans">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {festival.traditionalFoods && (
              <div className="lg:col-span-5 bg-cream-dark/45 p-8 rounded-2xl border border-gold/10 space-y-6" id="festival-culinary-offerings">
                <h3 className="font-serif text-xl font-bold text-charcoal flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span>Traditional Festive Foods</span>
                </h3>
                <p className="text-xs text-charcoal/50 font-sans">
                  No Indian celebration is complete without its signature sweets and culinary offerings. Here are the core traditional delicacies prepared during this time:
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {festival.traditionalFoods.map((food, idx) => (
                    <span 
                      key={idx} 
                      className="px-3.5 py-1.5 bg-white border border-gold/15 hover:border-gold/30 text-xs font-medium text-heritage-red rounded-lg shadow-sm transition-colors cursor-default"
                    >
                      🍯 {food}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Cultural Highlights & Traveler Tips (if available) */}
        {(festival.culturalHighlights || festival.tipsForTravelers) && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 pb-16 border-b border-gold/15" id="festival-cultural-tips">
            {festival.culturalHighlights && (
              <div className="lg:col-span-6 space-y-6" id="festival-highlights">
                <h3 className="font-serif text-2xl font-bold text-heritage-red">
                  Unique Cultural Highlights
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  {festival.culturalHighlights.map((highlight, idx) => (
                    <div key={idx} className="p-5 bg-white rounded-xl border border-gold/10 hover:border-gold/25 transition-all space-y-2 shadow-sm" id={`festival-highlight-${idx}`}>
                      <h4 className="font-serif text-base font-bold text-charcoal flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        {highlight.title}
                      </h4>
                      <p className="text-xs text-charcoal/70 leading-relaxed font-sans">
                        {highlight.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {festival.tipsForTravelers && (
              <div className="lg:col-span-6 space-y-6" id="festival-tips">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Pro Tips for Travelers
                </h3>
                <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/45 space-y-4">
                  {festival.tipsForTravelers.map((tip, idx) => (
                    <div key={idx} className="flex gap-3 items-start" id={`festival-tip-item-${idx}`}>
                      <span className="text-amber-500 mt-0.5 text-sm">💡</span>
                      <p className="text-xs text-charcoal/80 leading-relaxed font-sans">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* 3. Recommended States to experience (Dynamic cross links) */}
        <div className="pt-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-gold uppercase tracking-wider block">GEOGRAPHIC CORES</span>
            <h2 className="font-serif text-3xl font-bold text-heritage-red mt-1">
              Best Places to Experience {festival.name}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal/50 font-sans mt-2">
              While celebrated nationwide, these locations are globally famous for hosting the most authentic and visually dramatic iterations of {festival.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiencingStates.map((state) => (
              <div 
                key={state.id}
                className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-md transition-all group cursor-pointer"
                onClick={() => navigate('destination-detail', { id: state.id })}
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={state.image} 
                    alt={state.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-cream">
                    <span className="text-[9px] uppercase tracking-wider text-gold-light">{state.region} Region</span>
                    <h4 className="font-serif text-lg font-bold">{state.name}</h4>
                  </div>
                </div>
                <div className="p-4 flex flex-col justify-between">
                  <p className="text-xs text-charcoal/65 line-clamp-2 mb-4 font-sans">{state.description}</p>
                  <span className="text-xs font-semibold text-heritage-red group-hover:underline">
                    View Regional Guide &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Plan Your Trip integration widget */}
        <div className="mt-20 bg-charcoal text-cream rounded-2xl p-8 sm:p-12 border border-gold/25 shadow-xl flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="max-w-lg">
            <h3 className="font-serif text-2xl text-gold font-bold">Incorporate {festival.name} into your vacation</h3>
            <p className="text-xs sm:text-sm text-cream/70 mt-2 font-sans leading-relaxed">
              Launch our Interactive Trip Planner, select your vacation length, and designate your desired regions. We'll automatically suggest day-by-day routes containing local festivals, foods, and experiences.
            </p>
          </div>
          <button
            onClick={() => navigate('trip-planner')}
            className="px-6 py-3.5 bg-gold hover:bg-gold-light text-charcoal rounded-md text-xs font-bold tracking-widest uppercase transition-colors whitespace-nowrap shadow-md"
          >
            Generate Itinerary
          </button>
        </div>

      </div>

    </div>
  );
}
