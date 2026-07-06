import { useRouter } from '../context/RouterContext';
import { WELLNESS_EXPERIENCES, getWellnessExperience, getRelatedWellnessExperiences } from '../data/wellnessData';
import { DESTINATIONS } from '../data/destinations';
import { motion } from 'motion/react';
import { ArrowLeft, Heart, Sparkles, MapPin, BookOpen, Info, Award, Compass, HeartPulse, ShieldAlert } from 'lucide-react';

export default function WellnessExperienceDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  
  // Extract custom param
  const experienceId = route.params?.experienceId || 'ayurveda-kerala';
  const item = getWellnessExperience(experienceId) || WELLNESS_EXPERIENCES[0];

  const isFav = isInWishlist(item.id);
  const relatedItems = getRelatedWellnessExperiences(item.id, 3);

  // Retrieve actual State objects for cross-linking
  const matchedStates = DESTINATIONS.filter((state) => item.recommendedStates.includes(state.id));

  return (
    <div className="bg-cream min-h-screen py-12" id={`wellness-experience-detail-${item.id}-view`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <button
            onClick={() => navigate('wellness')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Wellness & Spirituality</span>
          </button>
          
          <span className="text-[10px] font-sans font-bold bg-teal-dark/10 text-teal-dark border border-teal-dark/20 px-3 py-1 rounded-full uppercase tracking-wider">
            {item.categoryLabel}
          </span>
        </div>

        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Content Pane (8 columns) */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Header Block */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gold">SACRED CONSCIOUSNESS</span>
                <span className="text-xs text-charcoal-light font-sans font-semibold">•</span>
                <span className="text-[10px] font-bold text-teal-dark tracking-[0.2em] uppercase">REGION: {item.location}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-bold tracking-tight">
                    {item.title}
                  </h1>
                </div>
                <button
                  onClick={() => toggleWishlist(item.id)}
                  className={`p-3 rounded-full border transition-all cursor-pointer shrink-0 ${
                    isFav 
                      ? 'bg-heritage-red text-cream border-heritage-red shadow-lg' 
                      : 'bg-white text-heritage-red border-gold/20 hover:border-heritage-red'
                  }`}
                  title={isFav ? "Remove from Saved" : "Save this Experience"}
                >
                  <Heart className={`w-5 h-5 ${isFav ? 'fill-cream' : ''}`} />
                </button>
              </div>
              
              <p className="mt-4 text-base sm:text-lg font-sans text-charcoal-light font-medium leading-relaxed italic border-l-2 border-gold/30 pl-4 py-1">
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            </div>

            {/* Narrative, Intro and Deep History */}
            <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 shadow-sm space-y-6">
              <div>
                <h2 className="font-serif text-2xl font-bold text-teal-dark border-b border-gold/10 pb-3 mb-4 flex items-center gap-2">
                  <HeartPulse className="w-5 h-5 text-gold shrink-0" />
                  <span>The Path of Mindfulness & Healing</span>
                </h2>
                <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed">
                  {item.intro}
                </p>
              </div>
              
              <div className="pt-6 border-t border-gold/10">
                <h3 className="font-serif text-xl font-bold text-charcoal mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-gold shrink-0" />
                  <span>Sacred Origins & Philosophy</span>
                </h3>
                <p className="font-sans text-sm sm:text-base text-charcoal/80 leading-relaxed whitespace-pre-line">
                  {item.history}
                </p>
              </div>
            </div>

            {/* Key Practices */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center gap-2">
                <Award className="w-6 h-6 text-gold shrink-0" />
                <span>The Core Sacred Practices</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {item.keyPractices.map((elem, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-gold/10 hover:border-gold/30 p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col"
                  >
                    <span className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-2">PRACTICE 0{idx + 1}</span>
                    <h4 className="font-serif text-base font-bold text-charcoal mb-2">{elem.title}</h4>
                    <p className="text-xs sm:text-sm font-sans text-charcoal/70 leading-relaxed flex-grow">
                      {elem.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sacred Sites */}
            <div className="space-y-6 bg-cream-dark border border-gold/15 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center gap-2">
                <Compass className="w-6 h-6 text-gold shrink-0" />
                <span>Eminent Centers of Practice & Sacred Monasteries</span>
              </h3>
              <p className="text-xs sm:text-sm text-charcoal/70 max-w-2xl font-sans leading-relaxed">
                Where to immerse, meditate, or undergo traditional healing:
              </p>
              
              <div className="space-y-4 mt-4">
                {item.sacredPlaces.map((place, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-gold/10 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-serif text-base font-bold text-heritage-red">{place.name}</h4>
                      <div className="flex items-center gap-1.5 text-xs text-charcoal/60 font-sans">
                        <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
                        <span>{place.location}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed mt-2 font-sans">
                        {place.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended States Grid (Interactive Cross-Links) */}
            <div className="space-y-6">
              <h3 className="font-serif text-2xl font-bold text-charcoal flex items-center gap-2">
                <MapPin className="w-6 h-6 text-heritage-red shrink-0" />
                <span>Interwoven Regional Destinies</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {matchedStates.map((state) => (
                  <div
                    key={state.id}
                    onClick={() => navigate('destination-detail', { id: state.id })}
                    className="bg-white border border-gold/15 rounded-xl overflow-hidden hover:border-gold/40 hover:shadow-md transition-all cursor-pointer flex group shadow-sm"
                  >
                    <div className="w-24 h-full min-h-[96px] overflow-hidden shrink-0 relative">
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
                      <p className="text-[10px] text-charcoal/50 line-clamp-1 font-sans mt-1">{state.description}</p>
                      <span className="text-[10px] text-teal-dark font-sans font-bold mt-2 block flex items-center gap-1 group-hover:underline">
                        <span>Read Regional Guide</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-24">
            
            {/* Practical Logistics & Etiquette Widget */}
            <div className="bg-white border border-gold/15 rounded-2xl p-6 shadow-sm space-y-6">
              <span className="text-[10px] font-bold tracking-widest text-gold uppercase block flex items-center gap-1">
                <Info className="w-4 h-4 text-gold shrink-0" />
                <span>PRACTICAL LEDGER & SACRED ETIQUETTE</span>
              </span>
              
              <div className="space-y-4">
                {item.practicalTips.map((tip, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-b border-gold/10 pb-4 last:border-0 last:pb-0">
                    <span className="w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center text-heritage-red text-[10px] font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-xs font-sans text-charcoal-light leading-relaxed font-medium">
                      {tip}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trip Planner CTA Widget */}
            <div className="bg-teal-dark text-cream rounded-2xl p-6 border border-gold/20 shadow-lg space-y-4">
              <div className="w-10 h-10 bg-gold rounded-full flex items-center justify-center text-teal-dark">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-bold text-white">Integrate into Trip Plan</h3>
              <p className="text-xs font-sans text-cream/80 leading-relaxed">
                Incorporate {item.title} into your spiritual or wellness-oriented tour plan of India.
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
              <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-1">SPIRITUAL PATHS</span>
              <h2 className="font-serif text-3xl font-bold text-charcoal">Related Wellness Journeys</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedItems.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate('wellness-experience-detail', { experienceId: rel.id })}
                className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <span className="text-gold font-sans text-[9px] uppercase tracking-wider font-bold">
                      {rel.categoryLabel}
                    </span>
                    <h4 className="text-white text-base font-serif font-bold mt-0.5">{rel.title}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                    {rel.intro}
                  </p>
                  <span className="text-[10px] font-sans font-bold text-heritage-red group-hover:text-heritage-red-light mt-3 block">
                    Read Detailed Guide &rarr;
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
