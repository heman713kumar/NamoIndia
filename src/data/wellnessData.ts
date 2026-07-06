export interface WellnessExperience {
  id: string;
  category: 'ayurveda' | 'yoga' | 'meditation' | 'pilgrimage' | 'sufi' | 'buddhist';
  categoryLabel: string;
  title: string;
  location: string;
  recommendedStates: string[]; // matching IDs in destinations.ts
  tagline: string;
  intro: string;
  history: string;
  keyPractices: { title: string; description: string }[];
  sacredPlaces: { name: string; location: string; description: string }[];
  practicalTips: string[];
  image: string;
  relatedIds: string[];
}

export const WELLNESS_EXPERIENCES: WellnessExperience[] = [
  {
    id: 'ayurveda-kerala',
    category: 'ayurveda',
    categoryLabel: 'Ayurveda & Rejuvenation',
    title: 'Ayurvedic Healing & Panchakarma',
    location: 'Kerala Backwaters & Western Ghats',
    recommendedStates: ['kerala'],
    tagline: 'Restore cosmic elemental balance and deep cellular rejuvenation through the science of life.',
    intro: 'Ayurveda, translating to the "Science of Life," is a 5,000-year-old system of natural healing native to India. Kerala remains the global sanctuary of Ayurveda, where the humid tropical climate, abundance of rare medicinal herbs, and unbroken multi-generational family lineages of Vaidyas (physicians) provide the ultimate environment for authentic Panchakarma detoxification.',
    history: 'Codified in ancient texts like the Charaka Samhita and Sushruta Samhita, Ayurveda treats health not merely as the absence of disease, but as a dynamic balance of three bodily energies or Doshas: Vata (air/space), Pitta (fire/water), and Kapha (water/earth). While much of India experienced disruption in traditional knowledge during medieval conquests, Kerala protected its ancient Ayurvedic methodologies, refining the highly specialized "Panchakarma" five-fold cleansing therapies and unique herbal oil massages (Abhyanga and Shirodhara).',
    keyPractices: [
      {
        title: 'Abhyanga Massage',
        description: 'A rhythmic, full-body warm herbal oil massage performed in tandem by two trained therapists. It stimulates lymphatic drainage, expels toxins (Ama) from tissues, and deeply calms the nervous system.'
      },
      {
        title: 'Shirodhara',
        description: 'A deeply meditative therapy where a continuous, warm thread-like stream of customized medicated oil, buttermilk, or decoction is poured gently onto the forehead (the "third eye"), inducing deep brain-wave relaxation.'
      },
      {
        title: 'Panchakarma Detoxification',
        description: 'A comprehensive, multi-week five-stage purification program tailored specifically to an individual\'s constitution, involving diet, herbal steam baths, internal cleansing, and specialized oil therapy.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Kottakkal Arya Vaidya Sala',
        location: 'Malappuram, Kerala',
        description: 'Founded in 1902 by Vaidyaratnam P.S. Varier, it is a world-renowned charitable institution and hospital serving pure, classical Ayurvedic healthcare and manufacturing high-purity organic medicines.'
      },
      {
        name: 'Somatheeram Ayurvedic Health Resort',
        location: 'Chowara beach, Trivandrum, Kerala',
        description: 'Recognized as the world\'s first Ayurvedic resort, offering immersive healing programs on pristine ocean cliffs combined with daily classical yoga.'
      }
    ],
    practicalTips: [
      'The ideal season for intense Ayurvedic cleansing is the Monsoon (June to September). The cool, humid climate keeps the body\'s skin pores open and highly receptive to herbal oils.',
      'Always consult an in-house certified Ayurvedic doctor (BAMS degree) before starting any massage or herbal treatment; avoid touristy roadside parlors.',
      'Authentic Panchakarma requires complete mental and physical rest; avoid heavy sightseeing, refrain from alcohol/caffeine, and adhere strictly to the prescribed vegetarian diet during your retreat.'
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200',
    relatedIds: ['yoga-retreats-rishikesh', 'buddhist-meditation-bodhgaya']
  },
  {
    id: 'yoga-retreats-rishikesh',
    category: 'yoga',
    categoryLabel: 'Yoga & Pranayama',
    title: 'Yoga Capital of Rishikesh',
    location: 'Rishikesh, Uttarakhand',
    recommendedStates: ['uttarakhand'],
    tagline: 'Harmonize body, breath, and mind at the tranquil source of the sacred Ganges.',
    intro: 'Rishikesh is recognized globally as the "Yoga Capital of the World." Nestled in the Himalayan foothills where the crystal-clear emerald waters of the Ganges River pour into the plains, this sacred city is a magnet for spiritual seekers, housing hundreds of ashrams offering training in Hatha, Ashtanga, Kundalini, and Kriya yoga.',
    history: 'For millennia, Rishikesh has been a retreat for legendary sages, ascetics, and yogis who meditated in riverside caves. The city gained international fame in 1968 when The Beatles stayed at the ashram of Maharishi Mahesh Yogi to study Transcendental Meditation. Today, it remains the ultimate destination for certified yoga teacher trainings (YTT) and deep spiritual learning under the guidance of traditional masters.',
    keyPractices: [
      {
        title: 'Hatha & Ashtanga Asanas',
        description: 'Physical posture sequences designed to build strength, flexibility, and steady control of the physical body as a vehicle for meditation.'
      },
      {
        title: 'Pranayama & Breathwork',
        description: 'The ancient science of controlling prana (vital life energy) through structured breathing patterns, which quiet the nervous system and steady the mind.'
      },
      {
        title: 'Ganga Aarti Ceremony',
        description: 'A spectacular daily sunset devotional ritual of lights, chants, and fire offerings on the ghats (steps) of the river, acting as an emotional and spiritual purification.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Parmarth Niketan Ashram',
        location: 'Swargashram, Rishikesh',
        description: 'One of the largest ashrams in India, offering daily yoga, spiritual discourses, and the iconic sunset Ganga Aarti ceremony on its private ghats.'
      },
      {
        name: 'The Beatles Ashram (Chaurasi Kutia)',
        location: 'Rishikesh, Uttarakhand',
        description: 'The historic, forest-enveloped ashram ruins featuring unique dome-shaped stone meditation caves, now open as a heritage spiritual reserve.'
      }
    ],
    practicalTips: [
      'Join the annual International Yoga Festival held in Rishikesh in March, uniting global yoga masters, gurus, and thousands of practitioners from around the world.',
      'Adopt local etiquette: Rishikesh is a strictly vegetarian and alcohol-free holy town; respect this code fully throughout your stay.',
      'When enrolling in a Yoga Teacher Training Course, ensure the school is accredited by the global Yoga Alliance and respects traditional philosophical standards.'
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200',
    relatedIds: ['ayurveda-kerala', 'char-dham-circuit', 'varanasi-ghats']
  },
  {
    id: 'buddhist-meditation-bodhgaya',
    category: 'meditation',
    categoryLabel: 'Meditation & Vipassana',
    title: 'Vipassana & Buddhist Meditation',
    location: 'Bodh Gaya (Bihar) & Igatpuri (Maharashtra)',
    recommendedStates: ['bihar', 'maharashtra', 'uttar-pradesh'],
    tagline: 'Cultivate deep silent mindfulness and insight under the sacred branches of the Bodhi Tree.',
    intro: 'Vipassana, which means "to see things as they really are," is one of India\'s most ancient meditation techniques, rediscovered by Gautama Buddha 2,500 years ago. Today, centers in Bodh Gaya and Igatpuri serve as premier spiritual hubs where students engage in intensive silent meditation programs to eliminate mental impurities and achieve profound peace.',
    history: 'Siddhartha Gautama sat in deep meditation under a Pipal tree in Bodh Gaya and attained full enlightenment, becoming the Buddha. His core method of self-observation—mindfulness of breath (Anapana) and bodily sensations (Vipassana)—was preserved in Myanmar and reintroduced to modern India by the legendary teacher S.N. Goenka. The grand Dhamma Giri academy in Igatpuri, Maharashtra, features a massive golden pagoda with hundreds of individual meditation cells.',
    keyPractices: [
      {
        title: 'Noble Silence (Noble Silence)',
        description: 'Complete silence of speech, gesture, and eye contact for 10 full days during Vipassana courses, creating a deep psychological vacuum for inner reflection.'
      },
      {
        title: 'Anapana Breathing',
        description: 'Focusing undivided attention on the inhalation and exhalation of breath at the entrance of the nostrils to sharpen and concentrate the wandering mind.'
      },
      {
        title: 'Sensation Scanning',
        description: 'Systematically moving attention through the physical body to observe somatic sensations neutrally without reacting, dissolving deep-seated habits of craving and aversion.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Mahabodhi Temple & Bodhi Tree',
        location: 'Bodh Gaya, Bihar',
        description: 'The UNESCO World Heritage site marking the exact spot of Buddha\'s enlightenment, featuring a direct descendant of the original sacred Bodhi Tree where monks from around the globe meditate silently daily.'
      },
      {
        name: 'Dhamma Giri Vipassana International Academy',
        location: 'Igatpuri, Maharashtra',
        description: 'One of the world\'s largest Vipassana training centers, famous for its grand golden pagoda and highly structured, donation-based 10-day courses.'
      }
    ],
    practicalTips: [
      'Vipassana courses are completely free and run on voluntary donations. However, you must apply months in advance on the official Dhamma platform as seats fill up very quickly.',
      'Be prepared for a highly disciplined schedule: wake up at 4:00 AM daily, meditate for 10 hours a day, and consume no solid food after midday.',
      'Bring comfortable, loose, modest cotton clothing that fully covers shoulders and knees, suitable for long hours of sitting on floor cushions.'
    ],
    image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?q=80&w=1200',
    relatedIds: ['buddhist-circuit', 'ayurveda-kerala', 'varanasi-ghats']
  },
  {
    id: 'char-dham-circuit',
    category: 'pilgrimage',
    categoryLabel: 'Spiritual Pilgrimage Circuits',
    title: 'Char Dham Pilgrimage of Uttarakhand',
    location: 'Garhwal Himalayas, Uttarakhand',
    recommendedStates: ['uttarakhand'],
    tagline: 'A monumental Himalayan journey through the four sacred abodes of the gods.',
    intro: 'The Char Dham is the most sacred and physically demanding Hindu pilgrimage circuit in the Indian Himalayas. Located in the high-altitude Garhwal region of Uttarakhand, it spans four ancient temples—Yamunotri, Gangotri, Kedarnath, and Badrinath—situated amidst towering snow peaks, glacier rivers, and steep mountain gorges.',
    history: 'The circuit was established in the 8th century CE by the great philosopher-saint Adi Shankaracharya to unite spiritual seekers across India. The temples are dedicated to the sources of the holy rivers Yamuna and Ganga (Yamunotri and Gangotri), Lord Shiva (Kedarnath), and Lord Vishnu (Badrinath). Completing this arduous high-altitude circle is believed to wash away lifetimes of karma and lead to liberation (Moksha).',
    keyPractices: [
      {
        title: 'Himalayan Trekking',
        description: 'Trekking over rugged, steep mountain trails (such as the challenging 16 km climb to Kedarnath at 11,750 feet) alongside thousands of chanting pilgrims.'
      },
      {
        title: 'Hot Spring Ablutions',
        description: 'Bathing in natural, sacred thermal springs like Surya Kund at Yamunotri and Tapt Kund at Badrinath before entering the stone sanctums.'
      },
      {
        title: 'Panch Kedar & Abhishekam',
        description: 'Participating in historic dawn rituals (Abhishekam) where the stone deities are bathed in milk, honey, and sacred waters amidst echoing mantras.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Kedarnath Temple',
        location: 'Rudraprayag, Uttarakhand',
        description: 'A majestic, 1,000-year-old stone temple built of massive interlocking gray granite slabs, set against the backdrop of the towering, snowy Kedarnath peak.'
      },
      {
        name: 'Badrinath Temple',
        location: 'Chamoli, Uttarakhand',
        description: 'A brightly painted temple on the banks of the Alaknanda River, dedicated to Lord Vishnu and framed by the twin mountain peaks of Nar and Narayana.'
      }
    ],
    practicalTips: [
      'The temples are open only from May to October/November; they are completely closed during the freezing winter when the deities are carried down to lower valleys.',
      'Register for the mandatory biometric Yatra passes online with the Uttarakhand Tourism Board before starting your journey.',
      'Acclimatize for 1-2 days at lower heights (like Rishikesh or Haridwar) to prevent Altitude Sickness (AMS). Carry warm thermal layers, heavy rainwear, and sturdy hiking shoes.'
    ],
    image: 'https://images.unsplash.com/photo-1598463289946-3b77812280c1?q=80&w=1200',
    relatedIds: ['yoga-retreats-rishikesh', 'varanasi-ghats', 'golden-temple-amritsar']
  },
  {
    id: 'golden-temple-amritsar',
    category: 'pilgrimage',
    categoryLabel: 'Spiritual Pilgrimage Circuits',
    title: 'The Golden Temple (Harmandir Sahib)',
    location: 'Amritsar, Punjab',
    recommendedStates: ['punjab'],
    tagline: 'Experience boundless egalitarian love and infinite community service in a golden pool of nectar.',
    intro: 'The Sri Harmandir Sahib, known as the Golden Temple, is the spiritual and cultural heart of the Sikh faith. Rising out of a massive, square sacred pool of nectar (Amrit Sarovar) in Amritsar, this stunning gold-plated marble temple is an oasis of peace, serving over 100,000 pilgrims daily regardless of race, caste, or religion.',
    history: 'The site was founded in 1577 by the fourth Sikh Guru, Guru Ram Das, around a natural pool. The temple structure itself was completed by Guru Arjan Dev, who designed it with four open doors facing all cardinal directions to show that people of all walks of life are welcome. In the early 19th century, Maharaja Ranjit Singh covered the upper half of the temple in over 500 kilograms of pure gold leaf, creating its legendary modern appearance.',
    keyPractices: [
      {
        title: 'Seva (Selfless Service)',
        description: 'Sikhism\'s core pillar. Hundreds of volunteers work tirelessly chopping vegetables, cooking, washing dishes, and sweeping floors to keep the temple complex operating flawlessly.'
      },
      {
        title: 'The Langar Community Meal',
        description: 'The world\'s largest free community kitchen. Every single visitor sits cross-legged on the floor in long rows (Pangat) to share a delicious, simple vegetarian meal as equals.'
      },
      {
        title: 'Palki Sahib Ceremony',
        description: 'A moving, twice-daily ritual where the holy scripture, Guru Granth Sahib, is carried in a golden palanquin from the main shrine to its resting room amidst hymns and drums.'
      }
    ],
    sacredPlaces: [
      {
        name: 'The Sanctum Sanctorum',
        location: 'Amritsar, Punjab',
        description: 'The two-story golden shrine in the middle of the lake, where continuous live singing of sacred hymns (Gurbani Kirtan) is broadcast throughout the complex.'
      },
      {
        name: 'Akal Takht',
        location: 'Amritsar, Punjab',
        description: 'Directly facing the Golden Temple, it is the highest seat of temporal authority for Sikhs, originally built by Guru Hargobind.'
      }
    ],
    practicalTips: [
      'The Golden Temple is open 24/7. Visit twice: once at sunrise to see the golden walls glint in the orange sky, and again at night to witness the illuminated reflection on the dark water.',
      'Everyone must cover their head at all times inside the temple complex. Bandanas are available for free at the entrances, or you can bring your own scarf. You must wash your feet in the shallow water channels at the gates.',
      'Savor the famous "Karah Prasad"—a warm, rich sweet offering made of whole-wheat flour, ghee, and sugar given to pilgrims exiting the main bridge.'
    ],
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    relatedIds: ['varanasi-ghats', 'sufi-ajmer-sharif', 'char-dham-circuit']
  },
  {
    id: 'varanasi-ghats',
    category: 'pilgrimage',
    categoryLabel: 'Spiritual Pilgrimage Circuits',
    title: 'The Sacred Ghats of Varanasi',
    location: 'Varanasi, Uttar Pradesh',
    recommendedStates: ['uttar-pradesh'],
    tagline: 'Observe the eternal circle of life, death, and deep devotion on the banks of Mother Ganges.',
    intro: 'Varanasi, also known as Kashi or Benares, is one of the world\'s oldest continuously inhabited cities. Built along the crescent-shaped western bank of the Ganges River, its 84 historic stone Ghats (steps leading to water) are a grand amphitheater of spiritual life where millions come to bathe, meditate, and perform sacred life-cycle rituals.',
    history: 'Regarded as the earthly home of Lord Shiva, Varanasi has been India\'s premier center of spirituality, Sanskrit scholarship, and philosophy for over 3,000 years. Buddha preached his first sermon nearby at Sarnath, and legendary poets like Kabir and Tulsidas wrote their epics here. The river is believed to possess the capacity to cleanse all sins, and passing away here is said to guarantee instant liberation (Moksha) from the cycle of rebirth.',
    keyPractices: [
      {
        title: 'Ganga Snan (Holy Bathing)',
        description: 'Plunging into the sacred waters of the Ganges at sunrise, an ancient daily purification ritual performed by thousands of residents and pilgrims.'
      },
      {
        title: 'The Ganga Aarti of Dashashwamedh',
        description: 'A highly choreographed, spectacular evening ritual where young priests wave giant brass multi-tiered fire lamps in unison to the sound of bells and shells.'
      },
      {
        title: 'Maha Shamshan (Cremation Rites)',
        description: 'At Manikarnika and Harishchandra Ghats, funeral pyres burn continuously 24/7, offering a sobering, profound reflection on the impermanence of physical life.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Kashi Vishwanath Temple (The Golden Temple of Shiva)',
        location: 'Varanasi, Uttar Pradesh',
        description: 'One of the twelve sacred Jyotirlingas, featuring spire gold towers, recently connected to the river via a grand pedestrian heritage corridor.'
      },
      {
        name: 'Assi Ghat & Subah-e-Banaras',
        location: 'Varanasi, Uttar Pradesh',
        description: 'The southernmost ghat, famous for its peaceful dawn concerts of Hindustani classical music, yoga, and early morning fire rituals.'
      }
    ],
    practicalTips: [
      'Take a private wooden row-boat ride at dawn (around 5:30 AM). Watching the multi-mile stretch of steps, shrines, and old palaces slowly light up under the morning sun is an unforgettable sight.',
      'Be extremely respectful when visiting cremation ghats like Manikarnika. Absolutely no photography is permitted, keep a quiet distance, and ignore aggressive touts claiming to sell wood for funerals.',
      'Wander through the "Galalis"—the labyrinthine, ultra-narrow medieval alleyways behind the ghats packed with tiny shrines, cows, spice stalls, and silk looms.'
    ],
    image: 'https://images.unsplash.com/photo-1561361062-1d8f343a41e4?q=80&w=1200',
    relatedIds: ['hindustani-music', 'char-dham-circuit', 'buddhist-meditation-bodhgaya']
  },
  {
    id: 'sufi-ajmer-sharif',
    category: 'sufi',
    categoryLabel: 'Sufi Shrines & Mysticism',
    title: 'The Dargah of Ajmer Sharif',
    location: 'Ajmer, Rajasthan',
    recommendedStates: ['rajasthan'],
    tagline: 'Immerse in the ecstatic, musical devotion of Sufi saints singing for the divine beloved.',
    intro: 'The Dargah of Ajmer Sharif is the sacred tomb of Hazrat Khwaja Moinuddin Chishti, a 13th-century Sufi saint who established the Chishti order of spiritual mysticism in India. Today, this grand white-domed complex is a center of universal peace, welcoming millions of Muslims, Hindus, Sikhs, and Christians who come to seek blessings through mystical songs (Qawwalis).',
    history: 'Khwaja Moinuddin Chishti, also affectionately called "Gharib Nawaz" (Benefactor of the Poor), migrated from Persia to Rajasthan in the 1190s. He advocated for absolute love, tolerance, and service to humanity, teaching that devotion to God is best expressed by feeding the hungry and relieving the suffering of the poor. Mughal Emperors Akbar and Shah Jahan traveled on foot from Agra to this shrine to pay homage, building grand marble courtyards and massive cooking cauldrons.',
    keyPractices: [
      {
        title: 'Qawwali Performance',
        description: 'Ecstatic, devotional Sufi music sung in the main courtyard (Mehfil Khana) every evening. Powerful vocals, hand-clapping, and harmoniums create an atmosphere of spiritual intoxication.'
      },
      {
        title: 'Chadhar Offering',
        description: 'Pilgrims present a beautiful, embroidered silk sheet (Chadhar) and fresh pink rose petals over the marble tomb of the saint to express vows or ask for blessings.'
      },
      {
        title: 'The Degs Cooking',
        description: 'Worshippers cook sweet saffron rice (Kheer) containing dry fruits in two gigantic historic bronze cauldrons (Degs) inside the complex, feeding thousands of poor daily.'
      }
    ],
    sacredPlaces: [
      {
        name: 'The Sanctum of Gharib Nawaz',
        location: 'Ajmer, Rajasthan',
        description: 'The central marble dome containing the silver-railed tomb of the Sufi saint, filled with the aroma of fresh roses and burning sandalwood incense.'
      },
      {
        name: 'Adhai Din Ka Jhonpra',
        location: 'Ajmer, Rajasthan',
        description: 'Located close to the Dargah, this rare 12th-century monument features early Indo-Islamic yellow-sandstone arches carved with exquisite calligraphy.'
      }
    ],
    practicalTips: [
      'The Dargah becomes exceptionally busy on Thursdays and Fridays, and during the annual "Urs" festival (held in Rajab month) commemorating the saint\'s union with the divine.',
      'Tie a "Mannat ka Dhaga" (sacred thread of vow) around the marble screens of the tomb—it is traditional to return and untie it once your prayers are fulfilled.',
      'Always dress conservatively: both men and women must cover their heads. Be extremely careful of your pockets and wallets in the crowded bazaar streets leading to the Dargah.'
    ],
    image: 'https://images.unsplash.com/photo-1590075865003-e48277faa558?q=80&w=1200',
    relatedIds: ['golden-temple-amritsar', 'varanasi-ghats', 'rajasthan-puppetry']
  },
  {
    id: 'buddhist-circuit',
    category: 'buddhist',
    categoryLabel: 'The Sacred Buddhist Circuit',
    title: 'The Historic Buddhist Circuit',
    location: 'Bodh Gaya, Sarnath, Kushinagar & Sanchi',
    recommendedStates: ['bihar', 'uttar-pradesh', 'madhya-pradesh'],
    tagline: 'Trace the footprints of Siddhartha Gautama from birth and enlightenment to his final parinirvana.',
    intro: 'The Buddhist Circuit is an international spiritual trail connecting the key geographic milestones of Gautama Buddha\'s life. Spanning Bodh Gaya (Enlightenment), Sarnath (First Sermon), Kushinagar (Passing), and Sanchi (Ancient Relics), it is a profound journey of historical exploration and spiritual meditation.',
    history: 'In the 3rd century BCE, Emperor Ashoka converted to Buddhism after the bloody war of Kalinga. To propagate the philosophy of non-violence (Ahimsa), he erected monumental sandstone pillars and built magnificent hemispherical stone brick mounds (Stupas) across India to house sacred relics. Today, these sites host modern temples, monasteries, and meditation halls built by Buddhist nations from Japan and Thailand to Sri Lanka and Tibet.',
    keyPractices: [
      {
        title: 'Pradakshina (Circumambulation)',
        description: 'Walking clockwise around ancient brick and stone stupas while chanting or reciting mantras, mirroring the revolving path of the cosmic wheel of law (Dharmachakra).'
      },
      {
        title: 'Bodhi Leaf Meditation',
        description: 'Sitting under the sacred Bodhi Tree in Bodh Gaya, collecting fallen leaves as highly treasured symbols of personal awakening and mindfulness.'
      },
      {
        title: 'Asokan Art Exploration',
        description: 'Studying the early artistic achievements of ancient India, such as the highly polished lion-capitals and highly detailed gateways (Toranas) of Sanchi Stupa.'
      }
    ],
    sacredPlaces: [
      {
        name: 'Dhamekh Stupa of Sarnath',
        location: 'Varanasi, Uttar Pradesh',
        description: 'A massive, 43-meter-tall cylindrical brick stupa marking the exact spot of Deer Park where Buddha delivered his first discourse (Dharmachakra Pravartana) to his five disciples.'
      },
      {
        name: 'The Great Stupa of Sanchi',
        location: 'Sanchi, Madhya Pradesh',
        description: 'A UNESCO World Heritage site and India\'s oldest surviving stone monument, featuring exquisite 1st-century BCE gateways covered in detailed narrative carvings of Jataka stories.'
      }
    ],
    practicalTips: [
      'The best time to travel the Buddhist Circuit is during winter (October to March) when the climate is cool and comfortable for long outdoor walking and meditation.',
      'Spend a morning visiting the multi-national monasteries in Bodh Gaya—each country (Thailand, Japan, Bhutan, Tibet) has built monasteries in their unique native architectural styles.',
      'Wear slip-on shoes or sandals because you will be removing them repeatedly to enter temple precincts and walk around the stupas.'
    ],
    image: 'https://images.unsplash.com/photo-1600100397608-f010e47da03f?q=80&w=1200',
    relatedIds: ['buddhist-meditation-bodhgaya', 'varanasi-ghats', 'vesara-architecture']
  }
];

export function getWellnessExperience(id: string): WellnessExperience | undefined {
  return WELLNESS_EXPERIENCES.find((item) => item.id === id);
}

export function getRelatedWellnessExperiences(id: string, count: number = 3): WellnessExperience[] {
  const current = getWellnessExperience(id);
  if (!current) return WELLNESS_EXPERIENCES.slice(0, count);
  return WELLNESS_EXPERIENCES
    .filter((item) => item.id !== id && (item.category === current.category || item.recommendedStates.some(s => current.recommendedStates.includes(s))))
    .concat(WELLNESS_EXPERIENCES.filter((item) => item.id !== id))
    .slice(0, count);
}
