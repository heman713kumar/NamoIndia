export interface SignatureDish {
  name: string;
  description: string;
  image?: string;
  type: 'Vegetarian' | 'Non-Vegetarian' | 'Sweet' | 'Beverage';
}

export interface RegionalCuisine {
  id: string;
  title: string;
  tagline: string;
  region: string;
  intro: string;
  historyAndCulture: string;
  diningProtocol: string; // How to eat it (banana leaf, traditional low seating, hands)
  keyIngredients: string[];
  signatureDishes: SignatureDish[];
  bestPlacesToTry: { city: string; venue: string; desc: string }[];
  recommendedStates: string[]; // State IDs matching destinations.ts
  image: string;
}

export const CUISINES: RegionalCuisine[] = [
  {
    id: 'street-food-delhi',
    title: 'Street Food Gastronomy of Delhi',
    tagline: 'A continuous, simmering history of tangy chaat, deep-fried parathas, and spice-infused lanes.',
    region: 'North India (Delhi)',
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200',
    intro: 'Old Delhi (Shahjahanabad) is an open-air historical kitchen that has been refining sweet, sour, salty, and spicy textures since the Mughal court sat in the Red Fort in the 17th century.',
    historyAndCulture: 'The heavy spices, ghee, and deep-frying techniques developed in Delhi were originally intended to combat the mineral-heavy waters of the Yamuna River during Shah Jahan\'s reign. Today, street food in Delhi is a democratic ritual where corporate executives stand shoulder-to-shoulder with rickshaw pullers in chaotic lanes, eating off leaf-plates.',
    diningProtocol: 'Stand at roadside counters or in narrow wooden alleys, using wooden spoons or your fingers to shatter crispy potato shells. Wash it down with a cool glass of creamy lassi.',
    keyIngredients: ['Kala Namak (black mineral salt)', 'Tamarind pulp', 'Amchoor (dried mango powder)', 'Ghee', 'Yellow chilies'],
    signatureDishes: [
      {
        name: 'Dahi Bhalla',
        description: 'Soft lentil dumplings soaked in thick whipped yogurt, topped with tangy tamarind chutney, spicy mint chutney, and pomegranate seeds.',
        type: 'Vegetarian'
      },
      {
        name: 'Stuffed Paranthas of Gali Paranthe Wali',
        description: 'Whole wheat flatbreads stuffed with unusual fillings like cashews, bitter gourd, or paneer, then shallow-fried in golden ghee on massive iron tawa pans.',
        type: 'Vegetarian'
      },
      {
        name: 'Aloo Tikki',
        description: 'Shallow-fried, ultra-crispy mashed potato cakes stuffed with spiced lentils, served piping hot with chickpea curry and sweet tamarind sauce.',
        type: 'Vegetarian'
      }
    ],
    bestPlacesToTry: [
      { city: 'Chandni Chowk', venue: 'Natraj Dahi Bhalla Corner', desc: 'Serving legendary soft dahi bhallas and crispy aloo tikkis since 1940.' },
      { city: 'Old Delhi', venue: 'Gali Paranthe Wali', desc: 'A historic alley of shops dedicated entirely to custom deep-fried stuffed paranthas.' },
      { city: 'Karol Bagh', venue: 'Roshan Di Kulfi', desc: 'Famed for its gigantic, fluffy Chole Bhature and saffron pistachio kulfi.' }
    ],
    recommendedStates: ['delhi-ut']
  },
  {
    id: 'kerala-sadya-feast',
    title: 'The Legendary Kerala Sadya',
    tagline: 'An majestic, synchronous vegetarian banquet balancing the six tastes on a single banana leaf.',
    region: 'South India (Kerala)',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200',
    intro: 'Served traditionally during the harvest festival of Onam, the Sadya is a monumental vegetarian feast of up to 28 distinct dishes served in an exact layout on a fresh, biodegradable banana leaf.',
    historyAndCulture: 'Sadya is a celebration of agricultural abundance and ancient Ayurvedic nutritional principles. It emphasizes coconut, which grows in infinite groves along the backwaters, native red rice, and sour, cooling curries that balance the hot, tropical climate of the Malabar coast.',
    diningProtocol: 'Sit cross-legged on floor mats. The banana leaf must be placed with its tapered end pointing to your left. Use only your right hand to mix the curries with rice—no spoons or forks are permitted. Fold the leaf in half toward yourself when finished to show supreme satisfaction.',
    keyIngredients: ['Fresh-pressed coconut oil', 'Grated coconut milk', 'Curry leaves', 'Black mustard seeds', 'Malabar tamarind (Kodampuli)'],
    signatureDishes: [
      {
        name: 'Avial',
        description: 'A thick, dry mixture of indigenous tubers, raw banana, and drumsticks cooked with ground coconut, green chilies, yogurt, and a heavy drizzle of raw coconut oil.',
        type: 'Vegetarian'
      },
      {
        name: 'Olan',
        description: 'A delicate, cooling dish of white ash gourd and black-eyed peas simmered gently in fresh, thick coconut milk and curry leaves.',
        type: 'Vegetarian'
      },
      {
        name: 'Ada Pradhaman',
        description: 'The king of Kerala desserts; a rich, dark sweet pudding made of flat rice flakes cooked in melting palm jaggery and fresh coconut milk, garnished with ghee-fried coconut pieces.',
        type: 'Sweet'
      }
    ],
    bestPlacesToTry: [
      { city: 'Thiruvananthapuram', venue: 'Mothers Veg Plaza', desc: 'Offering authentic, unlimited Sadya served on banana leaves year-round.' },
      { city: 'Kochi', venue: 'BTH Sarovaram', desc: 'A celebrated venue specializing in traditional temple-style culinary feasts.' }
    ],
    recommendedStates: ['kerala']
  },
  {
    id: 'rajasthani-thali',
    title: 'The Royal Rajasthani Thali',
    tagline: 'Savor a rich, rustic platter shaped by dry desert sands and ancient Rajput warrior fortresses.',
    region: 'West India (Rajasthan)',
    image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1200',
    intro: 'The cuisine of Rajasthan was shaped by the state\'s arid, water-scarce geography and the hunting lifestyles of its ancient Rajput royalty, resulting in highly preserved, rich, and spice-heavy preparations.',
    historyAndCulture: 'In the dry Thar desert, fresh green vegetables were rare, leading to a heavy reliance on dried beans (like Ker and Sangri), lentils, gram flour, and dairy products like ghee, buttermilk, and curd. Spicy gravies served with heavy baked wheat rounds sustained warriors on prolonged fortress sieges.',
    diningProtocol: 'Presented in large brass or silver platters (Thalis) containing a dozen small bowls. The host will enthusiastically pour hot, melted cow ghee over your baati rounds by hand.',
    keyIngredients: ['Ghee (clarified butter)', 'Mathania red chilies', 'Gram flour (Besan)', 'Ker berries & Sangri beans', 'Buttermilk'],
    signatureDishes: [
      {
        name: 'Dal Baati Churma',
        description: 'Hard, unsalted wheat flour balls baked in fire pits, crushed by hand and soaked in hot ghee, served with a spiced mixed-lentil dal and a sweet, flaky ground-wheat crumble (Churma).',
        type: 'Vegetarian'
      },
      {
        name: 'Laal Maas',
        description: 'A fiery, slow-cooked royal mutton curry prepared with a specific local variety of hot Mathania red chilies, mustard oil, and infused with raw charcoal smoke.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Gatte ki Sabzi',
        description: 'Steamed gram-flour cylinders simmered in a tangy, thick, spiced yogurt gravy, flavored with carom seeds and dried fenugreek leaves.',
        type: 'Vegetarian'
      }
    ],
    bestPlacesToTry: [
      { city: 'Jaipur', venue: 'Chokhi Dhani', desc: 'An immersive ethnic village resort where you eat unlimited Rajasthani dishes sitting on low cushions.' },
      { city: 'Jodhpur', venue: 'Gypsy Dining Hall', desc: 'Famed throughout Western Rajasthan for its massive 30-item traditional Thali.' },
      { city: 'Udaipur', venue: 'Natraj Dining Hall', desc: 'A clean, busy heritage favorite known for authentic home-style gatte ki sabzi and hot baatis.' }
    ],
    recommendedStates: ['rajasthan']
  },
  {
    id: 'bengali-cuisine',
    title: 'Culinary Masterpieces of Bengal',
    tagline: 'A delicate balance of river fish curries, five-spice aromatics, and legendary milk-based sweets.',
    region: 'East India (West Bengal)',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=1200',
    intro: 'Bengali cuisine is celebrated for its highly sophisticated multi-course structure, subtle use of bitter mustard oils, fresh river fish catches, and a world-famous confectionery tradition.',
    historyAndCulture: 'Settled in the fertile delta of the Ganges and Brahmaputra, rice and freshwater fish (Maach) are central to Bengali identity. The region’s culinary history is heavily influenced by the Nawabs of Bengal, the British Raj, and the sweet creators (Moyras) who invented soft, spongy cheese desserts in the 19th century.',
    diningProtocol: 'Served course-by-course rather than all at once. Eat in strict order: start with the bitter shukto, follow with lentils and vegetables, progress to the delicate fish, then spicy meat, sweet-and-sour chutney, and conclude with sweets and sweet curd (Mishti Doi).',
    keyIngredients: ['Panch Phoron (five-spice blend)', 'Mustard oil', 'Mustard paste (Kasundi)', 'Fresh water fish (Hilsa/Rohu)', 'Date palm jaggery (Nolen Gur)'],
    signatureDishes: [
      {
        name: 'Shorshe Ilish',
        description: 'The prized river Hilsa fish gently simmered in a sharp, aromatic, and fiery gravy of fresh-ground yellow mustard paste, green chilies, and cold-pressed mustard oil.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Kosha Mangsho',
        description: 'A rich, dark, slow-cooked mutton curry where the meat is caramelized for hours with onions, ginger, garlic, and special spices till it clings to the bone.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Rosogolla & Sandesh',
        description: 'Soft, spongy chenna cheese balls boiled in sugar syrup, paired with delicate, dry sweets made of milk solids sweetened with seasonal liquid date-palm jaggery.',
        type: 'Sweet'
      }
    ],
    bestPlacesToTry: [
      { city: 'Kolkata', venue: '6 Ballygunge Place', desc: 'The premier fine-dining mansion serving authentic, multi-course Bengali heritage meals.' },
      { city: 'Kolkata', venue: 'Kasturi Restaurant', desc: 'A legendary diner celebrated for its spicy, aromatic Dhakai-style seafood and fish-head curries.' },
      { city: 'Kolkata', venue: 'Bhim Chandra Nag', desc: 'An ancient sweet shop operating since 1826, famed for inventing historic Sandesh varieties.' }
    ],
    recommendedStates: ['west-bengal']
  },
  {
    id: 'goan-cuisine',
    title: 'The Coastal Alchemy of Goa',
    tagline: 'A fiery, tangy fusion of coastal Konkani seafood and centuries of Portuguese maritime heritage.',
    region: 'West India (Goa)',
    image: 'https://images.unsplash.com/photo-1512132411229-c30391241dd8?q=80&w=1200',
    intro: 'Goan cuisine is a vibrant, tropical tapestry defined by fresh ocean catches, tangy country vinegars, fiery red chilies, and the heavy use of coconut milk and local cashew feni.',
    historyAndCulture: 'Goa\'s 450 years of Portuguese rule created an extraordinary East-meets-West culinary fusion. Local Konkani cooks integrated European ingredients—such as pork, vinegar, tomatoes, potatoes, and cashew nuts—with local coastal spices, creating legendary dishes like Vindaloo (originally Carne de Vinha d\'Alhos).',
    diningProtocol: 'Best enjoyed at beachside shacks or inside whitewashed Portuguese-era villas, paired with fresh steamed red rice and local cashew-based spirits.',
    keyIngredients: ['Toddy vinegar (coconut-fermented)', 'Kashmiri/Goan red chilies', 'Kokum fruit', 'Fresh grated coconut', 'Tamarind pulp'],
    signatureDishes: [
      {
        name: 'Goan Fish Curry',
        description: 'Fresh kingfish or pomfret simmered in a velvety, golden-orange gravy made of fresh-ground coconut paste, sour tamarind, and local red chilies.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Pork Vindaloo',
        description: 'A highly spicy, tangy curry made of tender pork shoulder marinated in a paste of hot dried red chilies, garlic, ginger, and sharp palm toddy vinegar.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Bebinca',
        description: 'A rich, traditional 16-layered baked dessert made of coconut milk, ghee, eggs, sugar, and flour, flavored with fresh nutmeg.',
        type: 'Sweet'
      }
    ],
    bestPlacesToTry: [
      { city: 'Panaji', venue: 'The Verandah', desc: 'An elegant venue serving traditional homestyle Goan-Portuguese fusion inside an old-world hotel.' },
      { city: 'Anjuna', venue: 'Mum\'s Kitchen', desc: 'A celebrated restaurant dedicated to preserving ancestral, home-cooked Goan family recipes.' },
      { city: 'Margao', venue: 'Martin\'s Corner', desc: 'A sprawling, lively coastal favorite famous for butter-garlic crab and fresh Goan fish curries.' }
    ],
    recommendedStates: ['goa']
  },
  {
    id: 'punjabi-cuisine',
    title: 'Bountiful Tandoors of Punjab',
    tagline: 'Witness the pure, hearty agrarian abundance of butter-brushed lentils, clay-oven tandoors, and winter greens.',
    region: 'North India (Punjab)',
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?q=80&w=1200',
    intro: 'Punjabi cuisine represents the robust, warm heart of India\'s northern breadbasket, celebrated for its direct-fire clay ovens (tandoor), rich dairy ingredients, and comforting winter greens.',
    historyAndCulture: 'Punjab\'s flat, fertile plains and hardworking agrarian lifestyle gave rise to hearty, energetic meals. Cooking revolves around the communal village tandoor (Sanjha Chulha), where women gathered to bake wheat flatbreads. The heavy use of fresh-churned white butter, cream, and paneer highlights the state\'s ancient cattle herding culture.',
    diningProtocol: 'Tear warm, tandoor-baked flatbreads with your hands, using them to scoop up thick lentils and rich chicken gravies. Pair with raw onions, green chilies, and a huge glass of cold lassi.',
    keyIngredients: ['White butter (Makhan)', 'Sarson (mustard greens)', 'Kasuri Methi (dried fenugreek leaves)', 'Paneer', 'Ginger & Garlic paste'],
    signatureDishes: [
      {
        name: 'Sarson da Saag & Makki di Roti',
        description: 'Slow-simmered mustard greens, spinach, and bathua leaves cooked with maize flour, heavily dolloped with white butter, served with flat cornmeal breads.',
        type: 'Vegetarian'
      },
      {
        name: 'Butter Chicken (Murgh Makhani)',
        description: 'Tender tandoori chicken pieces simmered in a velvety, sweet-and-savory tomato gravy enriched with fresh cream, cashew paste, and butter.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Dal Makhani',
        description: 'Black lentils and kidney beans slow-simmered on open charcoal embers for 24 hours, finished with heavy cream and fresh butter.',
        type: 'Vegetarian'
      }
    ],
    bestPlacesToTry: [
      { city: 'Amritsar', venue: 'Kesar Da Dhaba', desc: 'Operating since 1916, famous for black dal cooked in pure ghee, served in a narrow historic lane.' },
      { city: 'Amritsar', venue: 'Bharawan Da Dhaba', desc: 'An iconic dhaba offering authentic, piping-hot Amritsari Kulcha stuffed with spiced potatoes.' },
      { city: 'Jalandhar', venue: 'Haveli', desc: 'A grand themed highway dhaba showcasing rustic Punjabi rural life and rich traditional food.' }
    ],
    recommendedStates: ['punjab', 'haryana']
  },
  {
    id: 'south-indian-tiffin',
    title: 'South Indian Tiffin & Filter Coffee',
    tagline: 'Light, fermented steamed rice cakes, crispy golden crepes, and copper-poured chicory coffee.',
    region: 'South India (Tamil Nadu/Karnataka)',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1200',
    intro: 'The term "Tiffin" refers to light, satisfying morning or evening snacks in South India. It is a highly scientific culinary culture focusing on fermented, easily digestible rice-and-lentil batters.',
    historyAndCulture: 'Fermented foods have been described in ancient South Indian texts dating back 1,000 years. Fermenting black gram and rice overnight breaks down complex nutrients, creating airy, fluffy idli cakes and thin, crispy dosa crepes that are exceptionally gentle on the stomach. Paired with fresh coconut chutney and hot lentil sambar, it is a global benchmark of healthy breakfast design.',
    diningProtocol: 'Eat standing up at buzzing "Darshini" metal counters or sitting in traditional brass-accented cafes. Pour filter coffee back and forth between a brass cup and saucer from a height to cool it and create thick foam.',
    keyIngredients: ['Fermented rice-and-lentil batter', 'Chutney dal', 'Fresh coconut pulp', 'Chicory filter coffee powder', 'Tamarind'],
    signatureDishes: [
      {
        name: 'Masala Dosa',
        description: 'A thin, golden-crisp crepe made of fermented rice-and-lentil batter, smeared inside with red garlic-chili paste, stuffed with soft-mashed spiced potatoes, served with coconut chutney.',
        type: 'Vegetarian'
      },
      {
        name: 'Ghee Podi Idli',
        description: 'Pillowy, steamed white rice cakes cut into quarters, heavily coated in a nutty, fiery dry spice powder (Podi) made of roasted lentils and dry chilies, drenched in pure melted ghee.',
        type: 'Vegetarian'
      },
      {
        name: 'Filter Coffee',
        description: 'A dark, strong decoction brewed through a traditional double-chambered metal filter, mixed with hot boiled milk and sugar, poured dynamically to form a dense head of froth.',
        type: 'Beverage'
      }
    ],
    bestPlacesToTry: [
      { city: 'Bengaluru', venue: 'MTR (Mavalli Tiffin Room)', desc: 'Operating since 1924 near Lalbagh, the historic inventor of the fluffy Rava Idli.' },
      { city: 'Bengaluru', venue: 'Vidyarthi Bhavan', desc: 'A legendary heritage eatery in Gandhi Bazaar famous for its thick, crispy, ghee-drenched Masala Dosas.' },
      { city: 'Chennai', venue: 'Saravana Bhavan', desc: 'The global benchmark for authentic, high-quality, and standardized South Indian tiffin items.' }
    ],
    recommendedStates: ['tamil-nadu', 'karnataka']
  },
  {
    id: 'hyderabadi-biryani',
    title: 'The Royal Hyderabadi Biryani',
    tagline: 'Savor the pinnacle of aromatic slow-steamed basmati rice and tender saffron-infused meat.',
    region: 'Deccan India (Telangana)',
    image: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?q=80&w=1200',
    intro: 'Hyderabadi Biryani is a highly sophisticated culinary art form that originated in the kitchens of the Nizams of Hyderabad, blending Mughlai aromatic techniques with fiery Deccan spices.',
    historyAndCulture: 'The Nizam of Hyderabad, originally a governor under the Mughal Empire, established a highly refined royal court that patronized master cooks. They perfected the "Kachchi" biryani style, where raw, marinated lamb is layered with partially cooked, long-grain basmati rice in a heavy copper pot (Deg), sealed hermetically with wheat dough, and slow-steamed over hot coals (Dum cooking).',
    diningProtocol: 'Served on large plates, ensuring you scoop up all three distinct layers: the white top rice, the golden saffron-infused middle rice, and the highly spiced tender meat from the bottom.',
    keyIngredients: ['Aged long-grain Basmati rice', 'Saffron strands soaked in milk', 'Fried onions (Biryanis)', 'Mace & Nutmeg', 'Yogurt & Raw papaya paste'],
    signatureDishes: [
      {
        name: 'Kachchi Gosht ki Biryani',
        description: 'Raw, tender lamb cubes marinated overnight in spiced yogurt and raw papaya paste, layered with long-grain basmati rice, slow-cooked in a sealed dough-pot.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Mirchi ka Salan',
        description: 'A rich, tangy, and nutty side curry made of wide, mild green chilies simmered in a creamy paste of roasted peanuts, sesame seeds, tamarind, and dry coconut.',
        type: 'Vegetarian'
      },
      {
        name: 'Double ka Meetha',
        description: 'A rich, royal dessert made of fried bread slices soaked in saffron-infused milk and sugar syrup, topped with cardamom and silver foil (varq).',
        type: 'Sweet'
      }
    ],
    bestPlacesToTry: [
      { city: 'Hyderabad', venue: 'Paradise Biryani', desc: 'The absolute legendary standard for Hyderabadi Biryani, operating since 1953 in Secunderabad.' },
      { city: 'Hyderabad', venue: 'Bawarchi', desc: 'Famed among locals for serving the most authentic, spiced, and smoky clay-oven Dum Biryani.' },
      { city: 'Hyderabad', venue: 'Jewel of Nizam', desc: 'A luxury fine-dining destination offering royal Nizami heritage dishes and stunning lake views.' }
    ],
    recommendedStates: ['telangana', 'andhra-pradesh']
  },
  {
    id: 'awadhi-cuisine',
    title: 'The Delicate Aromas of Awadh',
    tagline: 'Dine like the Nawabs on melt-in-the-mouth smoked kebabs and slow-cooked royal stews.',
    region: 'North India (Uttar Pradesh)',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200',
    intro: 'Awadhi cuisine represents the highly refined royal dining culture of Lucknow, characterized by subtle, elegant spices, slow-cooking (Dum style), and meats tenderized to melt in the mouth.',
    historyAndCulture: 'The Nawabs of Awadh were legendary patrons of culinary arts. A famous historical tale recounts how a toothless Nawab ordered his cooks to create a kebab that required zero chewing. The royal chefs experimented with raw papaya paste and 150 secret spices, resulting in the silky, delicate Galouti kebab.',
    diningProtocol: 'Best experienced inside historic Lucknow homes or fine-dining venues, where dishes are served with paper-thin flatbreads (Rumali Roti) and eaten with utmost elegance.',
    keyIngredients: ['Kewra water (screwpine essence)', 'Rose water', 'Raw papaya (natural tenderizer)', 'Saffron', 'Mace (Javitri)'],
    signatureDishes: [
      {
        name: 'Galouti Kebab',
        description: 'Ultra-finely minced lamb or beef patties smoked with charcoal, flavored with a secret 150-spice blend, cooked on a wide copper griddle till they achieve a buttery, paste-like texture.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Nihari & Kulcha',
        description: 'A rich, slow-cooked meat stew simmered overnight in a heavy copper pot with marrow bones and local spices, served with a fluffy, layered baked flatbread (Kulcha).',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Shahi Tukda',
        description: 'A rich dessert made of ghee-fried bread rounds soaked in saffron sugar syrup and topped with rabri (condensed sweet milk solids).',
        type: 'Sweet'
      }
    ],
    bestPlacesToTry: [
      { city: 'Lucknow', venue: 'Tunday Kababi', desc: 'The world-famous shop in Aminabad operating since 1905, serving the original melt-in-your-mouth Galouti kebabs.' },
      { city: 'Lucknow', venue: 'Idris Biryani', desc: 'A rustic heritage favorite known for its intensely aromatic mutton biryani cooked on firewood.' },
      { city: 'Lucknow', venue: 'Oudhyana', desc: 'A luxurious fine-dining venue offering the absolute peak of traditional Nawabi cuisine and hospitality.' }
    ],
    recommendedStates: ['uttar-pradesh']
  },
  {
    id: 'gujarati-thali',
    title: 'The Intricate Gujarati Thali',
    tagline: 'A colorful, sweet-and-savory vegetarian feast reflecting sweet-sour balance.',
    region: 'West India (Gujarat)',
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?q=80&w=1200',
    intro: 'The Gujarati Thali is an extraordinary vegetarian banquet containing up to 15 dishes that beautifully balance sweet, sour, salty, and spicy notes, reflecting the dry, coastal agrarian state.',
    historyAndCulture: 'Gujarat\'s dominant Jain and Vaishnav mercantile traditions created a highly sophisticated vegetarian culinary culture. In drylands, cooks added small pinches of sweet jaggery or sugar to savory curries and dals to offset bitter local water, creating the region\'s signature sweet-and-savory flavor profile.',
    diningProtocol: 'Served in high-walled steel or bronze platters. Standard service is continuous and unlimited; servers carry hot vessels through the dining room and replenish your bowls the second they empty.',
    keyIngredients: ['Jaggery (raw brown sugar)', 'Asafoetida (Hing)', 'Gram flour (Besan)', 'Curd & Buttermilk', 'Sesame seeds'],
    signatureDishes: [
      {
        name: 'Dhokla & Khandvi',
        description: 'Savory, airy steamed cakes made of fermented gram-flour batter, alongside delicate, paper-thin rolled yellow sheets made of cooked gram-flour and yogurt, tempered with mustard seeds.',
        type: 'Vegetarian'
      },
      {
        name: 'Undhiyu',
        description: 'A classic winter vegetable masterpiece made of broad beans, raw banana, sweet potato, and eggplant cooked upside-down in underground clay pots heated by coal fires.',
        type: 'Vegetarian'
      },
      {
        name: 'Gujarati Kadhi',
        description: 'A sweet, sour, and silky liquid soup made of sour yogurt and gram flour, flavored with ginger, green chilies, and a sizzling temper of cloves and cinnamon.',
        type: 'Vegetarian'
      }
    ],
    bestPlacesToTry: [
      { city: 'Ahmedabad', venue: 'Agashiye', desc: 'A magnificent heritage terrace restaurant serving unlimited Gujarati Thalis inside an ancient mansion.' },
      { city: 'Ahmedabad', venue: 'House of MG', desc: 'An iconic boutique hotel preserving old Ahmedabad\'s culinary crafts and family recipes.' },
      { city: 'Ahmedabad', venue: 'Chandra Vilas', desc: 'Operating since 1900, famous for introducing Gandhiji and Sardar Patel to hot fafda and jalebi.' }
    ],
    recommendedStates: ['gujarat']
  },
  {
    id: 'kashmiri-wazwan',
    title: 'The Regal Kashmiri Wazwan',
    tagline: 'An elaborate, 36-course royal meat banquet prepared by master mountain chefs.',
    region: 'Far North India (Jammu & Kashmir)',
    image: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1200',
    intro: 'Wazwan is a grand, high-art multi-course meat banquet in Kashmir, traditionally prepared by hereditary master chefs called "Wazas" inside outdoor copper vessels.',
    historyAndCulture: 'Wazwan developed in the 15th century, influenced by Central Asian, Persian, and Afghan chefs who migrated to the Kashmir Valley during the rule of Timur. It is a highly demanding craft: the meat must be freshly slaughtered and hand-pounded for hours using heavy wooden mallets on stone blocks to achieve a silky paste.',
    diningProtocol: 'Guests sit in groups of four on carpeted floors. Wash your hands in a portable copper basin called a Tash-t-Nari. Food is served on a single, massive engraved copper platter called a "Trami", shared among the group of four.',
    keyIngredients: ['Kashmiri dried cockscomb flower (Mawal)', 'Kashmiri red chili powder', 'Dry ginger powder', 'Asafoetida', 'Saffron strands'],
    signatureDishes: [
      {
        name: 'Rogan Josh',
        description: 'A world-famous, aromatic lamb curry cooked with a gravy of dried Kashmiri red chilies, ginger, and the vibrant red dye extracted from the local cockscomb flower.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Gustaaba',
        description: 'The crowning final dish of the Wazwan; giant, velvety, hand-pounded mutton meatballs simmered slowly in a rich, velvety, and aromatic white yogurt-and-ghee gravy.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Kahwa',
        description: 'A highly soothing, fragrant green tea brewed with saffron strands, whole green cardamom, cinnamon, and served garnished with slivered almonds.',
        type: 'Beverage'
      }
    ],
    bestPlacesToTry: [
      { city: 'Srinagar', venue: 'Ahdoos', desc: 'Operating since 1918 on the banks of the Jhelum, the premier historical venue for authentic Wazwan.' },
      { city: 'Srinagar', venue: 'Mughal Darbar', desc: 'A celebrated local favorite known for its traditional copper-trami service and gustaaba.' }
    ],
    recommendedStates: ['jammu-kashmir']
  },
  {
    id: 'northeast-cuisine',
    title: 'Organic Flavors of the Northeast',
    tagline: 'Savor clean, fermented, and oil-free dishes from Assam, Nagaland, and Manipur.',
    region: 'Northeast India (Seven Sisters)',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200',
    intro: 'Northeast Indian cuisine represents a spectacular departure from typical heavy Indian spice gravies, emphasizing fresh forest herbs, slow wood-fired smoking, fermentation, and zero oil.',
    historyAndCulture: 'The cooking of the hilly Northeast states (Assam, Nagaland, Manipur) is closely tied to their pristine forest geography and tribal heritage. Cooking techniques focus on boiling, slow-steaming inside green bamboo hollows, fermenting beans and bamboo shoot, and seasoning with some of the hottest chilies in the world (like the Bhut Jolokia).',
    diningProtocol: 'Served in rustic clay pottery or on wide green wild leaves. Savor the clean, earthy, and highly pungent flavors with steamed sticky rice.',
    keyIngredients: ['Fermented bamboo shoot', 'Bhut Jolokia (Ghost Pepper)', 'Axone (fermented soybean paste)', 'Fresh ginger flower', 'Szechuan pepper (Tejpatta)'],
    signatureDishes: [
      {
        name: 'Smoked Pork with Bamboo Shoot',
        description: 'Tender pork chunks slow-smoked over oakwood, cooked with pungent fermented bamboo shoot, wild herbs, and fresh fiery Ghost Pepper slices.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Masor Tenga',
        description: 'A light, refreshing, and tangy Assamese fish curry cooked with fresh river catch, tomatoes, and the sour juice of local elephant apples or lemons.',
        type: 'Non-Vegetarian'
      },
      {
        name: 'Eromba of Manipur',
        description: 'A pungent, traditional Manipuri vegetable mash made of boiled seasonal greens, potatoes, and red chilies, flavored with fermented dry fish (Ngari).',
        type: 'Non-Vegetarian'
      }
    ],
    bestPlacesToTry: [
      { city: 'Guwahati', venue: 'Paradise Restaurant', desc: 'A celebrated Assamese heritage diner serving authentic multi-dish Assamese Thalis.' },
      { city: 'Kohima', venue: 'Sakhrie’s Kitchen', desc: 'A beautiful local restaurant overlooking the green hills, serving authentic Naga smoked meats and Axone curries.' },
      { city: 'Guwahati', venue: 'Michinga', desc: 'A popular restaurant specializing in tribal cuisines of Nagaland, Meghalaya, and Manipur.' }
    ],
    recommendedStates: ['assam', 'nagaland', 'manipur']
  }
];

export function getRelatedCuisines(currentId: string, limit: number = 3): RegionalCuisine[] {
  return CUISINES.filter(c => c.id !== currentId).slice(0, limit);
}
