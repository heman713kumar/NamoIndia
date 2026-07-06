export interface CultureExperience {
  id: string;
  category: 'dances' | 'textiles' | 'architecture' | 'music' | 'theatre' | 'handicrafts';
  categoryLabel: string;
  title: string;
  origin: string;
  recommendedStates: string[]; // matching IDs in destinations.ts
  tagline: string;
  intro: string;
  history: string;
  keyElements: { title: string; description: string }[];
  centersOfExcellence: { name: string; location: string; description: string }[];
  practicalTips: string[];
  image: string;
  relatedIds: string[];
}

export const CULTURE_EXPERIENCES: CultureExperience[] = [
  // 1. CLASSICAL DANCES
  {
    id: 'bharatanatyam',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Bharatanatyam',
    origin: 'Tamil Nadu',
    recommendedStates: ['tamil-nadu'],
    tagline: 'The mathematical precision of dynamic movement and profound spiritual devotion.',
    intro: 'Bharatanatyam is one of the oldest classical dance traditions of India, originating over 2,000 years ago in the temples of Tamil Nadu. It is an artistic practice that combines intense rhythmic precision, highly geometric postures, and theatrical facial expressions to tell sacred stories from Indian epics.',
    history: 'Originally performed exclusively by temple dancers called Devadasis as a sacred ritual of worship in Chola and Pandya shrines, Bharatanatyam was codified in the ancient Sanskrit treatise, the Natya Shastra. Despite facing suppression during the colonial era, the art form underwent a major renaissance in the early 20th century led by pioneers like Rukmini Devi Arundale, who established Kalakshetra, transforming it into a globally celebrated stage performance.',
    keyElements: [
      {
        title: 'Araimandi',
        description: 'The signature half-squat posture that forms the physical foundation of almost all dance steps, creating a highly centered and grounded geometric aesthetic.'
      },
      {
        title: 'Mudra Hand Gestures',
        description: 'A rich vocabulary of 28 single-hand (Asamyuta) and 24 double-hand (Samyuta) gestures used to represent anything from animals and cosmic deities to raw human emotions.'
      },
      {
        title: 'Nritta & Abhinaya',
        description: 'The dynamic duality of the dance: Nritta consists of pure, abstract rhythmic footwork paired with temple bell chimes, while Abhinaya focuses on intense facial mime and eye movements representing deep devotion (Bhakti).'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Kalakshetra Foundation',
        location: 'Chennai, Tamil Nadu',
        description: 'A legendary institute founded in 1936, preserving the pure aesthetic, philosophy, and rigorous Gurukul style of training in Bharatanatyam.'
      },
      {
        name: 'Chidambaram Temple',
        location: 'Chidambaram, Tamil Nadu',
        description: 'Famous for its stone carvings of the 108 Karanas (fundamental dance transits) of Bharatanatyam, where the annual Natyanjali dance festival takes place.'
      }
    ],
    practicalTips: [
      'Attend the annual Natyanjali Festival in Chidambaram (held during Mahashivratri in Feb/Mar) to see live performances inside ancient temple complexes.',
      'Always remove shoes when entering performance halls or heritage dance theaters as classical dance is treated as a sacred ritual.',
      'Buy a brochure or program guide at the venue to understand the hand gestures and mythological narratives before the recital starts.'
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
    relatedIds: ['kuchipudi', 'odissi', 'carnatic']
  },
  {
    id: 'kathak',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Kathak',
    origin: 'Uttar Pradesh',
    recommendedStates: ['uttar-pradesh', 'delhi-ut', 'rajasthan'],
    tagline: 'The art of swift, dizzying pirouettes and dramatic historical storytelling.',
    intro: 'Kathak is the premier classical dance form of Northern India, celebrated for its rapid, complex footwork, lightning-fast spins (Chakkars), and highly expressive facial gestures. It is a spectacular fusion of Hindu temple roots and elegant Persian court influences.',
    history: 'Kathak evolved from ancient nomadic storytellers, known as Kathakars, who traveled through temples in Uttar Pradesh narrating moral epics through basic gestures and song. Under the medieval patronage of Mughal emperors and the Nawabs of Awadh, the dance migrated to royal courts. Here, it acquired its hallmark aristocratic elegance, intricate rhythmic mathematics (Tatkar), and gorgeous flowing costumes.',
    keyElements: [
      {
        title: 'Tatkar Footwork',
        description: 'Extremely fast, bare-foot rhythmic stomping that mimics the complex syncopation of the Tabla or Pakhawaj drum, using hundreds of brass ankle bells (Ghungroos).'
      },
      {
        title: 'Chakkars',
        description: 'Stunningly rapid, repeated vertical spins performed on the heel, causing the dancer\'s long, flared skirt (Anarkali) to bloom outwards in a perfect circle.'
      },
      {
        title: 'Gharana Lineages',
        description: 'Distinct stylistic schools that shaped Kathak: the Lucknow Gharana (grace, sensuality, and expressive storytelling), the Jaipur Gharana (pure rhythmic speed and athletic turns), and the Benaras Gharana.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Kathak Kendra',
        location: 'New Delhi',
        description: 'The premier national institute for Kathak dance, previously guided by the legendary maestro Birju Maharaj.'
      },
      {
        name: 'Lucknow Kathak Sansthan',
        location: 'Lucknow, Uttar Pradesh',
        description: 'A prominent academy dedicated to preserving the graceful, dramatic, and historic court style of the Awadh court.'
      }
    ],
    practicalTips: [
      'Look out for Kathak recitals during Delhi\'s heritage festivals (like the Qutub Festival) to watch the dancers spin against illuminated historic monuments.',
      'Pay close attention to the verbal vocalization of rhythms (Bol) by the guru before the dancer renders them with their feet—it is a live mathematical conversation.',
      'Arrive early to secure front-row seating, which lets you fully appreciate the micro-expressions of the eyes and the complex foot-slaps.'
    ],
    image: 'https://images.unsplash.com/photo-1619476217433-f09b5336f332?q=80&w=1200',
    relatedIds: ['hindustani', 'kathakali', 'chikankari']
  },
  {
    id: 'odissi',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Odissi',
    origin: 'Odisha',
    recommendedStates: ['odisha'],
    tagline: 'The liquid grace of temple sculptures brought to life in fluid motion.',
    intro: 'Odissi is a highly lyrical and visually stunning classical dance form from the coastal state of Odisha. Distinguished by its soft, s-curved postures, it mimics the stone carvings of celestial maidens found on ancient sun temples, creating an illusion of sculptures melting into motion.',
    history: 'With origins dating back to the 2nd century BCE (as carved in the Udayagiri caves), Odissi was nurtured by the Maharis (temple maidens) of the sacred Jagannath Temple in Puri. It is deeply connected with the spiritual poetry of the Gita Govinda, depicting the playful, divine love of Lord Krishna. Surviving near-extinction under British rule, it was revived in the mid-20th century by legendary gurus who reconstructed its classical poses from temple reliefs.',
    keyElements: [
      {
        title: 'Tribhanga Posture',
        description: 'The defining "three-bend" pose of Odissi, where the body is gently deflected at the neck, torso, and knees, creating an elegant, fluid "S" curve reminiscent of Chola and Kalinga sculptures.'
      },
      {
        title: 'Chauka',
        description: 'A solid, masculine, wide-set square posture representing Lord Jagannath, symbolizing universal stability and providing a powerful contrast to the delicate Tribhanga.'
      },
      {
        title: 'Silver Ornaments & Pata Sari',
        description: 'Dancers wear traditional, exquisite silver filigree jewelry (Tarakasi) from Cuttack and beautiful Sambalpuri silk sarees wrapped in a distinctive fan-like layout.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Srjan (Guru Kelucharan Mohapatra Odissi Nrityabhasa)',
        location: 'Bhubaneswar, Odisha',
        description: 'Founded by the father of modern Odissi revival, Srjan provides rigorous training in the classic Kelucharan style.'
      },
      {
        name: 'Konark Sun Temple Stage',
        location: 'Konark, Odisha',
        description: 'The breathtaking backdrop for the annual Konark Dance Festival, where international artists perform in front of the 13th-century stone chariot.'
      }
    ],
    practicalTips: [
      'Plan your trip to coincide with the Konark Dance Festival (December 1-5) to witness spectacular group Odissi performances under the open winter night sky.',
      'Explore Bhubaneswar\'s Mukteshwar and Raja Rani temples before attending a show—you will recognize the exact dance poses in the 1,000-year-old stone reliefs.',
      'Cuttack and Bhubaneswar have excellent boutiques to purchase the precise hand-woven sarees and silver filigree worn by the dancers.'
    ],
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1200',
    relatedIds: ['nagara', 'bharatanatyam', 'madhubani-painting']
  },
  {
    id: 'kathakali',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Kathakali',
    origin: 'Kerala',
    recommendedStates: ['kerala'],
    tagline: 'A cosmic dance-drama of elaborate paint, monumental costumes, and silent theatrical power.',
    intro: 'Kathakali is a highly stylized classical dance-drama from Kerala, renowned for its giant, colorful costumes, monumental headgears, and the world\'s most detailed system of facial makeup. It combines dance, theater, poetry, and percussion to depict high-stakes battles between gods and demons.',
    history: 'Kathakali emerged in the 17th century, drawing elements from ancient martial arts (Kalaripayattu) and folk ritual theaters (like Theyyam and Kutiyattam). It was traditionally performed in the open courtyards of Hindu temples by torchlight, lasting from dusk until dawn. The legendary poet Vallathol Narayana Menon revived the dying art in 1930 by founding the Kerala Kalamandalam, bringing it to the modern global stage.',
    keyElements: [
      {
        title: 'Vesham Makeup',
        description: 'A complex, 4-hour hand-painted makeup process using natural mineral pastes. Characters are color-coded: Paccha (green for noble heroes like Rama), Katti (green with red streaks for arrogant villains), and Thadi (bearded, representing wild forest deities or demons).'
      },
      {
        title: 'Chutti border',
        description: 'A raised, white frame made of rice-paste and paper applied along the jawline, designed to highlight the performer\'s facial expressions and focus the audience\'s attention.'
      },
      {
        title: 'Navarasas (Nine Emotions)',
        description: 'A phenomenal display of facial expressions, where actors use hyper-trained cheek muscles and turn their eyes red using harmless seed extracts to convey love, anger, fear, or peace.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Kerala Kalamandalam',
        location: 'Cheruthuruthy, Kerala',
        description: 'The state\'s premier university for classical performing arts, conserving the classical Gurukul training standards.'
      },
      {
        name: 'Margi Cultural Center',
        location: 'Trivandrum, Kerala',
        description: 'A dedicated guild preserving rare, classical Kathakali scripts and conducting intimate chamber recitals.'
      }
    ],
    practicalTips: [
      'Always arrive 2 hours early to a Kathakali performance. Venues in Fort Kochi allow guests to sit on the floor and watch the silent, meditative "makeup ceremony" (Chutti) live on stage.',
      'Kathakali is fully silent for the actors; they communicate entirely via mudras while two singers chant the narrative poetry. Rent a synopsis sheet to follow the plot.',
      'Watch the heavy, live percussion of the Chenda and Maddalam drums—they provide a highly dramatic, thunderous soundtrack.'
    ],
    image: 'https://images.unsplash.com/photo-1608958416733-4f9e61284a0d?q=80&w=1200',
    relatedIds: ['yakshagana', 'carnatic', 'dravidian']
  },
  {
    id: 'manipuri',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Manipuri',
    origin: 'Manipur',
    recommendedStates: ['manipur', 'assam'],
    tagline: 'The gentle, ethereal floating of devotional love and ecstatic drum dances.',
    intro: 'Manipuri is a classical dance form from the valley of Manipur in Northeast India, famous for its soft, swaying, and highly fluid movements that make dancers appear to float over the floor. It is deeply spiritual, focusing on the Raas Leela (cosmic love dance) of Radha and Krishna.',
    history: 'Steeped in tribal folklore and ancient animistic rituals (like Lai Haraoba), Manipuri was transformed in the 18th century with the arrival of Vaishnavism. King Bhagyachandra codified the classical dance, designing the legendary mirror-studded costume after reportedly seeing it in a divine dream. Nobel laureate Rabindranath Tagore fell in love with its spiritual grace in 1919 and introduced it to Santiniketan, popularizing it globally.',
    keyElements: [
      {
        title: 'Kumil Costume',
        description: 'A highly distinctive, barrel-shaped stiff skirt covered in velvet, satin, and thousands of tiny mirrors. As the dancer sways, the mirror fragments catch the light, creating an ethereal glow.'
      },
      {
        title: 'Pung Cholom',
        description: 'The dramatic contrast to the soft Raas Leela—an athletic, high-energy drum dance where male performers leap, spin, and execute acrobatics while playing the double-headed Pung drum.'
      },
      {
        title: 'Soft Footwork',
        description: 'Unlike other classical forms, Manipuri does not have heavy heel-stamps. Dancers walk on their toes, bending their knees in continuous, gentle curves so that no jerks or sudden breaks disrupt the motion.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Jawaharlal Nehru Manipur Dance Academy',
        location: 'Imphal, Manipur',
        description: 'The premier national institute offering training in classical Manipuri dance, ritual singing, and drum traditions.'
      },
      {
        name: 'Govindaji Temple Courtyard',
        location: 'Imphal, Manipur',
        description: 'The sacred, historical heart where massive Raas Leela festivals are held during Holi and Kartik Purnima.'
      }
    ],
    practicalTips: [
      'Travel to Manipur during Kartik Purnima (Nov) or Holi (Yaoshang) to see traditional Raas Leelas performed all night long inside active village temples.',
      'Enjoy the slow, soft vocal chants (Sankirtana) that accompany the dance—this singing style is recognized by UNESCO as an Intangible Cultural Heritage of Humanity.',
      'Purchase miniature wooden Manipuri dancers dressed in the mirror Kumil skirt from handloom cooperatives in Imphal.'
    ],
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200', // standard high-quality classical
    relatedIds: ['odissi', 'hindustani', 'pashmina']
  },
  {
    id: 'kuchipudi',
    category: 'dances',
    categoryLabel: 'Classical Dance Forms',
    title: 'Kuchipudi',
    origin: 'Andhra Pradesh',
    recommendedStates: ['andhra-pradesh', 'telangana'],
    tagline: 'The dramatic fusion of lively, sparkling footwork and acrobatic brass-plate balance.',
    intro: 'Kuchipudi is a high-energy, narrative classical dance-drama from Andhra Pradesh. It is celebrated for its lively, sparkling footwork, quick tempo, and unique theatrical elements—culminating in spectacular acrobatic feats like dancing on the rim of a brass plate.',
    history: 'Kuchipudi originated as a dance-drama tradition in the village of Kuchipudi in Andhra Pradesh. For centuries, it was performed strictly by male Brahmin priests (called Bhagavathulu) who traveled from village to village presenting sacred stories. It was codified in the 17th century by the saint Siddhendra Yogi. Over the 20th century, the dance was refined for solo stage recitals and opened to women, who brought unmatched lyricism and elegance.',
    keyElements: [
      {
        title: 'Tarangam',
        description: 'The spectacular climax of a Kuchipudi recital: the dancer balances on the sharp, raised rim of a heavy brass plate while balancing a pot of water on their head, executing rapid, rhythmic foot stomps.'
      },
      {
        title: 'Vachika Abhinaya',
        description: 'A unique feature where, unlike other classical dancers, Kuchipudi performers actually sing or speak dramatic dialogues live on stage during key storytelling sequences.'
      },
      {
        title: 'Bhama Kalapam',
        description: 'The signature piece of Kuchipudi theater, depicting the elegant, proud, and passionate character of Satyabhama, Krishna\'s consort.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Kuchipudi Art Academy',
        location: 'Chennai & Hyderabad',
        description: 'Founded by the legendary guru Vempati Chinna Satyam, this academy revolutionized the dance form, introducing female solo training and modern choreography.'
      },
      {
        name: 'Kuchipudi Village Heritage Center',
        location: 'Krishna District, Andhra Pradesh',
        description: 'The historic village birthplace where hereditary families continue to practice and teach the ancestral temple-drama styles.'
      }
    ],
    practicalTips: [
      'Visit the historic village of Kuchipudi (near Vijayawada) to meet hereditary dancing families and see the Gurukul style of learning first-hand.',
      'Watch the "Tarangam" segment closely; it is a phenomenal exercise in skeletal balance, center-of-gravity control, and absolute rhythm.',
      'Enjoy the lively Carnatic music ensemble that features the flute, violin, and mridangam drum providing a buoyant soundtrack.'
    ],
    image: 'https://images.unsplash.com/photo-1612450865753-e11dd87e4bc1?q=80&w=1200',
    relatedIds: ['bharatanatyam', 'carnatic', 'dravidian']
  },

  // 2. TEXTILE TRADITIONS
  {
    id: 'banarasi-silk',
    category: 'textiles',
    categoryLabel: 'Textile Traditions',
    title: 'Banarasi Silk Weaving',
    origin: 'Varanasi, Uttar Pradesh',
    recommendedStates: ['uttar-pradesh'],
    tagline: 'Mulberry silk handwoven with pure gold and silver wire for royalty.',
    intro: 'Banarasi silk is the pinnacle of Indian textile art. Crafted in the ancient city of Varanasi, these heavy, opulent sarees are hand-woven from finest mulberry silk and decorated with intricate floral or architectural patterns made from pure gold and silver thread (Zari).',
    history: 'The weaving of fine silks in Varanasi is mentioned in ancient Buddhist texts and the Mahabharata. However, the art reached its golden age during the Mughal Empire in the 16th century, when Persian weavers introduced Islamic floral designs (Jal), paisley motifs, and complex brocades. Today, a single wedding Banarasi saree can take anywhere from 15 days to six months of painstaking work by three master weavers.',
    keyElements: [
      {
        title: 'Real Zari Brocade',
        description: 'The process of flattening gold or silver wire and wrapping it around a silk core to weave rich, metallic motifs. Genuine vintage Banarasi weaves used real gold wire for royal court robes.'
      },
      {
        title: 'Kadhwa Weaving',
        description: 'A highly sophisticated technique where each floral motif is woven individually onto the loom. This leaves no loose floats of thread on the reverse side of the fabric, ensuring a clean, smooth finish.'
      },
      {
        title: 'Mughal Motifs',
        description: 'Classic designs like the Kalga (paisley), Shikargah (royal hunting scenes), and Bel (vines), which trace back to court carpets and palace stone carvings.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Madanpura & Peeli Kothi Weaving Districts',
        location: 'Varanasi, Uttar Pradesh',
        description: 'The historic labyrinth of streets where hundreds of Muslim master weavers (Ansaris) operate noisy wooden handlooms in their homes.'
      },
      {
        name: 'Deen Dayal Hastkala Sankul',
        location: 'Varanasi, Uttar Pradesh',
        description: 'A modern national handicraft museum and trade center displaying the historic evolution of Varanasi weaving.'
      }
    ],
    practicalTips: [
      'Hire a local heritage guide in Varanasi to take you directly inside Madanpura\'s home workshops—it is a magical experience to hear the clack-clack of looms in dark brick alcoves.',
      'Check for the "Silk Mark" and "Geographical Indication (GI)" tags to ensure you are buying genuine, hand-woven Banarasi silk rather than cheap, machine-made synthetic duplicates.',
      'Traditional Banarasi sarees are heavy (weighing up to 2 kg due to the metallic Zari); pack accordingly for your flights.'
    ],
    image: 'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1200',
    relatedIds: ['kathak2', 'chikankari', 'blue-pottery']
  },
  {
    id: 'pashmina',
    category: 'textiles',
    categoryLabel: 'Textile Traditions',
    title: 'Kashmiri Pashmina',
    origin: 'Jammu & Kashmir',
    recommendedStates: ['jammu-kashmir', 'ladakh-ut'],
    tagline: 'The ultimate luxury wool, hand-combed from high-altitude Himalayan goats.',
    intro: 'Pashmina is the world\'s finest, warmest, and most delicate cashmere wool. Sourced from the undercoat of goats grazing at over 14,000 feet in the cold deserts of Ladakh, this wool is spun and embroidered by hand in Kashmir into shawls of legendary softness.',
    history: 'Pashmina weaving was patronized in the 15th century by the ruler Zain-ul-Abidin, who brought master weavers from Central Asia. In the 18th century, Pashmina shawls became the ultimate fashion symbol in imperial Europe, particularly popularized by French Empress Josephine. A genuine Pashmina is so fine that a full, 2-meter shawl can easily be threaded through a small wedding ring.',
    keyElements: [
      {
        title: 'Changthangi Goat Down',
        description: 'The ultra-fine wool (measuring only 12-15 microns in diameter, compared to human hair at 70 microns) shed during spring by the Changthangi goat living in sub-zero Changtang plateaus.'
      },
      {
        title: 'Hand-Spinning on Charkha',
        description: 'Because the fibers are extremely delicate, they cannot tolerate the tension of machines. Every single thread is hand-spun on wooden wheels, primarily by women in Kashmiri villages.'
      },
      {
        title: 'Sozni & Kani Embroidery',
        description: 'Kani shawls are woven using tiny wooden spools to build patterns mathematically directly on the loom, while Sozni shawls feature dense, hand-needle embroidery of incredible detail.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Old City Artisans District',
        location: 'Srinagar, Kashmir',
        description: 'The historic alleys of Srinagar where multi-generational families sit in silent wooden rooms doing micro-needle embroidery for years on a single shawl.'
      },
      {
        name: 'Changtang Nomadic Camps',
        location: 'Ladakh',
        description: 'The cold-desert highlands where the nomadic Changpa herdsmen harvest the raw Pashm wool from their goats.'
      }
    ],
    practicalTips: [
      'Perform the "Ring Test" when buying: a real, lightweight pure Pashmina shawl should slip effortlessly through a metal ring.',
      'Srinagar houses the Government Arts Emporium, which is the safest spot to purchase authenticated, handloom Pashminas with fixed, fair prices for the artisans.',
      'Never wash Pashmina in hot water or standard detergents; dry clean only to preserve the organic loft of the wool fibers.'
    ],
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200',
    relatedIds: ['bandhani', 'hindustani', 'yoga-retreats-rishikesh']
  },
  {
    id: 'bandhani',
    category: 'textiles',
    categoryLabel: 'Textile Traditions',
    title: 'Bandhani Tie-Dye',
    origin: 'Gujarat & Rajasthan',
    recommendedStates: ['gujarat', 'rajasthan'],
    tagline: 'The ancient mathematics of tying a million tiny knots to resist rich organic dyes.',
    intro: 'Bandhani is a highly skilled, ancient tie-dye textile tradition practiced in the arid lands of Gujarat and Rajasthan. It is characterized by bright, celebratory colors and intricate geometric patterns composed of millions of tiny, elevated resist-dots.',
    history: 'Dating back to the Indus Valley Civilization (evidenced by paintings in the Ajanta Caves), Bandhani gets its name from the Sanskrit word "Bandh" meaning to tie. It is deeply embedded in regional customs; specific color patterns are worn for weddings, child-birth, or seasonal harvests. The craft requires incredible collaboration, where women tie the tiny knots and men dip them in deep dye vats.',
    keyElements: [
      {
        title: 'Bandhej Knotting',
        description: 'Artisans use a small pointed metal ring or long fingernail to pluck a tiny pinch of fabric, wrapping it tightly with thread. This knot resists the dye, leaving a white ring when untied.'
      },
      {
        title: 'Natural Indigo & Madder',
        description: 'Traditional Bandhani uses natural plant extracts to produce rich reds (representing marriage), deep blues (indigo), and vibrant yellows (from turmeric).'
      },
      {
        title: 'Gaji Silk & Georgette',
        description: 'Sarees are often made on heavy Gaji silk, which holds the tight, textured crinkle of the tie-dye nodes even after the fabric is unfurled.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Kutch Artisans Guild',
        location: 'Bhuj, Gujarat',
        description: 'The desert heartland of double-dyeing and micro-Bandhani, home to award-winning Khatri family workshops.'
      },
      {
        name: 'Jamnagar Dyeing Cluster',
        location: 'Jamnagar, Gujarat',
        description: 'Famous for the unique mineral qualities of its water, which gives Bandhani dyes an exceptionally bright, lasting saturation.'
      }
    ],
    practicalTips: [
      'Visit Bhujodi and Dhamadka villages in Kutch to see tie-dye, block-printing, and hand-weaving coexisting in serene desert compounds.',
      'When buying genuine Bandhani, look for the crinkled texture and tiny thread-remnants inside the knots—if the fabric is perfectly flat, it is a digital screen print.',
      'Store Bandhani folded tightly to maintain its signature puckered texture, and avoid steam-ironing it flat.'
    ],
    image: 'https://images.unsplash.com/photo-1595658658481-d53d3f999874?q=80&w=1200',
    relatedIds: ['blue-pottery', 'rajput-hill-forts', 'chikankari']
  },
  {
    id: 'chikankari',
    category: 'textiles',
    categoryLabel: 'Textile Traditions',
    title: 'Lucknow Chikankari',
    origin: 'Lucknow, Uttar Pradesh',
    recommendedStates: ['uttar-pradesh'],
    tagline: 'The shadow-work of delicate white-on-white cotton embroidery.',
    intro: 'Chikankari is an incredibly delicate, aristocratic hand-embroidery style from Lucknow, Uttar Pradesh. Known as "shadow-work," it consists of intricate white thread stitched onto sheer, breathable cotton, muslin, or georgette fabrics, creating a cooling, gossamer texture.',
    history: 'Legend attributes the introduction of Chikankari to Noor Jahan, the artistic queen of Mughal Emperor Jahangir, in the 17th century. Inspired by Persian architectural marble screens (Jalis), she designed delicate vine patterns stitched onto cool muslin. The Nawabs of Lucknow later patronized the art, turning it into the ultimate attire for hot North Indian summers, synonymous with royal grace (Tehzeeb).',
    keyElements: [
      {
        title: 'Tepchi & Bakhiya Stitches',
        description: 'Chikankari has 36 distinct stitches. Bakhiya is the "shadow stitch" done on the reverse of sheer fabric so that a soft, opaque shadow of the pattern shows through on the front.'
      },
      {
        title: 'Jali Stitching',
        description: 'Artisans pull apart thread fibers of the base cloth using a needle, wrapping them to create tiny, delicate decorative nets without cutting the fabric.'
      },
      {
        title: 'Wooden Block Blueprints',
        description: 'Before stitching, patterns are stamped onto the fabric using hand-carved wooden blocks with washable blue indigo ink, which acts as a guide for the embroiderers.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Chowk Heritage Bazaar',
        location: 'Lucknow, Uttar Pradesh',
        description: 'The bustling historic market lined with multi-generational shops displaying finest hand-embroidered Kurtas, Sarees, and linens.'
      },
      {
        name: 'SEWA Lucknow (Self Employed Women\'s Association)',
        location: 'Lucknow, Uttar Pradesh',
        description: 'An exemplary cooperative of over 10,000 rural women, securing fair wages and certifying authentic Chikankari.'
      }
    ],
    practicalTips: [
      'Spend a morning visiting SEWA Lucknow\'s center to see groups of women sit in courtyards stitching fine muslins while sharing folk songs.',
      'Check the reverse side of the embroidery when buying: hand-embroidered Chikan will show small human irregularities and loose knots, whereas machine embroidery is perfectly uniform and hard on the skin.',
      'Savor Lucknow\'s famous slow-cooked melt-in-mouth Galouti Kebabs in the Chowk area after your textile hunt.'
    ],
    image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1200',
    relatedIds: ['kathak', 'banarasi-silk', 'blue-pottery']
  },

  // 3. TEMPLE ARCHITECTURE STYLES
  {
    id: 'dravidian-architecture',
    category: 'architecture',
    categoryLabel: 'Temple Architecture Styles',
    title: 'Dravidian Architecture',
    origin: 'Southern India',
    recommendedStates: ['tamil-nadu', 'karnataka', 'andhra-pradesh'],
    tagline: 'Towering pyramidal gateways and monumental stone-carved pillared corridors.',
    intro: 'Dravidian architecture is the signature temple building style of Southern India. It is defined by massive, pyramid-shaped stone towers (Vimanas and Gopurams), expansive sacred water tanks, and colossal stone-carved corridors displaying thousands of divine and celestial figures.',
    history: 'Nurtured by ancient dynasties—the Pallavas, Cholas, Pandyas, Vijayanagara, and Nayakas—Dravidian architecture evolved from rock-cut cave shrines in Mahabalipuram to the soaring stone complexes of Thanjavur and Madurai. These temples served as defensive castles, educational academies, and cultural epicenters, built fully from heavy granite blocks assembled without mortar.',
    keyElements: [
      {
        title: 'Vimana & Gopuram',
        description: 'The Vimana is the pyramid tower over the inner sanctum, while the Gopuram is the towering, brightly colored monumental gate tower decorated with mythological figures that welcomes pilgrims.'
      },
      {
        title: 'Mandapas & Pillared Halls',
        description: 'Expansive stone halls supported by hundreds of pillars, each hand-carved out of single granite blocks representing mythical beasts (Yalis), horse warriors, and dancing nymphs.'
      },
      {
        title: 'Prakaras',
        description: 'Concentric, high-walled stone enclosures surrounding the main shrine, acting as sacred buffers and containing sub-temples, storage granaries, and holy water pools.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Brihadisvara Temple (The Big Temple)',
        location: 'Thanjavur, Tamil Nadu',
        description: 'Built in 1010 CE by Emperor Raja Raja Chola, featuring a 66-meter-tall granite Vimana whose shadow never falls to the ground at noon.'
      },
      {
        name: 'Meenakshi Amman Temple',
        location: 'Madurai, Tamil Nadu',
        description: 'The zenith of Nayaka Dravidian style, boasting 14 towering Gopurams covered in over 33,000 brightly painted stucco sculptures.'
      }
    ],
    practicalTips: [
      'Most active Dravidian temples close their doors between 12:30 PM and 4:00 PM; plan your visits for early morning or late evening when the stone floors are cool and oil lamps are lit.',
      'Rent a local government-certified guide at Thanjavur or Hampi to point out the incredible acoustics, stone-interlocking patterns, and historic stone inscriptions.',
      'Respect local customs: women must wear modest ethnic attire (sarees or salwar suits) and men may be asked to remove shirts before entering the inner sanctum.'
    ],
    image: 'https://images.unsplash.com/photo-1601342654316-dbcb6c3c5efd?q=80&w=1200',
    relatedIds: ['vesara-architecture', 'nagara-architecture', 'carnatic']
  },
  {
    id: 'nagara-architecture',
    category: 'architecture',
    categoryLabel: 'Temple Architecture Styles',
    title: 'Nagara Architecture',
    origin: 'Northern India',
    recommendedStates: ['madhya-pradesh', 'odisha', 'uttar-pradesh', 'rajasthan'],
    tagline: 'Curvilinear mountain-like stone spires symbolizing the sacred Mount Meru.',
    intro: 'Nagara architecture is the classical temple building style of Northern and Eastern India. It is characterized by soaring, curvilinear stone spires (Shikharas) that mimic the jagged peaks of the Himalayas, rising majestically from a raised stone platform.',
    history: 'Formulated during the Golden Age of the Gupta Empire (4th-6th centuries CE), Nagara style matured over medieval centuries under the Chandela kings in Khajuraho, the Solankis in Gujarat, and the Ganga dynasty in Odisha. These temples symbolize Mount Meru, the cosmic mountain home of gods, built by stacking heavy sandstone blocks with mortise-and-tenon joints.',
    keyElements: [
      {
        title: 'Curvilinear Shikhara',
        description: 'A curvilinear, beehive-shaped stone spire that arches gently inward as it ascends, topped by a large fluted stone disc called an Amalaka and a golden pitcher (Kalasha).'
      },
      {
        title: 'Jagati Platform',
        description: 'Unlike Southern temples which sit at ground level, Nagara temples are elevated on a massive, highly carved stone platform that requires climbing a majestic flight of steps.'
      },
      {
        title: 'Amphi-Theatre Layout',
        description: 'The temple layout mirrors a cosmic mandala: pilgrims pass through interconnected halls (Ardhamandapa, Mandapa, and Mahamandapa) with increasing height, leading to the dark, intimate inner sanctum (Garbhagriha).'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Khajuraho Group of Temples',
        location: 'Madhya Pradesh',
        description: 'A UNESCO World Heritage site displaying the ultimate refinement of Nagara style, with dense, highly expressive stone sculptures representing all aspects of medieval life and philosophy.'
      },
      {
        name: 'Lingaraj & Mukteshwar Temples',
        location: 'Bhubaneswar, Odisha',
        description: 'Superb examples of the Kalinga variant of Nagara, featuring heavy ribbed spires and exquisite horizontal stone bands.'
      }
    ],
    practicalTips: [
      'Visit Khajuraho during the annual Dance Festival (held in February) to watch classical dancers perform on open-air stages with Nagara temples lit up behind them.',
      'Bring a good pair of binoculars to study the micro-carvings on the high horizontal friezes—they depict animals, royal armies, musicians, and celestial lovers in astounding detail.',
      'Wear sunglasses and sunscreen as the elevated stone platforms catch intense sunlight; early morning is the perfect time for photography when the sandstone glows orange.'
    ],
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200',
    relatedIds: ['vesara-architecture', 'dravidian-architecture', 'hindustani']
  },
  {
    id: 'vesara-architecture',
    category: 'architecture',
    categoryLabel: 'Temple Architecture Styles',
    title: 'Vesara Architecture',
    origin: 'Deccan India (Karnataka)',
    recommendedStates: ['karnataka'],
    tagline: 'The architectural hybrid uniting Southern gopurams and Northern spires.',
    intro: 'Vesara is an exquisite, hybrid style of temple architecture that developed in the Deccan plateau (primarily Karnataka). It represents a brilliant synthesis, merging the horizontal stepped tiers of the Dravidian style with the vertical, curvilinear spires of the Nagara style.',
    history: 'Vesara was patronized from the 6th to 14th centuries CE by the Chalukya, Rashtrakuta, and Hoysala dynasties. Seeking to create a unique regional identity, court architects experimented in places like Badami, Aihole, and Pattadakal. This culminated in the Hoysala temples of Belur and Halebidu, which are constructed from soapstone—a soft rock that allowed sculptors to achieve jewelry-like precision in stone.',
    keyElements: [
      {
        title: 'Soapstone Carvings',
        description: 'The use of chloritic schist (soapstone), which is soft when quarried but hardens on exposure. This enabled artists to carve incredibly deep, three-dimensional filigree screens, hanging bracket figures (Madanikas), and layered horizontal stone friezes.'
      },
      {
        title: 'Stellar Temple Layout',
        description: 'Hoysala temples are built on a star-shaped star-plan (Stellated layout). This maximizes the outer wall surface area, providing endless stone canvasses for continuous panels of epics.'
      },
      {
        title: 'Low Stepped Shikhara',
        description: 'The temple towers are a hybrid: lower and more compact than Northern Shikharas, but featuring stepped tiers decorated with individual ornamental niches characteristic of Southern Vimanas.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Chennakesava Temple',
        location: 'Belur, Karnataka',
        description: 'Commissioned in 1117 CE to celebrate a military victory, this temple displays the absolute peak of soapstone carving, with hanging stone dancers that are hollow on the inside.'
      },
      {
        name: 'Pattadakal Temple Complex',
        location: 'Bagalkot, Karnataka',
        description: 'A UNESCO World Heritage site where 8th-century Chalukyan architects built Dravidian and Nagara temples side-by-side to test and fuse the styles.'
      }
    ],
    practicalTips: [
      'Hire a guide carrying a flashlight at Belur and Halebidu—they will shine the light behind the bracket carvings to prove how the soapstone is carved entirely in the round, separating the figures from the back wall.',
      'The Pattadakal complex is located close to the spectacular red-sandstone cliff temples of Badami; plan a combined 2-day heritage road trip.',
      'Unlike active pilgrim shrines, Belur and Halebidu are primarily protected archaeological sites, which makes the exploration relaxed and highly suitable for art historians.'
    ],
    image: 'https://images.unsplash.com/photo-1600100397608-f010e47da03f?q=80&w=1200',
    relatedIds: ['dravidian-architecture', 'nagara-architecture', 'yakshagana']
  },

  // 4. CLASSICAL MUSIC
  {
    id: 'hindustani-music',
    category: 'music',
    categoryLabel: 'Classical Music Traditions',
    title: 'Hindustani Classical Music',
    origin: 'Northern India',
    recommendedStates: ['uttar-pradesh', 'maharashtra', 'delhi-ut', 'rajasthan'],
    tagline: 'The soulful, meditative improvisation of ragas evolving with the hours of the day.',
    intro: 'Hindustani music is the classical music tradition of Northern India. It is a highly meditative, micro-tonal art form that relies on vocal or instrumental improvisation of Ragas (melodic frameworks) and Talas (rhythmic cycles) that are historically linked to specific hours of the day and seasons.',
    history: 'Originating in ancient Vedic chant traditions, Hindustani music bifurcated from the Southern Carnatic system in the 12th century due to significant interactions with Persian and Central Asian music brought by Islamic court rulers. It was nurtured in royal Mughal courts (such as the court of Emperor Akbar, where legendary singer Tansen performed), giving rise to different "Gharanas" (hereditary musical lineages). It features instruments like the Sitar, Sarod, Tabla, and Bansuri (bamboo flute).',
    keyElements: [
      {
        title: 'The Raga & Time Theory',
        description: 'A Raga is a melodic structure of 5 to 7 notes with specific microtonal accents (Swaras). Hindustani music follows a strict "Time Theory" where specific ragas are played only during dawn, midday, twilight, or midnight to match human circadian rhythms.'
      },
      {
        title: 'Khayal Improvisation',
        description: 'The dominant vocal style, literally meaning "imagination." Singers begin with a slow, meditative invocation (Alaap) that gradually increases in tempo and complexity, leading to fast, acrobatic vocal runs (Taans).'
      },
      {
        title: 'Tabla Synchronization',
        description: 'The double-hand percussion instrument that provides the rhythmic pulse (Tala). The hand-drummer and main soloist engage in playful, lightning-fast syncopations that resolve perfectly on the first beat of the cycle (Sam).'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Gwalior & Kirana Gharana Academies',
        location: 'Madhya Pradesh & Maharashtra',
        description: 'The historical cities and schools that preserve and teach the oldest classical vocal techniques under the Guru-Shishya parampara.'
      },
      {
        name: 'Saptak Festival of Music',
        location: 'Ahmedabad, Gujarat',
        description: 'A massive, 13-day annual festival in January that serves as the premier stage for Hindustani classical masters.'
      }
    ],
    practicalTips: [
      'Attend a "Baithak" (an intimate house-concert) where the audience sits on carpets close to the performers—it offers an unparalleled acoustic and spiritual experience.',
      'Familiarize yourself with the concept of the Alaap (the slow, percussion-free opening); this is when the artist slowly builds the soul and atmosphere of the Raga.',
      'Turn off your phone and refrain from clapping mid-performance; instead, express appreciation using traditional hand gestures and vocal nods (like "Wah" or "Subhanallah").'
    ],
    image: 'https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200',
    relatedIds: ['carnatic-music', 'kathak', 'banarasi-silk']
  },
  {
    id: 'carnatic-music',
    category: 'music',
    categoryLabel: 'Classical Music Traditions',
    title: 'Carnatic Classical Music',
    origin: 'Southern India',
    recommendedStates: ['tamil-nadu', 'karnataka', 'andhra-pradesh', 'kerala'],
    tagline: 'Intricate mathematical rhythm and deeply structured vocal compositions.',
    intro: 'Carnatic music is the classical music tradition of Southern India. Characterized by its highly structured, mathematically complex rhythms and deep vocal focus, it is a spiritual practice that revolves around singing praises of deities using complex microtonal ornamentations (Gamakas).',
    history: 'Unlike Hindustani music, Carnatic music remained largely unaffected by external Islamic court influences, retaining a continuous evolution from ancient Sanskrit treatises. It was codified in the 16th century by Purandara Dasa (known as the Father of Carnatic Music). Its golden age occurred in the late 18th century in Thanjavur through the "Trinity of Carnatic Music"—Tyagaraja, Muthuswami Dikshitar, and Syama Sastri—who composed thousands of devotional songs (Kritis) that remain the core of the repertoire.',
    keyElements: [
      {
        title: 'Kriti Composition',
        description: 'The core of a Carnatic performance—a highly structured devotional song consisting of three parts: Pallavi (the chorus), Anupallavi (the secondary theme), and Charanam (the verses).'
      },
      {
        title: 'Gamakas',
        description: 'Complex, oscillating microtonal slides and shakes applied to notes. In Carnatic music, a note is almost never held flat; it is constantly shaded with vocal ornamentations to evoke deep emotional currents (Rasa).'
      },
      {
        title: 'Svara Kalpana & Tala Laya',
        description: 'Improvised sections where the singer sings Indian solfege notes (Sa-Ri-Ga-Ma) in complex mathematical divisions of the rhythm (Tala), keeping track using silent hand taps (Kriyas).'
      }
    ],
    centersOfExcellence: [
      {
        name: 'The Music Academy',
        location: 'Chennai, Tamil Nadu',
        description: 'The prestigious institution that hosts the world-famous Chennai Music Season every December/January, featuring over 1,500 concerts.'
      },
      {
        name: 'Thiruvaiyaru Tyagaraja Aradhana Stage',
        location: 'Thanjavur, Tamil Nadu',
        description: 'The riverside shrine where thousands of musicians gather in January to sing the Pancharatna Kritis in perfect unison in honor of Saint Tyagaraja.'
      }
    ],
    practicalTips: [
      'Travel to Chennai during the "Madras Music Season" (mid-December to mid-January) to experience the largest classical music festival in the world—and savor delicious South Indian tiffin in the temporary festival canteens (Sabha canteens).',
      'Watch the audience during a concert: you will see them tap their laps with their palms and fingers to keep track of the Tala (rhythm)—try to follow along!',
      'Carnatic concerts are heavily vocal-centric, even instrumental performances (on Veena, Violin, or Flute) mimic vocal compositions.'
    ],
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200',
    relatedIds: ['hindustani-music', 'bharatanatyam', 'dravidian-architecture']
  },

  // 5. PUPPETRY & FOLK THEATRE
  {
    id: 'rajasthani-puppetry',
    category: 'theatre',
    categoryLabel: 'Puppetry & Folk Theatre',
    title: 'Rajasthani Kathputli Puppetry',
    origin: 'Rajasthan',
    recommendedStates: ['rajasthan'],
    tagline: 'The ancient art of string-operated wooden puppets bringing historic legends to life.',
    intro: 'Kathputli is the traditional string puppetry of Rajasthan. Carved from a single block of wood (Kath) and dressed in vibrant, traditional Rajasthani attire, these puppets are operated by hereditary master-puppeteers using basic, invisible strings to present historic ballads with humor and music.',
    history: 'Practiced for over a thousand years by the Bhat agricultural community, Kathputli was patronized by Rajput kings like Vikramaditya. Puppeteers traveled through the desert presenting historical stories, primarily the legend of Amar Singh Rathore, a 17th-century royal hero of Marwar. The performance is accompanied by a woman playing the Dholak drum and blowing a whistle (Boli) to create a lively, theatrical atmosphere.',
    keyElements: [
      {
        title: 'Wood-Carved Faces',
        description: 'Puppets have oversized, highly stylized hand-painted faces with large expressive eyes and traditional Rajput mustaches for male puppets or brass nose-rings for female puppets.'
      },
      {
        title: 'Invisible Stringing',
        description: 'Unlike complex Western puppets, Kathputlis are suspended by a single continuous loop of black thread wrapped around the puppeteer\'s fingers, allowing incredibly fast, jerking, and dancing movements.'
      },
      {
        title: 'The Boli Whistle',
        description: 'The master puppeteer blows a tiny bamboo-and-leaf reed whistle to create high-pitched, squeaking vocal lines. The accompanying drummer translates these sounds into local Rajasthani dialects for the audience.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Bharatiya Lok Kala Mandal',
        location: 'Udaipur, Rajasthan',
        description: 'An exemplary museum and research institute dedicated to conserving traditional Rajasthani folk arts, featuring daily puppetry shows.'
      },
      {
        name: 'Kathputli Colony',
        location: 'Jaipur & Delhi',
        description: 'Historic residential settlements where families of puppeteers, stilt-walkers, and musicians continue to carve and practice their hereditary craft.'
      }
    ],
    practicalTips: [
      'Take a private 2-hour puppetry workshop in Udaipur or Jaipur where you can learn to string-dance a basic puppet and paint its wooden face.',
      'Purchase genuine wooden Kathputli dolls directly from artisan families as souvenirs—they make colorful, authentic additions to home decors.',
      'Rajasthani puppetry shows are interactive and highly family-friendly; encourage the children to sit at the front to interact with the puppets.'
    ],
    image: 'https://images.unsplash.com/photo-1599819811279-d5ad9cccf838?q=80&w=1200',
    relatedIds: ['blue-pottery', 'rajput-hill-forts', 'bandhani']
  },
  {
    id: 'yakshagana',
    category: 'theatre',
    categoryLabel: 'Puppetry & Folk Theatre',
    title: 'Yakshagana',
    origin: 'Karnataka',
    recommendedStates: ['karnataka'],
    tagline: 'The dramatic, thunderous folk-theatre of coastal Karnataka.',
    intro: 'Yakshagana is a spectacular, high-energy folk-theater tradition from coastal Karnataka. It is a stunning combination of music, dance, improvised dialogue, and heavy, battle-ready costumes that brings mythological battles from the Mahabharata and Ramayana to life.',
    history: 'Yakshagana emerged in the 15th century, influenced by the Vaishnavite devotional movement. Historically performed during winter in paddy fields after the harvest, these shows ran from sunset to sunrise, lit by oil torches. The word Yakshagana means the "song of the celestial spirits" (Yakshas), and the performance represents a communal ritual to protect the crops and village.',
    keyElements: [
      {
        title: 'Kireeta Headgear & Paint',
        description: 'Dancers wear enormous, gold-gilded wooden headgears (Kireeta) shaped like lotus leaves or hoods. Their faces are hand-painted with intricate black, yellow, and red geometric lines to denote divine heroics or demonic greed.'
      },
      {
        title: 'Bhagavatha (The Director-Singer)',
        description: 'The master musician who sits on stage with brass cymbals and a metal gong, singing the narrative songs and directing the actors\' entries, exits, and dramatic dialogues.'
      },
      {
        title: 'High-Energy Leaps',
        description: 'The dance style is athletic and aggressive, featuring rapid, spinning jumps on the knees and heavy foot-stomping that mimics the thunder of war chariots.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Yakshagana Kendra',
        location: 'Udupi, Karnataka',
        description: 'Founded under the guidance of legendary writer Shivaram Karanth, this center revitalized the art form, training modern performers and preserving ancient scripts.'
      },
      {
        name: 'Dharmasthala Yakshagana Mela',
        location: 'Dakshina Kannada, Karnataka',
        description: 'One of the oldest active touring theater troupes, performing free, temple-sponsored shows to thousands of villagers every night during the dry season.'
      }
    ],
    practicalTips: [
      'Travel to coastal towns like Udupi or Mangalore between November and April to catch a free, night-long Yakshagana performance held in temple courtyards or beach sands.',
      'Arrive early to watch the actors apply their elaborate makeup in the open-air greenrooms (Chowki)—it is a fascinating, meditative process.',
      'Udupi is also the birthplace of delicious South Indian vegetarian dishes; enjoy a hot plate of Masala Dosa and filter coffee before heading to the show.'
    ],
    image: 'https://images.unsplash.com/photo-1608958416733-4f9e61284a0d?q=80&w=1200', // majestic heavy theatre look
    relatedIds: ['vesara-architecture', 'kathakali', 'carnatic']
  },

  // 6. HANDICRAFTS
  {
    id: 'blue-pottery',
    category: 'handicrafts',
    categoryLabel: 'Handicrafts & Art',
    title: 'Blue Pottery of Jaipur',
    origin: 'Jaipur, Rajasthan',
    recommendedStates: ['rajasthan'],
    tagline: 'The unique, clay-free pottery of striking cobalt blue and floral elegance.',
    intro: 'Jaipur Blue Pottery is a highly distinctive handicraft from Rajasthan. Unlike traditional pottery, it is made entirely without using clay. Instead, it utilizes a ground-quartz paste that is hand-molded, glazed, and decorated with striking cobalt-blue and turquoise floral motifs.',
    history: 'Of Turko-Persian origin, this technique was brought to Jaipur in the 19th century by Maharaja Sawai Ram Singh II, who sent local artisans to Delhi to learn the craft from Persian masters. The name comes from the eye-catching cobalt blue dye used to paint the pieces. The craft experienced a near-death in the 20th century but was saved by the veteran artist Kripal Singh Shekhawat, who developed new glaze formulations.',
    keyElements: [
      {
        title: 'Clay-Free Dough',
        description: 'The pottery dough is made by mixing ground quartz, glass powder, borax, gum, and water. This creates an extremely lightweight, translucent, and fragile material that does not shrink during firing.'
      },
      {
        title: 'Cobalt & Copper Glaze',
        description: 'The signature colors are derived from metal oxides: cobalt oxide creates the deep royal blue, while copper oxide yields the rich brilliant turquoise. The pieces are fired in low-temperature wood kilns.'
      },
      {
        title: 'Persian Floral Layouts',
        description: 'Classic designs feature stylized Islamic geometric borders, central arabesque floral medallions, and occasionally figures of birds and desert deer.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Neerja International Blue Pottery',
        location: 'Jaipur, Rajasthan',
        description: 'A prominent design house and cooperative founded to sustain hereditary potter families and innovate modern home utility designs.'
      },
      {
        name: 'Sanganer Potter Village',
        location: 'Jaipur, Rajasthan',
        description: 'The peaceful suburb of Jaipur where generations of potters maintain open-air clay-free molding and hand-painting workshops in their homes.'
      }
    ],
    practicalTips: [
      'Take a half-day pottery painting workshop in Sanganer village. You can paint a raw, unglazed tile with cobalt oxide and watch it turn deep blue after firing.',
      'Genuine Blue Pottery is semi-translucent when held against a light source, has a slightly rough, granular surface, and does not chip easily—avoid smooth, heavy ceramic imitations.',
      'Pack these delicate items securely in your carry-on luggage wrapped in bubble wrap; quartz pottery is glass-like and vulnerable to rough checked bags.'
    ],
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?q=80&w=1200',
    relatedIds: ['rajasthani-puppetry', 'rajput-hill-forts', 'bandhani']
  },
  {
    id: 'madhubani-painting',
    category: 'handicrafts',
    categoryLabel: 'Handicrafts & Art',
    title: 'Madhubani Painting',
    origin: 'Mithila, Bihar',
    recommendedStates: ['bihar'],
    tagline: 'The vibrant, geometric folk-art of domestic walls painted with twigs and fingers.',
    intro: 'Madhubani painting, also known as Mithila art, is a vibrant folk-art form from the Mithila region of Bihar. Characterized by eye-catching geometric patterns, double-line borders, and natural plant dyes, it is traditionally painted on mud walls using twigs, fingers, matchsticks, and fountain pens.',
    history: 'Madhubani art is ancient, legend linking it to the Ramayana, when King Janaka commissioned artists to paint his daughter Sita\'s wedding. For centuries, Mithila women painted these on the freshly plastered mud walls of their kitchens and courtyards to celebrate births, marriages, and religious festivals. It was brought to paper in 1967 after a severe drought, when the government encouraged women to sell their paintings to secure a non-agrarian income.',
    keyElements: [
      {
        title: 'Double-Line Contours',
        description: 'Every figure in a Madhubani painting is drawn with a bold, double-line outline. The narrow space between these lines is filled with dense, repetitive parallel lines (Kachni style) or bright solid colors (Bharni style).'
      },
      {
        title: 'Natural Botanical Pigments',
        description: 'Colors are extracted from native plants: black is made from soot mixed with cow dung, yellow from turmeric and pollen, red from sandalwood and Kusum flowers, and blue from natural indigo.'
      },
      {
        title: 'Zero-Space Vacuum',
        description: 'Madhubani artists leave absolutely no blank space on the canvas. Any empty gaps between human figures and deities are filled with stylized depictions of flowers, birds, fish, sun, and moon.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Madhubani District Villages (Jitwarpur & Ranti)',
        location: 'Madhya Bihar',
        description: 'The peaceful rural birthplace where legendary women artists (including several National Award winners) continue to paint and teach in their courtyards.'
      },
      {
        name: 'Mithila Art Institute',
        location: 'Madhubani, Bihar',
        description: 'A non-profit academy dedicated to supporting young Mithila artists and preserving the traditional, spiritual storytelling of the art.'
      }
    ],
    practicalTips: [
      'Travel to the villages of Jitwarpur or Ranti in Bihar to see mud-brick homes covered in beautiful floor-to-ceiling Madhubani paintings first-hand.',
      'Look for the different styles: Kayastha style (intricate monochrome line work) versus Brahmin style (highly colorful, focus on sacred mythological scenes).',
      'Authenticated paintings are made on handmade paper coated with a thin layer of cow dung paste, which preserves the colors and gives an organic, rustic aroma.'
    ],
    image: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1200',
    relatedIds: ['odissi', 'hindustani', 'pashmina']
  },
  {
    id: 'warli-art',
    category: 'handicrafts',
    categoryLabel: 'Handicrafts & Art',
    title: 'Warli Art',
    origin: 'Maharashtra',
    recommendedStates: ['maharashtra'],
    tagline: 'The elegant tribal stick-figures celebrating harvest, community, and the spiral dance of life.',
    intro: 'Warli art is a minimalist, ancient tribal painting style practiced by the Warli indigenous community in the mountainous regions of Maharashtra. Using a simple, elegant vocabulary of basic geometric shapes—triangles, circles, and squares—it paints the sacred connection between humanity and nature.',
    history: 'Dating back to 2,500 BCE (closely linked to ancient rock-cut cave art), Warli paintings were traditionally made by married women (Suhasinis) on the red ochre mud walls of tribal huts during weddings and harvests. The art represents a non-mythological, humble documentation of daily village life, focusing on farming, hunting, animal herds, and celebratory community dancing.',
    keyElements: [
      {
        title: 'Geometric Stick Figures',
        description: 'Humans and animals are drawn using two triangles joined at the tip, representing the torso and hips. The circle represents the sun or moon, while the square denotes a sacred domestic enclosure (Chauk).'
      },
      {
        title: 'Tarpa spiral Dance',
        description: 'The defining visual of Warli art: a massive, concentric spiral of dancers holding hands around a musician playing the Tarpa wind instrument. It represents the circular nature of time and life with no beginning or end.'
      },
      {
        title: 'Rice Paste Pigment',
        description: 'The paintings are rendered using a single color—white. This pigment is made from rice flour paste mixed with water and organic gum, applied using a chewed bamboo stick as a brush on a dark clay wall background.'
      }
    ],
    centersOfExcellence: [
      {
        name: 'Warli Tribal Village Workshops',
        location: 'Palghar & Jawhar, Maharashtra',
        description: 'The mountainous forest highlands where tribal cooperatives host workshops to sustain the ancient community lifestyle and art.'
      },
      {
        name: 'Sanjay Gandhi National Park Tribal Arts Center',
        location: 'Mumbai, Maharashtra',
        description: 'An urban forest sanctuary displaying authentic Warli artwork and hosting weekly workshops led by visiting tribal artists.'
      }
    ],
    practicalTips: [
      'Combine a trek in the beautiful Western Ghats near Palghar with a visit to a Warli tribal home to paint alongside the family.',
      'Genuine Warli art is monochromatic (white on red-clay or dark-brown backgrounds); avoid heavily multi-colored imitations which do not reflect authentic tribal customs.',
      'Purchase home linens, wall hangings, and terracotta vases painted with Warli spiral dancers—they are elegant, minimalist, and directly support indigenous forest dwellers.'
    ],
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=1200',
    relatedIds: ['blue-pottery', 'madhubani-painting', 'rajasthani-puppetry']
  }
];

export function getCultureExperience(id: string): CultureExperience | undefined {
  return CULTURE_EXPERIENCES.find(c => c.id === id);
}

export function getRelatedCultureExperiences(id: string, limit = 3): CultureExperience[] {
  const current = getCultureExperience(id);
  if (!current) return CULTURE_EXPERIENCES.slice(0, limit);
  return CULTURE_EXPERIENCES
    .filter(c => c.id !== id && (c.category === current.category || current.relatedIds.includes(c.id)))
    .slice(0, limit);
}
