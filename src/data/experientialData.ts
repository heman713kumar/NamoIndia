import { City, Attraction, NationalPark, HeritageSite, ExperientialItem } from '../types';

// Structured list of cities for major states/UTs
export const CURATED_CITIES: City[] = [
  // Rajasthan
  {
    id: 'jaipur',
    stateId: 'rajasthan',
    name: 'Jaipur',
    description: 'The iconic Pink City, renowned for its majestic forts, royal palaces, and vibrant craft bazaars.',
    overview: 'Founded in 1727 by Maharaja Sawai Jai Singh II, Jaipur is India\'s first planned city. Known for its distinct terracotta-pink walls, Jaipur is a cornerstone of the Golden Triangle tour and offers an enchanting blend of Rajput engineering and Mughal-inspired aesthetics.',
    bestTimeToVisit: 'October to March (Winter)',
    topAttractions: ['Amber Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar'],
    signatureDish: 'Pyaaz Kachori & Ghewar',
    image: 'https://images.unsplash.com/photo-1477584322904-487272e5a64b?q=80&w=800',
    highlights: ['Explore the massive Amber Fort at sunrise', 'Stroll through the bustling Johari Bazaar for block-print textiles', 'Take photos of the iconic facade of the Hawa Mahal']
  },
  {
    id: 'udaipur',
    stateId: 'rajasthan',
    name: 'Udaipur',
    description: 'The romantic City of Lakes, cradled by the purple Aravalli Hills and white marble palaces.',
    overview: 'Often called the Venice of the East, Udaipur is built around a network of shimmering natural lakes, most notably Lake Pichola. The spectacular City Palace complex rises majestically from the water\'s edge, encapsulating the unmatched elegance of Mewar royalty.',
    bestTimeToVisit: 'September to March',
    topAttractions: ['Lake Palace', 'City Palace Udaipur', 'Jag Mandir', 'Sajjangarh Monsoon Palace'],
    signatureDish: 'Mewari Laal Maas',
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999874?q=80&w=800',
    highlights: ['Enjoy a romantic sunset boat ride on Lake Pichola', 'Marvel at the crystals and mirrors inside the Udaipur City Palace', 'Watch classical puppetry at Bagore Ki Haveli']
  },
  {
    id: 'jodhpur',
    stateId: 'rajasthan',
    name: 'Jodhpur',
    description: 'The Sun City and Blue City, watched over by the colossal Mehrangarh Fort.',
    overview: 'Jodhpur\'s old city is a mesmerizing sea of sky-blue houses spread beneath the cliffs of the impregnable Mehrangarh Fort. This color was originally used to denote Brahmin residences and to keep homes cool under the desert sun.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Mehrangarh Fort', 'Jaswant Thada', 'Umaid Bhawan Palace', 'Toorji Ka Jhalra'],
    signatureDish: 'Mawa Kachori & Mirchi Bada',
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=800',
    highlights: ['Zip-line across the Mehrangarh Fort battlements', 'Explore the indigo-painted alleys of the Brahmpuri district', 'Visit the polished stepwell of Toorji Ka Jhalra']
  },
  {
    id: 'jaisalmer',
    stateId: 'rajasthan',
    name: 'Jaisalmer',
    description: 'The Golden City, rising like a sandstone mirage from the heart of the Thar Desert.',
    overview: 'Jaisalmer is a mesmerizing medieval trading post defined by its giant yellow sandstone fort which crowns Trikuta Hill. Known as the Golden City, its narrow winding lanes shelter ornate stone havelis, ancient Jain temples, and a living heritage where residents still reside inside the ancient fort ramparts.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Jaisalmer Fort', 'Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake'],
    signatureDish: 'Ker Sangri & Rajasthani Laal Maas',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800',
    highlights: ['Camp under the stars at Sam Sand Dunes and enjoy camel desert safaris', 'Explore the living medieval Jaisalmer Fort, a UNESCO World Heritage Site', 'Admire the intricate honeycombed stone carvings of Patwon Ki Haveli']
  },
  {
    id: 'pushkar',
    stateId: 'rajasthan',
    name: 'Pushkar',
    description: 'A sacred lakeside sanctuary famous for its rare Brahma Temple, holy bathing ghats, and colorful annual camel fair.',
    overview: 'Cradled around a sacred natural lake with 52 bathing ghats, Pushkar is one of India\'s oldest and holiest towns. According to legend, the lake was created when Lord Brahma dropped a lotus flower here. It is a peaceful haven of spiritual chanting, pink-washed temples, rose plantations, and a global hub for the vibrant Pushkar Camel Fair.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Brahma Temple', 'Pushkar Lake & Ghats', 'Savitri Temple', 'Varaha Temple'],
    signatureDish: 'Dal Baati Churma & Malpua',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Climb up the hill to Savitri Temple at sunrise for stunning panoramic lake views', 'Participate in a peaceful evening prayer (Aarti) along the sacred lakeside ghats', 'Explore the chaotic and colorful bazaars filled with local crafts and traditional silver jewelry']
  },
  {
    id: 'bikaner',
    stateId: 'rajasthan',
    name: 'Bikaner',
    description: 'A desert stronghold renowned for its massive Junagarh Fort, red sandstone palaces, and savory Bikaneri bhujia.',
    overview: 'Founded in 1488 by Rao Bika, Bikaner is a fortified desert oasis in northern Rajasthan. Unconquered throughout its history, it boasts the magnificent Junagarh Fort, a treasure trove of royal art, and is famous for its elegant red sandstone havelis and camel breeding centers.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Junagarh Fort', 'Lallgarh Palace', 'Karni Mata Temple', 'National Research Centre on Camel'],
    signatureDish: 'Bikaneri Bhujia & Rasgulla',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
    highlights: ['Explore the unconquered Junagarh Fort with its opulent palaces and mirror halls', 'Visit the unique, ancient Karni Mata Temple in nearby Deshnoke', 'Sample freshly made camel milk ice cream at the national research farm']
  },

  // Kerala
  {
    id: 'kochi',
    stateId: 'kerala',
    name: 'Kochi (Cochin)',
    description: 'The Queen of the Arabian Sea, blending Chinese, Portuguese, Dutch, and British history.',
    overview: 'Kochi has been a bustling spice-trade port for over 600 years. Its old neighborhood, Fort Kochi, is a historic time capsule with leafy streets, ancient churches, spice warehouses, and the legendary giant Chinese fishing nets operating at the harbor front.',
    bestTimeToVisit: 'October to April',
    topAttractions: ['Chinese Fishing Nets', 'Mattancherry Palace', 'St. Francis Church', 'Jew Town Synagogue'],
    signatureDish: 'Kochi Reef Fish Curry & Appam',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
    highlights: ['Walk along the beach at Fort Kochi during golden hour', 'Shop for vintage antiques and aromatic spices in Jew Town', 'Watch a classical Kathakali dance demonstration']
  },
  {
    id: 'munnar',
    stateId: 'kerala',
    name: 'Munnar',
    description: 'A breathtaking hill station covered in manicured emerald-green tea plantations.',
    overview: 'Situated at 5,200 feet above sea level at the confluence of three mountain streams, Munnar is Kerala\'s premier hill resort. Cool, misty winds blow across endless rolling hills covered in carpets of high-quality tea leaves, offering incredible trekking opportunities.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Eravikulam National Park', 'Mattupetty Dam', 'Anamudi Peak', 'Tata Tea Museum'],
    signatureDish: 'Munnar Spiced Cardamom Tea & Steamed Puttu',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
    highlights: ['Trek up to Anamudi Peak, the highest summit in South India', 'Spot the rare, endangered Nilgiri Tahr at Eravikulam', 'Visit tea estates and learn about the orthodox tea-making process']
  },
  {
    id: 'alleppey',
    stateId: 'kerala',
    name: 'Alleppey (Alappuzha)',
    description: 'The Venice of the East, famed for its networks of tranquil backwaters and houseboats.',
    overview: 'Alleppey is a beautiful labyrinth of palm-shaded canals, lagoons, and paddy fields. It is world-famous for its traditional Kettuvallams (wooden houseboats) converted into luxury floating hotel suites that drift past serene village life.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Alappuzha Backwaters', 'Alleppey Beach', 'Pathiramanal Island', 'Ambalappuzha Temple'],
    signatureDish: 'Karimeen Pollichathu (Pearl Spot Fish)',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=800',
    highlights: ['Spend a night floating on a luxury bamboo houseboat', 'Witness the high-octane Nehru Trophy Snake Boat Race in August', 'Kayak down narrow canals under a canopy of coconut palms']
  },
  {
    id: 'thekkady',
    stateId: 'kerala',
    name: 'Thekkady',
    description: 'Kerala\'s wild heartland, home to the Periyar Tiger Reserve, cardamom-scented hills, and spice plantations.',
    overview: 'Thekkady is situated high in the Western Ghats, bordering Tamil Nadu. It is centered around Periyar Lake and its world-famous Tiger Reserve, offering evergreen tropical forests, rich wildlife, and extensive organic spice gardens of cardamom, pepper, and cinnamon.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Periyar National Park', 'Periyar Lake Boating', 'Anakkara Spice Gardens', 'Mangala Devi Temple'],
    signatureDish: 'Spiced Kerala Karimeen & Kappa',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    highlights: ['Take a silent bamboo rafting expedition down the forested Periyar Lake to spot wild elephants', 'Take a guided walk through fragrant organic spice plantations of cardamom and black pepper', 'Watch traditional Kalaripayattu martial arts and Kathakali performances at local theatres']
  },
  {
    id: 'wayanad',
    stateId: 'kerala',
    name: 'Wayanad',
    description: 'A mist-shrouded mountain landscape of ancient caves, waterfalls, and tea-spice estates.',
    overview: 'Wayanad is a lush, high-altitude district in northern Kerala, nestled within the Nilgiri Biosphere Reserve. It is a stunning retreat of mist-covered hills, deep pine valleys, ancient prehistoric rock carvings in Edakkal Caves, cascading forest waterfalls, and wild elephant reserves.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Edakkal Caves', 'Banasura Sagar Dam', 'Chembra Peak', 'Kuruva Island'],
    signatureDish: 'Wayanad Bamboo Rice Payasam & Malabar Biryani',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
    highlights: ['Climb up to the prehistoric Edakkal Caves to see 8,000-year-old stone age carvings', 'Trek up Chembra Peak to view the famous natural, heart-shaped lake at the summit', 'Take a bamboo raft to the pristine, uninhabited river delta of Kuruva Island']
  },

  // Uttar Pradesh
  {
    id: 'agra',
    stateId: 'uttar-pradesh',
    name: 'Agra',
    description: 'The legendary Mughal capital, home to the timeless monument of love, the Taj Mahal.',
    overview: 'Situated on the banks of the Yamuna River, Agra is synonymous with architectural majesty. From the red sandstone ramparts of Agra Fort to the delicate white marble screens of the Taj Mahal, Agra captures the zenith of Mughal wealth, poetry, and artistic execution.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri', 'Itimad-ud-Daulah (Baby Taj)'],
    signatureDish: 'Petha & Bedai Jalebi',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
    highlights: ['See the Taj Mahal reflect the sunrise at Mehtab Bagh across the river', 'Explore the colossal sandstone complex of Fatehpur Sikri', 'Walk the royal quarters of Emperor Akbar inside Agra Fort']
  },
  {
    id: 'varanasi',
    stateId: 'uttar-pradesh',
    name: 'Varanasi',
    description: 'One of the world\'s oldest continuously inhabited cities, the spiritual heart of India.',
    overview: 'Varanasi (also known as Kashi or Benares) is a sacred city on the banks of the river Ganges. Here, spiritual life unfolds publicly on the stone Ghats, where thousands of pilgrims perform daily ritual cleansings and the glowing, musical Ganga Aarti rituals invoke the divine at dusk.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Kashi Vishwanath Temple', 'Dashashwamedh Ghat', 'Sarnath', 'Assi Ghat'],
    signatureDish: 'Tamatar Chaat & Banarasi Paan',
    image: 'https://images.unsplash.com/photo-1561361513-2d000a45f0d2?q=80&w=800',
    highlights: ['Take a silent, misty dawn boat ride along the floating Ghats', 'Witness the majestic, sensory Ganga Aarti fire-ceremonies at dusk', 'Visit the ancient Buddhist stupas in Sarnath, where Buddha gave his first sermon']
  },

  // Maharashtra
  {
    id: 'mumbai',
    stateId: 'maharashtra',
    name: 'Mumbai',
    description: 'The City of Dreams, a roaring seaside metropolis blending colonial relics and Bollywood glamour.',
    overview: 'Built on seven former islands, Mumbai (formerly Bombay) is India\'s financial engine, entertainment capital, and home to the world\'s largest Art Deco collection outside of Miami. It is a city of extreme energy, where heritage stone monuments coexist with towering modern skyscrapers.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Gateway of India', 'Marine Drive', 'Elephanta Caves', 'Chhatrapati Shivaji Terminus'],
    signatureDish: 'Vada Pav & Pav Bhaji',
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=800',
    highlights: ['Stroll along the curved beachfront of Marine Drive (The Queen\'s Necklace) at night', 'Take a ferry out to see the 5th-century rock-cut Shiva sculptures at Elephanta Caves', 'Marvel at the Victorian Gothic architecture of the CST railway station']
  },

  // Tamil Nadu
  {
    id: 'madurai',
    stateId: 'tamil-nadu',
    name: 'Madurai',
    description: 'An ancient temple metropolis styled as the Athens of the East, centered on the Meenakshi Temple.',
    overview: 'Madurai is a 2,500-year-old capital built in a lotus pattern surrounding the grand, multi-tiered Meenakshi Amman Temple. Its streets hum with spiritual fervor, flower markets, and the aroma of jasmine and fresh filter coffee.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Meenakshi Amman Temple', 'Thirumalai Nayakkar Mahal', 'Koodal Azhagar Temple'],
    signatureDish: 'Idli, Dosa & Jigarthanda',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    highlights: ['Stroll past the 14 multi-colored, towering gopurams of Meenakshi Temple', 'Explore the massive Italian-Rajput architecture of Thirumalai Nayakkar Palace', 'Sip the local cooling drink, Jigarthanda, in the vibrant city center']
  },

  // Goa
  {
    id: 'panaji',
    stateId: 'goa',
    name: 'Panaji',
    description: 'The charming Goan capital, featuring colorful Portuguese residential quarters and colonial plazas.',
    overview: 'Located on the banks of the Mandovi River, Panaji (or Panjim) blends traditional Goan beach relaxed energy with historical Portuguese design. Its Fontainhas neighborhood is a preserved Latin Quarter of cobblestone streets and pastel houses.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Fontainhas Latin Quarter', 'Our Lady of the Immaculate Conception Church', 'Miramar Beach'],
    signatureDish: 'Goan Fish Curry Rice & Bebinca',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Photograph the bright yellow and blue colonial villas in Fontainhas', 'Take a sunset cruise down the scenic Mandovi River', 'Visit the iconic, stark white steps of the Immaculate Conception Church']
  },
  {
    id: 'calangute',
    stateId: 'goa',
    name: 'Calangute',
    description: 'The "Queen of Beaches", known for its wide golden shoreline, high-energy water sports, and bustling markets.',
    overview: 'Calangute is the largest and most famous beach town in North Goa. Stretching along the turquoise Arabian Sea, it is a bustling hub of beach shacks, thriving local craft markets, and high-octane water sports from parasailing to jet skiing.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Calangute Beach', 'Baga Beach', 'St. Alex Church', 'Tibetan Market'],
    signatureDish: 'Butter Garlic Prawns & Fish Recheado',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: ['Savor fresh seafood and local cocktails at beachfront shacks during a beautiful sunset', 'Try thrilling parasailing and windsurfing off the golden shores of Calangute', 'Browse colorful handicrafts, leather goods, and jewelry at the lively Tibetan Market']
  },
  {
    id: 'anjuna',
    stateId: 'goa',
    name: 'Anjuna',
    description: 'The legendary bohemian beach town, famous for its red volcanic rocks, Wednesday flea market, and sunset music vibe.',
    overview: 'Anjuna rose to international fame in the 1960s and 70s as a bohemian haven. Framed by striking red volcanic rock formations, it is a creative enclave known for its weekly Wednesday Flea Market, legendary beachside music shacks, and a relaxed, artistic seaside culture.',
    bestTimeToVisit: 'November to March',
    topAttractions: ['Anjuna Beach', 'Wednesday Flea Market', 'Chapora Fort', 'Albuquerque Mansion'],
    signatureDish: 'Goan Fish Curry & Cashew Feni',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Shop for vintage jewelry, beachwear, and arts at the sprawling Wednesday Flea Market', 'Climb up the ruins of Chapora Fort for panoramic views of the sea', 'Relax at the famous sunset beach clubs with ambient tunes and fresh coconut water']
  },
  {
    id: 'old-goa',
    stateId: 'goa',
    name: 'Old Goa (Velha Goa)',
    description: 'The majestic former colonial capital, hosting monumental UNESCO World Heritage cathedrals and convents.',
    overview: 'Velha Goa served as the capital of Portuguese India from the 16th to the 18th centuries, once rivaling Lisbon in splendor. Today, it is a peaceful UNESCO World Heritage site preserving grand, towering Baroque cathedrals, including the Basilica of Bom Jesus, which houses the mortal remains of St. Francis Xavier.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Basilica of Bom Jesus', 'Se Cathedral', 'Church of St. Augustine', 'Archaeological Museum'],
    signatureDish: 'Goan Pork Vindaloo & Bebinca',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Marvel at the spectacular Baroque architecture and the sacred tomb of St. Francis Xavier in the Basilica of Bom Jesus', 'Stand in awe beneath the giant golden bell of the massive Se Cathedral', 'Explore the hauntingly beautiful, 46-meter-high standing bell tower ruins of St. Augustine\'s Church']
  },

  // Delhi
  {
    id: 'new-delhi',
    stateId: 'delhi-ut',
    name: 'New Delhi',
    description: 'The monumental national capital, defined by spacious British-era avenues and modern architectural wonders.',
    overview: 'Laid out by British architect Edwin Lutyens, New Delhi features grand government hubs, sprawling lush parks, and striking contemporary structures like the Lotus Temple. It is a cosmopolitan crossroads of museums, diplomatic quarters, and upscale dining.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['India Gate', 'Humayun\'s Tomb', 'Lotus Temple', 'Rashtrapati Bhavan'],
    signatureDish: 'Butter Chicken & Butter Naan',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800',
    highlights: ['Walk around the magnificent red-stone garden complex of Humayun\'s Tomb', 'Reflect in the silent, flower-shaped Lotus Temple', 'Walk down Kartavya Path to view the iconic India Gate war memorial']
  },
  {
    id: 'old-delhi',
    stateId: 'delhi-ut',
    name: 'Old Delhi',
    description: 'The vibrant, chaotic historical heart of Delhi, filled with narrow spice lanes and Mughal fortresses.',
    overview: 'Formerly Shahjahanabad, Old Delhi was founded by Mughal Emperor Shah Jahan in 1639. It is characterized by the massive Red Fort, the sprawling Jama Masjid, and Chandni Chowk—a historic marketplace of incredible sensory density and street food legacy.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Red Fort', 'Jama Masjid', 'Chandni Chowk', 'Raj Ghat'],
    signatureDish: 'Dahi Bhalla, Paranthe & Kebabs',
    image: 'https://images.unsplash.com/photo-1626621340035-b1d50722353a?q=80&w=800',
    highlights: ['Take an exciting, bumpy cycle-rickshaw ride through the narrow lanes of Chandni Chowk', 'Stand in the massive courtyard of Jama Masjid, holding 25,000 worshippers', 'Taste 100-year-old deep-fried flatbread recipes at Paranthe Wali Gali']
  },
  // Andhra Pradesh
  {
    id: 'tirupati',
    stateId: 'andhra-pradesh',
    name: 'Tirupati',
    description: 'The spiritual heart of Andhra Pradesh, home to the sacred hilltop temple of Tirumala.',
    overview: 'Tirupati is an ancient, deeply spiritual city nestled at the foothills of the Seshachalam Range. Its crown jewel is the Tirumala Venkateswara Temple, sitting atop seven hills which represent the seven hoods of the cosmic serpent Adisesha, making it a pivotal site of Hindu worship and Dravidian architecture.',
    bestTimeToVisit: 'September to March',
    topAttractions: ['Tirumala Venkateswara Temple', 'Kapila Theertham', 'Sri Kalahasti Temple'],
    signatureDish: 'Tirupati Laddu & Pesarattu',
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=800',
    highlights: ['Ascend the holy Tirumala hills for a profound darshan experience', 'Marvel at the ancient rock-cut carvings at Kapila Theertham waterfall temple', 'Explore the masterfully carved wind-deity shrine at nearby Sri Kalahasti']
  },
  {
    id: 'visakhapatnam',
    stateId: 'andhra-pradesh',
    name: 'Visakhapatnam',
    description: 'A gorgeous coastal port city where lush green Eastern Ghats meet the blue waters of the Bay of Bengal.',
    overview: 'Often called Vizag, this beautiful coastal city is famous for its clean, golden beaches, rich maritime history, and the surrounding green hills of the Eastern Ghats. It hosts India\'s oldest shipyard and acts as the scenic gateway to the coffee plantations of Araku Valley.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Kailasagiri Hill', 'Submarine Museum', 'Rishikonda Beach'],
    signatureDish: 'Bamboo Chicken & Vizag Fish Curry',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Walk inside the decommissioned real Soviet-built Kursura Submarine Museum on the sand', 'Ride the ropeway up Kailasagiri Hill for stunning panoramic shoreline views', 'Enjoy high-speed boating and surfing on the clean curves of Rishikonda Beach']
  },
  {
    id: 'vijayawada',
    stateId: 'andhra-pradesh',
    name: 'Vijayawada',
    description: 'A bustling historical city on the banks of the Krishna River, famous for ancient caves and temples.',
    overview: 'Vijayawada is a vibrant historical city of Andhra Pradesh, surrounded by Indrakeeladri Hills. It is home to the legendary Kanaka Durga Temple, the rock-cut Undavalli Caves housing a monolithic reclining Vishnu, and the massive Prakasam Barrage stretching across the Krishna River.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Undavalli Caves', 'Kanaka Durga Temple', 'Prakasam Barrage'],
    signatureDish: 'Pulasa Fish Curry & Gongura Pachadi',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Walk through the four-tiered ancient rock-cut chambers of Undavalli Caves', 'Seek blessings at the hilltop Kanaka Durga Temple overlooking the river plains', 'Stroll along the historic Prakasam Barrage at sunset']
  },
  // Arunachal Pradesh
  {
    id: 'tawang',
    stateId: 'arunachal-pradesh',
    name: 'Tawang',
    description: 'A high-altitude paradise of pristine lakes, mist-shrouded valleys, and the grand Tawang Monastery.',
    overview: 'Tawang is a highly spectacular mountain town situated at 10,000 feet, rich in Tibetan Buddhist heritage. Surrounded by glacier-fed alpine lakes and steep mountain gorges, it holds the largest active monastery in India, preserving hundreds of years of spiritual learning.',
    bestTimeToVisit: 'March to June, October to November',
    topAttractions: ['Tawang Monastery', 'Sela Pass', 'Nuranang Falls'],
    signatureDish: 'Thukpa & Zan',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: ['Listen to the sacred morning prayers of the young monks at Tawang Monastery', 'Stand at the icy frozen shores of Sela Lake at 13,700 feet', 'Marvel at the thundering, pristine waters of Nuranang Falls']
  },
  {
    id: 'ziro',
    stateId: 'arunachal-pradesh',
    name: 'Ziro',
    description: 'A picturesque pine-clad valley home to the unique Apatani tribe and the world-famous music festival.',
    overview: 'Ziro is a quiet, stunningly scenic valley covered in pine groves and layered wet rice-paddy fields. It is the ancestral home of the Apatani people, renowned for their sustainable, ecological lifestyle, facial tattooing, and exquisite traditional handloom weaves.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Talley Valley Wildlife Sanctuary', 'Tarin Fish Farm', 'Ziro Pine Groves'],
    signatureDish: 'Bamboo Shoot Dry Fry & Apong',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    highlights: ['Visit traditional bamboo houses in Hong village and interact with Apatani elders', 'Hike through the biodiverse, cloud-forest canopies of Talley Valley', 'Attend the outdoor indie Ziro Festival of Music in late September']
  },
  {
    id: 'itanagar',
    stateId: 'arunachal-pradesh',
    name: 'Itanagar',
    description: 'The capital city, blending ancient archaeological fortresses with modern tribal museums.',
    overview: 'Itanagar is the administrative capital of Arunachal, nestled in the sub-Himalayan foothills. It is famous for the medieval brick ruins of Ita Fort, dating back to the 14th century, and the beautiful Gyakar Sinyi (Ganga Lake) surrounded by dense green forest canopies.',
    bestTimeToVisit: 'October to April',
    topAttractions: ['Ita Fort', 'Ganga Lake', 'Jawaharlal Nehru State Museum'],
    signatureDish: 'Marua Millet Beer & Momos',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800',
    highlights: ['Explore the irregular 14th-century brick ramparts of Ita Fort', 'Row a wooden boat across the peaceful, forest-rimmed Ganga Lake', 'Admire the collection of tribal headgears, weapons, and musical instruments in the museum']
  },
  // Assam
  {
    id: 'guwahati',
    stateId: 'assam',
    name: 'Guwahati',
    description: 'The bustling gateway to Northeast India, famous for ancient temples on the banks of the majestic Brahmaputra.',
    overview: 'Guwahati is a rapidly growing metropolis nestled between the southern bank of the Brahmaputra River and the foothills of the Shillong Plateau. It is a major spiritual center, home to the sacred Kamakhya Temple, and acts as the perfect starting point for wildlife expeditions in Assam.',
    bestTimeToVisit: 'November to April',
    topAttractions: ['Kamakhya Temple', 'Umananda Temple', 'Assam State Zoo'],
    signatureDish: 'Masor Tenga & Duck Meat Curry',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Ascend Nilachal Hill to seek blessings at the mystical Kamakhya Temple', 'Take a boat to Peacock Island to visit Umananda Temple, the smallest inhabited river island', 'Enjoy a luxurious sunset cruise on the vast Brahmaputra River']
  },
  {
    id: 'kaziranga',
    stateId: 'assam',
    name: 'Kaziranga National Park Area',
    description: 'The premier global wildlife sanctuary, sheltering the world\'s largest population of the great Indian One-Horned Rhinoceros.',
    overview: 'Kaziranga is a sprawling UNESCO World Heritage site situated in the floodplains of the Brahmaputra River. It comprises dense tall elephant grass, marshland, and tropical moist broadleaf forests. Apart from being home to two-thirds of the world\'s Great Indian Rhinoceroses, it is a key tiger reserve with an incredibly rich diversity of bird species, wild elephants, and water buffaloes.',
    bestTimeToVisit: 'November to April',
    topAttractions: ['Kaziranga National Park', 'Orchid and Cultural Park', 'Kakochang Waterfall'],
    signatureDish: 'Traditional Assamese Thali & Ou Tenga (Elephant Apple) Fish Curry',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=800',
    highlights: ['Go on a thrilling open jeep safari through the eastern or central range to spot wild Rhinoceroses', 'Explore the massive orchid greenhouse housing over 500 species of native orchids in the National Orchid Park', 'Witness traditional Assamese Bihu dance performances held every evening at the cultural pavilion']
  },
  {
    id: 'majuli',
    stateId: 'assam',
    name: 'Majuli Island',
    description: 'The world\'s largest river island, a peaceful sanctuary of Vaishnavite culture, art, and handlooms on the Brahmaputra.',
    overview: 'Majuli is a quiet, natural island cradled by the Brahmaputra River, and is the absolute epicenter of Assamese neo-Vaishnavite culture. Established in the 15th-century by the saint Srimanta Sankardev, it is famous for its "Satras" (monastic centers) preserving traditional theater, classical Gayan-Bayan music, unique clay mask-making, and exquisite hand-woven Muga silk textiles.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Kamalabari Satra', 'Samaguri Satra (Mask Making)', 'Auniati Satra', 'Dakhinpat Satra'],
    signatureDish: 'Sunga Saul (Sticky rice cooked in bamboo) & Komal Saul with curd',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
    highlights: ['Learn the age-old art of crafting expressionist mythological clay masks at the famous Samaguri Satra', 'Cycle across the serene bamboo-fringed lanes, visiting local Mising tribal villages and organic farms', 'Attend a captivating devotional dance and musical drum performance by the monastic monks in Kamalabari Satra']
  },
  {
    id: 'tezpur',
    stateId: 'assam',
    name: 'Tezpur',
    description: 'The cultural capital of Assam, rich in archaeological ruins, green tea estates, and mythological lore.',
    overview: 'Tezpur, also known as the City of Eternal Love, is a historic city on the banks of the Brahmaputra River. It is celebrated for its deep cultural connections to Assamese arts, beautiful stone carvings of Agnigarh hill, and expansive manicured green tea gardens.',
    bestTimeToVisit: 'October to April',
    topAttractions: ['Agnigarh Hill', 'Cole Park', 'Mahabhairab Temple'],
    signatureDish: 'Khar & Assamese Pitha',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    highlights: ['Climb the circular stairs of Agnigarh Hill for sweeping views of the Brahmaputra river bridge', 'Explore the 9th-century stone carvings and sculptures scattered inside Cole Park', 'Visit the ancient, giant Shiva Lingam shrine at Mahabhairab Temple']
  },
  // Bihar
  {
    id: 'bodhgaya',
    stateId: 'bihar',
    name: 'Bodh Gaya',
    description: 'The sacred cradle of Buddhism, where Prince Siddhartha attained supreme enlightenment under the Bodhi tree.',
    overview: 'Bodh Gaya is the holiest international Buddhist pilgrimage center. It is centered around the ancient, pyramid-shaped Mahabodhi Temple complex, the sacred Bodhi tree, and dozens of international monasteries representing Tibetan, Thai, Bhutanese, and Japanese Buddhist architecture.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Mahabodhi Temple', 'Great Buddha Statue', 'Royal Bhutan Monastery'],
    signatureDish: 'Litti Chokha & Tilkut',
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=800',
    highlights: ['Meditate in silence under the green canopy of the sacred Bodhi Tree', 'Stand in awe beneath the towering 80-foot stone Great Buddha Statue', 'Stroll through the beautifully manicured gardens of international monasteries']
  },
  {
    id: 'nalanda',
    stateId: 'bihar',
    name: 'Nalanda',
    description: 'The ancient intellectual capital of the world, home to the archaeological ruins of the 5th-century university.',
    overview: 'Nalanda is a historic world-heritage site preserving the brick ruins of the prestigious 5th-century residential university which hosted scholars from Greece, Persia, and China. The nearby town of Rajgir features ancient rock-cut caves, natural hot water springs, and the Vishwa Shanti Stupa.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Nalanda University Ruins', 'Nalanda Archaeological Museum', 'Rajgir Ropeway'],
    signatureDish: 'Sattu Paratha & Khaja',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Explore the red-brick cells, stupas, and massive library basements of Nalanda University', 'Ride the aerial ropeway up the scenic hills of Rajgir to see the peace stupa', 'Examine ancient seals and Buddhist stone statues in the Nalanda Museum']
  },
  {
    id: 'patna',
    stateId: 'bihar',
    name: 'Patna',
    description: 'The ancient capital city of Pataliputra, stretching along the sacred banks of the Ganges.',
    overview: 'Patna, historically known as Pataliputra, is one of the world\'s oldest continuously inhabited cities. It served as the capital of the Maurya and Gupta empires, and is now a thriving regional capital housing ancient granaries, modern museums, and the sacred Takht Sri Patna Sahib.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Golghar', 'Patna Museum', 'Takht Sri Patna Sahib'],
    signatureDish: 'Chana Ghugni & Thekua',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
    highlights: ['Climb the spiral stairs of the massive 1786 brick granary of Golghar for Ganges views', 'Marvel at the 2000-year-old Didarganj Yakshi sandstone sculpture in Patna Museum', 'Seek spiritual blessings at the gold-embellished birthplace of Guru Gobind Singh']
  },
  // Chhattisgarh
  {
    id: 'jagdalpur',
    stateId: 'chhattisgarh',
    name: 'Jagdalpur',
    description: 'The cultural capital of Bastar, famous for the colossal Chitrakote Falls and vibrant Gond tribal traditions.',
    overview: 'Jagdalpur is a beautiful, off-the-beaten-path city in the Bastar district of Chhattisgarh. It serves as the gateway to the colossal horseshoe-shaped Chitrakote Falls, cascading limestone waterfalls of Kanger Valley, and centuries-old Gond tribal weekly craft bazaars.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Chitrakote Falls', 'Teerathgarh Falls', 'Kanger Valley National Park'],
    signatureDish: 'Bastar Red Ant Chutney (Chaprah) & Fara',
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800',
    highlights: ['Witness India\'s widest waterfall, Chitrakote, roar like a massive horseshoe curtain of water', 'Stroll through a bustling local tribal market to find hand-crafted Bastar bell-metal art', 'Bathe in the mineral-rich pool beneath the multi-tiered Teerathgarh Falls']
  },
  {
    id: 'raipur',
    stateId: 'chhattisgarh',
    name: 'Raipur',
    description: 'The dynamic capital city, blending archaeological museums, sacred lakes, and bustling craft markets.',
    overview: 'Raipur is the rapidly modernizing capital of Chhattisgarh, surrounded by ancient metal casting clusters. It houses the magnificent Purkhouti Muktangan, an open-air museum displaying lifelike tribal art, and acts as the perfect gateway to explore Chhattisgarh\'s dense woodlands.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Purkhouti Muktangan', 'Swami Vivekananda Lake', 'Nandan Van Zoo'],
    signatureDish: 'Muthia & Chila',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Explore the massive open-air tribal sculptures and village replicas of Purkhouti Muktangan', 'Sit in quiet meditation next to the 81-foot Swami Vivekananda metal statue', 'Shop for authentic Dhokra brass castings and terracotta pottery at Raipur bazaars']
  },
  {
    id: 'bilaspur',
    stateId: 'chhattisgarh',
    name: 'Bilaspur',
    description: 'A historical city known for ancient temple ruins, colorful handloom weaves, and dense wildlife reserves.',
    overview: 'Bilaspur is the judicial capital of Chhattisgarh, renowned for its aromatic Doobraj rice, traditional hand-woven Kosa silk sarees, and its proximity to the pristine Achanakmar Tiger Reserve and ancient 5th-century temple ruins along the Arpa River.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Achanakmar Tiger Reserve', 'Ratanpur Fort & Temple', 'Tala Archaeological Site'],
    signatureDish: 'Bafauri & Rice Roll',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    highlights: ['Take a jeep safari through the dense bamboo and sal forests of Achanakmar Tiger Reserve', 'Marvel at the ancient, bizarrely sculpted Devrani-Jethani temples at Tala', 'Buy hand-loom Kosa silk fabrics direct from weaving co-operatives in the region']
  },
  // Goa (Additional curated cities)
  {
    id: 'margao',
    stateId: 'goa',
    name: 'Margao',
    description: 'The cultural and commercial capital of Goa, known for pre-colonial mansions and bustling traditional markets.',
    overview: 'Margao is Goa\'s second-largest city and its cultural heartland. It showcases a rich blend of Indo-Portuguese architecture, notably seen in the grand Holy Spirit Church and the historic colonial-era mansions of the old quarter. The bustling Margao Municipal Market remains a legendary sensory experience of spices, dried fish, and local crafts.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Holy Spirit Church', 'Margao Municipal Market', 'Sat Burzam Ghor (Seven Gables House)'],
    signatureDish: 'Goan Pork Chorizo & Sanna',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Visit the majestic 17th-century Holy Spirit Church with its Baroque style altars', 'Bargain for authentic local choriso sausages, Cashew Feni, and dried red chillies in the market', 'Take a short drive to the peaceful Colva Beach for a swim']
  },
  {
    id: 'canacona',
    stateId: 'goa',
    name: 'Canacona (Palolem)',
    description: 'Southern Goa\'s tranquil beach-town paradise, renowned for palm-fringed crescent bays, eco-resorts, and dolphin-spotting.',
    overview: 'Canacona is the southernmost taluka of Goa, representing a much quieter, more pristine alternative to the bustling north. It is centered around Palolem Beach, a perfect crescent of golden sand lined with colourful wooden stilt shacks and coco-palms. The region blends relaxed beach culture with rich nature sanctuaries like the Cotigao Wildlife Sanctuary.',
    bestTimeToVisit: 'November to March',
    topAttractions: ['Palolem Beach', 'Patnem Beach', 'Cotigao Wildlife Sanctuary'],
    signatureDish: 'Butter Garlic Calamari & Fish Thali',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: ['Kayak out to Monkey Island from Palolem during low tide', 'Go on an early-morning boat trip to spot wild dolphins playing in the Arabian Sea', 'Trek through the dense multi-tiered tree canopies of Cotigao Wildlife Sanctuary']
  },
  // Gujarat Curated Cities
  {
    id: 'ahmedabad',
    stateId: 'gujarat',
    name: 'Ahmedabad',
    description: 'India\'s first UNESCO World Heritage City, famous for Sabarmati Ashram, intricately carved stepwells, and street food.',
    overview: 'Founded in 1411 by Sultan Ahmad Shah on the banks of the Sabarmati River, Ahmedabad is a majestic metropolis of textile wealth and historical depth. The city features beautifully preserved "Pols" (micro-neighborhoods of interlocking carved wooden houses), ancient mosques with stone filigree windows (Sidi Saiyyed Mosque), and the peaceful Sabarmati Ashram, which served as Mahatma Gandhi\'s headquarters.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Sabarmati Ashram', 'Adalaj Stepwell', 'Sidi Saiyyed Mosque', 'Manek Chowk'],
    signatureDish: 'Gujarati Thali & Khaman Dhokla',
    image: 'https://images.unsplash.com/photo-1603258591838-f99b11097e33?q=80&w=800',
    highlights: ['Walk the historic lanes of the Old City Pols with a local heritage guide', 'Stand in quiet reflection at Mahatma Gandhi\'s peaceful riverside residence', 'Feast on street delicacies like Gwalior Dosa and Butter Bhaji Pav at the late-night Manek Chowk market']
  },
  {
    id: 'vadodara',
    stateId: 'gujarat',
    name: 'Vadodara (Baroda)',
    description: 'The cultural capital of Gujarat, celebrated for the colossal Laxmi Vilas Palace and rich Garba festivals.',
    overview: 'Vadodara, historically ruled by the Gaekwad dynasty, is widely considered the cultural hub of Gujarat. It is dominated by the Laxmi Vilas Palace, a colossal 19th-century Maratha-Victorian residence four times the size of Buckingham Palace. It is also globally renowned for hosting the world\'s largest and most vibrant nine-night Garba folk dance festivals during Navratri.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Laxmi Vilas Palace', 'Sayaji Baug & Museum', 'Champaner-Pavagadh Archaeological Park'],
    signatureDish: 'Sev Usal & Duliram Peda',
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=800',
    highlights: ['Marvel at the Belgian stained glass, Venetian mosaics, and royal weapons inside Laxmi Vilas Palace', 'Explore the ancient, ruined medieval mosques of the UNESCO site of Champaner nearby', 'Ride the heritage toy train inside the sprawling gardens of Sayaji Baug']
  },
  {
    id: 'bhuj',
    stateId: 'gujarat',
    name: 'Bhuj',
    description: 'The historic desert gateway to Kutch, famed for ancient glass palaces and rich tribal artisan villages.',
    overview: 'Bhuj is a uniquely resilient, historic walled city in the Kutch region. Surrounded by hill fortresses and dry salt flats, Bhuj serves as the prime hub to explore Kutch\'s ancient history and its deeply sustainable tribal weaving, block-printing, and embroidery co-operatives. The city itself hosts beautiful, partially-ruined palaces dating back to the Jadeja Rajput rulers.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Aina Mahal (Palace of Mirrors)', 'Prag Mahal', 'Bhujodi Craft Village'],
    signatureDish: 'Kutchi Dabeli & Bajra No Rotlo',
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=800',
    highlights: ['Admire the beautiful glass and mirror artwork crafted by 18th-century local artisans in Aina Mahal', 'Meet master weavers, block-printers, and leather workers in nearby Bhujodi and Hodka villages', 'Climb the steps of Prag Mahal for a bird\'s-eye view of the entire city']
  },
  {
    id: 'rann-of-kutch-city',
    stateId: 'gujarat',
    name: 'Rann of Kutch',
    description: 'The spectacular, vast salt desert of India, celebrated for its brilliant white landscape and the Rann Utsav.',
    overview: 'The Great Rann of Kutch is a seasonal salt marsh located in the Thar Desert. Covering over 7,500 square kilometers, it is one of the world\'s largest salt deserts. During the winter months, the dry salt crust glows a brilliant white, hosting the vibrant, three-month-long Rann Utsav festival.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['White Rann', 'Kalo Dungar (Black Hill)', 'Dhordo Tent City', 'Kutch Desert Wildlife Sanctuary'],
    signatureDish: 'Kutchi Khichdi & Kadhi',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    highlights: ['Watch the breathtaking white salt desert glow under the light of a full winter moon', 'Climb Kalo Dungar, the highest point in Kutch, to see the panoramic views of the Indo-Pak border', 'Stay in a traditional mud hut (Bhungas) and experience Gujarati folk music and dances']
  },
  {
    id: 'dwarka',
    stateId: 'gujarat',
    name: 'Dwarka',
    description: 'The legendary ocean kingdom of Lord Krishna, featuring the magnificent Dwarkadhish Temple.',
    overview: 'Dwarka is one of India\'s most sacred Chardham pilgrimage sites. Perched at the mouth of the Gomti River on the Arabian Sea, it is celebrated as the historic capital of Lord Krishna\'s kingdom. The city is dominated by the colossal 5-story Dwarkadhish Temple (Jagat Mandir), supported by 72 pillars.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Dwarkadhish Temple', 'Nageshwar Jyotirlinga', 'Beyt Dwarka Island', 'Gomti Ghat'],
    signatureDish: 'Gujarati Khichdi & Rabdi',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Witness the grand, multi-flag changing ceremony at the summit of Dwarkadhish Temple', 'Take a boat ride to the offshore Beyt Dwarka Island to explore ancient archaeological ruins', 'Feed migratory seagulls and take a holy bath at the Gomti River confluence']
  },
  {
    id: 'somnath-city',
    stateId: 'gujarat',
    name: 'Somnath',
    description: 'The "Shrine Eternal", home to the first of twelve sacred Shiva Jyotirlinga temples on the seashore.',
    overview: 'Somnath is a highly sacred seashore temple town on the western coast of Gujarat. Its crown jewel is the magnificent Somnath Temple, the first of the twelve holy Jyotirlingas. Famously destroyed and rebuilt seven times through history, the current Chalukya-style temple stands as a symbol of resilience.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Somnath Temple', 'Triveni Sangam', 'Bhalka Tirth', 'Somnath Beach'],
    signatureDish: 'Khaman Dhokla & Fafda Jalebi',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Attend the magnificent evening Light and Sound Show narrated by the roaring ocean waves', 'Visit Bhalka Tirth, the sacred site where Lord Krishna is believed to have departed the earth', 'Stand at the Triveni Sangam where the three sacred rivers Hiran, Kapila, and Saraswati merge']
  },
  {
    id: 'gir-national-park-city',
    stateId: 'gujarat',
    name: 'Sasan Gir',
    description: 'The exclusive global sanctuary of the wild Asiatic Lion, sprawling across dry deciduous forests.',
    overview: 'Sasan Gir is a spectacular forest reserve in southern Gujarat. It is the absolute last remaining natural habitat of the endangered Asiatic Lion in the wild. The park features a unique dry deciduous ecosystem of teak woodlands, thorn scrub, and pristine lakes harboring marsh crocodiles.',
    bestTimeToVisit: 'December to March (Closed from June 16 to October 15)',
    topAttractions: ['Gir National Park Safari', 'Kamleshwar Dam', 'Gir Interpretation Zone (Devalia)', 'Crocodile Breeding Centre'],
    signatureDish: 'Kathiawadi Ringan No Oro (Baingan Bharta) & Rotla',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    highlights: ['Take an open jeep safari to spot the majestic, golden-maned Asiatic Lion in the wild', 'Observe the rich avian biodiversity and nesting marsh crocodiles at Kamleshwar Dam', 'Meet the resilient, nomadic Maldhari tribe who live inside the lion sanctuary']
  },

  // Haryana Curated Cities
  {
    id: 'gurugram',
    stateId: 'haryana',
    name: 'Gurugram',
    description: 'The futuristic "millennial city" of steel-and-glass skyscrapers, luxury entertainment hubs, and corporate giants.',
    overview: 'Gurugram (formerly Gurgaon) is a dramatic success story of modern urban development. From a quiet agricultural village, it has transformed into India\'s prime corporate capital, housing hundreds of Fortune 500 offices, spectacular skyscrapers, luxury shopping malls, and premium dining-leisure clusters like DLF CyberHub.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['DLF CyberHub', 'Kingdom of Dreams (Heritage sector)', 'Museo Camera'],
    signatureDish: 'Singri ki Sabzi & Bajra Khichri',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Dine at gourmet global restaurants and bars in the futuristic CyberHub complex', 'Explore the world\'s largest collection of vintage photographic cameras and history at Museo Camera', 'Spend an afternoon walking around the nearby Aravali Biodiversity Park']
  },
  {
    id: 'kurukshetra-city',
    stateId: 'haryana',
    name: 'Kurukshetra',
    description: 'The holy land of the Mahabharata battlefield and the sacred site where the Bhagavad Gita was delivered.',
    overview: 'Kurukshetra is an ancient spiritual town deeply steeped in sacred Hindu epics. According to the Mahabharata, this was the monumental battlefield where the Pandavas and Kauravas fought, and where Lord Krishna delivered the timeless spiritual guidance of the Bhagavad Gita to Arjuna. The town centers around grand, ancient bathing reservoirs.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Brahma Sarovar', 'Jyotisar (Gita Birthplace)', 'Kurukshetra Panorama and Science Centre'],
    signatureDish: 'Kachri ki Chutney & Thick Lassi',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Walk around the vast, serene water steps of Brahma Sarovar, one of Asia\'s largest man-made sacred tanks', 'Sit under the ancient holy banyan tree at Jyotisar, marking the exact spot of the Gita delivery', 'Explore the 3D-panorama depicting the epic battles of the Mahabharata']
  },
  {
    id: 'panchkula',
    stateId: 'haryana',
    name: 'Panchkula',
    description: 'A beautifully planned green city at the foothills of the Himalayas, serving as a gateway to scenic Shivalik valleys.',
    overview: 'Panchkula is a green, serene planned city that shares borders with Chandigarh. Surrounded by thick forest areas and Shivalik foothills, it acts as the perfect gateway to northern Haryana\'s natural highlights, including the 17th-century Mughal gardens of Pinjore and the mist-shrouded peaks of Morni Hills, the state\'s only hill station.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Pinjore Yadavindra Gardens', 'Morni Hills', 'Bhima Devi Temple Complex'],
    signatureDish: 'Kadhi Chawal & Besan Barfi',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Walk along the seven terraced fountains of the majestic Mughal-styled Pinjore Gardens', 'Enjoy boating and watch the peaceful sunset reflected on the hills at Tikkar Taal lakes in Morni Hills', 'Marvel at the ancient, ruined temple sculptures in the "Khajuraho of Haryana" (Bhima Devi temple)']
  },
  // Himachal Pradesh Curated Cities
  {
    id: 'shimla',
    stateId: 'himachal-pradesh',
    name: 'Shimla',
    description: 'The former summer capital of British India, famous for its historic colonial Mall Road, Ridge, and toy train.',
    overview: 'Perched at 7,200 feet along a scenic crescent ridge, Shimla represents the classic Himalayan hill station. Once the summer capital of the British Raj, it preserves an outstanding wealth of Tudor-Gothic and Victorian architectures, connected beautifully by the pedestrian-only Mall Road and the heritage Kalka-Shimla mountain railway.',
    bestTimeToVisit: 'March to June, November to February (for Snow)',
    topAttractions: ['The Ridge & Mall Road', 'Viceregal Lodge', 'Jakhoo Temple'],
    signatureDish: 'Chha Gosht & Siddu with Ghee',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    highlights: ['Ride the vintage Kalka-Shimla Toy Train through 100+ stone tunnels and pine valleys', 'Explore the grand Scottish baronial interiors of the historic Viceregal Lodge', 'Trek up Jakhoo Hill through dense oak forests to meet wild monkeys and see the giant Hanuman statue']
  },
  {
    id: 'manali',
    stateId: 'himachal-pradesh',
    name: 'Manali',
    description: 'A breathtaking mountain adventure hub nestled in the Beas River valley, offering glaciers, paragliding, and skiing.',
    overview: 'Manali is India\'s premier mountain getaway, cradled by snow-clad peaks of the Pir Panjal and Dhauladhar ranges. Divided into the bustling modern commercial town and the quiet, wooden old-world lanes of Old Manali, it serves as the ultimate staging ground for high-altitude treks, Solang valley adventure sports, and trans-Himalayan journeys to Ladakh.',
    bestTimeToVisit: 'March to June, September to February',
    topAttractions: ['Solang Valley', 'Hadimba Temple', 'Old Manali Old Town'],
    signatureDish: 'Trout Fish Curry & Siddu',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800',
    highlights: ['Trek to the ancient pagoda-shaped wooden Hadimba Temple built in a dense cedar grove', 'Go paragliding, zorbing, and skiing in the panoramic bowls of Solang Valley', 'Sip fresh apple cider and listen to live music in the cozy wooden cafes of Old Manali']
  },
  {
    id: 'dharamshala',
    stateId: 'himachal-pradesh',
    name: 'Dharamshala (McLeod Ganj)',
    description: 'The spiritual hill sanctuary of the Dalai Lama, characterized by Tibetan monasteries and misty cedar forests.',
    overview: 'Dharamshala rises dramatically along the forested lower slopes of the Dhauladhar range. Its upper district, McLeod Ganj (Little Lhasa), is the global home-in-exile of His Holiness the 14th Dalai Lama and the Tibetan Government. It is a peaceful, vibrant confluence of sacred prayer wheels, red-robed monks, and spectacular mountain hikes.',
    bestTimeToVisit: 'March to June, September to November',
    topAttractions: ['Tsuglagkhang Complex (Dalai Lama Temple)', 'Bhagsunag Waterfall', 'Triund Trek'],
    signatureDish: 'Tibetan Momos, Thukpa & Butter Tea',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: ['Spin sacred brass prayer wheels and hear monks debate philosophy inside the Dalai Lama Temple', 'Trek up the panoramic ridge of Triund for a breathtaking camp under the sheer glacier cliffs', 'Shop for traditional hand-woven Tibetan carpets and sand-paintings (Thangkas)']
  },
  {
    id: 'spiti',
    stateId: 'himachal-pradesh',
    name: 'Spiti Valley',
    description: 'A cold desert mountain wonderland of ancient cliffside monasteries and deep gorges.',
    overview: 'Spiti Valley is a high-altitude cold desert nestled in the Himalayas, known as "The Middle Land" between India and Tibet. It is a scenic terrain of stark, wind-carved barren mountains, deep canyons, whitewashed ancient Tibetan Buddhist monasteries hanging precariously on cliffs, and some of the world\'s highest inhabited villages like Kibber and Hikkim.',
    bestTimeToVisit: 'May to October',
    topAttractions: ['Key Monastery', 'Dhankar Monastery', 'Chandratal Lake', 'Hikkim Post Office'],
    signatureDish: 'Spitian Sea Buckthorn Juice & Butter Tea',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    highlights: ['Send a postcard from Hikkim, the world\'s highest post office at 14,400 feet', 'Marvel at the ancient Buddhist murals and cliffside architecture of the Key Monastery', 'Camp under the Milky Way beside the pristine, crescent-shaped Chandratal Lake']
  },
  {
    id: 'kasol',
    stateId: 'himachal-pradesh',
    name: 'Kasol',
    description: 'The "Little Israel of India", a vibrant riverside hub in the Parvati Valley popular for trekking and alpine pine woods.',
    overview: 'Kasol is a scenic, pine-fringed village on the banks of the roaring Parvati River. Known for its laid-back bohemian vibe, abundance of Israeli cafes, and spectacular mountain vistas, it serves as the ultimate base for legendary Himalayan treks like Kheerganga and Sar Pass.',
    bestTimeToVisit: 'March to June & September to November',
    topAttractions: ['Parvati River', 'Chalal Village', 'Kheerganga Trek', 'Manikaran Sahib Gurudwara'],
    signatureDish: 'Shakshuka & Israeli Falafel Platters',
    image: 'https://images.unsplash.com/photo-1618397746666-63405ce5d015?q=80&w=800',
    highlights: ['Trek along the Parvati River to the quiet, traditional hamlet of Chalal', 'Soak in the natural, therapeutic hot sulfur springs at Manikaran Sahib', 'Hike through towering pine forests to camp in the alpine meadows of Kheerganga']
  },

  // Jharkhand Curated Cities
  {
    id: 'ranchi',
    stateId: 'jharkhand',
    name: 'Ranchi',
    description: 'The scenic "City of Waterfalls," surrounded by rolling hills, ancient tribal woods, and lakes.',
    overview: 'Ranchi, the capital of Jharkhand, sits gracefully on the southern Chota Nagpur Plateau. Blessed with a lovely, moderate climate, it is famous for its natural topography featuring countless high-altitude waterfalls plunging over rocky cliffs, sacred hills, and its deep connection to indigenous tribal cultures and ancient holy groves.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Hundru Falls', 'Jonha Falls', 'Ranchi Lake & Pahari Mandir'],
    signatureDish: 'Duska with Ghugni',
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=800',
    highlights: ['Stand at the edge of the 320-foot Hundru Falls as the Subarnarekha River plunges over granite rocks', 'Climb the steps of Pahari Mandir on Ranchi Hill for a panoramic view of the entire city and lake', 'Sample authentic tribal dishes like Duska made of fermented rice-and-lentil batter']
  },
  {
    id: 'jamshedpur',
    stateId: 'jharkhand',
    name: 'Jamshedpur',
    description: 'India\'s first planned industrial city, known as "Steel City," offering lush green parks and clean avenues.',
    overview: 'Founded by legendary industrialist Jamsetji Tata in 1919, Jamshedpur (Tatanagar) is a marvelous testament to planned civic design. It uniquely balances major steel and automotive industries with massive, beautiful public parks, clean wide avenues, natural lakes, and a wonderful green forest cover, making it a highly livable model city.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Jubilee Park', 'Dimna Lake', 'Tata Steel Zoological Park'],
    signatureDish: 'Litti Chokha & Arsa Roti',
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=800',
    highlights: ['Walk along the musical illuminated fountains and rose gardens of the 220-acre Jubilee Park', 'Enjoy boating and watch the peaceful sunset reflected on the hills at Dimna Lake reservoir', 'Learn about India\'s industrial history at the Tata Steel museum and archives']
  },
  {
    id: 'deoghar',
    stateId: 'jharkhand',
    name: 'Deoghar',
    description: 'The ancient holy "House of Gods," home to one of India\'s twelve sacred Shiva Jyotirlingas.',
    overview: 'Deoghar is one of the most prominent, ancient spiritual destinations in Eastern India. Its centerpiece is the Baba Baidyanath Temple complex, which houses one of the twelve sacred Jyotirlingas of Lord Shiva. Every monsoon, it hosts the historic Shravani Mela, the world\'s longest uninterrupted religious festival where millions of saffron-clad pilgrims walk 105 km to carry holy Ganges water to the temple.',
    bestTimeToVisit: 'October to March, July/August (For Shravani Mela experience)',
    topAttractions: ['Baidyanath Jyotirlinga Temple', 'Trikut Hills', 'Tapovan Caves'],
    signatureDish: 'Deoghar Peda (Khoa sweet)',
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=800',
    highlights: ['Offer prayers at the ancient Baidyanath Temple, marveling at the traditional red-ribbon cords connecting Shiva and Parvati domes', 'Ride the cable car to the top of Trikut Hills for breathtaking panoramic views of the dense forests', 'Explore the ancient stone-carved meditation chambers and caves of Tapovan']
  },
  // Karnataka Curated Cities
  {
    id: 'bengaluru',
    stateId: 'karnataka',
    name: 'Bengaluru (Bangalore)',
    description: 'The high-tech Silicon Valley of India, celebrated for grand microbreweries, leafy public parks, and historic palaces.',
    overview: 'Bengaluru is India\'s third-largest city and its absolute technology hub. Beyond its sprawling IT parks, it is affectionately called the Garden City for its vast greenery in Cubbon Park and Lalbagh. It houses the magnificent Tudor-style Bangalore Palace and is globally famous for inventing Rava Idli and possessing a legendary craft beer culture.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Lalbagh Botanical Garden', 'Bangalore Palace', 'Cubbon Park', 'Tipu Sultan\'s Summer Palace'],
    signatureDish: 'Bisi Bele Bath & Filter Coffee',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800',
    highlights: ['Take a morning walk through the historic, bamboo-lined pathways of Cubbon Park', 'Explore the elegant wooden pillars and royal history inside Bangalore Palace', 'Sip fresh craft beer at one of Indiranagar\'s modern microbreweries']
  },
  {
    id: 'mysuru',
    stateId: 'karnataka',
    name: 'Mysuru (Mysore)',
    description: 'The clean, grand City of Palaces, famous for royal Dussehra heritage, sandalwood incense, and silk.',
    overview: 'Mysuru served as the capital of the Kingdom of Mysore under the Wodeyar dynasty for six centuries. Celebrated as the cultural capital of Karnataka, the city is famous for its magnificent Mysore Palace (wonderfully illuminated by 100,000 lightbulbs), aromatic sandalwood crafts, Mysore silk sarees, and its iconic ten-day Dussehra festival.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Mysore Palace', 'Chamundi Hill', 'Devaraja Market', 'Brindavan Gardens'],
    signatureDish: 'Mysore Masala Dosa & Mysore Pak',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Marvel at the breathtaking royal Durbar Hall inside the Mysore Palace', 'Climb Chamundi Hill to visit the ancient temple and see the giant monolithic Nandi bull', 'Explore the colorful mounds of fresh powder-paints and jasmine garlands in Devaraja Market']
  },
  {
    id: 'hampi-city',
    stateId: 'karnataka',
    name: 'Hampi',
    description: 'A spectacular UNESCO world heritage ruin of the Vijayanagara Empire, set amidst surreal boulder hills.',
    overview: 'Hampi is an open-air museum of unmatched grandeur. Once the capital of one of the world\'s richest medieval empires, it features hundreds of stunning, partially-ruined temples, royal platforms, and complex stone aqueducts sprawling across 4,100 hectares of red-rock boulders and lush green banana plantations along the Tungabhadra River.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Virupaksha Temple', 'Vittala Temple (Stone Chariot)', 'Lotus Mahal', 'Hemakuta Hill'],
    signatureDish: 'Ragi Mudde with Spicy Sambar',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=800',
    highlights: ['Climb Hemakuta Hill at sunset to see the ancient monoliths look gold', 'Tap the musical stone pillars inside the majestic Vittala Temple complex', 'Take a traditional coracle (circular bamboo boat) ride on the Tungabhadra River']
  },
  {
    id: 'coorg',
    stateId: 'karnataka',
    name: 'Coorg (Kodagu)',
    description: 'The "Scotland of India", famed for its emerald coffee estates, misty peaks, and Kodava culture.',
    overview: 'Coorg is a stunning, high-altitude mountain district in southern Karnataka. Perched on the Western Ghats, it is covered in rolling mist, dense teak forests, and sprawling organic coffee and pepper estates. It is also home to the brave, hospitable Kodava people with their unique cultural traditions.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Abbey Falls', 'Raja Seat', 'Namdroling Monastery (Golden Temple)', 'Talakaveri'],
    signatureDish: 'Pandi Curry (Spicy Pork) & Kadambuttu (Rice Balls)',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800',
    highlights: ['Visit the spectacular Namdroling Monastery to see the massive 40-foot golden Buddha statues', 'Trek up to Raja\'s Seat to witness a breathtaking sunrise over the misty valleys', 'Walk through a family-owned spice and coffee plantation to learn the harvest process']
  },
  {
    id: 'gokarna',
    stateId: 'karnataka',
    name: 'Gokarna',
    description: 'A pristine, sacred coastal town of majestic rocky beaches, cliffside treks, and ancient Mahabaleshwar temple.',
    overview: 'Gokarna is a unique temple town situated on the Arabian Sea coast of Karnataka. Historically famous for its ancient Mahabaleshwar Temple containing the sacred Atmalinga, it has also become a beloved coastal retreat known for its pristine, crescent-shaped beaches like Om Beach and Half Moon Beach, separated by dramatic rocky cliffs.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Mahabaleshwar Temple', 'Om Beach', 'Kudle Beach', 'Gokarna Beach Trek'],
    signatureDish: 'Seafood Thali & Wood-fired Pizza',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: ['Trek across the dramatic rocky cliffs connecting Kudle, Om, Half Moon, and Paradise beaches', 'Explore the ancient carvings and profound spiritual heritage at Mahabaleshwar Temple', 'Relax on the golden sands of Om Beach, shaped naturally like the sacred Hindu symbol']
  },

  // Madhya Pradesh Curated Cities
  {
    id: 'bhopal',
    stateId: 'madhya-pradesh',
    name: 'Bhopal',
    description: 'The City of Lakes, boasting a dramatic historical core, magnificent mosques, and prehistoric cave shelters.',
    overview: 'Bhopal is a beautiful lake city divided into two distinct worlds: the historic, old walled city featuring labyrinthine bazaars and colossal 19th-century mosques built by independent female rulers (Begums), and the modern green planned city. It sits close to the prehistoric UNESCO-listed rock paintings of Bhimbetka.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Upper Lake (Bhojtal)', 'Taj-ul-Masajid', 'Bhimbetka Rock Shelters (nearby)', 'Tribal Museum'],
    signatureDish: 'Bhopali Gosht Korma & Poha Jalebi',
    image: 'https://images.unsplash.com/photo-1610483178766-00466479a022?q=80&w=800',
    highlights: ['Admire the grand pink minarets of Taj-ul-Masajid, one of Asia\'s largest mosques', 'Stroll through the outstandingly designed Tribal Museum showcasing indigenous arts', 'Enjoy evening boating and watch the sunset at the massive Bhojtal lake']
  },
  {
    id: 'indore',
    stateId: 'madhya-pradesh',
    name: 'Indore',
    description: 'The dynamic culinary capital of Madhya Pradesh, cleanest city in India, and seat of Holkar royalty.',
    overview: 'Indore, consistently voted India\'s cleanest city, is a bustling trade metropolis with deep historical roots. Ruled by the legendary Queen Ahilyabai Holkar, the city is famous for the multi-tiered Rajwada Palace and its passionate street-food culture, centered around the late-night Chappan Dukan and Sarafa Bazaar markets.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Rajwada Palace', 'Lal Bagh Palace', 'Sarafa Bazaar (Night Food Market)', 'Chappan Dukan'],
    signatureDish: 'Bhutte ka Kees & Garadu',
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=800',
    highlights: ['Marvel at the majestic seven-story Holkar gateway of Rajwada Palace', 'Visit Sarafa Bazaar after 10 PM to sample world-class street snacks like Dahi Vada and Jaleba', 'Walk through the grand Baroque halls and Belgian glass of Lal Bagh Palace']
  },
  {
    id: 'khajuraho',
    stateId: 'madhya-pradesh',
    name: 'Khajuraho',
    description: 'A world-renowned UNESCO site harboring majestic, highly elaborate sandstone temples and intricate erotic sculptures.',
    overview: 'Khajuraho is an ancient town built between 950 and 1050 AD by the Chandela Dynasty. It is a stunning display of medieval Indian temple architecture (Nagara style), famous for its beautifully preserved, highly detailed stone-carved sculptures depicting daily medieval life, spiritual symbols, and exquisite erotic scenes.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Kandariya Mahadev Temple', 'Lakshmana Temple', 'Light & Sound Show', 'Panna National Park (nearby)'],
    signatureDish: 'Khajuraho Ke Kebab & Malpua',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=800',
    highlights: ['Marvel at the soaring, mountain-like shikhara of the Kandariya Mahadev Temple', 'Attend the magnificent evening Light and Sound Show narrated in Amitabh Bachchan\'s voice', 'View the rare, perfectly preserved stone relief panels around the Lakshmana Temple base']
  },
  {
    id: 'orchha',
    stateId: 'madhya-pradesh',
    name: 'Orchha',
    description: 'A beautiful, frozen-in-time royal town of colossal Chhatris, multi-story palaces, and the unique Raja Ram Temple.',
    overview: 'Orchha, literally meaning \'Hidden\', is a peaceful medieval town established in 1501 by Bundela Rajputs on the banks of the scenic Betwa River. It is famous for its grand, soaring palace-fort complexes, tall stone-carved Chhatris (cenotaphs) reflecting on the water, and being the only temple in India where Lord Rama is worshiped as a ruling King.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Orchha Fort Complex (Jahangir Mahal)', 'Chaturbhuj Temple', 'Royal Chhatris on Betwa River', 'Raja Ram Temple'],
    signatureDish: 'Bundelkhandi Mawa Bati & Shahi Tukda',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800',
    highlights: ['Explore the multi-tiered royal courtyard and stone-jali screens of Jahangir Mahal', 'Watch the spectacular sunset reflect off the tall stone Chhatris along the Betwa River banks', 'Participate in the unique Guard of Honor ceremony at the Raja Ram Temple']
  },
  {
    id: 'gwalior',
    stateId: 'madhya-pradesh',
    name: 'Gwalior',
    description: 'A historic fortress city famed for classical music, ancient rock temples, and spectacular palaces.',
    overview: 'Gwalior is dominated by its colossal hilltop fortress, an ancient stronghold described as "the pearl in the necklace of castles of India". The city is deeply associated with classical music, being the birthplace of legendary court musician Tansen, and features the dazzling European-style Jai Vilas Palace.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Gwalior Fort', 'Man Singh Palace', 'Jai Vilas Palace', 'Sas Bahu Temples'],
    signatureDish: 'Bedai Poori & Kachori with Jalebi',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Explore the colorful blue-tiled mosaic turrets of Man Singh Palace inside the fort', 'Marvel at the twin giant crystal chandeliers (weighing 3.5 tonnes) inside Jai Vilas Palace', 'Pay tribute at the peaceful tomb of Tansen, the father of Indian classical music']
  },
  // Maharashtra Curated Cities (Additional)
  {
    id: 'pune',
    stateId: 'maharashtra',
    name: 'Pune',
    description: 'The cultural capital of Maharashtra, renowned for historic Maratha forts, top universities, and green hills.',
    overview: 'Pune (historically Poona) was the esteemed seat of the Peshwas of the Maratha Empire. Today, it beautifully balances its historical identity as the "Oxford of the East" with a booming tech and youth culture, surrounded by the dramatic fortresses of the Western Ghats.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Shaniwar Wada', 'Aga Khan Palace', 'Sinhagad Fort', 'Dagdusheth Halwai Temple'],
    signatureDish: 'Misal Pav & Bhakarwadi',
    image: 'https://images.unsplash.com/photo-1601931114553-611ff7a9b0a1?q=80&w=800',
    highlights: ['Stand before the massive fortified stone gates of Shaniwar Wada, the ruined Peshwa palace', 'Visit the peaceful, Italian-arched Aga Khan Palace, where Mahatma Gandhi was interned', 'Trek up to the mountaintop Sinhagad Fort for panoramic views of Pune\'s misty valleys']
  },
  {
    id: 'aurangabad',
    stateId: 'maharashtra',
    name: 'Aurangabad (Chhatrapati Sambhajinagar)',
    description: 'The gateway to the UNESCO-listed ancient rock-cut cave masterpieces of Ajanta and Ellora.',
    overview: 'Named after Mughal Emperor Aurangzeb and recently renamed, this historic city serves as the base to explore the world\'s finest ancient rock-cut architecture. Within the city sits Bibi Ka Maqbara (a stunning replica of the Taj Mahal) and the colossal, impregnable Daulatabad Fort perched on a conical hill.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Ellora Caves', 'Ajanta Caves', 'Bibi Ka Maqbara', 'Daulatabad Fort'],
    signatureDish: 'Naan Qalia',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Marvel at Kailash Temple in Ellora, the world\'s largest monolithic rock-cut structure carved from the top down', 'See the 2000-year-old Buddhist frescoes inside the dark chambers of Ajanta', 'Walk the dark, maze-like bhool-bhulaiya passages to climb Daulatabad Fort']
  },
  {
    id: 'lonavala',
    stateId: 'maharashtra',
    name: 'Lonavala',
    description: 'A stunning hill station in the Sahyadri ranges, renowned for cascading waterfalls, panoramic viewpoints, and traditional chikki candy.',
    overview: 'Lonavala is a spectacular mountain retreat in the Western Ghats. It comes alive beautifully during the monsoon season with dense mist, sweeping green hills, and cascading waterfalls. It is a historic gateway of ancient Buddhist rock-cut caves (Karla & Bhaja) and formidable hill fortresses like Lohagad.',
    bestTimeToVisit: 'June to September (Monsoon) & October to March',
    topAttractions: ['Tiger Point', 'Karla Caves', 'Bhushi Dam', 'Lohagad Fort'],
    signatureDish: 'Lonavala Groundnut Chikki & Fudge',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=800',
    highlights: ['Stand at Tiger Point as heavy monsoon clouds roll across the deep mountain valleys', 'Explore the 2000-year-old Karla Caves, featuring the grandest Chaitya prayer hall in India', 'Hike up to Lohagad Fort for sweeping views of Pawna Lake']
  },
  // Manipur Curated Cities
  {
    id: 'imphal',
    stateId: 'manipur',
    name: 'Imphal',
    description: 'The historic valley capital, home to the sacred Kangla Fort, the world\'s only women-run bazaar, and polo origins.',
    overview: 'Imphal lies in a beautiful valley bowl surrounded by blue hills. It boasts the massive, moated Kangla Fort, the historical spiritual center of Meitei rulers, and the Ima Keithel—a legendary 500-year-old market run entirely by over 5,000 married women, representing a powerful symbol of Manipuri matriarchal heritage.',
    bestTimeToVisit: 'October to April',
    topAttractions: ['Kangla Fort', 'Ima Keithel (Mother\'s Market)', 'Shree Govindajee Temple', 'Imphal War Cemetery'],
    signatureDish: 'Eromba & Chak-Hao Kheer',
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=800',
    highlights: ['Shop for traditional hand-woven Phanek skirts and bamboo crafts at the historic Ima Keithel', 'Walk along the moats and view the sacred white brick Kangla Sha dragons inside Kangla Fort', 'Listen to the evening devotional temple songs (Sankirtan) at Shree Govindajee Temple']
  },
  {
    id: 'moirang',
    stateId: 'manipur',
    name: 'Moirang (Loktak Lake)',
    description: 'The cultural town on Loktak Lake, famous for floating islands and Indian National Army history.',
    overview: 'Moirang is a historic lakeside town located on the banks of Loktak Lake, the largest freshwater lake in Northeast India. It is famous for Keibul Lamjao, the world\'s only floating national park, and for being the site where the Indian National Army (INA) under Subhas Chandra Bose hoisted the Indian tricolor flag on Indian soil for the first time in 1944.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Loktak Lake & Phumdis', 'Keibul Lamjao National Park', 'INA Memorial Complex'],
    signatureDish: 'Singju & Kangshoi',
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800',
    highlights: ['Take a traditional wooden boat ride over the shimmering waters of Loktak Lake among floating phumdis', 'Trek through the floating grass of Keibul Lamjao to spot the rare dancing Sangai deer', 'Visit the INA Museum to see rare photographs and artifacts from India\'s freedom struggle']
  },
  // Meghalaya Curated Cities
  {
    id: 'shillong',
    stateId: 'meghalaya',
    name: 'Shillong',
    description: 'The "Scotland of the East", a vibrant mountain capital of pine hills, waterfalls, and rock music culture.',
    overview: 'Shillong is a beautiful hill station situated at an altitude of 1,525 meters. Surrounded by pine forests and rolling hills, it is the cultural capital of the Khasi people. It is famous for its lively café scenes, vibrant local indie rock bands, and spectacular forest waterfalls.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Shillong Peak', 'Elephant Falls', 'Ward\'s Lake', 'Don Bosco Museum'],
    signatureDish: 'Jadoh (Rice and pork) & Dohneiiong',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800',
    highlights: ['Enjoy stunning panoramic views of the city skyline from Shillong Peak', 'Explore the rich indigenous cultures of Northeast India at the 7-story Don Bosco Museum', 'Walk across the wooden bridge over the serene, lotus-filled Ward\'s Lake']
  },
  {
    id: 'cherrapunji',
    stateId: 'meghalaya',
    name: 'Cherrapunji (Sohra)',
    description: 'One of the wettest places on earth, celebrated for deep cloud canyons, waterfalls, and living root bridges.',
    overview: 'Cherrapunji (historically Sohra) is perched on a high sandstone plateau looking over the Bangladesh plains. Famously receiving massive monsoon rainfall, the area is home to dense tropical rainforests, pristine limestone caves, soaring plunge waterfalls, and double-decker living root bridges crafted by Khasi tribes from rubber tree roots.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Nohkalikai Falls', 'Double Decker Living Root Bridge', 'Mawsmai Cave', 'Seven Sisters Falls'],
    signatureDish: 'Pukhlein (Sweet rice bread)',
    image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=800',
    highlights: ['Hike down the steps of Tyrna village to walk across the 150-year-old Double Decker Living Root Bridge', 'See the majestic Nohkalikai Falls, the tallest plunge waterfall in India, cascading down a green cliff', 'Explore the ancient, fossil-rimmed limestone passages of Mawsmai Cave']
  },
  {
    id: 'mawlynnong',
    stateId: 'meghalaya',
    name: 'Mawlynnong',
    description: 'Acclaimed as "Asia\'s Cleanest Village", a peaceful enclave of living root bridges, gardens, and bamboo towers.',
    overview: 'Mawlynnong is a peaceful village in the East Khasi Hills, internationally famous for its pristine cleanliness. Maintained meticulously by the local Khasi community, the village is a botanical paradise of orchids, clean cobbled lanes, eco-friendly bamboo dustbins, and beautiful organic houses.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Single Living Root Bridge', 'Sky View Bamboo Tower', 'Mawlynnong Waterfall', 'Church of the Epiphany'],
    signatureDish: 'Jingbam (Traditional Khasi tea snacks)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: ['Walk on the living root bridge situated in the neighboring village of Riwai', 'Climb up the 85-foot Sky View bamboo watchtower for sweeping views looking into the plains of Bangladesh', 'Stroll through the manicured village pathways lined with colorful pitchers of pitcher plants and blooming flowers']
  },

  // Mizoram Curated Cities
  {
    id: 'aizawl',
    stateId: 'mizoram',
    name: 'Aizawl',
    description: 'The scenic ridge capital of Mizoram, offering lush green pine hills, bamboo dances, and misty horizons.',
    overview: 'Aizawl is a highly picturesque mountain city perched on a steep ridge at 1,132 meters. Serving as the home of the Mizo people, the city is a peaceful retreat of wooden cottages, beautiful Presbyterian churches, and expansive views of the Tlawng River valley below.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Solomon\'s Temple', 'Mizoram State Museum', 'Reiek Hill', 'KV Paradise'],
    signatureDish: 'Bai (Mixed vegetable stew with pork)',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Trek up to the grassy, windswept ridge of Reiek Hill for panoramic mountain vistas', 'Visit the architectural marvel of Solomon\'s Temple built with pristine white stone', 'See rare Mizo traditional costumes and archaeological weapons inside the State Museum']
  },
  {
    id: 'lunglei',
    stateId: 'mizoram',
    name: 'Lunglei',
    description: 'The tranquil second-largest town, named after a scenic natural bridge of rock and rich in biodiversity.',
    overview: 'Lunglei, literally meaning "bridge of rock," is a quiet town in southern Mizoram. It is surrounded by dense tropical forests, sprawling rice terraces, and unique rock-cut geological formations. It is a peaceful hub for trekking, bird watching, and experiencing pure Mizo rural hospitality.',
    bestTimeToVisit: 'October to April',
    topAttractions: ['Nghasih Stream', 'Lunglei Rock Bridge', 'Khawnglung Wildlife Sanctuary'],
    signatureDish: 'Vawksa Rep (Smoked pork curry)',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=800',
    highlights: ['Photograph the unique natural stone bridge formation on the outskirts of the town', 'Spot endangered wild cats, serows, and exotic hornbills inside Khawnglung Wildlife Sanctuary', 'Relax by the crystal-clear waters of the scenic Nghasih Stream']
  },

  // Nagaland Curated Cities
  {
    id: 'kohima',
    stateId: 'nagaland',
    name: 'Kohima',
    description: 'The historic highland capital, famed for WWII history, Angami heritage, and the Hornbill Festival.',
    overview: 'Kohima is a beautiful hill town nestled in the southern Nagaland mountains. It is a historical land of the courageous Angami Naga tribe, and is globally famous for hosting the monumental annual Hornbill Festival in December, celebrating Naga tribal arts, music, and cuisine.',
    bestTimeToVisit: 'October to May (Hornbill Festival is Dec 1-10)',
    topAttractions: ['Kohima War Cemetery', 'Kisama Heritage Village', 'Japfu Peak', 'Dzukou Valley'],
    signatureDish: 'Smoked Pork with Bamboo Shoot & Galho',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
    highlights: ['Walk through the traditional Naga tribal huts and Morungs inside the Kisama Heritage Village', 'Trek through the gorgeous dwarf-bamboo landscape of the pristine, emerald-green Dzukou Valley', 'Pay tribute at the serene Kohima War Cemetery commemorating the heroes of WWII Battle of Kohima']
  },
  {
    id: 'dimapur',
    stateId: 'nagaland',
    name: 'Dimapur',
    description: 'The commercial gateway of Nagaland, preserving the monolithic stone pillars of the ancient Kachari Kingdom.',
    overview: 'Dimapur is the largest city in Nagaland, located on the plains along the Dhansiri River. It served as the capital of the 13th-century Kachari Kingdom, and today hosts the ruins of unique, mushroom-shaped carved stone monoliths representing ancient fertility rituals.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Kachari Ruins', 'Diezephe Craft Village', 'Triple Falls', 'Nagaland Science Centre'],
    signatureDish: 'Zutho (Local rice beer) & Bamboo Shoot Fish',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Walk among the towering, mysterious stone monoliths inside the historic Kachari Ruins park', 'Shop for authentic hand-woven Naga shawls and exquisite cane-bamboo baskets in Diezephe Village', 'Hike through thick evergreen forests to view the pristine three-tiered cascade of Triple Falls']
  },

  // Odisha Curated Cities
  {
    id: 'bhubaneswar',
    stateId: 'odisha',
    name: 'Bhubaneswar',
    description: 'The "Temple City of India", boasting thousand-year-old sandstone architecture and ancient rock-cut caves.',
    overview: 'Bhubaneswar is the vibrant capital of Odisha, representing a history stretching back over 2,000 years. Known as the Temple City, it once hosted over 7,000 sandstone temples. Today, it preserves pristine Dravidian-style spires like Lingaraj Temple, the nearby ancient Jain rock caves of Udayagiri & Khandagiri, and the historic Ashokan rock edicts at Dhauli.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Lingaraj Temple', 'Udayagiri & Khandagiri Caves', 'Dhauli Peace Pagoda', 'Mukteshwar Temple'],
    signatureDish: 'Dalma & Chhena Poda (Oriya baked cheese cake)',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Marvel at the exquisitely carved red-sandstone arches of the 10th-century Mukteshwar Temple', 'Explore the ancient rock-cut residential caves of Jain monks in Udayagiri, carved in the 2nd century BC', 'Stand before the glistening white dome of Dhauli Peace Pagoda looking over the historic Kalinga battlefield']
  },
  {
    id: 'puri',
    stateId: 'odisha',
    name: 'Puri',
    description: 'The highly sacred seashore pilgrimage city, home of the monumental Jagannath Temple and long golden beaches.',
    overview: 'Puri is a holy coastal city situated on the Bay of Bengal, celebrated as one of India\'s Chardham pilgrimage sites. It centers around the colossal 12th-century Jagannath Temple, famous for the grand annual Rath Yatra (Chariot Festival). It also features clean, golden beaches that are famous for spectacular sand art and sunset views.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Jagannath Temple', 'Golden Beach Puri', 'Chilika Lake (nearby)', 'Narendra Tank'],
    signatureDish: 'Puri Khaja & Mahaprasad Abadha',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Walk along the wide sands of Puri Golden Beach and observe local sand artists carving intricate sculptures', 'Take a boat ride on the nearby brackish Chilika Lake to spot wild Irrawaddy dolphins', 'Visit the heritage crafts village of Raghurajpur to see artisans paint traditional Pattachitra scrolls']
  },
  {
    id: 'konark',
    stateId: 'odisha',
    name: 'Konark',
    description: 'The home of the monumental Sun Temple, a colossal 13th-century stone chariot sculpted on the seashore.',
    overview: 'Konark is a peaceful seaside town famous worldwide for the magnificent, UNESCO-listed Sun Temple. Built in 1250 AD by King Narasimhadeva I, the temple is designed as a colossal, 24-wheeled chariot of the Sun God drawn by seven stone horses, representing the absolute peak of medieval Odishan architectural sculpture.',
    bestTimeToVisit: 'September to March',
    topAttractions: ['Konark Sun Temple', 'Chandrabhaga Beach', 'Konark Archaeological Museum', 'Kuruma Buddhist Site'],
    signatureDish: 'Chhena Jhili & Crab Masala',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Marvel at the giant, intricate stone sundial wheels of the Sun Temple, which can calculate time down to minutes', 'Watch a peaceful, spectacular sunrise at the nearby Chandrabhaga Beach, a clean blue-flag certified coast', 'Attend the world-famous Konark Dance Festival in December, celebrating Odissi and Indian classical dances under the illuminated temple backdrop']
  },
  // Sikkim Curated Cities
  {
    id: 'gangtok',
    stateId: 'sikkim',
    name: 'Gangtok',
    description: 'The modern Himalayan capital of Sikkim, blending deep Buddhist spirituality with pristine mountain viewpoints.',
    overview: 'Gangtok is a clean, litter-free city situated on a steep mountain ridge at an altitude of 1,650 meters. It features pedestrian-only paved boulevards, colorful monastery roofs, and direct panoramic views of the spectacular Mount Kanchenjunga peak.',
    bestTimeToVisit: 'March to May & October to December',
    topAttractions: ['M.G. Marg', 'Rumtek Monastery', 'Tsomgo Lake', 'Ganesh Tok'],
    signatureDish: 'Momos & Thukpa',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: ['Stroll down the pedestrian-only, floral-lined M.G. Marg boulevard', 'Listen to Buddhist chants at the majestic Rumtek Monastery', 'Take a cable car ride overlooking the deep valleys and hills of Gangtok']
  },
  {
    id: 'pelling',
    stateId: 'sikkim',
    name: 'Pelling',
    description: 'A scenic mountain town offering the closest, most spectacular views of Mount Kanchenjunga.',
    overview: 'Pelling is a serene destination perched in West Sikkim, famous for its lush forests, mountain streams, and deep-rooted spiritual history. It features India\'s first glass skywalk and the ruins of Rabdentse Palace, the ancient capital of the Sikkim kingdom.',
    bestTimeToVisit: 'September to May',
    topAttractions: ['Pemayangtse Monastery', 'Rabdentse Ruins', 'Sikkim Skywalk', 'Kanchenjunga Falls'],
    signatureDish: 'Sha Phaley & Thukpa',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=800',
    highlights: ['Walk on the glass skywalk high above the valleys of Pelling', 'Explore the historic brick ruins of Rabdentse Palace surrounded by forests', 'View the ancient sacred scrolls inside the three-tiered Pemayangtse Monastery']
  },
  {
    id: 'lachung',
    stateId: 'sikkim',
    name: 'Lachung',
    description: 'A pristine alpine mountain village on the Tibetan border, surrounded by waterfalls and pine forests.',
    overview: 'Lachung is a high-altitude rustic village in North Sikkim, divided by the sparkling Lachung River. Serving as the gateway to the breathtaking Yumthang Valley of Flowers, it features wooden cottages, organic apple orchards, and massive snow-peaks.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Yumthang Valley of Flowers', 'Lachung Monastery', 'Zero Point', 'Shingba Rhododendron Sanctuary'],
    signatureDish: 'Chhurpi (Local Yak Cheese dish)',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800',
    highlights: ['Witness over 40 species of rhododendrons in bloom in Yumthang Valley in spring', 'Warm yourself by a wood fire with hot butter tea in a traditional Lachung cottage', 'Drive up to Zero Point (15,300 ft) to touch snow even in late spring']
  },
  // Tamil Nadu Curated Cities (Madurai already exists)
  {
    id: 'chennai',
    stateId: 'tamil-nadu',
    name: 'Chennai',
    description: 'The historic gateway to South India, blending colonial-era forts with golden sand beaches and Carnatic heritage.',
    overview: 'Formerly known as Madras, Chennai is a vibrant coastal metropolis. It is famous for Marina Beach (one of the longest urban beaches in the world), classical music and dance academies, and its legendary status as a hub for automotive industries and South Indian cuisine.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Marina Beach', 'Fort St. George', 'Kapaleeshwarar Temple', 'San Thome Basilica'],
    signatureDish: 'Masala Dosa, Sambar & Filter Coffee',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    highlights: ['Take a refreshing sunset walk on the golden sands of Marina Beach', 'Marvel at the colorful Dravidian architecture of Kapaleeshwarar Temple in Mylapore', 'Examine the historic East India Company relics inside Fort St. George Museum']
  },
  {
    id: 'ooty',
    stateId: 'tamil-nadu',
    name: 'Ooty (Udhagamandalam)',
    description: 'The legendary Queen of Hill Stations, featuring terraced tea gardens and a historic mountain toy train.',
    overview: 'Ooty is a picturesque hill station nestled in the Nilgiri Hills at an altitude of 2,240 meters. Established by the British as a summer retreat, it features English-style stone cottages, sprawling rose gardens, misty lakes, and extensive terraced tea plantations.',
    bestTimeToVisit: 'October to June',
    topAttractions: ['Nilgiri Mountain Railway', 'Ooty Lake', 'Government Botanical Garden', 'Doddabetta Peak'],
    signatureDish: 'Ooty Varkey & Homemade Chocolates',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    highlights: ['Ride the historic Nilgiri Mountain Toy Train, a UNESCO World Heritage site', 'Take a peaceful boat ride across the misty waters of Ooty Lake', 'Walk through the manicured pathways of the 170-year-old Botanical Garden']
  },
  {
    id: 'thanjavur-city',
    stateId: 'tamil-nadu',
    name: 'Thanjavur (Tanjore)',
    description: 'The royal capital of the Cholas, celebrated for the colossal Brihadisvara Temple, classical art, and Tanjore paintings.',
    overview: 'Thanjavur is the cradle of Tamil classical culture and the historic capital of the Great Living Cholas. The city centers around the monumental Brihadisvara Temple, a 1,000-year-old architectural masterpiece of Dravidian engineering. It is also globally renowned for Tanjore gold-leaf paintings, unique metal dolls, and Carnatic music heritage.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Brihadisvara Temple', 'Thanjavur Royal Palace', 'Saraswathi Mahal Library', 'Schwartz Church'],
    signatureDish: 'Tanjavur Kadappa & Filter Coffee',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Marvel at the monolithic, 80-tonne stone cupola crowning the Brihadisvara Temple', 'Browse ancient palm-leaf manuscripts at the historic Saraswathi Mahal Library', 'Watch local artisans handcraft balancing copper-alloy Tanjore bobblehead dolls']
  },
  {
    id: 'kanyakumari',
    stateId: 'tamil-nadu',
    name: 'Kanyakumari',
    description: 'The southernmost tip of mainland India, where three seas meet beneath spectacular sunrise and sunset horizons.',
    overview: 'Kanyakumari is a highly symbolic coastal town situated at the geographic tip of India where the Arabian Sea, the Bay of Bengal, and the Indian Ocean merge. It is famous for its multicolored sand beaches, the spectacular Thiruvalluvar Statue, and the offshore Vivekananda Rock Memorial.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Vivekananda Rock Memorial', 'Thiruvalluvar Statue', 'Kanyakumari Temple', 'Triveni Sangam'],
    signatureDish: 'Kanyakumari Fish Curry & Nendran Chips',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: ['Take a ferry ride to the offshore Vivekananda Rock Memorial and sit in quiet meditation', 'Witness the rare phenomenon of sunset and moonrise occurring simultaneously over the ocean', 'Explore the Gandhi Memorial Mandapam designed like an Orissa temple where Gandhiji\'s ashes were kept']
  },

  // Telangana Curated Cities
  {
    id: 'hyderabad',
    stateId: 'telangana',
    name: 'Hyderabad',
    description: 'The City of Pearls, combining stunning Nizam-era palaces and fortresses with a thriving global tech landscape.',
    overview: 'Hyderabad is a dynamic historic city located on the banks of the Musi River. It is famous for its iconic Charminar, the massive Golconda Fort, and the opulent Chowmahalla Palace, alongside the bustling modern tech hub of HITEC City.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['The Charminar', 'Golconda Fort', 'Chowmahalla Palace', 'Salargunj Museum'],
    signatureDish: 'Hyderabadi Dum Biryani & Double ka Meetha',
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=800',
    highlights: ['Climb the spiral steps of the Charminar for a birds-eye view of the old bazaar', 'Experience the magical acoustic echoes inside the grand halls of Golconda Fort', 'Savor authentic, slow-cooked Hyderabadi Dum Biryani at a heritage restaurant']
  },
  {
    id: 'warangal',
    stateId: 'telangana',
    name: 'Warangal',
    description: 'The ancient capital of the Kakatiya Dynasty, celebrated for its geometric stone temples and forts.',
    overview: 'Warangal showcases the architectural genius of the Kakatiya rulers. It features the incredible Thousand Pillar Temple, the massive Warangal Fort with its iconic stone archways (Kakatiya Kala Thoranam), and beautiful lakes surrounded by forests.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Thousand Pillar Temple', 'Warangal Fort Ruins', 'Bhadrakali Temple', 'Ramappa Temple'],
    signatureDish: 'Sarvapindi & Natu Kodi Kura (Country Chicken Curry)',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Photograph the iconic Kakatiya stone gateway archways at Warangal Fort', 'Examine the detailed, polished basalt pillars inside the Thousand Pillar Temple', 'Boating on the serene waters of the historic Waddepally Lake']
  },
  // Tripura Curated Cities
  {
    id: 'agartala',
    stateId: 'tripura',
    name: 'Agartala',
    description: 'The royal capital of Tripura, featuring sprawling white marble palaces and rich bamboo-craft traditions.',
    overview: 'Agartala is a green, historical city located near the Bangladesh border. It is centered around the majestic Ujjayanta Palace, the historic seat of the Manikya kings, and is celebrated for its lush parks, traditional tribal weaving, and bamboo craftsmanship.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Ujjayanta Palace', 'Neermahal Palace', 'Sepahijala Wildlife Sanctuary', 'Tripura Sundari Temple'],
    signatureDish: 'Wahan Mosdeng (Pork Salad) & Mui Borok',
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=800',
    highlights: ['Walk through the grand white halls and Mughal-style gardens of Ujjayanta Palace', 'Take a boat ride across Rudrasagar Lake to explore the Neermahal Water Palace', 'Shop for exquisite bamboo-crafted lamps and traditional hand-woven Risa shawls']
  },
  {
    id: 'unakoti-town',
    stateId: 'tripura',
    name: 'Unakoti',
    description: 'A sacred archaeological wonder hidden in lush forests, famous for hundreds of giant rock-cut carvings.',
    overview: 'Unakoti is an ancient, mystical pilgrimage site situated in North Tripura. It is renowned for its colossal, detailed bas-relief stone carvings of Lord Shiva and other Hindu deities sculpted directly into a steep forest cliffside, dating back to the 7th-9th centuries.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Unakoti Rock Carvings', 'Unakotiswara Kal Bhairav', 'Lush Forest Trails'],
    signatureDish: 'Kosoi Bouthrok & Traditional Herb stew',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: ['Stand in awe before the 30-foot tall carved face of Unakotiswara Kal Bhairav on the cliffside', 'Trek through the misty, green bamboo forest pathways surrounding the sacred springs', 'Attend the vibrant Ashokastami Mela festival in spring, drawing thousands of devotees']
  },
  // Uttar Pradesh Curated Cities (additional)
  {
    id: 'lucknow',
    stateId: 'uttar-pradesh',
    name: 'Lucknow',
    description: 'The City of Nawabs, celebrated for its elegant Mughal etiquette, historic imambaras, and delicate Chikankari embroidery.',
    overview: 'Lucknow, the capital of Uttar Pradesh, is a refined cultural center on the banks of the Gomti River. Renowned for its architectural wonders like the Bara Imambara and its unique Nawabi court culture, it is a culinary capital of Northern India, famous for slow-cooked Awadhi biryanis and kebabs.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Bara Imambara', 'Chhota Imambara', 'Rumi Darwaza', 'The Residency'],
    signatureDish: 'Tunday Kababi & Lucknowi Biryani',
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
    highlights: ['Explore the gravity-defying Bhool Bhulaiya labyrinth inside Bara Imambara', 'Shop for delicate hand-embroidered Chikankari textiles in Aminabad', 'Savor world-famous melt-in-mouth Galouti Kebabs at historic food stalls']
  },
  {
    id: 'ayodhya',
    stateId: 'uttar-pradesh',
    name: 'Ayodhya',
    description: 'A sacred, ancient holy city on the banks of the Sarayu River, revered as the legendary birthplace of Lord Rama.',
    overview: 'Ayodhya is an ancient temple city deeply woven into the spiritual fabric of India. Home to the magnificent Ram Janmabhoomi Temple, Hanuman Garhi, and countless historic ghats along the sacred Sarayu River, it is a key pilgrimage destination attracting millions of devotees each year.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Ram Janmabhoomi Temple', 'Hanuman Garhi', 'Kanak Bhawan', 'Nageshwarnath Temple'],
    signatureDish: 'Ayodhya Rabri & Peda',
    image: 'https://images.unsplash.com/photo-1678848784013-ec8fa5f275e5?q=80&w=800',
    highlights: ['Attend the magnificent evening Sarayu River Aarti ceremony at the ghats', 'Marvel at the grand stone carvings of the newly constructed Ram Mandir', 'Observe hundreds of playful monkeys and historic temple arches at Hanuman Garhi']
  },
  {
    id: 'mathura',
    stateId: 'uttar-pradesh',
    name: 'Mathura',
    description: 'The sacred birthplace of Lord Krishna on the banks of the Yamuna River, rich in ancient ghats and temples.',
    overview: 'Mathura is one of Hinduism\'s seven sacred cities, celebrated as the historic birthplace of Lord Krishna. Bordering the Yamuna River, the town is packed with ancient shrines, bustling temple bazaars, and vibrant ghats like Vishram Ghat. It is a major spiritual center that comes alive during Janmashtami and Holi.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Krishna Janmabhoomi Temple', 'Vishram Ghat', 'Dwarkadhish Temple', 'Kusum Sarovar'],
    signatureDish: 'Mathura Ke Pede & Makhan Mishri',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
    highlights: ['Take a quiet boat ride at Vishram Ghat during the evening Yamuna Aarti ceremony', 'Explore the ancient prison cell shrine inside the Krishna Janmasthan Temple complex', 'Savor fresh, warm Mathura pedas from historic sweet vendors near Dwarkadhish Temple']
  },

  // Uttarakhand Curated Cities
  {
    id: 'rishikesh',
    stateId: 'uttarakhand',
    name: 'Rishikesh',
    description: 'The Yoga Capital of the World, where the holy Ganges emerges from the Himalayas amidst ashrams and river rapids.',
    overview: 'Perched on the foothills of the Himalayas, Rishikesh is a dual hub of spiritual serenity and extreme adventure. Famously visited by the Beatles in the 1960s, it is lined with renowned yoga retreats, ancient temples, suspension bridges, and thrilling white-water rafting runs.',
    bestTimeToVisit: 'September to November & March to May',
    topAttractions: ['Lakshman Jhula', 'Triveni Ghat', 'Parmarth Niketan Ashram', 'Beatles Ashram'],
    signatureDish: 'Aloo Poori & Ginger Lemon Honey Tea',
    image: 'https://images.unsplash.com/photo-1545203144-7121b2236f5e?q=80&w=800',
    highlights: ['Raft through the wild rapids of the Ganges River', 'Attend the soul-stirring evening Ganga Aarti at Parmarth Niketan', 'Explore the colorful, graffiti-covered ruins of the historic Beatles Ashram']
  },
  {
    id: 'nainital',
    stateId: 'uttarakhand',
    name: 'Nainital',
    description: 'A picturesque lake resort town nestled in a pear-shaped volcanic valley surrounded by pine-covered hills.',
    overview: 'Centering around the tranquil emerald waters of Naini Lake, Nainital is a classic British-era hill station. It offers a cool alpine climate, panoramic viewpoints of the high-peaks, boating clubs, and vibrant local bazaars along the famous Mall Road.',
    bestTimeToVisit: 'March to June & October to December',
    topAttractions: ['Naini Lake', 'Naina Devi Temple', 'Snow View Point', 'Eco Cave Gardens'],
    signatureDish: 'Baal Mithai (Sweet roasted milk fudge with sugar beads)',
    image: 'https://images.unsplash.com/photo-1610123598195-efa6b4be3c9a?q=80&w=800',
    highlights: ['Take a wooden boat ride on the emerald Naini Lake', 'Ride the aerial ropeway up to Snow View Point for vistas of Nanda Devi peak', 'Walk through the narrow, stone-cut passages of the Eco Cave Gardens']
  },
  {
    id: 'mussoorie',
    stateId: 'uttarakhand',
    name: 'Mussoorie',
    description: 'The Queen of the Hills, offering breathtaking colonial estates, waterfalls, and sweeping views of the Doon Valley.',
    overview: 'Mussoorie is a highly popular hill station perched on a 2,000-meter-high ridge in the Garhwal Himalayas. It boasts a rich colonial heritage, sprawling view terraces, mountain waterfalls like Kempty Falls, and is home to the legendary writer Ruskin Bond.',
    bestTimeToVisit: 'April to June & September to November',
    topAttractions: ['Kempty Falls', 'Gun Hill', 'Lal Tibba', 'The Mall Road'],
    signatureDish: 'Garhwali Kafuli & Dumplings',
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=800',
    highlights: ['Walk along the pedestrian-only Mall Road decorated with vintage streetlamps', 'Stand beneath the freezing cascade of Kempty Falls', 'Peer through the telescope at Lal Tibba for views of remote snow peaks']
  },
  {
    id: 'haridwar',
    stateId: 'uttarakhand',
    name: 'Haridwar',
    description: 'One of the oldest living holy cities, where the sacred Ganges exits the mountains and flows into the plains.',
    overview: 'Haridwar, literally "Gateway to God," is a highly sacred ancient city in Uttarakhand. It is a major pilgrimage center situated where the rapid, emerald-green Ganges River first enters the northern plains. The city is famous for its vibrant ghats, particularly Har Ki Pauri, where thousands gather every evening for the spectacular floating-lamp Ganga Aarti ceremony, and for hosting the legendary Kumbh Mela.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Har Ki Pauri', 'Mansa Devi Temple (Ropeway)', 'Chandi Devi Temple', 'Shanti Kunj Ashram'],
    signatureDish: 'Haridwari Aloo Puri & Rabri',
    image: 'https://images.unsplash.com/photo-1545203144-7121b2236f5e?q=80&w=800',
    highlights: ['Watch the spellbinding evening Ganga Aarti as hundreds of leaf-boat lamps float down the river at Har Ki Pauri', 'Ride the Udankhatola ropeway up Bilwa Parvat to the hilltop shrine of Mansa Devi', 'Walk through the serene, spiritual botanical gardens inside the Shanti Kunj Ashram']
  },
  // West Bengal Curated Cities
  {
    id: 'kolkata',
    stateId: 'west-bengal',
    name: 'Kolkata',
    description: 'The City of Joy and cultural capital of India, blending grand Victorian architecture, literary cafes, and sweet shop heritage.',
    overview: 'Kolkata is a vibrant city on the Hooghly River. It is famous for its intellectual heritage, vintage yellow taxis, British colonial structures like the Victoria Memorial, and its unparalleled celebration of Durga Puja, which is a UNESCO Intangible Cultural Heritage.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Victoria Memorial', 'Howrah Bridge', 'Dakshineswar Kali Temple', 'Indian Museum'],
    signatureDish: 'Kolkata Biryani & Rosogolla',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800',
    highlights: ['Drive across the iconic cantilever steel Howrah Bridge at sunset', 'Feast on slow-cooked mutton biryani layered with soft spiced potatoes', 'Admire the grand white marble corridors of the Victoria Memorial']
  },
  {
    id: 'darjeeling',
    stateId: 'west-bengal',
    name: 'Darjeeling',
    description: 'The world-famous tea capital, situated against the backdrop of the spectacular Mount Kanchenjunga peak.',
    overview: 'Darjeeling is a high-altitude Himalayan resort town famous for its premium black tea estates, the historic narrow-gauge Himalayan Railway, and stunning sunrise views from Tiger Hill where the snows of Mount Kanchenjunga turn orange and gold.',
    bestTimeToVisit: 'March to May & September to November',
    topAttractions: ['Tiger Hill', 'Ghoom Monastery', 'Batasia Loop', 'Happy Valley Tea Estate'],
    signatureDish: 'Momo & Thukpa (Himalayan noodle soup)',
    image: 'https://images.unsplash.com/photo-1557999852-c64a85fa0a98?q=80&w=800',
    highlights: ['Watch the sunrise paint the Kanchenjunga peak golden from Tiger Hill at 4:30 AM', 'Ride the historic steam-powered toy train through the Batasia Loop', 'Walk through the terraced tea bushes and taste fine hand-plucked tea at Happy Valley']
  },
  {
    id: 'kalimpong',
    stateId: 'west-bengal',
    name: 'Kalimpong',
    description: 'A tranquil Himalayan hill town known for its historic colonial cottages, Buddhist monasteries, and exotic nurseries.',
    overview: 'Perched on a ridge overlooking the wild Teesta River, Kalimpong is a quiet paradise for nature lovers. It is famous for its orchid nurseries, historic trade links with Tibet, beautifully maintained British-era cottages, and panoramic views of the Himalayan valleys.',
    bestTimeToVisit: 'March to June & September to December',
    topAttractions: ['Durpin Monastery', 'Deolo Hill', 'Pine View Nursery', 'Morgan House'],
    signatureDish: 'Tibetan Phaley & Thukpa',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: ['Paraglide off the grassy summit of Deolo Hill overlooking the Teesta River', 'Explore the historic, ivy-covered Morgan House, a haunted colonial estate', 'Examine the hundreds of rare species of cacti inside the Pine View Nursery']
  },
  {
    id: 'sundarbans-city',
    stateId: 'west-bengal',
    name: 'Sundarbans Delta',
    description: 'The world\'s largest mangrove forest reserve, home of the majestic Royal Bengal Tiger and mudflats.',
    overview: 'The Sundarbans is a vast, mist-shrouded delta at the confluence of the Ganges, Brahmaputra, and Meghna rivers. It represents the world\'s largest single block of tidal halophytic mangrove forest. Accessible only by boat, it is a wilderness sheltering Royal Bengal Tigers, saltwater crocodiles, and rare birds.',
    bestTimeToVisit: 'September to March',
    topAttractions: ['Sajnekhali Watch Tower', 'Sudhanyakhali Watch Tower', 'Dobanki Canopy Walk', 'Bhagabatpur Crocodile Project'],
    signatureDish: 'Sundarbans Honey & Bhetki Paturi (Fish in banana leaf)',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    highlights: ['Take a silent cruise through the narrow, mud-flat channels to spot tigers swimming across the river', 'Walk 20 feet above the ground along the 150-meter-long Dobanki Canopy Walkway', 'Visit the local Sajnekhali Nature Interpretation Centre to learn about the mangrove ecosystem']
  },
  {
    id: 'shantiniketan',
    stateId: 'west-bengal',
    name: 'Shantiniketan',
    description: 'The "Abode of Peace", founded by Rabindranath Tagore, celebrating artistic heritage and open-air education.',
    overview: 'Shantiniketan is a quiet, leafy university town founded by India\'s Nobel Laureate Rabindranath Tagore. Dedicated to artistic expression, literature, and open-air learning under mango groves, it is home to Visva-Bharati University and is famed for its vibrant Poush Mela festival and beautiful handmade leather crafts.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Rabindra Bhavan Museum', 'Uttarayan Palace Complex', 'Kala Bhavana (Fine Arts)', 'Kopai River'],
    signatureDish: 'Bengali Luchi-Alur Dom & Joynagarer Moa',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Stroll through the beautiful open-air university campus under towering mango trees', 'Examine original paintings, letters, and Tagore\'s Nobel Prize medal at Rabindra Bhavan', 'Shop for authentic hand-painted batik silk sarees and leather bags at the Saturday forest market']
  },

  // Andaman & Nicobar Curated Cities
  {
    id: 'port-blair',
    stateId: 'andaman-nicobar',
    name: 'Port Blair',
    description: 'The historic island capital, featuring deep-rooted national history, colonial relics, and marine museums.',
    overview: 'Port Blair is the entry gateway to the Andaman and Nicobar archipelago. It combines natural harbor beauty with national history, centered around the somber Cellular Jail, and is a hub for accessing remote islands, coral cruises, and sea-sports.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Cellular Jail National Memorial', 'Corbyns Cove Beach', 'Samudrika Marine Museum', 'Ross Island'],
    signatureDish: 'Andaman Fish Curry & Tandoori Crab',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800',
    highlights: ['Attend the moving Sound and Light show in the central courtyard of Cellular Jail', 'Take a quick boat ferry to Ross Island to walk among historic brick ruins overtaken by giant roots', 'Examine rare coral species and giant clam shells at Samudrika Museum']
  },
  {
    id: 'havelock-island',
    stateId: 'andaman-nicobar',
    name: 'Havelock Island (Swaraj Dweep)',
    description: 'A tropical diving paradise featuring crystal-clear waters and Asia\'s finest white-sand beaches.',
    overview: 'Havelock Island is the jewel of the Andamans. It is world-famous for Radhanagar Beach, an expansive curve of powdery white sand and emerald water, alongside world-class scuba diving reefs, mangrove-lined channels, and water adventure sports.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Radhanagar Beach', 'Elephant Beach', 'Kalapathar Beach', 'Scuba Diving Reefs'],
    signatureDish: 'Coconut Prawn Curry',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    highlights: ['Walk barefoot on the incredibly soft white sands of Radhanagar Beach at sunset', 'Scuba dive or snorkel among vibrant coral reefs and sea-turtles at Elephant Beach', 'Ride a sea-kayak through the quiet mangrove forests during high tide']
  },
  {
    id: 'neil-island',
    stateId: 'andaman-nicobar',
    name: 'Neil Island (Shaheed Dweep)',
    description: 'A sleepy, lush agricultural island famous for its natural stone bridges, organic farms, and quiet sunset points.',
    overview: 'Neil Island is a smaller, flatter neighbor of Havelock, known for its laid-back vibe, organic vegetable farms, and dramatic natural rock formations. It is perfect for exploring on a rented bicycle, walking along shallow reefs during low tide, and watching sunsets.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Natural Bridge', 'Bharatpur Beach', 'Laxmanpur Beach', 'Sitapur Beach'],
    signatureDish: 'Fresh Tropical Fruit Platters & Lobster',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: ['Walk across the unique Natural Rock Bridge (Howrah Bridge) during low tide', 'Cycle through the green organic vegetable farms and coconut orchards', 'Watch a spectacular sunset over the shallow turquoise waters of Laxmanpur Beach']
  },
  // Chandigarh UT Curated Cities
  {
    id: 'chandigarh-city',
    stateId: 'chandigarh-ut',
    name: 'Chandigarh Sector-17 & City Hub',
    description: 'The modernist shopping and pedestrian heart of Chandigarh, showcasing Le Corbusier\'s sleek urban design.',
    overview: 'Chandigarh is a modern masterpiece of urban planning. Sector 17 is the lively pedestrian commercial center of the city, lined with fountains, shopping arcades, and landscaped plazas, reflecting the minimalist concrete aesthetic and balanced greenery envisioned by Le Corbusier.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Sector 17 Plaza', 'Rose Garden', 'Sukhna Lake', 'Le Corbusier Centre'],
    signatureDish: 'Amritsari Kulcha & Lassi',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Stroll through the traffic-free pedestrian plazas of Sector 17', 'Examine the hundreds of species of roses inside the Zakir Hussain Rose Garden', 'Learn about the city\'s architectural birth inside the Le Corbusier Centre']
  },
  {
    id: 'sukhna-lake-district',
    stateId: 'chandigarh-ut',
    name: 'Sukhna Lake & Rock Garden Area',
    description: 'The peaceful recreational district featuring Sukhna Lake and Nek Chand\'s waste-sculpture wonderland.',
    overview: 'This scenic district is the recreational capital of Chandigarh. Nestled at the foothills of the Shivalik mountains, it features Sukhna Lake, a tranquil artificial reservoir perfect for boating, and the adjacent Nek Chand Rock Garden—a unique, world-famous park built entirely of recycled domestic and industrial waste.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Nek Chand Rock Garden', 'Sukhna Lake', 'Sukhna Wildlife Sanctuary', 'Garden of Silence'],
    signatureDish: 'Chana Bhatura',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    highlights: ['Boating on Sukhna Lake as the sun sets behind the Shivalik range', 'Explore the winding maze of rock-cut caves and waste-ceramic figures at the Rock Garden', 'Walk the quiet trails of the Sukhna Wildlife Sanctuary in the early morning']
  },
  // Dadra and Nagar Haveli and Daman and Diu Curated Cities
  {
    id: 'diu-town',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Diu',
    description: 'A breezy, historic island town of majestic stone forts, golden sand beaches, and colonial churches.',
    overview: 'Diu is a peaceful island nestled off the southern coast of Gujarat\'s Kathiawar peninsula. For over 400 years, it was governed as a Portuguese colony, leaving a lasting imprint on its monumental stonework, painted street houses, and relaxed coastal culture. Bordered by the azure Arabian Sea, Diu represents a scenic sanctuary of seafood shacks, whispering palm groves, and medieval defensive works.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Diu Fort', 'Naida Caves', 'Ghoghla Beach', 'St. Paul\'s Church'],
    signatureDish: 'Diu Crab Masala & Lobsters',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
    highlights: [
      'Stroll along the historic, wind-carved orange limestone galleries of Naida Caves',
      'Watch the sunset from the towering bastions of the sea-touching Diu Fort',
      'Relax on the clean, safe, and gold-hued shoreline of Ghoghla Beach'
    ]
  },
  {
    id: 'daman-town',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Daman',
    description: 'A vibrant seaside town of twin defensive forts, dynamic beaches, and lush coconut plantations.',
    overview: 'Separated by the Damanganga River into Nani Daman and Moti Daman, this coastal enclave blends industrial energy with old-world Portuguese charm. It is renowned for its colossal defensive structures, historical Jesuit churches like the Cathedral of Bom Jesus, and bustling beachfronts lined with local eateries and water sport activities.',
    bestTimeToVisit: 'November to March',
    topAttractions: ['Moti Daman Fort', 'Jampore Beach', 'Cathedral of Bom Jesus', 'Devka Amusement Park'],
    signatureDish: 'Damanese Fish Curry Rice & Prawns',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: [
      'Explore the massive ancient stone walls and ramparts of the 16th-century Moti Daman Fort',
      'Enjoy horse-drawn carriage rides and sunset seafood dining at Jampore Beach',
      'Admire the gold-gilded wood carvings inside the historic Cathedral of Bom Jesus'
    ]
  },
  {
    id: 'silvassa-town',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Silvassa',
    description: 'A serene woodland retreat rich in Warli tribal heritage, green forest reserves, and wildlife parks.',
    overview: 'Tucked away in the Western Ghats foothills, Silvassa is the capital of the Dadra and Nagar Haveli region. It is a green sanctuary defined by dense forests, winding rivers, and the vibrant culture of the indigenous Warli and Kokna tribes. It offers visitors a peaceful escape amidst deer sanctuaries, gardens, and beautiful tribal museums.',
    bestTimeToVisit: 'November to June',
    topAttractions: ['Vanganga Lake Garden', 'Tribal Cultural Museum', 'Lion Safari at Vasona', 'Dudhni Lake'],
    signatureDish: 'Ubadiyu (Slow-cooked winter vegetable pot)',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    highlights: [
      'Take a paddleboat ride under rustic wooden bridges at the Japanese-style Vanganga Garden',
      'Observe authentic Warli paintings and traditional tribal instruments at the Cultural Museum',
      'Engage in speedboating and water sports in the expansive reservoir of Dudhni Lake'
    ]
  },
  // Jammu & Kashmir Curated Cities
  {
    id: 'srinagar-city',
    stateId: 'jammu-kashmir',
    name: 'Srinagar',
    description: 'The romantic summer capital, famed for its floating wooden houseboats, shikara rides, and Mughal terrace gardens.',
    overview: 'Srinagar, situated in the breathtaking Kashmir Valley, is a city of pure poetic grace. Bisected by the meandering Jhelum River, it is globally celebrated for its majestic Dal and Nigeen lakes, where ornate carved-wood houseboats offer stays and traditional "shikaras" glide past floating markets. It is framed by terraced Mughal gardens built by emperors, and the towering, snow-covered Zabarwan mountain range.',
    bestTimeToVisit: 'April to October',
    topAttractions: ['Dal Lake & Houseboats', 'Shalimar Bagh & Nishat Bagh', 'Shankaracharya Temple', 'Tulip Garden'],
    signatureDish: 'Kashmiri Wazwan & Kahwa Tea',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800',
    highlights: [
      'Ride a hand-paddled wooden Shikara boat on the calm waters of Dal Lake during sunrise',
      'Wander through millions of colorful blooms at the Indira Gandhi Memorial Tulip Garden in April',
      'Stay overnight in an antique, hand-carved cedarwood houseboat anchored along the lake'
    ]
  },
  {
    id: 'jammu-city',
    stateId: 'jammu-kashmir',
    name: 'Jammu',
    description: 'The ancient winter capital, celebrated as the City of Temples and historic royal palaces.',
    overview: 'Jammu sits at the transition zone between the fertile Punjab plains and the rising Himalayas along the Tawi River. Known as the spiritual capital of the region, Jammu is a city of ancient forts, holy shrines, and beautiful palaces like the Amar Mahal museum, representing a rich Dogra dynasty heritage.',
    bestTimeToVisit: 'September to April',
    topAttractions: ['Raghunath Temple', 'Bahu Fort & Bagh-e-Bahu', 'Amar Mahal Palace Museum', 'Peer Kho Cave Temple'],
    signatureDish: 'Kachaloo Chaat & Kaladi Kulcha (Local dense cheese bread)',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800',
    highlights: [
      'Visit the golden-vaulted historic complex of Raghunath Temple in the old bazaar',
      'Stroll through the terraced gardens of Bagh-e-Bahu looking over the scenic Tawi River',
      'Examine rare Kangra miniature paintings inside the royal French-chateau-style Amar Mahal Palace'
    ]
  },
  {
    id: 'gulmarg-resort',
    stateId: 'jammu-kashmir',
    name: 'Gulmarg',
    description: 'A spectacular alpine meadow of vibrant wildflowers in summer and deep ski slopes in winter.',
    overview: 'Gulmarg, literally "Meadow of Flowers," is a pristine high-altitude valley in the Pir Panjal range. It is India\'s premier ski resort, boasting some of the highest ski runs in Asia and the iconic Gulmarg Gondola, which whisks visitors up to the snow-covered slopes of Mt. Apharwat at 13,000+ feet.',
    bestTimeToVisit: 'December to March (Skiing) & May to September (Meadow)',
    topAttractions: ['Gulmarg Gondola', 'Apharwat Peak', 'Strawberry Valley', 'Gulmarg Golf Course'],
    signatureDish: 'Rogan Josh & Dum Aloo',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    highlights: [
      'Ride the two-stage Gulmarg Gondola, one of the highest and longest cable cars in Asia',
      'Ski or snowboard down pristine, deep Himalayan powder slopes under professional guidance',
      'Play a round of high-altitude golf on one of the world\'s highest 18-hole courses'
    ]
  },
  {
    id: 'pahalgam',
    stateId: 'jammu-kashmir',
    name: 'Pahalgam',
    description: 'The picturesque Valley of Shepherds, famed for lush pine forests, pristine Lidder River, and high alpine meadows.',
    overview: 'Pahalgam is a gorgeous mountain resort town situated at 2,740 meters in the Anantnag district of Jammu and Kashmir. Lying along the banks of the rushing, glacier-fed Lidder River, Pahalgam serves as a starting point for the holy Amarnath Yatra pilgrimage and is famous for its stunning meadows like Baisaran (referred to as "Mini Switzerland") and the scenic Betaab and Aru valleys.',
    bestTimeToVisit: 'March to November',
    topAttractions: ['Betaab Valley', 'Aru Valley', 'Baisaran Meadow', 'Lidder River'],
    signatureDish: 'Kashmiri Dum Aloo & Gushtaba',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: [
      'Enjoy horse riding through tall pine forests up to the sprawling Baisaran Meadow',
      'Walk across the rolling green meadows and stone bridges of Betaab Valley, named after a Bollywood film',
      'Go white-water rafting on the chilly rapids of the Lidder River'
    ]
  },
  // Ladakh Curated Cities
  {
    id: 'leh-town',
    stateId: 'ladakh-ut',
    name: 'Leh',
    description: 'The trans-Himalayan Buddhist heartland, dominated by mud-brick palaces, stupas, and old bazaars.',
    overview: 'Leh is the historic capital of Ladakh, located at a high altitude of 11,500 feet in a cold mountain desert. Surrounded by naked, sun-parched mountain peaks, Leh is a fascinating maze of ancient Tibetan Buddhist monasteries, narrow streets, mud-brick houses, and the towering Leh Palace, which rises like a silent sentinel over the town.',
    bestTimeToVisit: 'May to September',
    topAttractions: ['Leh Palace', 'Shanti Stupa', 'Thiksey Monastery', 'Magnetic Hill'],
    signatureDish: 'Thukpa & Mutton Momos',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=800',
    highlights: [
      'Climb the steps to Shanti Stupa for panoramic sunset views over the entire Leh valley',
      'Explore the multi-story ruins of Leh Palace, modeled on Lhasa\'s famous Potala Palace',
      'Shop for fine pashmina shawls, prayer wheels, and silver jewelry in the Leh Main Bazaar'
    ]
  },
  {
    id: 'kargil-town',
    stateId: 'ladakh-ut',
    name: 'Kargil',
    description: 'A beautiful valley town situated along the Suru River, representing a rich blend of Balti and Ladakhi cultures.',
    overview: 'Kargil is the second-largest town in Ladakh, acting as a historical transit point between Kashmir, Baltistan, and Leh. It is surrounded by apricots orchards, rolling green barley fields, and beautiful mountains. It serves as the gateway to the stunning, glacier-fed Zanskar Valley.',
    bestTimeToVisit: 'May to October',
    topAttractions: ['Kargil War Memorial', 'Suru Valley', 'Mulbekh Chamba (Maitreya Statue)', 'Dras Valley'],
    signatureDish: 'Khambir with Butter Tea',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800',
    highlights: [
      'Pay homage to national heroes at the historic, mountain-framed Kargil War Memorial in Dras',
      'Marvel at the 9-meter-tall Mulbekh Chamba rock carving of the Future Buddha from the 1st century',
      'Drive along the picturesque Suru Valley to see majestic views of the Nun and Kun twin peaks'
    ]
  },
  {
    id: 'nubra-valley',
    stateId: 'ladakh-ut',
    name: 'Nubra Valley',
    description: 'A striking high-altitude desert of double-humped camels, shifting sand dunes, and deep mountain gorges.',
    overview: 'Nubra Valley is a majestic, wide valley created by the Shyok and Nubra rivers, reached by crossing the dizzying Khardung La pass (one of the world\'s highest motorable roads). It is famous for its unique landscape—a cold desert of high-altitude sand dunes nestled directly between jagged, snow-capped mountain peaks.',
    bestTimeToVisit: 'June to September',
    topAttractions: ['Diskit Monastery', 'Hunder Sand Dunes', 'Panamik Hot Springs', 'Turtuk Village'],
    signatureDish: 'Skyu (Wheat pasta stew)',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: [
      'Ride a double-humped Bactrian camel across the desert sand dunes at Hunder',
      'Stand before the colossal 32-meter tall Maitreya Buddha statue at Diskit Monastery',
      'Visit Turtuk, a beautiful, apricot-filled Baltic cultural village near the Line of Control'
    ]
  },
  {
    id: 'pangong-lake',
    stateId: 'ladakh-ut',
    name: 'Pangong Tso',
    description: 'A breathtaking endorheic lake at 13,860 feet, changing colors dynamically from deep blue to turquoise across the international border.',
    overview: 'Pangong Tso, situated in the Changtang plateau of high Ladakh, is a majestic 134-kilometer-long lake extending from India into Tibet. Perched at a dizzying altitude of 14,000 feet and framed by barren, copper-colored mountain peaks, the lake is celebrated for its saline, crystal-clear water which changes hues from deep royal blue to bright turquoise as the sun moves across the sky.',
    bestTimeToVisit: 'June to September',
    topAttractions: ['Pangong Lake Shoreline', 'Spangmik Village', 'Marmot Point (Lukung)', 'Chushul (nearby)'],
    signatureDish: 'Ladakhi Thukpa & Butter Tea',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    highlights: [
      'Camp overnight in a cozy lake-facing tent and watch the stars rise over the crystal-clear water',
      'Spot playful, furry golden Himalayan marmots emerging from their underground burrows near Lukung',
      'Take spectacular photographs as the lake changes colors in the pristine high-altitude daylight'
    ]
  },
  // Lakshadweep Curated Cities
  {
    id: 'kavaratti-island',
    stateId: 'lakshadweep-ut',
    name: 'Kavaratti',
    description: 'The peaceful administrative capital, offering stunning calm lagoons, mosques, and marine aquariums.',
    overview: 'Kavaratti is the central island and capital of Lakshadweep. It is a scenic paradise of fine white sands, swaying coconut palms, and a massive, calm turquoise lagoon that is ideal for kayaking and snorkeling. The island is also known for its numerous beautifully carved wooden mosques.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Ujra Mosque', 'Kavaratti Marine Aquarium', 'Lagoon Boating', 'Coconut Nursery'],
    signatureDish: 'Kilanji (Sweet crepe) & Tuna Curry',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    highlights: [
      'Admire the exquisite, intricate driftwood carvings inside the historic Ujra Mosque',
      'View diverse local marine species, corals, and sea turtles at the Marine Aquarium',
      'Kayaking and glass-bottom boat rides across the crystal-clear lagoon waters'
    ]
  },
  {
    id: 'bangaram-island-resort',
    stateId: 'lakshadweep-ut',
    name: 'Bangaram',
    description: 'An exclusive, uninhabited coral atoll of pristine blue waters, sandbars, and glowing bioluminescence.',
    overview: 'Bangaram is an exquisite, teardrop-shaped uninhabited island surrounded by an immense, crystal-clear lagoon. It is a strictly conserved eco-reserve, accessible only under special permits, offering visitors unmatched privacy, sparkling white sandbars, and world-class scuba diving among coral reefs.',
    bestTimeToVisit: 'November to April',
    topAttractions: ['Bangaram Reef', 'Thinnakara Island (Nearby)', 'Sandbar Walks', 'Deep-sea Scuba Sites'],
    signatureDish: 'Mas Min (Smoked spicy tuna)',
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800',
    highlights: [
      'Witness the magical glow of blue bioluminescent plankton on the shoreline at night',
      'Scuba dive in the deep channel reefs to see manta rays, sea turtles, and harmless reef sharks',
      'Walk across the shallow, turquoise waters to the neighboring island of Thinnakara'
    ]
  },
  {
    id: 'agatti-island-town',
    stateId: 'lakshadweep-ut',
    name: 'Agatti',
    description: 'The scenic gateway island, featuring a spectacular runway bordered on both sides by the azure sea.',
    overview: 'Agatti Island is the primary gateway to Lakshadweep, hosting the archipelago\'s only airfield. The island is a narrow strip of land surrounded by some of the most vibrant and shallow coral reefs in India, making it a dream destination for beach walking and snorkeling.',
    bestTimeToVisit: 'October to May',
    topAttractions: ['Agatti Lagoon', 'Golden Jubilee Museum', 'Eastern Beach Snorkeling', 'Glass-bottom Boat Rides'],
    signatureDish: 'Kadala Parippu & Fried Lagoon Fish',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
    highlights: [
      'Land on the iconic Agatti airport runway, surrounded on both sides by clear turquoise waters',
      'Snorkel straight from the white sand beaches into shallow coral gardens teeming with tropical fish',
      'Explore local life and traditional coir-weaving workshops in the main island village'
    ]
  },
  // Puducherry Curated Cities
  {
    id: 'puducherry-white-town',
    stateId: 'puducherry-ut',
    name: 'White Town',
    description: 'The charming French Quarter, boasting mustard-yellow colonial houses, quiet cafes, and cobblestone lanes.',
    overview: 'White Town is the beautifully preserved historic heart of Puducherry, maintaining its distinct 18th-century French colonial atmosphere. It is characterized by mustard-colored mansion walls draped in bright pink bougainvillea, classic arched doorways, cobblestone roads, and chic French-Tamil fusion bistros that run along the scenic seafront promenade.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Sri Aurobindo Ashram', 'Promenade Beach', 'Our Lady of Angels Church', 'French War Memorial'],
    signatureDish: 'Pondicherry Fish Assad & Croissants',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800',
    highlights: [
      'Stroll along the pedestrianized Promenade Beach boardwalk as the sea breeze rolls in',
      'Experience deep silence and meditation near the Samadhi of Sri Aurobindo inside the Ashram',
      'Rent a bicycle to explore the beautiful heritage lanes of the French and Tamil Quarters'
    ]
  },
  {
    id: 'auroville-township',
    stateId: 'puducherry-ut',
    name: 'Auroville',
    description: 'An international experimental township dedicated to human unity, spiritual growth, and green living.',
    overview: 'Auroville, or "The City of Dawn," was founded in 1968 by spiritual leader Mirra Alfassa ("The Mother"). It is a self-sustaining, global township where people from over 50 nations live in harmony. At its physical and spiritual center sits the Matrimandir, a colossal, gold-gilded metallic dome designed for silent concentration and meditation.',
    bestTimeToVisit: 'November to February',
    topAttractions: ['Matrimandir', 'Auroville Visitors Centre', 'Auroville Beach', 'Savitri Bhavan'],
    signatureDish: 'Organic Vegan Salads & Wood-fired Sourdough Pizzas',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
    highlights: [
      'Meditate inside the magnificent, crystal-centered Inner Chamber of the golden Matrimandir',
      'Browse local eco-friendly boutiques, cafes, and sustainable energy exhibits at the Visitors Centre',
      'Participate in hands-on organic farming or natural building workshops run by residents'
    ]
  },
  {
    id: 'karaikal-town',
    stateId: 'puducherry-ut',
    name: 'Karaikal',
    description: 'A quiet coastal enclave of rich temple heritage, peaceful rivers, and wide sandy beaches.',
    overview: 'Karaikal is an enclave of Puducherry situated further south along the Coromandel Coast of Tamil Nadu. It is a peaceful coastal town known for its French-influenced layout, major spiritual temples like the Saneeswarar Temple, and the scenic confluence of the Arasalar River with the Bay of Bengal.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Karaikal Beach', 'Saneeswarar Temple', 'Arasalar River Estuary', 'Our Lady of Angels Church'],
    signatureDish: 'Karaikal Crab Masala & Sweet Paniyaram',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    highlights: [
      'Enjoy boating along the tranquil mangrove-fringed waters of the Arasalar River estuary',
      'Visit the highly revered Dharbaranyeswarar Temple in Thirunallar, dedicated to Lord Shani',
      'Walk along the expansive, clean sands of Karaikal Beach to watch fishermen landing their nets'
    ]
  },
  {
    id: 'amritsar',
    stateId: 'punjab',
    name: 'Amritsar',
    description: 'The shimmering spiritual capital of Punjab, home to the sacred Golden Temple and rich culinary heritage.',
    overview: 'Amritsar is the spiritual and cultural heart of Sikhism. It is dominated by the spectacular Golden Temple (Harmandir Sahib), sheathed in 750 kg of pure gold and surrounded by the serene Amrit Sarovar lake. The city is a vibrant crucible of history, hospitality, and legendary street food.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['The Golden Temple', 'Jallianwala Bagh', 'Wagah Border', 'Partition Museum'],
    signatureDish: 'Amritsari Kulcha & Lassi',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
    highlights: ['Feast on a hot, ghee-drenched Amritsari Kulcha baked in a traditional clay tandoor', 'Attend the theatrical, high-energy Wagah Border ceremony at sunset', 'Sit in quiet meditation along the marble steps of the shimmering Golden Temple']
  },
  {
    id: 'chandigarh-punjab',
    stateId: 'punjab',
    name: 'Chandigarh',
    description: 'The modernist, green garden city designed by Le Corbusier, acting as the shared capital of Punjab and Haryana.',
    overview: 'Chandigarh is a modern masterpiece of post-independence urban planning. Envisioned by Swiss-French architect Le Corbusier, it is divided into a geometric grid of self-contained sectors. It is famed for its extensive public parks, lakeside walks, and Nek Chand\'s recycling-art Rock Garden.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Nek Chand Rock Garden', 'Sukhna Lake', 'Rose Garden', 'Capitol Complex'],
    signatureDish: 'Chana Bhatura & Butter Chicken',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
    highlights: ['Explore Nek Chand\'s unique Rock Garden, built entirely from recycled domestic and industrial waste', 'Enjoy a peaceful evening boat ride on the scenic Sukhna Lake', 'Marvel at Le Corbusier\'s grand concrete masterworks at the UNESCO Capitol Complex']
  },
  {
    id: 'ludhiana',
    stateId: 'punjab',
    name: 'Ludhiana',
    description: 'Punjab\'s industrial powerhouse, celebrated for textile wealth, historic fortresses, and rustic village heritage.',
    overview: 'Ludhiana is the largest city in Punjab, situated on the old banks of the Sutlej River. Known as India\'s "Manchester of the East", it is a thriving industrial hub famous for manufacturing quality hosiery and bicycles. It also houses the grand Lodhi Fort and represents the warm, robust Punjabi agricultural soul.',
    bestTimeToVisit: 'October to March',
    topAttractions: ['Lodhi Fort', 'Tiger Safari Zoo', 'Maharaja Ranjit Singh War Museum', 'Hardy\'s World'],
    signatureDish: 'Makki Di Roti & Sarson Ka Saag',
    image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=800',
    highlights: ['Explore the historic brick battlements and towers of the ancient Lodhi Fort', 'Learn about the region\'s heroic military history at the Maharaja Ranjit Singh War Museum', 'Savor a traditional rustic winter lunch of Makki di Roti and spiced Sarson ka Saag']
  }
];

// Fallback City generator to guarantee every of the 36 states/UTs has 2-4 cities in UI
export function getCitiesForState(stateId: string, stateName: string): City[] {
  // Check if we have curated ones
  const curated = CURATED_CITIES.filter(c => c.stateId === stateId);
  if (curated.length > 0) return curated;

  // Otherwise, return 3 beautifully generated cities for this state/UT
  const formattedName = stateName.replace('&', 'and');
  return [
    {
      id: `${stateId}-city1`,
      stateId: stateId,
      name: `Suryapura of ${formattedName}`,
      description: `A stunning cultural and historical gateway nestled within the heart of ${formattedName}.`,
      overview: `Suryapura stands as a prime regional showcase, celebrated for its unique architectural structures, traditional craft-making heritage, and warm local hospitality. Over generations, it has acted as a vital trading and cultural crossroads in ${formattedName}.`,
      bestTimeToVisit: 'October to March',
      topAttractions: ['Grand Palace Grounds', 'Suryapura Local Bazaar', 'Suryapura Heritage Lake'],
      signatureDish: 'Local Spiced Delicacy',
      image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=800',
      highlights: ['Take a guided heritage walk through the ancient quarter', 'Browse traditional handlooms in the local artisan markets', 'Sample authentic regional recipes prepared by hereditary cooks']
    },
    {
      id: `${stateId}-city2`,
      stateId: stateId,
      name: `Ratnagiri of ${formattedName}`,
      description: `A peaceful scenic resort surrounded by deep natural beauty and misty hills.`,
      overview: `Famous for its lush plantations, panoramic viewpoints, and crystal-clear mountain streams, Ratnagiri is the perfect sanctuary for nature lovers seeking calm away from urban speed in ${formattedName}.`,
      bestTimeToVisit: 'September to May',
      topAttractions: ['Ratnagiri Panoramic Viewpoint', 'Spice & Fruit Plantations', 'Cascading Forest Waterfalls'],
      signatureDish: 'Fresh Harvest Curry',
      image: 'https://images.unsplash.com/photo-1516690561799-46d8f74f9abf?q=80&w=800',
      highlights: ['Watch a golden misty sunrise from the panoramic peak', 'Tour organic fruit and cardamom gardens', 'Bathe in cool, mineral-rich mountain springs']
    }
  ];
}

// Major Standalone Attractions
export const ATTRACTIONS: Attraction[] = [
  {
    id: 'taj-mahal',
    stateId: 'uttar-pradesh',
    name: 'Taj Mahal',
    description: 'A colossal ivory-white marble mausoleum on the south bank of the Yamuna River.',
    history: 'Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. It was constructed over a 20-year period using 20,000 artisans and stones transported from across Asia by 1,000 elephants.',
    visitingHours: '6:00 AM to 7:00 PM (Closed on Fridays)',
    entryFee: '₹50 for Indians, ₹1100 for Foreigners',
    tips: [
      'Arrive by 5:30 AM to catch the gate opening and witness the marble change color under the first golden rays.',
      'Only water bottles and small bags are permitted inside. Avoid carrying electronics other than cameras.',
      'Visit the Mehtab Bagh gardens across the river Yamuna for incredible sunset photography with fewer crowds.'
    ],
    nearbyAttractions: ['Agra Fort', 'Itimad-ud-Daulah (Baby Taj)', 'Fatehpur Sikri'],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200'
  },
  {
    id: 'amber-fort',
    stateId: 'rajasthan',
    name: 'Amber Fort & Palace',
    description: 'A sprawling red sandstone and yellow marble fortress perched high on a rugged hill in Amer.',
    history: 'Built originally by Raja Man Singh I in 1592, Amber Fort blends opulent Hindu Rajput design with Mughal decorative courtyard layouts. It features thick defensive walls overlooking the tranquil Maota Lake.',
    visitingHours: '8:00 AM to 5:30 PM, Evening Show: 6:30 PM to 9:15 PM',
    entryFee: '₹100 for Indians, ₹550 for Foreigners',
    tips: [
      'Take a certified guide or purchase an audio guide to explain the sophisticated secret cooling ducts and mirror halls.',
      'Walk up the scenic stone ramparts instead of taking transport to experience the grand scale of the gates.',
      'Stay for the evening light and sound show which tells the history of the Kachwaha dynasty.'
    ],
    nearbyAttractions: ['Hawa Mahal', 'Jaigarh Fort', 'Nahargarh Fort', 'Panna Meena Ka Kund'],
    image: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200'
  },
  // Karnataka: Mysore Palace
  {
    id: 'mysore-palace',
    stateId: 'karnataka',
    name: 'Mysore Palace',
    description: 'An architectural masterpiece of Indo-Saracenic style, spectacularly illuminated by 100,000 lightbulbs.',
    history: 'Also known as Amba Vilas Palace, it is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore. Built between 1897 and 1912 after the old wooden palace burned down, it was designed by British architect Henry Irwin, showcasing an opulent blend of Hindu, Mughal, Rajput, and Gothic styles.',
    visitingHours: '10:00 AM to 5:30 PM (Illumination on Sundays and public holidays from 7:00 PM to 7:45 PM)',
    entryFee: '₹100 for adults, ₹50 for children, free for kids under 7',
    tips: [
      'Cameras are strictly prohibited inside the main palace building; you must deposit them at the security counters before entering.',
      'Remove your shoes before entering the royal residential chambers, following ancient temple traditions.',
      'Plan your visit on a Sunday evening to stand on the grand lawns and witness the breathtaking palace illumination.'
    ],
    nearbyAttractions: ['Chamundi Hill', 'Devaraja Market', 'Mysore Zoo'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  // Kerala: Alleppey Backwaters
  {
    id: 'alleppey-backwaters',
    stateId: 'kerala',
    name: 'Alleppey (Alappuzha) Backwaters',
    description: 'Cruising through quiet, palm-shaded canals on a traditional wooden "Kettuvallam" houseboat.',
    history: 'The backwaters of Alleppey form a network of brackish lagoons, lakes, and rivers lying parallel to the Arabian Sea coast. Traditional houseboats, known as Kettuvallams, were originally used to transport rice and spices across the lake but are now converted into luxury floating boutique hotel suites.',
    visitingHours: 'Day cruise: 11:00 AM to 5:00 PM, Overnight stays available',
    entryFee: 'Varies by houseboat (₹8,000 to ₹18,000 per night)',
    tips: [
      'Book your houseboat through a recognized operator with a license from the Kerala Tourism Department.',
      'Opt for a deluxe boat that offers traditional freshly caught Pearl Spot fish (Karimeen Pollichathu) cooked on board.',
      'During monsoon (August), make sure to watch the famous Nehru Trophy Snake Boat Race held on Punnamada Lake.'
    ],
    nearbyAttractions: ['Alappuzha Beach', 'Marari Beach', 'Pathiramanal Island'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200'
  },
  // Kerala: Munnar
  {
    id: 'munnar-hill-station',
    stateId: 'kerala',
    name: 'Munnar Hill Station',
    description: 'A sea of manicured, rolling emerald green tea gardens and mountain valleys under misty clouds.',
    history: 'Situated at an altitude of 1,600 meters, Munnar was the favored summer resort of the British administration in South India. It is located at the confluence of three mountain streams—Mudrapuzha, Nallathanni, and Kundala—and is famed for its lush tea estates established in the late 19th century.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free (Individual tea museums and gardens have small fees)',
    tips: [
      'Visit the Lockhart Tea Museum to learn the traditional processes of orthodox black tea manufacturing and enjoy a fresh brew tasting session.',
      'Take an early morning walk to the Kundala Lake area to witness the magical lake mist lifting as the sun rises over the hills.',
      'Keep an eye out for the rare purple flower "Neelakurinji", which blooms on the hills of Munnar once every 12 years.'
    ],
    nearbyAttractions: ['Eravikulam National Park', 'Anamudi Peak', 'Mattupetty Dam'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Kerala: Kochi Fort
  {
    id: 'kochi-fort',
    stateId: 'kerala',
    name: 'Kochi Fort & Chinese Fishing Nets',
    description: 'A historic port town blending Portuguese, Dutch, Jewish, and British maritime heritage.',
    history: 'Kochi rose to prominence as a spice trading hub in 1341 after a flood opened its harbor. Fort Kochi is a historic neighborhood that preserves old colonial bungalows, the oldest European church in India (St. Francis Church), a 400-year-old Jewish Synagogue, and the giant shore-mounted cantilevered Chinese fishing nets introduced by Chinese traders in the 14th century.',
    visitingHours: 'Open 24 hours (Synagogue is closed on Saturdays and Jewish holidays)',
    entryFee: 'Free (Small entry fees for historic monuments)',
    tips: [
      'Walk along the Vasco da Gama Square beach pathway at sunset to watch the fishermen operate the massive wooden cantilevered nets.',
      'Spend an evening watching a Kathakali or Kalaripayattu performance at the nearby Kerala Kathakali Centre.',
      'Explore the colorful, spice-scented lanes of Jew Town and shop for brass antiques, hand-woven cotton, and fresh cardamom.'
    ],
    nearbyAttractions: ['Mattancherry Palace', 'Jewish Synagogue', 'Marine Drive Kochi'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Madhya Pradesh: Gwalior Fort
  {
    id: 'gwalior-fort',
    stateId: 'madhya-pradesh',
    name: 'Gwalior Fort',
    description: 'An imposing hilltop fortress described by Mughal Emperor Babur as "the pearl among fortresses of India".',
    history: 'Built in the 8th century, Gwalior Fort is an invincible military stronghold that has seen the rise and fall of several dynasties. It contains the magnificent Man Singh Palace, decorated with stunning blue and yellow turquoise glazed tiles, the historic Saas-Bahu temple, and massive rock-cut Jain statues carved into the rock cliff face.',
    visitingHours: '6:00 AM to 5:30 PM',
    entryFee: '₹75 for Indians, ₹250 for Foreigners',
    tips: [
      'Walk through the Urvai Gate route to admire the towering rock-cut Jain tirthankara statues carved directly into the sandstone cliffs.',
      'Visit the archaeological museum inside the Gujari Mahal to see rare sculpture relics, including the famous "Gwalior Shalabhanjika" sculpture.',
      'Don\'t miss the evening light and sound show at the open amphitheater, which brings the tales of Rani Jhansi and Raja Man Singh to life.'
    ],
    nearbyAttractions: ['Jai Vilas Palace', 'Tomb of Tansen', 'Siddhachal Caves'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  // Maharashtra: Gateway of India
  {
    id: 'gateway-of-india',
    stateId: 'maharashtra',
    name: 'Gateway of India',
    description: 'The landmark 26-meter basalt arch overlooking Mumbai Harbour, constructed in 1924.',
    history: 'Erected to commemorate the landing of King George V and Queen Mary at Apollo Bunder on their visit to India in 1911, the monument was designed by Scottish architect George Wittet in the Indo-Saracenic style. It served as the symbolic entrance to India for British viceroys and is now Mumbai\'s most famous meeting point.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free',
    tips: [
      'Take a ferry from the Gateway of India jetty to the ancient UNESCO rock-cut Elephanta Caves located on Elephanta Island.',
      'Visit early in the morning (around 6:30 AM) to see the rising sun paint the sea golden and watch pigeons feed on the plaza with very few tourists.',
      'Sip a cup of tea or dine at the historic Taj Mahal Palace Hotel located directly opposite the monument.'
    ],
    nearbyAttractions: ['Taj Mahal Palace Hotel', 'Marine Drive', 'Elephanta Caves'],
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200'
  },
  // Manipur: Ima Keithel
  {
    id: 'ima-keithel-market',
    stateId: 'manipur',
    name: 'Ima Keithel (Mother\'s Market)',
    description: 'An exceptional, centuries-old market managed and run exclusively by thousands of married women.',
    history: 'Established in the 16th century under the Meitei kingdom, Ima Keithel (literally translating to "Mother\'s Market") is the largest all-women market in Asia and possibly the world. Over 5,000 married women, known as "Imas" (mothers), manage stalls across three massive multi-story buildings, selling hand-woven textiles, local groceries, clay pots, and indigenous herbs.',
    visitingHours: '7:00 AM to 7:00 PM',
    entryFee: 'Free',
    tips: [
      'Respect local traditions; only married women are permitted to hold license and run stalls in this historic market.',
      'Shop for authentic Phaneks (traditional wrap-around skirts) and hand-woven Enaphi shawls in beautiful tribal patterns.',
      'Interact with the friendly mothers; they are highly politically and socially active, often serving as the guardians of Manipuri society.'
    ],
    nearbyAttractions: ['Kangla Fort', 'Govindajee Temple', 'Imphal Peace Museum'],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200'
  },
  {
    id: 'meenakshi-temple',
    stateId: 'tamil-nadu',
    name: 'Meenakshi Temple, Madurai',
    description: 'A historic Dravidian temple complex located in the holy city of Madurai, Tamil Nadu.',
    history: 'The temple dates back over 2,000 years, with its current monumental structure largely rebuilt by the Nayak rulers in the 16th and 17th centuries. It is dedicated to Meenakshi, a form of Goddess Parvati, and her consort Sundareswarar (Shiva).',
    visitingHours: '5:00 AM to 12:30 PM, 4:00 PM to 10:00 PM daily',
    entryFee: 'Free (Special queue tickets available at ₹50/₹100)',
    tips: [
      'The dress code is strict: shoulders and knees must be fully covered. No photography is allowed inside the inner sanctums.',
      'Look for the Hall of Thousand Pillars, featuring granite pillars carved with rearing animals and mythic beasts.',
      'Attend the dramatic Night Ceremony at 9:00 PM, when Lord Shiva\'s image is carried in a grand palanquin to the Goddess\'s chambers.'
    ],
    nearbyAttractions: ['Thirumalai Nayakkar Palace', 'Gandhi Memorial Museum', 'Koodal Azhagar Temple'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200'
  },
  // Andhra Pradesh Attractions
  {
    id: 'tirumala-temple',
    stateId: 'andhra-pradesh',
    name: 'Tirumala Venkateswara Temple',
    description: 'A historic temple on Tirumala hill, celebrated for its Dravidian architecture and profound sanctity.',
    history: 'Dating back to at least 300 AD, this sacred temple on the Tirumala Hills is dedicated to Lord Venkateswara, an incarnation of Vishnu. It is one of the world\'s most visited and wealthiest religious shrines, showcasing glorious Dravidian temple architecture enhanced over centuries by Pallava, Chola, and Vijayanagara rulers.',
    visitingHours: '3:00 AM to 11:30 PM (Varies with special darshans)',
    entryFee: 'Free (Special entry tickets available online for ₹300)',
    tips: [
      'Book special entry tickets (Rs 300) online 2-3 months in advance to save hours of queue waiting time.',
      'Strict dress code is enforced: traditional Indian wear is mandatory (Dhotis/Kurta for men, Saree/Salwar for women).',
      'Do not miss trying the famous Tirupati Laddu, a unique, GI-tagged sweet prasad distributed inside.'
    ],
    nearbyAttractions: ['Kapila Theertham', 'Sri Kalahasti Temple', 'Chandragiri Fort'],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200'
  },
  {
    id: 'araku-valley',
    stateId: 'andhra-pradesh',
    name: 'Araku Valley & Borra Caves',
    description: 'A beautiful hill station famed for coffee plantations, indigenous tribes, and millions-of-years-old stalactite formations.',
    history: 'The lush valley is a serene hill station in the Eastern Ghats inhabited by several native tribes. The nearby Borra Caves, discovered in 1807 by British geologist William King, are millions of years old and contain remarkable stalactite and stalagmite formations created by humic acid in water dissolving the limestone.',
    visitingHours: '10:00 AM to 5:00 PM',
    entryFee: '₹80 for Adults, ₹60 for Children',
    tips: [
      'Take the scenic Vistadome train ride from Visakhapatnam to Araku for incredible views of tunnels, waterfalls, and valleys.',
      'Carry a light sweater as Borra Caves and Araku get quite chilly, and paths inside the cave can be slippery.',
      'Try the organic Araku coffee and the famous local Bamboo Chicken, cooked inside hollow bamboo shafts.'
    ],
    nearbyAttractions: ['Katiki Waterfalls', 'Padmapuram Gardens', 'Chaparai Water Cascade'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'visakhapatnam-beaches',
    stateId: 'andhra-pradesh',
    name: 'Visakhapatnam Beaches',
    description: 'The pristine coastal curve of Rishikonda and RK Beach framed by lush eastern ghats hills.',
    history: 'Visakhapatnam, also known as Vizag, is an ancient port city with a history dating back to the 5th century BC under Buddhist and Kalinga rule. Its pristine beaches have long served as vital natural harbors and cultural relaxation shores, now hosting heritage submarine and aircraft museums on their sands.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free',
    tips: [
      'Visit Rishikonda Beach in the afternoon for water sports like windsurfing, speed boating, and kayaking.',
      'Walk down RK Beach at sunset to explore the Kursura Submarine Museum, a real Soviet-built submarine decommissioned and placed on the sand.',
      'Take the ropeway up Kailasagiri Hill for a panoramic view of the entire Vizag coastline meeting the hills.'
    ],
    nearbyAttractions: ['INS Kursura Submarine Museum', 'Kailasagiri Hill Park', 'Yarada Beach'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  // Arunachal Pradesh Attractions
  {
    id: 'tawang-monastery',
    stateId: 'arunachal-pradesh',
    name: 'Tawang Monastery',
    description: 'The largest monastery in India, founded in the 17th century, preserving rare Buddhist scriptures.',
    history: 'Founded by Merak Lama Lodre Gyatso in 1680–1681 in accordance with the wishes of the 5th Dalai Lama, Tawang Monastery (known in Tibetan as Galden Namgey Lhatse) is the largest monastery in India and second largest in the world, positioned spectacularly at 10,000 feet.',
    visitingHours: '7:00 AM to 7:00 PM',
    entryFee: 'Free',
    tips: [
      'Attend the early morning chants (starts around 5:30 AM) to hear the resonant horns and prayers of young monks.',
      'Visit the museum inside which houses gold-lettered Buddhist scriptures, 400-year-old tangkhas, and ancient sacred vessels.',
      'Dress warmly in layers as temperatures can fall below freezing even in autumn and spring.'
    ],
    nearbyAttractions: ['Sela Pass', 'Nuranang Falls', 'Jaswant Garh War Memorial'],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200'
  },
  {
    id: 'ziro-valley',
    stateId: 'arunachal-pradesh',
    name: 'Ziro Valley',
    description: 'A picturesque plateau, home to the Apatani tribe, famed for pine hills and the Ziro Music Festival.',
    history: 'Ziro Valley is a beautiful high-altitude plateau home to the Apatani tribe, famous for their unique wet-land agriculture, face-tattooing, and nose-plugging practices. It is a proposed UNESCO World Heritage site due to its deeply sustainable, co-dependent relationship with nature.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free (Requires Inner Line Permit to enter Arunachal)',
    tips: [
      'Hire a local Apatani guide to visit traditional wooden villages like Hong, Hari, and Bamin, to learn about their ancestral customs.',
      'If visiting in September, book tickets well in advance for the famous Ziro Festival of Music, an outdoor indie-rock concert.',
      'Try the local smoked pork cooked with bamboo shoots and the traditional rice beer called Apong.'
    ],
    nearbyAttractions: ['Talley Valley Wildlife Sanctuary', 'Tarin Fish Farm', 'Kardo Shiva Temple'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Assam Attractions
  {
    id: 'kamakhya-temple',
    stateId: 'assam',
    name: 'Kamakhya Temple',
    description: 'An ancient, revered Shakti temple situated on Nilachal Hill in Guwahati.',
    history: 'Kamakhya Temple is one of the oldest of the 51 Shakti Peethas in India, dating back to the 8th century and rebuilt multiple times, notably by the Koch King Nara Narayan in 1565. It is the center of Tantric Shaktism and celebrating female creative power.',
    visitingHours: '8:00 AM to 1:00 PM, 2:30 PM to 5:30 PM daily',
    entryFee: 'Free (VIP Darshan passes available for ₹501 to bypass queues)',
    tips: [
      'Purchase a VIP Darshan ticket if you have limited time, as general queue waiting times can exceed 4-6 hours.',
      'Plan your visit during June to experience the famous Ambubachi Mela festival, though expect massive crowds.',
      'Ensure you wear clothing that covers shoulders and knees. Photography is restricted inside the main inner sanctum cave.'
    ],
    nearbyAttractions: ['Umananda Temple (Peacock Island)', 'Brahmaputra River Sunset Cruise', 'Assam State Zoo'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  {
    id: 'majuli-island',
    stateId: 'assam',
    name: 'Majuli Island',
    description: 'The world\'s largest river island, representing the hub of Neo-Vaishnavite culture and mask-making.',
    history: 'Majuli is a vast river island formed by the Brahmaputra River and its tributaries. Since the 16th century, it has been the cradle of Assamese Neo-Vaishnavite culture, initiated by the saint Srimanta Sankardev, who established Satras (monasteries) that preserve classical dance, music, drama, and hand-crafted mask-making.',
    visitingHours: 'Ferry services run from 8:30 AM to 4:00 PM',
    entryFee: 'Free (Ferry tickets cost ₹15-₹30)',
    tips: [
      'Rent a bicycle or moped on the island to explore the rural villages, pottery centers, and scenic mustard fields at your own pace.',
      'Visit Samaguri Satra to witness the hereditary artists hand-craft massive papier-mâché masks used in religious Ramlila dramas.',
      'Stay in a traditional bamboo cottage built on stilts (called Chang Ghar) by the indigenous Mishing tribe.'
    ],
    nearbyAttractions: ['Kamalabari Satra', 'Auniati Satra', 'Tengapania Picnic Spot'],
    image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=1200'
  },
  // Bihar Attractions
  {
    id: 'tomb-of-sher-shah-suri',
    stateId: 'bihar',
    name: 'Tomb of Sher Shah Suri, Sasaram',
    description: 'A magnificent Indo-Islamic red sandstone mausoleum sitting beautifully in the middle of an artificial lake.',
    history: 'Built between 1540 and 1545 AD, this monumental red sandstone tomb was designed by architect Aliwal Khan to serve as the mausoleum of Sher Shah Suri, the Emperor of Northern India who founded the Suri Dynasty and built the Grand Trunk Road. It is a masterpiece of Indo-Islamic architecture, often called the second Taj Mahal of India.',
    visitingHours: '8:00 AM to 6:00 PM',
    entryFee: '₹25 for Indians, ₹300 for Foreigners',
    tips: [
      'Visit during early morning or late afternoon for the best light when the red sandstone reflects perfectly in the surrounding water.',
      'Take a stroll around the outer octagonal stone walkway to appreciate the scale of its massive 22-meter dome.',
      'Hire a local guide to point out the subtle mix of Hindu temple architectural styles blended within the grand Islamic dome.'
    ],
    nearbyAttractions: ['Rohtasgarh Fort', 'Manjhar Kund Waterfall', 'Tutla Bhawani Temple'],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200'
  },
  // Chhattisgarh Attractions
  {
    id: 'chitrakote-falls',
    stateId: 'chhattisgarh',
    name: 'Chitrakote Falls',
    description: 'India\'s widest waterfall, which turns into a roaring, mud-red amphitheater of water during the monsoons.',
    history: 'Carved by the Indravati River in the Bastar district, Chitrakote is the widest waterfall in India, stretching up to 980 feet across during the monsoon season. Due to its massive horseshoe curve and dramatic scale, it is widely referred to as the Niagara Falls of India.',
    visitingHours: '8:00 AM to 6:00 PM',
    entryFee: 'Free',
    tips: [
      'Visit during July to October (monsoon) to see the waterfall in its full, roaring, muddy-red majesty.',
      'Take a local wooden boat ride at the pool below the falls (when safe) to feel the intense spray and see rainbows.',
      'Stay in the government-run log huts built right on the cliff edge for an unforgettable view of the falls lit by searchlights at night.'
    ],
    nearbyAttractions: ['Teerathgarh Waterfalls', 'Kanger Valley National Park', 'Danteshwari Temple'],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200'
  },
  {
    id: 'bhoramdeo-temple',
    stateId: 'chhattisgarh',
    name: 'Bhoramdeo Temple',
    description: 'An exquisitely carved 11th-century temple complex nestled in the Maikal hills, dedicated to Lord Shiva.',
    history: 'Built by King Ramachandra of the Phani Nagavanshi dynasty in the 11th century, Bhoramdeo is a stunning stone temple dedicated to Lord Shiva. Due to its intricate, sensual, and highly detailed stone carvings resembling those of Khajuraho and Konark, it is celebrated as the Khajuraho of Chhattisgarh.',
    visitingHours: '6:00 AM to 6:00 PM',
    entryFee: 'Free',
    tips: [
      'Examine the outer walls closely to admire the exquisite relief sculptures of Hindu deities, dancers, musicians, and mythical beasts.',
      'Visit the nearby open-air archaeological museum to see preserved sculptures excavated from the valley.',
      'Hire a local guide to explain the fascinating tribal origins of the temple, which was named after the Gond tribal deity Bhoramdeo.'
    ],
    nearbyAttractions: ['Madan Manjari Temple', 'Cherki Mahal', 'Saroda Reservoir'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Goa Standalone Attractions
  {
    id: 'basilica-of-bom-jesus',
    stateId: 'goa',
    name: 'Basilica of Bom Jesus',
    description: 'A world-famous UNESCO World Heritage Baroque church holding the sacred mortal relics of Saint Francis Xavier.',
    history: 'Constructed between 1594 and 1605, the Basilica of Bom Jesus represents the highest zenith of Baroque architecture in India. It is constructed of dark, unplastered laterite stone, offering a grand structural exterior. The interior features rich gilded wood carvings and holds the silver casket enclosing the miraculously preserved body of St. Francis Xavier, which is displayed to the public once every ten years.',
    visitingHours: '9:00 AM to 6:30 PM (Mondays to Saturdays), 10:30 AM to 6:30 PM (Sundays)',
    entryFee: 'Free',
    tips: [
      'Maintain absolute silence and dignity inside, as it remains an active house of worship.',
      'Photography is permitted, but flash is strictly restricted inside the main reliquary chapel.',
      'Visit the art gallery on the upper level, which houses some of the largest oil paintings on Christian themes in Asia.'
    ],
    nearbyAttractions: ['Se Cathedral', 'St. Augustine Tower', 'Fontainhas Latin Quarter'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'palolem-and-anjuna-beaches',
    stateId: 'goa',
    name: 'Palolem & Anjuna Beaches',
    description: 'Beautiful sandy bays popular for watersports, beach shacks, yoga retreats, and sunset parties.',
    history: 'These beaches represent the wonderful duality of Goa. Anjuna Beach in North Goa rose to global fame in the 1960s-70s as a legendary hippie haven, famous for its volcanic rock formations and bustling Wednesday Flea Market. In contrast, Palolem Beach in South Goa is a crescent-shaped bay flanked by coconut palms, celebrated for its gentle shallow waters and calm eco-resorts.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free',
    tips: [
      'Visit Palolem for serene kayaking, paddle boarding, and dolphin spotting in the early morning.',
      'Head to Anjuna on a Wednesday to experience the sprawling, colorful Wednesday Flea Market.',
      'Enjoy fresh local seafood curries at the many beach shacks while watching the sunset.'
    ],
    nearbyAttractions: ['Chapora Fort', 'Ozran Beach', 'Cotigao Wildlife Sanctuary'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'dhudhsagar-falls',
    stateId: 'goa',
    name: 'Dudhsagar Falls',
    description: 'A magnificent four-tiered waterfall on the Mandovi River, looking like a cascading sea of milk.',
    history: 'Dudhsagar Falls (literally translating to "Sea of Milk") is one of India\'s tallest waterfalls, plunging 310 meters (1017 feet) down the steep slopes of the Western Ghats inside the Bhagwan Mahavir Wildlife Sanctuary. It is globally famous for its dramatic setting, where the South Western Railway line passes on an arched stone bridge directly in front of the middle of the falls.',
    visitingHours: '9:00 AM to 5:00 PM',
    entryFee: '₹400 for Jeep safari through the sanctuary (forest entry + life jacket included)',
    tips: [
      'To reach the falls, you must take a government-authorized 4x4 forest jeep from the Collem railway junction, which crosses shallow forest streams.',
      'Wear high-quality non-slip shoes, as the walking path from the jeep drop-off to the plunge pool is rocky and can be slippery.',
      'Swimming in the deep plunge pool is permitted but only while wearing the mandatory life jacket provided at the entrance.'
    ],
    nearbyAttractions: ['Bhagwan Mahavir Wildlife Sanctuary', 'Tambdi Surla Temple', 'Sahakari Spice Farm'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Gujarat Standalone Attractions
  {
    id: 'the-great-rann-of-kutch',
    stateId: 'gujarat',
    name: 'The Great Rann of Kutch',
    description: 'The world\'s largest seasonal salt desert, which glows ethereally white under a full moon, home to the Rann Utsav.',
    history: 'The Great Rann of Kutch is a vast salt marsh situated in the Thar Desert. Covering over 7,500 square kilometers, it is submerged under shallow seawater during the monsoons and dries up into an endless, blindingly white salt crust during the winter. It has historically served as a boundary between India and Sindh, holding a rich heritage of Kutchi folklore.',
    visitingHours: '6:00 AM to 8:00 PM (Permits are checked at Bhirandiyara)',
    entryFee: '₹100 for Adults, ₹50 for Children (Plus vehicle charges; permits required)',
    tips: [
      'Apply for the mandatory inner-line permit online in advance, or at the Bhirandiyara checkpoint en route.',
      'Visit during a full moon night between November and February; the salt plains reflect the moonlight, glowing like a field of snow.',
      'Stay in the traditional circular mud huts (Bhungas) at the gateway village of Dhordo to experience Kutchi hospitality.'
    ],
    nearbyAttractions: ['Kalo Dungar (Black Hill)', 'Dhordo Tent City', 'Dholavira Harappan Site'],
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=1200'
  },
  {
    id: 'statue-of-unity',
    stateId: 'gujarat',
    name: 'Statue of Unity',
    description: 'The world\'s tallest statue (182 meters), dedicated to the iron man of India, Sardar Vallabhbhai Patel.',
    history: 'Constructed on the Sadhu Bet island facing the Narmada Dam, the Statue of Unity stands 182 meters (597 feet) high, representing India\'s architectural and engineering triumph. Dedicated to Sardar Vallabhbhai Patel, the first Deputy Prime Minister of India who united 562 princely states, it was completed in 2018 using steel, concrete, and bronze cladding.',
    visitingHours: '8:00 AM to 6:00 PM (Closed on Mondays)',
    entryFee: '₹150 for Entry, ₹380 for Viewing Gallery (Booking online in advance is highly recommended)',
    tips: [
      'Book the "Express Ticket" online to skip the long queues for the elevator to the viewing gallery at 153 meters.',
      'Attend the spectacular evening laser light and sound show which narrates the story of India\'s unification.',
      'Explore the adjoining attractions like the Valley of Flowers, Butterfly Garden, and the Cactus Garden using the hop-on-hop-off buses included in the ticket.'
    ],
    nearbyAttractions: ['Sardar Sarovar Dam', 'Valley of Flowers', 'Zarwani Waterfall'],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200'
  },
  // Haryana Standalone Attractions
  {
    id: 'kurukshetra-site',
    stateId: 'haryana',
    name: 'Kurukshetra',
    description: 'A sacred town of historic lakes, temples, and places where Lord Krishna delivered the Bhagavad Gita.',
    history: 'Mentioned in ancient Vedic texts, Kurukshetra is the historical and mythological setting of the Mahabharata war. It was here that Lord Krishna served as Arjuna\'s charioteer and spoke the 700 verses of the Bhagavad Gita, teaching the path of selfless duty (Dharma). Over centuries, it has been a grand pilgrimage site, with massive bathing tanks built around sacred water springs.',
    visitingHours: '6:00 AM to 8:50 PM',
    entryFee: 'Free',
    tips: [
      'Attend the evening prayer and light show at the massive Brahma Sarovar, which is beautifully illuminated with lamps.',
      'Visit Jyotisar, situated 12 km from the town center, to see the ancient banyan tree considered a direct offshoot of the original tree under which the Gita was delivered.',
      'Explore the Kurukshetra Panorama & Science Centre to see a spectacular 3D cylindrical canvas painting of the Mahabharata battle.'
    ],
    nearbyAttractions: ['Brahma Sarovar', 'Jyotisar banyan tree', 'Sthaneshwar Mahadev Temple'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'surajkund-site',
    stateId: 'haryana',
    name: 'Surajkund',
    description: 'An ancient circular reservoir famous for hosting the colorful annual International Crafts Mela.',
    history: 'Built in the 10th century by King Surajpal of the Tomar dynasty, Surajkund is a massive semi-circular stone amphitheater-style water reservoir against the backdrop of the Aravali hills. In 1987, the government established the Surajkund International Crafts Mela here, which has grown to become the world\'s largest crafts fair, showcasing artisans from across the globe.',
    visitingHours: 'Open 24 hours (Crafts Mela runs 10:30 AM to 8:30 PM daily in February)',
    entryFee: 'Free (Mela tickets cost ₹120 to ₹180 during the festival)',
    tips: [
      'Plan your visit during the first two weeks of February to experience the grand Surajkund International Crafts Mela.',
      'Wear comfortable walking shoes as the Mela grounds cover over 40 acres of uneven, hilly paths.',
      'Take public transport or use the designated shuttle buses from nearby Delhi Metro stations to avoid heavy traffic and parking queues.'
    ],
    nearbyAttractions: ['Asola Bhatti Wildlife Sanctuary', 'Anangpur Dam', 'Badkhal Lake'],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  // Himachal Pradesh Standalone Attractions
  {
    id: 'spiti-valley',
    stateId: 'himachal-pradesh',
    name: 'Spiti Valley',
    description: 'A cold-desert high-altitude valley dotted with ancient, fortress-like Tibetan monasteries.',
    history: 'Tucked away in the trans-Himalayan rain shadow, Spiti Valley (meaning "The Middle Land") is a cold desert valley bordering Tibet. It is home to some of the oldest active Tibetan Buddhist monasteries in the world, including the spectacular 1000-year-old Key Monastery perched on a conical hill. The valley has preserved its unique Tibetan cultural heritage due to its geographical isolation.',
    visitingHours: 'Open 24 hours (Monasteries open 7:00 AM to 6:00 PM)',
    entryFee: 'Free',
    tips: [
      'Take at least 2 days to acclimatize in Shimla or Manali before ascending to Kaza (11,980 ft) to prevent acute mountain sickness.',
      'Foreign nationals require an Inner Line Permit to enter Spiti through the Kinnaur route, which is easily obtained at Rekong Peo.',
      'Carry sufficient cash as mobile networks are extremely weak, and ATMs are scarce and often out of money in Kaza.'
    ],
    nearbyAttractions: ['Key Monastery', 'Chandratal Lake', 'Hikkim (World\'s Highest Post Office)'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  {
    id: 'dharamshala-mcleod-ganj',
    stateId: 'himachal-pradesh',
    name: 'Dharamshala & McLeod Ganj',
    description: 'Scenic hillside settlements under the Dhauladhar range, known for spiritual Buddhist learning.',
    history: 'Following the 1959 Tibetan uprising, the 14th Dalai Lama fled Tibet and was offered asylum in McLeod Ganj by Prime Minister Nehru. Since then, upper Dharamshala has served as the headquarters of the Central Tibetan Administration, turning McLeod Ganj into a bustling spiritual hub of Buddhist philosophy, meditation, and Tibetan resistance culture.',
    visitingHours: 'Monasteries open 8:00 AM to 6:00 PM',
    entryFee: 'Free',
    tips: [
      'Maintain absolute silence and spin the prayer wheels in a clockwise direction inside the Tsuglagkhang Complex.',
      'Check the official Dalai Lama website in advance; if His Holiness is in residence, he often hosts free public teachings.',
      'Walk the 2 km Kora circuit around the Dalai Lama temple complex to see beautiful prayer flags and local devotees meditating.'
    ],
    nearbyAttractions: ['Tsuglagkhang Complex', 'Bhagsunag Falls', 'Naddi View Point', 'St. John in the Wilderness Church'],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200'
  },
  {
    id: 'solang-valley-rohtang-pass',
    stateId: 'himachal-pradesh',
    name: 'Solang Valley & Rohtang Pass',
    description: 'Majestic mountain passes offering year-round snow activities, paragliding, skiing, and trekking.',
    history: 'Rohtang Pass (literally translating to "Pile of Corpses" due to its historically dangerous mountain weather) is a spectacular pass at 3,978 meters (13,050 ft) connecting the Kullu Valley with Spiti. Solang Valley, situated closer to Manali, is a beautiful alpine glade that serves as Himachal\'s premier destination for adventure sports and paragliding.',
    visitingHours: 'Rohtang Pass is open from June to October (Closed on Tuesdays for maintenance)',
    entryFee: 'Free (Rohtang permits cost ₹550 per vehicle, strictly capped daily)',
    tips: [
      'You must obtain a Rohtang Pass permit online 2-4 days in advance; only a limited number of petrol and diesel vehicles are allowed daily.',
      'Rent warm snowsuits and rubber boots from authorized roadside stalls in Palchan before heading up.',
      'Try tandem paragliding in Solang Valley with a certified pilot for a bird\'s-eye view of the snow-clad peaks.'
    ],
    nearbyAttractions: ['Atal Tunnel', 'Anjani Mahadev Temple', 'Rahala Waterfalls'],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  // Jharkhand Standalone Attractions
  {
    id: 'baidyanath-temple',
    stateId: 'jharkhand',
    name: 'Baidyanath Jyotirlinga Temple, Deoghar',
    description: 'A major Hindu pilgrimage destination housing one of the twelve sacred Jyotirlingas of Lord Shiva.',
    history: 'Baba Baidyanath Dham contains 22 shrines dedicated to various Hindu gods, with the central shrine holding the sacred Jyotirlinga. According to Hindu mythology, Ravana worshipped Lord Shiva here and chopped off his ten heads as an offering. Shiva, pleased, descended to act as a doctor (Vaidya), hence the name. The temple is famous for the Shravani Mela, where pilgrims walk 105 km from Sultanganj carrying holy water.',
    visitingHours: '4:00 AM to 3:30 PM, 6:00 PM to 9:00 PM daily',
    entryFee: 'Free (VIP pass available for fast-track entry at ₹250)',
    tips: [
      'Wear traditional clothes (Kurta-pyjama for men, Salwar or Saree for women). Saffron-colored clothes are highly preferred by devotees.',
      'Avoid visiting during the Shravani Mela (July-August) unless you explicitly want to experience the massive religious festival, as crowds exceed 100,000 daily.',
      'Observe the red holy threads connecting the top of the Shiva Temple with the Parvati Temple, signifying the sacred union of cosmic powers.'
    ],
    nearbyAttractions: ['Trikut Hills cable car', 'Tapovan Caves', 'Naulakha Mandir'],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200'
  },
  {
    id: 'hundru-dassam-falls',
    stateId: 'jharkhand',
    name: 'Hundru & Dassam Falls',
    description: 'Spectacular rivers plunging over steep rocky edges of the plateau amidst dense forests.',
    history: 'These represent the beautiful high-altitude waterfalls of the Ranchi plateau. Hundru Falls is created by the Subarnarekha River falling 320 feet over massive granite steps. Dassam Falls (literally translating to "Ten Streams") is created by the Kanchi River plunging 144 feet, creating a thundering curtain of water in a deep, forested valley.',
    visitingHours: '8:00 AM to 5:00 PM',
    entryFee: 'Free (Parking charges around ₹30 to ₹50)',
    tips: [
      'There are about 750 concrete stairs to descend to the base of Hundru Falls; maintain a steady pace and carry water.',
      'Do not attempt to swim in the plunge pools or cross safety barriers, as undercurrents around both falls are extremely strong and rocky.',
      'Pack a picnic lunch or try local fried snacks (Duska) sold by small forest vendors near the viewing decks.'
    ],
    nearbyAttractions: ['Jonha Falls', 'Sita Falls', 'Getalsud Dam'],
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=1200'
  },
  // Karnataka Standalone Attraction
  {
    id: 'jog-falls',
    stateId: 'karnataka',
    name: 'Jog Falls',
    description: 'The second-highest plunge waterfall in India, where the Sharavathi River drops spectacularly in four distinct cascades.',
    history: 'Jog Falls is a majestic natural monument created by the Sharavathi River falling 830 feet over rocky basalt cliffs. It is divided into four distinct tracks: Raja, Roarer, Rocket, and Dame Blanche, each offering a unique character of water force and sound.',
    visitingHours: '7:30 AM to 6:30 PM',
    entryFee: '₹15 per person (Parking extra)',
    tips: [
      'Visit during peak monsoon (July to September) when the water flow is at its absolute maximum, roaring with thick white spray.',
      'Climb the 1,400 steps down to the bottom of the gorge for a head-on, breathtaking view of the roaring falls.',
      'Opt for the evening laser light and musical fountain show hosted at the viewing deck.'
    ],
    nearbyAttractions: ['Linganamakki Dam', 'Ikkeri Aghoreshwara Temple', 'Gerusoppa Valley'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  // Kerala Standalone Attraction
  {
    id: 'athirappilly-waterfalls',
    stateId: 'kerala',
    name: 'Athirappilly Waterfalls',
    description: 'The largest waterfall in Kerala, often dubbed "The Niagara of India", roaring through dense forests of Sholayar.',
    history: 'Athirappilly is a pristine 80-foot waterfall formed by the Chalakudy River plunging in three rapid streams. It is surrounded by lush green tropical rainforests home to rare hornbills and endangered forest fauna.',
    visitingHours: '8:00 AM to 6:00 PM',
    entryFee: '₹50 for adults, ₹10 for kids',
    tips: [
      'Take the paved, slightly steep forest pathway down to the base of the waterfall to feel the massive wind and refreshing mist spray.',
      'Carry extra dry clothes in a waterproof bag, as the heavy spray will leave you drenched within minutes near the viewing area.',
      'Combine your visit with the nearby Vazhachal falls, located just 5 km upstream along the same river.'
    ],
    nearbyAttractions: ['Vazhachal Waterfalls', 'Sholayar Dam', 'Charpa Falls'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200'
  },
  // Madhya Pradesh Standalone Attraction
  {
    id: 'bhimbetka-rock-shelters',
    stateId: 'madhya-pradesh',
    name: 'Bhimbetka Prehistoric Rock Shelters',
    description: 'A UNESCO World Heritage site showcasing the earliest traces of human life on the Indian subcontinent, with 30,000-year-old paintings.',
    history: 'Discovered in 1957 by archaeologist Dr. Vishnu Wakankar, Bhimbetka contains over 750 rock shelters spanning from the Paleolithic to the Mesolithic eras. The natural sandstone rock shelters are decorated with vibrant mineral-pigment paintings depicting prehistoric dancing, hunting, horse-riding, and daily tribal life.',
    visitingHours: '7:00 AM to 6:00 PM',
    entryFee: '₹25 for Indians, ₹300 for Foreigners',
    tips: [
      'Look closely at Shelter No. 4, known as the "Zoo Rock", which contains drawings of 252 individual animals across 16 species.',
      'Wear comfortable walking shoes as the designated walking trail winds through rugged, shaded sandstone cliffs for about 1.5 km.',
      'Hire a certified guide at the entrance to help distinguish between paintings of different historic eras.'
    ],
    nearbyAttractions: ['Bhojpur Shiva Temple', 'Sanchi Stupa', 'Bhopal Lakes'],
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200'
  },
  // Maharashtra Standalone Attraction
  {
    id: 'lonar-crater-lake',
    stateId: 'maharashtra',
    name: 'Lonar Meteorite Crater Lake',
    description: 'A spectacular, high-contrast hyper-velocity meteorite impact crater lake, the only one in basalt rock on earth.',
    history: 'Created during the Pleistocene epoch by a massive meteorite impact, Lonar Crater is a unique saline-alkaline lake. It has a circumference of 6 km and is surrounded by dense forest belts containing historic 12th-century temples built in Hemadpanthi style.',
    visitingHours: 'Open 24 hours',
    entryFee: 'Free (Small forest guide charges if hired)',
    tips: [
      'Take the steep, unpaved trek down the crater walls early in the morning to explore the surrounding dense jungle and ruins of Kamalja Devi Temple.',
      'Observe the change in water alkalinity and pH levels, which supports unique microorganisms found nowhere else.',
      'Wear thick hiking boots as the trails inside the crater can be slippery, muddy, and populated by peacocks and monkeys.'
    ],
    nearbyAttractions: ['Daityasudan Temple', 'Gomukh Temple', 'Aurangabad Caves'],
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200'
  },
  // Manipur Standalone Attraction
  {
    id: 'kangla-fort-attraction',
    stateId: 'manipur',
    name: 'Kangla Fort',
    description: 'The ancient royal capital and spiritual heart of the Meitei rulers of Manipur, surrounded by a deep historic moat.',
    history: 'Kangla, which translates to "dry land" in ancient Meitei, was the traditional palace seat of the Ningthouja dynasty since 33 AD. It contains sacred coronation sites, historic temples, and the royal burials, and is guarded by the legendary giant white brick Kangla Sha dragons.',
    visitingHours: '9:00 AM to 5:00 PM (Closed on Wednesdays)',
    entryFee: '₹20 per person',
    tips: [
      'Rent a bicycle at the main gate to easily explore the massive 230-acre fortified palace grounds, which can be exhausting to walk.',
      'Visit the Kangla Museum near the northern gate to see royal portraits, ancient armor, and maps of the kingdom of Manipur.',
      'Pay respect at the ancient sacred ponds (Nungjeng Pukhri) which were believed to be the home of the royal deity Pakhangba.'
    ],
    nearbyAttractions: ['Ima Keithel Market', 'Govindajee Temple', 'Loktak Lake'],
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=1200'
  },
  // Meghalaya Attractions
  {
    id: 'shillong-peak-wards-lake',
    stateId: 'meghalaya',
    name: "Shillong Peak & Ward's Lake",
    description: 'The charming "Scotland of the East" scenic lookout points and calm, pine-bordered water gardens.',
    history: 'Shillong Peak, rising to 1,966 meters, is the highest point in Meghalaya and is sacred to the Khasi deity U Shyllong, from whom the city gets its name. Ward\'s Lake, constructed in 1894 by British Commissioner William Ward, is an artificial horseshoe lake featuring an elegant wooden bridge, sprawling flower beds, and ancient pine trees.',
    visitingHours: 'Shillong Peak: 9:00 AM to 3:30 PM, Ward\'s Lake: 8:30 AM to 5:30 PM',
    entryFee: '₹10 (Shillong Peak), ₹20 (Ward\'s Lake)',
    tips: [
      'Carry a valid photo ID to access Shillong Peak, as it is located within an active Indian Air Force security zone.',
      'Rent a paddleboat at Ward\'s Lake for a tranquil cruise around the central islands and feed the large schools of colorful carp.',
      'Enjoy hot momos and local tea at the wooden cafe situated on the edge of Ward\'s Lake.'
    ],
    nearbyAttractions: ['Elephant Falls', 'Laitlum Canyons', 'Don Bosco Museum'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'dawki-umngot-river',
    stateId: 'meghalaya',
    name: 'Dawki (Umngot River)',
    description: 'A river of glass-like clarity where boats appear to float in mid-air above polished river stones.',
    history: 'Flowing through the Jaintia Hills along the India-Bangladesh border, the Umngot River is famed for its extreme transparency. The iconic Dawki Suspension Bridge, suspended over the river, was constructed by the British in 1932 to connect the Khasi and Jaintia hills.',
    visitingHours: '6:00 AM to 6:00 PM',
    entryFee: 'Free (Boat rides cost ₹500 - ₹800)',
    tips: [
      'The best time for glass-like water clarity is from November to February; avoid the monsoon months when heavy rain turns the river muddy.',
      'Hire a local hand-rowed wooden canoe at the Shnongpdeng camp site for a serene ride and standard photo opportunities.',
      'Pitch a tent along the river banks in Shnongpdeng for overnight camping, bonfires, and stargazing.'
    ],
    nearbyAttractions: ['Shnongpdeng Village', 'Krang Suri Waterfalls', 'Mawlynnong Cleanest Village'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  // Mizoram Attractions
  {
    id: 'vantawng-falls',
    stateId: 'mizoram',
    name: 'Vantawng Falls',
    description: 'A majestic double-tiered waterfall plunging nearly 750 feet amidst dense bamboo forests.',
    history: 'Vantawng Falls is the highest and most spectacular waterfall in Mizoram, formed by the Lau River. It is named after Vantawnga, a legendary swimmer whose aquatic skills were compared to a fish before he met a tragic accident near the base.',
    visitingHours: 'Open 24 hours (Best visited in daylight)',
    entryFee: '₹10 per person',
    tips: [
      'The waterfall is surrounded by dense, impenetrable bamboo forests and rocky terrain, so it is viewed from a safe, well-designed observation deck.',
      'Visit in the early afternoon when the sun directly illuminates the white columns of cascading water, making it perfect for photography.',
      'Check out the nearby Thenzawl town, famous for its handloom weaving workshops run by Mizo women.'
    ],
    nearbyAttractions: ['Thenzawl Deer Park', 'Tuirihiau Falls', 'Chhalfilh Tlang'],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200'
  },
  {
    id: 'solomon-temple-aizawl',
    stateId: 'mizoram',
    name: "Solomon's Temple, Aizawl",
    description: 'A majestic, white-marble Christian church constructed by local community efforts.',
    history: 'Constructed by the local non-denominational church "Kohhran Thianghlim" (The Holy Church), this monumental temple took over two decades to complete. Made entirely of white marble imported from Rajasthan, it features detailed multi-tiered spires and is designed as a symbol of spiritual devotion.',
    visitingHours: '9:00 AM to 5:00 PM',
    entryFee: 'Free (Donations welcome)',
    tips: [
      'Dress modestly and maintain strict silence inside the main worship hall, which accommodates up to 2,000 devotees.',
      'Walk through the manicured outer gardens, which offer panoramic views of the cascading green hills of Aizawl.',
      'Visit during Sunday morning service to witness the beautiful choral singing, which is a major part of Mizo cultural expression.'
    ],
    nearbyAttractions: ['Aizawl State Museum', 'Durtlang Hills', 'KV Paradise'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Nagaland Attractions
  {
    id: 'dzukou-valley-attraction',
    stateId: 'nagaland',
    name: 'Dzukou Valley',
    description: 'A stunning, high-altitude alpine valley famed for seasonal lilies, mist, and hiking trails.',
    history: 'Situated at an altitude of 2,452 meters on the border of Nagaland and Manipur, the Dzukou Valley is a pristine ecosystem. It is famous for its rolling green hills covered with dwarf bamboo and is home to the rare Dzukou Lily, found nowhere else in the world.',
    visitingHours: 'Open 24 hours (Day trekking recommended)',
    entryFee: '₹50 for Indians, ₹100 for Foreigners',
    tips: [
      'Prepare for a moderately challenging 4-5 hour uphill trek from Viswema or Jakhama villages to reach the valley ridge.',
      'Rent mats, blankets, and cooking utensils at the state-run Dzukou Rest House located at the top if you plan to camp overnight.',
      'Carry all your plastic and garbage back with you; the valley is a strictly enforced eco-preservation zone.'
    ],
    nearbyAttractions: ['Japfu Peak', 'Kisama Heritage Village', 'Kohima Cathedral'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  {
    id: 'kohima-war-cemetery',
    stateId: 'nagaland',
    name: 'Kohima War Cemetery',
    description: 'A serene memorial dedicated to the brave Allied forces who stopped the invading Japanese forces in WWII.',
    history: 'Located on the slopes of Garrison Hill, this beautifully landscaped cemetery commemorates the British and Indian soldiers of the 2nd Division who lost their lives in the Battle of Kohima in 1944. It is famous for the poignant epitaph: "When you go home, tell them of us and say, for your tomorrow, we gave our today."',
    visitingHours: '9:00 AM to 4:00 PM',
    entryFee: 'Free',
    tips: [
      'Maintain extreme silence and respect as you walk past the 1,420 beautifully decorated graves of Allied soldiers.',
      'Look for the tennis court boundary markers inside the cemetery, marking the famous "Battle of the Tennis Court" where hand-to-hand combat took place.',
      'Visit the nearby Kohima Cathedral, the largest cathedral in Northeast India, built with a unique local architectural style.'
    ],
    nearbyAttractions: ['Garrison Hill', 'Kohima State Museum', 'Bara Bastion'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Odisha Attractions
  {
    id: 'jagannath-temple-puri',
    stateId: 'odisha',
    name: 'Jagannath Temple, Puri',
    description: 'A highly sacred, ancient coastal temple complex famous for its annual Rath Yatra (Chariot Festival).',
    history: 'Constructed in the 12th century by King Anantavarman Chodaganga Deva of the Eastern Ganga dynasty, the temple is dedicated to Lord Jagannath (a form of Krishna), his brother Balabhadra, and sister Subhadra. It is a legendary architectural wonder where the temple shadow never falls on the ground at any time of day.',
    visitingHours: '5:00 AM to 11:00 PM (Non-Hindus can view the temple from the nearby Raghunandan Library roof)',
    entryFee: 'Free (Special pujas have separate tickets)',
    tips: [
      'Leather goods, mobile phones, and cameras are strictly banned inside the temple; deposit them at the secure lockers outside.',
      'Savor the "Mahaprasad", a massive feast of 56 vegetarian dishes cooked in earthen pots stacked on top of each other using only steam.',
      'Walk down to the Golden Beach of Puri (a certified Blue Flag clean beach) located just 2 km from the temple.'
    ],
    nearbyAttractions: ['Puri Beach', 'Raghurajpur Heritage Crafts Village', 'Sakhigopal Temple'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  // Punjab Attractions
  {
    id: 'wagah-border-ceremony',
    stateId: 'punjab',
    name: 'Wagah Border Ceremony',
    description: 'The theatrical, highly energized border-lowering ceremony between India and Pakistan soldiers.',
    history: 'Since 1959, the border security forces of India (BSF) and Pakistan (Rangers) have conducted a coordinated, highly theatrical military drill at the Wagah-Attari border crossing every evening before sunset, characterized by high leg-kicks, stomps, and standard national pride.',
    visitingHours: '4:15 PM to 5:30 PM daily (Arrive by 3:00 PM to secure a seat in the grandstands)',
    entryFee: 'Free',
    tips: [
      'Carry absolutely no bags or backpacks as they are not permitted inside the high-security border stadium; only wallets and cameras are allowed.',
      'Sit on the eastern side of the stadium for a direct view of the majestic iron border gates and the matching Pakistani crowd on the opposite side.',
      'Keep hydrated during the hot summer months as the concrete stadium holds heat, though local BSF units sell cold bottled water.'
    ],
    nearbyAttractions: ['Amritsar City', 'Pul Kanjri Historic Site', 'Harike Wetlands'],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  {
    id: 'jallianwala-bagh',
    stateId: 'punjab',
    name: 'Jallianwala Bagh',
    description: 'A historic memorial garden preservation site commemorating the tragic national freedom struggle of 1919.',
    history: 'On April 13, 1919, British troops under General Reginald Dyer opened fire on a peaceful gathering of thousands of unarmed Punjabi citizens celebrating Baisakhi, leading to a tragic loss of life. This historic tragedy served as a critical turning point in India\'s struggle for independence.',
    visitingHours: '6:30 AM to 7:30 PM',
    entryFee: 'Free',
    tips: [
      'Take a slow walk down the narrow entrance alleyway, which was blocked by British soldiers to prevent the crowd from escaping.',
      'Observe the preserved red brick walls, which still bear the white circle markers surrounding authentic bullet holes from the firing.',
      'Spend a silent moment at the "Martyrs\' Well" into which hundreds of people jumped to escape the direct gunshots.'
    ],
    nearbyAttractions: ['The Golden Temple', 'Partition Museum', 'Gobindgarh Fort'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Rajasthan Attractions (additional)
  {
    id: 'lake-palace-udaipur',
    stateId: 'rajasthan',
    name: 'Lake Palace, Udaipur',
    description: 'An ethereal white-marble palace that appears to float on the calm waters of Lake Pichola.',
    history: 'Built as Jag Niwas between 1743 and 1746 under the direction of Maharana Jagat Singh II as a summer palace, this legendary pleasure palace faces east to allow worship of the sun god at dawn. Constructed entirely of white marble, it features gorgeous courtyards filled with columns, fountains, and gardens.',
    visitingHours: 'Open only to resident guests for stays or dining; boat cruises pass close by from 9:00 AM to 6:00 PM daily.',
    entryFee: 'Boat ride is ₹400 for adults, hotel stay requires reservation',
    tips: [
      'Take a sunset boat cruise on Lake Pichola to see the white marble walls glowing in orange and gold hues.',
      'Combine your boat ride with a stopover at Jag Mandir, another floating island palace with giant stone elephants.',
      'Photograph the palace with the majestic City Palace of Udaipur rising in the backdrop for the classic postcard frame.'
    ],
    nearbyAttractions: ['City Palace Udaipur', 'Jag Mandir', 'Bagore Ki Haveli', 'Sajjangarh Monsoon Palace'],
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999874?q=80&w=1200'
  },
  {
    id: 'thar-desert-jaisalmer-fort',
    stateId: 'rajasthan',
    name: 'Thar Desert & Jaisalmer Fort',
    description: 'A fully inhabited medieval sandstone fort rising like a golden crown from the sands of the Thar Desert.',
    history: 'Founded in 1156 AD by the Rajput ruler Rawal Jaisal, Jaisalmer Fort is one of the very few "living forts" in the world, with a quarter of the city\'s population still residing inside its ancient stone walls. Made of yellow sandstone, it blends into the sands of the Thar Desert, earning it the name "Sonar Qila" (Golden Fort).',
    visitingHours: 'Fort: 9:00 AM to 6:00 PM daily, Desert: Open 24 hours',
    entryFee: 'Fort entry is Free (individual temple/museum fees apply); Camel safaris cost ₹500 - ₹2,500',
    tips: [
      'Take a late-afternoon camel safari into the Sam Sand Dunes to watch a majestic desert sunset, followed by traditional Rajasthani folk music under the stars.',
      'Wander through the narrow, winding alleys of the fort to admire the exquisite intricately carved sandstone Haveli facades (like Patwon ki Haveli).',
      'Support local families inside the fort by dining at the family-run rooftop cafes which offer panoramic views of the golden city.'
    ],
    nearbyAttractions: ['Patwon Ki Haveli', 'Sam Sand Dunes', 'Gadisar Lake', 'Kuldhara Abandoned Village'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Sikkim Attractions
  {
    id: 'gurudongmar-lake-sikkim',
    stateId: 'sikkim',
    name: 'Gurudongmar Lake',
    description: 'One of the highest and most sacred alpine lakes in the world, boasting crystal-clear turquoise waters.',
    history: 'Perched at an altitude of 5,430 meters (17,800 feet), Gurudongmar Lake is sacred to Buddhists, Sikhs, and Hindus alike. It is believed that Guru Padmasambhava (Guru Rinpoche) touched a portion of the lake during the 8th century, ensuring that it remains unfrozen even during the harshest winters to provide drinking water to locals.',
    visitingHours: '7:00 AM to 1:00 PM (Highly recommended to visit in early morning; tourists must leave by midday due to high winds and dropping oxygen)',
    entryFee: 'Free (Requires special Inner Line Permit due to proximity to the China border)',
    tips: [
      'Acclimatize for at least one night in Lachen village (8,800 ft) before attempting the journey up to the lake.',
      'Walk slowly and carry portable oxygen cylinders; the thin alpine air makes physical exertion extremely tiring.',
      'Do not run or bend down rapidly; drink plenty of water and avoid eating heavy meals prior to ascending.'
    ],
    nearbyAttractions: ['Lachen Village', 'Chopta Valley', 'Thangu Valley'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200'
  },
  {
    id: 'rumtek-monastery-sikkim',
    stateId: 'sikkim',
    name: 'Rumtek Monastery',
    description: 'A magnificent Tibetan Buddhist monastery, serving as the primary seat of the Gyalwang Karmapa.',
    history: 'Built in the 1960s by the 16th Gyalwang Karmapa after he fled Tibet, Rumtek is the largest monastery in Sikkim. It is a masterpiece of traditional Tibetan architecture, containing a beautiful golden stupa embedded with turquoise and coral, housing sacred relics.',
    visitingHours: '6:00 AM to 6:00 PM daily',
    entryFee: '₹15 per person',
    tips: [
      'Carry a valid photo ID as there is strict security at the monastery entrance due to its high religious significance.',
      'Walk up to the Nalanda Buddhist Institute located right behind the main temple complex to interact with young monks studying philosophy.',
      'Spin the long rows of brass prayer wheels in a clockwise direction as you walk around the outer courtyards.'
    ],
    nearbyAttractions: ['Shanti Viewpoint', 'Jawaharlal Nehru Botanical Garden', 'Saramsa Garden'],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200'
  },
  {
    id: 'nathu-la-pass-sikkim',
    stateId: 'sikkim',
    name: 'Nathu La Pass',
    description: 'A historic, high-altitude mountain pass on the ancient Silk Route bordering India and Tibet.',
    history: 'Situated at 4,310 meters (14,140 feet), Nathu La (meaning "listening ears pass") was a crucial trade branch of the ancient Silk Route between India and Lhasa, Tibet. It was sealed after the 1962 Sino-Indian War and reopened in 2006 as an official border personnel meeting point.',
    visitingHours: '8:00 AM to 1:30 PM (Closed on Mondays and Tuesdays; open only to Indian nationals)',
    entryFee: 'Permit fee is ₹200 (Requires government permit arranged 1 day in advance)',
    tips: [
      'Dress in heavy woolens, windproof jackets, and gloves; temperatures at the pass can hover below freezing even in summer.',
      'Stand right at the barbed-wire international border fence to see Indian and Chinese soldiers stationed just a few feet apart.',
      'Do not photograph any military installations, trenches, or radar structures; it is strictly illegal due to defense protocols.'
    ],
    nearbyAttractions: ['Baba Harbhajan Singh Mandir', 'Tsomgo Lake (Changu Lake)', 'Kupup Elephant Lake'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  // Tamil Nadu Attractions (additional)
  {
    id: 'brihadeeswarar-temple-thanjavur',
    stateId: 'tamil-nadu',
    name: 'Brihadeeswarar Temple, Thanjavur',
    description: 'A magnificent 1000-year-old architectural masterpiece constructed entirely of granite by the Chola Empire.',
    history: 'Commissioned by Rajaraja Chola I and completed in 1010 AD, the temple (locally called Peruvudaiyar Koyil or Big Temple) is a UNESCO World Heritage site. It features a colossal 216-foot high temple tower (vimana) topped by a single 80-tonne granite dome, representing one of the finest Dravidian engineering achievements.',
    visitingHours: '6:00 AM to 12:30 PM, 4:00 PM to 8:30 PM daily',
    entryFee: 'Free',
    tips: [
      'Walk barefoot across the polished stone courtyards in the early morning or late afternoon when the granite is cool enough to touch.',
      'Marvel at the giant monolithic sculpture of Nandi (the sacred bull) at the entrance, carved out of a single stone block.',
      'Take a close look at the base of the main tower to admire the ancient Tamil stone inscriptions detailing the Chola administration and temple donations.'
    ],
    nearbyAttractions: ['Thanjavur Royal Palace', 'Saraswathi Mahal Library', 'Schwartz Church'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  {
    id: 'shore-temple-mamallapuram',
    stateId: 'tamil-nadu',
    name: 'Shore Temples, Mamallapuram',
    description: 'Stunning 8th-century rock-cut relief carvings and granite temples overlooking the crashing waves of the bay.',
    history: 'Constructed under the Pallava Dynasty King Narasimhavarman II in the early 8th century, the Shore Temple is one of the oldest structural stone temples in Southern India. Built on the edge of the Bay of Bengal, it has withstood centuries of sea-winds and salt spray, surviving the devastating 2004 Indian Ocean tsunami.',
    visitingHours: '6:00 AM to 6:00 PM daily',
    entryFee: '₹40 for Indians, ₹600 for Foreigners (Covers all monuments in Mamallapuram)',
    tips: [
      'Visit at dawn to photograph the rising sun illuminating the twin granite towers, creating a golden silhouette against the blue sea.',
      'Explore the adjacent monument sites, including the massive bas-relief "Descent of the Ganges" and the balanced granite boulder "Krishna\'s Butterball".',
      'Wear a wide-brimmed hat and sunscreen; the coastal sun can be intensely hot with minimal shade around the sandy monument complex.'
    ],
    nearbyAttractions: ['Five Rathas', 'Krishna\'s Butterball', 'Arjuna\'s Penance', 'Mamallapuram Beach'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Telangana Attractions
  {
    id: 'the-charminar-hyderabad',
    stateId: 'telangana',
    name: 'The Charminar',
    description: 'The iconic 16th-century square mosque featuring four majestic, towering minarets.',
    history: 'Built in 1591 AD by Sultan Muhammad Quli Qutb Shah to celebrate the end of a devastating plague, the Charminar (meaning four minarets) is the centerpiece around which the city of Hyderabad was planned. It is a brilliant example of Indo-Islamic architecture, with an elegant mosque situated on the top floor.',
    visitingHours: '9:30 AM to 5:30 PM daily',
    entryFee: '₹40 for Indians, ₹300 for Foreigners',
    tips: [
      'Climb the narrow, winding spiral staircases to the upper balcony for a panoramic view of the bustling Laad Bazaar below.',
      'Shop for traditional glass and lacquer-stone bangles in the surrounding alleys of the famous 400-year-old Laad Bazaar.',
      'Enjoy a warm cup of Irani Chai paired with crispy Osmania biscuits at the historic Nimrah cafe located right beside the Charminar.'
    ],
    nearbyAttractions: ['Mecca Masjid', 'Chowmahalla Palace', 'Laad Bazaar', 'Salargunj Museum'],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200'
  },
  {
    id: 'golconda-fort-hyderabad',
    stateId: 'telangana',
    name: 'Golconda Fort',
    description: 'An immense medieval fortress famed for its acoustic design, military architecture, and diamond mines.',
    history: 'First built of mud by the Kakatiyas, the fort was later fortified in stone by the Qutb Shahi kings in the 16th century. It was the capital of the sultanate and served as a global center for diamond trading, producing some of the world\'s most legendary diamonds, including the Koh-i-Noor, Hope Diamond, and Daria-i-Noor.',
    visitingHours: '9:00 AM to 5:30 PM, Evening Light & Sound Show: 6:30 PM to 8:00 PM',
    entryFee: '₹25 for Indians, ₹300 for Foreigners',
    tips: [
      'Stand right under the dome of the Fateh Darwaza (Victory Gate) and clap your hands; the acoustic echo can be heard clearly at the Bala Hissar (summit pavilion) 1 km away.',
      'Hire a local guide at the gate to show you the sophisticated secret clay pipes that supplied freshwater up to the highest palaces.',
      'Wear comfortable walking shoes; the climb to the summit involves over 350 steep stone steps but offers incredible views of the city.'
    ],
    nearbyAttractions: ['Qutb Shahi Tombs', 'Taramati Baradari', 'Chowmahalla Palace'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  {
    id: 'ramappa-temple-warangal',
    stateId: 'telangana',
    name: 'Ramappa Temple',
    description: 'A medieval stone temple and UNESCO World Heritage site celebrated for its floating bricks.',
    history: 'Dedicated to Lord Shiva, this Kakatiya-era temple was constructed in 1213 AD under General Recherla Rudra. Named after its chief sculptor, Ramappa, it is the only temple in India named after its architect. It features floating clay bricks (so light they float on water) used in the roof to reduce structural load, allowing it to survive major earthquakes.',
    visitingHours: '6:00 AM to 6:00 PM daily',
    entryFee: 'Free',
    tips: [
      'Examine the exquisitely carved dark basalt bracket figures (Madanikas) depicting dancers and musicians in dynamic, graceful postures.',
      'Touch the central temple pillars; they are carved out of basalt so finely polished that they feel cool and mirror-smooth to the touch.',
      'Combine your visit with a boat ride at Ramappa Lake, an ancient Kakatiya-built artificial lake located just 1 km away.'
    ],
    nearbyAttractions: ['Ramappa Lake', 'Thousand Pillar Temple', 'Warangal Fort'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Tripura Attractions
  {
    id: 'ujjayanta-neermahal-palaces-tripura',
    stateId: 'tripura',
    name: 'Ujjayanta & Neermahal Palaces',
    description: 'Stunning white royal palaces, one sitting majestically in the center of the vast Rudrasagar Lake.',
    history: 'Ujjayanta Palace, built in Agartala in 1901 by Maharaja Radha Kishore Manikya, is a classic neoclassical building that served as the royal seat of the Manikya Dynasty. Neermahal (meaning Water Palace), built in 1930 by Maharaja Bir Bikram Kishore Manikya as a summer resort, sits in the middle of Rudrasagar Lake and combines Hindu architectural style with Islamic dome designs.',
    visitingHours: 'Ujjayanta: 10:00 AM to 5:00 PM (Closed Mondays), Neermahal: 9:00 AM to 5:00 PM daily',
    entryFee: '₹20 (Ujjayanta Palace), ₹50 for boat ride to Neermahal',
    tips: [
      'Hire a motorboat or a traditional wooden hand-rowed boat at Rajghat jetty to reach Neermahal Palace across the lake.',
      'Visit Ujjayanta Palace in the evening when the entire facade, fountains, and Mughal-style gardens are illuminated with colorful lights.',
      'Step inside the Ujjayanta State Museum to see rare collections of royal weapons, hand-painted oil portraits, and historical tribal artifacts.'
    ],
    nearbyAttractions: ['Rudrasagar Lake', 'Jagannath Bari Temple', 'Heritage Park Agartala'],
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=1200'
  },
  {
    id: 'unakoti-rock-carvings-tripura',
    stateId: 'tripura',
    name: 'Unakoti Rock Carvings',
    description: 'Vast, ancient hillside bas-relief stone carvings of deities dating back to the 7th-9th centuries.',
    history: 'Unakoti, meaning "one less than a crore" (ten million) in Bengali, is a sacred forest hill covered with hundreds of giant stone-cut carvings of Lord Shiva, Ganesha, and other deities. According to mythology, Shiva and a crore of deities were traveling to Kashi; when the other deities failed to wake up before dawn, an angry Shiva cursed them to turn to stone here.',
    visitingHours: '6:00 AM to 6:00 PM daily',
    entryFee: 'Free',
    tips: [
      'Stand directly in front of the central carving, the 30-foot high head of Unakotiswara Kal Bhairava, featuring an intricate 10-foot tall crown.',
      'Wear sturdy walking shoes; the carvings are spread across steep, forest-covered hillsides accessed via concrete stairs.',
      'Visit during the Ashokastami Festival in April when thousands of tribal and non-tribal devotees gather to bathe in the sacred spring water.'
    ],
    nearbyAttractions: ['Unakoti Forest Trails', 'Dharmanagar Town', 'Kailashahar'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'tripura-sundari-temple-tripura',
    stateId: 'tripura',
    name: 'Tripura Sundari Temple',
    description: 'A 500-year-old holy shrine and sacred Shakti Peetha designed in the traditional Bengali hut style.',
    history: 'Built in 1501 AD by Maharaja Dhanya Manikya, this temple (locally called Matabari) is situated in the ancient town of Udaipur. It is one of the 51 sacred Shakti Peethas, where the right foot of Sati is believed to have fallen. The unique square structure features a hemispherical dome and a single-arched roof resembling a traditional Bengali thatched-roof hut.',
    visitingHours: '6:00 AM to 9:00 PM daily',
    entryFee: 'Free',
    tips: [
      'Walk to Kalyansagar Lake located behind the temple to feed the ancient, giant softshell turtles that are considered sacred by devotees.',
      'Wear modest clothing as it is an active, highly revered place of worship. Remove footwear and wash hands at the water stations before entering.',
      'Savor the "Peda", a sweet milk-fudge prasadam sold by small shops lining the temple entrance walkway.'
    ],
    nearbyAttractions: ['Kalyansagar Lake', 'Bhubaneswari Temple', 'Tepania Eco Park'],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200'
  },
  // Uttar Pradesh Attractions
  {
    id: 'varanasi-ghats-attraction',
    stateId: 'uttar-pradesh',
    name: 'The Varanasi Ghats',
    description: 'Ancient stone steps leading down to the sacred Ganges River, glowing with prayers and evening fire rituals.',
    history: 'Varanasi\'s 84 ghats were mostly built or rebuilt in the 18th century under the Maratha Empire. They serve as bathing ghats, prayer ghats, and cremation sites, and have been the spiritual backdrop of India for millennia.',
    visitingHours: 'Open 24 hours daily',
    entryFee: 'Free',
    tips: [
      'Take a sunrise wooden boat ride to watch pilgrims perform rituals in the soft morning light.',
      'Attend the musical Ganga Aarti at Dashashwamedh Ghat, which starts precisely at sunset.',
      'Walk from Assi Ghat to Manikarnika Ghat to witness the continuous circle of life and death.'
    ],
    nearbyAttractions: ['Kashi Vishwanath Temple', 'Sarnath', 'Dashashwamedh Ghat'],
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1200'
  },
  {
    id: 'bara-imambara-attraction',
    stateId: 'uttar-pradesh',
    name: 'Bara Imambara, Lucknow',
    description: 'An architectural marvel featuring a massive gravity-defying vaulted hall and a legendary brick labyrinth.',
    history: 'Built in 1784 by Asaf-ud-Daula, the Nawab of Awadh, as a famine relief project. The central arched hall is 50 meters long and 15 meters high, constructed entirely without a single supporting pillar or beam.',
    visitingHours: 'Sunrise to Sunset (Closed on Mondays)',
    entryFee: 'INR 50 (Indian), INR 500 (Foreigner)',
    tips: [
      'Hire an official local guide to navigate the "Bhool Bhulaiya" labyrinth, as it contains 1,000 identical passage routes.',
      'Climb up to the rooftop terrace for a spectacular panoramic view of the Rumi Darwaza and Lucknow skyline.',
      'Test the acoustics inside the central hall: a whisper at one end can be clearly heard at the other.'
    ],
    nearbyAttractions: ['Rumi Darwaza', 'Chhota Imambara', 'Husainabad Clock Tower'],
    image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=1200'
  },
  // Uttarakhand Attractions
  {
    id: 'laxman-jhula-attraction',
    stateId: 'uttarakhand',
    name: 'Laxman Jhula & Rishikesh Ghats',
    description: 'The legendary iron suspension bridge stretching across the emerald green waters of the Ganges.',
    history: 'According to Hindu mythology, Lord Ram\'s brother Lakshmana crossed the Ganges at this exact spot using a single jute rope. The current iron suspension bridge was constructed in 1929, though it is currently closed for vehicular traffic and replaced by adjacent modern bridges.',
    visitingHours: 'Open 24 hours daily',
    entryFee: 'Free',
    tips: [
      'Walk along the suspension bridge to feel the cool mountain breeze rising from the fast-flowing Ganges.',
      'Watch out for local monkeys who are notorious for snatching sunglasses and food from pedestrians.',
      'Sit along the Triveni Ghat steps in the evening to witness the beautiful lamps floated on leaves.'
    ],
    nearbyAttractions: ['Beatles Ashram', 'Parmarth Niketan', 'Ram Jhula'],
    image: 'https://images.unsplash.com/photo-1545203144-7121b2236f5e?q=80&w=1200'
  },
  {
    id: 'kedarnath-temple-attraction',
    stateId: 'uttarakhand',
    name: 'Kedarnath Temple',
    description: 'One of the most sacred Hindu shrines in India, perched at 11,755 feet amidst snow-capped peaks.',
    history: 'Dedicated to Lord Shiva, the stone temple is believed to have been originally built by the Pandavas of Mahabharata fame and later revived by 8th-century philosopher Adi Shankara. It miraculously survived the catastrophic 2013 Himalayan flash floods.',
    visitingHours: '6:00 AM to 9:00 PM (Closed in Winter from Nov to May)',
    entryFee: 'Free',
    tips: [
      'Prepare for a challenging 16-kilometer steep mountain trek from Gaurikund, or pre-book a helicopter shuttle flight.',
      'Carry warm layered clothing, windcheaters, and essential personal medicines due to extreme alpine climates.',
      'Obtain the mandatory biometric registration certificate online before starting your journey.'
    ],
    nearbyAttractions: ['Bhairav Temple', 'Vasuki Tal', 'Chorabari Glacier'],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  // West Bengal Attractions
  {
    id: 'victoria-memorial-attraction',
    stateId: 'west-bengal',
    name: 'Victoria Memorial, Kolkata',
    description: 'A monumental white Makrana marble palace commemorating colonial history, set inside vast manicured lawns.',
    history: 'Designed by Sir William Emerson and built between 1906 and 1921, this colossal dome structure combines British, Mughal, and Venetian architectural styles. It houses an extensive art museum chronicling British imperial history in India.',
    visitingHours: 'Museum: 10:00 AM to 5:00 PM, Gardens: 5:30 AM to 6:00 PM daily',
    entryFee: 'INR 30 (Gardens), INR 60 (Museum - Indian), INR 500 (Foreigner)',
    tips: [
      'Visit in the late afternoon to capture the golden hour sun striking the white marble facade and water reflections.',
      'Attend the spectacular Sound and Light show in the evening to learn about Kolkata\'s history.',
      'Take a slow carriage ride outside the main gates for a classic colonial experience.'
    ],
    nearbyAttractions: ['St. Paul\'s Cathedral', 'Maidan Park', 'Indian Museum'],
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200'
  },
  {
    id: 'darjeeling-toy-train-attraction',
    stateId: 'west-bengal',
    name: 'Darjeeling Himalayan Railway (Toy Train)',
    description: 'A legendary steam-powered narrow-gauge mountain train running through breathtaking valleys.',
    history: 'Built between 1879 and 1881 to connect Siliguri with Darjeeling, this railway is a masterpiece of early colonial engineering, using loops and reverses to climb 2,200 meters. It was declared a UNESCO World Heritage Site in 1999.',
    visitingHours: 'Varies by tour; regular Joy Rides depart hourly from Darjeeling station',
    entryFee: 'INR 1,000 to INR 1,600 (Depends on Steam vs. Diesel engine ride)',
    tips: [
      'Book the heritage Steam Engine Joy Ride well in advance to experience the classic whistle and coal smoke.',
      'The highlight of the short ride is the Batasia Loop, where the train circles a beautiful alpine garden with views of Kanchenjunga.',
      'Keep your camera ready as the train passes inches away from local market stalls along the tracks.'
    ],
    nearbyAttractions: ['Batasia Loop', 'Ghoom Monastery', 'Tiger Hill'],
    image: 'https://images.unsplash.com/photo-1557999852-c64a85fa0a98?q=80&w=1200'
  },
  // Andaman & Nicobar Attractions
  {
    id: 'cellular-jail-attraction',
    stateId: 'andaman-nicobar',
    name: 'Cellular Jail National Memorial',
    description: 'A historic three-story colonial prison monument dedicated to the freedom fighters of India.',
    history: 'Known as "Kala Pani" (Black Water), it was completed by the British in 1906 to isolate and punish Indian political prisoners. It featured a unique seven-wing star design where the front of each cell faced the front of the next, preventing any communication.',
    visitingHours: '9:00 AM to 12:30 PM, 1:30 PM to 4:45 PM (Closed on Mondays)',
    entryFee: 'INR 30',
    tips: [
      'Do not miss the evening Light and Sound show narrated in the voice of the ancient peepal tree inside the courtyard.',
      'Visit the cell of legendary freedom fighter Veer Savarkar to see the harsh solitary confinement conditions.',
      'Stand on the central watchtower for an expansive view of the harbor and the original prison layout.'
    ],
    nearbyAttractions: ['Corbyns Cove Beach', 'Ross Island', 'Fisheries Museum'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'radhanagar-beach-attraction',
    stateId: 'andaman-nicobar',
    name: 'Radhanagar Beach, Havelock',
    description: 'Asia\'s finest stretch of turquoise sea and powdery white sand bordered by giant tropical mahua trees.',
    history: 'Often rated as the best beach in India and among the top beaches in Asia by international travel journals, this pristine crescent-shaped beach has remained preserved as a tropical sanctuary with minimal commercial concrete constructions.',
    visitingHours: 'Sunrise to Sunset daily',
    entryFee: 'Free',
    tips: [
      'Stay until sunset; the sun sinks directly into the open ocean, turning the white sands into shades of pink and orange.',
      'Swim only in the designated safe zones patrolled by lifeguards, as undercurrents can be strong.',
      'Enjoy the changing cabins and showers available at the forest entrance for a nominal fee of INR 10.'
    ],
    nearbyAttractions: ['Elephant Beach', 'Kalapathar Beach', 'Neil Island Ferry'],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200'
  },
  // Chandigarh Attractions
  {
    id: 'rock-garden-chandigarh',
    stateId: 'chandigarh-ut',
    name: 'Nek Chand Rock Garden',
    description: 'A unique, sprawling 40-acre wonderland of maze-like paths, waterfalls, and thousands of sculptures made of recycled waste.',
    history: 'Started secretly in 1957 by Nek Chand Saini, a local government road inspector, who collected discarded ceramic shards, broken glass, bangles, and slag. It was discovered by city authorities in 1975, but instead of being demolished, it was opened to the public.',
    visitingHours: '9:00 AM to 7:00 PM (Summer), 9:00 AM to 6:00 PM (Winter) daily',
    entryFee: 'INR 30 (Adults), INR 10 (Children)',
    tips: [
      'Wear comfortable walking shoes as the garden is a continuous, long winding maze of narrow stone-walled passages.',
      'Take photos at the grand courtyard filled with giant swings, stone amphitheatres, and artificial waterfalls.',
      'Look closely at the figures; they are made of electrical plugs, toilet seats, bicycle frames, and broken chinaware.'
    ],
    nearbyAttractions: ['Sukhna Lake', 'Capitol Complex', 'Rose Garden'],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  {
    id: 'sukhna-lake-attraction',
    stateId: 'chandigarh-ut',
    name: 'Sukhna Lake',
    description: 'A peaceful, scenic artificial reservoir at the foothills of the Shivaliks, popular for sailing and sunrise walks.',
    history: 'Created in 1958 by damming the Sukhna Choe stream coming down from the Shivalik Hills. Chief planner Le Corbusier designed the lake promenade to be a quiet retreat away from vehicular traffic, intended for mental rejuvenation.',
    visitingHours: '5:00 AM to 10:00 PM daily',
    entryFee: 'Free',
    tips: [
      'Rent a pedal-boat or a traditional row-boat to enjoy the calm waters and spot migratory Siberian ducks in winter.',
      'Join local residents for a morning jog along the wide, tree-lined 2-kilometer paved promenade.',
      'Visit the adjacent "Garden of Silence", which features a giant, serene white statue of sitting Buddha.'
    ],
    nearbyAttractions: ['Nek Chand Rock Garden', 'Sukhna Wildlife Sanctuary', 'Capitol Complex'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Dadra and Nagar Haveli and Daman and Diu Attractions
  {
    id: 'diu-fort-attraction',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Diu Fort',
    description: 'An imposing 16th-century Portuguese coastal stone fortress with majestic sea-facing bastions and cannons.',
    history: 'Built by the Portuguese in 1535 following a defensive treaty with Bahadur Shah (Sultan of Gujarat) to resist Mughal invaders. The citadel is constructed of orange-toned coastal sandstone, surrounded on three sides by the sea, and features a deep moat and defensive ramparts mounting dozens of historic iron cannons.',
    visitingHours: '8:00 AM to 6:00 PM',
    entryFee: 'Free',
    tips: [
      'Climb up to the lighthouse platform for a magnificent, bird\'s-eye perspective of the entire Diu town and coastline.',
      'Examine the intricately carved stone crests of the Portuguese crown over the main gateway and bastions.',
      'Visit in the late afternoon to see the setting sun turn the fortress sandstone walls a fiery orange hue.'
    ],
    nearbyAttractions: ['Naida Caves', 'St. Paul\'s Church', 'Ghoghla Beach'],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200'
  },
  {
    id: 'jampore-beach-attraction',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Jampore Beach, Daman',
    description: 'A quiet, sandy beach popular for horse riding, beachside dining, and dramatic low tides.',
    history: 'Known for its mud-colored sands and safe, calm waters, Jampore Beach is a historical recreational area for the local coastal communities. Because of its unique coastal orientation, the tide recedes by several hundred meters twice a day, exposing extensive, flat seabeds.',
    visitingHours: '24 hours open',
    entryFee: 'Free',
    tips: [
      'Try local water sports like parasailing, jet skiing, or enjoy a traditional horse carriage ride along the damp sands.',
      'Sit in one of the elevated wooden beach shacks and sample local Damanese-style fried fish and coconut water.',
      'Walk far out into the wet sand flatlands during low tide, but stay aware of returning tides.'
    ],
    nearbyAttractions: ['Moti Daman Fort', 'Bom Jesus Cathedral', 'Devka Beach'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'vanganga-garden-attraction',
    stateId: 'dadra-nagar-haveli-daman-diu',
    name: 'Vanganga Lake Garden, Silvassa',
    description: 'A beautifully manicured Japanese-style park complete with water lakes, bridges, and boating.',
    history: 'Developed by the Forest Department to showcase the lush natural beauty of Silvassa, this lake garden was inspired by traditional Japanese landscaping. It centers around an island connected by rustic, thatched wooden bridges, creating a key recreational hub and green lung for the territory.',
    visitingHours: '11:00 AM to 8:30 PM (Closed on Tuesdays)',
    entryFee: '₹20 for Adults, ₹10 for Children',
    tips: [
      'Rent a paddleboat to explore the winding water channels around the central island.',
      'Stroll along the paved jogging track shaded by overhanging tall trees and flowering vines.',
      'Look out for the colorful musical fountain show synchronized to classical music on weekend evenings.'
    ],
    nearbyAttractions: ['Tribal Cultural Museum', 'Lion Safari Vasona', 'Dudhni Lake'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Delhi Attractions
  {
    id: 'humayun-tomb-attraction',
    stateId: 'delhi-ut',
    name: 'Humayun\'s Tomb',
    description: 'A magnificent 16th-century red sandstone garden mausoleum that directly inspired the Taj Mahal.',
    history: 'Commissioned by Empress Bega Begum in 1565 to house the body of her late husband, the second Mughal Emperor Humayun. Designed by Persian architect Mirak Mirza Ghiyas, it was the first garden-tomb on the Indian subcontinent, introducing the iconic Persian charbagh (four-quadrant garden) and double-dome architectural styles.',
    visitingHours: '6:00 AM to 6:00 PM daily',
    entryFee: '₹40 for Indians, ₹600 for Foreigners',
    tips: [
      'Visit in the early morning or late afternoon for the best warm lighting on the red sandstone and white marble dome.',
      'Spend time exploring the wider complex, including the beautiful octagonal Isa Khan Tomb and its sunken garden.',
      'Stand exactly at the center of the northern water channels for a perfectly symmetrical reflection shot of the main monument.'
    ],
    nearbyAttractions: ['Nizamuddin Dargah', 'Sundar Nursery', 'India Gate'],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200'
  },
  {
    id: 'red-fort-jama-masjid-attraction',
    stateId: 'delhi-ut',
    name: 'The Red Fort & Jama Masjid',
    description: 'Colossal red sandstone Mughal fort complex and one of India\'s largest historic mosques in Old Delhi.',
    history: 'Constructed by Emperor Shah Jahan in 1638 when he shifted the imperial capital from Agra to his newly designed city, Shahjahanabad. The Red Fort served as the seat of the Mughal Empire for over 200 years, while the adjacent Jama Masjid, completed in 1656, was built using red sandstone and white marble to serve as the emperor\'s primary royal mosque, accommodating up to 25,000 worshippers.',
    visitingHours: 'Red Fort: 9:30 AM to 4:30 PM (Closed on Mondays); Jama Masjid: 7:00 AM to Noon, 1:30 PM to 6:30 PM (No tourist entry during prayer hours)',
    entryFee: 'Red Fort: ₹50 for Indians, ₹550 for Foreigners; Jama Masjid: Free (₹300 camera fee)',
    tips: [
      'Take an exciting cycle-rickshaw ride from Lal Quila metro station through the busy, sensory lanes of Chandni Chowk to Jama Masjid.',
      'Climb the narrow stone steps of the southern minaret of Jama Masjid for a panoramic view of Old Delhi\'s rooftops and the Red Fort.',
      'Do not miss the evening light and sound show inside the Red Fort which narrates the dramatic history of the monument.'
    ],
    nearbyAttractions: ['Chandni Chowk', 'Raj Ghat', 'Gurudwara Sis Ganj Sahib'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'qutub-minar-attraction',
    stateId: 'delhi-ut',
    name: 'Qutub Minar',
    description: 'A soaring, 73-meter tall red sandstone brick tower built in 1193, marking the early Delhi Sultanate.',
    history: 'Begun by Qutb-ud-din Aibak in 1199 to celebrate the onset of Muslim rule in Delhi, and expanded by his successor Iltutmish and later Firoz Shah Tughlaq. Built of red sandstone and covered with exquisite Arabic inscriptions and geometric patterns, this five-story minaret towers over the historic ruins of the Quwwat-ul-Islam Mosque and the 4th-century rust-proof Iron Pillar of Chandragupta II.',
    visitingHours: '7:00 AM to 10:00 PM daily',
    entryFee: '₹40 for Indians, ₹600 for Foreigners',
    tips: [
      'Examine the famous Iron Pillar in the mosque courtyard, which has stood for over 1,600 years without rusting.',
      'Look up at the beautifully carved, honeycomb-like stalactite brackets supporting the balconies on each story.',
      'Visit after dark when the minaret and surrounding ruins are lit up by thousands of golden floodlights.'
    ],
    nearbyAttractions: ['Mehrauli Archaeological Park', 'Garden of Five Senses', 'Chhatarpur Temple'],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  // Jammu & Kashmir Attractions
  {
    id: 'dal-lake-shalimar-attraction',
    stateId: 'jammu-kashmir',
    name: 'Dal Lake & Shalimar Gardens',
    description: 'Cruising in a wooden "Shikara" past floating gardens and majestic Mughal terrace stone fountains.',
    history: 'Dal Lake, known as the "Jewel in the crown of Kashmir," is an urban lake critical to Srinagar\'s culture. Along its eastern shores lie Shalimar Bagh, constructed by Mughal Emperor Jahangir in 1619 for his wife Nur Jahan, and Nishat Bagh, built in 1633. These terraced gardens utilize natural mountain springs flowing down through stone channels and cascade waterfalls to water ancient Chinar trees and thousands of rose bushes.',
    visitingHours: 'Lake: Sunrise to Sunset; Gardens: 9:00 AM to 7:00 PM',
    entryFee: 'Gardens: ₹24; Shikara Ride: ₹500 to ₹1000 per hour (government regulated rates)',
    tips: [
      'Book a shikara ride in the very early morning (around 5:00 AM) to see the vibrant floating vegetable market in the lake\'s inner channels.',
      'Walk up to the highest terrace of Shalimar Bagh to see the black stone pavilion built for royal audiences.',
      'Sample warm Kashmiri Kahwa tea brewed with saffron, cardamom, and almonds sold directly from floating vendor boats.'
    ],
    nearbyAttractions: ['Nishat Bagh', 'Tulip Garden', 'Hazratbal Shrine', 'Shankaracharya Temple'],
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200'
  },
  {
    id: 'gulmarg-meadow-attraction',
    stateId: 'jammu-kashmir',
    name: 'Gulmarg Meadow of Flowers',
    description: 'A spectacular mountain resort offering the world\'s second-highest gondola cable car and ski slopes.',
    history: 'Gulmarg was originally named "Gaurimarg" by local shepherds and renamed "Gulmarg" (Meadow of Flowers) by Sultan Yusuf Shah in the 16th century, who was enchanted by its wildflower slopes. During colonial times, it was used by British officials as an alpine retreat, leading to the creation of its historic golf course and ski resort facilities.',
    visitingHours: 'Gondola operates from 10:00 AM to 5:00 PM daily (Depends heavily on wind and weather)',
    entryFee: 'Meadow: Free; Gondola: ₹920 for Phase 1, ₹1070 for Phase 2 (Online booking is highly recommended)',
    tips: [
      'Pre-book your Gondola tickets online weeks in advance, as same-day tickets are rarely available at the ticket counters.',
      'Hire a registered local guide at the resort to help navigate snow boot rentals and ensure smooth boarding of the Gondola.',
      'Take the Gondola to Phase 2 (Apharwat Peak, 13,780 ft) to see spectacular views of the snow-bound Pir Panjal peaks.'
    ],
    nearbyAttractions: ['Apharwat Peak', 'St. Mary\'s Church', 'Baba Reshi Shrine'],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  {
    id: 'pahalgam-valley-attraction',
    stateId: 'jammu-kashmir',
    name: 'Pahalgam (Shepherds Valley)',
    description: 'An idyllic valley where the Lidder River flows past green meadows and dark pine forests.',
    history: 'Historically a peaceful village of nomadic shepherds (Gujjars), Pahalgam lies at the confluence of the streams flowing from Sheshnag Lake and the Lidder River. It has served as a central starting point for the annual Hindu pilgrimage to the holy Amarnath Cave, transitioning over the 20th century into a prime destination for trout fishing, trekking, and cinematic backdrops.',
    visitingHours: '24 hours open',
    entryFee: 'Free',
    tips: [
      'Hire a local pony to trek up to Baisaran Meadow, affectionately called "Mini Switzerland" due to its dense pine forests.',
      'Visit Betaab Valley, named after a famous Bollywood movie, to see the crystal-clear river winding through manicured pastures.',
      'If you love trekking, arrange a day trip to the spectacular Aru Valley, the base camp for treks to the Kolahoi Glacier.'
    ],
    nearbyAttractions: ['Betaab Valley', 'Aru Valley', 'Baisaran Meadow', 'Chandanwari'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  // Ladakh Attractions
  {
    id: 'pangong-tso-attraction',
    stateId: 'ladakh-ut',
    name: 'Pangong Tso Lake',
    description: 'A high-altitude salt-water lake spanning from India to China, shifting colors from turquoise to deep blue.',
    history: 'Pangong Tso is a spectacular endorheic (landlocked) lake located at a height of 13,940 ft. Spanning 134 kilometers, only about one-third of the lake lies in India, with the rest stretching into Tibet. Its water is highly saline, preventing any fish or aquatic life, but it serves as an important breeding ground for migratory birds like the Bar-headed Goose.',
    visitingHours: 'Sunrise to Sunset (Requires Inner Line Permit)',
    entryFee: 'Environment Fee ₹400 + Wildlife Fee ₹20 per day (obtained online or at Leh)',
    tips: [
      'Spend at least 2 days acclimatizing in Leh before traveling to Pangong to prevent severe Acute Mountain Sickness (AMS).',
      'Wear multiple layers of heavy woolen clothing, as temperatures drop below freezing after sunset even in summer.',
      'Carry extra fuel and cash, as there are no petrol pumps or working ATMs near the lake area.'
    ],
    nearbyAttractions: ['Spangmik Village', 'Chang La Pass', 'Tangtse Monastery'],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200'
  },
  {
    id: 'thiksey-monastery-attraction',
    stateId: 'ladakh-ut',
    name: 'Thiksey Monastery',
    description: 'A twelve-story Tibetan Buddhist monastery complex perched majestically on a hill, resembling Tibet\'s Potala Palace.',
    history: 'Belonging to the Gelug (Yellow Hat) sect of Tibetan Buddhism, Thiksey Monastery was founded in 1430 by Sherab Zangpo. It is a stunning twelve-story complex painted in traditional red, white, and yellow ochre, built hierarchically down a rocky slope. It houses numerous shrines, sacred stupas, and a famous 15-meter-tall statue of Maitreya Buddha.',
    visitingHours: '7:00 AM to 7:00 PM daily',
    entryFee: '₹50 for tourists',
    tips: [
      'Arrive early around 6:00 AM to witness the morning prayer assembly of young monks chanting scriptures to the sound of conch shells.',
      'Spend time admiring the Maitreya Buddha statue, which was built in 1970 to commemorate the visit of the 14th Dalai Lama.',
      'Examine the beautiful, detailed sand mandalas and ancient murals depicting Buddhist protector deities.'
    ],
    nearbyAttractions: ['Shey Palace', 'Hemis Monastery', 'Stok Palace'],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200'
  },
  {
    id: 'nubra-valley-attraction',
    stateId: 'ladakh-ut',
    name: 'Nubra Valley & Hunder Dunes',
    description: 'A high-altitude valley of cold sand dunes where double-humped Bactrian camels roam near glacial rivers.',
    history: 'Nubra was historically the heart of the central Asian trade route (the Silk Road). It was carved out by the Shyok and Nubra rivers, which deposited glacial silt to form the unique, cold sand dunes of Hunder. The double-humped Bactrian camels found here are descendants of pack animals left behind by traders traveling between Leh, Yarkand, and Kashgar.',
    visitingHours: 'Sunrise to Sunset (Requires Inner Line Permit)',
    entryFee: 'Environment Fee (included in Ladakh tourist permit)',
    tips: [
      'Cross the Khardung La pass slowly and do not spend more than 15 minutes at the summit to avoid high altitude headache.',
      'Take a ride on the double-humped Bactrian camels along the dunes of Hunder during sunset for incredible photos.',
      'Visit the nearby Turtuk village, which was under Pakistani control until 1971, to experience Balti culture.'
    ],
    nearbyAttractions: ['Diskit Monastery', 'Turtuk Village', 'Panamik Hot Springs'],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  // Lakshadweep Attractions
  {
    id: 'agatti-bangaram-attraction',
    stateId: 'lakshadweep-ut',
    name: 'Agatti & Bangaram Lagoons',
    description: 'Turquoise, crystal-clear coastal lagoons bordered by powdery sandbars and rich coral reefs.',
    history: 'These lagoons are formed by coral atoll rings surrounding the volcanic islands of Agatti and Bangaram. Protected from the rough currents of the open Arabian Sea, they represent incredibly calm, shallow pools of warm sea water with 100% visibility, hosting complex coral gardens.',
    visitingHours: '6:00 AM to 6:00 PM daily (Requires Lakshadweep Entry Permit)',
    entryFee: 'Included in resort/travel packages',
    tips: [
      'Take a glass-bottom boat tour to view the colorful brain corals and sea anemones without getting wet.',
      'Hire a kayak to paddle silently out to the isolated, pristine white sandbars during low tide.',
      'Keep your eyes open for green sea turtles and spotted eagle rays gliding under your boat.'
    ],
    nearbyAttractions: ['Bangaram Reef', 'Thinnakara Island', 'Agatti Village'],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200'
  },
  {
    id: 'kavaratti-aquarium-attraction',
    stateId: 'lakshadweep-ut',
    name: 'Kavaratti Marine Aquarium',
    description: 'A preserved marine sanctuary showcasing indigenous colored corals, sea turtles, and lagoon species.',
    history: 'Established by the Department of Fisheries to educate visitors and conserve the extremely fragile marine biodiversity of the Lakshadweep archipelago. It houses a curated collection of live coral species and native lagoon animals that have been carefully rescued and rehabilitated.',
    visitingHours: '10:00 AM to 5:00 PM (Closed on Sundays)',
    entryFee: '₹15 for Adults, ₹5 for Children',
    tips: [
      'Ask the resident curator to explain the ecological importance of coral reefs and the threats of bleaching.',
      'Observe the striking, brightly-colored clown fish, lion fish, and sea cucumbers in the glass displays.',
      'Combine your aquarium visit with a walk along the adjacent Kavaratti jetty to spot reef fish swimming in the wild.'
    ],
    nearbyAttractions: ['Ujra Mosque', 'Kavaratti Lagoon Beach', 'Coir Craft Center'],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'kadmat-beaches-attraction',
    stateId: 'lakshadweep-ut',
    name: 'Kadmat Island Beaches',
    description: 'A long, narrow tear-drop island of white sands popular for kayaking and deep-sea diving.',
    history: 'Kadmat is a narrow coral island spanning just 8 kilometers in length and barely 550 meters in width. It features a spectacular, massive lagoon on its western side and deep, clear waters on its eastern side, making it a natural center for scuba diving, sailing, and marine conservation.',
    visitingHours: '24 hours open (Requires Permit)',
    entryFee: 'Included in tour package',
    tips: [
      'Book a dive with the government-run Laccadives Dive Center to explore the famous "turtle nest" reef site.',
      'Go kayaking in the shallow western lagoon, which is so quiet and calm it feels like a swimming pool.',
      'Walk along the narrow southern tip of the island where the land tapers to a tiny point of pure sand surrounded by waves.'
    ],
    nearbyAttractions: ['Kadmat Coral Reef', 'Coir Production Center', 'Coconut Groves'],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200'
  },
  // Puducherry Attractions
  {
    id: 'french-quarter-attraction',
    stateId: 'puducherry-ut',
    name: 'The French Quarter (White Town)',
    description: 'Quiet, cobblestone lanes bordered by mustard-yellow colonial villas, bougainvillea, and chic cafes.',
    history: 'Formally established as the "Ville Blanche" under French East India Company rule in the late 17th century. Laid out in an orderly grid system, it was separated from the "Black Town" (the native quarter) by a canal. White Town retains its distinct European atmosphere, featuring beautiful neoclassic French buildings, archways, and cobblestone roads.',
    visitingHours: 'Best explored from Sunrise to 10:00 PM',
    entryFee: 'Free',
    tips: [
      'Rent a vintage bicycle to explore the lanes of White Town like Rue Dumas, Rue Romain Rolland, and Suffren.',
      'Stop at a local French bakery for fresh-baked croissants, baguettes, and filter coffee.',
      'Visit the iconic, pale pink building of the Alliance Française or the monument to Joseph François Dupleix.'
    ],
    nearbyAttractions: ['Sri Aurobindo Ashram', 'Promenade Beach', 'Sacred Heart Basilica'],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'auroville-matrimandir-attraction',
    stateId: 'puducherry-ut',
    name: 'Auroville & Matrimandir',
    description: 'An experimental, international spiritual township featuring the monumental golden globe Matrimandir.',
    history: 'Founded in 1968 by Mirra Alfassa (known as "The Mother"), who envisioned a universal township where men and women of all countries could live in peace and progressive harmony. Designed by French architect Roger Anger, the city is laid out in a spiral galaxy shape, centering the Matrimandir—a massive, golden-gilded sphere covered in thousands of gold leaf plates, symbolizing the birth of a new consciousness.',
    visitingHours: 'Visitors Centre: 9:00 AM to 5:30 PM; Matrimandir Viewing Point: 9:00 AM to 4:00 PM (Inner Chamber entry requires 2-3 days advance booking)',
    entryFee: 'Free (Advance booking for the Inner Chamber is required)',
    tips: [
      'Take the pleasant, 1-kilometer shaded forest trail from the Visitors Centre to the Matrimandir Viewing Point.',
      'If you wish to meditate inside the golden dome, make a booking online or in person at least 2-3 days in advance.',
      'Have lunch at the Solar Kitchen, which prepares organic meals using vegetables grown directly in Auroville\'s farms.'
    ],
    nearbyAttractions: ['Auroville Beach', 'Savitri Bhavan', 'Auroville Forest Trails'],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'promenade-beach-attraction',
    stateId: 'puducherry-ut',
    name: 'Promenade Beach',
    description: 'A rocky, 1.5-km coastal boardwalk along the Bay of Bengal, bustling with evening walkers.',
    history: 'This scenic 1.5-kilometer beachfront walkway has historically been the civic center of Puducherry. It is bordered by rock groynes to prevent erosion and lined with historical monuments, including the 4-meter-tall Mahatma Gandhi Statue surrounded by monolithic granite pillars, and the historic Le Foyer du Soldat war memorial.',
    visitingHours: 'Vehicles are banned from 6:00 PM to 7:30 AM daily, making it pedestrian-only',
    entryFee: 'Free',
    tips: [
      'Walk along the promenade in the evening when the road is closed to motor vehicles, creating a peaceful walking experience.',
      'Grab a cup of local filter coffee or Italian gelato from the beachfront cafes and sit on the concrete benches facing the ocean.',
      'Check out the beautiful white French War Memorial, which is decorated with lanterns on Bastille Day (July 14).'
    ],
    nearbyAttractions: ['Gandhi Statue', 'White Town', 'Pondicherry Museum'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  }
];

// Major Wildlife National Parks
export const NATIONAL_PARKS: NationalPark[] = [
  {
    id: 'ranthambore',
    name: 'Ranthambore National Park',
    stateId: 'rajasthan',
    description: 'A rugged wildlife sanctuary in Rajasthan where ancient stone ruins and dry-deciduous forests shelter wild Bengal tigers.',
    keyFauna: ['Royal Bengal Tiger', 'Indian Leopard', 'Sloth Bear', 'Mugger Crocodile', 'Chital'],
    bestTime: 'November to April (Park is closed from July to September during monsoon)',
    safariTimings: 'Morning: 6:30 AM - 10:00 AM, Afternoon: 2:30 PM - 6:00 PM',
    tips: [
      'Book your safari seats online at least 3-4 months in advance as quotas are strictly limited.',
      'Choose Zones 1 to 5 for the highest probability of tiger sightings; these contain the historic lake shores.',
      'Visit the 10th-century Ranthambore Fort situated inside the park boundaries for sweeping canopy views.'
    ],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  {
    id: 'jim-corbett',
    name: 'Jim Corbett National Park',
    stateId: 'uttarakhand',
    description: 'India\'s oldest national park, nestled in the Himalayan foothills of Uttarakhand, featuring dense sal forests and the Ramganga River.',
    keyFauna: ['Bengal Tiger', 'Asian Elephant', 'Gharial Crocodile', 'Leopard Cat', 'Golden Jackal'],
    bestTime: 'November to May (Dhikala zone opens November 15th)',
    safariTimings: 'Morning: 6:00 AM - 9:30 AM, Afternoon: 3:00 PM - 6:30 PM',
    tips: [
      'Stay overnight in the historic government forest rest houses inside the Dhikala Zone for an immersive jungle experience.',
      'Keep quiet on safaris and observe the alert calls of langurs and deer, which reveal tiger movements.',
      'Pack warm layers, as winter mornings in the foothills can be extremely cold.'
    ],
    image: 'https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?q=80&w=1200'
  },
  {
    id: 'kaziranga',
    name: 'Kaziranga National Park',
    stateId: 'assam',
    description: 'A spectacular swampy wetland biosphere in Assam, protecting two-thirds of the world\'s great Indian one-horned rhinoceroses.',
    keyFauna: ['One-horned Rhinoceros', 'Wild Water Buffalo', 'Asian Elephant', 'Swamp Deer', 'Great Hornbill'],
    bestTime: 'November to April (Subject to Brahmaputra River flooding)',
    safariTimings: 'Morning: 7:00 AM - 10:00 AM, Afternoon: 1:30 PM - 3:30 PM',
    tips: [
      'Take a jeep safari through the Central (Kohora) or Western (Bagori) range for close-up rhinoceros encounters.',
      'Keep binoculars ready to spot rare migratory birds that travel here from Siberia.',
      'Check out the nearby orchid conservation garden to see hundreds of native Northeastern species.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200'
  },
  {
    id: 'namdapha-national-park',
    name: 'Namdapha National Park',
    stateId: 'arunachal-pradesh',
    description: 'A vast, high-altitude rainforest biosphere hosting tigers, leopards, and the rare red panda in Arunachal Pradesh.',
    keyFauna: ['Snow Leopard', 'Clouded Leopard', 'Bengal Tiger', 'Red Panda', 'Hoolock Gibbon'],
    bestTime: 'November to April (Best weather for deep jungle trekking and camping)',
    safariTimings: 'Trekking & Guided Walks: 7:00 AM - 4:00 PM',
    tips: [
      'Namdapha is an explorer\'s wilderness—there are no jeep tracks; exploration is done through multi-day guided foot treks with local tribal guides.',
      'Pack high-quality waterproof trekking boots and leech guards, as the rainforest canopy is dense and humid.',
      'Spend a night camping in tents at the scenic "Deban" campsite situated right on the banks of the rushing Noa-Dihing River.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  {
    id: 'kanger-valley-national-park',
    name: 'Kanger Valley National Park',
    stateId: 'chhattisgarh',
    description: 'A densely wooded biosphere sheltering deep limestone caves, subterranean streams, and the Hill Myna.',
    keyFauna: ['Bastarian Hill Myna', 'Leopard', 'Wild Boar', 'Striped Hyena', 'Chousingha (Four-horned Antelope)'],
    bestTime: 'November to May (Limestone caves are closed during monsoon due to flooding)',
    safariTimings: 'Morning: 7:00 AM - 11:00 AM, Afternoon: 2:00 PM - 5:30 PM',
    tips: [
      'Hire a local forest guard with a powerful torch to explore Kutumsar Cave, a subterranean limestone wonder with unique blind fish species.',
      'Visit the roaring Teerathgarh Falls, a stunning 300-foot multi-tiered cascade located inside the national park boundary.',
      'Keep quiet near the forest canopy to hear the unique, human-like mimicry whistles of the Bastar Hill Myna, the official state bird.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  // Gujarat National Park
  {
    id: 'gir-national-park',
    name: 'Gir National Park',
    stateId: 'gujarat',
    description: 'The sole remaining natural habitat of the majestic wild Asiatic Lions in the world.',
    keyFauna: ['Asiatic Lion', 'Leopard', 'Chital (Spotted Deer)', 'Sambar Deer', 'Chowsingha (Four-horned Antelope)', 'Mugger Crocodile'],
    bestTime: 'December to March (Park is completely closed from June 16 to October 15 during monsoons)',
    safariTimings: '6:00 AM - 9:00 AM, 9:00 AM - 12:00 PM, 3:00 PM - 6:00 PM',
    tips: [
      'Book your open-jeep Gir Jungle Trail safari online at least 3-4 months in advance, as permits are highly limited.',
      'Opt for the early morning safari (6:00 AM) when Asiatic Lions are most active, patrolling their territories or drinking from forest streams.',
      'Take a short detour to the Devalia Safari Park, an enclosed sanctuary that guarantees lion sightings within an hour.'
    ],
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=1200'
  },
  // Haryana National Park
  {
    id: 'sultanpur-national-park',
    name: 'Sultanpur National Park',
    stateId: 'haryana',
    description: 'A lush wetland sanctuary hosting over 250 species of resident and migratory birds from Siberia and Europe.',
    keyFauna: ['Siberian Crane', 'Greater Flamingo', 'Black-necked Stork', 'Northern Pintail', 'Nilgai (Blue Bull)', 'Golden Jackal'],
    bestTime: 'December to February (Peak winter when migratory bird numbers are highest)',
    safariTimings: '7:00 AM to 4:30 PM (Closed on Tuesdays)',
    tips: [
      'Carry a pair of high-quality binoculars and a zoom camera; the sanctuary is a peaceful walking-only park with no motorized vehicles.',
      'Climb the multiple lakeside watchtowers built along the paved circular walking path for panoramic views of nesting colonies.',
      'Hire a local veteran bird-watching guide at the gate to help spot rare migratory ducks and raptors hidden in the reeds.'
    ],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  // Himachal Pradesh National Park
  {
    id: 'great-himalayan-national-park',
    name: 'Great Himalayan National Park',
    stateId: 'himachal-pradesh',
    description: 'A pristine UNESCO World Heritage alpine biosphere sheltering rare high-altitude species and untouched oak forests.',
    keyFauna: ['Snow Leopard', 'Himalayan Brown Bear', 'Blue Sheep (Bharal)', 'Musk Deer', 'Western Tragopan (rare pheasant)', 'Monal'],
    bestTime: 'April to June, October to November (Trekking paths are closed and dangerous during peak winter snow and monsoon)',
    safariTimings: 'Open 24 hours (Permits required; multi-day walking treks only)',
    tips: [
      'Obtain mandatory entry permits from the park headquarters at Shamshi or the Sai Ropa tourist center before entering.',
      'The park has no motorable roads; all exploration is via serious, high-altitude trekking requiring local licensed guides and porters.',
      'Camp in designated forest campsites like Rolla or Shilt, packing out all plastic waste to maintain the pristine alpine ecology.'
    ],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  // Jharkhand National Park
  {
    id: 'betla-national-park',
    name: 'Betla National Park',
    stateId: 'jharkhand',
    description: 'An ancient deciduous forest reserve in the Palamu hills, rich in wildlife, wild elephants, and historic forts.',
    keyFauna: ['Asian Elephant', 'Bengal Tiger', 'Leopard', 'Sloth Bear', 'Gaur (Indian Bison)', 'Nilgai', 'Langur'],
    bestTime: 'November to April (March and April are excellent for spotting large herds of wild elephants near watering holes)',
    safariTimings: 'Morning: 6:00 AM - 10:00 AM, Afternoon: 2:00 PM - 5:00 PM',
    tips: [
      'Take an early morning elephant-back safari (where available) for a quiet, natural way to get close to wild bison and deer.',
      'Explore the ancient, ruined 16th-century Chero Dynasty Forts hidden deep inside the sal forest canopies of the park.',
      'Carry a light jacket as the evening temperature drops rapidly due to the dense forest canopy and high hills.'
    ],
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=1200'
  },
  // Karnataka National Park
  {
    id: 'nagarhole-national-park',
    name: 'Nagarhole National Park (Kabini)',
    stateId: 'karnataka',
    description: 'A pristine sanctuary of the Nilgiri Biosphere Reserve, renowned for having the world\'s largest congregation of Asian Elephants and the famous Black Panther.',
    keyFauna: ['Asian Elephant', 'Bengal Tiger', 'Leopard', 'Black Panther', 'Gaur (Indian Bison)', 'Sloth Bear', 'Mugger Crocodile'],
    bestTime: 'October to May (March to May is best for wildlife sightings near Kabini River)',
    safariTimings: '6:15 AM - 9:15 AM, 3:00 PM - 6:00 PM daily',
    tips: [
      'Book a boat safari on the Kabini River, which offers a stunning vantage point to see elephants, marsh crocodiles, and water birds along the shore.',
      'Nagarhole is famous for its rare melanistic leopard (Black Panther) sightings; opt for safaris in the Kabini zone for a chance to spot him.',
      'Ensure you arrive at least 45 minutes before your scheduled safari time, as forest entry gates strictly control vehicle access.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200'
  },
  // Kerala National Park
  {
    id: 'periyar-national-park',
    name: 'Periyar National Park & Tiger Reserve',
    stateId: 'kerala',
    description: 'An artificial lake sanctuary nestled deep in the Cardamom Hills, famous for herd sightings of wild elephants and scenic boat cruises.',
    keyFauna: ['Bengal Tiger', 'Asian Elephant', 'Nilgiri Tahr', 'Lion-tailed Macaque', 'Gaur', 'Otter'],
    bestTime: 'October to March (Excellent cool weather, lush green cover)',
    safariTimings: 'Boat Cruises: 7:30 AM, 9:30 AM, 11:15 AM, 1:45 PM, 3:30 PM',
    tips: [
      'Opt for the early morning boat cruise (7:30 AM) on Periyar Lake for the highest chance of seeing family herds of wild elephants drinking by the lakeside.',
      'Try the "Periyar Tiger Trail", an overnight guided trekking and camping program conducted by reformed former poachers who know the forest perfectly.',
      'Carry salt or anti-leech socks if you are planning to take any nature walks or bamboo rafting tours during the damp months.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  // Madhya Pradesh National Park
  {
    id: 'kanha-national-park',
    name: 'Kanha National Park & Tiger Reserve',
    stateId: 'madhya-pradesh',
    description: 'The majestic sal and bamboo forest that inspired Rudyard Kipling\'s "The Jungle Book", famous for saving the rare Hard-ground Barasingha from extinction.',
    keyFauna: ['Bengal Tiger', 'Leopard', 'Hard-ground Barasingha (Swamp Deer)', 'Indian Wild Dog (Dhole)', 'Gaur', 'Sloth Bear'],
    bestTime: 'October to April (Park is closed from July 1 to October 15 during monsoons)',
    safariTimings: 'Sunrise to 11:00 AM, 3:00 PM to Sunset',
    tips: [
      'Book the open-top gypsy safari in the Kisli or Kanha zones, which feature the wide-open meadows where tigers roam frequently.',
      'Visit the Kanha Museum at the center of the park to see beautifully preserved specimens of the forest\'s rich fauna and learn about tribal conservation.',
      'Keep an eye out for the "Barasingha"—Kanha is the only place in the world hosting this specific subspecies of swamp deer.'
    ],
    image: 'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=1200'
  },
  // Maharashtra National Park
  {
    id: 'tadoba-national-park',
    name: 'Tadoba Andhari Tiger Reserve',
    stateId: 'maharashtra',
    description: 'Maharashtra\'s oldest and largest national park, featuring dry-deciduous forests and high-density tiger breeding zones.',
    keyFauna: ['Bengal Tiger', 'Leopard', 'Sloth Bear', 'Gaur', 'Striped Hyena', 'Honey Badger'],
    bestTime: 'March to May (Hot dry months when tigers frequently visit the water holes like Tadoba Lake)',
    safariTimings: '6:00 AM - 10:00 AM, 2:30 PM - 6:30 PM (Closed on Tuesdays)',
    tips: [
      'Book safaris for the Moharli or Kolara gates, which are the most active zones for tiger sightings and have excellent local guide services.',
      'Tadoba is exceptionally hot in summer (exceeding 45°C); carry wide-brimmed hats, light cotton clothes, and plenty of water, as this is when tiger sightings are maximum.',
      'Hire a specialized naturalist guide to help spot elusive sloth bears and the unique birdlife nesting around Tadoba Lake.'
    ],
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200'
  },
  // Manipur National Park
  {
    id: 'keibul-lamjao-national-park',
    name: 'Keibul Lamjao National Park',
    stateId: 'manipur',
    description: 'The world\'s only floating national park, located on Loktak Lake, boasting a unique swampy ecosystem that shelters the endangered Sangai "dancing" deer.',
    keyFauna: ['Sangai (Brow-antlered Deer)', 'Hog Deer', 'Otter', 'Python', 'Water Pheasant', 'Migratory Waterfowl'],
    bestTime: 'October to April (Peak winter and spring months when climate is pleasant and bird life is highest)',
    safariTimings: '6:00 AM to 10:00 AM, 2:30 PM to 5:30 PM daily',
    tips: [
      'Explore the park by hiring a traditional flat-bottom wooden canoe to navigate the narrow channels cut through the floating vegetative mass (phumdis).',
      'Visit the primary watchtower at the Sendra Island hillock for a jaw-dropping aerial view of the floating circular islands of vegetation.',
      'Wear good waterproof boots, as the floating grass is swampy, spongy, and floats dynamically over the deep lake water.'
    ],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200'
  },
  // Meghalaya National Park
  {
    id: 'nokrek-national-park',
    name: 'Nokrek National Park',
    stateId: 'meghalaya',
    description: 'A critical biosphere reserve in the West Garo Hills, famous for being the home of wild citrus species and the elusive red panda.',
    keyFauna: ['Hoolock Gibbon', 'Clouded Leopard', 'Red Panda', 'Pig-tailed Macaque', 'Asian Elephant', 'Tiger'],
    bestTime: 'October to May (Dry winter and spring months present excellent trekking paths and high wildlife activity)',
    safariTimings: 'Nature Walk & Bird Watching: 6:30 AM - 3:30 PM daily',
    tips: [
      'Nokrek is celebrated as a genetic sanctuary for wild Citrus indica (the mother of all citrus fruits); look for the ancient wild orange trees along the pathways.',
      'Hire an official forest guard from Daribokgre village to guide you on the trek to Nokrek Peak, the highest point in the Garo Hills.',
      'Keep your eyes trained on the bamboo groves to catch sight of the Hoolock Gibbon, the only ape species found in India, known for their unique morning singing.'
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  // Mizoram National Park
  {
    id: 'phawngpui-blue-mountain-park',
    name: 'Phawngpui (Blue Mountain)',
    stateId: 'mizoram',
    description: 'The highest mountain peak in Mizoram, enveloped in thin clouds, providing a scenic national park sanctuary for rare mountain flora and birds.',
    keyFauna: ['Mrs. Hume\'s Pheasant', 'Blyth\'s Tragopan', 'Goral (Mountain Goat)', 'Hoolock Gibbon', 'Leopard Cat', 'Slow Loris'],
    bestTime: 'November to April (Trekking is exceptionally scenic as the wildflowers bloom and skies are crisp blue)',
    safariTimings: 'Mountain Trekking: 7:00 AM - 4:00 PM',
    tips: [
      'Hire a local guide from Sangau village (the gateway to Phawngpui) to navigate the scenic trails and explain the legendary Mizo stories of the mountain deities.',
      'Bring warm layered clothing; the temperature at the summit (2,157m) drops sharply in the evening, often covered by dense mist.',
      'Scan the high cliff faces for the endangered mountain goat, the Goral, and the gorgeous, colorful state bird, Mrs. Hume\'s Pheasant.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Nagaland National Park
  {
    id: 'ntangki-national-park',
    name: 'Ntangki National Park',
    stateId: 'nagaland',
    description: 'A sprawling jungle sanctuary in Peren district preserving pristine equatorial rainforests and rich wildlife.',
    keyFauna: ['Hoolock Gibbon', 'Golden Langur', 'Tiger', 'Leopard', 'Black Stork', 'Hornbill', 'Python'],
    bestTime: 'November to March (Winter months offer pleasant walking weather and crystal-clear forest views)',
    safariTimings: 'Guided Walks: 7:30 AM - 3:00 PM',
    tips: [
      'Secure a special entry permit from the Nagaland Forest Department in Kohima or Dimapur before traveling to the park.',
      'Explore the giant tree canopies using the designated elevated bamboo watchtowers to spot nesting hornbills and playful gibbons.',
      'Wear sturdy clothing and leech guards; the rainforest retains high moisture year-round with rich undergrowth.'
    ],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200'
  },
  // Odisha National Park
  {
    id: 'chilika-lake-park',
    name: 'Chilika Lake',
    stateId: 'odisha',
    description: 'Asia\'s largest brackish water coastal lagoon, sheltering millions of migratory winter birds and endangered Irrawaddy dolphins.',
    keyFauna: ['Irrawaddy Dolphin', 'Green Sea Turtle', 'Fishing Cat', 'Lesser Flamingo', 'White-bellied Sea Eagle', 'Spoon-billed Sandpiper'],
    bestTime: 'November to February (When millions of migratory birds arrive from Siberia, Russia, and Central Asia)',
    safariTimings: 'Boat Cruises: 6:00 AM - 5:00 PM daily',
    tips: [
      'Take a morning boat cruise from Satapada jetty to spot the rare, gentle Irrawaddy dolphins swimming in their natural habitat.',
      'Visit Mangalajodi on the northern edge of Chilika, an award-winning community-run eco-tourism birding paradise, for close-up views of birds in small wooden punts.',
      'Stop over at Nalabana Bird Sanctuary Island, a designated RAMSAR wetland site that becomes completely submerged during monsoon.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Punjab National Park
  {
    id: 'harike-wetland-park',
    name: 'Harike Wetland and Bird Sanctuary',
    stateId: 'punjab',
    description: 'One of the largest man-made wetlands in Northern India, located at the confluence of the Beas and Sutlej rivers, sheltering rich avian biodiversity.',
    keyFauna: ['Indus River Dolphin', 'Smooth-coated Otter', 'Testudines (Soft-shell Turtles)', 'Sarus Crane', 'Bar-headed Goose', 'Pallas\'s Gull'],
    bestTime: 'November to March (Peak winter is ideal for observing over 200 species of migratory waterbirds)',
    safariTimings: 'Birding Tours: 7:00 AM - 4:30 PM',
    tips: [
      'Hire a local boatmen at Harike village to take you close to the reed-beds where rare waterbirds nest.',
      'Visit the Harike Barrage early in the morning to stand on the lookout bridge and see the confluence waters covered in misty dawn light.',
      'Keep a sharp eye out for the incredibly rare Indus River Dolphin, which can be spotted surfacing in the deep channels of the Beas river.'
    ],
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200'
  },
  // Sikkim National Park
  {
    id: 'khangchendzonga-national-park',
    name: 'Khangchendzonga National Park',
    stateId: 'sikkim',
    description: 'A spectacular high-altitude wilderness containing Mount Khangchendzonga, a unique mixed UNESCO World Heritage site protecting rare snow leopards.',
    keyFauna: ['Snow Leopard', 'Red Panda', 'Himalayan Black Bear', 'Tibetan Wolf', 'Musk Deer', 'Blood Pheasant'],
    bestTime: 'April to May & September to December',
    safariTimings: 'Trekking/Exploration: Permitted with registered guides only; check-posts close by 4:00 PM.',
    tips: [
      'Sikkim\'s only national park is a high-altitude trekking wonderland; hire an authorized local guide and yak-handlers from Yuksom.',
      'Obtain the required inner line permits and national park entry passes from the forest department office in Gangtok or Melli.',
      'Respect the sacred nature of the peaks, lakes, and caves; local communities consider Mount Khangchendzonga as their guardian deity.'
    ],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200'
  },
  // Tamil Nadu National Park
  {
    id: 'mudumalai-national-park',
    name: 'Mudumalai National Park & Tiger Reserve',
    stateId: 'tamil-nadu',
    description: 'A lush sanctuary at the tri-junction of Tamil Nadu, Karnataka, and Kerala, supporting the largest wild Asian Elephant population in India.',
    keyFauna: ['Asian Elephant', 'Bengal Tiger', 'Indian Leopard', 'Gaur (Indian Bison)', 'Dhole (Wild Dog)', 'Malabar Giant Squirrel'],
    bestTime: 'October to May',
    safariTimings: 'Morning: 6:30 AM - 9:00 AM, Afternoon: 3:30 PM - 6:00 PM',
    tips: [
      'Book the official Tamil Nadu Forest Department bus or jeep safari from Theppakadu office online to access the core wilderness.',
      'Visit the historic Theppakadu Elephant Camp (established in 1910), one of India\'s oldest elephant rehabilitation and feeding centers.',
      'Avoid driving through the Sigur ghat road after dark as elephant herds frequently cross the mountain bends at night.'
    ],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  // Telangana National Park
  {
    id: 'mrugavani-national-park',
    name: 'Mrugavani National Park',
    stateId: 'telangana',
    description: 'A pristine urban forest refuge protecting hundreds of playful spotted deer, wild boars, and diverse flora.',
    keyFauna: ['Spotted Deer (Chital)', 'Indian Hare', 'Sambar Deer', 'Monitor Lizard', 'Python', 'Civet Cat', 'Sarus Crane'],
    bestTime: 'October to March',
    safariTimings: 'Tuesday to Sunday: 9:00 AM - 5:00 PM (Closed on Mondays)',
    tips: [
      'Take the eco-friendly battery-operated bus tour organized by the forest department to view spotted deer grazing in the open glades.',
      'Climb the watchtower located inside the park for an elevated, panoramic view of the dense canopy and surrounding rocky terrain.',
      'Visit the Environmental Education Center and museum at the entrance to learn about local wildlife conservation initiatives.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Tripura National Park
  {
    id: 'clouded-leopard-national-park',
    name: 'Clouded Leopard National Park',
    stateId: 'tripura',
    description: 'A dense, evergreen forest sanctuary nestled within Sepahijala Wildlife Sanctuary, dedicated to conserving the rare, arboreal clouded leopard.',
    keyFauna: ['Clouded Leopard', 'Phayre\'s Leaf Monkey (Spectacled Langur)', 'Capped Langur', 'Pig-tailed Macaque', 'Slow Loris', 'Barking Deer'],
    bestTime: 'November to March',
    safariTimings: 'Morning: 9:00 AM - 4:00 PM (Closed on Fridays)',
    tips: [
      'Keep a keen eye on the high canopy branches; clouded leopards are highly agile arboreal hunters that spend most of their time in trees.',
      'Look for the rare Spectacled Langur (Phayre\'s Leaf Monkey), a shy primate with striking white rings around its eyes, which is Tripura\'s state animal.',
      'Walk along the tranquil boating lake inside Sepahijala to view the rich wetland avian species in the winter mornings.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Uttar Pradesh National Parks
  {
    id: 'dudhwa-national-park',
    name: 'Dudhwa National Park',
    stateId: 'uttar-pradesh',
    description: 'A lush, pristine swamp forest and tall grassland sanctuary along the Indo-Nepal border, protecting tigers, rhinos, and swamp deer.',
    keyFauna: ['Royal Bengal Tiger', 'One-horned Rhinoceros', 'Swamp Deer (Barasingha)', 'Leopard', 'Hispid Hare', 'Sloth Bear'],
    bestTime: 'November to April',
    safariTimings: 'Morning: 6:00 AM - 9:30 AM, Afternoon: 3:00 PM - 6:30 PM',
    tips: [
      'Pre-book a jeep safari online for the Sonaripur or Salukapur zones to see the flourishing One-horned Rhinoceros population.',
      'Look closely along the wet grasslands for the rare Barasingha (Swamp Deer), featuring elegant 12-tined antlers.',
      'Rent a local forest department guide who can help identify over 400 species of migratory wetland birds near Bankey Tal.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  // West Bengal National Parks
  {
    id: 'sundarbans-national-park',
    name: 'Sundarbans National Park',
    stateId: 'west-bengal',
    description: 'The world\'s largest coastal mangrove forest delta, famous as the home of the unique swimming Royal Bengal Tigers.',
    keyFauna: ['Royal Bengal Tiger', 'Estuarine Crocodile', 'Irrawaddy Dolphin', 'Olive Ridley Turtle', 'Water Monitor Lizard', 'Spotted Deer'],
    bestTime: 'September to March',
    safariTimings: 'Boat Safaris: 7:00 AM - 5:00 PM daily (No night navigation allowed)',
    tips: [
      'Charter a registered double-decker motorized boat from Sajnekhali to navigate the narrow silt-water channels.',
      'Climb the watchtowers at Sudhanyakhali or Dobanki to safely observe tigers or deer drinking from sweet-water ponds.',
      'Look for the giant Water Monitor Lizards basking on the slippery mud banks during low tide.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  {
    id: 'singalila-national-park',
    name: 'Singalila National Park',
    stateId: 'west-bengal',
    description: 'A high-altitude alpine park offering panoramic views of the Everest and Kanchenjunga ranges, famous for wild red pandas.',
    keyFauna: ['Red Panda', 'Himalayan Black Bear', 'Clouded Leopard', 'Leopard Cat', 'Satyr Tragopan', 'Barking Deer'],
    bestTime: 'March to May (for Rhododendrons) and October to December',
    safariTimings: 'Jeep Safaris: 8:00 AM - 4:00 PM (Depends on weather)',
    tips: [
      'Take a vintage British Land Rover from Manebhanjan to Sandakphu (11,929 ft), the highest point in West Bengal.',
      'Scan the mossy bamboo branches in spring to spot the shy, chestnut-furred Red Panda in its natural habitat.',
      'Look out for the striking pink and red Rhododendron blossoms that cover the mountain slopes in April.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200'
  },
  // Andaman & Nicobar National Parks
  {
    id: 'mahatma-gandhi-marine-national-park',
    name: 'Mahatma Gandhi Marine National Park',
    stateId: 'andaman-nicobar',
    description: 'A vibrant marine sanctuary encompassing 15 tropical islands, conserving coral reefs and green sea turtles.',
    keyFauna: ['Green Sea Turtle', 'Dugong (Sea Cow)', 'Clown Fish', 'Manta Ray', 'White-bellied Sea Eagle', 'Black Tip Reef Shark'],
    bestTime: 'November to April',
    safariTimings: 'Boat trips: 8:30 AM to 2:30 PM (Closed on Mondays)',
    tips: [
      'Take a glass-bottom boat ride from Wandoor Jetty to see the pristine coral gardens without getting wet.',
      'Get a special permit for Jolly Buoy or Red Skin Island for incredible snorkeling amongst tropical reef fish.',
      'Do not touch or step on live corals, and carry back all your plastic waste to keep the marine reserve pristine.'
    ],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200'
  },
  // Chandigarh National Parks
  {
    id: 'sukhna-wildlife-sanctuary',
    name: 'Sukhna Wildlife Sanctuary',
    stateId: 'chandigarh-ut',
    description: 'A peaceful wildlife reserve at the foothills of the Shivalik Hills, critical for conserving migratory birds and deer.',
    keyFauna: ['Sambar Deer', 'Barking Deer (Kakar)', 'Leopard', 'Golden Jackal', 'Wild Boar', 'Indian Peafowl'],
    bestTime: 'October to March',
    safariTimings: 'Walking Permits: Sunrise to Sunset daily (Requires permit from Forest Department)',
    tips: [
      'Obtain a daily walking entry permit from the Chandigarh Forest Department before arriving at the sanctuary gates.',
      'Walk silently along the nature trail to spot herds of majestic Sambar Deer grazing in the early morning.',
      'Bring binoculars to observe hundreds of species of woodland and wetland birds nesting around the watering holes.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Jammu & Kashmir National Parks
  {
    id: 'dachigam-national-park',
    name: 'Dachigam National Park',
    stateId: 'jammu-kashmir',
    description: 'A beautiful high-altitude mountain sanctuary that is the last refuge of the critically endangered Hangul (Kashmiri Stag).',
    keyFauna: ['Hangul (Kashmiri Stag)', 'Himalayan Black Bear', 'Leopard', 'Musk Deer', 'Yellow-throated Marten', 'Kallij Pheasant'],
    bestTime: 'May to August (Upper Dachigam) and September to December (Lower Dachigam)',
    safariTimings: 'Nature Walk: 8:00 AM to 5:00 PM (Requires Wildlife Department entry permit)',
    tips: [
      'Apply for entry permits in advance through the Jammu and Kashmir Wildlife Department, as visitor numbers are strictly capped.',
      'Hire an experienced naturalist guide at the gate to increase your chances of spotting the elusive Hangul stag.',
      'Do not bring loud colors or plastic bags; Dachigam is a strictly protected, clean, zero-plastic ecological preserve.'
    ],
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200'
  },
  // Ladakh National Parks
  {
    id: 'hemis-national-park',
    name: 'Hemis National Park',
    stateId: 'ladakh-ut',
    description: 'Asia\'s largest protected national park and the snow leopard capital of the world, situated in the cold trans-Himalayan desert.',
    keyFauna: ['Snow Leopard', 'Tibetan Wolf', 'Eurasian Brown Bear', 'Red Fox', 'Bharal (Blue Sheep)', 'Golden Eagle'],
    bestTime: 'January to March (for Snow Leopard tracking) and May to September (for high altitude trekking)',
    safariTimings: 'Trekking Permits: 24 hours open (Requires wildlife fee and registration at Leh)',
    tips: [
      'Plan your snow leopard tracking expedition with certified local Ladakhi trackers, who possess unmatched knowledge of animal trails.',
      'Prepare for sub-zero temperatures and high-altitude homestays in rustic villages like Rumbak or Kaya.',
      'Always carry high-altitude mountain sunglasses, sunscreen, and plenty of warm layers, as the wind chill is extreme.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200'
  },
  {
    id: 'bandhavgarh',
    name: 'Bandhavgarh National Park',
    stateId: 'madhya-pradesh',
    description: 'Renowned for having the highest density of Royal Bengal Tigers in India, set against high cliffs and a historic hill fortress in Madhya Pradesh.',
    keyFauna: ['Royal Bengal Tiger', 'Indian Leopard', 'Sambar Deer', 'Chital', 'Nilgai', 'Barking Deer', 'Chousingha'],
    bestTime: 'October to June (Tigers are best spotted in April to June near dry grasslands and waterbeds)',
    safariTimings: 'Morning: 6:00 AM - 11:00 AM, Afternoon: 3:00 PM - 6:00 PM (Closed on Wednesday afternoons)',
    tips: [
      'Book your safari in Tala Zone, the oldest and most scenic zone, which also features the historic Bandhavgarh Fort backdrop.',
      'Always look up at the cliffs; leopards and vultures frequently nest on the sheer vertical sandstone walls.',
      'Check out the ruins of the 2,000-year-old Bandhavgarh Fort and the giant monolithic rock carvings of Lord Vishnu in the reclining posture (Shesh Shaiya).'
    ],
    image: 'https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=1200'
  },
  {
    id: 'valley-of-flowers',
    name: 'Valley of Flowers National Park',
    stateId: 'uttarakhand',
    description: 'A breathtaking high-altitude Himalayan valley in Uttarakhand that blooms with thousands of species of wild alpine flowers against snowy peaks.',
    keyFauna: ['Asiatic Black Bear', 'Snow Leopard', 'Musk Deer', 'Red Fox', 'Blue Sheep', 'Himalayan Monal'],
    bestTime: 'July to September (This is when the monsoon rain prompts the spectacular, full bloom of the valley)',
    safariTimings: 'Trekking Entry: 7:00 AM - 2:00 PM (Visitors must exit the park by 5:00 PM; no overnight camping is allowed)',
    tips: [
      'The valley is only accessible on foot via a scenic 17 km trek starting from Govindghat. Hire local porters or mules if needed.',
      'Start your daily trek from Ghangaria early at 6:00 AM to spend maximum time in the flower-filled meadows before the afternoon clouds roll in.',
      'Carry high-quality rain gear, waterproof boots, and protective covers for cameras, as sudden downpours are common.'
    ],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200'
  },
  {
    id: 'keoladeo',
    name: 'Keoladeo National Park',
    stateId: 'rajasthan',
    description: 'A spectacular UNESCO World Heritage wetland sanctuary, formerly known as Bharatpur Bird Sanctuary, hosting thousands of rare migratory and nesting waterfowl.',
    keyFauna: ['Siberian Crane', 'Sarus Crane', 'Painted Stork', 'Greater Spotted Eagle', 'Nilgai', 'Indian Rock Python'],
    bestTime: 'October to February (Peak winter is when massive flocks of migratory birds arrive from Siberia and Central Asia)',
    safariTimings: '6:00 AM to 6:00 PM daily',
    tips: [
      'The park is completely vehicle-free; the best way to explore is by hiring a local bicycle or taking a cycle rickshaw, whose riders are highly trained birding guides.',
      'Opt for a peaceful, early morning boat ride on the wetland channels for close-up views of nesting herons and storks.',
      'Check out the Python Point located deep along the main trail to spot giant Indian rock pythons sunbathing during cold winter afternoons.'
    ],
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1200'
  },
  {
    id: 'manas',
    name: 'Manas National Park',
    stateId: 'assam',
    description: 'A stunning UNESCO World Heritage biosphere reserve on the Himalayan foothills of Assam, where the Manas River flows through dense grasslands and forests.',
    keyFauna: ['Assam Roofed Turtle', 'Hispid Hare', 'Golden Langur', 'Pygmy Hog', 'Wild Water Buffalo', 'Asian Elephant', 'Bengal Tiger'],
    bestTime: 'November to April (Excellent weather and high visibility of grasslands)',
    safariTimings: 'Morning: 6:00 AM - 9:00 AM, Afternoon: 2:00 PM - 5:00 PM',
    tips: [
      'Take a thrilling river-rafting trip down the turquoise Manas River, which drifts past untouched forests with stunning views of the Bhutanese hills.',
      'Hire a specialized local guide to help search for the rare and critically endangered Pygmy Hog and the beautiful Golden Langurs in the forest canopy.',
      'Combine your park safaris with a visit to the local Bodo tribal villages to experience their unique culture and warm hospitality.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  }
];

// UNESCO World Heritage Sites
export const HERITAGE_SITES: HeritageSite[] = [
  {
    id: 'taj-mahal-unesco',
    name: 'Taj Mahal',
    stateId: 'uttar-pradesh',
    yearDeclared: 1983,
    description: 'An universally admired masterpiece of world heritage, representing the pinnacle of Mughal artistic execution.',
    significance: 'Declared a World Heritage site for being the finest architectural achievement of the entire Indo-Islamic empire, blending Persian, Turkish, and Indian decorative arts.',
    visitingTips: [
      'Take a slow walk through the monumental red sandstone gateway to see the Taj frame perfectly in the dark arch.',
      'The white Makrana marble reflects different colors depending on the time of day—soft pink at dawn, blinding white at noon, and golden at sunset.'
    ],
    image: 'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200'
  },
  {
    id: 'hampi-monuments',
    name: 'Group of Monuments at Hampi',
    stateId: 'karnataka',
    yearDeclared: 1986,
    description: 'The monumental boulder-strewn ruins of the final Hindu Kingdom of Vijayanagara, spread across 16 square miles.',
    significance: 'Hampi represents the peak of Dravidian religious architecture, featuring the active Virupaksha Temple, the legendary Stone Chariot, and sophisticated royal military aqueducts.',
    visitingTips: [
      'Rent a bicycle or coracle boat to cross the scenic Tungabhadra River to access different parts of the ruins.',
      'Climb Matanga Hill at 5:00 AM for an unforgettable view of the temple towers emerging from the morning mist.'
    ],
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=1200'
  },
  {
    id: 'sun-temple-konark-unesco',
    name: 'Sun Temple, Konark',
    stateId: 'odisha',
    yearDeclared: 1984,
    description: 'A monumental 13th-century stone temple sculpted as a colossal chariot of the Sun God, Surya.',
    significance: 'A masterpiece of Kalinga architecture, the temple features 24 massive, elaborately carved stone wheels that act as highly accurate sundials to calculate time to the minute.',
    visitingTips: [
      'Hire an official local guide to explain how the shadow of the wheels calculates the precise time of day.',
      'Examine the detailed carvings of animals, dancers, and mythical wars decorating the basement walls.'
    ],
    image: 'https://images.unsplash.com/photo-1608958220922-db1de63f2378?q=80&w=1200'
  },
  {
    id: 'mahabodhi-temple-unesco',
    name: 'Mahabodhi Temple Complex at Bodh Gaya',
    stateId: 'bihar',
    yearDeclared: 2002,
    description: 'The holiest shrine of Buddhism, marking the precise spot where Gautama Buddha attained supreme enlightenment under the Bodhi tree.',
    significance: 'One of the earliest and most complete brick structures from the late Gupta period (5th-6th century AD), representing the ultimate spiritual heartland for Buddhist pilgrims worldwide.',
    visitingTips: [
      'Sit in silent meditation under the sacred Bodhi Tree on the western side of the temple, a direct descendant of the original tree.',
      'Leave all mobile phones and electronic devices in the free lockers outside, as they are strictly prohibited inside the complex.'
    ],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200'
  },
  {
    id: 'nalanda-university-unesco',
    name: 'Archaeological Site of Nalanda Mahavihara',
    stateId: 'bihar',
    yearDeclared: 2016,
    description: 'The monumental ruins of the world\'s oldest residential monastic university, which flourished from the 5th to 12th centuries AD.',
    significance: 'A supreme center of learning that housed over 10,000 students and 2,000 teachers from across Asia, representing the golden intellectual era of ancient India under Gupta and Pala kings.',
    visitingTips: [
      'Hire a licensed local archaeologist-guide at the ticket counter to explain the brilliant underground heating and drainage networks of the classrooms.',
      'Visit the nearby Nalanda Archaeological Museum to see beautiful stone sculptures, bronze figures, and ancient seals excavated from the site.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Goa Heritage Site
  {
    id: 'churches-and-convents-of-goa',
    name: 'Churches and Convents of Old Goa',
    stateId: 'goa',
    yearDeclared: 1986,
    description: 'A magnificent collection of religious monuments in Old Goa, representing the spread of Manueline and Baroque architectures in Asia.',
    significance: 'Serving as the capital of the Portuguese empire in the East from the 16th to 18th centuries, these grand monuments (including the Basilica of Bom Jesus and Se Cathedral) influenced art, architecture, and religious painting across Asia. They were constructed using rich local laterite and decorated with imported European marbles and gilded wood.',
    visitingTips: [
      'Take an afternoon walking tour starting at the colossal Se Cathedral (one of Asia\'s largest churches) and ending at the Basilica of Bom Jesus across the street.',
      'Wear respectful clothing that covers shoulders and knees, as these are active holy sites.'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Gujarat Heritage Site
  {
    id: 'champaner-pavagadh-archaeological-park',
    name: 'Champaner-Pavagadh Archaeological Park',
    stateId: 'gujarat',
    yearDeclared: 2004,
    description: 'A massive, largely unexcavated concentration of archaeological ruins stretching from a high volcanic hill into a historic Hindu-Muslim capital city.',
    significance: 'It is the only complete, unchanged pre-Mughal Islamic city in India, built by Sultan Mahmud Begada in the late 15th century. It features ancient stepwells, palaces, military fortifications, water reservoirs, and spectacular mosques like the Jami Masjid, which showcases a beautiful synthesis of Hindu and Islamic architectural details.',
    visitingTips: [
      'Take the ropeway up Pavagadh Hill to visit the sacred Kalika Mata Temple perched on the highest volcanic peak.',
      'Spend at least 3 hours exploring the massive stone carvings and minarets of the Jami Masjid and Shehar ki Masjid in the plains.'
    ],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200'
  },
  // Himachal Pradesh Heritage Site
  {
    id: 'kalka-shimla-railway-unesco',
    name: 'Kalka-Shimla Toy Railway',
    stateId: 'himachal-pradesh',
    yearDeclared: 2008,
    description: 'A 96-kilometer historic narrow-gauge railway line winding up steep pine slopes, tunnels, and historic multi-arched stone bridges.',
    significance: 'Completed in 1903 to connect Shimla with the plains, this narrow-gauge railway is a marvelous feat of mountain engineering. It climbs from 2,152 feet to 6,811 feet, passing through 103 brick-lined tunnels, 864 elegant multi-tiered stone arch viaducts, and over 900 spectacular curves.',
    visitingTips: [
      'Book your tickets on the Shivalik Deluxe Express or the Vistadome coach weeks in advance, as seats are extremely popular.',
      'Keep your camera ready as the train crosses the historic multi-tiered arch Bridge No. 541 near Kanoh station.'
    ],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200'
  },
  // Karnataka Heritage Site
  {
    id: 'pattadakal-monuments',
    name: 'Group of Monuments at Pattadakal',
    stateId: 'karnataka',
    yearDeclared: 1987,
    description: 'A spectacular complex of 7th and 8th-century Chalukya dynasty temples showcasing a harmonious blend of Northern (Nagara) and Southern (Dravidian) architectural styles.',
    significance: 'Pattadakal represents the high point of eclectic art under the Chalukya dynasty. It includes nine Hindu temples and a Jain sanctuary, with the Virupaksha Temple being the grandest, built by Queen Lokamahadevi to commemorate her husband\'s victory over the Pallavas.',
    visitingTips: [
      'Examine the detailed relief carvings of scenes from the Ramayana, Mahabharata, and Bhagavata Purana on the stone pillars inside Virupaksha Temple.',
      'Visit during the annual Chalukya Utsav classical dance festival in January to see the temples illuminated and hosting traditional dancers.'
    ],
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=1200'
  },
  // Kerala, Karnataka, Tamil Nadu, Maharashtra Heritage Site
  {
    id: 'western-ghats-heritage',
    name: 'Western Ghats (UNESCO World Heritage)',
    stateId: 'kerala',
    additionalStateIds: ['karnataka', 'tamil-nadu', 'maharashtra'],
    yearDeclared: 2012,
    description: 'A globally recognized mountain range biodiversity hotspot, older than the Himalayas, representing exceptional geomorphic and biophysical processes.',
    significance: 'Inscribed in 2012, the Western Ghats is one of the world\'s eight "hottest hotspots" of biological diversity. The mountain range runs parallel to India\'s western coast through Maharashtra, Karnataka, Kerala, and Tamil Nadu. It contains an exceptionally high level of endemism, hosting over 325 globally threatened species of flora, fauna, birds, amphibians, reptiles, and fish, and acts as the crucial water tower of South India.',
    visitingTips: [
      'Hike through Silent Valley National Park in Kerala to witness exceptionally pristine tropical rainforests.',
      'Explore the spectacular high-altitude shola grassland-forest ecosystems of Kudremukh in Karnataka or the Nilgiris in Tamil Nadu.',
      'Visit the Kaas Plateau in Maharashtra during August-September to see a spectacular carpet of endemic wildflowers blooming on a volcanic plateau.'
    ],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200'
  },
  // Madhya Pradesh Heritage Site
  {
    id: 'khajuraho-monuments',
    name: 'Khajuraho Group of Monuments',
    stateId: 'madhya-pradesh',
    yearDeclared: 1986,
    description: 'A magnificent complex of medieval Hindu and Jain temples famed for their Nagara-style architecture and expressive, exquisite stone sculptures.',
    significance: 'Built by the Chandela Dynasty between 950 and 1050 AD, these sandstone temples are celebrated for their highly detailed sculptures that capture 11th-century Indian life, spiritual devotion, celestial dancers, and iconic erotic art, representing an advanced synthesis of spiritualism and secular life.',
    visitingTips: [
      'Begin your tour at the massive Kandariya Mahadeva Temple, which features an imposing 31-meter spire modeled on Mount Kailash.',
      'Attend the spectacular light and sound show in the evening, narrated in the voice of the legendary king Chandela, to learn the mythological history.'
    ],
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200'
  },
  // Maharashtra Heritage Site
  {
    id: 'ellora-caves-unesco',
    name: 'Ellora Caves',
    stateId: 'maharashtra',
    yearDeclared: 1983,
    description: 'A breathtaking hand-carved rock-cut complex of 34 monasteries and temples, showcasing centuries of absolute religious harmony.',
    significance: 'Carved out of the basalt cliffs of the Charanandri Hills, Ellora features Buddhist, Hindu, and Jain cave temples built adjacent to each other. Its crowning glory is Cave 16, the monolithic Kailash Temple, which was carved from a single rock block from top to bottom, requiring the removal of 200,000 tonnes of basalt over a century.',
    visitingTips: [
      'Spend at least two hours studying the dramatic rock-cut sculptures of Ravana shaking Mount Kailash inside Cave 16.',
      'Visit early in the morning (8:00 AM) to beat the heat and walk through the peaceful, green cave gardens with fewer tourists.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Manipur Heritage Site (Tentative UNESCO)
  {
    id: 'loktak-lake-conservation-unesco',
    name: 'Keibul Lamjao Conservation Area & Loktak Lake (Tentative UNESCO)',
    stateId: 'manipur',
    yearDeclared: 2016,
    description: 'An extraordinary wetland landscape on the UNESCO Tentative World Heritage list, featuring floating circular islands of peat and rare wildlife.',
    significance: 'Loktak Lake is the largest freshwater lake in Northeast India, famous for its "phumdis"—floating mats of soil, vegetation, and organic matter. The largest phumdi forms the Keibul Lamjao National Park, which is the only natural home in the world for the endangered, dancing Sangai deer.',
    visitingTips: [
      'Hire a local conservationist guide to navigate the lake channels and explain how the indigenous fishermen (Meitei) live on floating reed huts called phumsang.',
      'The best time to photograph the deer is at sunrise, when the golden light cuts through the lake mist, creating a dreamlike landscape.'
    ],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200'
  },
  // Meghalaya Heritage Site
  {
    id: 'cherrapunji-living-root-bridges-heritage',
    name: 'Cherrapunji Living Root Bridges',
    stateId: 'meghalaya',
    yearDeclared: 2022, // Tentative UNESCO list
    description: 'Breathtaking, hand-grown living suspension bridges woven from the aerial roots of rubber fig trees over generations.',
    significance: 'These incredible bio-engineering marvels represent a centuries-old sustainable relationship between the indigenous Khasi people and their humid rainforest environment. Unlike steel or concrete, these bridges grow stronger and more resilient over time as the root network thickens.',
    visitingTips: [
      'Take the challenging 3,000-step trek down the mountain to visit the Double Decker Living Root Bridge in Nongriat village.',
      'Wear comfortable, slip-resistant shoes; the damp rock steps are highly polished and can be slippery due to the high humidity.',
      'Spend a night at a local homestay in Nongriat village to experience traditional Khasi food and hear stories of how the bridges are grown and maintained.'
    ],
    image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=1200'
  },
  // Mizoram Heritage Site
  {
    id: 'reiek-heritage-village',
    name: 'Reiek Heritage Village',
    stateId: 'mizoram',
    yearDeclared: 2012,
    description: 'A beautifully preserved traditional Mizo village showcasing authentic thatch huts, ancient warrior tools, and Mizo lifestyle.',
    significance: 'Constructed on the scenic slopes of the Reiek Mountain, this heritage site preserves the architectural style of various Mizo clans. It serves as an active living museum of the pre-Christian Mizo lifestyle, celebrating the indigenous folklore, songs, and traditional customs of the hills.',
    visitingTips: [
      'Take a short 30-minute walk up from the heritage village to the Reiek Peak edge for a 360-degree panoramic view of the Bangladesh plains.',
      'Visit in October to witness the vibrant Anthurium Festival, where local tribes gather in full traditional attire with beautiful hand-woven shawls.',
      'Step inside the Chieftain\'s House (the largest hut in the village) to see the authentic tiger skins, warrior spears, and clay pots.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // Nagaland Heritage Site
  {
    id: 'kisama-heritage-village',
    name: 'Kisama Heritage Village',
    stateId: 'nagaland',
    yearDeclared: 2000,
    description: 'A beautiful open-air cultural amphitheater showcasing traditional wooden Morungs (tribal houses) representing all 16 Naga tribes.',
    significance: 'Serving as the official permanent venue for the legendary Hornbill Festival, Kisama (short for Kigwema and Phesama villages) acts as the custodian of Naga tribal heritage, featuring authentic tribal architecture, monolithic wood-carving pillars, and ceremonial platforms.',
    visitingTips: [
      'Walk inside the individual tribal Morungs (dormitories) to admire the massive hand-carved wooden pillars, animal skull decorations, and massive wooden log drums.',
      'Plan your visit during the first ten days of December to catch the world-famous Hornbill Festival, where you can watch vibrant dances and taste local bamboo-shoot delicacies.',
      'Visit the WWII Museum located within the heritage village complex to see historic battlefield artifacts, weapons, and soldier diaries.'
    ],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200'
  },
  // Odisha Heritage Site
  {
    id: 'konark-sun-temple-heritage',
    name: 'Konark Sun Temple',
    stateId: 'odisha',
    yearDeclared: 1984,
    description: 'A colossal 13th-century stone temple sculpted as the chariot of the Sun God, featuring intricately carved sundial wheels.',
    significance: 'Representing the peak of Kalinga temple architecture, the monument features 24 massive stone wheels that act as highly accurate sundials to calculate time. It was designed by King Narasimhadeva I of the Eastern Ganga Dynasty and is famous for its intricate carvings of mythical beasts, musicians, and dancers.',
    visitingTips: [
      'Hire an official local guide to explain how the shadow cast by the sundial wheel hubs calculates the precise local time of day.',
      'Examine the beautiful friezes depicting war elephants, giraffes (indicating historical trade routes), and mythological stories on the temple base.',
      'Attend the Konark Dance Festival in December, which takes place with the illuminated stone temple acting as the majestic open-air backdrop.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Punjab Heritage Site
  {
    id: 'the-golden-temple-heritage',
    name: 'The Golden Temple (Harmandir Sahib)',
    stateId: 'punjab',
    yearDeclared: 2004, // Status of Outstanding Universal Value
    description: 'The shimmering spiritual heart of Sikhism, sheathed in 750 kg of pure gold and surrounded by the serene Amrit Sarovar lake.',
    significance: 'Harmandir Sahib represents universal brotherhood, equality, and peace, featuring four entrances in all cardinal directions to welcome people of all faiths, castes, and creeds. It houses the legendary "Guru ka Langar", the world\'s largest free kitchen, feeding over 100,000 pilgrims daily with warm, freshly cooked meals.',
    visitingTips: [
      'Cover your head with a scarf and wash your feet in the holy water channels before stepping onto the white marble plaza.',
      'Participate in the "Palki Sahib" ceremony at 4:30 AM or 10:00 PM, where the holy book, Guru Granth Sahib, is carried in a golden palanquin.',
      'Sit quietly along the marble steps of the Amrit Sarovar (Pool of Nectar) to listen to the continuous, beautiful, live singing of Gurbani.'
    ],
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200'
  },
  // Rajasthan Heritage Site
  {
    id: 'hill-forts-rajasthan-heritage',
    name: 'Hill Forts of Rajasthan',
    stateId: 'rajasthan',
    yearDeclared: 2013,
    description: 'A magnificent series of six massive hilltop forts representing the defensive and artistic peak of Rajput architecture.',
    significance: 'The forts of Chittorgarh, Kumbhalgarh, Sawai Madhopur, Jhalawar, Jaipur (Amber), and Jaisalmer reflect the power, wealth, and sophisticated defensive engineering of the Rajput kingdoms between the 8th and 18th centuries. They feature kilometers of massive fortified stone walls, ancient water-harvesting systems, palaces, temples, and bustling inhabited bazars.',
    visitingTips: [
      'Visit Kumbhalgarh Fort to walk along its massive stone boundary wall, which is 36 kilometers long and is the second-longest continuous wall in the world after the Great Wall of China.',
      'Savor the beautiful architecture of Chittorgarh Fort, where the iconic nine-story "Vijay Stambha" (Tower of Victory) rises high above the landscape.',
      'Combine your fort visits with local historical walks; many forts still have thriving medieval artisan communities inside.'
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=1200'
  },
  // Sikkim Heritage Site
  {
    id: 'khangchendzonga-heritage',
    name: 'Khangchendzonga National Park',
    stateId: 'sikkim',
    yearDeclared: 2016,
    description: 'India\'s first and only Mixed World Heritage Site, celebrated for its mystical peaks, glaciers, and deep-rooted Buddhist guardian mythologies.',
    significance: 'The park contains the world\'s third-highest peak, Mount Khangchendzonga, which is considered sacred by local Lepcha and Bhutia tribes. It serves as a unique example of "sacred landscape conservation," where pristine natural ecosystems—including alpine forests, lakes, and glaciers—are protected through deep religious veneration and sacred texts.',
    visitingTips: [
      'Plan a high-altitude trek like the Goechala Trek (16,200 ft) to stand directly in front of the giant south face of Khangchendzonga.',
      'Look for the rare, vibrant prayer flags fluttering on mountain ridges; these are placed by local monks to bless the valley\'s waters and winds.',
      'Read about the "Beyul"—the hidden sacred valleys of Sikkim mentioned in ancient Buddhist texts—before starting your journey.'
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200'
  },
  // Tamil Nadu Heritage Site
  {
    id: 'great-living-chola-temples-heritage',
    name: 'Great Living Chola Temples',
    stateId: 'tamil-nadu',
    yearDeclared: 1987,
    description: 'A magnificent trio of grand Dravidian granite temples constructed by the Chola Empire, celebrating high-end sculpture and bronze casting.',
    significance: 'Comprising Brihadeeswarar Temple at Thanjavur, Brihadeeswarar Temple at Gangaikondacholapuram, and Airavatesvara Temple at Darasuram, this group represents the pinnacle of Tamil cultural, architectural, and expression. These temples remain active places of worship, hosting daily rituals and thousands of pilgrims since the 11th and 12th centuries.',
    visitingTips: [
      'Visit the Airavatesvara Temple at Darasuram to admire the detailed basalt sculptures depicting stories of 63 Nayanars (Shaivite saints).',
      'Admire the famous Chola bronzes housed in the museums; Chola craftsmen perfected the "lost wax" casting technique to create exquisite religious icons.',
      'Attend the evening deeparadhana (lamp waving ritual) in the main sanctuary to experience the authentic spiritual atmosphere.'
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800'
  },
  // Telangana Heritage Site
  {
    id: 'kakatiya-ramappa-temple-heritage',
    name: 'Kakatiya Rudreshwara (Ramappa) Temple',
    stateId: 'telangana',
    yearDeclared: 2021,
    description: 'A spectacular medieval temple built of light-weight floating bricks and finely carved basalt sculptures.',
    significance: 'Ramappa Temple represents the peak of Kakatiya dynasty craftsmanship under King Ganapati Deva. Built of sandstone with a roof of floating clay bricks to absorb seismic shocks, the temple is celebrated for its highly detailed bracket figures depicting graceful dancers carved out of hard black basalt stone, looking almost like polished wood.',
    visitingTips: [
      'Examine the basalt pillars inside the dark temple interior; they are polished so smooth that you can see your reflection.',
      'Look closely at the roof-line to see the small, highly porous clay bricks that are lightweight enough to float on water.',
      'Observe the massive stone Nandi bull sculpture at the entrance, which looks alert and appears to look back at the main deity from any angle.'
    ],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  // Tripura Heritage Site
  {
    id: 'unakoti-rock-carvings-heritage',
    name: 'Unakoti Rock Carvings',
    stateId: 'tripura',
    yearDeclared: 2022,
    description: 'A massive, ancient forest-hillside archaeological marvel showcasing hundreds of colossal rock-cut carvings.',
    significance: 'Dating back to the 7th-9th centuries under the Manikya Dynasty, Unakoti is a sacred, remote hillside pilgrimage site containing colossal bas-relief stone carvings of Hindu deities. The central head of Shiva, the Unakotiswara Kal Bhairava, stands 30 feet tall, with a magnificent 10-foot tall carved stone headdress, representing one of the finest examples of rock-cut sculpture in Northeast India.',
    visitingTips: [
      'Trek up the clean concrete steps built along the steep hillsides to view the massive carvings from different heights.',
      'Carry bottled water and wear light cotton clothing; the forest humidity can make climbing the hills warm in the afternoon.',
      'Walk down to the holy spring water channel at the base, which is believed to have therapeutic and spiritual healing properties.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  // Uttar Pradesh Heritage Sites
  {
    id: 'fatehpur-sikri-heritage',
    name: 'Fatehpur Sikri',
    stateId: 'uttar-pradesh',
    yearDeclared: 1986,
    description: 'A sprawling, perfectly preserved 16th-century imperial city built of red sandstone by Emperor Akbar.',
    significance: 'Fatehpur Sikri served as the short-lived capital of the Mughal Empire between 1571 and 1585. The monumental complex represents the high zenith of Hindu-Islamic courtly architecture, centering the Buland Darwaza—the massive 177-foot victory gate—as well as the delicate white marble tomb of Sufi saint Salim Chishti.',
    visitingTips: [
      'Hire a certified guide at the ticketing counter to understand the complex cooling water-duct systems of the royal palaces.',
      'Remove your shoes and tie a thread for wish-granting at the intricate marble jaali screens inside Salim Chishti\'s shrine.',
      'Take the environment-friendly electric shuttle bus from the main parking lot to the monument entrance to save energy.'
    ],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  {
    id: 'agra-fort-heritage',
    name: 'Agra Fort',
    stateId: 'uttar-pradesh',
    yearDeclared: 1983,
    description: 'A massive 16th-century red sandstone walled fortress-city housing the opulent royal chambers of Mughal Emperors.',
    significance: 'Agra Fort is one of the most historical Mughal fortresses in India, serving as the seat of power until the capital moved to Delhi. It features majestic palaces like Jahangir Mahal, Khas Mahal, and the octagonal Musamman Burj watchtower, where Emperor Shah Jahan was imprisoned by his son and died looking out at the Taj Mahal.',
    visitingTips: [
      'Observe the beautiful contrast of red sandstone and inlaid white marble as you enter through the grand Amar Singh Gate.',
      'Stand along the marble balconies of the Musamman Burj tower to catch a direct, framing view of the Taj Mahal in the distance.',
      'Look for the giant stone bathtub of Jahangir (Jahangiri Hauz) at the entrance, carved out of a single solid block of stone.'
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200'
  },
  // Uttarakhand Heritage Sites
  {
    id: 'valley-of-flowers-heritage',
    name: 'Nanda Devi & Valley of Flowers',
    stateId: 'uttarakhand',
    yearDeclared: 1988,
    description: 'A spectacular high-altitude wilderness area in the West Himalayas, famous for rare fauna and alpine flower meadows.',
    significance: 'This mixed forest site protects the pristine glaciated basin of Nanda Devi (India\'s second-highest peak, 25,643 ft) and the adjacent Valley of Flowers. It is renowned for its outstanding scenic beauty, endemic alpine flora, and for conserving endangered montane species such as the Snow Leopard and Himalayan Musk Deer.',
    visitingTips: [
      'Plan your trek precisely between July and August when the monsoon rains trigger the bloom of over 500 species of wild flowers.',
      'Start your daily 14km steep ascent from Govindghat early at 6:00 AM to ensure you can return before the afternoon fog rolls in.',
      'Hire a registered local porter or mule if you are carrying heavy camera equipment or require physical assistance on steep trails.'
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  // West Bengal Heritage Sites
  {
    id: 'darjeeling-railway-heritage',
    name: 'Darjeeling Himalayan Railway',
    stateId: 'west-bengal',
    yearDeclared: 1999,
    description: 'A monumental narrow-gauge mountain railway showcasing exceptional early colonial engineering.',
    significance: 'Affectionately called the "Toy Train", this 2-foot narrow gauge line represents a revolutionary engineering solution to the problem of establishing an effective rail link across a steep, mountainous terrain. It maintains its original features, utilizing loops and zig-zags to scale heights since 1881.',
    visitingTips: [
      'Combine your railway trip with a visit to the Darjeeling Railway Museum located at the historic Ghoom Station.',
      'Look out for the spectacular views of the snow-capped Kanchenjunga as the train winds around the manicured Batasia Loop garden.',
      'Book your tickets via the official IRCTC portal well in advance, as seats on the vintage steam runs are highly limited.'
    ],
    image: 'https://images.unsplash.com/photo-1557999852-c64a85fa0a98?q=80&w=1200'
  },
  {
    id: 'sundarbans-heritage',
    name: 'Sundarbans National Park',
    stateId: 'west-bengal',
    yearDeclared: 1987,
    description: 'The world\'s largest mangrove forest delta, containing exceptionally rich tidal and marine biodiversity.',
    significance: 'This massive mangrove ecosystem at the mouth of the Ganges and Brahmaputra rivers is a global biodiversity hot-spot. It is the only mangrove forest in the world inhabited by tigers, who have adapted an amphibious lifestyle of swimming in saline currents and hunting marine prey.',
    visitingTips: [
      'Obtain the mandatory forest entry permit and hire an official naturalist guide at the Canning or Sajnekhali forest offices.',
      'Keep your eyes on the muddy banks for the unique breathing roots (pneumatophores) of mangrove trees sticking straight out of the ground.',
      'Always keep your lifejacket on while traveling on the boats, and do not attempt to step off onto the highly muddy banks.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  // Andaman & Nicobar Heritage Sites
  {
    id: 'cellular-jail-heritage',
    name: 'Cellular Jail National Memorial',
    stateId: 'andaman-nicobar',
    yearDeclared: 2006,
    description: 'A historic three-story colonial prison complex constructed by the British to house Indian political prisoners.',
    significance: 'This historic site represents the somber saga of India\'s freedom struggle. Known colloquially as "Kala Pani", it is a supreme monument to the courage and sacrifices of hundreds of national revolutionaries who were subjected to solitary confinement and hard labor in the remote archipelago.',
    visitingTips: [
      'Visit the gallery containing authentic photographs, letters, and clothing of historic freedom fighters inside the main entrance.',
      'Attend the highly engaging Sound and Light show in the evening to hear the dramatized history of the island prison.',
      'Climb to the top of the central watchtower for a panoramic perspective of the sea channels surrounding Port Blair.'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Chandigarh Heritage Sites
  {
    id: 'capitol-complex-heritage',
    name: 'Capitol Complex, Chandigarh',
    stateId: 'chandigarh-ut',
    yearDeclared: 2016,
    description: 'A magnificent concrete administrative complex, representing the peak of modernist architecture.',
    significance: 'Comprising the Legislative Assembly, Secretariat, and High Court, the Chandigarh Capitol Complex was designed by Swiss-French architect Le Corbusier. It represents an exceptional contribution to the Modern Movement, showing the potential of raw concrete, geometric grids, and sculptural monuments like the Open Hand.',
    visitingTips: [
      'Register online at the official Chandigarh tourism portal at least 48 hours in advance to join the free guided architectural walk.',
      'Observe the iconic Open Hand Monument, standing 85 feet tall, designed to rotate with the wind and representing "giving and receiving peace".',
      'Admire the monumental concrete columns of the High Court, painted in bright primary colors that represent the vibrant spirit of modern India.'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Delhi UNESCO Heritage Sites
  {
    id: 'humayun-tomb-heritage',
    name: 'Humayun\'s Tomb',
    stateId: 'delhi-ut',
    yearDeclared: 1993,
    description: 'The first garden-tomb on the Indian subcontinent, built for the Mughal Emperor Humayun.',
    significance: 'Recognized for its outstanding universal value in introducing the Persian "charbagh" style and double-dome architecture to India. It served as a direct inspiration for the design of the Taj Mahal and represents a monumental milestone in Mughal building style.',
    visitingTips: [
      'Stroll slowly along the stone water channels that divide the garden into four symmetric quadrants.',
      'Visit the beautifully conserved Isa Khan octagonal tomb situated right within the outer gateway walls.',
      'Arrive during the late evening for soft sunlight on the beautiful red-and-white stone masonry.'
    ],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200'
  },
  {
    id: 'qutub-minar-heritage',
    name: 'Qutub Minar',
    stateId: 'delhi-ut',
    yearDeclared: 1993,
    description: 'A soaring five-story red sandstone tower covered in beautiful inscriptions, surrounded by Sultanate ruins.',
    significance: 'Built starting in 1199 AD, it is the tallest red brick minaret in the world. It shows the exquisite transition from early Hindu-Buddhist stone craftsmanship to early Islamic architectural engineering under the Delhi Sultanate.',
    visitingTips: [
      'Marvel at the un-rusted 4th-century iron pillar of King Chandragupta II in the mosque courtyard.',
      'Look closely at the intricate stalactite brackets carved on the underside of each balcony.',
      'Walk through the nearby beautiful arched sandstone gateways of the Alai Darwaza.'
    ],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200'
  },
  {
    id: 'red-fort-heritage',
    name: 'The Red Fort & Jama Masjid',
    stateId: 'delhi-ut',
    yearDeclared: 2007,
    description: 'The monumental palace fortress of Shahjahanabad, serving as the sovereign seat of the Mughal Empire. Constructed by Shah Jahan in 1648 of heavy red sandstone, it represents the zenith of Mughal creativity.',
    significance: 'Recognized by UNESCO for its exceptional fusion of Persian, Timurid, and Hindu art traditions, and its key symbolic role in the history and independence of India.',
    visitingTips: [
      'Browse through the historic, vaulted bazaar lane of Chhatta Chowk inside the main entrance to buy regional handicrafts.',
      'Visit the Mumtaz Mahal museum to see original Mughal swords, calligraphic manuscripts, and miniature paintings.',
      'Check out the beautiful white marble scales of justice carved in the royal Hammam chambers.'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'ajanta-caves-heritage',
    name: 'Ajanta Caves',
    stateId: 'maharashtra',
    yearDeclared: 1983,
    description: 'A spectacular horseshoe-shaped gorge containing 30 rock-cut Buddhist temple caves adorned with world-famous ancient fresco paintings.',
    significance: 'Dating from the 2nd century BC to the 6th century AD, the Ajanta Caves represent the highest masterpiece of ancient Buddhist art and classical painting. Carved out of a steep basalt cliff overlooking the Waghora River, the caves preserve exquisite, colorful tempera paintings depicting the Jataka tales, royal courts, and celestial beings, showing an unmatched mastery of depth, emotion, and fluid brushwork.',
    visitingTips: [
      'Examine Cave 1 to see the legendary, serene fresco of Bodhisattva Padmapani holding a blue lotus, a supreme masterpiece of world art.',
      'Visit Cave 26 to marvel at the giant, 29-foot long rock-cut sculpture of the Reclining Buddha achieving Mahaparinirvana.',
      'Climb up to the panoramic view deck across the river gorge to see the horseshoe curve of the entire cave complex.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'elephanta-caves-heritage',
    name: 'Elephanta Caves',
    stateId: 'maharashtra',
    yearDeclared: 1987,
    description: 'A collection of rock-cut cave temples dedicated to Lord Shiva, located on a forested island in the Arabian Sea near Mumbai.',
    significance: 'Dating to the 5th-8th centuries AD, the Elephanta Caves on Gharapuri Island are famous for their monumental basalt relief sculptures. The center of the main cave houses the colossal 20-foot tall Trimurti Sadashiva bust, representing Shiva as the Creator, Preserver, and Destroyer, which is considered a high masterpiece of Indian sculptural art.',
    visitingTips: [
      'Take the scenic, one-hour passenger ferry ride from the Gateway of India to Elephanta Island to enjoy views of the Mumbai harbour.',
      'Examine the colossal Trimurti sculpture in the central cave, observing how the soft light accentuates the three serene faces of Lord Shiva.',
      'Take the miniature toy train from the island jetty to the foot of the stone steps, and keep an eye out for wild monkeys along the path.'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  {
    id: 'cst-terminus-heritage',
    name: 'Chhatrapati Shivaji Maharaj Terminus',
    stateId: 'maharashtra',
    yearDeclared: 2004,
    description: 'A majestic Victorian Gothic Revival railway terminus in Mumbai, showcasing an extraordinary fusion of Italianate and traditional Indian architectural details.',
    significance: 'Designed by British architect F. W. Stevens and completed in 1888 to celebrate the Golden Jubilee of Queen Victoria, this terminal is an active, bustling rail gateway. It is characterized by its magnificent stone dome, turrets, pointed arches, and intricate stone carvings of local flora and fauna, serving as an exceptional example of late 19th-century railway engineering and imperial architecture.',
    visitingTips: [
      'View the terminus building at night when it is beautifully illuminated in multi-colored lights, highlighting its grand Gothic silhouettes.',
      'Look closely at the columns at the entrance gate to spot the beautifully carved stone figures of a Lion (Great Britain) and a Tiger (India).',
      'Step inside the grand central ticket hall to look up at the soaring vaulted ceilings, star-patterned stained-glass windows, and glazed tiles.'
    ],
    image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1200'
  },
  {
    id: 'victorian-gothic-mumbai-heritage',
    name: 'Victorian Gothic and Art Deco Ensembles of Mumbai',
    stateId: 'maharashtra',
    yearDeclared: 2018,
    description: 'A magnificent collection of 19th-century Victorian Neo-Gothic public buildings and 20th-century Art Deco commercial and residential buildings flanking the Oval Maidan in Mumbai.',
    significance: 'Inscribed in 2018, this ensemble represents two great waves of urban development in Mumbai. The Victorian public buildings (like the High Court and University of Mumbai) feature grand stone facades, soaring towers, and deep verandas designed for the tropical climate. Facing them across the Oval Maidan are spectacular Art Deco residential blocks (such as those along Marine Drive) that feature sleek curves, geometric patterns, and nautical themes, forming one of the largest concentrations of Art Deco architecture in the world.',
    visitingTips: [
      'Stroll along the western side of the Oval Maidan at sunset to see the dramatic contrast between the historic stone Victorian Gothic silhouettes on the east and the pastel-hued Art Deco lines on the west.',
      'Walk down the heritage stretch of Marine Drive to admire the uniform Art Deco apartment facades, paying special attention to the decorative grilles and curved balconies.',
      'Step inside the beautifully restored Eros Cinema or Regal Cinema to enjoy the glamorous retro interiors, representative of Bombay\'s golden movie era.'
    ],
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?q=80&w=1200'
  },
  {
    id: 'sanchi-stupa-heritage',
    name: 'Buddhist Monuments at Sanchi',
    stateId: 'madhya-pradesh',
    yearDeclared: 1989,
    description: 'One of the oldest stone structures in India, featuring the Great Stupa commissioned by Emperor Ashoka in the 3rd century BC.',
    significance: 'Sanchi is a unique, exceptionally preserved sanctuary of stupas, monolithic pillars, temples, and monasteries dating from the 3rd century BC to the 12th century AD. The Great Stupa is world-famous for its four grand stone gateways (toranas) covered in highly elaborate narrative reliefs depicting Buddha\'s life, miracles, and the Jataka tales, representing a sublime peak of early Buddhist art.',
    visitingTips: [
      'Start your walk around the Great Stupa in a clockwise direction (pradakshina) along the elevated stone balustrade pathway.',
      'Examine the North Gateway (Torana) to spot the beautifully carved stone bracket figure of the tree-goddess Shalabhanjika.',
      'Visit the Sanchi Archaeological Museum at the base of the hill to see the capital of the Ashoka pillar and beautiful Kushana-era sculptures.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'rani-ki-vav-heritage',
    name: 'Rani ki Vav (The Queen\'s Stepwell)',
    stateId: 'gujarat',
    yearDeclared: 2014,
    description: 'An exceptionally grand, subterranean stepwell on the banks of the Saraswati River, constructed as an inverted temple with seven levels of exquisite sculptural panels.',
    significance: 'Built in the 11th century by Queen Udayamati in memory of King Bhimdev I of the Solanki dynasty, Rani ki Vav represents the pinnacle of Maru-Gurjara architectural style. It is designed as an underground stepwell temple, decorated with over 500 principal sculptures and 1,000 minor ones depicting religious, mythological, and secular scenes, illustrating high technical virtuosity and artistic finesse.',
    visitingTips: [
      'Descend slowly through the seven underground levels, noticing how the temperature drops noticeably as you go deeper.',
      'Spend time on the fourth level to marvel at the large, central relief carving of Lord Vishnu reclining on the thousand-headed serpent Sheshanaga.',
      'Look at the side walls to see the intricate carvings that resemble Patola silk textile patterns, which local weavers still use today.'
    ],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200'
  },
  {
    id: 'historic-city-ahmedabad-heritage',
    name: 'Historic City of Ahmedabad',
    stateId: 'gujarat',
    yearDeclared: 2017,
    description: 'A 600-year-old walled city founded by Sultan Ahmad Shah, characterized by its unique "Pols"—fortified, interlocking residential neighborhoods with carved wooden houses.',
    significance: 'As the first city in India to be inscribed as a UNESCO World Heritage site, Ahmedabad is celebrated for its rich architectural heritage. It features exquisite mosques with intricate stone filigree windows (such as the Sidi Saiyyed Mosque), grand gates, stepwells, and traditional residential pols that represent a highly sophisticated system of community-based urban planning, climate-sensitive construction, and community security.',
    visitingTips: [
      'Wake up early to join the official Ahmedabad Municipal Corporation Heritage Walk through the narrow lanes of the old city.',
      'Examine the famous "Tree of Life" stone latticework window (jaali) at the Sidi Saiyyed Mosque, a marvel of delicate stone carving.',
      'Visit the peaceful Sabarmati Ashram on the riverbank to experience the simple living quarters of Mahatma Gandhi.'
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200'
  },
  {
    id: 'jantar-mantar-jaipur-heritage',
    name: 'Jantar Mantar, Jaipur',
    stateId: 'rajasthan',
    yearDeclared: 2010,
    description: 'An extraordinary open-air astronomical observatory containing 19 colossal stone instruments, including the world\'s largest stone sundial.',
    significance: 'Built by the Rajput king Sawai Jai Singh II in 1734, Jantar Mantar is the most complete and best-preserved of India\'s historic observatories. The instruments are designed in stone and marble to measure time, track the stars, and predict eclipses with astonishing accuracy, representing a high peak of scientific and architectural collaboration in the late Mughal era.',
    visitingTips: [
      'Look up at the massive, 27-meter high Vrihat Samrat Yantra, which calculates local time to an accuracy of two seconds.',
      'Hire an experienced, certified guide to demonstrate how shadows cast on the curved marble scales indicate coordinates and zodiac positions.',
      'Visit mid-day when the sun is directly overhead, as the shadows are sharpest and easiest to read on the instruments.'
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=1200'
  },
  {
    id: 'mahabalipuram-monuments-heritage',
    name: 'Group of Monuments at Mahabalipuram',
    stateId: 'tamil-nadu',
    yearDeclared: 1984,
    description: 'A stunning sanctuary of rock-cut temples, giant open-air reliefs, and monolithic stone rathas carved along the Coromandel coast by the Pallava Dynasty.',
    significance: 'Founded by the Pallava kings in the 7th and 8th centuries, Mahabalipuram was a bustling seaport. The monuments are world-famous for their architectural ingenuity: the monolithic rock-cut temples called "Rathas" (modeled on temple chariots), the intricate cave sanctuaries, the massive open-air relief "Descent of the Ganges" (or Arjuna\'s Penance) carved on two giant boulders, and the seashore temple which has withstood maritime storms for over 1,300 years.',
    visitingTips: [
      'Stand before the giant Arjuna\'s Penance relief to spot the lifelike stone-carved elephants, monkeys, and celestial beings climbing down a natural cleft.',
      'Visit the Shore Temple at sunrise, when the soft golden rays hit the weathered granite spires against the backdrop of the blue Bay of Bengal.',
      'Examine the Pancha Rathas—five monolithic structures carved out of a single long granite boulder, each showing a distinct architectural style.'
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200'
  },
  {
    id: 'nilgiri-mountain-railway-heritage',
    name: 'Nilgiri Mountain Railway',
    stateId: 'tamil-nadu',
    yearDeclared: 2005,
    description: 'A historic, blue-and-cream steam toy train that utilizes a unique rack-and-pinion system to scale the steep, lush Nilgiri hills of Ooty.',
    significance: 'Completed in 1908, the Nilgiri Mountain Railway is a narrow-gauge line that rises from 326 meters to 2,203 meters. As part of the UNESCO-inscribed Mountain Railways of India, it represents exceptional engineering, utilizing an alternate rack-and-pinion (Abt system) to negotiate the steepest rail gradient in Asia, passing through 16 tunnels, 250 bridges, and sweeping curves.',
    visitingTips: [
      'Book a seat in the first-class coach of the steam engine run from Mettupalayam to Coonoor for the most nostalgic, sensory travel experience.',
      'Observe how the steam engine is attached at the rear of the train to push it up the steep hills, rather than pulling it from the front.',
      'Look out for wild elephants, bison, and beautiful emerald tea plantations as the train moves at a leisurely speed of 13 km/h.'
    ],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'kaziranga-national-park-heritage',
    name: 'Kaziranga National Park',
    stateId: 'assam',
    yearDeclared: 1985,
    description: 'A pristine floodplain wildlife sanctuary on the banks of the Brahmaputra River, harboring the world\'s largest population of great Indian one-horned rhinoceroses.',
    significance: 'Inscribed in 1985, Kaziranga is one of the last unmodified natural areas in northeastern India. Its vast swampy grasslands, shallow lakes, and tropical moist forests host over 2,400 one-horned rhinos (two-thirds of the world\'s population). It is also a critical tiger reserve and safe haven for wild water buffalo, swamp deer, and thousands of migratory waterfowl.',
    visitingTips: [
      'Take an early morning safari or a specialized open-top jeep drive through the Kohora or Bagori range for close-up rhino sightings.',
      'Climb one of the tall wooden watchtowers at Sohola or Mihimukh for sweeping panoramic views of wetland birds and elephant herds.',
      'Visit the nearby Kaziranga National Orchid and Cultural Park to see hundreds of indigenous orchid species and traditional Assamese dances.'
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200'
  },
  {
    id: 'manas-wildlife-sanctuary-heritage',
    name: 'Manas Wildlife Sanctuary',
    stateId: 'assam',
    yearDeclared: 1985,
    description: 'A spectacular, biodiverse wildlife reserve situated in the Himalayan foothills, famous for its unique endemic species such as the pygmy hog and golden langur.',
    significance: 'Lying on a gentle slope in the foothills of the Himalayas, where the Manas River flows into the plains, Manas is a Tiger Reserve, Biosphere Reserve, and Elephant Reserve. It provides an exceptional habitat for highly threatened species that cannot be found anywhere else, including the pygmy hog, hispid hare, Assam roofed turtle, and the beautiful golden langur.',
    visitingTips: [
      'Go on a thrilling river rafting trip down the turquoise Manas River, drifting past pristine forests with views of the Bhutan hills.',
      'Stay at a forest eco-lodge near the Bansbari range to listen to the evening symphonies of tropical birds and insect chirps.',
      'Keep your binoculars ready to spot the rare, playful Golden Langurs high in the canopy along the riverbanks.'
    ],
    image: 'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=1200'
  },
  {
    id: 'great-himalayan-national-park-heritage',
    name: 'Great Himalayan National Park',
    stateId: 'himachal-pradesh',
    yearDeclared: 2014,
    description: 'A pristine high-altitude alpine conservation area in the Western Himalayas, characterized by high alpine peaks, meadows, and deep riverine forests.',
    significance: 'Inscribed in 2014, the Great Himalayan National Park Conservation Area (GHNPCA) is located in the western part of the Himalayan Mountains. It is particularly celebrated for protecting outstanding biodiversity, including 25 forest types and many threatened species such as the Western Tragopan, Snow Leopard, Himalayan Musk Deer, and Asiatic Black Bear.',
    visitingTips: [
      'All visits require written entry permits from the Great Himalayan National Park authorities at the Shamshi or Sai Ropa centers.',
      'Because there are no roads inside the park, exploration is solely through multi-day treks that require licensed local guides, porters, and camping equipment.',
      'The best months to visit are April to June (for high-altitude meadows) and October to November (for clear autumn skies and animal sightings).'
    ],
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  {
    id: 'keoladeo-national-park-heritage',
    name: 'Keoladeo National Park',
    stateId: 'rajasthan',
    yearDeclared: 1985,
    description: 'A legendary man-made wetland sanctuary and bird paradise that hosts thousands of nesting waterbirds and wintering migratory waterfowl.',
    significance: 'Formerly known as the Bharatpur Bird Sanctuary, Keoladeo is a masterpiece of eco-engineering. It is a key wintering area for palaearctic migratory waterfowl and was famed for hosting the critically endangered Siberian Cranes. The wetland is divided into managed sections that support over 375 bird species, python nesting sites, and rich wetland flora.',
    visitingTips: [
      'The park is entirely vehicle-free inside; hire a local cycle-rickshaw guide who is trained in bird identification to pedal you through the trails.',
      'Visit early in the morning during October to February, when the wetlands are teeming with nesting colonies of painted storks, herons, and egrets.',
      'Bring a high-quality pair of binoculars and climb the bird watchtowers located at Keoladeo Lake for bird\'s-eye views.'
    ],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  {
    id: 'bhimbetka-rock-shelters-heritage',
    name: 'Rock Shelters of Bhimbetka',
    stateId: 'madhya-pradesh',
    yearDeclared: 2003,
    description: 'A spectacular series of natural sandstone rock shelters showing the earliest traces of human life and artistic expression on the Indian subcontinent.',
    significance: 'Located in the foothills of the Vindhyan Mountains, the Rock Shelters of Bhimbetka span the Paleolithic, Mesolithic, and historic eras. The cave walls feature thousands of vivid mineral paintings depicting dancing, hunting, horse-riding, animal warfare, and religious rituals, showing a continuous cultural link of over 30,000 years.',
    visitingTips: [
      'Stand before the giant "Zoo Rock" (Shelter 4) to marvel at how prehistoric artists layered drawings of 16 different animal species over thousands of years.',
      'Visit in the early morning or late afternoon when the slanting sunlight illuminates the natural cave ceilings and the mineral pigments.',
      'Hire a local archaeological guide to help you read the layers of history, distinguishing hunter-gatherer art from medieval battle scenes.'
    ],
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200'
  },
  {
    id: 'jaipur-city-heritage',
    name: 'Jaipur City (The Pink City)',
    stateId: 'rajasthan',
    yearDeclared: 2019,
    description: 'An extraordinary grid-planned fortified city built in 1727, celebrated for its unique terracotta-pink facades, bustling bazaars, and opulent palaces.',
    significance: 'Unlike other medieval cities of the region, Jaipur was planned in 1727 based on ancient Vedic architectural principles and a grid-iron layout. Its wide avenues, pink-painted stone facades, magnificent city gates, and masterpieces like the Hawa Mahal and City Palace reflect a unique blend of Rajput military engineering and Mughal-inspired aesthetics.',
    visitingTips: [
      'Take a slow walking tour of the old walled city starting from Sireh Deori bazaar to observe the uniform facades and historical shops.',
      'Admire the Hawa Mahal (Palace of Winds) from the street level to appreciate its 953 small casements designed for royal women to observe daily life.',
      'Explore the busy Johari and Bapu Bazaars for beautiful traditional block prints, blue pottery, and precious gemstone jewelry.'
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=1200'
  },
  {
    id: 'dholavira-heritage',
    name: 'Dholavira: A Harappan City',
    stateId: 'gujarat',
    yearDeclared: 2021,
    description: 'A magnificent archaeological site of a Bronze Age Indus Valley Civilization metropolis, showcasing world-leading water management and urban planning.',
    significance: 'Located on Khadir Bet island in the Great Rann of Kutch, Dholavira was occupied from 3000 to 1500 BC. It is one of the most remarkable Harappan sites, featuring a grand fortified citadel, a multi-tiered layout, massive stone-cut reservoirs that gathered seasonal rainwater, a grand stadium, and a unique 10-sign signboard in the Harappan script.',
    visitingTips: [
      'Walk through the deep, smooth-cut stone-walled reservoirs to marvel at how Harappan engineers harvested every drop of fresh water in a salty desert.',
      'Visit the site museum to examine beautiful excavated ornaments, terracotta toys, beads, seals, and weight-measuring stones.',
      'Combine your trip with a visit to the white salt desert of the Rann of Kutch, especially during the sunset when the salt plains glow golden.'
    ],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200'
  }
];

// Experiential Deep Dives (Things to Do split into individual activity pages)
export const EXPERIENTIAL_ITEMS: ExperientialItem[] = [
  // Adventure Category
  {
    id: 'trekking-himalayas',
    category: 'adventure',
    title: 'High-Altitude Trekking in the Himalayas',
    tagline: 'Conquer the soaring paths of Ladakh, Himachal, and Uttarakhand.',
    description: 'Trekking in India takes you through some of the highest mountain ranges on earth. Walk past cold desert plateaus, alpine lakes, and ancient stone monasteries in Ladakh, or walk through pine forests and rhododendron-thick valleys in Himachal and Uttarakhand.',
    experienceDeepDive: 'From the legendary Chadar Trek (walking on frozen river ice in Ladakh) to the Valley of Flowers in Uttarakhand, trekking represents a physical and spiritual challenge. You cross high motorable passes at over 16,000 feet, sleeping under zero-pollution cosmic starry skies and drinking glacier water.',
    keyHighlights: [
      'Markha Valley Trek in Ladakh for ancient Buddhist culture',
      'Hampta Pass in Himachal for dramatic changes from green valleys to barren rocks',
      'Sleeping in traditional mud-brick mountain homestays'
    ],
    practicalInformation: 'Requires good physical fitness and multi-day acclimatization. Best seasons are June to September for Ladakh, and April to November for other Himalayan regions.',
    recommendedStates: ['ladakh-ut', 'himachal-pradesh', 'uttarakhand', 'sikkim'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'river-rafting-rishikesh',
    category: 'adventure',
    title: 'White Water Rafting on the Holy Ganges',
    tagline: 'Conquer the churning Class III & IV rapids of Rishikesh.',
    description: 'Where the Ganges rushes out of deep Himalayan gorges, it creates an adrenaline playground of high-volume, cold rapids. Rishikesh is the white water capital of India.',
    experienceDeepDive: 'Rafting here ranges from 9km to 36km runs, taking you through legendary rapids with names like "The Wall", "Roller Coaster", and "Golf Course". The river is emerald green, flanked by steep mountain walls and white sand beaches.',
    keyHighlights: [
      'Raft past historical suspended steel bridges Ram Jhula and Lakshman Jhula',
      'Camp in tents on sandy river beaches under the stars',
      'Cliff jumping into the refreshing, ice-cold mountain water'
    ],
    practicalInformation: 'Suitable for beginners and professionals depending on the stretch chosen. Life jackets and professional guides are mandatory. Season runs from September to June.',
    recommendedStates: ['uttarakhand', 'himachal-pradesh'],
    image: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?q=80&w=1200'
  },
  {
    id: 'desert-safari-jaisalmer',
    category: 'adventure',
    title: 'Thar Desert Safari & Luxury Camping',
    tagline: 'Ride camels across wind-swept golden dunes and sleep under stars.',
    description: 'The Great Indian Desert of Thar in Rajasthan offers a spectacular frontier of golden sand dunes, Rajasthani folk music, and camel safaris.',
    experienceDeepDive: 'From the historical fort city of Jaisalmer, journey into the Sam or Khuri sand dunes. Ride camels as the sun sets behind flat clay horizons, turning the sands orange, then settle into luxury tents for a night of fire-lit Kalbeliya dances.',
    keyHighlights: [
      '4x4 jeep dune bashing across massive wind-sculpted sand dunes',
      'Traditional desert dinner cooked over open firewood',
      'Sleeping on open-air cots directly under the Milky Way'
    ],
    practicalInformation: 'Pack warm windcheaters as desert temperatures plunge rapidly at night. Best visited from October to March.',
    recommendedStates: ['rajasthan', 'gujarat'],
    image: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2750?q=80&w=1200'
  },

  // Food Category
  {
    id: 'street-food-delhi',
    category: 'food',
    title: 'Street Food Gastronomy of Old Delhi',
    tagline: 'Embark on a culinary journey through centuries-old spice lanes.',
    description: 'Old Delhi is a historic kitchen that has been simmering since the Mughal empire. Its narrow streets hold secret recipes passed down through five generations of cooks.',
    experienceDeepDive: 'From the butter-laden black lentils to hot, deep-fried syrup-filled Jalebis, food here is intense and aromatic. You taste spicy potato patties (Aloo Tikki), tangy fruit salads sprinkled with secret black salt spice mixes, and hand-pulled tandoori meats cooked on open iron grills.',
    keyHighlights: [
      'Savor direct-fire cooked kebabs at the foot of the monumental Jama Masjid',
      'Taste 120-year-old stuffed flatbread recipes at Paranthe Wali Gali',
      'Sip sweet, creamy saffron lassi served in biodegradable clay cups (Kulhads)'
    ],
    practicalInformation: 'It is highly recommended to take a guided street food walking tour to find hygienic, authentic local vendors. Avoid drinking unfiltered water. Available year-round.',
    recommendedStates: ['delhi-ut', 'punjab'],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200'
  },
  {
    id: 'kerala-sadya',
    category: 'food',
    title: 'The Legendary Kerala Sadya Feast',
    tagline: 'A multi-course vegetarian banquet celebrating flavor balance.',
    description: 'Served traditionally during the harvest festival of Onam, the Sadya is a grand feast of up to 28 vegetarian dishes served on a single, fresh banana leaf.',
    experienceDeepDive: 'Sadya is a masterclass in culinary structure. The leaf is placed with its tapered end pointing left, and dishes are served in a strict sequence starting from bottom-left to top-right. It balances the five physical elements through sour yogurt curries, sweet coconut puddings, and salty pickles.',
    keyHighlights: [
      'Taste Avial, a rich coconut-spiced vegetable medley cooked in pure coconut oil',
      'Experience three distinct grades of sweet Payasam puddings sweetened with local jaggery',
      'Learn the traditional technique of eating with your fingers to fully engage all five senses'
    ],
    practicalInformation: 'Sadya is entirely vegetarian and highlights fresh coconut, curry leaves, and local red rice. Highly available during major festivals and in traditional heritage resorts.',
    recommendedStates: ['kerala', 'tamil-nadu'],
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200'
  },

  // Culture Category
  {
    id: 'classical-dances',
    category: 'culture',
    title: 'Classical Performing Arts: Kathakali & Bharatnatyam',
    tagline: 'Witness grand Indian epics brought to life through eyes, hands, and feet.',
    description: 'Indian classical performing arts are deeply spiritual practices where dance, music, and dramatic expressions function as a unified language to evoke divine stories.',
    experienceDeepDive: 'In Kerala\'s Kathakali, performers spend up to 4 hours receiving elaborate natural-paste face makeup before enacting night-long battle scenes from the Ramayana. In Tamil Nadu\'s Bharatnatyam, precise geometric footwork and intricate mudras (hand gestures) tell stories of deep devotion.',
    keyHighlights: [
      'Attend the pre-show makeup ceremony in Fort Kochi to watch the hand-painted process',
      'Learn the meaning of the 24 basic mudra hand gestures used in storytelling',
      'Hear the dramatic percussion of Chenda drums accompanying the actors'
    ],
    practicalInformation: 'Performances are easily found at cultural centers in Kochi, Chennai, and during winter music festivals in South India.',
    recommendedStates: ['kerala', 'tamil-nadu'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200'
  },
  {
    id: 'textile-traditions',
    category: 'culture',
    title: 'Ancient Weaves & block-Print Traditions',
    tagline: 'Discover hereditary fabric workshops preserving handloom secrets.',
    description: 'India\'s rich textile history is written in hand-spun cotton, naturally dyed block prints, and pure gold-threaded silk sarees.',
    experienceDeepDive: 'Visit Jaipur\'s nearby village of Bagru to see wooden stamps dipped in clay and natural indigo pressed onto long cotton sheets dried in the desert sun. In Varanasi, watch master weavers operate wooden handlooms to thread pure mulberry silk with gold wire (Zari) to create bridal Banarasi sarees.',
    keyHighlights: [
      'Try hand-stamping your own cotton fabric in a traditional Rajasthani block printing workshop',
      'Visit Patola weavers in Gujarat, who use double-ikat tying methods calculating patterns mathematically',
      'Learn how natural dyes are extracted from pomegranate skin, iron rust, and indigo plants'
    ],
    practicalInformation: 'Artisan villages welcome travelers for half-day workshops. Excellent shopping spots that directly support local weavers.',
    recommendedStates: ['rajasthan', 'uttar-pradesh', 'gujarat', 'tamil-nadu'],
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999874?q=80&w=1200'
  },

  // Wellness Category
  {
    id: 'ayurveda-kerala',
    category: 'wellness',
    title: 'Restorative Ayurvedic Rejuvenation',
    tagline: 'Align your physical elements through personalized ancestral healing.',
    description: 'Kerala is the global home of Ayurveda, the ancient science of long life. Here, healing utilizes native herbs, therapeutic oils, and tropical climates.',
    experienceDeepDive: 'Undergo customized, multi-day oil massage treatments (Abhyanga), warm oil poured continuously on the forehead (Shirodhara), and specialized organic vegetarian diets designed by certified Ayurvedic physicians to completely detoxify the nervous system and restore mental focus.',
    keyHighlights: [
      'Individual wellness consultation to determine your Dosha (Vata, Pitta, or Kapha)',
      'Four-hand synchronized herbal oil massages in outdoor garden pavilions',
      'Medicinal steam baths inside custom-crafted wooden chambers'
    ],
    practicalInformation: 'For true results, book retreats of at least 7 to 14 days. Avoid alcohol and intense activity during treatment. Ideal during the humid, cool monsoon season (June to October).',
    recommendedStates: ['kerala', 'uttarakhand', 'goa'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200'
  },
  {
    id: 'yoga-retreats-rishikesh',
    category: 'wellness',
    title: 'Yoga & Pranayama Ashrams in Rishikesh',
    tagline: 'Practice union of breath and body at the holy source of Yoga.',
    description: 'Situated along the banks of the clear, fast-flowing Ganges, Rishikesh has been a magnetic haven for spiritual seekers and yogis for thousands of years.',
    experienceDeepDive: 'Rise at 5:00 AM to the sound of temple bells. Practice dynamic and static yoga postures, learn silent breathing controls (Pranayama), and sit in deep concentration overlooking mountain forests. Daily meals are simple, fresh, and fully organic.',
    keyHighlights: [
      'Learn directly from spiritual masters carrying ancient lineages',
      'Practice dawn sun-salutations on rocky river shores',
      'Participate in evening Sanskrit chanting and philosophical debates'
    ],
    practicalInformation: 'Ashrams run structured programs from 3 days to several months. Absolute silence is often maintained in residential areas.',
    recommendedStates: ['uttarakhand', 'himachal-pradesh'],
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1200'
  },
  {
    id: 'paragliding-solang',
    category: 'adventure',
    title: 'Paragliding in Solang Valley, Manali',
    tagline: 'Soar like an eagle over snow-capped Himalayan peaks.',
    description: 'Solang Valley in Himachal Pradesh is the premier paragliding destination in India, offering spectacular tandem and solo flights with sweeping views of the majestic Dhauladhar and Pir Panjal ranges.',
    experienceDeepDive: 'Launching from heights up to 9,000 feet, you ride warm thermal currents above lush pine valleys, rushing streams, and snow-capped peaks. The rush of pure alpine air and the silent majesty of the high Himalayas combine to create an unforgettable flight.',
    keyHighlights: [
      'Tandem flights with highly experienced certified pilots',
      'Breathtaking aerial photography of Solang and Beas river valleys',
      'Solo pilot training courses for aviation enthusiasts'
    ],
    practicalInformation: 'Flights depend heavily on wind conditions. Tandem joyrides are available year-round except during heavy monsoons (July-September). Best times are April to June and October to December.',
    recommendedStates: ['himachal-pradesh'],
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1200'
  },
  {
    id: 'safari-ranthambore',
    category: 'adventure',
    title: 'Royal Tiger Safari in Ranthambore',
    tagline: 'Track the legendary Royal Bengal Tiger in its dry-deciduous forest home.',
    description: 'Ranthambore National Park in Rajasthan is one of the world\'s finest wildlife reserves, famous for its daytime tiger sightings set against the backdrop of medieval hilltop fort ruins.',
    experienceDeepDive: 'Ride in open-top 4x4 jeeps or larger canters through dry deciduous forests, rocky hills, and deep lakes. Ranthambore is home to legendary tigers like Machli, and visitors frequently spot tigers prowling past 10th-century ramparts, hunting spotted deer, or lounging in lakes.',
    keyHighlights: [
      'Spotting wild tigers hunting near Padam Talao lake',
      'Exploring the ruins of the 10th-century Ranthambore Fort inside the park',
      'Encountering leopards, marsh crocodiles, and over 300 bird species'
    ],
    practicalInformation: 'The park is divided into 10 safari zones. Zones 1 to 5 are highly recommended. Safaris must be booked months in advance. The park is closed from July to September.',
    recommendedStates: ['rajasthan'],
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1200'
  },
  {
    id: 'dravidian-temple-towers',
    category: 'culture',
    title: 'The Majestic Dravidian Temple Towers',
    tagline: 'Admire the soaring, highly decorated gateways of Southern India.',
    description: 'Dravidian architecture represents one of the world\'s finest spiritual and architectural movements. It is characterized by pyramid-shaped towers, giant gopurams (gateways) covered in thousands of colorful stone sculptures, and massive pillared halls.',
    experienceDeepDive: 'Explore legendary temples like Madurai\'s Meenakshi Temple, Thanjavur\'s Brihadisvara Temple, and Hampi\'s Virupaksha Temple. These temples functioned not just as houses of worship, but as the active social, artistic, and economic hubs of medieval empires, preserving classical music, dance, and spiritual philosophies.',
    keyHighlights: [
      'The 1000-pillared hall and musical stone pillars of Meenakshi Temple',
      'Thanjavur Brihadisvara tower, carved from a single 80-ton block of granite',
      'The sacred morning chants and oil-lamp lightings echoing through ancient stone chambers'
    ],
    practicalInformation: 'Temples have strict dress codes (shoulders and knees covered). Leather goods like belts and wallets are prohibited inside active shrines. Best visited during cooler winter months (October to March).',
    recommendedStates: ['tamil-nadu', 'karnataka', 'andhra-pradesh'],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200'
  },
  {
    id: 'rajput-hill-forts',
    category: 'culture',
    title: 'The Soaring Rajput Hill Fortesses',
    tagline: 'Walk the rugged, high-altitude military fortresses of Rajasthan.',
    description: 'Rising majestically out of desert plains and rugged Aravalli cliffs, the medieval hill forts of Rajasthan are masterpieces of defensive military and royal residential architecture.',
    experienceDeepDive: 'Explore Chittorgarh, Amber Fort, Mehrangarh, and Jaisalmer Fort. Each is an massive walled city of palaces, temples, stepwells, and bazaars. Their architectural style merges Rajput defensive craftsmanship with decorative Mughal aesthetics, featuring delicate hand-carved jali stone screens, sheesh mahal (mirror halls), and massive cannon batteries.',
    keyHighlights: [
      'The mirror-clad luxury chambers of Amber Fort in Jaipur',
      'Mehrangarh Fort\'s vertical cliffs towering 400 feet directly above Jodhpur',
      'The fully inhabited sandstone Jaisalmer Fort rising from the golden Thar desert'
    ],
    practicalInformation: 'Wear comfortable, high-traction walking shoes as exploring these massive forts involves climbing steep, polished stone pathways. Audio guides are highly recommended. Best visited in winter.',
    recommendedStates: ['rajasthan'],
    image: 'https://images.unsplash.com/photo-1477584322904-487272e5a64b?q=80&w=1200'
  },
  {
    id: 'tandoor-clay-oven',
    category: 'food',
    title: 'The Tandoor Clay Oven Culinary Art',
    tagline: 'Savor the smoky, direct-fire flatbreads and slow-cooked meats.',
    description: 'The tandoor—a cylindrical clay oven fired with charcoal or wood to temperatures exceeding 900°F—is the spiritual heart of North Indian and Punjabi gastronomy.',
    experienceDeepDive: 'Witness master bakers slap hand-stretched flatbreads directly onto glowing interior clay walls to create bubbly Naans and Rotis. Skewers of marinated meats and cheese are lowered into the intense heat, cooking them in minutes while sealing in juices and infusing a deep, smoky charcoal aroma.',
    keyHighlights: [
      'Tasting genuine tandoori chicken marinated in curd and secret red spices',
      'Savoring buttery, multi-layered Lachha Paranthas direct from the clay wall',
      'Watching the live preparation of smoky dal makhani slow-simmered overnight over tandoor embers'
    ],
    practicalInformation: 'Tandoori cuisine is robust and rich, highlighted by clarified butter (ghee) and aromatic marinades. Highly available across Delhi, Punjab, and North India.',
    recommendedStates: ['delhi-ut', 'punjab'],
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1200'
  },
  {
    id: 'coastal-seafood',
    category: 'food',
    title: 'Coastal Seafood Magic of Goa & Kerala',
    tagline: 'Taste fresh catches simmered in coconut milk, tamarind, and local spices.',
    description: 'With a sprawling 4,500-mile coastline, India boasts some of the world\'s most diverse and flavorful seafood cuisines, defined by fresh spices and tropical ingredients.',
    experienceDeepDive: 'From the fiery red Goan Fish Curry Rice soured with local teff seeds and kokum, to Kerala\'s Karimeen Pollichathu (pearl spot fish slathered in spicy red masala, wrapped in a banana leaf, and pan-fried), seafood here is incredibly fresh and complex. Coconut in all its forms—grated, milk, oil—balances the intense heat of local bird\'s eye chilies.',
    keyHighlights: [
      'Feasting on fresh Goan fish curry rice overlooking the Arabian Sea',
      'Peeling open a fragrant pan-fried banana-wrapped Karimeen in Kerala',
      'Sampling fiery Mangalorean ghee roast prawns cooked with red Bedgi chilies'
    ],
    practicalInformation: 'Seafood is cooked using native cold-pressed oils—coconut oil in Kerala and mustard oil in West Bengal. Best enjoyed at local beach shacks or heritage home-stays.',
    recommendedStates: ['goa', 'kerala', 'west-bengal', 'tamil-nadu'],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200'
  },
  {
    id: 'buddhist-meditation',
    category: 'wellness',
    title: 'Buddhist Monastic Meditation',
    tagline: 'Find absolute mental silence in the high-altitude monasteries of the Himalayas.',
    description: 'The high-altitude cold deserts of Ladakh and the foothills of Dharamshala are home to thriving centuries-old Tibetan Buddhist lineages, offering unmatched peace.',
    experienceDeepDive: 'Sit in silent concentration alongside crimson-robed monks as morning prayers begin to the deep hum of long brass horns and the ringing of copper bells. Buddhist monastic meditation utilizes visualization, deep pranayama, and silent mindfulness (Vipassana) to cultivate profound emotional balance.',
    keyHighlights: [
      'Participating in dawn meditation inside the ancient Hemis or Thiksey Monasteries',
      'Attending public teachings by spiritual masters in Dharamshala',
      'Walking silent circumambulations (Koras) around sacred white stupas'
    ],
    practicalInformation: 'Monastery meditation halls require absolute silence and respect. Dress warmly as high-altitude stone halls are cold even in summer. Donations are highly appreciated.',
    recommendedStates: ['ladakh-ut', 'himachal-pradesh', 'sikkim'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'hyderabadi-biryani',
    category: 'food',
    title: 'Hyderabadi Biryani & Royal Gastronomy',
    tagline: 'Feast on the aromatic, slow-steamed basmati rice and saffron-spiced meats.',
    description: 'Hyderabadi Biryani is a world-famous culinary masterpiece representing the fusion of Turkish, Mughal, and Southern Telugu royal court cooking techniques.',
    experienceDeepDive: 'Cooked using the rigorous "Kacchi" (raw) method, raw marinated meat is layered with partially boiled long-grain basmati rice, saffron, fried onions, and fresh mint inside a heavy copper pot. The pot is sealed with a ring of wheat dough and slow-cooked over wood charcoal (Dum cooking), allowing the ingredients to steam in their own juices.',
    keyHighlights: [
      'Tasting authentic Dum Biryani cooked by legacy chefs in Hyderabad Old City',
      'Savoring slow-simmered Haleem (wheat, lentils, and meat mashed to paste with ghee)',
      'Finishing with sweet Double ka Meetha (ghee-fried bread pudding infused with cardamom)'
    ],
    practicalInformation: 'Biryani is traditionally served with Mirchi ka Salan (a tangy sesame-peanut curry of long green chilies) and cold yogurt raita. Highly available across Andhra Pradesh and Telangana.',
    recommendedStates: ['andhra-pradesh'],
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1200'
  },
  {
    id: 'litti-chokha',
    category: 'food',
    title: 'Litti Chokha & Bihari Heritage Cooking',
    tagline: 'Savor the smokiest, earthiest wood-fired wheat balls of Bihar.',
    description: 'Litti Chokha is the signature rustic dish of Bihar, celebrating pure, unpretentious ingredients cooked over wood-fire embers.',
    experienceDeepDive: 'Litti consists of dense whole-wheat dough balls stuffed with spiced roasted chickpea flour (Sattu), laced with mustard oil, garlic, and green chilies. The balls are baked over cow-dung cake fires until charred, then submerged in hot, clarified ghee. It is paired with Chokha—a smoky mash of roasted eggplants, tomatoes, and potatoes infused with raw mustard oil.',
    keyHighlights: [
      'Watching Littis bake traditionally on direct firewood embers',
      'Savoring the intense pungency of raw cold-pressed mustard oil in Chokha',
      'Learning about Sattu—the superfood of roasted gram flour rich in plant proteins'
    ],
    practicalInformation: 'Litti Chokha is best eaten hot, cracked open by hand, and slathered with extra ghee. Widely available at local stalls and heritage restaurants in Patna and across Bihar.',
    recommendedStates: ['bihar'],
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1200'
  },
  {
    id: 'high-altitude-pass',
    category: 'adventure',
    title: 'High-Altitude Pass Crossing in Ladakh',
    tagline: 'Navigate the highest motorable road cuts on Earth.',
    description: 'Crossing high Himalayan passes is the ultimate overland adventure, taking you through dramatic rock deserts and glacial winds at altitudes above 17,500 feet.',
    experienceDeepDive: 'Drive or ride across legendary passes like Khardung La, Chang La, and Lachung La. These vital mountain arteries offer sheer drops, winding hairpins, and incredible views of eternal mountain chains. You feel the physical thrill of climbing into thin, low-oxygen air decorated with fluttering multi-colored Tibetan prayer flags.',
    keyHighlights: [
      'Standing at Khardung La at 17,582 feet above sea level',
      'Watching the ice glaciers meet dry mud deserts from pass crests',
      'Warming up with hot butter tea at small military transit outposts'
    ],
    practicalInformation: 'Requires slow, rigorous acclimation (2 days in Leh minimum) and inner-line permits. Road closures are common during sudden snowstorms. Best traveled from June to September.',
    recommendedStates: ['ladakh-ut', 'himachal-pradesh'],
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'tracking-begal-tiger',
    category: 'adventure',
    title: 'Tracking the Royal Bengal Tiger',
    tagline: 'Embark on deep forest excursions to witness India\'s ultimate apex predator.',
    description: 'Tracking tigers is a highly suspenseful, multisensory journey through dense bamboo thickets, ancient banyan trees, and dry stream beds of Central India.',
    experienceDeepDive: 'Led by expert native trackers, you listen closely to forest alarm calls—the sharp bark of a spotted deer (Chital), the guttural click of a Langur monkey, or the frantic call of a Peacock. These sounds act as coordinates to lead you directly to where a wild Bengal Tiger might be patrolling its territory or cooling off in forest pools.',
    keyHighlights: [
      'Deciphering wild alarm calls and reading fresh paw prints in dust paths',
      'Witnessing a tiger slide silently through high grassland blades',
      'Learning forest-conservation stories from native naturalist rangers'
    ],
    practicalInformation: 'Recommended forest reserves are Ranthambore, Jim Corbett, and Kaziranga. Keep a respectful distance, stay inside safari jeeps, and wear dark, earth-toned clothes.',
    recommendedStates: ['rajasthan', 'uttarakhand', 'assam'],
    image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=1200'
  }
];

// Helper to get matching experiences based on category
export function getExperiencesByCategory(cat: 'adventure' | 'food' | 'culture' | 'wellness'): ExperientialItem[] {
  return EXPERIENTIAL_ITEMS.filter(item => item.category === cat);
}

// Helper to get similar items for the "You Might Also Like" carousels (Australia.com never-dead-end strategy)
export function getRelatedItems(currentId: string, limit: number = 3): any[] {
  // Combine all items to select from
  const pool = [
    ...ATTRACTIONS.map(a => ({ ...a, path: 'attraction-detail', typeName: 'Attraction' })),
    ...NATIONAL_PARKS.map(p => ({ ...p, path: 'national-park-detail', typeName: 'National Park' })),
    ...HERITAGE_SITES.map(h => ({ ...h, path: 'heritage-site-detail', typeName: 'UNESCO Heritage Site' })),
    ...EXPERIENTIAL_ITEMS.map(e => ({ ...e, path: `${e.category}-detail`, typeName: 'Experience' }))
  ];

  return pool
    .filter(item => item.id !== currentId)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
}
