import { useState } from 'react';
import { useRouter } from '../context/RouterContext';
import { motion } from 'motion/react';
import { Compass, Sparkles, MapPin, Calendar, Heart, Shield, ArrowLeft, Utensils, Mountain, BookOpen, Music, Palette, Award, Activity, HeartPulse } from 'lucide-react';
import { DESTINATIONS } from '../data/destinations';
import { FESTIVALS } from '../data/festivals';
import { CULTURE_EXPERIENCES } from '../data/cultureData';
import { WELLNESS_EXPERIENCES } from '../data/wellnessData';

export default function ThingsToDoSubPage() {
  const { route, navigate, toggleWishlist, isInWishlist } = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Extract active path ('culture' | 'food' | 'adventure' | 'wellness')
  const type = route.path;

  // Rich custom data for each category
  const dataMap: Record<string, {
    title: string;
    heroImage: string;
    tagline: string;
    intro: string;
    philosophyTitle: string;
    philosophyBody: string;
    keyExperiences: { title: string; desc: string; detail: string; icon: any }[];
    recommendedStates: string[]; // State IDs
    recommendedFestivals: string[]; // Festival IDs
  }> = {
    culture: {
      title: 'Culture & Heritage',
      heroImage: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1600',
      tagline: 'Step into a continuous 5,000-year history of art, stone, and song.',
      intro: 'In India, heritage is not locked behind glass cases. It is a living, breathing dimension—seen in the towering, brightly painted temple gopurams of Madurai, the boulder-strewn ruins of the Vijayanagara Empire in Hampi, and the hauntingly beautiful classical dance forms that have been passed down through generations.',
      philosophyTitle: 'The Architecture of the Divine',
      philosophyBody: 'From the monolithic cave temples hand-carved out of solid basalt cliffs in Maharashtra to the perfect white marble symmetry of Agra’s Taj Mahal, India’s historical architecture serves as a bridge between the physical and spiritual realms. Every carving, stone pillar, and decorative arch carries an intentional mythological narrative.',
      keyExperiences: [
        {
          title: 'Dravidian Temple Towers',
          desc: 'Admire Madurai and Thanjavur temple towers.',
          detail: 'Stand in awe before towering, highly saturated gopurams decorated with thousands of stone figures of gods and celestial dancers, testifying to the Chola and Pandya dynasties\' engineering.',
          icon: Shield
        },
        {
          title: 'Rajput Hill Fortresses',
          desc: 'Ascend Jaipur and Jaisalmer hill fortresses.',
          detail: 'Traverse massive, stone-battlemented gateways constructed over rugged desert peaks, containing intricate marble mirror chambers and looking out over sacred royal lakes.',
          icon: Compass
        },
        {
          title: 'Classical Performing Arts',
          desc: 'Experience Kathakali and Bharatnatyam dances.',
          detail: 'Witness ancient dramatic forms utilizing highly stylized eye expressions, mudra hand gestures, and vibrant costumes to bring grand Indian epics to life.',
          icon: Sparkles
        }
      ],
      recommendedStates: ['rajasthan', 'uttar-pradesh', 'tamil-nadu', 'karnataka', 'odisha', 'bihar'],
      recommendedFestivals: ['diwali', 'holi', 'durga-puja', 'ganesh-chaturthi']
    },
    food: {
      title: 'Food & Cuisine',
      heroImage: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1600', // houseboats / kerala rich
      tagline: 'An aromatic journey crossing historical spice trails, clay ovens, and coastal catches.',
      intro: 'To cook in India is an act of deep alchemy. Spices are never added randomly; rather, they are roasted, ground, and combined daily in specific sequences to unlock digestive wellness and flavor harmony. Every region is its own culinary continent, distinguished by native soil, grains, and ancestral influences.',
      philosophyTitle: 'The Principle of Sadya & Feast',
      philosophyBody: 'In the south of India, food is served on biodegradable banana leaves in a highly synchronized arrangement designed to balance the six tastes (sweet, sour, salty, bitter, pungent, and astringent). In the north, heavy copper platters called Thalis present rich, slow-cooked lentils and charred flatbreads that celebrate pure agrarian abundance.',
      keyExperiences: [
        {
          title: 'The Tandoor Clay Oven',
          desc: 'Savor slow-simmered dishes in Punjab.',
          detail: 'Bite into smoky, direct-fire charred flatbreads and slow-roasted tandoori skewers paired with butter-brushed black lentils that simmer for 24 hours on open coal beds.',
          icon: Utensils
        },
        {
          title: 'Coastal Seafood Magic',
          desc: 'Savor fish curries in Goa and Kerala.',
          detail: 'Discover fish curries simmered with fresh-pressed coconut milk, tangy kokum, sour tamarind, and fragrant red chilies that were brought across ancient maritime routes.',
          icon: Sparkles
        },
        {
          title: 'The Street Bazaars',
          desc: 'Browse street snacks of Delhi and Mumbai.',
          detail: 'Navigate buzzing, historical markets to taste spicy potato potato patties, tangy puffed-rice salads, and hot, deep-fried saffron syrup circles (jalebi).',
          icon: Compass
        }
      ],
      recommendedStates: ['delhi-ut', 'punjab', 'tamil-nadu', 'kerala', 'goa', 'maharashtra'],
      recommendedFestivals: ['pongal', 'onam', 'eid-al-fitr']
    },
    adventure: {
      title: 'Adventure & Nature',
      heroImage: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1600',
      tagline: 'Scale colossal trans-Himalayan roads, raft roaring rivers, and track tigers.',
      intro: 'India’s dramatic geography provides an unparalleled stage for adrenaline and natural wonders. From the jagged, cold desert sand dunes of Ladakh to the torrential river gorges of Rishikesh, and the dense, bamboo-thick wildlife parks where Bengal tigers roam, a wild world awaits.',
      philosophyTitle: 'Biodiversity & Conservation',
      philosophyBody: 'Sheltering major global biosphere reserves, India preserves crucial sanctuaries for highly endangered species, including the massive great Indian one-horned rhinoceros in Assam\'s wet tall grasslands and the Asiatic lion in Gujarat\'s dry-deciduous Gir forests.',
      keyExperiences: [
        {
          title: 'High-Altitude Pass Crossing',
          desc: 'Drive the mountain highways of Ladakh.',
          detail: 'Traverse world-famous high-altitude motorable passes at over 17,500 feet, surrounded by vast, barren purple mountains and turquoise high-altitude salt lakes.',
          icon: Mountain
        },
        {
          title: 'Tracking the Bengal Tiger',
          desc: 'Embark on wildlife safaris in Central India.',
          detail: 'Ride open-top jeeps through dense sal and bamboo forests, observing wild elephant herds, sloth bears, and tracking the elusive Royal Bengal Tiger.',
          icon: Compass
        },
        {
          title: 'Ganges White Water Rafting',
          desc: 'Conquer rapids in Uttarakhand’s Rishikesh.',
          detail: 'Conquer churning, high-volume Class III & IV Himalayan rapids as the Ganges cuts beautifully through steep emerald mountain gorges.',
          icon: Sparkles
        }
      ],
      recommendedStates: ['ladakh-ut', 'himachal-pradesh', 'uttarakhand', 'assam', 'gujarat', 'madhya-pradesh'],
      recommendedFestivals: ['pushkar-fair', 'hemis-festival']
    },
    wellness: {
      title: 'Wellness & Spirituality',
      heroImage: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1600',
      tagline: 'Restore balance and inner peace through ancestral systems of yoga, Ayurveda, and silent meditation.',
      intro: 'In India, wellness is not a modern trend—it is a spiritual duty. This is the birthplace of Yoga, the union of breath and body, and Ayurveda, the world’s oldest systematic natural medicine system. Step out of the global speed to heal in river-facing ashrams and ocean-facing therapeutic gardens.',
      philosophyTitle: 'The Balance of Elements (Ayurveda)',
      philosophyBody: 'Ayurveda operates on the principle that every human body is a microcosm composed of five core elements: ether, air, fire, water, and earth. When these elements fall out of alignment, stress and illness manifest. Multi-day therapies restore this alignment through organic diets, massage, and cleansing.',
      keyExperiences: [
        {
          title: 'The Capital of Yoga',
          desc: 'Reside in Ganges-facing ashrams in Rishikesh.',
          detail: 'Rise at dawn to practice yoga and breath meditation along the rocky shores of the Ganges, guided by spiritual masters in ancient lineages.',
          icon: Sparkles
        },
        {
          title: 'Ayurvedic Rejuvenation',
          desc: 'Decompress with restorative therapies in Kerala.',
          detail: 'Undergo customized, multi-day oil massage treatments, herbal steam baths, and specialized organic diets designed to completely detoxify the nervous system.',
          icon: Utensils
        },
        {
          title: 'Buddhist Monastic Meditation',
          desc: 'Find inner silence in high Himalayan temples.',
          detail: 'Decompress inside high-altitude Tibetan monasteries in Dharamshala, Sikkim, or Ladakh, listening to slow chants and rolling prayer wheels.',
          icon: Compass
        }
      ],
      recommendedStates: ['uttarakhand', 'kerala', 'himachal-pradesh', 'sikkim', 'ladakh-ut', 'bihar'],
      recommendedFestivals: ['kumbh-mela', 'hemis-festival']
    }
  };

  const currentData = dataMap[type] || dataMap.culture;

  // Retrieve actual State/UT details matching the IDs
  const matchedStates = DESTINATIONS.filter(state => currentData.recommendedStates.includes(state.id));
  // Retrieve actual Festival details matching the IDs
  const matchedFestivals = FESTIVALS.filter(fest => currentData.recommendedFestivals.includes(fest.id));

  return (
    <div className="bg-cream min-h-screen" id={`things-to-do-${type}-view`}>
      
      {/* Cinematic Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] flex items-center justify-center overflow-hidden">
        <img 
          src={currentData.heroImage} 
          alt={currentData.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/45 to-transparent" />
        
        <div className="absolute inset-x-0 bottom-0 py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-cream">
            {/* Back Button */}
            <button
              onClick={() => navigate('things-to-do')}
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-gold hover:text-gold-light mb-6 bg-black/30 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-gold/20"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Hub</span>
            </button>
            <span className="text-xs font-bold tracking-widest text-gold uppercase block mb-3">EXPERIENTIAL INQUIRY</span>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide">
              {currentData.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base lg:text-lg text-cream/90 max-w-2xl mx-auto leading-relaxed">
              {currentData.tagline}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Core Introductory Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-bold text-heritage-red mb-6 border-b border-gold/15 pb-3">The Experiential Core</h2>
            <p className="text-sm sm:text-base text-charcoal/80 leading-relaxed font-sans mb-6">
              {currentData.intro}
            </p>
          </div>
          <div className="lg:col-span-5 bg-cream-dark p-8 rounded-2xl border border-gold/15">
            <h3 className="font-serif text-xl font-bold text-charcoal mb-4">{currentData.philosophyTitle}</h3>
            <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">
              {currentData.philosophyBody}
            </p>
          </div>
        </div>

        {/* Highlight Key Experiences (Visual Cards or Custom Culture Explorer) */}
        {type === 'culture' ? (
          <div className="mb-24" id="culture-interactive-explorer">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">ENCIRCLED BY TRADITION</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-red mb-4">India's Living Heritage</h2>
              <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                Explore individual, in-depth accounts of India’s classical arts, architectures, crafts, and performing traditions that have survived continuously for thousands of years.
              </p>
            </div>

            {/* Custom Category Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gold/15 pb-6">
              {[
                { id: 'all', label: 'All Heritage', icon: Compass },
                { id: 'dances', label: 'Classical Dances', icon: Sparkles },
                { id: 'textiles', label: 'Textile Traditions', icon: Shield },
                { id: 'architecture', label: 'Temple Architecture', icon: BookOpen },
                { id: 'music', label: 'Classical Music', icon: Music },
                { id: 'theatre', label: 'Puppetry & Theatre', icon: Award },
                { id: 'handicrafts', label: 'Handicrafts & Art', icon: Palette },
              ].map((cat) => {
                const IconComp = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-heritage-red text-cream border border-heritage-red shadow-md'
                        : 'bg-white text-charcoal border border-gold/15 hover:border-gold/40'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Structured Traditions Listing */}
            <div className="space-y-16">
              {[
                { id: 'dances', label: 'Classical Dance Forms', desc: 'Ancient somatic theaters utilizing precise mudras, facial bhava expressions, and rhythm.' },
                { id: 'textiles', label: 'Textile Traditions', desc: 'Multi-generational weaving guilds spinning mulberry silk and combing fine cashmere.' },
                { id: 'architecture', label: 'Temple Architecture Styles', desc: 'Monolithic and inter-locking stone designs built as bridges to the divine.' },
                { id: 'music', label: 'Classical Music Traditions', desc: 'Meditative vocalization of daily circadian raga intervals and mathematics.' },
                { id: 'theatre', label: 'Puppetry & Folk Theatre', desc: 'Dramatic communal narratives staged in village squares and temple yards.' },
                { id: 'handicrafts', label: 'Handicrafts & Folk Art', desc: 'Clay-free quartz glazing and tribal paintings celebrating the cycle of nature.' },
              ]
                .filter((sec) => selectedCategory === 'all' || selectedCategory === sec.id)
                .map((section) => {
                  const sectionItems = CULTURE_EXPERIENCES.filter((item) => item.category === section.id);
                  if (sectionItems.length === 0) return null;

                  return (
                    <div key={section.id} className="space-y-6">
                      <div className="border-l-4 border-gold pl-4">
                        <h3 className="font-serif text-2xl font-bold text-charcoal">{section.label}</h3>
                        <p className="text-xs sm:text-sm text-charcoal/60 font-sans mt-1">{section.desc}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectionItems.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => navigate('culture-experience-detail', { experienceId: item.id })}
                            className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all group cursor-pointer flex flex-col justify-between animate-fadeIn"
                          >
                            <div>
                              <div className="relative h-48 overflow-hidden shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-[9px] text-cream font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                                  {item.origin}
                                </div>
                              </div>
                              <div className="p-6">
                                <span className="text-[9px] font-bold text-gold uppercase tracking-wider block mb-1">
                                  {item.categoryLabel}
                                </span>
                                <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-charcoal/65 font-sans line-clamp-2 leading-relaxed">
                                  {item.intro}
                                </p>
                              </div>
                            </div>
                            <div className="p-6 pt-0 mt-4 border-t border-gold/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                              <span>Origin: {item.origin}</span>
                              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                <span>Explore Page</span>
                                <span>&rarr;</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : type === 'wellness' ? (
          <div className="mb-24" id="wellness-interactive-explorer">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold text-gold uppercase tracking-widest block mb-2">SANCTUARIES OF THE SOUL</span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-heritage-red mb-4">India's Living Spiritual Heritage</h2>
              <p className="text-sm text-charcoal/70 leading-relaxed font-sans">
                Journey through physical, mental, and metaphysical paths of rejuvenation. Explore specialized ashrams, ancient yoga schools, quiet Vipassana centers, and sacred pilgrimage routes.
              </p>
            </div>

            {/* Custom Wellness Category Filter Bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gold/15 pb-6">
              {[
                { id: 'all', label: 'All Paths', icon: Compass },
                { id: 'ayurveda', label: 'Ayurveda & Rejuvenation', icon: HeartPulse },
                { id: 'yoga', label: 'Yoga & Pranayama', icon: Sparkles },
                { id: 'meditation', label: 'Meditation & Vipassana', icon: Activity },
                { id: 'pilgrimage', label: 'Spiritual Pilgrimages', icon: MapPin },
                { id: 'sufi', label: 'Sufi Mysticism', icon: Music },
                { id: 'buddhist', label: 'Buddhist Circuit', icon: BookOpen },
              ].map((cat) => {
                const IconComp = cat.icon;
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-heritage-red text-cream border border-heritage-red shadow-md'
                        : 'bg-white text-charcoal border border-gold/15 hover:border-gold/40'
                    }`}
                  >
                    <IconComp className="w-4 h-4 shrink-0" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Structured Wellness Listing */}
            <div className="space-y-16">
              {[
                { id: 'ayurveda', label: 'Ayurveda & Rejuvenation', desc: '5,000-year-old holistic medical systems balancing biological energies (Doshas).' },
                { id: 'yoga', label: 'Yoga & Breath Mastery', desc: 'Unifying individual consciousness with the divine through dynamic postures and breathwork.' },
                { id: 'meditation', label: 'Silent Meditation & Insight', desc: 'Returning to profound internal stillness and self-observation in legendary academies.' },
                { id: 'pilgrimage', label: 'Spiritual Pilgrimage Circuits', desc: 'Sacred geographical routes carrying billions of steps of faith, service, and devotion.' },
                { id: 'sufi', label: 'Sufi Shrines & Mysticism', desc: 'Ecstatic seeking of absolute divine love and human unity through music and poetry.' },
                { id: 'buddhist', label: 'The Buddhist Sacred Footsteps', desc: 'Walking the historical milestones of Gautama Buddha\'s ultimate spiritual awakening.' },
              ]
                .filter((sec) => selectedCategory === 'all' || selectedCategory === sec.id)
                .map((section) => {
                  const sectionItems = WELLNESS_EXPERIENCES.filter((item) => item.category === section.id);
                  if (sectionItems.length === 0) return null;

                  return (
                    <div key={section.id} className="space-y-6">
                      <div className="border-l-4 border-gold pl-4">
                        <h3 className="font-serif text-2xl font-bold text-charcoal">{section.label}</h3>
                        <p className="text-xs sm:text-sm text-charcoal/60 font-sans mt-1">{section.desc}</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {sectionItems.map((item) => (
                          <div
                            key={item.id}
                            onClick={() => navigate('wellness-experience-detail', { experienceId: item.id })}
                            className="bg-white rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 hover:shadow-xl transition-all group cursor-pointer flex flex-col justify-between animate-fadeIn"
                          >
                            <div>
                              <div className="relative h-48 overflow-hidden shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.title}
                                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-[9px] text-cream font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                                  {item.location.split(',')[0]}
                                </div>
                              </div>
                              <div className="p-6">
                                <span className="text-[9px] font-bold text-gold uppercase tracking-wider block mb-1">
                                  {item.categoryLabel}
                                </span>
                                <h4 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors mb-2">
                                  {item.title}
                                </h4>
                                <p className="text-xs sm:text-sm text-charcoal/65 font-sans line-clamp-2 leading-relaxed">
                                  {item.intro}
                                </p>
                              </div>
                            </div>
                            <div className="p-6 pt-0 mt-4 border-t border-gold/5 flex justify-between items-center text-[10px] font-bold uppercase tracking-wider text-heritage-red">
                              <span>Location: {item.location.split(',')[0]}</span>
                              <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                <span>Explore Page</span>
                                <span>&rarr;</span>
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <div className="mb-24">
            <h2 className="font-serif text-3xl font-bold text-heritage-red text-center mb-12">Signature Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentData.keyExperiences.map((exp, idx) => {
                const IconComp = exp.icon;
                // Map the card title to an ID in EXPERIENTIAL_ITEMS
                const getExperienceId = (title: string) => {
                  const t = title.toLowerCase();
                  if (t.includes('dravidian') || t.includes('temple towers')) return 'dravidian-temple-towers';
                  if (t.includes('rajput') || t.includes('hill fortresses')) return 'rajput-hill-forts';
                  if (t.includes('performing arts') || t.includes('kathakali') || t.includes('dance')) return 'classical-dances';
                  if (t.includes('tandoor') || t.includes('clay oven')) return 'tandoor-clay-oven';
                  if (t.includes('coastal') || t.includes('seafood')) return 'coastal-seafood';
                  if (t.includes('street bazaar') || t.includes('bazaars')) return 'street-food-delhi';
                  if (t.includes('high-altitude') || t.includes('pass crossing')) return 'high-altitude-pass';
                  if (t.includes('tracking the bengal') || t.includes('tiger')) return 'tracking-begal-tiger';
                  if (t.includes('ganges') || t.includes('white water')) return 'river-rafting-rishikesh';
                  if (t.includes('capital of yoga') || t.includes('yoga')) return 'yoga-retreats-rishikesh';
                  if (t.includes('ayurvedic')) return 'ayurveda-kerala';
                  if (t.includes('buddhist')) return 'buddhist-meditation-bodhgaya';
                  return null;
                };
                const matchedId = getExperienceId(exp.title);
                const isClickable = !!matchedId;

                return (
                  <div 
                    key={idx} 
                    onClick={() => {
                      if (matchedId) {
                        const targetPath = 
                          matchedId === 'ayurveda-kerala' || matchedId === 'yoga-retreats-rishikesh' || matchedId === 'buddhist-meditation-bodhgaya'
                            ? 'wellness-experience-detail'
                            : `${type}-detail`;
                        navigate(targetPath, { 
                          activityId: matchedId, 
                          dishId: matchedId, 
                          experienceId: matchedId 
                        });
                      }
                    }}
                    className={`bg-white rounded-xl p-6 border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-lg transition-all group ${isClickable ? 'cursor-pointer' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold mb-4 group-hover:bg-gold/25 transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-charcoal mb-2 group-hover:text-heritage-red transition-colors">{exp.title}</h3>
                    <p className="text-xs text-gold font-medium uppercase tracking-wider mb-3">{exp.desc}</p>
                    <p className="text-xs sm:text-sm text-charcoal/70 leading-relaxed font-sans">{exp.detail}</p>
                    {isClickable && (
                      <span className="text-[10px] font-bold text-heritage-red group-hover:underline mt-4 block">
                        Read Full Narrative Guide &rarr;
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* recommended states (cinematic card scroll list) */}
        <div className="mb-24 border-t border-gold/15 pt-16">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-8 gap-4">
            <div>
              <span className="text-xs font-bold text-gold uppercase tracking-wider block">PLACES OF INTENT</span>
              <h2 className="font-serif text-3xl font-bold text-heritage-red">Best Experienced In</h2>
            </div>
            <button
              onClick={() => navigate('destinations')}
              className="text-xs font-semibold uppercase tracking-wider text-teal-dark hover:text-teal-light hover:underline"
            >
              Browse All 36 Destinations &rarr;
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {matchedStates.map((state) => (
              <div 
                key={state.id}
                className="bg-white rounded-xl overflow-hidden border border-gold/10 hover:border-gold/30 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={state.image} 
                    alt={state.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <button
                    onClick={() => toggleWishlist(state.id)}
                    className="absolute top-3 right-3 p-2 bg-cream/80 hover:bg-cream rounded-full text-heritage-red shadow-md transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist(state.id) ? 'fill-heritage-red' : ''}`} />
                  </button>
                  <div className="absolute bottom-3 left-4 text-cream">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-gold-light">{state.region} Region</span>
                    <h4 className="font-serif text-lg font-bold">{state.name}</h4>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-xs text-charcoal/65 line-clamp-2 mb-4 font-sans">{state.description}</p>
                  <button
                    onClick={() => navigate('destination-detail', { id: state.id })}
                    className="text-xs font-semibold tracking-wider text-heritage-red group-hover:text-heritage-red-light flex items-center gap-1.5"
                  >
                    <span>Read Regional Guide</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* relevant festivals matching this category */}
        {matchedFestivals.length > 0 && (
          <div className="border-t border-gold/15 pt-16">
            <h2 className="font-serif text-3xl font-bold text-heritage-red text-center mb-10">Celebrating the Intent</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {matchedFestivals.map((fest) => (
                <div 
                  key={fest.id}
                  className="flex flex-col sm:flex-row bg-white border border-gold/10 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all group cursor-pointer"
                  onClick={() => navigate('festival-detail', { id: fest.id })}
                >
                  <img 
                    src={fest.image} 
                    alt={fest.name} 
                    className="w-full sm:w-40 h-40 object-cover"
                  />
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[9px] font-semibold tracking-wider uppercase text-gold">{fest.season} Season</span>
                        <span className="text-[9px] text-charcoal/50 font-sans font-medium">{fest.dates}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-charcoal group-hover:text-heritage-red transition-colors">{fest.name}</h3>
                      <p className="text-xs text-charcoal/60 mt-2 line-clamp-2 font-sans">{fest.significance}</p>
                    </div>
                    <span className="text-xs font-semibold text-teal-dark group-hover:underline mt-4 block">
                      Read Festival Guide &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
