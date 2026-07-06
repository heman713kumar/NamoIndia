import { useRouter } from '../context/RouterContext';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { motion } from 'motion/react';
import { ArrowLeft, Share2, Compass, MapPin, Calendar, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

interface DailySchedule {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  stay: string;
  foodSuggestion: string;
}

export default function SavedItineraryView() {
  const { route, navigate } = useRouter();
  const { itineraryId } = route.params || {};

  const [copied, setCopied] = useState(false);
  const [itinerary, setItinerary] = useState<DailySchedule[]>([]);
  const [spec, setSpec] = useState({ region: 'North', style: 'culture', duration: '7', party: 'Solo' });

  useEffect(() => {
    // Try to load from localStorage first
    const localSaved = localStorage.getItem(`itinerary-${itineraryId}`);
    if (localSaved) {
      try {
        const parsed = JSON.parse(localSaved);
        if (parsed.days && parsed.spec) {
          setItinerary(parsed.days);
          setSpec(parsed.spec);
          return;
        }
      } catch (e) {
        console.error("Error parsing saved itinerary", e);
      }
    }

    // Fallback generator based on itinerary ID parameters if not found in localStorage (e.g. itineraryId looks like "north-culture-7" or similar)
    const parts = itineraryId ? itineraryId.split('-') : [];
    const regionParam = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : 'North';
    const styleParam = parts[1] || 'culture';
    const durationParam = parts[2] || '7';

    setSpec({
      region: regionParam,
      style: styleParam,
      duration: durationParam,
      party: 'Adventurers'
    });

    // Curate standard high-fidelity schedules
    let days: DailySchedule[] = [];
    if (regionParam === 'North' || regionParam === 'All') {
      if (styleParam === 'culture') {
        days = [
          {
            day: 1,
            title: 'Imperial Entry: Welcome to New Delhi',
            morning: 'Land in New Delhi. Private arrival briefing and drive past India Gate.',
            afternoon: 'Explore the red sandstone walls of Humayun\'s Tomb.',
            evening: 'Sensory heritage walk inside Chandni Chowk, sampling local spiced tea.',
            stay: 'The Imperial Heritage Hotel, Delhi',
            foodSuggestion: 'Old Delhi Seekh Kebabs and Saffron Rabri.'
          },
          {
            day: 2,
            title: 'Mughal Architectural Majesty',
            morning: 'Board the express rail direct to Agra, the capital of the Mughal Empire.',
            afternoon: 'Wander inside Agra Fort exploring white marble chambers.',
            evening: 'Stand across the Yamuna River at Mehtab Bagh to watch the Taj Mahal turn golden.',
            stay: 'Amarvilas Palace Resort, Agra',
            foodSuggestion: 'Sweet pumpkin confectionaries called Petha.'
          },
          {
            day: 3,
            title: 'Desert Fortresses of Jaipur',
            morning: 'Drive through Fatehpur Sikri to Jaipur, the famous Pink City.',
            afternoon: 'Explore the astronomical sundials at Jantar Mantar.',
            evening: 'Participate in a royal heritage culinary demonstration.',
            stay: 'Jai Mahal Palace, Jaipur',
            foodSuggestion: 'Cardamom-infused royal curry (Laal Maas) with slow fire flatbreads.'
          }
        ];
      } else {
        days = [
          {
            day: 1,
            title: 'Himalayan Spiritual Ascent',
            morning: 'Arrive in the sacred foothills of Rishikesh, Uttarakhand.',
            afternoon: 'Decompress inside a silent forest ashram with guided breathing.',
            evening: 'Attend the vibrant Ganga Aarti fire prayer along the river stones.',
            stay: 'Parmarth Niketan Ashram, Rishikesh',
            foodSuggestion: 'Organic, slow-cooked whole lentil khichdi.'
          },
          {
            day: 2,
            title: 'The Foothill Meditation Retreat',
            morning: 'Participate in sunrise yoga and silent chanting.',
            afternoon: 'Cross the Lakshman Jhula bridge to visit ancient local shrines.',
            evening: 'Sip fresh herbal tea with resident spiritual teachers.',
            stay: 'Parmarth Niketan Ashram, Rishikesh',
            foodSuggestion: 'Freshly baked wheat rotis with local potato stew.'
          }
        ];
      }
    } else {
      // South India
      days = [
        {
          day: 1,
          title: 'The Ancient Spice Port of Kochi',
          morning: 'Land in Fort Kochi. Guided walk past Chinese Fishing Nets.',
          afternoon: 'Explore spice storehouses inside Jewish Town.',
          evening: 'Attend a traditional Kathakali makeup and dance demonstration.',
          stay: 'Brunton Boatyard Hotel, Kochi',
          foodSuggestion: 'Fresh ocean fish baked inside banana leaves with coconut.'
        },
        {
          day: 2,
          title: 'Floating Palms: Backwater Sailing',
          morning: 'Embark on a traditional thatched houseboat in Alleppey.',
          afternoon: 'Sip fresh coconut water sailing past emerald green rice fields.',
          evening: 'Dine under the stars as the houseboat anchors in a silent lagoon.',
          stay: 'Luxury Private Houseboat, Kumarakom',
          foodSuggestion: 'Spicy backwater fish curry with red organic matta rice.'
        }
      ];
    }

    setItinerary(days);
  }, [itineraryId]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Cross links
  const stateIds = spec.region === 'North' ? ['uttar-pradesh', 'rajasthan', 'delhi-ut'] : ['kerala', 'tamil-nadu'];
  const matchedStates = DESTINATIONS.filter(s => stateIds.includes(s.id));

  return (
    <div className="bg-cream min-h-screen py-12 font-sans" id={`saved-itinerary-${itineraryId}-view`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Navigation back */}
        <div className="flex justify-between items-center mb-8 border-b border-gold/15 pb-4">
          <button
            onClick={() => navigate('trip-planner')}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-charcoal hover:text-heritage-red transition-colors group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Itinerary Builder</span>
          </button>
          
          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 bg-heritage-red text-cream font-bold text-xs uppercase tracking-wider rounded-lg shadow hover:bg-heritage-red-light transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copied ? 'Copied URL!' : 'Copy Itinerary Link'}</span>
          </button>
        </div>

        {/* Big Editorial Title Block */}
        <div className="text-center bg-white border border-gold/15 rounded-2xl p-8 sm:p-10 mb-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gold/5 rounded-full pointer-events-none border border-gold/15" />
          <div className="relative z-10 space-y-4">
            <span className="text-[10px] bg-gold/15 text-heritage-red px-3 py-1 rounded-full font-bold uppercase tracking-widest">
              Shared Travel Ledger
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal font-bold tracking-tight">
              Tour of {spec.region} India
            </h1>
            <p className="text-sm text-charcoal-light max-w-md mx-auto leading-relaxed">
              A bespoke {itinerary.length}-day {spec.style} adventure curated specifically for a {spec.party} style.
            </p>
          </div>
        </div>

        {/* Day-by-day sequence */}
        <div className="space-y-8">
          {itinerary.map((day) => (
            <div 
              key={day.day} 
              className="bg-white rounded-2xl border border-gold/15 overflow-hidden shadow-sm flex flex-col sm:flex-row items-stretch"
            >
              {/* Day count side */}
              <div className="bg-gold/10 border-b sm:border-b-0 sm:border-r border-gold/15 w-full sm:w-28 flex flex-col justify-center items-center p-6 shrink-0 text-center">
                <span className="text-[10px] uppercase font-bold text-gold tracking-widest leading-none">DAY</span>
                <span className="font-serif text-4xl font-bold text-heritage-red mt-1 leading-none">{day.day}</span>
              </div>

              {/* Day content */}
              <div className="p-6 sm:p-8 flex-1 space-y-4">
                <h4 className="font-serif text-xl font-bold text-charcoal leading-snug">{day.title}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-charcoal/80 font-sans border-t border-gold/10 pt-4">
                  <div>
                    <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">🌅 Morning Operations</strong>
                    <p className="leading-relaxed">{day.morning}</p>
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">☀️ Afternoon Route</strong>
                    <p className="leading-relaxed">{day.afternoon}</p>
                  </div>
                  <div>
                    <strong className="text-[10px] font-bold text-gold uppercase tracking-wider block mb-1">🌙 Evening Ledger</strong>
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

        {/* Cross-linking Traversed States Guides */}
        {matchedStates.length > 0 && (
          <div className="mt-12 bg-white border border-gold/15 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
            <h3 className="font-serif text-xl font-bold text-charcoal border-b border-gold/10 pb-2">
              Explore Standalone Guides for this Route
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {matchedStates.map((state) => (
                <div 
                  key={state.id}
                  onClick={() => navigate('destination-detail', { id: state.id })}
                  className="flex items-center justify-between p-3 bg-cream/30 border border-gold/10 hover:border-gold/30 rounded-xl cursor-pointer transition-all group"
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

      </div>
    </div>
  );
}
