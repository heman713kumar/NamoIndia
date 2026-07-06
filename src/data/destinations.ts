import { Destination } from '../types';

export const DESTINATIONS: Destination[] = [
  {
    id: 'andhra-pradesh',
    name: 'Andhra Pradesh',
    type: 'state',
    region: 'South',
    capital: 'Amaravati',
    description: 'The Essence of Incredible India, known for its majestic temples, long coastline, and rich history.',
    overview: 'Andhra Pradesh lies on the southeastern coast of India. Home to Tirumala Venkateswara Temple, one of the world\'s most visited religious sites, the state blends spiritual heritage with natural wonders like the Araku Valley, Borra Caves, and the serene beaches of Visakhapatnam.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Visakhapatnam (VTZ), Vijayawada (VGA), or Tirupati (TIR) airports.',
      rail: 'Major rail junctions include Vijayawada, Visakhapatnam, and Tirupati, connected nationwide.',
      road: 'Serviced extensively by NH16 with excellent state transport (APSRTC) links.'
    },
    signatureFoods: ['Hyderabadi Biryani (heritage share)', 'Gongura Pachadi (Sorrel Leaves Pickle)', 'Pesarattu (Mung Bean Crepe)', 'Pootharekulu (Sweet Paper-thin Dessert)'],
    topAttractions: [
      {
        name: 'Tirumala Venkateswara Temple',
        description: 'A historic temple on Tirumala hill, celebrated for its Dravidian architecture and profound sanctity.',
        image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=600'
      },
      {
        name: 'Araku Valley & Borra Caves',
        description: 'A beautiful hill station famed for coffee plantations, indigenous tribes, and millions-of-years-old stalactite formations.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Visakhapatnam Beaches',
        description: 'The pristine coastal curve of Rishikonda and RK Beach framed by lush eastern ghats hills.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800'
    ],
    tags: ['culture', 'nature', 'heritage']
  },
  {
    id: 'arunachal-pradesh',
    name: 'Arunachal Pradesh',
    type: 'state',
    region: 'Northeast',
    capital: 'Itanagar',
    description: 'The Land of the Rising Sun, offering mist-cloaked peaks, vibrant monasteries, and rich tribal heritage.',
    overview: 'Nestled in the outer Himalayas, Arunachal Pradesh is India\'s easternmost state. It is a biodiverse paradise boasting snow-capped mountains, deep river valleys like the Siang, and the magnificent Tawang Monastery, which stands at over 10,000 feet.',
    bestTimeToVisit: 'October to April',
    howToReach: {
      air: 'Donyi Polo Airport in Itanagar (HGI) or fly to Guwahati (GAU) in Assam and drive up.',
      rail: 'The nearest railway station is Naharlagun, which is close to Itanagar.',
      road: 'Challenging but scenic mountain highways connect Itanagar with Guwahati and Tezpur.'
    },
    signatureFoods: ['Thukpa (Noodle Soup)', 'Momos (Steamed Dumplings)', 'Zan (Finger Millet Porridge)', 'Apong (Fermented Rice Beer)'],
    topAttractions: [
      {
        name: 'Tawang Monastery',
        description: 'The largest monastery in India, founded in the 17th century, preserving rare Buddhist scriptures.',
        image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
      },
      {
        name: 'Ziro Valley',
        description: 'A picturesque plateau, home to the Apatani tribe, famed for pine hills and the Ziro Music Festival.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Namdapha National Park',
        description: 'A vast, high-altitude rainforest hosting tigers, leopards, and the rare red panda.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'culture']
  },
  {
    id: 'assam',
    name: 'Assam',
    type: 'state',
    region: 'Northeast',
    capital: 'Dispur',
    description: 'The gateway to Northeast India, famous for its lush tea estates, silk weaving, and wildlife sanctuaries.',
    overview: 'Dominating the fertile Brahmaputra River valley, Assam is a land of unmatched natural beauty. It hosts the world\'s largest population of the great Indian one-horned rhinoceros in Kaziranga National Park, and is renowned globally for its bold, malty Assam teas.',
    bestTimeToVisit: 'November to April',
    howToReach: {
      air: 'Guwahati International Airport (GAU) is the busiest airport in Northeast India.',
      rail: 'Guwahati Railway Station connects the region thoroughly with direct express trains to major cities.',
      road: 'An extensive network of national highways links Assam to neighboring states.'
    },
    signatureFoods: ['Masor Tenga (Tangy Fish Curry)', 'Khar (Traditional Alkaline Dish)', 'Duck Meat Curry', 'Pitha (Rice Cakes)'],
    topAttractions: [
      {
        name: 'Kaziranga National Park',
        description: 'A UNESCO World Heritage site sheltering two-thirds of the world\'s great one-horned rhinoceroses in fertile floodplains.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      },
      {
        name: 'Manas Wildlife Sanctuary',
        description: 'A beautiful UNESCO-listed reserve in the foothills of the Himalayas, home to the rare pygmy hog, golden langurs, and wild tigers.',
        image: 'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=600'
      },
      {
        name: 'Kamakhya Temple',
        description: 'An ancient, revered Shakti temple situated on Nilachal Hill in Guwahati, representing legendary Tantric worship.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      },
      {
        name: 'Majuli Island',
        description: 'The world\'s largest river island, representing the hub of Neo-Vaishnavite culture, monastic institutions, and traditional mask-making.',
        image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
      'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=800'
    ],
    tags: ['nature', 'culture', 'heritage']
  },
  {
    id: 'bihar',
    name: 'Bihar',
    type: 'state',
    region: 'East',
    capital: 'Patna',
    description: 'The cradle of Buddhism and ancient empires, rich in archaeological treasures and sacred spiritual shrines.',
    overview: 'Bihar is where prince Siddhartha attained enlightenment to become Buddha, making Bodh Gaya one of the holiest places on earth. Home to Nalanda, the world\'s oldest residential university, and Patna, the ancient capital of Pataliputra, Bihar resonates with deep spiritual and intellectual history.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Jay Prakash Narayan Airport in Patna (PAT) or Gaya Airport (GAY).',
      rail: 'Patna Junction and Gaya are massive, well-connected rail hubs with direct trains to Delhi, Mumbai, and Kolkata.',
      road: 'Extensively connected by national highways crossing the fertile Gangetic plains.'
    },
    signatureFoods: ['Litti Chokha (Baked wheat balls with spiced gram flour & mashed eggplant/potato)', 'Sattu Paratha', 'Chana Ghugni', 'Thekua (Sweet Wheat Biscuit)'],
    topAttractions: [
      {
        name: 'Mahabodhi Temple, Bodh Gaya',
        description: 'UNESCO World Heritage site marking the spot where Gautama Buddha attained supreme enlightenment under the Bodhi tree.',
        image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=600'
      },
      {
        name: 'Ruins of Nalanda University',
        description: 'The archaeological remains of a prestigious 5th-century Buddhist learning center that attracted global scholars.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Tomb of Sher Shah Suri, Sasaram',
        description: 'A magnificent Indo-Islamic red sandstone mausoleum sitting beautifully in the middle of an artificial lake.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=800'
    ],
    tags: ['heritage', 'wellness', 'culture']
  },
  {
    id: 'chhattisgarh',
    name: 'Chhattisgarh',
    type: 'state',
    region: 'Central',
    capital: 'Raipur',
    description: 'An unexplored wonderland of colossal waterfalls, dense forest reserves, and diverse tribal art.',
    overview: 'Boasting nearly 44% forest cover, Chhattisgarh is an off-the-beaten-path paradise. It features spectacular geologic wonders like Kutumsar Caves, the roaring horseshoe of Chitrakote Falls (often called the Niagara of India), and deeply entrenched Gond tribal art and traditions.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Swami Vivekananda Airport in Raipur (RPR) has frequent daily flights to Delhi, Mumbai, and Bengaluru.',
      rail: 'Raipur and Bilaspur are major stations on the main Howrah-Mumbai rail route.',
      road: 'Well-maintained national highways connect Raipur with neighboring states.'
    },
    signatureFoods: ['Chela (Rice Flour Crepe)', 'Muthia (Steamed Rice Dumplings)', 'Bafauri (Gram Flour snack)', 'Fara (Rice roll)'],
    topAttractions: [
      {
        name: 'Chitrakote Falls',
        description: 'India\'s widest waterfall, which turns into a roaring, mud-red amphitheater of water during the monsoons.',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600'
      },
      {
        name: 'Bhoramdeo Temple',
        description: 'An exquisitely carved 11th-century temple complex nestled in the Maikal hills, dedicated to Lord Shiva.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Kanger Valley National Park',
        description: 'A densely wooded biosphere sheltering deep limestone caves, subterranean streams, and the Hill Myna.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'culture']
  },
  {
    id: 'goa',
    name: 'Goa',
    type: 'state',
    region: 'West',
    capital: 'Panaji',
    description: 'A sunny coastal paradise of golden beaches, Baroque architecture, and vibrant, laidback seaside life.',
    overview: 'Goa is India\'s smallest state but arguably its most famous coastal getaway. Blending Portuguese colonial history, whitewashed churches, lush spice plantations, and golden sand beaches lined with palm trees, it offers a beautifully distinct "susegad" (laidback) way of life.',
    bestTimeToVisit: 'November to February',
    howToReach: {
      air: 'Fly to Manohar International Airport, Mopa (GOX) or Dabolim Airport (GOI).',
      rail: 'Madgaon (MAO) and Thivim (THVM) are the main railway junctions.',
      road: 'Connected via NH66 from Mumbai and Bangalore with beautiful coastal views.'
    },
    signatureFoods: ['Goan Fish Curry', 'Pork Vindaloo', 'Bebinca (Multi-layered Coconut Dessert)', 'Feni (Local Cashew/Coconut Spirit)'],
    topAttractions: [
      {
        name: 'Basilica of Bom Jesus',
        description: 'A UNESCO World Heritage Baroque church holding the sacred relics of Saint Francis Xavier.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      },
      {
        name: 'Palolem & Anjuna Beaches',
        description: 'Beautiful sandy bays popular for watersports, beach shacks, yoga retreats, and sunset parties.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      },
      {
        name: 'Dudhsagar Falls',
        description: 'A magnificent four-tiered waterfall on the Mandovi River, looking like cascading sea of milk.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800'
    ],
    tags: ['food', 'adventure', 'nature', 'family']
  },
  {
    id: 'gujarat',
    name: 'Gujarat',
    type: 'state',
    region: 'West',
    capital: 'Gandhinagar',
    description: 'The land of the white salt desert, majestic Asiatic lions, vibrant festivals, and deep mercantile heritage.',
    overview: 'Gujarat is a culturally rich state on India\'s western coast. It offers a stunning spectrum of experiences, from the vast white expanse of the Rann of Kutch to the ancient stepwells of Patan, the historic lanes of Ahmedabad (India\'s first UNESCO World Heritage City), and Gir National Park.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Sardar Vallabhbhai Patel International Airport in Ahmedabad (AMD) is highly connected globally.',
      rail: 'Ahmedabad, Vadodara, and Surat are major, well-connected railway junctions.',
      road: 'Gujarat features some of the best-engineered and smoothest expressways in India.'
    },
    signatureFoods: ['Dhokla (Steamed Gram Flour cake)', 'Khandvi', 'Gujarati Thali (Diverse Vegetarian feast)', 'Thepla (Flatbread)'],
    topAttractions: [
      {
        name: 'Dholavira: A Harappan City',
        description: 'A masterpiece of Bronze Age urban planning and water engineering situated in the salt plains of the Rann of Kutch.',
        image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=600'
      },
      {
        name: 'The Great Rann of Kutch',
        description: 'The world\'s largest salt desert, which glows ethereally white under a full moon, home to the Rann Utsav cultural carnival.',
        image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=600'
      },
      {
        name: 'Rani ki Vav (The Queen\'s Stepwell)',
        description: 'An exceptionally grand, subterranean 11th-century stepwell constructed as an inverted temple with seven levels of exquisite sculptures.',
        image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=600'
      },
      {
        name: 'Champaner-Pavagadh Archaeological Park',
        description: 'A spectacular, complete, largely unexcavated pre-Mughal Islamic city and ancient sacred hill fortress.',
        image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=600'
      },
      {
        name: 'Statue of Unity',
        description: 'The world\'s tallest statue (182 meters), dedicated to the iron man of India, Sardar Vallabhbhai Patel.',
        image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=600'
      },
      {
        name: 'Gir National Park',
        description: 'The dry-deciduous forest sanctuary that serves as the exclusive remaining home of the Asiatic Lion.',
        image: 'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=800',
      'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=800'
    ],
    tags: ['culture', 'nature', 'heritage', 'family']
  },
  {
    id: 'haryana',
    name: 'Haryana',
    type: 'state',
    region: 'North',
    capital: 'Chandigarh',
    description: 'A dynamic state blending historic battlegrounds of the Mahabharata with ultra-modern corporate hubs.',
    overview: ' Haryana wraps around Delhi on three sides. It is a land deeply rooted in history, featuring Kurukshetra (the legendary battlefield of the Mahabharata) and the Indus Valley Civilization ruins of Rakhigarhi, contrasted alongside the skyscrapers of Gurugram.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Indira Gandhi International Airport (DEL) in neighboring Delhi.',
      rail: 'Major stations include Ambala, Kurukshetra, and Gurgaon, closely integrated with the Northern Railway.',
      road: 'Highly integrated national highways (NH44, NH48) connect all parts of the state.'
    },
    signatureFoods: ['Singri ki Sabzi', 'Bajra Khichri', 'Kachri ki Chutney', 'Lassi (Thick sweet yogurt drink)'],
    topAttractions: [
      {
        name: 'Kurukshetra',
        description: 'A sacred town of historic lakes, temples, and places where Lord Krishna delivered the Bhagavad Gita.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Sultanpur National Park',
        description: 'A shallow bird sanctuary hosting hundreds of migratory species from Siberia and Europe during winter.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      },
      {
        name: 'Surajkund',
        description: 'An ancient circular reservoir famous for hosting the colorful annual International Crafts Mela.',
        image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'family']
  },
  {
    id: 'himachal-pradesh',
    name: 'Himachal Pradesh',
    type: 'state',
    region: 'North',
    capital: 'Shimla',
    description: 'The Land of Snows, featuring towering Himalayan ranges, alpine meadows, and thrilling ski runs.',
    overview: 'Himachal Pradesh is a northern paradise defined by dramatic geography. It is home to world-renowned hill resorts like Shimla, Manali, and Dharamshala (the spiritual home of the Dalai Lama), as well as the high-altitude trans-Himalayan cold deserts of Spiti Valley.',
    bestTimeToVisit: 'March to June & September to December',
    howToReach: {
      air: 'Small airports in Kangra (Gaggal), Kullu (Bhuntar), or fly to Chandigarh (IXC) and drive.',
      rail: 'Take the famous UNESCO Kalka-Shimla Toy Train or travel by main rail to Pathankot.',
      road: 'Highly adventurous mountain highways connect Delhi and Chandigarh to Manali and beyond.'
    },
    signatureFoods: ['Dham (Traditional Festive Feast)', 'Siddu (Stuffed Steamed Yeast Bread)', 'Chha Gosht (Spiced Mutton)', 'Trout Fish Curry'],
    topAttractions: [
      {
        name: 'Great Himalayan National Park',
        description: 'A spectacular UNESCO World Heritage park conserving rare high-altitude Himalayan species, untouched oak forests, and pristine alpine meadows.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      },
      {
        name: 'Kalka-Shimla Toy Railway',
        description: 'A historic narrow-gauge mountain railway crossing dozens of brick-arched bridges and winding through scenic pine slopes.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600'
      },
      {
        name: 'Spiti Valley',
        description: 'A cold-desert high-altitude valley dotted with ancient, fortress-like Tibetan monasteries.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      },
      {
        name: 'Dharamshala & McLeod Ganj',
        description: 'Scenic hillside settlements under the Dhauladhar range, known for spiritual Buddhist learning.',
        image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
      },
      {
        name: 'Solang Valley & Rohtang Pass',
        description: 'Majestic mountain passes offering year-round snow activities, paragliding, skiing, and trekking.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness']
  },
  {
    id: 'jharkhand',
    name: 'Jharkhand',
    type: 'state',
    region: 'East',
    capital: 'Ranchi',
    description: 'The Land of Forests, boasting mineral-rich hills, sacred tribal shrines, and cascading forest waterfalls.',
    overview: 'Jharkhand is characterized by its rolling, forested Chota Nagpur Plateau. Blessed with abundant mineral wealth, majestic waterfalls like Jonha and Hundru, and sacred temples like Baidyanath Dham, it represents a beautiful intersection of tribal traditions and rugged wilderness.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Birsa Munda Airport in Ranchi (IXR) connects with Delhi, Kolkata, and Mumbai.',
      rail: 'Ranchi, Jamshedpur, and Dhanbad are major well-connected railway stations.',
      road: 'National Highway 19 (part of the Golden Quadrilateral) cuts across the state.'
    },
    signatureFoods: ['Duska (Fried Rice & Lentil cake)', 'Litti (Sattu-stuffed baked roll)', 'Arsa Roti', 'Rugra (Wild Mushrooms)'],
    topAttractions: [
      {
        name: 'Baidyanath Jyotirlinga Temple, Deoghar',
        description: 'A major Hindu pilgrimage destination housing one of the twelve sacred Jyotirlingas of Lord Shiva.',
        image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=600'
      },
      {
        name: 'Hundru & Dassam Falls',
        description: 'Spectacular rivers plunging over steep rocky edges of the plateau amidst dense forests.',
        image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=600'
      },
      {
        name: 'Betla National Park',
        description: 'One of India\'s earliest tiger reserves, populated by wild elephants, sloth bears, and bamboo thickets.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=800'
    ],
    tags: ['nature', 'heritage', 'culture']
  },
  {
    id: 'karnataka',
    name: 'Karnataka',
    type: 'state',
    region: 'South',
    capital: 'Bengaluru',
    description: 'A kingdom of contrasting beauties—from modern tech hubs to majestic ancient stone ruins of Hampi.',
    overview: 'Karnataka seamlessly links medieval history with the future. Home to Bengaluru, India\'s Silicon Valley, the state is renowned for the ruins of the Vijayanagara Empire in Hampi, royal palaces of Mysuru, the coffee plantations of Coorg, and rich tiger reserves like Kabini.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Kempegowda International Airport (BLR) in Bengaluru is a world-class travel gateway.',
      rail: 'Bengaluru, Hubballi, and Mysuru are heavily connected to the Indian railway system.',
      road: 'Excellent state expressways and highways connect the Deccan plateau with the Arabian Sea coast.'
    },
    signatureFoods: ['Bisi Bele Bath (Spiced Lentil Rice)', 'Mysore Pak (Rich Gram Flour Sweet)', 'Idli-Vada with Sambhar', 'Ragi Mudde'],
    topAttractions: [
      {
        name: 'Group of Monuments at Hampi',
        description: 'A UNESCO World Heritage site showcasing a breathtaking boulder-strewn landscape of historic stone temples.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=600'
      },
      {
        name: 'Group of Monuments at Pattadakal',
        description: 'A spectacular complex of 7th and 8th-century Chalukya dynasty temples showcasing a harmonious blend of Northern (Nagara) and Southern (Dravidian) architectural styles.',
        image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=600'
      },
      {
        name: 'Mysore Palace',
        description: 'An architectural masterpiece of Indo-Saracenic style, spectacularly illuminated by 100,000 lightbulbs on Sundays.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      },
      {
        name: 'Jog Falls',
        description: 'The second-highest plunge waterfall in India, where the Sharavathi River drops spectacularly over steep basalt cliffs.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1600100397608-f010b423b971?q=80&w=800',
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800'
    ],
    tags: ['heritage', 'nature', 'food', 'wellness']
  },
  {
    id: 'kerala',
    name: 'Kerala',
    type: 'state',
    region: 'South',
    capital: 'Thiruvananthapuram',
    description: 'God\'s Own Country, offering tranquil coconut backwaters, Ayurveda, and spice-scented hills.',
    overview: 'Kerala is a tropical paradise wedged between the Western Ghats and the Arabian Sea. It is globally famous for its network of brackish lagoons (the backwaters), wellness Ayurvedic treatments, spice farms in Munnar, and centuries-old art forms like Kathakali.',
    bestTimeToVisit: 'September to March',
    howToReach: {
      air: 'Four international airports: Kochi (COK), Thiruvananthapuram (TRV), Kozhikode (CCJ), Kannur (CNN).',
      rail: 'Connected extensively via the coastal Southern Railway line through Ernakulam and Trivandrum.',
      road: 'Beautiful but winding roads connect hill stations like Munnar and Wayanad.'
    },
    signatureFoods: ['Kerala Sadya (Traditional Feast served on banana leaf)', 'Appam with Stew', 'Karimeen Pollichathu (Pearl Spot Fish)', 'Malabar Parotta with Beef/Veg Curry'],
    topAttractions: [
      {
        name: 'Alleppey (Alappuzha) Backwaters',
        description: 'Cruising through quiet, palm-shaded canals on a traditional wooden "Kettuvallam" houseboat.',
        image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=600'
      },
      {
        name: 'Munnar Hill Station',
        description: 'A sea of manicured, rolling emerald green tea gardens and mountain valleys under misty clouds.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Kochi Fort & Chinese Fishing Nets',
        description: 'A historic port town blending Portuguese, Dutch, Jewish, and British maritime heritage.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800'
    ],
    tags: ['wellness', 'nature', 'food', 'family']
  },
  {
    id: 'madhya-pradesh',
    name: 'Madhya Pradesh',
    type: 'state',
    region: 'Central',
    capital: 'Bhopal',
    description: 'The Heart of Incredible India, famed for its deep national forests, temples, and UNESCO ruins.',
    overview: 'Madhya Pradesh sits right at the geographical core of India. It represents a treasure trove of heritage, containing the erotic stone carvings of Khajuraho, the historic stupas of Sanchi, and dense tiger reserves that inspired Rudyard Kipling\'s "The Jungle Book".',
    bestTimeToVisit: 'October to April',
    howToReach: {
      air: 'Airports in Indore (IDR) and Bhopal (BHO) operate regular flights across major Indian cities.',
      rail: 'Bhopal and Itarsi are massive central junctions linking the north-south and east-west corridors.',
      road: 'Extensive road network connects ancient towns like Orchha, Gwalior, and Khajuraho.'
    },
    signatureFoods: ['Poha Jalebi', 'Bhutte ka Kees (Grated Corn snack)', 'Dal Bafla', 'Mawa Bati'],
    topAttractions: [
      {
        name: 'Khajuraho Group of Monuments',
        description: 'A UNESCO World Heritage complex of intricately carved medieval temples depicting celebrations of life, love, and art.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
      },
      {
        name: 'Buddhist Monuments at Sanchi',
        description: 'One of the oldest stone structures in India, featuring the Great Stupa with spectacular stone-carved gateways.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Rock Shelters of Bhimbetka',
        description: 'Prehistoric sandstone rock shelters showcasing 30,000-year-old mineral-pigment cave paintings of ancient tribal life.',
        image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=600'
      },
      {
        name: 'Kanha National Park & Tiger Reserve',
        description: 'Dense sal and bamboo forests offering some of the highest concentrations of Royal Bengal Tigers in India.',
        image: 'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=600'
      },
      {
        name: 'Gwalior Fort',
        description: 'An imposing hilltop fortress described by Mughal Emperor Babur as "the pearl among fortresses of India".',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=800',
      'https://images.unsplash.com/photo-1611095787955-4675e771e86f?q=80&w=800'
    ],
    tags: ['heritage', 'nature', 'culture']
  },
  {
    id: 'maharashtra',
    name: 'Maharashtra',
    type: 'state',
    region: 'West',
    capital: 'Mumbai',
    description: 'The commercial powerhouse of India, rich in historical hill forts, UNESCO caves, and coastal beauty.',
    overview: 'Maharashtra is a colossal state spanning from the bustling streets of Mumbai, India\'s financial and Bollywood capital, across the Western Ghats to the ancient Ajanta and Ellora rock-cut caves. It boasts a rugged history dominated by the legacy of Chhatrapati Shivaji Maharaj.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Chhatrapati Shivaji Maharaj International Airport (BOM) in Mumbai is one of India\'s premier global hubs.',
      rail: 'Mumbai, Pune, and Nagpur are extremely well-integrated with direct superfast trains nationwide.',
      road: 'Features modern multi-lane highways including the Mumbai-Pune and Mumbai-Nagpur Expressways.'
    },
    signatureFoods: ['Vada Pav (Mumbai\'s iconic potato burger)', 'Misal Pav (Spicy sprout curry)', 'Puran Poli (Sweet flatbread)', 'Pav Bhaji'],
    topAttractions: [
      {
        name: 'Gateway of India',
        description: 'The landmark 26-meter basalt arch overlooking Mumbai Harbour, constructed in 1924.',
        image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=600'
      },
      {
        name: 'Ellora Caves',
        description: 'Breathtaking rock temples including the monolithic Kailash Temple, carved from a single cliff face from top to bottom.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Ajanta Caves',
        description: 'A horseshoe-shaped gorge containing 30 rock-cut Buddhist temples filled with masterpiece fresco paintings of the Jataka tales.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Elephanta Caves',
        description: 'Historic basalt rock-cut cave temples dedicated to Shiva on an island off the coast of Mumbai, famous for the Trimurti sculpture.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      },
      {
        name: 'Chhatrapati Shivaji Maharaj Terminus',
        description: 'An architectural masterpiece of Victorian Gothic Revival style with traditional Indian features, completed in 1888.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600'
      },
      {
        name: 'Lonar Meteorite Crater Lake',
        description: 'A spectacular, high-contrast hyper-velocity meteorite impact crater lake, the only one in basalt rock on earth.',
        image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800'
    ],
    tags: ['heritage', 'food', 'adventure', 'family']
  },
  {
    id: 'manipur',
    name: 'Manipur',
    type: 'state',
    region: 'Northeast',
    capital: 'Imphal',
    description: 'The Jewel of India, characterized by floating lake islands, graceful classical dances, and beautiful valleys.',
    overview: 'Surrounded by blue hills, Manipur is home to the unique Loktak Lake—the only lake on earth with floating circular islands called phumdis. Famed for its elegant Manipuri Raslila dance and the world\'s oldest active polo ground, it represents a precious cultural enclave.',
    bestTimeToVisit: 'October to April',
    howToReach: {
      air: 'Imphal International Airport (IMF) has daily flights connecting Guwahati, Kolkata, and New Delhi.',
      rail: 'Jiribam is the nearest rail connection, with expanding links to Imphal.',
      road: 'Connected via NH39 running through the beautiful Kohima-Imphal corridor.'
    },
    signatureFoods: ['Kangshoi (Vegetable Stew)', 'Eromba (Mashed fish and vegetables)', 'Singju (Spicy herb salad)', 'Chak-Hao Kheer (Purple Rice pudding)'],
    topAttractions: [
      {
        name: 'Keibul Lamjao National Park',
        description: 'The world\'s only floating national park, home to the endangered Sangai (brow-antlered) deer.',
        image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=600'
      },
      {
        name: 'Kangla Fort',
        description: 'The ancient capital and spiritual seat of the Meitei rulers on the banks of the Imphal River.',
        image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=600'
      },
      {
        name: 'Ima Keithel (Mother\'s Market)',
        description: 'An exceptional, centuries-old market managed and run exclusively by thousands of married women.',
        image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1533900298318-6b8da08a523e?q=80&w=800'
    ],
    tags: ['nature', 'culture', 'heritage']
  },
  {
    id: 'meghalaya',
    name: 'Meghalaya',
    type: 'state',
    region: 'Northeast',
    capital: 'Shillong',
    description: 'The Abode of Clouds, presenting breathtaking living root bridges, rain forests, and crystal-clear rivers.',
    overview: 'Meghalaya is a high, wet, green plateau nestled between Assam and Bangladesh. Home to the wettest places on earth, Cherrapunji and Mawsynram, it is famed for its lush valleys, deep caves, waterfalls, and the ingenious living root bridges woven by the indigenous Khasi tribe.',
    bestTimeToVisit: 'September to May',
    howToReach: {
      air: 'Fly to Shillong Umroi Airport (SHL) or use the highly connected Guwahati Airport (GAU) and drive up.',
      rail: 'Guwahati (100km away) is the closest major railway station.',
      road: 'NH6 offers a stunning, mist-cloaked mountain drive from Guwahati up to Shillong.'
    },
    signatureFoods: ['Jadoh (Rice and Meat dish)', 'Doh-Khlieh (Pork salad with onions)', 'Nakham Bitchi (Dry fish soup)', 'Pukhlein (Sweet rice bread)'],
    topAttractions: [
      {
        name: 'Cherrapunji Living Root Bridges',
        description: 'Incredible bio-engineering structures grown from the aerial roots of rubber trees over raging rivers.',
        image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=600'
      },
      {
        name: 'Shillong Peak & Ward\'s Lake',
        description: 'The charming "Scotland of the East" scenic lookout points and calm, pine-bordered water gardens.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Dawki (Umngot River)',
        description: 'A river of glass-like clarity where boats appear to float in mid-air above polished river stones.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=800',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness']
  },
  {
    id: 'mizoram',
    name: 'Mizoram',
    type: 'state',
    region: 'Northeast',
    capital: 'Aizawl',
    description: 'A land of rolling hills, bamboo forests, and dramatic mountain peaks overlooking silent deep valleys.',
    overview: 'Mizoram, situated in the southernmost corner of Northeast India, is a land of steep hills, deep gorges, and vibrant evergreen forests. It offers visitors a peaceful, eco-tourism experience deeply anchored in warm tribal hospitality.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Lengpui Airport in Aizawl (AJL) is connected with Kolkata and Guwahati.',
      rail: 'The closest railway station is Bairabi, though Silchar (Assam) is more widely used.',
      road: 'Connected through national highways running through the rugged Mizoram hills.'
    },
    signatureFoods: ['Bai (Steamed vegetables with pork and bamboo shoots)', 'Vawksa Rep (Smoked Pork)', 'Sawhchiar (Rice porridge)', 'Chhum Han (Steamed veggies)'],
    topAttractions: [
      {
        name: 'Phawngpui (Blue Mountain)',
        description: 'The highest peak in Mizoram, considered sacred, providing scenic vistas of the surrounding green ranges.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Vantawng Falls',
        description: 'A majestic double-tiered waterfall plunging nearly 750 feet amidst dense bamboo forests.',
        image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=600'
      },
      {
        name: 'Solomon\'s Temple, Aizawl',
        description: 'A majestic, white-marble Christian church constructed by local community efforts.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'culture']
  },
  {
    id: 'nagaland',
    name: 'Nagaland',
    type: 'state',
    region: 'Northeast',
    capital: 'Kohima',
    description: 'A land of ancient warrior clans, emerald valley landscapes, and the famous Hornbill Festival.',
    overview: 'Nagaland is a mountainous state home to 16 major indigenous Naga tribes, each keeping alive its unique customs, colorful traditional attire, and songs. It is globally famous for its annual Hornbill Festival, held every December to showcase tribal art and heritage.',
    bestTimeToVisit: 'October to May',
    howToReach: {
      air: 'Dimapur Airport (DMU) is connected to Guwahati and Kolkata.',
      rail: 'Dimapur is the primary railhead in the state, located on the main Northeast line.',
      road: 'Kohima is a scenic 3-hour drive (74 km) up from Dimapur via National Highway 29.'
    },
    signatureFoods: ['Pork Curry with Bamboo Shoots', 'Galho (Rice & vegetable soup)', 'Boiled Vegetables with Chili Chutney', 'Smoked Meat with Fermented Soybeans'],
    topAttractions: [
      {
        name: 'Kisama Heritage Village',
        description: 'The amphitheater village hosting the grand, multi-tribal Hornbill Festival celebrations.',
        image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=600'
      },
      {
        name: 'Dzukou Valley',
        description: 'A stunning, high-altitude alpine valley famed for seasonal lilies, mist, and hiking trails.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      },
      {
        name: 'Kohima War Cemetery',
        description: 'A serene memorial dedicated to the brave Allied forces who stopped the invading Japanese forces in WWII.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=800',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800'
    ],
    tags: ['culture', 'adventure', 'nature']
  },
  {
    id: 'odisha',
    name: 'Odisha',
    type: 'state',
    region: 'East',
    capital: 'Bhubaneswar',
    description: 'The soul of India, showcasing ancient stone temple architecture, long quiet beaches, and tribal art.',
    overview: 'Odisha, on the Bay of Bengal, is historically rich, being the land of the ancient Kalinga Empire. It is famous for Bhubaneswar\'s temple heritage, the majestic Sun Temple at Konark, the sacred pilgrimage city of Puri, and Chilika Lake, Asia\'s largest brackish lagoon.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Biju Patnaik International Airport in Bhubaneswar (BBI) is highly connected.',
      rail: 'Bhubaneswar Railway Station is a major stop on the main East Coast rail line.',
      road: 'Extensively accessible via National Highway 16 running along the east coast.'
    },
    signatureFoods: ['Dalma (Lentil and vegetable stew)', 'Chhena Poda (Caramelized Cottage Cheese dessert)', 'Pakhala Bhata (Fermented Rice)', 'Rasagola (Heritage sweet)'],
    topAttractions: [
      {
        name: 'Konark Sun Temple',
        description: 'A 13th-century monument built as a colossal chariot of the Sun God, featuring intricately carved stone wheels.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Chilika Lake',
        description: 'A massive coastal lagoon sheltering millions of migratory birds and endangered Irrawaddy dolphins.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Jagannath Temple, Puri',
        description: 'A highly sacred, ancient coastal temple complex famous for its annual Rath Yatra (Chariot Festival).',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800',
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800'
    ],
    tags: ['heritage', 'nature', 'culture']
  },
  {
    id: 'punjab',
    name: 'Punjab',
    type: 'state',
    region: 'North',
    capital: 'Chandigarh',
    description: 'The land of the five rivers, robust hospitality, lush mustard fields, and the shimmering Golden Temple.',
    overview: 'Punjab is India\'s agricultural heartland. Filled with high energy, bhangra rhythms, and expansive green and gold fields, it is anchored by the spiritual majesty of the Harmandir Sahib (Golden Temple) in Amritsar, welcoming millions with free communal meals daily.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Sri Guru Ram Das Jee International Airport in Amritsar (ATQ) connects globally.',
      rail: 'Amritsar and Jalandhar are primary rail hubs with direct connections to all corners of India.',
      road: 'NH44 (Grand Trunk Road) is a world-class expressway cutting straight through Punjab.'
    },
    signatureFoods: ['Sarson ka Saag & Makki di Roti', 'Butter Chicken', 'Dal Makhani', 'Amritsari Kulcha with Lassi'],
    topAttractions: [
      {
        name: 'The Golden Temple (Harmandir Sahib)',
        description: 'The holiest shrine of Sikhism, sheathed in pure gold and sitting majestically in a square tank of water.',
        image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=600'
      },
      {
        name: 'Wagah Border Ceremony',
        description: 'The theatrical, highly energized border-lowering ceremony between India and Pakistan soldiers.',
        image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600'
      },
      {
        name: 'Jallianwala Bagh',
        description: 'A historic memorial garden preservation site commemorating the tragic national freedom struggle of 1919.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=800',
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800'
    ],
    tags: ['food', 'culture', 'heritage', 'family']
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    type: 'state',
    region: 'West',
    capital: 'Jaipur',
    description: 'The Land of Kings, featuring vast golden desert sands, colossal hill fortresses, and luxurious royal palaces.',
    overview: 'Rajasthan represents the iconic postcard image of royal India. It is a land of massive, sandstone fortresses towering over vibrant cities like Jaipur (the Pink City), Udaipur (the Lake City), and Jodhpur (the Blue City), alongside the endless dunes of the Thar Desert.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Airports in Jaipur (JAI), Udaipur (UDR), and Jodhpur (JDH) offer highly frequent domestic flights.',
      rail: 'Fully integrated with luxury trains like the Palace on Wheels and rapid express trains linking Jaipur to Delhi.',
      road: 'Scenic, well-maintained highways connect the entire state across desert hills.'
    },
    signatureFoods: ['Dal Baati Churma (Baked wheat balls with spicy lentils and sweet crumb)', 'Laal Maas (Spicy smoked mutton curry)', 'Gatte ki Sabzi', 'Pyaaz Kachori'],
    topAttractions: [
      {
        name: 'Jaipur City (The Pink City)',
        description: 'A UNESCO World Heritage fortified grid-planned city famous for its terracotta-pink facades, Hawa Mahal, and bustling bazaars.',
        image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=600'
      },
      {
        name: 'Keoladeo National Park',
        description: 'A legendary wetland sanctuary and bird paradise that hosts thousands of nesting waterbirds and wintering migratory waterfowl.',
        image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600'
      },
      {
        name: 'Amber Fort & Palace',
        description: 'A majestic hilltop fortress blending Rajput and Mughal architectures, looking out over Maota Lake.',
        image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=600'
      },
      {
        name: 'Jantar Mantar, Jaipur',
        description: 'An extraordinary open-air astronomical observatory containing 19 colossal stone instruments, including the world\'s largest stone sundial.',
        image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=600'
      },
      {
        name: 'Lake Palace, Udaipur',
        description: 'An ethereal white-marble palace that appears to float on the calm waters of Lake Pichola.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Thar Desert & Jaisalmer Fort',
        description: 'Camel safaris and desert camping beneath stars by the Golden Fort that rises out of the desert sands.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=800',
      'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'adventure', 'family']
  },
  {
    id: 'sikkim',
    name: 'Sikkim',
    type: 'state',
    region: 'Northeast',
    capital: 'Gangtok',
    description: 'An alpine organic paradise watched over by the majestic snow peaks of Mount Kanchenjunga.',
    overview: 'India\'s first fully organic state, Sikkim is a clean, tranquil Himalayan jewel. Boasting the world\'s third-highest peak, Mount Kanchenjunga, it features alpine lakes, flower-filled valleys, Buddhist monasteries, and crisp mountain air.',
    bestTimeToVisit: 'March to May & October to December',
    howToReach: {
      air: 'Pakyong Airport (PYG) is local, or fly to Bagdogra (IXB) in Bengal and drive 4-5 hours up.',
      rail: 'New Jalpaiguri (NJP) in West Bengal is the nearest railhead connecting to Gangtok.',
      road: 'National Highway 10 curves dramatically along the Teesta River up to Gangtok.'
    },
    signatureFoods: ['Thukpa', 'Momos', 'Phagshapa (Pork with Radish)', 'Sha Phaley (Stuffed fried bread)'],
    topAttractions: [
      {
        name: 'Gurudongmar Lake',
        description: 'One of the highest alpine lakes in the world, surrounded by sacred, snow-capped peaks.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600'
      },
      {
        name: 'Rumtek Monastery',
        description: 'A spectacular Tibetan Buddhist monastery, serving as the seat of the Gyalwang Karmapa.',
        image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
      },
      {
        name: 'Nathu La Pass',
        description: 'A historic mountain pass on the old Silk Route connecting India with Tibet, China.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
      'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness']
  },
  {
    id: 'tamil-nadu',
    name: 'Tamil Nadu',
    type: 'state',
    region: 'South',
    capital: 'Chennai',
    description: 'The land of the majestic Gopurams, classical Bharatnatyam dance, and ancient coastal shore temples.',
    overview: 'Tamil Nadu features a deeply unbroken, 2000-year-old Dravidian cultural history. Famed for its monumental, brightly painted temple towers (gopurams), Bharatnatyam dance, beautiful silk weaving, and the historic coastal ruins of Mamallapuram.',
    bestTimeToVisit: 'November to February',
    howToReach: {
      air: 'Chennai International Airport (MAA) is highly connected globally; other airports include Madurai and Coimbatore.',
      rail: 'Chennai Central is the historic northern gate of the Southern Railway network, highly connected.',
      road: 'Excellent, smooth national highways connect Tamil Nadu extensively with Bangalore and Kerala.'
    },
    signatureFoods: ['Dosa with Chutney & Sambar', 'Idli-Vada Breakfast', 'Chettinad Pepper Chicken', 'Filter Coffee'],
    topAttractions: [
      {
        name: 'Group of Monuments at Mahabalipuram',
        description: 'A stunning sanctuary of rock-cut temples, giant open-air reliefs, and monolithic stone rathas carved along the Coromandel coast.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Nilgiri Mountain Railway',
        description: 'A historic steam-powered rack-and-pinion toy train that scales the lush, emerald green tea hills of Ooty.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      },
      {
        name: 'Meenakshi Temple, Madurai',
        description: 'A breathtaking temple city showcasing 14 colorful, towering gopurams encrusted with thousands of stone figures.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600'
      },
      {
        name: 'Brihadeeswarar Temple, Thanjavur',
        description: 'A 1000-year-old architectural marvel made of solid granite, celebrating Chola dynasty craftsmanship.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'food']
  },
  {
    id: 'telangana',
    name: 'Telangana',
    type: 'state',
    region: 'Central',
    capital: 'Hyderabad',
    description: 'A blend of grand royal heritage of the Nizams with cutting-edge global IT developments.',
    overview: 'Telangana, India\'s youngest state, combines centuries-old history with modernity. Anchored by Hyderabad, it is legendary for Golconda Fort, the iconic Charminar, exquisite pearl markets, and its internationally famous Hyderabadi Biryani.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Rajiv Gandhi International Airport in Hyderabad (HYD) is globally recognized and highly connected.',
      rail: 'Secunderabad and Hyderabad railway stations are key hubs linking the Deccan region nationally.',
      road: 'Excellent inner and outer ring roads feed into national highways going north-south.'
    },
    signatureFoods: ['Hyderabadi Haleem', 'Hyderabadi Dum Biryani', 'Qubani ka Meetha (Apricot Dessert)', 'Mirchi Bajji'],
    topAttractions: [
      {
        name: 'The Charminar',
        description: 'A 16th-century mosque with four majestic minarets, standing in the heart of Hyderabad\'s bazaar.',
        image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=600'
      },
      {
        name: 'Golconda Fort',
        description: 'An immense medieval fortress famed for acoustics, engineering, and being the origin of the Koh-i-Noor diamond.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      },
      {
        name: 'Ramappa Temple',
        description: 'A Kakatiya-era stone temple and UNESCO site, celebrated for delicate carvings and floating clay bricks.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1608958415124-749e49c7161b?q=80&w=800',
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800'
    ],
    tags: ['heritage', 'food', 'culture', 'family']
  },
  {
    id: 'tripura',
    name: 'Tripura',
    type: 'state',
    region: 'Northeast',
    capital: 'Agartala',
    description: 'A land of royal palaces, rock carvings, and dense bamboo forests on the Bangladesh border.',
    overview: 'Tripura is India\'s third-smallest state. It presents a rich tapestry of Manikya dynasty royal history, tribal weaving, and extraordinary archaeological gems like the massive rock-cut reliefs of Unakoti.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Maharaja Bir Bikram Airport in Agartala (IXA) has frequent flights to Kolkata and Guwahati.',
      rail: 'Connected to the broad-gauge Indian railway network via Agartala railway station.',
      road: 'NH8 is the crucial road lifeline connecting Tripura across Assam to the rest of India.'
    },
    signatureFoods: ['Mui Borok (Traditional fish and herb dish)', 'Kosoi Bouthrok', 'Panch Phoron Tarkari', 'Wahan Mosdeng (Spicy Pork salad)'],
    topAttractions: [
      {
        name: 'Ujjayanta & Neermahal Palaces',
        description: 'Stunning white royal palaces, one sitting majestically in the center of Rudrasagar Lake.',
        image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=600'
      },
      {
        name: 'Unakoti Rock Carvings',
        description: 'Vast, ancient hillside bas-relief stone carvings of deities dating back to the 7th-9th centuries.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Tripura Sundari Temple',
        description: 'A 500-year-old holy shrine and one of the 51 Shakti Peethas, designed in Bengali hut architecture.',
        image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'nature']
  },
  {
    id: 'uttar-pradesh',
    name: 'Uttar Pradesh',
    type: 'state',
    region: 'North',
    capital: 'Lucknow',
    description: 'The cradle of Indian civilization, adorned with the eternal monument of love and the ancient spiritual heart of Varanasi.',
    overview: 'Uttar Pradesh is a deeply historic land of faith, art, and imperial dynasties. It is defined by the sacred curves of the Ganges and Yamuna rivers. From the shimmering white dome of the Taj Mahal in Agra to the oldest continually inhabited spiritual lanes of Varanasi, the heritage of the Nawabs in Lucknow, and the ancient echoes of the Buddha in Sarnath, Uttar Pradesh represents the profound soul and cultural complexity of India.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Lucknow (LKO), Varanasi (VNS), or the newly opened international airport in Ayodhya (AYJ).',
      rail: 'Major well-connected transit hubs include Lucknow Charbagh, Varanasi Junction, and Kanpur Central.',
      road: 'Highly developed high-speed highway networks such as the Yamuna, Purvanchal, and Agra-Lucknow Expressways.'
    },
    signatureFoods: [
      'Tunday Kababi (Lucknow\'s melt-in-mouth smoked kebab)',
      'Banarasi Tamatar Chaat (Spicy potato and tomato treat)',
      'Petha (Agra\'s translucent candied pumpkin sweet)',
      'Kachori Sabzi with Jalebi',
      'Awadhi Dum Biryani (Fragrant slow-cooked rice and spiced mutton)',
      'Malai Gilori (Mughal-era milk leaf sweet)'
    ],
    topAttractions: [
      {
        name: 'The Taj Mahal, Agra',
        description: 'The legendary monument of love made of pure white marble, constructed by Emperor Shah Jahan.',
        image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=600'
      },
      {
        name: 'Agra Fort',
        description: 'A colossal 16th-century red sandstone fortress-city that served as the primary imperial seat of the Mughals.',
        image: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=600'
      },
      {
        name: 'The Varanasi Ghats',
        description: 'Sacred stone staircases leading down to the Ganges River, glowing with the evening Ganga Aarti fire ceremony.',
        image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=600'
      },
      {
        name: 'Fatehpur Sikri',
        description: 'A beautifully preserved 16th-century red sandstone imperial city built by Mughal Emperor Akbar.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      },
      {
        name: 'Bara Imambara, Lucknow',
        description: 'The gravity-defying vaulted Nawabi hall, home to the world-famous Bhool Bhulaiya labyrinth.',
        image: 'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800',
      'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800',
      'https://images.unsplash.com/photo-1600100397608-f010e423b971?q=80&w=800',
      'https://images.unsplash.com/photo-1678848784013-ec8fa5f275e5?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'wellness', 'food', 'family']
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    type: 'state',
    region: 'North',
    capital: 'Dehradun',
    description: 'The Land of the Gods, featuring spectacular snow-capped Himalayan peaks, sacred river sources, and peaceful pine valleys.',
    overview: 'Uttarakhand is a spectacular alpine sanctuary nestled in the Garhwal and Kumaon Himalayas. Known as Devbhumi (Land of the Gods), it is home to the sacred Char Dham pilgrimage, the pristine birth-springs of the Ganges and Yamuna rivers, and the global yoga sanctuary of Rishikesh. It perfectly balances adrenaline-fueled adventures like river rafting and mountaineering with silent spiritual contemplation.',
    bestTimeToVisit: 'March to June & October to December',
    howToReach: {
      air: 'Fly to Jolly Grant Airport in Dehradun (DED) or Pantnagar Airport (PGH) for Kumaon regions.',
      rail: 'Kathgodam (for Nainital/Almora) and Haridwar/Dehradun are the key railway terminals.',
      road: 'Scenic national highways connect Delhi seamlessly to Haridwar, Rishikesh, Nainital, and Mussoorie.'
    },
    signatureFoods: [
      'Kafuli (Spinach & Fenugreek gravy cooked in iron pots)',
      'Aloo ke Gutke (Spicy parboiled potatoes with local mountain herbs)',
      'Singori (Sweet khoya dessert wrapped in aromatic Maalu leaf)',
      'Dubuk (Slow-cooked local black soybean paste)',
      'Chainsoo (Garhwali roasted black gram dal gravy)',
      'Baal Mithai (Sweet roasted milk fudge decorated with white sugar beads)'
    ],
    topAttractions: [
      {
        name: 'Rishikesh & Haridwar',
        description: 'Twin spiritual towns on the Ganges River, famous for yoga ashrams, suspension bridges, and holy dips.',
        image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=600'
      },
      {
        name: 'Valley of Flowers',
        description: 'A UNESCO World Heritage high-altitude alpine meadow that bursts into a kaleidoscope of wild flowers.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Kedarnath Temple',
        description: 'The majestic Shiva temple standing strong amidst high-alpine glaciers and towering Himalayan peaks.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600'
      },
      {
        name: 'Jim Corbett National Park',
        description: 'India\'s oldest national park, protecting majestic Royal Bengal Tigers and herds of wild elephants.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=800',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
      'https://images.unsplash.com/photo-1610123598195-efa6b4be3c9a?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness', 'family']
  },
  {
    id: 'west-bengal',
    name: 'West Bengal',
    type: 'state',
    region: 'East',
    capital: 'Kolkata',
    description: 'A sensory tapestry stretching from the towering Himalayas and green tea valleys of Darjeeling down to the cultural capital of Kolkata.',
    overview: 'West Bengal offers an extraordinary journey across diverse landscapes. It spans the snow-covered Himalayan peaks of Darjeeling, home to premium tea gardens and the historic Toy Train, through the fertile gangetic plains, to Kolkata, India\'s intellectual and cultural capital. Further south lies the mystical Sundarbans, a massive mangrove delta where swimming tigers roam.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Netaji Subhash Chandra Bose International Airport in Kolkata (CCU) or Bagdogra Airport (IXB) for Darjeeling and hills.',
      rail: 'Howrah Junction and Sealdah in Kolkata, alongside New Jalpaiguri (NJP) in the north, are busy rail complexes.',
      road: 'Extensive highways link Kolkata with Siliguri, Darjeeling, and neighboring states.'
    },
    signatureFoods: [
      'Maacher Jhol (Traditional Bengali fish curry cooked with mustard oil and spices)',
      'Rosogolla & Sandesh (Iconic Bengali sweet cheese desserts)',
      'Kolkata Kathi Roll (Flaky paratha rolled with roasted meats and onions)',
      'Shorshe Ilish (Hilsa fish cooked in rich stone-ground mustard paste)',
      'Mishti Doi (Sweetened, slow-fermented creamy clay-pot yogurt)',
      'Luchi Alur Dom (Deep-fried puffed bread with spicy potato gravy)'
    ],
    topAttractions: [
      {
        name: 'Victoria Memorial, Kolkata',
        description: 'A monumental, white-marble palace built in honor of Queen Victoria, set inside green parklands.',
        image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=600'
      },
      {
        name: 'Darjeeling Toy Train & Tea Hills',
        description: 'A historic narrow-gauge UNESCO mountain railway cruising through emerald green tea plantations.',
        image: 'https://images.unsplash.com/photo-1557999852-c64a85fa0a98?q=80&w=600'
      },
      {
        name: 'The Sundarbans Mangroves',
        description: 'The world\'s largest mangrove forest delta, home to the swimming Royal Bengal Tigers.',
        image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=600'
      },
      {
        name: 'Dakshineswar Kali Temple',
        description: 'A grand 19th-century Navaratna-style Hindu temple on the banks of the Hooghly River.',
        image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=800',
      'https://images.unsplash.com/photo-1557999852-c64a85fa0a98?q=80&w=800',
      'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'nature', 'food']
  },

  // Union Territories
  {
    id: 'andaman-nicobar',
    name: 'Andaman & Nicobar Islands',
    type: 'ut',
    region: 'South',
    capital: 'Port Blair',
    description: 'An emerald tropical archipelago in the Bay of Bengal, featuring pristine coral reefs, rainforests, and historic monuments.',
    overview: 'The Andaman and Nicobar Islands is a serene, tropical paradise. It features crystal-clear waters perfect for scuba diving and snorkeling, lush green rainforests, the historic Cellular Jail in Port Blair recalling India\'s freedom struggle, and the world-famous Radhanagar Beach on Havelock Island.',
    bestTimeToVisit: 'October to May',
    howToReach: {
      air: 'Fly to Veer Savarkar International Airport in Port Blair (IXZ) from Chennai, Kolkata, or Bengaluru.',
      rail: 'No railway access. Reached solely by air or scheduled passenger ships from Chennai, Kolkata, and Visakhapatnam.',
      road: 'The Andaman Trunk Road links Port Blair with the northern parts of the archipelago.'
    },
    signatureFoods: [
      'Fresh Seafood Platters (Grilled lobster, prawns, and crab caught daily)',
      'Coconut Prawn Curry (Mildly spiced prawns simmered in fresh coconut milk)',
      'Tandoori Reef Fish (Local fish marinated in ginger, garlic, and clay-oven roasted)',
      'Andaman Fish Curry',
      'Tropical Fruit Shakes',
      'Lobster Thermidor'
    ],
    topAttractions: [
      {
        name: 'Radhanagar Beach, Havelock',
        description: 'A stunning crescent of powdery white sand and turquoise waves bordered by lush green tropical mahua forests.',
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=600'
      },
      {
        name: 'Cellular Jail National Memorial',
        description: 'The historic "Kala Pani" colonial prison monument commemorating the freedom fighters of India.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      },
      {
        name: 'Mahatma Gandhi Marine National Park',
        description: 'A beautiful marine reserve spanning 15 islands, famous for live corals, sea turtles, and snorkeling.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=800',
      'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'family']
  },
  {
    id: 'chandigarh-ut',
    name: 'Chandigarh',
    type: 'ut',
    region: 'North',
    capital: 'Chandigarh',
    description: 'India\'s premier planned city, showcasing Le Corbusier\'s modernist concrete architecture and expansive green parklands.',
    overview: 'Chandigarh is a modern marvel of 20th-century urban planning. Conceived by Swiss-French architect Le Corbusier, it is a clean, green metropolis serving as the shared capital of Punjab and Haryana. It is famous for its grid sector layout, vast foliage, and unique public art installations like the Rock Garden.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Chandigarh International Airport (IXC), highly connected to major Indian cities.',
      rail: 'Chandigarh Junction is highly integrated with rapid Shatabdi Express trains from Delhi.',
      road: 'Excellent multi-lane national highways connect it seamlessly to Delhi, Shimla, and Amritsar.'
    },
    signatureFoods: [
      'Amritsari Kulcha (Clay-oven baked bread stuffed with spiced potatoes and onions, served with butter)',
      'Butter Chicken (Tender grilled chicken simmered in a rich tomato, butter, and cream sauce)',
      'Dal Makhani (Slow-cooked black lentils with cream and spices)',
      'Paneer Tikka',
      'Chole Bhature with Sweet Lassi',
      'Sarson ka Saag with Makki di Roti'
    ],
    topAttractions: [
      {
        name: 'Nek Chand Rock Garden',
        description: 'A world-famous creative sculpture garden constructed completely from domestic and industrial waste.',
        image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=600'
      },
      {
        name: 'Sukhna Lake',
        description: 'A peaceful, scenic artificial reservoir at the foothills of the Shivalik hills, popular for boating and walks.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Capitol Complex',
        description: 'Le Corbusier\'s architectural concrete masterpiece housing the High Court, Legislative Assembly, and Open Hand Monument.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=800',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
      'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'family']
  },
  {
    id: 'dadra-nagar-haveli-daman-diu',
    name: 'Dadra & Nagar Haveli and Daman & Diu',
    type: 'ut',
    region: 'West',
    capital: 'Silvassa',
    description: 'A serene coastal enclave of historic Portuguese forts, sandy beaches, and quiet palm groves.',
    overview: 'Comprising twin coastal pockets on the coast of Gujarat, this Union Territory preserves a peaceful Portuguese colonial aura. From the beautiful fortress of Diu looking out at the Arabian Sea to the tribal woodlands of Silvassa, it offers a refreshing coastal getaway.',
    bestTimeToVisit: 'November to March',
    howToReach: {
      air: 'Fly to Surat (STV) or Mumbai (BOM) and drive up (approx 2-3 hours to Daman or Silvassa).',
      rail: 'Vapi is the closest major railway station, highly connected on the Western line.',
      road: 'Directly linked with the major Mumbai-Ahmedabad national highway (NH48).'
    },
    signatureFoods: ['Diu Crab Masala', 'Seafood Fried Rice', 'Val Muthiya', 'Ubadiyu'],
    topAttractions: [
      {
        name: 'Diu Fort',
        description: 'An imposing 16th-century Portuguese coastal stone fortress with majestic sea-facing bastions and cannons.',
        image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=600'
      },
      {
        name: 'Jampore Beach, Daman',
        description: 'A sandy beach popular for horse riding, beachside dining, and dramatic low tides.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      },
      {
        name: 'Vanganga Lake Garden, Silvassa',
        description: 'A beautifully manicured Japanese-style park complete with water lakes, bridges, and boating.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800'
    ],
    tags: ['nature', 'heritage', 'family']
  },
  {
    id: 'delhi-ut',
    name: 'Delhi',
    type: 'ut',
    region: 'North',
    capital: 'New Delhi',
    description: 'The historic and modern capital of India, bridging ancient Sultanate ruins with sprawling city lanes.',
    overview: 'Delhi, India\'s capital territory, has been destroyed and rebuilt seven times over millennia. It offers a spectacular contrast between the narrow, vibrant medieval alleys of Old Delhi and the grand, tree-lined boulevards of New Delhi.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Indira Gandhi International Airport (DEL) is India\'s busiest and highly connected global aviation gateway.',
      rail: 'New Delhi (NDLS), Old Delhi (DLI), and Hazrat Nizamuddin (NZM) are premier national rail junctions.',
      road: 'Highly linked by multi-lane national expressways (NH44, Yamuna Expressway) to neighboring states.'
    },
    signatureFoods: ['Butter Chicken', 'Chhole Bhature', 'Chandni Chowk Aloo Chaat', 'Karim\'s Mughlai Kebabs'],
    topAttractions: [
      {
        name: 'Humayun\'s Tomb',
        description: 'A magnificent 16th-century red sandstone garden mausoleum that directly inspired the Taj Mahal.',
        image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=600'
      },
      {
        name: 'The Red Fort & Jama Masjid',
        description: 'Colossal red sandstone Mughal fort complex and one of India\'s largest historic mosques in Old Delhi.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      },
      {
        name: 'Qutub Minar',
        description: 'A soaring, 73-meter tall red sandstone brick tower built in 1193, marking the early Delhi Sultanate.',
        image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800',
      'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=800'
    ],
    tags: ['heritage', 'culture', 'food', 'family']
  },
  {
    id: 'jammu-kashmir',
    name: 'Jammu & Kashmir',
    type: 'ut',
    region: 'North',
    capital: 'Srinagar',
    description: 'Heaven on Earth, featuring shikara boat rides on Dal Lake, fruit orchards, and snowy mountain slopes.',
    overview: 'Jammu & Kashmir is a land of sheer poetic beauty. It encompasses the lush, flower-filled Kashmir Valley bordered by towering pine mountains, the tranquil, floating wooden houseboats on Srinagar\'s Dal Lake, and the historic temples of Jammu.',
    bestTimeToVisit: 'March to October (Summer) & December to March (Skiing)',
    howToReach: {
      air: 'Sheikh ul-Alam International Airport in Srinagar (SXR) has daily flights from Delhi.',
      rail: 'Jammu Tawi is the major rail station, with the iconic high-altitude Udhampur-Srinagar line expanding.',
      road: 'The scenic National Highway 44 cuts through the Jawahar Tunnel to connect Jammu with Srinagar.'
    },
    signatureFoods: ['Kashmiri Wazwan (Multi-course feast)', 'Rogan Josh (Slow-cooked spiced lamb)', 'Gustaba (Meatballs in yogurt curry)', 'Kahwa (Kashmiri Saffron Tea)'],
    topAttractions: [
      {
        name: 'Dal Lake & Shalimar Gardens',
        description: 'Cruising in a wooden "Shikara" past floating gardens and majestic Mughal terrace stone fountains.',
        image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=600'
      },
      {
        name: 'Gulmarg Meadow of Flowers',
        description: 'A spectacular mountain resort offering the world\'s second-highest gondola cable car and ski slopes.',
        image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=600'
      },
      {
        name: 'Pahalgam (Shepherds Valley)',
        description: 'An idyllic valley where the Lidder River flows past green meadows and dark pine forests.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=800',
      'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness', 'family']
  },
  {
    id: 'ladakh-ut',
    name: 'Ladakh',
    type: 'ut',
    region: 'North',
    capital: 'Leh',
    description: 'The Land of High Passes, featuring turquoise alpine lakes, sand dunes, and ancient monasteries.',
    overview: 'Ladakh is a spectacular trans-Himalayan desert bordering Tibet. Characterized by deep, desolate gorges, turquoise salt-water lakes like Pangong Tso, high mountain roads like Khardung La, and ancient Tibetan monasteries built into sheer cliffs.',
    bestTimeToVisit: 'May to September',
    howToReach: {
      air: 'Kushok Bakula Rimpochee Airport in Leh (IXL) operates daily high-altitude flights from Delhi.',
      rail: 'No rail. The nearest railway stations are Jammu Tawi or Chandigarh, followed by long road trips.',
      road: 'Accessed by two of the world\'s most famous high-mountain roads: the Leh-Manali and Srinagar-Leh highways.'
    },
    signatureFoods: ['Thukpa (Noodle soup)', 'Skyu (Traditional pasta stew)', 'Butter Tea (Salty Yak Butter Tea)', 'Khambir (Ladakhi bread)'],
    topAttractions: [
      {
        name: 'Pangong Tso Lake',
        description: 'A high-altitude salt-water lake spanning from India to China, shifting colors from turquoise to deep blue.',
        image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=600'
      },
      {
        name: 'Thiksey Monastery',
        description: 'A twelve-story Tibetan Buddhist monastery complex perched majestically on a hill, resembling Tibet\'s Potala Palace.',
        image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=600'
      },
      {
        name: 'Nubra Valley & Hunder Dunes',
        description: 'A high-altitude valley of cold sand dunes where double-humped Bactrian camels roam near glacial rivers.',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1590050752117-238cb0612b1b?q=80&w=800',
      'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness']
  },
  {
    id: 'lakshadweep-ut',
    name: 'Lakshadweep',
    type: 'ut',
    region: 'South',
    capital: 'Kavaratti',
    description: 'An exclusive tropical island paradise of white sand, coral reefs, and tranquil blue lagoons.',
    overview: 'India\'s smallest Union Territory, Lakshadweep is a spectacular chain of coral-island atolls in the Arabian Sea. It is a strictly controlled eco-paradise offering unmatched snorkeling, scuba diving, and absolute tropical seclusion.',
    bestTimeToVisit: 'October to May',
    howToReach: {
      air: 'Fly to Agatti Island Airport (AGT) via Kochi (COK) in Kerala.',
      rail: 'No rail connectivity. Must travel via Kochi rail lines and take flights or passenger ferries.',
      road: 'No road links. Passenger ferry ships operate regularly from Kochi port.'
    },
    signatureFoods: ['Kilanji (Thin sweet rice crepe)', 'Mas Min (Smoked Tuna dish)', 'Coconut Fish Curry', 'Octopus Fry'],
    topAttractions: [
      {
        name: 'Agatti & Bangaram Lagoons',
        description: 'Turquoise, crystal-clear coastal lagoons bordered by powdery sandbars and rich coral reefs.',
        image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=600'
      },
      {
        name: 'Kavaratti Marine Aquarium',
        description: 'A preserved marine sanctuary showcasing indigenous colored corals, sea turtles, and lagoon species.',
        image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600'
      },
      {
        name: 'Kadmat Island Beaches',
        description: 'A long, narrow tear-drop island of white sands popular for kayaking and deep-sea diving.',
        image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=800'
    ],
    tags: ['nature', 'adventure', 'wellness']
  },
  {
    id: 'puducherry-ut',
    name: 'Puducherry',
    type: 'ut',
    region: 'South',
    capital: 'Puducherry',
    description: 'The French Riviera of the East, blending colorful colonial architecture with deep spiritual ashrams.',
    overview: 'Puducherry preserves a beautiful French colonial heritage on the coast of Tamil Nadu. Characterized by its mustard-yellow villas of the French Quarter, pristine beaches, and the global spiritual township of Auroville.',
    bestTimeToVisit: 'October to March',
    howToReach: {
      air: 'Fly to Puducherry Airport (PNY) domestically or fly to Chennai (MAA) and drive down.',
      rail: 'Villupuram (35 km away) is the closest major railway junction, connected to Chennai.',
      road: 'The scenic East Coast Road (ECR) offers a beautiful ocean-facing highway drive from Chennai.'
    },
    signatureFoods: ['French Baguettes & Croissants', 'Pondicherry Fish Assad (Coconut milk curry)', 'Mutton Rolls', 'Crepes'],
    topAttractions: [
      {
        name: 'The French Quarter (White Town)',
        description: 'Quiet, cobblestone lanes bordered by mustard-yellow colonial villas, bougainvillea, and chic cafes.',
        image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=600'
      },
      {
        name: 'Auroville & Matrimandir',
        description: 'An experimental, international spiritual township featuring the monumental golden globe Matrimandir.',
        image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=600'
      },
      {
        name: 'Promenade Beach',
        description: 'A rocky, 1.5-km coastal boardwalk along the Bay of Bengal, bustling with evening walkers.',
        image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=600'
      }
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200',
    gallery: [
      'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=800',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800'
    ],
    tags: ['culture', 'wellness', 'food', 'family']
  }
];
