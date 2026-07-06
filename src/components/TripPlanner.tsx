import React, { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { Compass, Calendar, MapPin, Sparkles, Send, ShieldCheck, ChevronRight, Clock, Plus, HelpCircle, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DailySchedule {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  stay: string;
  foodSuggestion: string;
}

export default function TripPlanner() {
  const { navigate, wishlist } = useRouter();

  // Inputs
  const [region, setRegion] = useState('North');
  const [duration, setDuration] = useState('7'); // '3', '7', '14'
  const [style, setStyle] = useState('culture'); // 'culture', 'food', 'adventure', 'wellness'
  const [party, setParty] = useState('Solo'); // 'Solo', 'Couple', 'Family', 'Friends'
  const [isGenerated, setIsGenerated] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState<DailySchedule[]>([]);
  const [featuredStates, setFeaturedStates] = useState<string[]>([]);
  const [featuredFestivals, setFeaturedFestivals] = useState<string[]>([]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerated(true);

    // Pre-curated, high-fidelity daily schedules based on selected parameters
    let days: DailySchedule[] = [];
    let stateIds: string[] = [];
    let festIds: string[] = [];

    if (region === 'North' || region === 'All') {
      if (style === 'culture') {
        stateIds = ['uttar-pradesh', 'rajasthan', 'delhi-ut'];
        festIds = ['diwali', 'holi'];
        days = [
          {
            day: 1,
            title: 'Welcome to the Capital',
            morning: 'Land in New Delhi. Drive past the majestic India Gate and Mughal-era President House gardens.',
            afternoon: 'Explore the red sandstone fortresses of Humayun\'s Tomb, the architectural prototype of the Taj Mahal.',
            evening: 'Wander through the narrow, sensory street lanes of Chandni Chowk, sampling saffron tea.',
            stay: 'The Imperial Heritage Hotel, Delhi',
            foodSuggestion: 'Old Delhi Seekh Kebabs and Butter Naan.'
          },
          {
            day: 2,
            title: 'Mughal Majesty in Agra',
            morning: 'Board the early high-speed Gatimaan Express train directly to Agra.',
            afternoon: 'Traverse the towering, red sandstone fortifications of Agra Fort, exploring imperial mirror-lined baths.',
            evening: 'Stand at Mehtab Bagh gardens across the Yamuna River to watch the white marble Taj Mahal glow gold at sunset.',
            stay: 'Amarvilas Palace Resort, Agra',
            foodSuggestion: 'Sweet pumpkin confectionaries called Petha.'
          },
          {
            day: 3,
            title: 'Ghost City & Royal Rajasthan',
            morning: 'Drive to the abandoned sandstone ghost capital of Emperor Akbar in Fatehpur Sikri.',
            afternoon: 'Cross into Jaipur, the Pink City of Rajasthan. Visit the astronomical stone sundials of Jantar Mantar.',
            evening: 'Dine in a traditional mud-cottage complex enjoying regional folk puppet dances.',
            stay: 'Jai Mahal Palace, Jaipur',
            foodSuggestion: 'Spicy Dal Baati Churma cooked on slow firewood.'
          },
          {
            day: 4,
            title: 'Fortress Walls of Amber',
            morning: 'Ascend the high, battle-ready Amber Fort on jeep, exploring marble palace suites with mirrors.',
            afternoon: 'Stand before the pink-colored wind lattice screen facade of Hawa Mahal (Palace of Winds).',
            evening: 'Sip cardamom tea at Nahargarh Fort overlooking the entirety of the illuminated Pink City.',
            stay: 'Jai Mahal Palace, Jaipur',
            foodSuggestion: 'Rich, cardamom-infused royal chicken curry (Laal Maas).'
          }
        ];
      } else if (style === 'wellness') {
        stateIds = ['uttarakhand', 'himachal-pradesh'];
        festIds = ['kumbh-mela'];
        days = [
          {
            day: 1,
            title: 'Journey to the Mountain Ashram',
            morning: 'Depart Delhi by road toward the emerald foothills of Uttarakhand.',
            afternoon: 'Decompress inside a silent, forest-surrounded yoga ashram on the bank of the Ganges.',
            evening: 'Participate in a silent temple breathing session guided by resident masters.',
            stay: 'Parmarth Niketan Ashram, Rishikesh',
            foodSuggestion: 'Nutrient-rich, purely vegetarian organic khichdi.'
          },
          {
            day: 2,
            title: 'Ganges Ritual & Floating Lights',
            morning: 'Wake for dawn meditation and pranayama breath exercises along the sacred river stones.',
            afternoon: 'Walk across the Lakshman Jhula suspension bridge to explore multi-tier orange brick temples.',
            evening: 'Witness the high-energy Ganga Aarti fire ceremony, letting floating flower lanterns slide down the river.',
            stay: 'Parmarth Niketan Ashram, Rishikesh',
            foodSuggestion: 'Deep-fried local potato patties with sweet yogurt.'
          },
          {
            day: 3,
            title: 'High Himalayan Retreat',
            morning: 'Drive deep into the pine forests of Dharamshala in Himachal Pradesh.',
            afternoon: 'Walk through silent paths surrounding the residential temple complex of the Dalai Lama.',
            evening: 'Listen to Tibetan Buddhist monks gather for rapid, rhythmic philosophical debates in the gardens.',
            stay: 'Norbulingka Heritage Lodge, Dharamshala',
            foodSuggestion: 'Hot vegetable dumplings (moms) with clear spinach broth.'
          }
        ];
      } else {
        // Fallback or adventure
        stateIds = ['ladakh-ut', 'himachal-pradesh'];
        festIds = ['hemis-festival'];
        days = [
          {
            day: 1,
            title: 'Ascending the Cold Desert',
            morning: 'Board early flight to Leh. Absolute rest required to acclimate to 11,500 ft elevation.',
            afternoon: 'Sip warm butter tea in Leh Palace gardens, watching massive barren purple ridges.',
            evening: 'Walk through Leh market to purchase hand-woven wool carpets and turquoise beads.',
            stay: 'The Grand Dragon Lodge, Leh',
            foodSuggestion: 'Warm thukpa noodle soup with wild ginger.'
          },
          {
            day: 2,
            title: 'Monastery Silences & Prayer Wheels',
            morning: 'Drive along the Indus River to explore Thiksey Monastery, a multi-tier white clay structure.',
            afternoon: 'Stand before the 49-foot statue of Maitreya Buddha, looking out over green valley fields.',
            evening: 'Listen to copper horns resound through the prayer halls as monks prepare evening chants.',
            stay: 'The Grand Dragon Lodge, Leh',
            foodSuggestion: 'Fresh apricot jam with baked barley flatbread.'
          }
        ];
      }
    } else {
      // South India, West India, Northeast, East
      if (style === 'food') {
        stateIds = ['kerala', 'tamil-nadu', 'goa'];
        festIds = ['onam', 'pongal'];
        days = [
          {
            day: 1,
            title: 'The Spice Port of Kochi',
            morning: 'Land in historic Fort Kochi. Walk past massive cantilevered Chinese Fishing Nets along the coast.',
            afternoon: 'Navigate old ginger warehouses inside Mattancherry Jew Town, purchasing cardamom oil.',
            evening: 'Attend a heavy-makeup classical Kathakali dance drama depicting ocean myths.',
            stay: 'Brunton Boatyard Hotel, Kochi',
            foodSuggestion: 'Seafood baked inside fragrant banana leaves with coconut.'
          },
          {
            day: 2,
            title: 'Houseboat Slow Sailing',
            morning: 'Drive to the palm-dotted backwaters of Alleppey to board a luxury thatched houseboat.',
            afternoon: 'Sail past emerald paddy fields, water ducks, and tiny canal villages.',
            evening: 'Anchor in a silent lagoon to watch the sky turn deep copper, dining on freshly caught pearl spot fish.',
            stay: 'Luxury Houseboat, Kumarakom',
            foodSuggestion: 'Fragrant red matta rice with sour raw mango curry.'
          },
          {
            day: 3,
            title: 'Tea Mountains of Munnar',
            morning: 'Drive up winding roads toward the cool mountain tea estates of Munnar.',
            afternoon: 'Walk through dense cardamon bushes, learning how black leaves are dried and rolled.',
            evening: 'Decompress overlooking deep mountain valleys with hot ginger tea.',
            stay: 'Windermere Estate Lodge, Munnar',
            foodSuggestion: 'Flaky wheat flatbreads with rich potato stew.'
          }
        ];
      } else {
        // South/East general Culture
        stateIds = ['kerala', 'tamil-nadu', 'karnataka'];
        festIds = ['ganesh-chaturthi', 'durga-puja'];
        days = [
          {
            day: 1,
            title: 'Temples of Stone in Tamil Nadu',
            morning: 'Arrive in Madurai. Stand beneath the massive, colorful sculpted towers of Meenakshi Temple.',
            afternoon: 'Explore the massive wooden-pillared corridors and sacred lotus pools.',
            evening: 'Watch the evening deity procession accompanied by roaring brass horns and drums.',
            stay: 'Heritage Madurai Hotel, Madurai',
            foodSuggestion: 'Fluffy idlis served with five varieties of fresh chutneys.'
          },
          {
            day: 2,
            title: 'The Boulder Ruins of Hampi',
            morning: 'Depart to the dry plains of Karnataka to explore the ancient empire capital of Hampi.',
            afternoon: 'Walk beneath the stone chariots and massive granite pillars carved with dancing horses.',
            evening: 'Climb Hemakuta Hill to view the sun sink directly into the boulder hills and flowing river.',
            stay: 'Evolve Back Resort, Hampi',
            foodSuggestion: 'Mild coconut lentil stews with puffed flatbreads.'
          }
        ];
      }
    }

    // Limit or expand based on duration selection
    if (duration === '3') {
      days = days.slice(0, 3);
    } else if (duration === '14') {
      // Loop or append matching items to simulate a massive full schedule
      days = [
        ...days,
        {
          day: days.length + 1,
          title: 'Regional Handicraft Villages',
          morning: 'Wander through local artisan colonies to watch silk weaving and hand-painted pottery.',
          afternoon: 'Participate in a direct workshop learning how block printing is pressed onto cotton.',
          evening: 'Pack bags for final departure, enjoying a premium farewell royal feast.',
          stay: 'Grand Palace Hotel',
          foodSuggestion: 'Saffron-infused milk sweets called Rabri.'
        }
      ];
    }

    setGeneratedItinerary(days);
    setFeaturedStates(stateIds);
    setFeaturedFestivals(festIds);
  };

  const matchedStates = DESTINATIONS.filter(s => featuredStates.includes(s.id));
  const matchedFestivals = FESTIVALS.filter(f => featuredFestivals.includes(f.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="itinerary-planner-view">
      
      {/* Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-2">PLAN YOUR TRIP</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight">
          Interactive Itinerary Builder
        </h1>
        <p className="mt-4 text-sm sm:text-base text-charcoal/70 leading-relaxed font-sans">
          Specify your geographic interests, vacation length, and travel intent. Our custom generator instantly crafts an elegant day-by-day route with signature meals and local guides.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Parameters Form */}
        <div className="lg:col-span-4 bg-white border border-gold/15 rounded-2xl p-8 shadow-sm">
          <h2 className="font-serif text-xl font-bold text-charcoal mb-6 border-b border-gold/10 pb-2">
            Trip Specifications
          </h2>
          <form onSubmit={handleGenerate} className="space-y-6 font-sans">
            
            {/* Region select */}
            <div>
              <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Desired Region</label>
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="North">Northern Himalayas & Deserts</option>
                <option value="South">Southern Coasts & Backwaters</option>
                <option value="All">Pan-India Heritage Routes</option>
              </select>
            </div>

            {/* Style select */}
            <div>
              <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Experiential Style</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { value: 'culture', label: 'Culture' },
                  { value: 'food', label: 'Culinary' },
                  { value: 'adventure', label: 'Adventure' },
                  { value: 'wellness', label: 'Wellness' }
                ].map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    onClick={() => setStyle(item.value)}
                    className={`p-3 text-xs font-semibold rounded-lg border transition-all ${
                      style === item.value 
                        ? 'bg-heritage-red border-heritage-red text-cream font-bold' 
                        : 'bg-white border-gold/15 text-charcoal hover:bg-gold/10'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration select */}
            <div>
              <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Vacation Length</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="3">3 - 5 Days (Compact)</option>
                <option value="7">7 - 10 Days (Recommended)</option>
                <option value="14">14+ Days (Grand Voyage)</option>
              </select>
            </div>

            {/* Party Select */}
            <div>
              <label className="block text-xs font-bold uppercase text-gold tracking-wider mb-2">Travel Companions</label>
              <select
                value={party}
                onChange={(e) => setParty(e.target.value)}
                className="w-full bg-cream/50 border border-gold/20 rounded-xl px-4 py-3 text-xs text-charcoal font-semibold focus:outline-none focus:border-gold cursor-pointer"
              >
                <option value="Solo">Solo Traveler</option>
                <option value="Couple">Romantic Couple</option>
                <option value="Family">Family Vacation</option>
                <option value="Friends">Friends Group</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-4 bg-heritage-red hover:bg-heritage-red-light text-cream rounded-xl text-xs font-bold tracking-widest uppercase transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 animate-spin" style={{ animationDuration: '6s' }} />
              <span>Generate Itinerary</span>
            </button>

          </form>
        </div>

        {/* Right Side: Results Display */}
        <div className="lg:col-span-8 space-y-8">
          <AnimatePresence mode="wait">
            {!isGenerated ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 bg-cream-dark border border-gold/15 rounded-2xl flex flex-col items-center justify-center px-6"
                id="itinerary-blank-slate"
              >
                <Compass className="w-16 h-16 text-gold/30 mb-4 animate-pulse" />
                <h3 className="font-serif text-2xl font-bold text-charcoal">Your Custom Itinerary Awaits</h3>
                <p className="text-sm text-charcoal/50 mt-2 max-w-sm">Adjust the sliders and select your parameters on the left, then click Generate to build a day-by-day travel map.</p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                className="space-y-10"
                id="generated-itinerary-display"
              >
                {/* Header Info */}
                <div className="bg-white p-6 border border-gold/15 rounded-2xl shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <span className="text-[10px] bg-gold/15 text-heritage-red px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                      {region} India • {style.toUpperCase()} Route
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-charcoal mt-2">
                      Your Curated {duration}-Day Journey
                    </h3>
                  </div>
                  <button
                    onClick={() => {
                      setIsGenerated(false);
                      setGeneratedItinerary([]);
                    }}
                    className="text-xs text-charcoal/45 hover:text-heritage-red uppercase font-semibold tracking-wider hover:underline"
                  >
                    Reset Builder
                  </button>
                </div>

                {/* Day-by-Day List */}
                <div className="space-y-6">
                  {generatedItinerary.map((day) => (
                    <div 
                      key={day.day} 
                      className="bg-white rounded-2xl border border-gold/15 overflow-hidden shadow-sm flex flex-col sm:flex-row items-stretch"
                    >
                      {/* Day count banner */}
                      <div className="bg-gold/10 border-b sm:border-b-0 sm:border-r border-gold/15 w-full sm:w-28 flex flex-col justify-center items-center p-6 shrink-0 text-center">
                        <span className="text-[10px] uppercase font-bold text-gold tracking-widest leading-none">DAY</span>
                        <span className="font-serif text-4xl font-bold text-heritage-red mt-1 leading-none">{day.day}</span>
                      </div>

                      {/* Day content detail */}
                      <div className="p-6 sm:p-8 flex-1 space-y-4">
                        <h4 className="font-serif text-xl font-bold text-charcoal leading-snug">{day.title}</h4>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-charcoal/80 font-sans border-t border-gold/10 pt-4">
                          <div>
                            <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">🌅 Morning</strong>
                            <p className="leading-relaxed">{day.morning}</p>
                          </div>
                          <div>
                            <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">☀️ Afternoon</strong>
                            <p className="leading-relaxed">{day.afternoon}</p>
                          </div>
                          <div>
                            <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">🌙 Evening</strong>
                            <p className="leading-relaxed">{day.evening}</p>
                          </div>
                        </div>

                        <div className="bg-cream p-4 rounded-xl text-xs sm:text-sm font-sans flex flex-col sm:flex-row gap-4 border border-gold/10 text-charcoal-light">
                          <div>
                            <strong className="text-[10px] font-bold text-heritage-red uppercase tracking-wider block mb-0.5">🛌 Overnight Stay</strong>
                            <span>{day.stay}</span>
                          </div>
                          <div className="sm:border-l sm:border-gold/20 sm:pl-4">
                            <strong className="text-[10px] font-bold text-heritage-red uppercase tracking-wider block mb-0.5">🍽️ Culinary Suggestion</strong>
                            <span>{day.foodSuggestion}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DYNAMIC CROSS LINKS TO FEATURED STATES & FESTIVALS */}
                {(matchedStates.length > 0 || matchedFestivals.length > 0) && (
                  <div className="bg-cream-dark border border-gold/20 rounded-2xl p-6 sm:p-8 space-y-6">
                    <h3 className="font-serif text-xl font-bold text-heritage-red border-b border-gold/15 pb-2">
                      Review Guides for your Travel Route
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* States */}
                      {matchedStates.length > 0 && (
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase text-gold tracking-wider block">TRAVERSED STATES</span>
                          <div className="space-y-2">
                            {matchedStates.map((state) => (
                              <div 
                                key={state.id}
                                onClick={() => navigate('destination-detail', { id: state.id })}
                                className="flex items-center justify-between p-3 bg-white border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group shadow-sm"
                              >
                                <div className="flex items-center gap-3">
                                  <img src={state.image} alt={state.name} className="w-10 h-10 object-cover rounded-md" />
                                  <span className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">{state.name}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Festivals */}
                      {matchedFestivals.length > 0 && (
                        <div className="space-y-3">
                          <span className="text-[10px] font-bold uppercase text-gold tracking-wider block">OVERLAPPING CELEBRATIONS</span>
                          <div className="space-y-2">
                            {matchedFestivals.map((fest) => (
                              <div 
                                key={fest.id}
                                onClick={() => navigate('festival-detail', { id: fest.id })}
                                className="flex items-center justify-between p-3 bg-white border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group shadow-sm"
                              >
                                <div className="flex items-center gap-3">
                                  <img src={fest.image} alt={fest.name} className="w-10 h-10 object-cover rounded-md" />
                                  <span className="font-serif text-sm font-bold text-charcoal group-hover:text-heritage-red transition-colors">{fest.name}</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}
