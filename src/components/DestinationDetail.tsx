import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { getCitiesForState, ATTRACTIONS, EXPERIENTIAL_ITEMS, HERITAGE_SITES, NATIONAL_PARKS } from '../data/experientialData';
import { ADVENTURE_ACTIVITIES } from '../data/adventureData';
import { CUISINES } from '../data/cuisineData';
import { CULTURE_EXPERIENCES } from '../data/cultureData';
import { WELLNESS_EXPERIENCES } from '../data/wellnessData';
import { Heart, MapPin, Calendar, Compass, Shield, Bus, Train, Plane, ArrowLeft, Plus, ChevronRight, Check, Activity, HeartPulse } from 'lucide-react';
import { motion } from 'motion/react';

export default function DestinationDetail() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const id = route.params?.id || '';

  // Find the current active destination
  const state = DESTINATIONS.find((d) => d.id === id);

  if (!state) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center" id="destination-not-found">
        <Compass className="w-16 h-16 text-gold/30 mx-auto mb-4 animate-spin" />
        <h2 className="font-serif text-2xl font-bold text-charcoal">Destination Guide Not Found</h2>
        <p className="text-sm text-charcoal/50 mt-2">The state or territory identifier could not be resolved.</p>
        <button
          onClick={() => navigate('destinations')}
          className="mt-6 px-6 py-2.5 bg-heritage-red hover:bg-heritage-red-light text-cream text-xs tracking-wider uppercase font-bold rounded shadow-md transition-colors"
        >
          Return to Destinations List
        </button>
      </div>
    );
  }

  // Find actual festivals celebrated in this state
  const celebratedFestivals = FESTIVALS.filter((fest) => fest.bestPlaces.includes(state.id));

  // Find cities within this state (guarantees 2-4 cities via our generator)
  const cities = getCitiesForState(state.id, state.name);

  // Find signature experiences for this state
  const experiences = EXPERIENTIAL_ITEMS.filter(ex => ex.recommendedStates.includes(state.id));

  // Find national parks in this state
  const stateParks = NATIONAL_PARKS.filter(p => p.stateId === state.id);

  // Find adventure activities in this state
  const stateAdventures = ADVENTURE_ACTIVITIES.filter(act => act.recommendedStates.includes(state.id));

  // Find regional cuisines in this state
  const stateCuisines = CUISINES.filter(c => c.recommendedStates.includes(state.id));

  // Find detailed cultural experiences for this state
  const stateCultures = CULTURE_EXPERIENCES.filter(cult => cult.recommendedStates.includes(state.id));

  // Find detailed wellness experiences for this state
  const stateWellness = WELLNESS_EXPERIENCES.filter(well => well.recommendedStates.includes(state.id));

  return (
    <div className="bg-cream min-h-screen" id={`state-detail-${state.id}-view`}>
      
      {/* 1. Immersive Hero Header */}
      <div className="relative h-[65vh] sm:h-[75vh] flex items-end overflow-hidden" id="state-detail-hero">
        <img 
          src={state.image} 
          alt={state.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Cinematic gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />

        <div className="absolute top-6 left-6 z-20">
          <button
            onClick={() => navigate('destinations')}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-cream hover:text-gold bg-black/45 backdrop-blur-md px-4 py-2 rounded-full border border-gold/15 transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Explore All 36</span>
          </button>
        </div>

        <div className="relative z-10 w-full pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 text-cream">
            <div>
              <span className="px-3.5 py-1 bg-gold/30 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase border border-gold/30 inline-block mb-3">
                {state.region} India • {state.type === 'state' ? 'State' : 'Union Territory'}
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide drop-shadow-lg">
                {state.name}
              </h1>
              <div className="flex items-center gap-2 text-sm text-gold-light mt-2 drop-shadow">
                <MapPin className="w-4 h-4 text-gold" />
                <span>Capital: <strong className="font-semibold text-cream">{state.capital}</strong></span>
              </div>
            </div>

            {/* Heart toggle inside Detail Hero */}
            <button
              onClick={() => toggleWishlist(state.id)}
              className="px-5 py-3.5 bg-cream/90 hover:bg-cream text-heritage-red rounded-lg text-xs font-semibold tracking-wider uppercase shadow-xl flex items-center justify-center gap-2 self-start md:self-auto transition-colors"
            >
              <Heart className={`w-4 h-4 ${isInWishlist(state.id) ? 'fill-heritage-red text-heritage-red animate-pulse' : ''}`} />
              <span>{isInWishlist(state.id) ? 'Saved to Wishlist' : 'Save to Wishlist'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Overview and Logistics split section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Regional Overview & Transit Logistics */}
          <div className="lg:col-span-8 space-y-12">
            <div>
              <h2 className="font-serif text-3xl font-bold text-heritage-red mb-4 border-b border-gold/15 pb-2">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-charcoal-light leading-relaxed font-sans first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-heritage-red first-letter:float-left first-letter:mr-2">
                {state.overview}
              </p>
            </div>

            {/* How to Reach (Logistics grid) */}
            <div className="bg-cream-dark p-8 rounded-2xl border border-gold/15">
              <h3 className="font-serif text-xl font-bold text-charcoal mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-gold" />
                <span>How to Reach {state.name}</span>
              </h3>
              
              <div className="space-y-6 text-sm text-charcoal/80 font-sans">
                <div className="flex gap-4">
                  <div className="p-2.5 bg-white border border-gold/15 rounded-xl text-gold h-10 w-10 flex items-center justify-center shrink-0">
                    <Plane className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">By Air</h4>
                    <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">{state.howToReach.air}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-white border border-gold/15 rounded-xl text-gold h-10 w-10 flex items-center justify-center shrink-0">
                    <Train className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">By Rail</h4>
                    <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">{state.howToReach.rail}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="p-2.5 bg-white border border-gold/15 rounded-xl text-gold h-10 w-10 flex items-center justify-center shrink-0">
                    <Bus className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-charcoal">By Road</h4>
                    <p className="text-xs sm:text-sm mt-0.5 leading-relaxed">{state.howToReach.road}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Signature Food & Best Season */}
          <div className="lg:col-span-4 space-y-8">
            {/* Best Season card */}
            <div className="bg-white p-6 border border-gold/15 rounded-2xl shadow-sm flex items-center gap-4">
              <Calendar className="w-10 h-10 text-gold bg-gold/10 p-2.5 rounded-full shrink-0" />
              <div>
                <span className="text-[10px] uppercase font-semibold text-charcoal/40 block">BEST TIME TO VISIT</span>
                <span className="font-serif text-lg font-bold text-heritage-red">{state.bestTimeToVisit}</span>
              </div>
            </div>

            {/* Signature Food card */}
            <div className="bg-white p-8 border border-gold/15 rounded-2xl shadow-sm">
              <h3 className="font-serif text-xl font-bold text-heritage-red mb-4 border-b border-gold/10 pb-2">
                Signature Food
              </h3>
              <ul className="space-y-3 font-sans text-sm text-charcoal/85">
                {state.signatureFoods.map((food, idx) => {
                  // Find if there is a matching dish in EXPERIENTIAL_ITEMS
                  const matchedDish = EXPERIENTIAL_ITEMS.find(item => 
                    item.category === 'food' && 
                    (item.title.toLowerCase().includes(food.toLowerCase()) || 
                     food.toLowerCase().includes(item.title.toLowerCase()) ||
                     (item.id === 'hyderabadi-biryani' && food.toLowerCase().includes('biryani')) ||
                     (item.id === 'litti-chokha' && food.toLowerCase().includes('litti')) ||
                     (item.id === 'thukpa' && food.toLowerCase().includes('thukpa')) ||
                     (item.id === 'momos' && food.toLowerCase().includes('momo')) ||
                     (item.id === 'masor-tenga' && food.toLowerCase().includes('masor')) ||
                     (item.id === 'tandoor-clay-oven' && food.toLowerCase().includes('tandoor')) ||
                     (item.id === 'coastal-seafood' && food.toLowerCase().includes('seafood'))
                    )
                  );

                  return (
                    <li 
                      key={idx} 
                      className={`flex gap-2 items-start ${matchedDish ? 'cursor-pointer group' : ''}`}
                      onClick={() => {
                        if (matchedDish) {
                          navigate('food-detail', { dishId: matchedDish.id });
                        } else {
                          navigate('food');
                        }
                      }}
                    >
                      <Check className="w-4 h-4 text-gold mt-1 shrink-0 group-hover:text-heritage-red transition-colors" />
                      <span className={matchedDish ? 'group-hover:text-heritage-red group-hover:underline transition-colors font-semibold' : ''}>
                        {food} {matchedDish && '→'}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Quick Trip Planner Call-to-action */}
            <div className="bg-heritage-red text-cream p-8 rounded-2xl shadow-lg border border-gold/15 flex flex-col items-start">
              <span className="text-[10px] text-gold-light tracking-wider font-semibold uppercase">READY TO GO?</span>
              <h4 className="font-serif text-xl font-bold mt-1 mb-3">Custom build your trip to {state.name}</h4>
              <p className="text-xs text-cream/75 leading-relaxed mb-6 font-sans">
                Our Interactive Itinerary generator creates detailed day-by-day itineraries tailored directly to your duration, region preferences, and style.
              </p>
              <button
                onClick={() => navigate('trip-planner')}
                className="w-full text-center py-3 bg-gold hover:bg-gold-light text-charcoal font-bold text-xs uppercase tracking-widest rounded transition-colors"
              >
                Plan Itinerary
              </button>
            </div>

            {/* Social Media Atlas Call-to-action */}
            <div className="bg-white border border-gold/25 p-8 rounded-2xl shadow-md flex flex-col items-start mt-6 w-full text-left">
              <span className="text-[10px] text-gold-dark tracking-wider font-semibold uppercase flex items-center gap-1">
                <span className="w-2 h-2 bg-red-600 rounded-full inline-block"></span>
                REAL STORIES
              </span>
              <h4 className="font-serif text-xl font-bold text-charcoal mt-1 mb-3">Watch travelers in {state.name}</h4>
              <p className="text-xs text-gray-500 leading-relaxed mb-6 font-sans">
                Experience the raw sights and sounds of {state.name} through vlogger diaries, local food trails, and travel reels on our interactive portal.
              </p>
              <button
                onClick={() => navigate('social-atlas', { stateId: state.id })}
                className="w-full text-center py-3 bg-charcoal hover:bg-gold-dark text-white hover:text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Open Social Atlas</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

        </div>

        {/* 2.5 Cities & Towns to Explore section (REQUIRED AT LEAST 2-4 CITIES PER STATE) */}
        <div className="mb-24 border-t border-gold/15 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">URBAN LEDGER</span>
            <h2 className="font-serif text-3xl font-bold text-heritage-red">
              Cities & Towns to Explore
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-2">
              Deep dive into individual city biographies, historic neighborhoods, signature culinary spots, and bespoke walkways.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cities.map((city) => (
              <div
                key={city.id}
                onClick={() => navigate('city-detail', { stateId: state.id, cityId: city.id })}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold/10 hover:border-gold/35 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between h-96"
              >
                <div>
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-750 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-3 left-3 text-cream text-[10px] uppercase font-bold tracking-widest text-gold font-sans">
                      {city.bestTimeToVisit}
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors line-clamp-1 leading-tight">
                      {city.name}
                    </h3>
                    <p className="text-xs text-charcoal-light font-sans mt-2 line-clamp-3 leading-relaxed">
                      {city.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 mt-2 border-t border-gold/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-teal-dark group-hover:text-teal-light">
                  <span>Explore Biography</span>
                  <span>&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2.7 UNESCO World Heritage Sites Section */}
        {HERITAGE_SITES.filter(site => site.stateId === state.id || site.additionalStateIds?.includes(state.id)).length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">UNESCO CUSTODIANSHIP</span>
              <h2 className="font-serif text-3xl font-bold text-heritage-red">
                UNESCO World Heritage Sites
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-2">
                Discover masterpieces of human creative genius and architectural wonders recognized globally for their outstanding universal value in {state.name}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {HERITAGE_SITES.filter(site => site.stateId === state.id || site.additionalStateIds?.includes(state.id)).map((site) => (
                <div
                  key={site.id}
                  onClick={() => navigate('heritage-site-detail', { siteId: site.id })}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={site.image}
                        alt={site.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-gold text-charcoal font-sans text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow">
                        Declared {site.yearDeclared}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors">
                        {site.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-light font-sans line-clamp-3 leading-relaxed">
                        {site.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="p-6 pt-0 border-t border-gold/10 mt-4 flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                    <span className="text-gold flex items-center gap-1 text-[10px]">
                      <span>UNESCO Masterpiece</span>
                    </span>
                    <span className="text-heritage-red group-hover:translate-x-1.5 transition-transform flex items-center gap-1 text-[10px]">
                      <span>Explore Detail</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Top Attractions section (Grid of high fidelity attraction blocks, fully cross-linked) */}
        <div className="mb-24 border-t border-gold/15 pt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">MONUMENTS & LANDMARKS</span>
            <h2 className="font-serif text-3xl font-bold text-heritage-red">
              Top Attractions in {state.name}
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-2">
              Iconic shrines, architectural marvels, and monumental masterpieces holding outstanding universal value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {state.topAttractions.map((att, idx) => {
              // Match with standalone attractions data
              const matchedAttr = ATTRACTIONS.find((a) => 
                a.name.toLowerCase() === att.name.toLowerCase() || 
                a.id.includes(att.name.toLowerCase().replace(/ /g, '-')) ||
                att.name.toLowerCase().includes(a.name.toLowerCase())
              );
              // Match with UNESCO Heritage Sites
              const matchedHeritage = HERITAGE_SITES.find((h) => 
                h.name.toLowerCase() === att.name.toLowerCase() || 
                h.id.includes(att.name.toLowerCase().replace(/ /g, '-')) ||
                att.name.toLowerCase().includes(h.name.toLowerCase())
              );
              // Match with National Parks
              const matchedPark = NATIONAL_PARKS.find((p) => 
                p.name.toLowerCase() === att.name.toLowerCase() || 
                p.id.includes(att.name.toLowerCase().replace(/ /g, '-')) ||
                att.name.toLowerCase().includes(p.name.toLowerCase())
              );

              const isClickable = !!(matchedAttr || matchedHeritage || matchedPark);

              return (
                <div 
                  key={idx}
                  onClick={() => {
                    if (matchedAttr) {
                      navigate('attraction-detail', { stateId: state.id, attractionId: matchedAttr.id });
                    } else if (matchedHeritage) {
                      navigate('heritage-site-detail', { siteId: matchedHeritage.id });
                    } else if (matchedPark) {
                      navigate('national-park-detail', { parkId: matchedPark.id });
                    }
                  }}
                  className={`bg-white rounded-xl overflow-hidden border border-gold/10 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between ${isClickable ? 'cursor-pointer hover:border-gold/30' : ''}`}
                >
                  <div>
                    <div className="h-52 overflow-hidden relative">
                      <img 
                        src={att.image} 
                        alt={att.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-charcoal mb-2 leading-snug group-hover:text-heritage-red transition-colors">
                        {att.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal/75 leading-relaxed font-sans">
                        {att.description}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0 mt-2 border-t border-gold/10 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                    {matchedAttr && (
                      <>
                        <span className="text-heritage-red font-bold">Standalone Guide</span>
                        <span className="text-heritage-red group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </>
                    )}
                    {matchedHeritage && (
                      <>
                        <span className="text-gold font-bold">UNESCO Heritage Site</span>
                        <span className="text-gold group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </>
                    )}
                    {matchedPark && (
                      <>
                        <span className="text-teal-dark font-bold">National Park Guide</span>
                        <span className="text-teal-dark group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </>
                    )}
                    {!isClickable && (
                      <span className="text-charcoal/40 italic">Signature Highlight</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* National Parks & Wildlife Sanctuaries Section */}
        {stateParks.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16" id="state-national-parks">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">WILDLIFE RESERVES & SANCTUARIES</span>
              <h2 className="font-serif text-3xl font-bold text-heritage-red">
                National Parks in {state.name}
              </h2>
              <p className="text-xs sm:text-sm text-charcoal-light font-sans mt-2">
                Explore the magnificent wilderness, protected biospheres, and iconic fauna of {state.name}. Click on any park to view detailed guides.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stateParks.map((park) => (
                <div
                  key={park.id}
                  onClick={() => navigate('national-park-detail', { parkId: park.id })}
                  className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={park.image}
                        alt={park.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-cream">
                        <MapPin className="w-3 h-3 text-gold" />
                        <span className="text-[10px] font-bold uppercase tracking-wider">{state.name}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-serif text-lg font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors">
                        {park.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-charcoal-light font-sans line-clamp-3 leading-relaxed">
                        {park.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-6 pt-0 border-t border-gold/10 mt-4 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider">
                    <span className="text-gold truncate max-w-[180px]">Fauna: {park.keyFauna.slice(0, 2).join(', ')}</span>
                    <span className="text-heritage-red group-hover:translate-x-1.5 transition-transform flex items-center gap-1 shrink-0">
                      <span>View Details</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Photo gallery */}
        {state.gallery.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16">
            <h2 className="font-serif text-3xl font-bold text-heritage-red text-center mb-10">Landscape Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {state.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  className="h-72 overflow-hidden rounded-xl border border-gold/15 shadow-md relative group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`${state.name} scene ${idx}`} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4.5 Wilderness & Outdoor Adventures */}
        {stateAdventures.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16" id="state-detail-adventure-section">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">TERRAIN EXPEDITIONS</span>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Wilderness & Outdoor Adventures</h2>
              </div>
              <button
                onClick={() => navigate('adventure')}
                className="text-xs font-bold uppercase tracking-wider text-teal-dark hover:text-teal-light hover:underline cursor-pointer"
              >
                Browse All Adventure Guides &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateAdventures.map((act) => (
                <div
                  key={act.id}
                  onClick={() => navigate('adventure-activity-detail', { activityId: act.id })}
                  className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-lg shadow-sm transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={act.image}
                        alt={act.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 right-3 text-[9px] font-bold text-cream bg-heritage-red px-2 py-0.5 rounded-full uppercase tracking-wider">
                        {act.difficulty}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[9px] text-gold font-bold uppercase tracking-widest block mb-1">{act.category} • {act.terrainType}</span>
                      <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                        {act.title}
                      </h3>
                      <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                        {act.description}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 pb-5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                    <span>Best Season: {act.bestSeason.split(' (')[0]}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Explore</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4.6 Culinary Heritage & Local Cuisines */}
        {stateCuisines.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16" id="state-detail-cuisine-section">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">LOCAL FLAVORS & SPICES</span>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Culinary Heritage & Dining</h2>
              </div>
              <button
                onClick={() => navigate('food')}
                className="text-xs font-bold uppercase tracking-wider text-teal-dark hover:text-teal-light hover:underline cursor-pointer"
              >
                Browse All Culinary Guides &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {stateCuisines.map((c) => (
                <div
                  key={c.id}
                  onClick={() => navigate('cuisine-detail', { cuisineId: c.id })}
                  className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-lg shadow-sm transition-all group cursor-pointer flex flex-col md:flex-row"
                >
                  <div className="md:w-2/5 relative h-48 md:h-auto min-h-[180px] overflow-hidden shrink-0">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/50 md:from-black/10 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <span className="text-[9px] text-gold font-bold uppercase tracking-widest block mb-1">{c.region}</span>
                      <h3 className="font-serif text-xl font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                        {c.title}
                      </h3>
                      <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                        {c.intro}
                      </p>
                      
                      {/* Dishes bullet tags */}
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.signatureDishes.slice(0, 3).map((dish, dIdx) => (
                          <span key={dIdx} className="text-[9px] font-semibold bg-cream border border-gold/15 text-charcoal-light px-2 py-0.5 rounded">
                            {dish.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                      <span>Dining: {c.signatureDishes.length} highlights</span>
                      <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        <span>Read Gastronomy Guide</span>
                        <span>&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4.7 Cultural Heritage & Fine Arts */}
        {stateCultures.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16" id="state-detail-culture-section">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">CRAFT & PERFORMANCE LEGACY</span>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Cultural Heritage & Living Arts</h2>
              </div>
              <button
                onClick={() => navigate('culture')}
                className="text-xs font-bold uppercase tracking-wider text-teal-dark hover:text-teal-light hover:underline cursor-pointer"
              >
                Browse All Cultural Traditions &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateCultures.map((cult) => (
                <div
                  key={cult.id}
                  onClick={() => navigate('culture-experience-detail', { experienceId: cult.id })}
                  className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-lg shadow-sm transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={cult.image}
                        alt={cult.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 right-3 text-[9px] font-bold text-cream bg-gold/80 px-2.5 py-1 rounded uppercase tracking-wider">
                        {cult.categoryLabel}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[9px] text-gold font-bold uppercase tracking-widest block mb-1">Origin: {cult.origin}</span>
                      <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                        {cult.title}
                      </h3>
                      <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                        {cult.intro}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 pb-5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                    <span>Explore Tradition</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4.8 Wellness, Mind & Spiritual Sanctuaries */}
        {stateWellness.length > 0 && (
          <div className="mb-24 border-t border-gold/15 pt-16" id="state-detail-wellness-section">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
              <div>
                <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-1">REJUVENATION & SACRED PATHS</span>
                <h2 className="font-serif text-3xl font-bold text-heritage-red">Wellness & Spiritual Sanctuaries</h2>
              </div>
              <button
                onClick={() => navigate('wellness')}
                className="text-xs font-bold uppercase tracking-wider text-teal-dark hover:text-teal-light hover:underline cursor-pointer"
              >
                Browse All Spiritual Sanctuary Guides &rarr;
              </button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {stateWellness.map((well) => (
                <div
                  key={well.id}
                  onClick={() => navigate('wellness-experience-detail', { experienceId: well.id })}
                  className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-lg shadow-sm transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-44 overflow-hidden">
                      <img
                        src={well.image}
                        alt={well.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-3 right-3 text-[9px] font-bold text-cream bg-teal-dark px-2.5 py-1 rounded uppercase tracking-wider">
                        {well.categoryLabel}
                      </div>
                    </div>
                    <div className="p-5">
                      <span className="text-[9px] text-gold font-bold uppercase tracking-widest block mb-1">Location: {well.location.split(',')[0]}</span>
                      <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                        {well.title}
                      </h3>
                      <p className="text-xs text-charcoal-light font-sans line-clamp-2 leading-relaxed">
                        {well.intro}
                      </p>
                    </div>
                  </div>
                  <div className="p-5 pt-0 pb-5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                    <span>Immerse in Healing</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>View Details</span>
                      <span>&rarr;</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 5. EXPERIENTIAL CROSS LINKS */}
        <div className="border-t border-gold/15 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Block: Celebrated Festivals */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-2">
              Celebrated Festivals
            </h3>
            {celebratedFestivals.length === 0 ? (
              <p className="text-xs sm:text-sm text-charcoal/50 font-sans italic">
                View our main Festivals Calendar to explore major cross-region celebrations celebrated here.
              </p>
            ) : (
              <div className="grid gap-4">
                {celebratedFestivals.map((fest) => (
                  <div 
                    key={fest.id}
                    onClick={() => navigate('festival-detail', { id: fest.id })}
                    className="flex items-center gap-4 bg-white p-3 border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group shadow-sm"
                  >
                    <img 
                      src={fest.image} 
                      alt={fest.name} 
                      className="w-16 h-16 object-cover rounded-md"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] uppercase font-bold text-gold">{fest.dates}</span>
                      <h4 className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">
                        {fest.name}
                      </h4>
                      <p className="text-[10px] text-charcoal/50 mt-0.5 font-sans line-clamp-1">{fest.significance}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Block: Signature Experiences */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl font-bold text-heritage-red border-b border-gold/10 pb-2">
              Signature Experiences
            </h3>
            {experiences.length === 0 ? (
              <p className="text-xs sm:text-sm text-charcoal/60 font-sans leading-relaxed">
                Explore specialized travel routes and custom activity guides.
              </p>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {experiences.slice(0, 4).map((exp) => (
                  <div
                    key={exp.id}
                    onClick={() => {
                      if (exp.category === 'adventure') navigate('adventure-detail', { activityId: exp.id });
                      else if (exp.category === 'food') navigate('food-detail', { dishId: exp.id });
                      else if (exp.category === 'culture') navigate('culture-detail', { experienceId: exp.id });
                      else navigate('wellness-detail', { experienceId: exp.id });
                    }}
                    className="flex gap-4 items-center p-3 bg-white border border-gold/10 hover:border-gold/30 hover:shadow-md rounded-xl transition-all cursor-pointer group"
                  >
                    <img 
                      src={exp.image} 
                      alt={exp.title} 
                      className="w-20 h-20 object-cover rounded-lg shrink-0" 
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-gold font-bold">{exp.category}</span>
                      <h4 className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors line-clamp-1">{exp.title}</h4>
                      <p className="text-[10px] text-charcoal/60 font-sans line-clamp-2 mt-1">{exp.tagline}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {experiences.length > 4 && (
              <button
                onClick={() => navigate('things-to-do')}
                className="text-xs font-bold text-heritage-red uppercase tracking-wider hover:underline"
              >
                View All Experiences &rarr;
              </button>
            )}
          </div>

        </div>

        {/* 6. RELATED STATES / INTER-LINKING */}
        <div className="border-t border-gold/15 pt-16 mt-16" id="state-detail-cross-linking">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold block mb-2">CONTINUE YOUR JOURNEY</span>
            <h3 className="font-serif text-3xl font-bold text-heritage-red">
              Explore Other Indian States
            </h3>
            <p className="text-xs sm:text-sm text-charcoal/60 font-sans mt-2">
              Extend your travels to neighboring or culturally connected states and design a comprehensive sub-continental journey.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {DESTINATIONS
              .filter((d) => d.id !== state.id)
              .sort((a, b) => {
                const targetIds = [
                  'uttar-pradesh', 'uttarakhand', 'west-bengal', 'andaman-nicobar', 'chandigarh-ut',
                  'rajasthan', 'sikkim', 'tamil-nadu', 'telangana', 'tripura',
                  'meghalaya', 'mizoram', 'nagaland', 'odisha', 'punjab',
                  'goa', 'gujarat', 'himachal-pradesh'
                ];
                const aIsTarget = targetIds.includes(a.id) ? 1 : 0;
                const bIsTarget = targetIds.includes(b.id) ? 1 : 0;
                return bIsTarget - aIsTarget || 0.5 - Math.random();
              })
              .slice(0, 3)
              .map((otherState) => (
                <div 
                  key={otherState.id}
                  onClick={() => navigate('destination-detail', { id: otherState.id })}
                  className="bg-white rounded-xl overflow-hidden border border-gold/10 shadow-sm hover:shadow-lg transition-all group cursor-pointer flex flex-col justify-between"
                >
                  <div className="h-40 overflow-hidden relative">
                    <img 
                      src={otherState.image} 
                      alt={otherState.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wider text-cream">
                      {otherState.region} India
                    </span>
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-serif text-base font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-1">
                        {otherState.name}
                      </h4>
                      <p className="text-xs text-charcoal/70 line-clamp-2 font-sans mb-3">
                        {otherState.description}
                      </p>
                    </div>
                    <span className="text-[10px] font-bold uppercase text-heritage-red group-hover:underline inline-flex items-center gap-1">
                      Explore State Guide &rarr;
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
