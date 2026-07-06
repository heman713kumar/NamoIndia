import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import { Compass, Sparkles, Flame, Soup, Waves, Eye } from 'lucide-react';

export default function ThingsToDoHub() {
  const { navigate } = useRouter();

  const categories = [
    {
      id: 'culture',
      title: 'Culture & Heritage',
      tagline: 'Witness 5,000 years of living history',
      description: 'Explore staggering ancient stone temples, massive sand forts, and vibrant classical performing arts. India’s culture is not a museum piece—it is lived daily in Varanasi, Madurai, and Rajasthan.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
      icon: Flame,
      color: 'from-heritage-red/80 to-charcoal/95',
      badge: 'Heritage'
    },
    {
      id: 'food',
      title: 'Food & Cuisine',
      tagline: 'A continental map of spice and soul',
      description: 'From rich, buttery tandoors in Punjab to the volcanic pepper curries of Chettinad and coastal fish stews of Goa. Learn how our spice trails shaped global history.',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800', // We will use a gorgeous food backdrop
      imageAlt: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
      icon: Soup,
      color: 'from-gold/80 to-charcoal/95',
      badge: 'Culinary'
    },
    {
      id: 'adventure',
      title: 'Adventure & Nature',
      tagline: 'From high Himalayan treks to tiger reserves',
      description: 'Conquer the highest mountain passes in Ladakh, raft down white water in Rishikesh, or spot royal Bengal tigers in the deep bamboo forests of Madhya Pradesh.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
      icon: Compass,
      color: 'from-teal-dark/80 to-charcoal/95',
      badge: 'Adrenaline'
    },
    {
      id: 'wellness',
      title: 'Wellness & Spirituality',
      tagline: 'Heal your body, settle your mind',
      description: 'Journey to the global capital of yoga in Rishikesh, immerse in restorative multi-day Ayurvedic therapies in Kerala, or discover meditation in silent Tibetan monasteries.',
      image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
      icon: Sparkles,
      color: 'from-purple-900/80 to-charcoal/95',
      badge: 'Spiritual'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" id="things-to-do-hub-view">
      
      {/* Cinematic Header with Editorial Intention */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-semibold tracking-widest text-gold uppercase block mb-3">CURATED INTENTS</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight leading-tight">
          Things to Do in India
        </h1>
        <p className="mt-6 text-base sm:text-lg text-charcoal/70 leading-relaxed font-sans">
          In India, travel is not merely about sightseeing—it is about immersion. Whether you seek adrenaline, culinary mastery, profound spiritual silence, or majestic physical heritage, let your inner intent guide you.
        </p>
      </div>

      {/* Bento Grid layout of categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" id="experiential-bento-grid">
        {categories.map((cat, idx) => {
          const IconComp = cat.icon;
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer border border-gold/10 hover:border-gold/30 hover:shadow-2xl transition-all"
              onClick={() => navigate(cat.id)}
            >
              {/* Image backdrop */}
              <img
                src={cat.id === 'food' ? cat.imageAlt : cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              
              {/* Color gradient scrim overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.color} opacity-85 group-hover:opacity-90 transition-opacity duration-300`} />

              {/* Category Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-cream">
                <div className="flex justify-between items-center">
                  <span className="px-3 py-1 bg-gold/30 backdrop-blur-md rounded-full text-[10px] font-bold tracking-wider uppercase border border-gold/30">
                    {cat.badge}
                  </span>
                  <IconComp className="w-6 h-6 text-gold" />
                </div>

                <div>
                  <span className="text-xs text-gold/95 font-medium tracking-wide block mb-1">
                    {cat.tagline}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide mb-3 group-hover:text-gold transition-colors duration-200">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-cream/80 leading-relaxed font-sans mb-6 line-clamp-3">
                    {cat.description}
                  </p>
                  
                  {/* Call To Action indicator */}
                  <span className="inline-flex items-center gap-1.5 text-xs text-gold font-semibold uppercase tracking-wider group-hover:underline">
                    <span>Explore Experience</span>
                    <Eye className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Encouragement Banner */}
      <div className="bg-cream-dark border border-gold/20 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8 mb-8 shadow-sm">
        <div className="max-w-xl">
          <h3 className="font-serif text-2xl text-heritage-red font-bold">Unsure where to start?</h3>
          <p className="text-sm text-charcoal/70 mt-2 font-sans leading-relaxed">
            Our Interactive Trip Planner gathers your preferred regions, vacation duration, and travel intent to suggest custom day-by-day itineraries linking destinations, festivals, and activities seamlessly.
          </p>
        </div>
        <button
          onClick={() => navigate('trip-planner')}
          className="px-6 py-3.5 bg-heritage-red hover:bg-heritage-red-light text-cream rounded-md text-sm font-semibold tracking-wider uppercase transition-colors whitespace-nowrap shadow-md"
        >
          Build My Itinerary
        </button>
      </div>

    </div>
  );
}
