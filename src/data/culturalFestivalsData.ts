export interface CulturalFestival {
  id: string;
  name: string;
  location: string;
  region: 'North' | 'West' | 'South' | 'East & Northeast';
  significance: string;
  vibe: string;
  visualBlueprint: string;
  bestTime: string;
  image: string;
}

export const CULTURAL_FESTIVALS: CulturalFestival[] = [
  // ================= NORTH INDIA (13 Events) =================
  {
    id: 'maha-kumbh-mela',
    name: 'Maha Kumbh Mela',
    location: 'Prayagraj, Uttar Pradesh',
    region: 'North',
    significance: 'Symbolizes massive spiritual convergence and the pursuit of immortality. Devotees wash away lifetimes of karma in the sacred confluence.',
    vibe: 'An overwhelming, transcendent ocean of faith, echoing with chant-filled air, clashing bells, and glowing mist at dawn.',
    visualBlueprint: 'A colossal gathering of millions of devotees and ash-smeared sadhus bathing in the holy Ganges-Yamuna river confluence at misty sunrise, illuminated by thousands of golden oil lamps.',
    bestTime: 'January - March (Cyclical every 12 years)',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
  },
  {
    id: 'pushkar-camel-fair-cultural',
    name: 'Pushkar Camel Fair',
    location: 'Pushkar, Rajasthan',
    region: 'North',
    significance: 'Celebrates traditional desert trade, rustic folklore, and sacred Hindu pilgrimage surrounding the rare Temple of Lord Brahma.',
    vibe: 'Earth-scented, bustling, and intensely vibrant; a kaleidoscopic blend of nomadic commerce, folk music, and spiritual devotion.',
    visualBlueprint: 'Thousands of highly decorated camels and nomadic traders gathered on undulating golden sand dunes under a dreamy pink and orange sunset in Rajasthan.',
    bestTime: 'November (Kartik Purnima)',
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=600'
  },
  {
    id: 'holi-braj',
    name: 'Holi in Braj',
    location: 'Mathura & Vrindavan, Uttar Pradesh',
    region: 'North',
    significance: 'Marks the raw, unfiltered celebration of divine love between Radha and Krishna, ushering in the absolute bliss of spring.',
    vibe: 'Ecstatic, chaotic, and deeply emotional; a joyous storm where barriers dissolve in clouds of pigment and devotional songs.',
    visualBlueprint: 'A dense crowd of ecstatic devotees drenched in vibrant pink and purple gulal powder, celebrating in a historical sandstone temple courtyard in Vrindavan.',
    bestTime: 'March (Phalguna Purnima)',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
  },
  {
    id: 'diwali-ayodhya',
    name: 'Diwali in Ayodhya',
    location: 'Ayodhya, Uttar Pradesh',
    region: 'North',
    significance: 'Commemorates the triumph of light over absolute darkness and Lord Rama\'s historic homecoming after fourteen years of exile.',
    vibe: 'Mesmerizing, sacred, and serene; a quiet forest of tiny golden flames stretching into the infinite night.',
    visualBlueprint: 'The ancient stone steps of Sarayu River banks illuminated by millions of tiny flickering clay diyas reflecting on the water surface under a starry dark sky.',
    bestTime: 'October / November',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=600'
  },
  {
    id: 'jaipur-lit-fest',
    name: 'Jaipur Literature Festival',
    location: 'Jaipur, Rajasthan',
    region: 'North',
    significance: 'The world\'s largest free literary festival, celebrating intellectual freedom, royal heritage, and creative discourse.',
    vibe: 'Sophisticated, energetic, and colorful; where historic royal grandeur meets contemporary global intellect and artistic conversation.',
    visualBlueprint: 'A bustling crowd of writers and book lovers gathered under highly decorated royal shamianas inside the vibrant terracotta courtyard of Diggi Palace.',
    bestTime: 'January',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'ladakh-festival-cultural',
    name: 'Ladakh Festival',
    location: 'Leh, Ladakh',
    region: 'North',
    significance: 'A vibrant showcase of Himalayan endurance, rich cultural identity, and the ancient Buddhist heritage of the Cold Desert.',
    vibe: 'Joyous, deeply respectful, and alpine; characterized by slow, rhythmic movements and high-altitude community harmony.',
    visualBlueprint: 'Performers in heavy woolens and turquoise-studded jewelry parading through the high-altitude, sun-drenched streets of Leh against a backdrop of bare rocky mountains.',
    bestTime: 'September',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
  },
  {
    id: 'hemis-fest-cultural',
    name: 'Hemis Festival',
    location: 'Hemis Monastery, Ladakh',
    region: 'North',
    significance: 'Commemorates the birth of Guru Padmasambhava, celebrating the triumph of sacred Buddhist order over demonic negative forces.',
    vibe: 'Hypnotic, mystical, and sacred; driven by the deep drone of long brass horns and synchronized steps of masked dancers.',
    visualBlueprint: 'Monks in brilliant silk brocade robes and expressive wooden masks dancing in slow concentric circles in the stone courtyard of a majestic cliffside monastery.',
    bestTime: 'June / July',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
  },
  {
    id: 'desert-fest-jaisalmer',
    name: 'Desert Festival',
    location: 'Jaisalmer, Rajasthan',
    region: 'North',
    significance: 'A spectacular showcase of Thar Desert folk culture, celebrating Rajasthani bravery, romance, and indigenous arts.',
    vibe: 'Exotic, magical, and festive; a night where ancient desert ballads echo under a highly illuminated celestial dome.',
    visualBlueprint: 'Kalbelia dancers in swirling black mirror-work skirts performing on the silver sand dunes of Jaisalmer under the radiant light of a massive full moon.',
    bestTime: 'February',
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=600'
  },
  {
    id: 'taj-mahotsav-cultural',
    name: 'Taj Mahotsav',
    location: 'Agra, Uttar Pradesh',
    region: 'North',
    significance: 'A tribute to the peak of Mughal craftsmanship, classical arts, and the eternal romance immortalized in white marble.',
    vibe: 'Regal, nostalgic, and artistically rich; an open-air celebration of heritage arts, gourmet cuisine, and sweet melodies.',
    visualBlueprint: 'Traditional Indian musicians and artisans displaying exquisite handicrafts with the sublime, white marble silhouette of the Taj Mahal glowing softly in the background.',
    bestTime: 'February',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
  },
  {
    id: 'ganga-dussehra-varanasi',
    name: 'Ganga Dussehra',
    location: 'Varanasi, Uttar Pradesh',
    region: 'North',
    significance: 'Celebrates the sacred descent of the holy river Ganges from heaven to earth, bringing purificatory grace to humanity.',
    vibe: 'Deeply spiritual, ancient, and highly serene; a twilight filled with floating lamps and magnificent incense smoke.',
    visualBlueprint: 'Thousands of tiny leaf-boats carrying lit oil lamps floating gently down the sacred Ganges River at Varanasi ghats during the mesmerizing twilight hours.',
    bestTime: 'May / June',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600'
  },
  {
    id: 'teej-jaipur',
    name: 'Teej Festival',
    location: 'Jaipur, Rajasthan',
    region: 'North',
    significance: 'Welcomes the arrival of the life-giving monsoon rains and celebrates the sacred marital union of Goddess Parvati and Lord Shiva.',
    vibe: 'Joyful, feminine, and lush; characterized by the laughter of women, swing songs, and sweet monsoon aromas.',
    visualBlueprint: 'Women in vibrant green and red Rajasthani leheriya sarees swinging on highly decorated flower swings hanging from ancient banyan trees.',
    bestTime: 'July / August',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
  },
  {
    id: 'baisakhi-punjab',
    name: 'Baisakhi',
    location: 'Amritsar, Punjab',
    region: 'North',
    significance: 'Marks the golden harvest season of North India and the historic establishment of the Khalsa Panth by Guru Gobind Singh in 1699.',
    vibe: 'Exuberant, high-energy, and deeply communal; ringing with the heavy dhol beats of Bhangra and warm hospitality.',
    visualBlueprint: 'Turbanded Sikh men and women performing high-energy Bhangra dance in golden-ripe wheat fields under a bright, sunny sky in Punjab.',
    bestTime: 'April 13 / 14',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600'
  },
  {
    id: 'kullu-dussehra-cultural',
    name: 'Kullu Dussehra',
    location: 'Kullu Valley, Himachal Pradesh',
    region: 'North',
    significance: 'A distinct Himalayan celebration of the triumph of good over evil, where valley deities descend to assemble together.',
    vibe: 'Festive, mystical, and rustic; a vibrant mountain congregation of wooden palanquins, brass trumpets, and hill dances.',
    visualBlueprint: 'A grand procession of hand-carried wooden palanquins bearing local village deities through a lush Himalayan valley under a clear blue sky.',
    bestTime: 'October',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
  },

  // ================= WEST INDIA (12 Events) =================
  {
    id: 'ganesh-chaturthi-mumbai',
    name: 'Ganesh Chaturthi',
    location: 'Mumbai, Maharashtra',
    region: 'West',
    significance: 'Symbolizes grand devotion and immersion.',
    vibe: 'A colossal, high-intensity public celebration filled with synchronized dhol beats and immense community joy.',
    visualBlueprint: 'Massive idols of the elephant god being paraded toward the Arabian Sea.',
    bestTime: 'August / September',
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=600'
  },
  {
    id: 'navratri-garba',
    name: 'Navratri (Garba)',
    location: 'Gujarat',
    region: 'West',
    significance: 'Symbolizes nine nights of dance and shakti.',
    vibe: 'A swirling, rhythmic festival of joy, devotion, and mesmerizing circular dance movements under brilliant night illumination.',
    visualBlueprint: 'Thousands of people in mirror-work costumes dancing in concentric circles.',
    bestTime: 'September / October',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600'
  },
  {
    id: 'rann-utsav-cultural',
    name: 'Rann Utsav',
    location: 'Kutch, Gujarat',
    region: 'West',
    significance: 'Symbolizes culture on the white salt desert.',
    vibe: 'Surreal, silent, and deeply poetic; a majestic desert experience where folk melodies float under the moonlight.',
    visualBlueprint: 'Luxury tents and folk music on an endless expanse of white salt under moonlight.',
    bestTime: 'November - February',
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=600'
  },
  {
    id: 'goa-carnival-cultural',
    name: 'Goa Carnival',
    location: 'Goa',
    region: 'West',
    significance: 'Symbolizes Portuguese heritage and party spirit.',
    vibe: 'Exuberant, carefree, and colorful; streets filled with lively brass bands and joyous coastal energy.',
    visualBlueprint: 'Floats and masked dancers moving through palm-lined coastal streets.',
    bestTime: 'February',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
  },
  {
    id: 'sunburn-festival-goa',
    name: 'Sunburn Festival',
    location: 'Goa',
    region: 'West',
    significance: 'Symbolizes modern youth and electronic music.',
    vibe: 'Electrifying, youth-driven, and highly cinematic; a beachside celebration under a star-lit sky.',
    visualBlueprint: 'Lasers and massive stages on a sandy beach with swaying coconut trees.',
    bestTime: 'December',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
  },
  {
    id: 'kite-fest-ahmedabad',
    name: 'International Kite Festival',
    location: 'Ahmedabad, Gujarat',
    region: 'West',
    significance: 'Symbolizes high spirits and blue skies.',
    vibe: 'High-spirited, competitive, and colorful; roofs echo with friendly battle cries under a sunny sky.',
    visualBlueprint: 'The sky completely filled with thousands of colorful paper kites.',
    bestTime: 'January',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
  },
  {
    id: 'shigmo-goa',
    name: 'Shigmo Festival',
    location: 'Goa',
    region: 'West',
    significance: 'Symbolizes spring and street folklore.',
    vibe: 'Rhythmic, traditional, and dramatic; street parades tell legendary stories with bright orange costumes.',
    visualBlueprint: 'Elaborate mythological floats and dancers in warrior costumes on the streets.',
    bestTime: 'March',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
  },
  {
    id: 'elephanta-mumbai',
    name: 'Elephanta Festival',
    location: 'Mumbai, Maharashtra',
    region: 'West',
    significance: 'Symbolizes classical dance and heritage.',
    vibe: 'Aesthetic, majestic, and deeply artistic; set against a historic basalt stone backdrop.',
    visualBlueprint: 'Dancers performing against the backdrop of ancient rock-cut cave sculptures.',
    bestTime: 'February',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'marwar-jodhpur',
    name: 'Marwar Festival',
    location: 'Jodhpur, Rajasthan',
    region: 'West',
    significance: 'Symbolizes Rajput valour and memory.',
    vibe: 'Regal, grand, and nostalgic; desert folk melodies rise in the shadow of majestic forts.',
    visualBlueprint: 'Folk musicians performing with the massive Mehrangarh Fort in the background.',
    bestTime: 'October',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
  },
  {
    id: 'mount-abu-winter',
    name: 'Mount Abu Winter Festival',
    location: 'Mount Abu, Rajasthan',
    region: 'West',
    significance: 'Symbolizes hill station festivity.',
    vibe: 'Chilly, cheerful, and romantic; characterized by glowing lights and lakeside joy.',
    visualBlueprint: 'Fireworks reflecting over a serene lake surrounded by rocky hills.',
    bestTime: 'December',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
  },
  {
    id: 'modhera-dance-fest',
    name: 'Modhera Dance Festival',
    location: 'Modhera Sun Temple, Gujarat',
    region: 'West',
    significance: 'Symbolizes sun worship and classical art.',
    vibe: 'Venerable, ethereal, and architectural; a golden dream under starry skies.',
    visualBlueprint: 'Dancers performing on the steps of an ancient Sun Temple glowing in golden light.',
    bestTime: 'January',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'tarnetar-mela',
    name: 'Tarnetar Mela',
    location: 'Tarnetar, Gujarat',
    region: 'West',
    significance: 'Symbolizes tribal matchmaking and embroidery.',
    vibe: 'Earthy, colorful, and festive; a traditional gathering of youth seeking life partners.',
    visualBlueprint: 'Young men with intricately embroidered umbrellas seeking partners in a village fair.',
    bestTime: 'August / September',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
  },

  // ================= SOUTH INDIA (12 Events) =================
  {
    id: 'onam-kerala',
    name: 'Onam',
    location: 'Kerala',
    region: 'South',
    significance: 'Symbolizes harvest abundance and returning kings.',
    vibe: 'Golden, tranquil, and agricultural; characterized by community feasts and floral carpets.',
    visualBlueprint: 'Elaborate flower carpets (pookalam) and a grand boat race on backwaters.',
    bestTime: 'August / September',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600'
  },
  {
    id: 'pongal-tamilnadu',
    name: 'Pongal',
    location: 'Tamil Nadu',
    region: 'South',
    significance: 'Symbolizes thanksgiving to the sun and earth.',
    vibe: 'Earthy, rustic, and grateful; marked by painted sacred cattle and outdoors cooking.',
    visualBlueprint: 'Clay pots boiling over with rice and milk in a sunny courtyard.',
    bestTime: 'January',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600'
  },
  {
    id: 'mysore-dasara-cultural',
    name: 'Mysuru Dasara',
    location: 'Mysuru, Karnataka',
    region: 'South',
    significance: 'Symbolizes royal victory and pageantry.',
    vibe: 'Regal, grand, and legendary; characterized by illuminated palaces and historic marches.',
    visualBlueprint: 'A golden howdah carried by an elephant leading a grand palace procession.',
    bestTime: 'October',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=600'
  },
  {
    id: 'kochi-muziris-biennale',
    name: 'Kochi-Muziris Biennale',
    location: 'Kochi, Kerala',
    region: 'South',
    significance: 'Symbolizes contemporary global art.',
    vibe: 'Avant-garde, creative, and intellectual; a beautiful intersection of art and colonial coastal history.',
    visualBlueprint: 'Avant-garde art installations set within heritage colonial warehouses by the sea.',
    bestTime: 'December - April',
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=600'
  },
  {
    id: 'thrissur-pooram',
    name: 'Thrissur Pooram',
    location: 'Thrissur, Kerala',
    region: 'South',
    significance: 'Symbolizes the ultimate temple festival.',
    vibe: 'Colossal, thunderous, and ecstatic; a dense ocean of people moving to traditional percussion.',
    visualBlueprint: 'Two lines of caparisoned elephants facing each other with changing colorful umbrellas.',
    bestTime: 'April / May',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600'
  },
  {
    id: 'hampi-utsav',
    name: 'Hampi Utsav',
    location: 'Hampi, Karnataka',
    region: 'South',
    significance: 'Symbolizes the glory of the Vijayanagara empire.',
    vibe: 'Historical, spectacular, and artistic; ancient stone ruins come alive with glowing lights.',
    visualBlueprint: 'Cultural performances set amongst dramatic boulder ruins and stone temples.',
    bestTime: 'November',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=600'
  },
  {
    id: 'chithirai-madurai',
    name: 'Chithirai Festival',
    location: 'Madurai, Tamil Nadu',
    region: 'South',
    significance: 'Symbolizes divine wedding celestial grandeur.',
    vibe: 'Spiritual, grand, and colorful; streets packed with devotees pulling giant chariots.',
    visualBlueprint: 'A massive golden chariot being pulled through crowded temple streets.',
    bestTime: 'April',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600'
  },
  {
    id: 'mahamastakabhisheka',
    name: 'Mahamastakabhisheka',
    location: 'Shravanabelagola, Karnataka',
    region: 'South',
    significance: 'Symbolizes Jain devotion (every 12 years).',
    vibe: 'Solemn, majestic, and highly sacred; devotees gather in massive queues at the hill-top monolithic statue.',
    visualBlueprint: 'Devotees pouring milk and saffron over a colossal monolithic stone statue.',
    bestTime: 'Cyclical every 12 years',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=600'
  },
  {
    id: 'karthigai-deepam',
    name: 'Karthigai Deepam',
    location: 'Tiruvannamalai, Tamil Nadu',
    region: 'South',
    significance: 'Symbolizes the festival of lights of the south.',
    vibe: 'Ancient, solemn, and highly illuminated; characterized by millions of clay lamps.',
    visualBlueprint: 'A massive beacon fire lit atop a holy hill visible for miles.',
    bestTime: 'November / December',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600'
  },
  {
    id: 'nehru-trophy-race',
    name: 'Nehru Trophy Boat Race',
    location: 'Alappuzha, Kerala',
    region: 'South',
    significance: 'Symbolizes rhythm and team spirit.',
    vibe: 'High-octane, rhythmic, and thunderous; water splashes in perfect unison as oarsmen chant.',
    visualBlueprint: 'Long snake boats with 100 rowers splashing through backwaters in unison.',
    bestTime: 'August',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600'
  },
  {
    id: 'madras-music-season',
    name: 'Madras Music Season',
    location: 'Chennai, Tamil Nadu',
    region: 'South',
    significance: 'Symbolizes classical Carnatic purity.',
    vibe: 'Devotional, structured, and acoustic; a winter-long series of concerts featuring traditional master vocalists.',
    visualBlueprint: 'Musicians sitting cross-legged on stage performing in traditional silk attire.',
    bestTime: 'December / January',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'karaga-bengaluru',
    name: 'Bengaluru Karaga',
    location: 'Bengaluru, Karnataka',
    region: 'South',
    significance: 'Symbolizes urban religious tradition.',
    vibe: 'Mystical, nocturnal, and highly intense; barefoot midnight walk with deep devotional focus.',
    visualBlueprint: 'A priest balancing a massive floral pyramid on his head walking through night streets.',
    bestTime: 'April',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=600'
  },

  // ================= EAST & NORTHEAST INDIA (11 Events) =================
  {
    id: 'durga-puja-kolkata',
    name: 'Durga Puja',
    location: 'Kolkata, West Bengal',
    region: 'East & Northeast',
    significance: 'Symbolizes the victory of goddess power.',
    vibe: 'An all-night public art festival; the city turns into an illuminated gallery of temporary structures.',
    visualBlueprint: 'Elaborate, artistic temporary temples (pandals) glowing in the city night.',
    bestTime: 'September / October',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=600'
  },
  {
    id: 'hornbill-festival',
    name: 'Hornbill Festival',
    location: 'Kohima, Nagaland',
    region: 'East & Northeast',
    significance: 'Symbolizes tribal unity and heritage.',
    vibe: 'Epic, rustic, and energetic; traditional warrior chanting, sports, and colorful headgear.',
    visualBlueprint: 'Warriors in colorful beadwork and feathers dancing in a terraced amphitheater.',
    bestTime: 'December',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
  },
  {
    id: 'ratha-yatra-puri',
    name: 'Rath Yatra',
    location: 'Puri, Odisha',
    region: 'East & Northeast',
    significance: 'Symbolizes the journey of the Lord of the Universe.',
    vibe: 'Oceanic, ecstatic, and earth-moving; dense crowds pulling grand wooden chariots.',
    visualBlueprint: 'Three colossal wooden chariots being pulled by millions of devotees on a grand avenue.',
    bestTime: 'June / July',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
  },
  {
    id: 'rongali-bihu-assam',
    name: 'Bihu',
    location: 'Assam',
    region: 'East & Northeast',
    significance: 'Symbolizes Assamese new year and spring.',
    vibe: 'Lyrical, lush, and festive; characterized by rapid hand movements and sweet traditional foods.',
    visualBlueprint: 'Dancers in red and beige silk dancing in lush green tea garden clearings.',
    bestTime: 'April',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
  },
  {
    id: 'ziro-music-fest',
    name: 'Ziro Festival of Music',
    location: 'Ziro Valley, Arunachal Pradesh',
    region: 'East & Northeast',
    significance: 'Symbolizes indie music in nature.',
    vibe: 'Bohemian, ecological, and misty; outdoor gatherings in a picturesque high-altitude valley.',
    visualBlueprint: 'An outdoor stage set in a stunning, flat green valley surrounded by pine hills.',
    bestTime: 'September',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
  },
  {
    id: 'wangala-100-drums',
    name: 'Wangala Festival',
    location: 'Meghalaya',
    region: 'East & Northeast',
    significance: 'Symbolizes the 100-drum harvest celebration.',
    vibe: 'Rhythmic, agricultural, and acoustic; driven by a hundred long drums played in synchronization.',
    visualBlueprint: 'Tribal men playing long drums in rhythmic unison in a village field.',
    bestTime: 'November',
    image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=600'
  },
  {
    id: 'losar-arunachal',
    name: 'Losar Festival',
    location: 'Sikkim & Arunachal Pradesh',
    region: 'East & Northeast',
    significance: 'Symbolizes Tibetan new year.',
    vibe: 'Quiet, alpine, and prayerful; filled with butter lamps, yak dances, and sacred chanting.',
    visualBlueprint: 'Colorful flags fluttering and yak dances in a snowy mountain monastery.',
    bestTime: 'February',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
  },
  {
    id: 'ambubachi-mela',
    name: 'Ambubachi Mela',
    location: 'Kamakhya Temple, Guwahati, Assam',
    region: 'East & Northeast',
    significance: 'Symbolizes the earth\'s menstruation and fertility.',
    vibe: 'Esoteric, intense, and mystical; filled with reclusive tantric ascetics.',
    visualBlueprint: 'Tantric ascetics in saffron gathering at a hilltop temple shrine.',
    bestTime: 'June',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600'
  },
  {
    id: 'konark-dance-fest',
    name: 'Konark Dance Festival',
    location: 'Konark, Odisha',
    region: 'East & Northeast',
    significance: 'Symbolizes classical dance in stone heritage.',
    vibe: 'Venerable, sculptural, and majestic; dancers reflecting the geometric beauty of 13th-century carvings.',
    visualBlueprint: 'Dancers performing with the illuminated Sun Temple wheel in the background.',
    bestTime: 'December',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'sangai-festival',
    name: 'Sangai Festival',
    location: 'Imphal, Manipur',
    region: 'East & Northeast',
    significance: 'Symbolizes cultural showcase and polo.',
    vibe: 'Theatrical, elegant, and rich; celebrating Manipur\'s indigenous horse polo and unique arts.',
    visualBlueprint: 'Traditional boat races on a lake with floating biomass islands.',
    bestTime: 'November',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
  },
  {
    id: 'kharchi-puja',
    name: 'Kharchi Puja',
    location: 'Agartala, Tripura',
    region: 'East & Northeast',
    significance: 'Symbolizes the worship of fourteen gods.',
    vibe: 'Ancient, communal, and ritualistic; celebrating the cleansing of mother earth and divine protection.',
    visualBlueprint: 'Devotees gathering around ancient deities in a temple courtyard.',
    bestTime: 'July',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600'
  }
];
