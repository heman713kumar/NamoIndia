export interface AdventureRoute {
  id: string;
  name: string;
  altitude?: string;
  duration: string;
  difficulty: 'Easy' | 'Moderate' | 'Demanding' | 'Extreme';
  description: string;
  itinerary: { day: string; title: string; desc: string }[];
  highlights: string[];
  image: string;
}

export interface AdventureActivity {
  id: string;
  title: string;
  tagline: string;
  category: string; // e.g. Trekking, Rafting, Paragliding, etc.
  terrainType: 'Himalayas' | 'Waters' | 'Deserts' | 'Forests' | 'Skies' | 'Plains';
  difficulty: 'Easy' | 'Moderate' | 'Demanding' | 'Extreme';
  bestSeason: string;
  duration: string;
  altitudeOrLocation: string;
  intro: string;
  description: string;
  experienceDeepDive: string;
  keyHighlights: string[];
  practicalInformation: {
    safety: string;
    gearNeeded: string[];
    permitsRequired: string;
    physicalPrep: string;
  };
  recommendedStates: string[]; // State IDs matching destinations.ts
  image: string;
  routes?: AdventureRoute[]; // For activities with multiple sub-routes/locations
}

export const ADVENTURE_ACTIVITIES: AdventureActivity[] = [
  {
    id: 'trekking-himalayas',
    title: 'High-Altitude Himalayan Trekking',
    tagline: 'Conquer legendary frozen rivers, alpine passes, and sacred glacial lakes.',
    category: 'Trekking',
    terrainType: 'Himalayas',
    difficulty: 'Demanding',
    bestSeason: 'Varies by route (Summer / Winter)',
    duration: '5 - 9 Days',
    altitudeOrLocation: '12,500 ft - 16,500 ft',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200',
    intro: 'Himalayan trekking is the ultimate rite of passage for adventurers. India offers a stunning range of treks from the cold deserts of Ladakh to the green-forested peaks of Uttarakhand and Himachal Pradesh.',
    description: 'Each route is a portal into pristine geological beauty and ancient mountain cultures. You will walk through towering pine forests, cross roaring glacier torrents, ascend steep scree fields, and sleep on high alpine meadows under a ceiling of infinite stars.',
    experienceDeepDive: 'This activity covers four of the most spectacular, legendary trekking routes on the globe, each offering an entirely distinct landscape and physical trial: the ancient, mysterious Roopkund Lake; the extreme Chadar trek over ice; the dramatic green-to-barren Hampta Pass; and the snow-draped Kedarkantha summit.',
    keyHighlights: [
      'Cross high mountain passes exceeding 14,000 feet in altitude',
      'Sleep in warm, insulated mountain tents under the raw Milky Way',
      'Learn glacial survival techniques from native Himalayan guides'
    ],
    practicalInformation: {
      safety: 'Altitude sickness (AMS) is a real risk. Proper acclimatization, hydration, and carrying portable oxygen are crucial.',
      gearNeeded: ['Insulated down jacket (-10°C rated)', 'High-ankle trekking boots with deep lug soles', 'UV sunglasses', 'Trekking poles'],
      permitsRequired: 'Forest department permits are required for all routes, along with medical fitness certificates.',
      physicalPrep: 'Cardio conditioning (running/swimming) 4-6 weeks in advance is highly recommended to build lung capacity.'
    },
    recommendedStates: ['uttarakhand', 'himachal-pradesh', 'ladakh-ut'],
    routes: [
      {
        id: 'roopkund',
        name: 'Roopkund Trek (The Skeleton Lake)',
        altitude: '15,750 ft',
        duration: '8 Days',
        difficulty: 'Demanding',
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200',
        description: 'A legendary high-altitude trek in Uttarakhand leading to a mysterious glacial lake where hundreds of human skeletons from the 9th century lie frozen.',
        highlights: [
          'Climb through Bedni Bugyal, India\'s most expansive, emerald alpine meadows',
          'Stand before the frozen, mysterious Roopkund Lake encircled by Trishul and Nanda Ghunti peaks',
          'Experience a complete ecological transition from oak forests to cold rocky wastes'
        ],
        itinerary: [
          { day: 'Day 1', title: 'Drive from Kathgodam to Lohajung', desc: 'A scenic 10-hour drive through winding mountain roads along Kumaon rivers.' },
          { day: 'Day 2', title: 'Trek Lohajung to Didina Village', desc: 'A descent to the Neel Ganga river followed by a steep climb through dense oak and rhododendron forests.' },
          { day: 'Day 3', title: 'Trek Didina to Bedni Bugyal', desc: 'Climb through the forest canopy to emerge onto breathtaking, vast alpine grasslands with views of Mount Trishul.' },
          { day: 'Day 4', title: 'Trek Bedni Bugyal to Patar Nachuni', desc: 'A steady high-altitude ridge walk. Air becomes thin; spectacular alpine views unfold in every direction.' },
          { day: 'Day 5', title: 'Trek Patar Nachuni to Bhagwabasa', desc: 'A steep, challenging climb up to Kalu Vinayak, a stone temple, followed by a walk to the windy, rocky campsite of Bhagwabasa.' },
          { day: 'Day 6', title: 'Summit Climb to Roopkund Lake & descent to Patar Nachuni', desc: 'Wake up at 3:00 AM. Trek on steep snow to reach the Skeleton Lake at 15,750 ft. Savor the monumental views before descending.' },
          { day: 'Day 7', title: 'Descend Patar Nachuni to Lohajung', desc: 'Return via a different, beautifully forested route through Wan village.' },
          { day: 'Day 8', title: 'Drive Lohajung to Kathgodam', desc: 'Depart the Himalayas with memories of a lifetime.' }
        ]
      },
      {
        id: 'chadar-trek',
        name: 'Chadar Frozen River Trek',
        altitude: '11,150 ft',
        duration: '9 Days',
        difficulty: 'Extreme',
        image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1200',
        description: 'An extreme winter expedition where you walk on a sheet of frozen ice formed over the roaring Zanskar River inside a vertical canyon in Ladakh.',
        highlights: [
          'Walk on the Chadar (blanket) of ice with water rushing audibly right beneath your feet',
          'Decompress in ancient caves once used by trade caravans for overnight shelter',
          'Observe spectacular, colossal frozen waterfalls towering over the vertical canyon cliffs'
        ],
        itinerary: [
          { day: 'Day 1', title: 'Fly to Leh & Acclimatize', desc: 'Arrive in the frozen high-altitude city of Leh. Complete rest is mandatory to acclimatize to the extreme 11,000 ft cold.' },
          { day: 'Day 2', title: 'Medical Check-up & Leh Walk', desc: 'Undergo a mandatory health exam at the government hospital to receive your trekking clearance.' },
          { day: 'Day 3', title: 'Drive to Shingra Koma & Trek to Tsomo Paldar', desc: 'A dramatic drive along the Indus River to the trailhead, then take your first sliding steps on the frozen Zanskar river ice.' },
          { day: 'Day 4', title: 'Trek Tsomo Paldar to Tibb Cave', desc: 'A 15km trek through deep, narrow gorges where sunlight hits for only 1-2 hours a day. Sleep inside Tibb cave or insulated tents.' },
          { day: 'Day 5', title: 'Trek Tibb Cave to Naerak Frozen Waterfall', desc: 'The most stunning day. Trek past towering canyon walls to reach Naerak, a massive 50-foot completely frozen waterfall. Temperatures drop to -30°C.' },
          { day: 'Day 6', title: 'Return Trek Naerak to Tibb Cave', desc: 'Trace your way back. Notice how the Chadar ice sheet has completely re-frozen and shifted shapes overnight.' },
          { day: 'Day 7', title: 'Trek Tibb Cave to Bakula / Shingra Koma', desc: 'Last day of ice walking. Celebrate the successful navigation of one of the world\'s most challenging expeditions.' },
          { day: 'Day 8', title: 'Drive back to Leh', desc: 'Enjoy a hot shower, cozy Ladakhi bread, and warm salt tea back in Leh.' },
          { day: 'Day 9', title: 'Depart Leh', desc: 'Fly out over the snowy Himalayan peaks.' }
        ]
      },
      {
        id: 'hampta-pass',
        name: 'Hampta Pass Trek',
        altitude: '14,100 ft',
        duration: '5 Days',
        difficulty: 'Moderate',
        image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?q=80&w=1200',
        description: 'A fascinating crossover trek in Himachal Pradesh transitioning from the lush, green forests of Manali to the barren, purple-rock cold desert of Lahaul & Spiti.',
        highlights: [
          'Behold the dramatic landscape change from maple-canopied meadows to moon-like valleys',
          'Navigate steep snowy ridges to stand at the windy peak of Hampta Pass at 14,100 ft',
          'Visit Chandratal (The Moon Lake), a high-altitude crescent lake of deep turquoise color'
        ],
        itinerary: [
          { day: 'Day 1', title: 'Drive from Manali to Jobra & Trek to Chika', desc: 'A short drive with 40 hairpin bends, followed by a gentle 2-hour walk along the Rani Nallah river to Chika.' },
          { day: 'Day 2', title: 'Trek Chika to Balu ka Gera', desc: 'A gradual climb through alpine pastures and boulder fields, crossing freezing cold river streams barefoot.' },
          { day: 'Day 3', title: 'Trek Balu ka Gera to Shea Goru via Hampta Pass', desc: 'A steep, challenging climb over snow bridges to reach the top of the pass, then a steep descent to Shea Goru.' },
          { day: 'Day 4', title: 'Trek Shea Goru to Chatru & Drive to Chandratal', desc: 'Walk down through the spectacular dry Spiti gorges to Chatru, then drive to the sacred crescent Chandratal Lake.' },
          { day: 'Day 5', title: 'Drive Chatru to Manali', desc: 'Drive back via the engineering marvel of the Atal Tunnel, arriving in Manali by afternoon.' }
        ]
      },
      {
        id: 'kedarkantha',
        name: 'Kedarkantha Winter Summit',
        altitude: '12,500 ft',
        duration: '6 Days',
        difficulty: 'Moderate',
        image: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1200',
        description: 'Widely regarded as India\'s premier winter summit trek, offering spectacular 360-degree views of Himalayan giants from a snow-draped peak in Uttarakhand.',
        highlights: [
          'Camp alongside Juda ka Talab, a frozen high-altitude pond surrounded by tall pine trees',
          'Summon your strength for a pre-dawn headlamp climb to catch the sunrise from the peak',
          'Enjoy snowy glissading down the powdery slopes on your descent'
        ],
        itinerary: [
          { day: 'Day 1', title: 'Drive from Dehradun to Sankri', desc: 'A beautiful 200km drive tracing the Tons River through pine-scented valleys.' },
          { day: 'Day 2', title: 'Trek Sankri to Juda ka Talab', desc: 'A 4km steady climb through dense maple and pine forests to a clearing featuring a beautiful frozen lake.' },
          { day: 'Day 3', title: 'Trek Juda ka Talab to Kedarkantha Base Camp', desc: 'Walk through open snow clearings. Watch the Swargarohini peaks light up in golden sunset shades.' },
          { day: 'Day 4', title: 'Summit Climb to Kedarkantha & descent to Price', desc: 'Start at 3:30 AM to climb the snowy dome. Stand at the 12,500 ft summit as the sun rises over Gangotri ranges.' },
          { day: 'Day 5', title: 'Trek Price to Sankri', desc: 'A gorgeous downhill walk through beautiful mountain villages and pine clearings.' },
          { day: 'Day 6', title: 'Drive Sankri to Dehradun', desc: 'Depart from Sankri to catch your evening flight/train from Dehradun.' }
        ]
      }
    ]
  },
  {
    id: 'river-rafting-rishikesh-detail',
    title: 'Ganges White Water Rafting',
    tagline: 'Conquer roaring Class III and IV emerald rapids in the river rafting capital.',
    category: 'Rafting',
    terrainType: 'Waters',
    difficulty: 'Moderate',
    bestSeason: 'September to June (Post-monsoon is spectacular)',
    duration: '1 - 2 Days',
    altitudeOrLocation: 'Rishikesh, Uttarakhand (The Ganges)',
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200',
    intro: 'Rishikesh is the white water capital of India, where the glacial Ganges rushes out of steep mountain gorges to create a world-class white water rafting playground.',
    description: 'Flanked by beautiful white-sand beaches, pine-draped slopes, and suspension bridges, the emerald river features cascading rapids with varying grades. Beginners can enjoy gentle ripples while thrill-seekers can tackle heavy churning whirlpools.',
    experienceDeepDive: 'Rafting routes stretch from Marine Drive (24 km) or Kaudiyala (36 km) down to Rishikesh. The river is wild, cold, and spiritual. You will crash through famous rapids like "The Wall" (Class IV) where rafts frequently capsize, "Roller Coaster" (Class III+), and "Golf Course" before drifting peacefully under suspended iron structures.',
    keyHighlights: [
      'Navigate Class III and IV rapids with professional safety kayakers on hand',
      'Plunge from a 25-foot boulder cliff directly into the glacial river during flat sections',
      'Settle into eco-luxury river camps pitched on pristine sandy beaches'
    ],
    practicalInformation: {
      safety: 'Equipped with international-grade lifejackets, helmets, and certified rescue guides. Strict safety briefing is conducted.',
      gearNeeded: ['Quick-dry shorts and tees', 'Strap-on sandals or water shoes', 'Waterproof dry bags for cameras', 'High SPF sunscreen'],
      permitsRequired: 'Rafting permits are coordinated entirely by licensed operators via the Ganga River Rafting Rotational Committee.',
      physicalPrep: 'Moderate upper body strength is useful for paddling against rapid currents, but no swimming experience is required.'
    },
    recommendedStates: ['uttarakhand']
  },
  {
    id: 'paragliding-bir-billing',
    title: 'Aero-Paragliding in Bir Billing',
    tagline: 'Soar with Himalayan eagles over lush green valleys at the world’s second-highest takeoff site.',
    category: 'Paragliding',
    terrainType: 'Skies',
    difficulty: 'Easy',
    bestSeason: 'October to November & March to May',
    duration: '1 Day (15-45 mins flight)',
    altitudeOrLocation: 'Bir Billing, Himachal Pradesh (Takeoff: 8,000 ft, Landing: 4,350 ft)',
    image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?q=80&w=1200',
    intro: 'Bir Billing is the paragliding capital of Asia and ranks as the second-highest takeoff site in the entire world. It offers steady thermal currents and stunning views of the Dhauladhar range.',
    description: 'Billing provides the launchpad at 8,000 ft, where pilots run off a grassy cliff edge to glide gracefully over pine forests, terraced fields, and Tibetan monasteries before landing in the flat, sunny fields of Bir at 4,350 ft.',
    experienceDeepDive: 'Tandem flights allow beginners to sit back with an expert pilot who handles the navigation. For experienced fliers, the site is a global hub for cross-country flights, offering thermal updrafts that carry gliders high above snow-capped Himalayan ridges.',
    keyHighlights: [
      'Experience a silent, soaring 30-minute aerial cruise looking down at Himalayan ranges',
      'Launch from Billing cliff where international paragliding world cups are hosted',
      'Glide over red-roofed Tibetan monasteries and watch the sunset from the skies'
    ],
    practicalInformation: {
      safety: 'International safety protocols, reserve parachutes, and highly experienced tandem pilots are standard.',
      gearNeeded: ['Windcheater or warm jacket', 'Sturdy closed-toe sneakers', 'GoPro camera stick for aerial recording'],
      permitsRequired: 'Takeoff fees are managed by the local tourism department at the billing gate.',
      physicalPrep: 'Requires a short, fast running sprint of 5-10 steps at takeoff to launch the canopy.'
    },
    recommendedStates: ['himachal-pradesh']
  },
  {
    id: 'desert-safari-kutch',
    title: 'Thar & Kutch Desert Safaris',
    tagline: 'Jeep bash on golden dunes or witness the surreal glowing white salt deserts.',
    category: 'Desert Safari',
    terrainType: 'Deserts',
    difficulty: 'Easy',
    bestSeason: 'November to February',
    duration: '1 - 3 Days',
    altitudeOrLocation: 'Jaisalmer (Thar Desert) / Great Rann of Kutch (Gujarat)',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1200',
    intro: 'India hosts two highly unique desert frontiers: the golden sand dunes of the Thar Desert in Rajasthan and the surreal, massive white salt flatlands of the Great Rann of Kutch in Gujarat.',
    description: 'A desert safari introduces you to wild, dramatic environments. Choose between high-octane 4x4 jeep dune bashing in Jaisalmer or walking across a flat basin of infinite white salt that glows blue under a full moon in Kutch.',
    experienceDeepDive: 'In Jaisalmer, the safari traverses the Sam and Khuri dunes, where winds carve ripples in the sand. In Kutch, the white desert is a seasonal salt marsh that dries up to form a hard crust of crystalline salt. Safaris here are enriched by legendary desert cultures, traditional mud-walled roundhouses (Bhungas), and rich embroidery crafts.',
    keyHighlights: [
      '4x4 dune bashing across Jaisalmer\'s steep, shifting sandy peaks',
      'Stand on Kutch\'s salt flatlands as the horizon blurs under the rising full moon',
      'Sip hot cardamom tea cooked on open wood fires while listening to Sufi music'
    ],
    practicalInformation: {
      safety: 'Ensure your operator carries plenty of fresh drinking water, sand tracks, and GPS communication.',
      gearNeeded: ['Polarized sunglasses', 'Wide-brimmed sun hat', 'Warm fleece jacket for freezing desert nights', 'Scarf or bandana for windblown sand'],
      permitsRequired: 'Kutch requires a border military permit which can be easily obtained online or at the Bhirandiyara check post.',
      physicalPrep: 'Very relaxed and accessible. Suitable for travelers of all ages and fitness levels.'
    },
    recommendedStates: ['rajasthan', 'gujarat']
  },
  {
    id: 'scuba-diving-andaman',
    title: 'Oceanic Scuba Diving',
    tagline: 'Dive into warm, crystalline waters teeming with coral reefs and volcanic marine life.',
    category: 'Scuba Diving',
    terrainType: 'Waters',
    difficulty: 'Easy',
    bestSeason: 'October to May (Excellent underwater visibility)',
    duration: '1 - 3 Days',
    altitudeOrLocation: 'Havelock (Andaman Islands) / Bangaram (Lakshadweep)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    intro: 'India\'s island territories contain some of the finest marine ecosystems in the Indian Ocean, characterized by massive coral reefs, underwater caves, and deep volcanic walls.',
    description: 'Diving in the Andaman Islands offers access to rich coral gardens, turtles, and manta rays, while the coral atolls of Lakshadweep boast untouched white sand lagoons and some of the clearest water on the globe.',
    experienceDeepDive: 'In Andaman\'s Havelock Island (Swaraj Dweep), dive sites like "Johnny\'s Gorge" and "Dixon\'s Pinnacle" feature massive volcanic rock formations where pelagic fish congregate. In Lakshadweep\'s Kadmat or Bangaram lagoon, the barrier reefs protect shallow lagoons with up to 40 meters of visibility, perfect for swimming alongside sea turtles.',
    keyHighlights: [
      'Swim alongside gentle manta rays, sea turtles, and clownfish in pristine coral gardens',
      'Explore deep shipwrecks and volcanic drop-offs off the coast of Havelock',
      'Acquire international PADI or SSI certifications in certified dive shops'
    ],
    practicalInformation: {
      safety: 'All dives are led by PADI-certified dive masters. Decompression chambers are located in Port Blair.',
      gearNeeded: ['Wetsuits and dive computers (provided by operators)', 'Rash guards', 'Underwater action camera (GoPro)'],
      permitsRequired: 'Foreigners require a Restricted Area Permit (RAP) for Andamans, which is granted on arrival at Port Blair airport.',
      physicalPrep: 'Basic swimming comfort is recommended for deeper dives, but non-swimmers can do "Discovery Scuba" programs in shallow lagoons.'
    },
    recommendedStates: ['andaman-nicobar', 'lakshadweep-ut']
  },
  {
    id: 'skiing-gulmarg',
    title: 'Alpine Skiing in Gulmarg & Auli',
    tagline: 'Carve deep powdery tracks down massive high-altitude slopes in the shadow of Himalayan peaks.',
    category: 'Skiing',
    terrainType: 'Himalayas',
    difficulty: 'Demanding',
    bestSeason: 'January to March (Deep powder season)',
    duration: '2 - 7 Days',
    altitudeOrLocation: 'Gulmarg, Jammu & Kashmir (13,000 ft) / Auli, Uttarakhand (9,200 ft)',
    image: 'https://images.unsplash.com/photo-1551698618-1ffdfe1d9772?q=80&w=1200',
    intro: 'India holds some of the highest and finest ski terrains in Asia. Gulmarg is famous for its incredible dry powder, back-country bowls, and Asia\'s highest ski gondola.',
    description: 'Auli in Uttarakhand provides a more structured ski resort experience with perfectly groomed ski slopes, snowmaking guns, and panoramic views of the colossal Mount Nanda Devi (India\'s second-highest peak).',
    experienceDeepDive: 'In Kashmir\'s Gulmarg, the ski slopes are divided into Phase 1 (Kongdoori) for beginners and intermediates, and Phase 2 (Apharwat Peak at 13,000 ft) which offers extreme backcountry bowls, cliffs, and deep powder runs that attract professional freeriders from across the globe.',
    keyHighlights: [
      'Ride the monumental Gulmarg Gondola, one of the highest cable cars in the world',
      'Carve deep, dry Himalayan powder through sub-alpine pine glades',
      'Enjoy panoramic views of Nanda Devi, Kamet, and Mana peaks from the Auli slopes'
    ],
    practicalInformation: {
      safety: 'Backcountry areas in Gulmarg have avalanche hazards. Never ski off-piste without a beacon, shovel, probe, and a local ski guide.',
      gearNeeded: ['Thermal layers', 'Gore-Tex ski jacket and pants', 'Ski goggles', 'Helmet and gloves'],
      permitsRequired: 'Ski passes can be purchased at the gondola ticket counters.',
      physicalPrep: 'Requires strong quadriceps and core strength to handle long, high-altitude ski descents.'
    },
    recommendedStates: ['jammu-kashmir', 'uttarakhand']
  },
  {
    id: 'rock-climbing-hampi',
    title: 'Rock Bouldering in Hampi',
    tagline: 'Scale gravity-defying pink granite ruins in the world’s largest bouldering landscape.',
    category: 'Rock Climbing',
    terrainType: 'Plains',
    difficulty: 'Demanding',
    bestSeason: 'November to February (Cool winter breeze)',
    duration: '1 - 3 Days',
    altitudeOrLocation: 'Hampi, Karnataka (The Tungabhadra Basin)',
    image: 'https://images.unsplash.com/photo-1522163182402-834f871fd851?q=80&w=1200',
    intro: 'Hampi is the bouldering capital of the world, offering an extraordinary landscape of millions of massive, weather-worn pink granite boulders stretching as far as the eye can see.',
    description: 'Set amidst the ancient, ruined stone temples of the 14th-century Vijayanagara Empire, climbers from across the globe gather in Hampi to climb unique granite boulder problems.',
    experienceDeepDive: 'Climbing in Hampi is distinct because of the quality of the granite, which provides excellent friction but can be abrasive on the skin. Climbers carry crash pads across the Tungabhadra River to sectors like "Goan Corner" or "Hemakuta Hill", mapping out routes (problems) ranging from V0 to V14 difficulty.',
    keyHighlights: [
      'Scale gravity-defying pink granite rocks overlooking ancient ruined palaces',
      'Gather with a global community of climbers to share chalk, crash pads, and beta on routes',
      'Watch the sunset over the boulder-strewn landscape from the top of Matanga Hill'
    ],
    practicalInformation: {
      safety: 'Always climb with multiple crash pads and spotters. Boulder problems have sharp granite edges.',
      gearNeeded: ['Climbing shoes', 'Liquid chalk and chalk bag', 'Bouldering brush', 'Crash pads (can be rented locally)'],
      permitsRequired: 'Avoid climbing on protected archaeological monuments which are guarded by the ASI.',
      physicalPrep: 'Strong finger strength, core stability, and flexibility are highly valuable.'
    },
    recommendedStates: ['karnataka']
  },
  {
    id: 'backwater-houseboating-alleppey',
    title: 'Alleppey Backwater Houseboating',
    tagline: 'Drift along a serene, palm-draped labyrinth of emerald canals on a traditional thatched barge.',
    category: 'Houseboating',
    terrainType: 'Waters',
    difficulty: 'Easy',
    bestSeason: 'October to March (Pleasant weather)',
    duration: '1 - 2 Days',
    altitudeOrLocation: 'Alleppey (Alappuzha), Kerala (Vembanad Lake)',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200',
    intro: 'Alleppey, known as the Venice of the East, is famous for its intricate, serene network of brackish lagoons, lakes, and palm-shaded canals known as the Kerala Backwaters.',
    description: 'Board a "Kettuvallam"—a traditional, giant wooden cargo boat re-engineered into a luxury floating villa made of bamboo poles, coir fiber, and coconut wood—to drift past paddy fields and village shores.',
    experienceDeepDive: 'This is a gentle, leisure-heavy adventure. As the boat cruises through Vembanad Lake, you will observe traditional lake-side village life: women washing fabrics, fishermen rowing narrow wooden canoes, and ducks being herded across canals. Your on-board private chef prepares fresh catches with coconut and local spices.',
    keyHighlights: [
      'Cruise on a luxury hand-tied thatched wooden barge with private bedrooms and chef',
      'Dine on fresh pearl spot fish caught directly from the lake and cooked in banana leaves',
      'Sip fresh palm toddy (local fermented nectar) from rustic canal-side shacks'
    ],
    practicalInformation: {
      safety: 'Houseboats are fully equipped with lifebuoys and fire extinguishers. Cruising ceases at 5:30 PM to allow local fishermen to cast their nets.',
      gearNeeded: ['Light, breathable cotton linen clothing', 'Insect repellent', 'Polarized sunglasses', 'Binoculars for bird watching'],
      permitsRequired: 'All houseboats must be certified by the Kerala Port Authority.',
      physicalPrep: 'Extremely relaxing. Zero physical exertion is required.'
    },
    recommendedStates: ['kerala']
  },
  {
    id: 'wildlife-safari-central',
    title: 'Protected Wildlife Safaris',
    tagline: 'Track the Royal Bengal Tiger and the prehistoric One-horned Rhino in their native forests.',
    category: 'Wildlife Safari',
    terrainType: 'Forests',
    difficulty: 'Easy',
    bestSeason: 'October to June (Parks close during the summer monsoon)',
    duration: '2 - 3 Days',
    altitudeOrLocation: 'Ranthambore (Rajasthan), Bandhavgarh (Madhya Pradesh), Kaziranga (Assam)',
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1200',
    intro: 'India preserves crucial biospheres for some of the world\'s most iconic, endangered wildlife. Traverse dense sal forests, tall elephant grass marshes, and dry thorny jungles to track wild predators.',
    description: 'Ride open-top 4x4 jeeps or custom canters accompanied by professional forest trackers. Explore historical tiger sanctuaries or wet marshlands hosting the global majority of Indian One-horned Rhinoceroses.',
    experienceDeepDive: 'Ranthambore offers a stunning mix of wildlife and history, where tigers roam past ancient 10th-century fort ruins and temple walls. Bandhavgarh contains the highest density of Bengal Tigers in India, nestled in rocky cliffs. Kaziranga, situated along the massive Brahmaputra River in Assam, features wet grasslands that harbor over 2,400 armored rhinos, wild water buffaloes, and swamp deer.',
    keyHighlights: [
      'Track the elusive Royal Bengal Tiger in its native, wild habitats in Central India',
      'Observe armored Great Indian One-horned Rhinoceroses grazing in Kaziranga marshes',
      'Witness wild herds of Asian Elephants crossing historical forest corridors'
    ],
    practicalInformation: {
      safety: 'Remain inside the vehicle at all times. Follow the strict guidelines of the park forest department.',
      gearNeeded: ['Neutral-colored clothing (khaki, olive, brown)', 'Dust scarf or face mask', 'Telephoto camera lenses', 'Warm jacket for early morning drives'],
      permitsRequired: 'Safari zones must be booked months in advance via the respective state forest department websites.',
      physicalPrep: 'Requires sitting in bumpy, open-topped jeeps on rough dirt tracks for 4-5 hours at a time.'
    },
    recommendedStates: ['rajasthan', 'madhya-pradesh', 'assam']
  },
  {
    id: 'camel-safari-desert',
    title: 'Thar Desert Camel Safaris',
    tagline: 'Ride through wind-swept golden dunes, visit nomadic hamlets, and camp under the stars.',
    category: 'Camel Safari',
    terrainType: 'Deserts',
    difficulty: 'Easy',
    bestSeason: 'October to March (Pleasant winter sun)',
    duration: '1 - 2 Days',
    altitudeOrLocation: 'Jaisalmer & Bikaner, Rajasthan (The Thar Desert)',
    image: 'https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1200',
    intro: 'The Thar Desert offers a classic frontier adventure, best traversed on the back of a ship of the desert—the camel.',
    description: 'Camel safaris range from short 2-hour sunset rides to multi-day desert treks where you ride deep into remote dunes, passing mud-brick shepherd villages and observing desert wildlife like chinkaras and blackbucks.',
    experienceDeepDive: 'Starting from Bikaner or Jaisalmer, you travel along ancient caravan trade routes. As the day ends, you watch the sun set behind shifting sandy ridges. Camp is pitched in isolated, clean dunes away from commercial crowds, where food is cooked on dry desert firewood.',
    keyHighlights: [
      'Ride well-trained camels through massive sand dunes at sunset',
      'Visit remote Rajasthani desert hamlets to learn about dryland conservation',
      'Sleep on comfortable beds on open sand dunes with no tents, looking at the stars'
    ],
    practicalInformation: {
      safety: 'Listen to your camel handler\'s instructions on how to lean back when the camel is kneeling down or standing up.',
      gearNeeded: ['Long, loose cotton pants (prevents saddle chafing)', 'Sun hat and scarf', 'Warm fleece for desert nights'],
      permitsRequired: 'None for general tourist zones around Jaisalmer and Bikaner.',
      physicalPrep: 'Riding a camel can be bouncy and causes light leg stiffness; moderate physical comfort is useful.'
    },
    recommendedStates: ['rajasthan']
  },
  {
    id: 'bungee-jumping-rishikesh',
    title: 'Bungee Jumping in Rishikesh',
    tagline: 'Take a leap of pure faith from India’s highest fixed cantilever platform over a rocky gorge.',
    category: 'Bungee Jumping',
    terrainType: 'Plains',
    difficulty: 'Extreme',
    bestSeason: 'September to June (Closes during peak monsoons)',
    duration: '1 Day (The jump takes seconds)',
    altitudeOrLocation: 'Mohan Chatti, Rishikesh, Uttarakhand (Height: 83 meters / 272 ft)',
    image: 'https://images.unsplash.com/photo-1563841930606-67e2b64da2eb?q=80&w=1200',
    intro: 'Rishikesh hosts India\'s premier extreme gravity-defying sports station, featuring the country\'s highest fixed cantilever bungee jumping platform.',
    description: 'Designed by expert engineers from New Zealand, the jump platform is built on a massive steel cantilever structure projecting out over a sheer cliff overlooking a rocky mountain stream.',
    experienceDeepDive: 'Stepping out onto the edge at 83 meters (equivalent to a 27-story building) is a mental battle. Once you jump, you fall in a pure, screaming free-fall towards the rocky riverbed before the rubber cords stretch smoothly, bouncing you gently over the river canyon.',
    keyHighlights: [
      'Leap from India\'s highest fixed-platform bungee jump at 83 meters',
      'Operated under strict New Zealand safety standards with double-harness systems',
      'Collect your custom "Dare to Jump" certificate and HD video footage of your leap'
    ],
    practicalInformation: {
      safety: 'Strictly prohibited for travelers with heart conditions, high blood pressure, epilepsy, or back/neck injuries.',
      gearNeeded: ['Closed-toe comfortable sneakers', 'Comfortable clothing (avoid skirts or loose jewelry)'],
      permitsRequired: 'Requires signing a comprehensive medical waiver before the jump.',
      physicalPrep: 'Zero conditioning needed, but immense mental courage is required!'
    },
    recommendedStates: ['uttarakhand']
  },
  {
    id: 'mountain-biking-ladakh',
    title: 'High-Altitude Mountain Biking',
    tagline: 'Pedal across the world’s highest motorable roads and rugged gravel river basins.',
    category: 'Mountain Biking',
    terrainType: 'Himalayas',
    difficulty: 'Extreme',
    bestSeason: 'June to September (When passes are snow-free)',
    duration: '1 - 7 Days',
    altitudeOrLocation: 'Khardung La (17,582 ft), Ladakh & the Spiti Valley',
    image: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200',
    intro: 'The barren, high-altitude deserts of Ladakh and Spiti provide a dramatic, challenging frontier for mountain biking enthusiasts.',
    description: 'Ride across rugged gravel tracks, through freezing stream crossings, and down the world\'s highest motorable mountain passes, surrounded by massive snow-capped peaks and deep river gorges.',
    experienceDeepDive: 'A classic mountain biking route starts from Leh and ascends to the top of Khardung La at 17,582 ft via a support vehicle, from where you enjoy a thrilling 40km downhill ride on gravel and tarmac back to Leh. For seasoned cyclists, a multi-day tour around Spiti or the Manali-Leh highway presents an extreme challenge of endurance and lungs.',
    keyHighlights: [
      'Ride a 40km downhill stretch from Khardung La, one of the world\'s highest motorable passes',
      'Pedal along the turquoise waters of the Indus and Spiti rivers past ancient monasteries',
      'Navigate rough dirt trails and loose scree fields inside deep Himalayan canyons'
    ],
    practicalInformation: {
      safety: 'A support vehicle carrying oxygen cylinders and spare parts is highly recommended. Always wear a full-face helmet.',
      gearNeeded: ['Dual-suspension mountain bike (fitted with hydraulic disc brakes)', 'Windproof padded cycling jacket', 'Padded cycling shorts', 'Warm gloves'],
      permitsRequired: 'Ladakh Inner Line Permits (ILP) are required for riding towards Nubra Valley or Pangong Lake.',
      physicalPrep: 'Extreme cardio endurance and excellent balance are required. Mandatory 3-day acclimatization in Leh before riding.'
    },
    recommendedStates: ['ladakh-ut', 'himachal-pradesh']
  }
];

export function getRelatedAdventureActivities(currentId: string, limit: number = 3): AdventureActivity[] {
  return ADVENTURE_ACTIVITIES.filter(act => act.id !== currentId).slice(0, limit);
}
