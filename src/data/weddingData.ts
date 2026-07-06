export interface WeddingDestination {
  id: string;
  name: string;
  state: string;
  region: 'South' | 'East & Islands' | 'North' | 'West & Central' | 'Hidden Gems';
  symbolism: string;
  description: string;
  setting: string;
  category: 'royal' | 'coastal' | 'mountain' | 'sacred' | 'unique';
  categoryLabel: string;
  highlights: string[];
  bestSeason: string;
  image: string;
  stateId?: string; // cross-linking to state detail pages
}

export const WEDDING_DESTINATIONS: WeddingDestination[] = [
  {
    id: 'coorg-plantations',
    name: 'Coorg Coffee Plantations',
    state: 'Karnataka',
    region: 'South',
    symbolism: 'Symbolizes morning serenity and luxury.',
    description: 'Enveloped in thick morning fog and aroma of cardamom, Coorg offers a lush, highland luxury wedding backdrop amidst sprawling private estate bungalows.',
    setting: 'Lush coffee estates, rolling misty hills, and colonial-era heritage villas.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Outdoor estate canopy weddings', 'Private coffee-tasting welcome parties', 'Trekking trails and river view ceremonies'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1590001155093-a3c66ab0c3ff?q=80&w=1200',
    stateId: 'karnataka'
  },
  {
    id: 'bengaluru-palace',
    name: 'Bengaluru (Palace Grounds)',
    state: 'Karnataka',
    region: 'South',
    symbolism: 'Symbolizes urban royalty and architectural revival.',
    description: 'A Tudor-style brick palace inspired by Windsor Castle, featuring grand turreted towers, ballroom archways, and manicured English gardens for grand royal celebrations.',
    setting: 'Majestic Tudor palace with extensive lawns, wooden ceilings, and royal galleries.',
    category: 'royal',
    categoryLabel: 'Palatial Splendor',
    highlights: ['Windsor-inspired architecture', 'Expansive manicured garden lawns', 'Grand ballroom banquets'],
    bestSeason: 'September to February',
    image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=1200',
    stateId: 'karnataka'
  },
  {
    id: 'mysuru-palace',
    name: 'Mysuru Palace Environs',
    state: 'Karnataka',
    region: 'South',
    symbolism: 'Symbolizes palatial opulence and rich heritage.',
    description: 'Tie the knot in the city of palaces, framed by an Indo-Saracenic royal legacy illuminated at night by nearly one hundred thousand golden lightbulbs.',
    setting: 'Ornate mahogany carvings, majestic durbar halls, and golden light displays.',
    category: 'royal',
    categoryLabel: 'Palatial Splendor',
    highlights: ['Spectacular golden illumination', 'Royal Carnatic music ensembles', 'Elaborate traditional palace banquets'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1588523992224-fa77ff5cbe5b?q=80&w=1200',
    stateId: 'karnataka'
  },
  {
    id: 'hyderabad-falaknuma',
    name: 'Hyderabad (Falaknuma Palace)',
    state: 'Telangana',
    region: 'South',
    symbolism: 'Symbolizes Nizam-era luxury and celestial elegance.',
    description: 'A scorpion-shaped palace of the Nizams perched on a hill, featuring grand Italian marble staircases, stained-glass windows, and massive crystal chandeliers.',
    setting: 'Hilltop marble palace with panoramic city views and a legendary 101-seat dining table.',
    category: 'royal',
    categoryLabel: 'Palatial Splendor',
    highlights: ['Horse-drawn carriage entry', 'Celestial terrace dinners overlooking Hyderabad', 'Stained-glass winter hall ceremonies'],
    bestSeason: 'November to February',
    image: 'https://images.unsplash.com/photo-1608958416715-12bfa51138b1?q=80&w=1200'
  },
  {
    id: 'visakhapatnam-cliffs',
    name: 'Visakhapatnam Beach & Cliffs',
    state: 'Andhra Pradesh',
    region: 'South',
    symbolism: 'Symbolizes where hills meet the infinite sea.',
    description: 'Exchange vows where lush green mountain cliffs drop steeply into the deep blue Bay of Bengal, providing a dramatic dual-landscape of land and ocean.',
    setting: 'Oceanfront cliff lawns and pristine golden sands.',
    category: 'coastal',
    categoryLabel: 'Coastal & Island',
    highlights: ['Panoramic cliffside mandaps', 'Lighthouse sunset photography', 'Fresh catch coastal seafood catering'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'tirupati-hills',
    name: 'Tirupati Sacred Hills',
    state: 'Andhra Pradesh',
    region: 'South',
    symbolism: 'Symbolizes ultimate devotion and sacred vows.',
    description: 'A sacred wedding destination nestled within the dramatic seven hills of Seshachalam, offering traditional spiritual wedding blessings.',
    setting: 'Ornate stone temples, holy chants, and ancient Vedic rituals.',
    category: 'sacred',
    categoryLabel: 'Sacred Devotion',
    highlights: ['Authentic Vedic wedding mantras', 'Pure traditional temple wedding feasts', 'Sacred silk wedding clothing attire'],
    bestSeason: 'Year-round',
    image: 'https://images.unsplash.com/photo-1600100397990-24b35422312d?q=80&w=1200'
  },
  {
    id: 'puducherry-colonial',
    name: 'Puducherry French Quarter',
    state: 'Puducherry',
    region: 'South',
    symbolism: 'Symbolizes bohemian elegance and cross-cultural love.',
    description: 'Lined with pastel-yellow colonial villas, bougainvillea-draped archways, and clean cobblestone lanes, Puducherry offers a unique vintage bohemian charm.',
    setting: 'French colonial courtyards, cobblestone lanes, and seaside promenades.',
    category: 'coastal',
    categoryLabel: 'Coastal & Island',
    highlights: ['Secluded French villa weddings', 'Chic bohemian beach afterparties', 'Sino-French fusion cuisine'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200'
  },
  {
    id: 'kolkata-victoria',
    name: 'Kolkata Heritage Grounds',
    state: 'West Bengal',
    region: 'East & Islands',
    symbolism: 'Symbolizes intellectual heritage and vintage opulence.',
    description: 'A massive, majestic white marble memorial monument surrounded by deep reflection ponds, offering a grand old-world vintage aesthetic for classical high-society weddings.',
    setting: 'Neoclassical marble architecture, sprawling reflection pools, and colonial parks.',
    category: 'royal',
    categoryLabel: 'Palatial Splendor',
    highlights: ['Royal Calcutta horse buggy arrivals', 'Classical Shehnai and flute ensembles', 'Grand traditional Bengali multi-course banquets'],
    bestSeason: 'October to February',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200',
    stateId: 'west-bengal'
  },
  {
    id: 'darjeeling-tea-gardens',
    name: 'Darjeeling Highlands',
    state: 'West Bengal',
    region: 'East & Islands',
    symbolism: 'Symbolizes high-altitude romance and dawn.',
    description: 'Snow-capped Himalayan peaks, including Mount Kanchenjunga, rising above emerald green tea plantations under the crisp golden light of dawn.',
    setting: 'Panoramic terrace gardens overlooking tea valleys and misty Himalayan peaks.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Vows with Kanchenjunga views', 'Colonial fireplace cocktails', 'Toy train entry experiences'],
    bestSeason: 'March to May, September to November',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200',
    stateId: 'west-bengal'
  },
  {
    id: 'puri-beachfront',
    name: 'Puri Coastal Sands',
    state: 'Odisha',
    region: 'East & Islands',
    symbolism: 'Symbolizes spiritual devotion and coastal vastness.',
    description: 'Exquisitely wide sandy beaches on the Bay of Bengal, resonating with distant temple bells and the natural majesty of crashing surf.',
    setting: 'Infinite shoreline, pristine coastal sands, and heritage temples.',
    category: 'coastal',
    categoryLabel: 'Coastal & Island',
    highlights: ['Golden hour shoreline vows', 'Oceanfront bamboo beach mandaps', 'Traditional Odiya sand-art portraits'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    stateId: 'odisha'
  },
  {
    id: 'bhubaneswar-temple-gardens',
    name: 'Bhubaneswar Heritage Gardens',
    state: 'Odisha',
    region: 'East & Islands',
    symbolism: 'Symbolizes structural harmony and ancient legacy.',
    description: 'Intricately carved Kalingan red sandstone temples surrounded by perfectly manicured green lawns, offering a deep cultural connection.',
    setting: '8th-century stone temple backdrops, carved pillars, and heritage parks.',
    category: 'sacred',
    categoryLabel: 'Sacred Devotion',
    highlights: ['Kalingan sandstone architectural photo shoots', 'Classical Odissi dance welcoming events', 'Authentic temple-style vegetarian menus'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1601564267625-072fc4a4f88e?q=80&w=1200',
    stateId: 'odisha'
  },
  {
    id: 'guwahati-hills',
    name: 'Guwahati Brahmaputra Bluffs',
    state: 'Assam',
    region: 'East & Islands',
    symbolism: 'Symbolizes natural power and sacred blessings.',
    description: 'Tie the knot on a lush hill overlooking the mighty Brahmaputra River, blessed by the spiritual aura of ancient temples.',
    setting: 'Hilltops, river cliffs, and private river cruise vessels.',
    category: 'sacred',
    categoryLabel: 'Sacred Devotion',
    highlights: ['Chartered Brahmaputra cruise receptions', 'Traditional Assamese Bihu music welcome', 'Silk Mekhela Chador bridal styling'],
    bestSeason: 'November to April',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?q=80&w=1200'
  },
  {
    id: 'kaziranga-eco-wedding',
    name: 'Kaziranga Wilderness Reserves',
    state: 'Assam',
    region: 'East & Islands',
    symbolism: 'Symbolizes wild, untamed adventure and survival.',
    description: 'Golden elephant grass plains and tropical wet broadleaf forest backdrops, offering a highly unique, eco-conscious jungle safari wedding.',
    setting: 'Eco-resort luxury tents, jungle clearings, and teak forest canopies.',
    category: 'unique',
    categoryLabel: 'Untamed Wilds',
    highlights: ['Morning safari wedding photo shoots', 'Sustainable, plastic-free eco weddings', 'Tribal firelit folk dance banquets'],
    bestSeason: 'November to April',
    image: 'https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1200'
  },
  {
    id: 'shillong-cascades',
    name: 'Shillong Highland Cascades',
    state: 'Meghalaya',
    region: 'East & Islands',
    symbolism: 'Symbolizes ethereal beauty and celestial moisture.',
    description: 'Spectacular water cascades rushing down sheer, moss-covered pine-forest cliffs in the peaceful "Abode of Clouds".',
    setting: 'Rocky forest streams, mist-veiled canyons, and pine resorts.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Waterfall valley backdrops', 'Pine forest glade receptions', 'Acoustic local choral ensembles'],
    bestSeason: 'March to May, October to November',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200',
    stateId: 'meghalaya'
  },
  {
    id: 'gangtok-monasteries',
    name: 'Gangtok Cloud Ridges',
    state: 'Sikkim',
    region: 'East & Islands',
    symbolism: 'Symbolizes mountain peace and spiritual clarity.',
    description: 'Vibrant, colorful Buddhist monasteries perched on steep, cloud-kissed Himalayan ridges, radiating absolute peace and zen.',
    setting: 'Spiritual mountain resorts with alpine backdrops and monastery views.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Buddhist flag-blessed terrace weddings', 'Tibetan butter tea toasts', 'Snowpeak sunset views'],
    bestSeason: 'March to May, October to December',
    image: 'https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?q=80&w=1200',
    stateId: 'sikkim'
  },
  {
    id: 'tawang-monastery',
    name: 'Tawang Valley Outpost',
    state: 'Arunachal Pradesh',
    region: 'East & Islands',
    symbolism: 'Symbolizes mystical isolation and pure devotion.',
    description: 'A majestic snow-surrounded monastery overlooking a deep Himalayan valley, offering extreme spiritual solitude and epic alpine grandeur.',
    setting: 'High-altitude cold desert lakes, snow peaks, and prayer-wheeled valleys.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Extreme high-altitude photography', 'Prayer flag backdrop vows', 'Traditional woolen Monpa weddings'],
    bestSeason: 'April to October',
    image: 'https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=1200'
  },
  {
    id: 'imphal-palace',
    name: 'Imphal Kangla Environs',
    state: 'Manipur',
    region: 'East & Islands',
    symbolism: 'Symbolizes vibrant folklore and cultural grace.',
    description: 'Historic brick palace ruins and pristine reflection pools surrounded by rolling green hills, offering beautiful Manipuri elegance.',
    setting: 'Classical moat fortifications, red-brick palace facades, and gardens.',
    category: 'sacred',
    categoryLabel: 'Sacred Devotion',
    highlights: ['Classical Manipuri Raas Leela performances', 'White-themed Manipuri wedding customs', 'Sylvan lake vows'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1200'
  },
  {
    id: 'havelock-island',
    name: 'Havelock Island (Radhanagar Beach)',
    state: 'Andaman & Nicobar Islands',
    region: 'East & Islands',
    symbolism: 'Symbolizes exotic paradise and untouched vows.',
    description: 'Blindingly white sands meeting neon-turquoise waters and towering ancient rainforests. Recognized globally as one of Asia\'s most pristine beachscapes.',
    setting: 'Exotic white sand beach flanked by massive green mahua forest canopies.',
    category: 'coastal',
    categoryLabel: 'Coastal & Island',
    highlights: ['Barefoot beach twilight ceremonies', 'Rainforest canopy cocktails', 'Coral reef diving pre-wedding shoots'],
    bestSeason: 'December to April',
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200'
  },
  {
    id: 'port-blair-harbor',
    name: 'Port Blair Heritage Harbor',
    state: 'Andaman & Nicobar Islands',
    region: 'East & Islands',
    symbolism: 'Symbolizes colonial history and maritime resilience.',
    description: 'Weathered red-brick colonial heritage structures and ancient banyan trees overlooking a deep, brilliant blue island harbor.',
    setting: 'Heritage brick structures, seaside cliffs, and ocean harbors.',
    category: 'coastal',
    categoryLabel: 'Coastal & Island',
    highlights: ['Historic colonial ruin ceremonies', 'Yacht harbor sunset dinners', 'Oceanic lighthouse photo sessions'],
    bestSeason: 'December to April',
    image: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?q=80&w=1200'
  },
  {
    id: 'chamba-camp',
    name: 'Chamba Camp (Thiksey)',
    state: 'Ladakh',
    region: 'Hidden Gems',
    symbolism: 'Symbolizes high-altitude clarity and rugged luxury.',
    description: 'Ultra-luxury canvas tents pitched beneath the stark, imposing desert mountain monastery of Thiksey, with stunning views of the Indus Valley.',
    setting: 'High-altitude cold desert mountains, luxury glamping tents, and ancient stone stupas.',
    category: 'unique',
    categoryLabel: 'Untamed Wilds',
    highlights: ['Glamping-style luxury weddings', 'Starlit high-altitude mountain banquets', 'Monastic blessing ceremonies'],
    bestSeason: 'May to September',
    image: 'https://images.unsplash.com/photo-1499856138863-7a3b47ff02fc?q=80&w=1200',
    stateId: 'ladakh-ut'
  },
  {
    id: 'gulmarg-meadow',
    name: 'Gulmarg Snowy Meadows',
    state: 'Jammu & Kashmir',
    region: 'Hidden Gems',
    symbolism: 'Symbolizes a winter wonderland and heavenly bliss.',
    description: 'A spectacular green meadow in summer or snow-blanketed wonderland in winter, surrounded by towering pine trees and razor-sharp snow-capped peaks.',
    setting: 'Alpine meadows, ski resort slopes, and pine forest clearings.',
    category: 'mountain',
    categoryLabel: 'Misty Highlands',
    highlights: ['Snow-white fairytale weddings', 'Wooden alpine lodge receptions', 'Gondola lift pre-wedding photography'],
    bestSeason: 'Year-round (December to March for snow; June to September for wildflowers)',
    image: 'https://images.unsplash.com/photo-1482862549707-f63cb32c5fd9?q=80&w=1200',
    stateId: 'jammu-kashmir'
  },
  {
    id: 'kumortuli-artisanal',
    name: 'Kumortuli Clay Sanctums',
    state: 'West Bengal',
    region: 'Hidden Gems',
    symbolism: 'Symbolizes artistic creation and clay-molded roots.',
    description: 'Rustic, historic artisan workshops filled with beautiful, half-finished clay sculptures of gods, offering an exceptionally soulful, organic wedding concept centered on artistic creation.',
    setting: 'Artisanal clay studios, narrow historic alleys of North Kolkata, and vintage brick facades.',
    category: 'unique',
    categoryLabel: 'Rustic Roots',
    highlights: ['Immersive clay-shaping welcome workshops', 'Rustic terracotta-themed decor', 'Classical Bengali Baul folk song ceremonies'],
    bestSeason: 'October to March',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200',
    stateId: 'west-bengal'
  },
  {
    id: 'mandu-pavilions',
    name: 'Mandu Rainwater Pools',
    state: 'Madhya Pradesh',
    region: 'Hidden Gems',
    symbolism: 'Symbolizes tragic, poetic romance and monsoon beauty.',
    description: 'Ancient, weather-worn stone pavilions, and grand ship-shaped palaces overlooking rainwater lakes, immortalizing the tragic romantic love story of Baz Bahadur and Roopmati.',
    setting: 'Medieval Afghan stone palaces, ship pavilions, and sprawling water reserviors.',
    category: 'unique',
    categoryLabel: 'Rustic Roots',
    highlights: ['Vows inside Jahaz Mahal (Ship Palace)', 'Sunset photography at Roopmati Pavilion', 'Monsoon-themed outdoor floral canopies'],
    bestSeason: 'July to September (Monsoon special), October to March',
    image: 'https://images.unsplash.com/photo-1505881506038-ac19e594d493?q=80&w=1200',
    stateId: 'madhya-pradesh'
  }
];

export function getWeddingDestination(id: string): WeddingDestination | undefined {
  return WEDDING_DESTINATIONS.find((item) => item.id === id);
}

export function getWeddingDestinationsByCategory(category: string): WeddingDestination[] {
  if (category === 'all') return WEDDING_DESTINATIONS;
  return WEDDING_DESTINATIONS.filter((item) => item.category === category);
}

export function getWeddingDestinationsByRegion(region: string): WeddingDestination[] {
  if (region === 'all') return WEDDING_DESTINATIONS;
  return WEDDING_DESTINATIONS.filter((item) => item.region === region);
}
