import { useRouter } from '../context/RouterContext';
import { Landmark, HelpCircle, ShieldAlert, FileText, ArrowRight, Sparkles, Compass } from 'lucide-react';

// ================= ABOUT PAGE =================
export function AboutView() {
  const { navigate } = useRouter();

  return (
    <div className="bg-cream min-h-screen py-16" id="about-page-root">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Editorial Heading */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">OUR VISION</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight mt-2">
            The Soul of the Subcontinent
          </h1>
          <div className="h-[1px] w-32 bg-gold mx-auto mt-6"></div>
        </div>

        <div className="space-y-12 text-charcoal-light font-sans text-sm sm:text-base leading-relaxed">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white border border-gold/15 p-8 rounded-2xl shadow-sm">
            <div>
              <h2 className="font-serif text-2xl font-bold text-heritage-red mb-4">A Living Chronicle</h2>
              <p>
                Incredible India is not just a destination directory; it is a living, sensory chronicle of 5,000 years of continuous culture, monumental stone history, and profound natural wonder. 
              </p>
              <p className="mt-3">
                Our mission is to bridge the gap between inspiration and seamless travel, allowing travelers to design highly customized journeys segmented by internal, experiential intent.
              </p>
            </div>
            <div className="aspect-square rounded-xl overflow-hidden border border-gold/25">
              <img 
                src="https://images.unsplash.com/photo-1595658658481-d53d3f999874?q=80&w=800" 
                alt="Beautiful Indian temple architecture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-charcoal text-center">Our Editorial Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-cream-dark border-t-4 border-gold p-6 rounded-b-xl shadow-sm text-center">
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">Architectural Integrity</h3>
                <p className="text-xs">
                  Celebrating the exquisite mathematics behind Rajput fortresses, Dravidian stone towers, and symmetrical Mughal garden mausoleums.
                </p>
              </div>
              <div className="bg-cream-dark border-t-4 border-gold p-6 rounded-b-xl shadow-sm text-center">
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">Experiential Slicing</h3>
                <p className="text-xs">
                  Rejecting flat geographical indexes to let travelers find journeys by culinary legacy, restorative meditation, or high adventure.
                </p>
              </div>
              <div className="bg-cream-dark border-t-4 border-gold p-6 rounded-b-xl shadow-sm text-center">
                <h3 className="font-serif text-lg font-bold text-charcoal mb-2">Preservation Focus</h3>
                <p className="text-xs">
                  Directing tourism sustainably toward local weaver workshops, state biosphere reserves, and protected UNESCO world landmarks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#134E4A] text-cream rounded-2xl p-8 border border-gold/20 shadow-lg text-center space-y-6">
            <Sparkles className="w-8 h-8 text-gold mx-auto" />
            <h3 className="font-serif text-2xl font-bold text-white">Begin Writing Your Travel Ledger</h3>
            <p className="text-xs sm:text-sm text-cream/80 max-w-xl mx-auto leading-relaxed">
              Use our interactive, intelligent itinerary engine to plot your custom journey across 36 distinct states and union territories.
            </p>
            <button
              onClick={() => navigate('trip-planner')}
              className="px-8 py-3 bg-gold hover:bg-gold-light text-teal-dark font-bold text-xs uppercase tracking-widest rounded-sm transition-colors cursor-pointer shadow-md"
            >
              Start Planning Now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}

// ================= TRAVEL TIPS PAGE =================
export function TravelTipsView() {
  const { navigate } = useRouter();

  return (
    <div className="bg-cream min-h-screen py-16" id="travel-tips-page-root">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">ESSENTIAL KNOWLEDGE</span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal font-bold tracking-tight mt-2">
            Practical Traveler Ledger
          </h1>
          <p className="text-sm text-charcoal-light mt-4 max-w-lg mx-auto">
            Visas, currency, local safety, and cultural etiquette mapped cleanly for your upcoming journey.
          </p>
        </div>

        <div className="space-y-10">
          
          {/* 1. Visas */}
          <div className="bg-white border border-gold/15 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0 text-gold">
              <Landmark className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-charcoal">Entry Visas & Regulations</h2>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Most international visitors require a visa to enter India. The Indian Government offers a streamlined <strong>e-Visa process</strong> online for tourism, business, and medical purposes.
              </p>
              <ul className="list-disc pl-5 text-xs text-charcoal-light space-y-1.5">
                <li>Apply at least <strong>4 to 30 days</strong> before your scheduled arrival date.</li>
                <li>Ensure your passport has at least <strong>6 months of validity</strong> from your date of arrival and contains at least <strong>two blank pages</strong>.</li>
                <li>Carry a printed copy of your approved Electronic Travel Authorization (ETA) when boarding.</li>
              </ul>
            </div>
          </div>

          {/* 2. Currency */}
          <div className="bg-white border border-gold/15 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0 text-gold">
              <Compass className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-charcoal">Currency & Financial Systems</h2>
              <p className="text-sm text-charcoal-light leading-relaxed">
                The official currency is the <strong>Indian Rupee (INR)</strong>. While digital transactions (like UPI) and credit cards are widely used in urban centers, carrying physical cash is essential for rural markets and transport.
              </p>
              <ul className="list-disc pl-5 text-xs text-charcoal-light space-y-1.5">
                <li>ATMs are widely available in cities, but can be sparse in deep Himalayan areas or national parks.</li>
                <li>Exchange currency at authorized bank kiosks or registered hotel desks to avoid commission fraud.</li>
                <li>Notify your home banks of your travel dates to avoid immediate card blocks upon arrival.</li>
              </ul>
            </div>
          </div>

          {/* 3. Safety and Health */}
          <div className="bg-white border border-gold/15 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0 text-gold">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-charcoal">Health, Water & Safety Protocols</h2>
              <p className="text-sm text-charcoal-light leading-relaxed">
                Traveling in India is safe and highly rewarding when practicing basic culinary and health awareness.
              </p>
              <ul className="list-disc pl-5 text-xs text-charcoal-light space-y-1.5">
                <li><strong>Always drink bottled, sealed mineral water</strong> or water treated by reliable UV filtration systems. Avoid ice in local roadside shops.</li>
                <li>Opt for thoroughly cooked, steaming-hot food. When tasting street food, visit crowded, highly rated stalls to ensure rapid fresh ingredient turnaround.</li>
                <li>Pack a simple traveler\'s medical kit with rehydration salts, digestive medications, and insect repellent.</li>
              </ul>
            </div>
          </div>

          {/* 4. Cultural Etiquette */}
          <div className="bg-white border border-gold/15 p-8 rounded-2xl shadow-sm flex flex-col md:flex-row gap-6">
            <div className="w-12 h-12 bg-gold/15 rounded-full flex items-center justify-center shrink-0 text-gold">
              <Sparkles className="w-6 h-6" />
            </div>
            <div className="space-y-3">
              <h2 className="font-serif text-2xl font-bold text-charcoal">Cultural Respect & Etiquette</h2>
              <p className="text-sm text-charcoal-light leading-relaxed">
                India is a land of profound religious traditions. Respecting local rules ensures smooth and warm interactions with the community.
              </p>
              <ul className="list-disc pl-5 text-xs text-charcoal-light space-y-1.5">
                <li><strong>Remove shoes</strong> before entering temples, mosques, monasteries, and local homes.</li>
                <li>Dress modestly when visiting spiritual sites: keep shoulders, midriffs, and knees fully covered.</li>
                <li>Use your <strong>right hand</strong> for eating food or handing objects to others, as the left hand is culturally reserved for hygiene.</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// ================= FAQ PAGE =================
export function FAQView() {
  const faqs = [
    {
      q: 'When is the absolute best seasonal window to visit India?',
      a: 'Generally, the winter season from October to March is the ideal window for most of India (Rajasthan, Kerala, Uttar Pradesh, South India) with cool, comfortable climates. However, if you seek high-altitude trekking in Ladakh or Sikkim, the summer months from June to September are best as mountain passes open. Monsoon season (June to September) is spectacular for Ayurvedic therapies in Kerala.'
    },
    {
      q: 'Is there a major language barrier for English speakers?',
      a: 'Not at all. English is widely spoken in urban centers, hotels, airport terminals, and tourist hubs. Road signs, subway maps, and menus are almost universally written in both English and Hindi or regional scripts. However, learning a few basic phrases of Hindi or the local state language is highly appreciated.'
    },
    {
      q: 'How do I travel between different states safely and efficiently?',
      a: 'For long distances, India\'s domestic flight network is fast and affordable. For an authentic and highly cinematic journey, utilize the Indian Railways network, especially the First Class AC or AC 2-Tier sleeper coaches. For local city travel, pre-booked rideshare apps (like Uber or Ola) offer safe, fixed-pricing transportation.'
    },
    {
      q: 'What is the "experiential intent" filter used on this site?',
      a: 'We reject flat alphabetical lists. We organize travel profiles into core internal intents: Culture & Heritage (stone architecture, classical art), Food & Cuisine (aromatic spice tours), Adventure & Nature (high trekking, safaris), and Wellness & Spirituality (yoga retreats, Ayurvedic healing). This lets you design a journey tailored to your exact mood.'
    }
  ];

  return (
    <div className="bg-cream min-h-screen py-16" id="faq-page-root">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-[0.3em] uppercase text-gold">TRAVEL WISDOM</span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal mt-2">
            Frequently Asked Ledger
          </h1>
          <div className="h-[1px] w-24 bg-gold mx-auto mt-4"></div>
        </div>

        {/* FAQ list */}
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white border border-gold/15 p-8 rounded-2xl shadow-sm space-y-3">
              <div className="flex gap-3 items-start">
                <HelpCircle className="w-5 h-5 text-heritage-red shrink-0 mt-1" />
                <h3 className="font-serif text-lg sm:text-xl font-bold text-charcoal">
                  {faq.q}
                </h3>
              </div>
              <p className="text-sm text-charcoal-light leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

// ================= PRIVACY POLICY PAGE =================
export function PrivacyPolicyView() {
  return (
    <div className="bg-cream min-h-screen py-16" id="privacy-page-root">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 font-sans text-sm text-charcoal-light leading-relaxed">
          
          <div className="text-center border-b border-gold/10 pb-6">
            <span className="text-[10px] font-mono tracking-wider text-gold uppercase">LEGAL SPECIFICATION</span>
            <h1 className="font-serif text-3xl font-bold text-charcoal mt-2">Privacy & Data Policy</h1>
            <span className="text-[11px] text-charcoal/50 block mt-2">Last updated: July 2026</span>
          </div>

          <div className="space-y-4">
            <p>
              Incredible India is committed to protecting your personal digital privacy. This policy outlines how we handle and protect any data stored during your usage of our digital platform.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">1. Wishlist & Itinerary Storage</h2>
            <p>
              To respect your offline independence, all wishlist bookmarks and multi-day trip itineraries created using our planner are stored **locally within your browser cache (localStorage)**. We do not transmit or monetize your private travel plans on any remote commercial databases.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">2. Cookie Policy</h2>
            <p>
              We utilize zero tracking cookies or invasive third-party analytics trackers. Minimal, essential cookies may be loaded purely to manage your active navigation route and preserve local visual theme states securely.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">3. Embedded Map & Image Permissions</h2>
            <p>
              Our application uses high-quality imagery from Unsplash. Please note that clicking external travel resource buttons or viewing embedded mapping widgets may share basic device connectivity logs with those secure platforms under their own respective privacy protocols.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

// ================= TERMS & CONDITIONS PAGE =================
export function TermsView() {
  return (
    <div className="bg-cream min-h-screen py-16" id="terms-page-root">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-gold/15 rounded-2xl p-8 sm:p-12 shadow-sm space-y-8 font-sans text-sm text-charcoal-light leading-relaxed">
          
          <div className="text-center border-b border-gold/10 pb-6">
            <span className="text-[10px] font-mono tracking-wider text-gold uppercase">SERVICE CHARTER</span>
            <h1 className="font-serif text-3xl font-bold text-charcoal mt-2">Terms & Conditions</h1>
            <span className="text-[11px] text-charcoal/50 block mt-2">Effective: July 2026</span>
          </div>

          <div className="space-y-4">
            <p>
              Welcome to Incredible India. By accessing and navigating our editorial content, custom travel maps, and planning engines, you agree to comply with the terms of service detailed below.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">1. Creative & Intellectual Rights</h2>
            <p>
              All editorial narratives, historical chronologies, custom illustrations, and architectural write-ups published on this portal are protected under copyright. You may print customized itineraries for your private, non-commercial travel reference.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">2. Traveler Liability Disclaimer</h2>
            <p>
              While we strive to provide highly accurate and updated visiting hours, entry fees, and travel guidelines for monuments and national parks, actual logistics can shift rapidly. Travelers are advised to cross-verify crucial timelines with local entities directly.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-serif text-xl font-bold text-charcoal">3. Proper Interactive Behavior</h2>
            <p>
              You agree to use our interactive planning tools solely for lawful, inspirational planning purposes. Any attempt to crawl, scrape, or inject malicious scripting into our routing context is strictly prohibited.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
