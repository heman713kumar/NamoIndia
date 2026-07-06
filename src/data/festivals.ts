import { Festival } from '../types';

export const FESTIVALS: Festival[] = [
  {
    id: 'diwali',
    name: 'Diwali (Deepavali)',
    season: 'Autumn',
    region: 'Pan-India',
    significance: 'The Festival of Lights, celebrating the victory of light over darkness, knowledge over ignorance, and good over evil. Historically marks Lord Rama\'s return to his kingdom of Ayodhya after 14 years of exile and his victory over the demon king Ravana.',
    howCelebrated: 'Homes are meticulously cleaned, illuminated with thousands of oil lamps (diyas) and candles, and decorated with colorful floor designs (rangoli). Families gather to pray to Goddess Lakshmi (deity of wealth), share rich sweets, burst fireworks, and wear fine traditional attire.',
    bestPlaces: ['uttar-pradesh', 'delhi-ut', 'rajasthan'], // State IDs
    dates: 'October / November (Amavasya of Kartik month)',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    ritualSteps: [
      { title: 'Dhanteras', description: 'The first day, dedicated to purchasing gold, silver, or new kitchen utensils to welcome prosperity and good fortune.' },
      { title: 'Chhoti Diwali', description: 'Also known as Naraka Chaturdashi, celebrating the destruction of the demon Narakasura by Lord Krishna. People take early aromatic oil baths.' },
      { title: 'Lakshmi Puja', description: 'The main festival day. Families dress in new clothes and gather for prayers to Goddess Lakshmi and Lord Ganesha, followed by lighting diyas and fireworks.' },
      { title: 'Govardhan Puja', description: 'Celebrating the lifting of the Govardhan Mountain by Lord Krishna to save villagers from Indra\'s torrential rains. Mountains of food are offered to deities.' },
      { title: 'Bhai Dooj', description: 'Celebrating the sacred bond between brothers and sisters. Sisters apply a sacred tilak on their brothers\' foreheads and pray for their long lives.' }
    ],
    traditionalFoods: ['Kaju Katli', 'Gulab Jamun', 'Laddoo (Motichoor)', 'Chivda / Namkeen', 'Gujiya / Karanji'],
    tipsForTravelers: [
      'Visit Ayodhya in Uttar Pradesh to witness the record-breaking "Deepotsav" where over 1.5 million clay lamps are lit on the Saryu River ghats.',
      'In Jaipur, the markets are spectacularly illuminated and look like glowing streets; take a late-night cycle or rickshaw tour.',
      'Wear fire-resistant traditional clothes and be prepared for high levels of noise and smoke from fireworks in metro areas.'
    ],
    culturalHighlights: [
      { title: 'Ayodhya Deepotsav', description: 'An unparalleled spiritual spectacle where the entire riverfront is decorated with millions of flickering lamps under a fireworks-filled sky.' },
      { title: 'Rangoli Art Contests', description: 'Intricate, vibrant geometric patterns made using colored rice flour, sand, or flower petals at the entrance of almost every home.' }
    ]
  },
  {
    id: 'holi',
    name: 'Holi (Festival of Colors)',
    season: 'Spring',
    region: 'Pan-India (Major in North/West)',
    significance: 'The Festival of Colors, welcoming spring and celebrating divine love between Radha and Krishna. It marks the bonfire triumph of Prahlad over the demoness Holika, representing the victory of devotion over demonic ego.',
    howCelebrated: 'People gather in streets, throwing vibrant colored powder (gulal) and water at each other. There is singing, dancing to dhol beats, and sharing of sweet milk drinks infused with saffron and almonds (thandai) and traditional sweets (gujiyas).',
    bestPlaces: ['uttar-pradesh', 'rajasthan', 'delhi-ut'],
    dates: 'March (Phalguna Full Moon)',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200',
    ritualSteps: [
      { title: 'Holika Dahan', description: 'On the eve of Holi, massive bonfires are lit to symbolize the burning of evil forces, Holika, while saving the young devotee Prahlad.' },
      { title: 'Dhulandi (Rangwali Holi)', description: 'The main day of playing with colors. People of all ages smear colored powders and splash colored water using water-guns (pichkaris).' },
      { title: 'Holi Milan', description: 'In the evening, people bathe, wear clean white traditional clothes, and visit friends and relatives to exchange sweets and dry colors (abir).' }
    ],
    traditionalFoods: ['Gujiya', 'Thandai (saffron-almond milk)', 'Dahi Bhalla', 'Kachori', 'Malpua'],
    tipsForTravelers: [
      'Head to Mathura, Vrindavan, and Barsana in Uttar Pradesh for the legendary "Lathmar Holi" and "Phoolon wali Holi" (played with flowers).',
      'Apply coconut oil or moisturizer to your skin and hair before joining the festivities to make removing the colors much easier.',
      'Wear cheap, white cotton clothes that you are happy to throw away after the event. Use high-quality organic gulal colors to protect your skin.'
    ],
    culturalHighlights: [
      { title: 'Lathmar Holi of Barsana', description: 'A unique tradition where women from Barsana beat men from neighboring Nandgaon with wooden sticks, recreating the playful legends of Radha and Krishna.' },
      { title: 'Vrindavan Phoolon wali Holi', description: 'A brief, beautiful celebration at the Banke Bihari Temple where priests and devotees throw fresh flower petals at each other.' }
    ]
  },
  {
    id: 'durga-puja',
    name: 'Durga Puja',
    season: 'Autumn',
    region: 'East India (Kolkata focus)',
    significance: 'A monumental celebration of the supreme Goddess Durga defeating the buffalo demon Mahishasura, symbolizing the ultimate triumph of feminine energy (Shakti) over evil forces and the homecoming of the Goddess with her children.',
    howCelebrated: 'Vast, creatively designed temporary temples (pandals) are constructed. Handcrafted clay idols of the Goddess are worshipped with chanting and beats of the dhak drum. The city of Kolkata turns into a massive, open-air art gallery, with millions in the streets dressed in new clothes, pandal-hopping and feasting.',
    bestPlaces: ['west-bengal', 'assam', 'tripura'],
    dates: 'September / October (Ashvin Navaratri)',
    image: 'https://images.unsplash.com/photo-1558431382-27e303142255?q=80&w=1200',
    ritualSteps: [
      { title: 'Mahalaya', description: 'The starting day, invoking the Goddess to descend to earth. Devotees listen to the iconic early-morning radio recitation of "Mahishasura Mardini" by Birendra Krishna Bhadra.' },
      { title: 'Maha Saptami', description: 'The first major puja day. A sacred banana trunk (Kala Bou) represents the Goddess\'s nature form and is bathed in the river at dawn.' },
      { title: 'Maha Ashtami', description: 'The peak of devotion. Devotees perform Anjali (offering flowers) and witness the sacred Sandhi Puja, celebrating the moment Durga assumed her ultimate warrior form.' },
      { title: 'Maha Navami', description: 'The ninth day, marked by prayers, elaborate food offerings (bhog), and the mesmerizing Dhunuchi Naach (incense-burner dance).' },
      { title: 'Vijayadashami', description: 'The final day. Married women play with red vermilion powder (Sindoor Khela) before the Goddess is taken in grand processions for water immersion.' }
    ],
    traditionalFoods: ['Khichuri Bhog', 'Labra (mixed vegetables)', 'Luchi & Alur Dom', 'Rosogolla & Sandesh', 'Kosha Mangsho (slow-cooked mutton)'],
    tipsForTravelers: [
      'Visit Kolkata to witness the sheer scale of thousands of thematic pandals. Plan to stay up all night as the streets are alive and lit 24/7.',
      'Book a special Durga Puja heritage or pandal-hopping pass to bypass some of the massive queues.',
      'Drape a traditional white saree with red borders (for women) or a kurta (for men) to immerse yourself in the culture during Ashtami.'
    ],
    culturalHighlights: [
      { title: 'Dhunuchi Naach', description: 'A highly energetic dance performed before the Goddess, holding clay pots filled with burning coconut husks and smoking incense.' },
      { title: 'Sindoor Khela', description: 'A vibrant ritual on Vijayadashami where married women smear each other with red vermilion, wishing for marital bliss and family prosperity.' }
    ]
  },
  {
    id: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    season: 'Monsoon',
    region: 'West/South India (Mumbai focus)',
    significance: 'Celebrating the birth of Lord Ganesha, the elephant-headed deity of wisdom, prosperity, and the remover of obstacles. It represents new beginnings and the temporary return of Ganesha to his earthly devotees.',
    howCelebrated: 'Clay idols of Lord Ganesha are installed in homes and grand public stages. Prayers are offered alongside sweet dumplings called modaks (said to be Ganesha\'s favorite). The festival culminates in massive, musical street processions leading to the ocean or lakes where the idols are immersed.',
    bestPlaces: ['maharashtra', 'goa', 'karnataka'],
    dates: 'August / September (Bhadrapada month)',
    image: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=1200',
    ritualSteps: [
      { title: 'Pranapratishtha', description: 'The installation of the clay idol. Priests chant sacred mantras to invoke the divine life force of Lord Ganesha into the statue.' },
      { title: 'Shodashopachara', description: 'The sixteen-step ritual of worship. Devotees offer prayers, coconut, flowers, durva grass, and 21 modak dumplings to the deity daily.' },
      { title: 'Uttarpuja', description: 'The farewell ritual conducted right before the idol is moved from its pedestal for immersion, thanking the Lord for his brief stay.' },
      { title: 'Visarjan', description: 'The grand immersion procession. Idols are carried to water bodies amidst chants of "Ganpati Bappa Morya, Pudhchya Varshi Lavkar Ya" (O Lord Ganesha, return early next year).' }
    ],
    traditionalFoods: ['Ukadiche Modak (steamed sweet dumplings filled with coconut and jaggery)', 'Puran Poli', 'Karanji', 'Alu Vadi', 'Shrikhand'],
    tipsForTravelers: [
      'Visit the iconic "Lalbaugcha Raja" in Mumbai, the most famous public Ganesha pavilion in India, to see the majestic 20-foot-tall idol.',
      'Visit Girgaon Chowpatty beach in Mumbai on the final 11th day (Anant Chaturdashi) to witness the monumental, high-energy immersion spectacle.',
      'Be prepared for massive crowds, loud dhol-tasha drum performances, and heavy traffic restrictions throughout Mumbai during these 10 days.'
    ],
    culturalHighlights: [
      { title: 'Dhol Tasha Pathaks', description: 'Huge, synchronized street percussion groups comprising hundreds of youth playing giant dhol drums and tasha cymbals with incredible rhythm.' },
      { title: 'Lalbaugcha Raja', description: 'The absolute legendary Ganesha idol of Mumbai, visited by millions of devotees including celebrities, believed to fulfill all wishes.' }
    ]
  },
  {
    id: 'onam',
    name: 'Onam',
    season: 'Monsoon',
    region: 'South India (Kerala)',
    significance: 'The state harvest festival of Kerala, commemorating the mythical golden reign of King Mahabali—a period of absolute peace, equality, and prosperity—and welcoming his benevolent spirit back home annually.',
    howCelebrated: 'People lay out intricate floral floor carpets (Pookalam), perform graceful folk dances (Pulikali tiger dance), participate in thrilling snake boat races (Vallam Kali) on the backwaters, and cook the monumental Onasadya—a vegetarian feast of 26+ dishes served on banana leaves.',
    bestPlaces: ['kerala'],
    dates: 'August / September (Chingam month)',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200',
    ritualSteps: [
      { title: 'Atham', description: 'The first day. People start designing the "Pookalam" (floral carpet) in front of their houses, using a single layer of yellow flower petals.' },
      { title: 'Chithira & Chodhi', description: 'Subsequent days where more layers and multiple varieties of flowers are added, expanding the size and geometric complexity of the Pookalam.' },
      { title: 'Uthradam', description: 'The eve of Onam, considered a day of high preparations. Fresh vegetables and fruits are bought in abundance for the grand feast.' },
      { title: 'Thiruvonam', description: 'The main day. People dress in brand new traditional cream-and-gold wear (Kasavu), conduct prayers, lay out the largest Pookalam, and feast on the magnificent Sadya.' }
    ],
    traditionalFoods: ['Avial (mixed vegetables in coconut paste)', 'Sambar & Rasam', 'Payasam (sweet milk/lentil pudding)', 'Olan', 'Kalan & Erissery', 'Banana Chips'],
    tipsForTravelers: [
      'Visit Aranmula or Alappuzha to watch the spectacular "Vallam Kali" (Snake Boat Races) where long rowboats with 100+ oarsmen race to the rhythm of boat songs.',
      'Head to Thrissur on the fourth day of Onam to witness the "Pulikali" (Tiger Dance) where hundreds of men painted like tigers dance to wild drum beats.',
      'Book a traditional homestay in Kerala to experience an authentic domestic celebration and eat a home-cooked Onasadya.'
    ],
    culturalHighlights: [
      { title: 'Vallam Kali (Snake Boat Races)', description: 'High-octane races of traditional canoe-like boats, each holding over a hundred rowers chanting and singing heritage boat songs (Vanchippattu).' },
      { title: 'Pulikali (Tiger Play)', description: 'A vibrant folk art where artists paint their bodies as tigers and leopards in bright yellow and black, dancing through Thrissur streets to energetic drums.' }
    ]
  },
  {
    id: 'eid-al-fitr',
    name: 'Eid al-Fitr (Eid-ul-Fitr)',
    season: 'Summer',
    region: 'Pan-India',
    significance: 'The holy festival marking the breaking of the fast and conclusion of the month-long dawn-to-sunset fasting of Ramadan, celebrating gratitude, community, and charity.',
    howCelebrated: 'Muslims gather for congregational prayers in grand mosques like Delhi\'s Jama Masjid, perform charity (Zakat al-Fitr), visit friends and relatives, wear fine new clothes, and share rich sweet vermicelli puddings (Sheer Khurma) and aromatic biryanis.',
    bestPlaces: ['delhi-ut', 'uttar-pradesh', 'telangana'],
    dates: 'Variable (Based on Islamic Lunar Calendar)',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200',
    ritualSteps: [
      { title: 'Chand Raat', description: 'The night of the sighting of the crescent moon. Markets come alive with people shopping, women applying intricate mehndi (henna) designs on their hands.' },
      { title: 'Eid Prayers (Salah)', description: 'In the morning, men bathe, wear new kurtas and perfumes, and gather in massive congregational prayer grounds (Eidgahs) or grand mosques.' },
      { title: 'Giving Alms (Zakat al-Fitr)', description: 'Before the prayers, a mandatory charity is given to the poor so that everyone can participate in the celebrations.' },
      { title: 'Eidi & Feast', description: 'Elderly family members distribute cash gifts called "Eidi" to children. The rest of the day is spent hosting guests and feasting on savory and sweet delicacies.' }
    ],
    traditionalFoods: ['Sheer Khurma (sweet vermicelli cooked in milk with dates and dry fruits)', 'Mutton Biryani', 'Kebabs (Shami & Seekh)', 'Phirni', 'Double Ka Meetha'],
    tipsForTravelers: [
      'Head to Old Delhi (Chandni Chowk and Jama Masjid) on the eve of Eid (Chand Raat) to experience the chaotic, glorious food walks and night-long shopping.',
      'Visit Charminar in Hyderabad where the markets are brilliantly lit and the local Haleem and Biryani are world-famous.',
      'Observe the early morning prayers at Jama Masjid from designated viewing corridors; it is a highly serene and visually magnificent sight of thousands praying in perfect unison.'
    ],
    culturalHighlights: [
      { title: 'Chand Raat Shopping', description: 'A highly festive night-long market scene where stalls selling colorful glass bangles, mehndi, and traditional footwear are packed until dawn.' },
      { title: 'Eidi Tradition', description: 'A heartwarming family custom where elders bless youngsters and hand them cash gifts, symbolizing the passing down of joy and fortune.' }
    ]
  },
  {
    id: 'pongal',
    name: 'Pongal (Tamil Harvest Festival)',
    season: 'Winter',
    region: 'South India (Tamil Nadu focus)',
    significance: 'A major four-day harvest festival dedicated to the Sun God (Surya Bhagavan), celebrating nature\'s bounty, agricultural labor, and the sacred cattle that make farming possible.',
    howCelebrated: 'Houses are decorated with mango leaves, and clay pots are boiled over wood fires to cook "Pongal" (rice boiled with fresh milk, jaggery, and ghee) until it overflows, signaling abundance. Traditional kolam floor drawings are laid out.',
    bestPlaces: ['tamil-nadu', 'andhra-pradesh'],
    dates: 'January 14 / 15 annually',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
    ritualSteps: [
      { title: 'Bhogi Pongal', description: 'The first day. People clean their homes and burn old, discarded household items in a bonfire, symbolizing the destruction of the old and ushering in new beginnings.' },
      { title: 'Surya Pongal', description: 'The main day. Devotees cook the sweet "Sakkarai Pongal" in a decorated clay pot. As the milk boils over, everyone shouts "Pongalo Pongal!" to welcome prosperity.' },
      { title: 'Mattu Pongal', description: 'Dedicated to cattle. Bulls and cows are washed, their horns are painted in bright colors, decorated with flower garlands, and fed sugarcane and cooked Pongal.' },
      { title: 'Kaanum Pongal', description: 'The final day. Families pack food, travel to beaches or parks, visit relatives, and sisters pray for their brothers\' well-being by placing rice balls on ginger leaves.' }
    ],
    traditionalFoods: ['Sakkarai Pongal (sweet)', 'Ven Pongal (savory with black pepper)', 'Medhu Vada', 'Sugarcane stalks', 'Elumichai Sadam (lemon rice)'],
    tipsForTravelers: [
      'Travel to Madurai or Pollachi to witness the traditional rural celebrations, where the harvest vibe is incredibly authentic and colorful.',
      'Look for "Jallikattu" (bull-taming event) held in villages around Madurai on Mattu Pongal, but observe from safe designated spectator zones.',
      'Participate in a community cooking event where hundreds of clay pots are set up in a row in front of temples.'
    ],
    culturalHighlights: [
      { title: 'Pongalo Pongal Chant', description: 'The joyous, high-pitched shout raised by the entire family when the boiling milk and rice cascades over the lip of the clay pot.' },
      { title: 'Kolam Art', description: 'Beautiful, symmetrical grid patterns drawn on the threshold of homes using white rice powder, designed to feed ants and small birds.' }
    ]
  },
  {
    id: 'bihu',
    name: 'Bihu (Rongali Bihu)',
    season: 'Spring',
    region: 'Northeast India (Assam)',
    significance: 'The Assamese New Year and spring festival celebrating agricultural sowing, fertility, and the blooming of nature, representing joy and the rejuvenation of life.',
    howCelebrated: 'Young men and women wear golden muga silk threads and perform the energetic, rhythm-pulsating Bihu dance with rapid hand movements and hip swings, backed by the beats of the dhol drum and pepa horn (made of buffalo horn). Rich rice cakes (pitha) are baked.',
    bestPlaces: ['assam'],
    dates: 'April annually (Mid-April)',
    image: 'https://images.unsplash.com/photo-1616428286280-9286663b6a9d?q=80&w=800',
    ritualSteps: [
      { title: 'Goru Bihu', description: 'The first day, dedicated to cattle. Cows are taken to rivers, washed, smeared with turmeric paste, and fed local vegetables like eggplant and gourd.' },
      { title: 'Manuh Bihu', description: 'The second day, which is the main New Year day. People bathe, seek blessings from elders, wear new clothes, and gift traditional "Gamosa" towels to loved ones.' },
      { title: 'Gosai Bihu', description: 'Dedicated to worship. Prayers and congregational singing (Naam Prasang) are held in Namghars (prayer halls) to seek divine protection.' },
      { title: 'Kutum Bihu & Mela Bihu', description: 'Subsequent days where people visit relatives, feast on local delicacies, and gather in massive open grounds (Mela) for Bihu dance competitions.' }
    ],
    traditionalFoods: ['Til Pitha (sweet sesame rolled rice cake)', 'Narikolor Laru (sweet coconut balls)', 'Gila Pitha', 'Chira-Doi with Gur', 'Khar'],
    tipsForTravelers: [
      'Visit Guwahati or Sibsagar to see massive public Bihu festivals and professional dance troupes competing on open-air stages.',
      'Gift or buy a "Gamosa"—a beautiful, hand-woven white cotton towel with red embroidered borders, which is the national symbol of Assamese respect.',
      'Try the local Assamese rice beer (Lao-pani) and participate in a community feast under traditional bamboo canopies.'
    ],
    culturalHighlights: [
      { title: 'Husori Singing', description: 'Groups of elder villagers visiting individual homes to sing devotional songs and shower blessings on the household for the coming year.' },
      { title: 'Pepa and Gogona Instruments', description: 'Breathtaking musical solos played using a pepa (buffalo horn flute) and gogona (bamboo jaw harp), providing a high-pitched rustic melody.' }
    ]
  },
  {
    id: 'pushkar-fair',
    name: 'Pushkar Camel Fair',
    season: 'Autumn',
    region: 'Northwest India (Rajasthan)',
    significance: 'One of the world\'s largest camel, horse, and cattle trading fairs, combined with a colorful Hindu pilgrimage by the sacred holy waters of Pushkar Lake, honoring Lord Brahma, the creator god.',
    howCelebrated: 'Thousands of beautifully decorated camels, horses, and cattle gather in the desert. Farmers and nomads trade, while tourists witness camel beauty pageants, mustache competitions, folk music concerts, ferris wheels, and holy dips in the sacred lake.',
    bestPlaces: ['rajasthan'],
    dates: 'November annually (Kartik Purnima)',
    image: 'https://images.unsplash.com/photo-1477587458883-471a5ed08be4?q=80&w=1200',
    ritualSteps: [
      { title: 'Cattle & Camel Trading', description: 'The first few days are dedicated to frantic trading. Nomads groom, shave, and decorate thousands of camels with colorful pom-poms, bells, and textiles.' },
      { title: 'Cultural Carnivals', description: 'Mid-festival days feature desert sports, tug-of-war contests between locals and tourists, traditional folk dancing, and camel race events.' },
      { title: 'Kartik Purnima Holy Bathing', description: 'The final full moon day is deeply spiritual. Thousands of pilgrims descend upon the Pushkar Lake ghats to take a holy dip and float leaf-lamps on the water.' }
    ],
    traditionalFoods: ['Dal Baati Churma', 'Malpua (Pushkar special)', 'Kachori', 'Rabdi', 'Camel Milk Lassi'],
    tipsForTravelers: [
      'Book hotels or luxury desert tents several months in advance as this small town receives over 200,000 visitors during the fair.',
      'Rise early and hike up the Savitri Temple hill for a stunning sunrise view of the entire desert basin filled with thousands of camps.',
      'Be respectful when taking photos of local nomads and camels; it is polite to ask first, and some may expect a small tip.'
    ],
    culturalHighlights: [
      { title: 'Camel Beauty Pageants', description: 'Camels are meticulously shaved, decorated, and made to parade, dance, and respond to commands to win the highly coveted beauty title.' },
      { title: 'Mustache and Turban Contests', description: 'Fiercely contested pageants showcasing Rajasthani men with giant, beautifully groomed, coiled mustaches and elaborate multi-colored turbans.' }
    ]
  },
  {
    id: 'navratri',
    name: 'Navratri (Garba & Dandiya)',
    season: 'Autumn',
    region: 'West India (Gujarat focus)',
    significance: 'Celebrating nine nights of the divine feminine (Goddess Durga in nine forms), symbolizing cosmic creation and the triumph of good over evil. In Gujarat, it is celebrated as the world\'s longest dance festival.',
    howCelebrated: 'Every evening, millions of people dressed in spectacular, colorful traditional embroidered clothes gather in massive open grounds to perform "Garba" and "Dandiya Raas"—dynamic, rhythmic circular folk dances around a central lamp.',
    bestPlaces: ['gujarat', 'maharashtra', 'rajasthan'],
    dates: 'September / October (Ashvin Bright Fortnight)',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1200',
    ritualSteps: [
      { title: 'Ghatasthapana', description: 'The first day. A sacred clay pot (Garbo) representing the womb of the universe and the Goddess is installed, and wheat seeds are sown.' },
      { title: 'Nine Nights of Devotion', description: 'Each day is dedicated to a specific incarnation of Goddess Durga (Navadurga), with special prayers, color themes, and fasting.' },
      { title: 'Kanya Puja', description: 'On the eighth or ninth day, young prepubescent girls (representing the living forms of Goddess Durga) are invited, washed, fed, and given gifts.' },
      { title: 'Dussehra (Vijayadashami)', description: 'The tenth day, celebrating the victory of Lord Rama over Ravana and Durga over Mahishasura, marked by eating Jalebi and Fafda.' }
    ],
    traditionalFoods: ['Singhare ki Puri', 'Sabudana Khichdi', 'Kuttu Atta Halwa', 'Fafda & Jalebi (eaten on Dussehra)', 'Rajgira Sheera'],
    tipsForTravelers: [
      'Visit Vadodara or Ahmedabad in Gujarat to witness the grandest, most authentic public Garba grounds hosting over 30,000 dancers in synchronization.',
      'Purchase traditional wear: Chaniya Choli (for women) or Kediyu / Kurta (for men) with heavy mirror-work to blend in and participate.',
      'Take basic Garba lessons beforehand; the steps range from simple two-clap rhythms to complex multi-step choreographies.'
    ],
    culturalHighlights: [
      { title: 'Garba Circle Dance', description: 'A highly graceful circular dance performed with rhythmic hand claps and turns, starting slow and building to an exhilarating speed.' },
      { title: 'Dandiya Raas', description: 'An energetic dance played in pairs using polished wooden sticks (dandiyas) struck together in sync with the live musical orchestra.' }
    ]
  },
  {
    id: 'rann-utsav',
    name: 'Rann Utsav',
    season: 'Winter',
    region: 'West India (Gujarat)',
    significance: 'A magnificent, winter-long celebration of Kutch\'s desert landscape, craftsmanship, music, and local culture.',
    howCelebrated: 'A sprawling luxury tent city is erected on the white salt plains. Visitors enjoy desert safaris under full moon nights, paragliding, hot-air balloon rides, local craft shopping (Roghan art, leatherwork), and performances by Kutchi folk musicians.',
    bestPlaces: ['gujarat'],
    dates: 'November to February annually',
    image: 'https://images.unsplash.com/photo-1604130095817-2db9217e47f2?q=80&w=1200',
    ritualSteps: [
      { title: 'The Tent City Experience', description: 'Staying in a massive luxury tent city erected on the edge of the Salt Desert (Great Rann of Kutch), complete with state-of-the-art amenities and daily cultural events.' },
      { title: 'Full Moon Desert Safari', description: 'Traveling on camels or in open-air SUVs into the heart of the salt flats at midnight under a brilliant, shimmering full moon, where the desert glows like ice.' },
      { title: 'Craft Village Visits', description: 'Exploring the artisan villages of Bhirandiyara, Hodka, and Nirona to witness traditional artisans creating Roghan art, Kutchi embroidery, and copper bells.' },
      { title: 'Folk Music Gala', description: 'Gathering around community bonfires in the cold winter evenings to listen to Sufi and Gujarati folk songs played on rare traditional string and wind instruments.' }
    ],
    traditionalFoods: ['Bajra No Rotlo (millet bread)', 'Kadhi Khichdi', 'Kutchi Dabeli', 'Kesar Peda', 'Fafda Jalebi'],
    tipsForTravelers: [
      'Plan your trip to coincide precisely with the full moon days; the salt desert reflecting the moon is one of the world\'s most breathtaking sights.',
      'Carry heavy winter woolens, as temperatures drop drastically in the desert at night.',
      'You must obtain a border permit to visit the Salt Desert, which can be acquired online or at the Bhirandiyara checkpoint with valid ID.'
    ],
    culturalHighlights: [
      { title: 'Roghan Painting', description: 'Witnessing the last surviving family in Nirona practicing Roghan Art, a 400-year-old Persian method of painting on fabric using castor oil-based dyes.' },
      { title: 'White Salt Flat Horizon', description: 'The incredible, disorienting landscape of infinite, brilliant white salt that stretches in every direction as far as the eye can see.' }
    ]
  },
  {
    id: 'hemis-festival',
    name: 'Hemis Festival',
    season: 'Summer',
    region: 'North India (Ladakh)',
    significance: 'A grand Buddhist festival celebrating the birth anniversary of Guru Padmasambhava, the founder of Tibetan Tantric Buddhism, signifying victory of sacred order over dark spirits.',
    howCelebrated: 'Held at the majestic Hemis Monastery, monks wear elaborate silk robes and heavy, mystical masks to perform sacred "Cham" dances representing cosmic battles. It features the unfurling of the giant, silk-embroidered Thangka scroll of the Buddha.',
    bestPlaces: ['ladakh-ut'],
    dates: 'June / July annually',
    image: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=1200',
    ritualSteps: [
      { title: 'Opening Ceremonies', description: 'Early morning prayers led by the head Lama, accompanied by the crashing of cymbals and blowing of traditional horns.' },
      { title: 'Cham Dance', description: 'Monks perform slow, highly stylized mask dances depicting the eight manifestations of Guru Padmasambhava defeating demons.' },
      { title: 'Unfurling the Thangka', description: 'Once every 12 years, a monumental, several-stories-tall silk applique Thangka of the Guru is unrolled for public viewing and blessing.' },
      { title: 'Local Fairs', description: 'Outside the monastery, a vibrant local fair takes place where artisans sell Tibetan handicrafts and jewelry.' }
    ],
    traditionalFoods: ['Butter Tea (Gur Gur Chai)', 'Chhurpi (yak cheese)', 'Mok Mok (momos)', 'Thukpa (noodle soup)'],
    tipsForTravelers: [
      'Acclimatize to the high altitude of Leh for at least two days before heading to Hemis Monastery.',
      'Arrive very early in the morning to get a good viewing spot in the monastery courtyard.',
      'Respect the sanctity of the rituals and ask for permission before photographing monks.'
    ],
    culturalHighlights: [
      { title: 'Mystical Masks', description: 'The wooden masks worn by the dancers are incredibly expressive and represent various guardian deities and demons of Tibetan Buddhism.' },
      { title: 'Traditional Orchestra', description: 'The haunting and hypnotic music created by long dungchen horns, drums, and cymbals that guide the dancers.' }
    ]
  },
  {
    id: 'kumbh-mela',
    name: 'Kumbh Mela',
    season: 'Winter',
    region: 'North/Central India',
    significance: 'The largest gathering of humanity on Earth, celebrating the divine nectar of immortality. Pilgrims gather to wash away their sins in sacred confluences of holy rivers.',
    howCelebrated: 'Millions of devotees, ascetics, and sadhus (holy men and women) from remote caves and ashrams march in colorful processions to take a sacred bath in the rivers. A sprawling, temporary city of tents, lights, and community kitchens rises on the river banks.',
    bestPlaces: ['uttar-pradesh', 'uttarakhand', 'madhya-pradesh', 'maharashtra'],
    dates: 'Cyclical every 3, 6, or 12 years (January - March)',
    image: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=1200',
    ritualSteps: [
      { title: 'Peshwai (Royal Procession)', description: 'The grand arrival of monks and sadhus on elephants, horses, and chariots, accompanied by brass bands.' },
      { title: 'Shahi Snan (Royal Bath)', description: 'The most auspicious days for bathing. Naked, ash-smeared Naga Sadhus are the first to enter the icy river waters, followed by the public.' },
      { title: 'Satsang and Discourses', description: 'Throughout the festival, spiritual leaders hold massive congregations in their respective camps to give spiritual teachings.' },
      { title: 'Deep Daan', description: 'In the evenings, thousands of small earthen lamps placed on leaf boats are offered to the river goddess.' }
    ],
    traditionalFoods: ['Langar food (community kitchen meals)', 'Jalebi & Fafda', 'Kachori Sabzi', 'Bhandara Puri-Aloo'],
    tipsForTravelers: [
      'Book your accommodation in luxury tents well in advance, as hotels get fully booked years prior.',
      'Be prepared for immense crowds and walk long distances, as vehicles are restricted near the bathing ghats.',
      'Visit the Akhadas (camps of Sadhus) respectfully; some are very welcoming to travelers eager to learn about their ascetic lifestyles.'
    ],
    culturalHighlights: [
      { title: 'Naga Sadhus', description: 'Reclusive ascetics who remain naked and smeared in holy ash, coming down from the Himalayas solely for this event.' },
      { title: 'Mega-City Infrastructure', description: 'Witness the engineering marvel of a massive temporary city built on the riverbed, complete with roads, electricity, and hospitals.' }
    ]
  },
  {
    id: 'surajkund-crafts-mela',
    name: 'Surajkund International Crafts Mela',
    season: 'Spring',
    region: 'North India (Haryana)',
    significance: 'A massive celebration of traditional handlooms, handicrafts, and rural folk arts from all corners of India and partner nations.',
    howCelebrated: 'The quiet hills of Surajkund turn into a bustling, multi-cultural global village. Hundreds of rural master craftsmen, state weavers, and award-winning national artisans set up thatched-roof stalls to sell fine handlooms, terracotta, woodcraft, and jewelry. The air is filled with energetic live folk dances like Chau, Kalbelia, and Bhangra on open-air stages, alongside local food courts serving regional cuisines.',
    bestPlaces: ['haryana'],
    dates: 'February 1 to 15 annually',
    image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=1200'
  },
  {
    id: 'kullu-dussehra',
    name: 'Kullu Dussehra',
    season: 'Autumn',
    region: 'Himalayan Region (Himachal Pradesh)',
    significance: 'A unique, week-long Himalayan celebration of Dussehra, where hundreds of valley deities congregate to pay homage to Lord Raghunath.',
    howCelebrated: 'Unlike other regions where Dussehra ends with burning paper effigies of Ravana, Kullu Dussehra *starts* on the tenth day of Vijayadashami and runs for a week. More than 250 local village deities, carried in elaborate wooden palanquins (rathas) by singing devotees, descend from remote mountain valleys to congregate at the Dhalpur Ground. There is mesmerizing folk music of brass horns, dancing, and grand temple processions.',
    bestPlaces: ['himachal-pradesh'],
    dates: 'October annually',
    image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200'
  },
  {
    id: 'sarhul',
    name: 'Sarhul',
    season: 'Spring',
    region: 'Eastern Forest Hills (Jharkhand)',
    significance: 'The majestic tribal festival of spring, celebrating the worship of nature, trees, mother Earth, and the sacred Sal tree.',
    howCelebrated: 'Celebrated by tribal communities like the Oraon, Munda, and Ho, Sarhul marks the beginning of the agricultural year when Sal tree branches burst into beautiful flowers. Devotees carry sal flowers to the sacred village grove (Sarna) where the village priest offers prayers to nature deities. Men, women, and children wear traditional white attire decorated with forest leaves and dance hand-in-hand to the rhythmic beats of the mandar drum.',
    bestPlaces: ['jharkhand'],
    dates: 'March / April annually (Chaitra month)',
    image: 'https://images.unsplash.com/photo-1588598126742-05452d2f7041?q=80&w=1200'
  },
  {
    id: 'goa-carnival',
    name: 'Goa Carnival',
    season: 'Winter',
    region: 'Coastal India (Goa)',
    significance: 'A grand, multi-day coastal carnival of street parades, elaborate costumes, music, and dance, introduced by the Portuguese in the 18th century.',
    howCelebrated: 'The carnival is led by the legendary King Momo, who decrees his subjects to "eat, drink, and be merry" (Kha, Piyo, and Majja Karo). Vibrant, music-filled street floats parade through Panaji, Margao, and Mapusa. Dancers dressed in giant feathered costumes, masks, and clowns dance down the streets to brass bands and coastal Goan music, culminating in grand Red and Black masquerade dances.',
    bestPlaces: ['goa'],
    dates: 'February / March annually (Before Lent)',
    image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1200'
  },
  {
    id: 'mysore-dasara',
    name: 'Mysore Dasara',
    season: 'Autumn',
    region: 'South India (Karnataka)',
    significance: 'The grand Nada Habba (state festival) of Karnataka, commemorating Goddess Chamundeshwari defeating the demon Mahishasura.',
    howCelebrated: 'The majestic Mysuru Palace is illuminated by 100,000 light bulbs every evening. The festival culminates on Vijayadashami with the world-famous Jamboo Savari—a grand procession of decorated royal elephants, led by an elephant carrying a 750 kg golden howdah (mantapa) housing the idol of the Goddess.',
    bestPlaces: ['karnataka'],
    dates: 'September / October (Vijayadashami day)',
    image: 'https://images.unsplash.com/photo-1600100397621-e06915b88ec7?q=80&w=1200'
  },
  {
    id: 'khajuraho-dance-festival',
    name: 'Khajuraho Dance Festival',
    season: 'Winter',
    region: 'Central India (Madhya Pradesh)',
    significance: 'A world-famous celebration of Indian classical dance set against the backdrop of the illuminated 10th-century temples.',
    howCelebrated: 'Over a week, India\'s finest classical dancers perform Kathak, Bharatanatyam, Odissi, Kathakali, Kuchipudi, and Manipuri on open-air stages directly facing the brilliantly lit Chitragupta and Vishwanatha temples, celebrating the sacred connection between music, rhythm, and human movement.',
    bestPlaces: ['madhya-pradesh'],
    dates: 'February annually (usually 20th to 26th)',
    image: 'https://images.unsplash.com/photo-1503177119275-0aa32b31d468?q=80&w=1200'
  },
  {
    id: 'yaoshang-manipur',
    name: 'Yaoshang (Manipur Holi)',
    season: 'Spring',
    region: 'Northeast India (Manipur)',
    significance: 'The largest spring festival of Manipur, celebrating the colors of life, youth sports, and the vibrant Thabal Chongba moonlit folk dance.',
    howCelebrated: 'Running for five days, the festival blends Meitei and Hindu traditions. Young kids build tiny straw huts and burn them at sunset. The highlight is the traditional "Thabal Chongba"—a graceful moonlit dance where boys and girls hold hands in a circle and dance to the beat of traditional drums. Massive local youth sporting events are also held across Manipur.',
    bestPlaces: ['manipur'],
    dates: 'February / March annually (Full moon of Lamta month)',
    image: 'https://images.unsplash.com/photo-1569930780990-21a48c4a45aa?q=80&w=1200'
  },
  {
    id: 'hornbill-festival-nagaland',
    name: 'Hornbill Festival',
    season: 'Winter',
    region: 'Northeast India (Nagaland)',
    significance: 'The world-famous "Festival of Festivals", bringing together all 16 major indigenous Naga tribes to preserve and showcase their rich warrior history, folklore, and arts.',
    howCelebrated: 'Held annually in the first week of December at Kisama Heritage Village, the festival features majestic warrior dances, traditional archery, indigenous wrestling, herbal medicine exhibitions, and massive night bazaars. The evenings host the famous Hornbill International Rock Festival, where top global bands perform.',
    bestPlaces: ['nagaland'],
    dates: 'December 1st to 10th annually',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200',
    ritualSteps: [
      { title: 'Tribal Unity Welcoming', description: 'The festival opens with a powerful assembly of all 16 Naga tribe leaders in their spectacular, distinct traditional headgear and colorful warrior shawls, lighting the unity fire.' },
      { title: 'Morung Exhibitions', description: 'Visiting the "Morungs" (traditional youth dormitories) of each tribe, which are beautifully decorated wood-and-thatch structures displaying tribal weapons, hunting trophies, and wooden drums.' },
      { title: 'Warrior Dance Showdowns', description: 'Tribesmen perform synchronized, high-energy battle dances involving traditional spears, shields, muskets, and energetic battle cries that echo through the valley.' },
      { title: 'Hornbill Rock Concerts', description: 'As night falls, the arena transforms into a high-octane amphitheater hosting the prestigious Hornbill International Rock Contest, featuring the finest rock bands across Asia.' }
    ],
    traditionalFoods: ['Smoked Pork with Bamboo Shoot', 'Naga Chili Chutney (Raja Mircha)', 'Galho (savory rice porridge)', 'Boiled organic vegetables', 'Zutho (traditional fermented rice beer)'],
    tipsForTravelers: [
      'Book hotels and homestays in Kohima or Kisama at least 6 months in advance, as rooms are completely occupied during the first week of December.',
      'Foreign travelers must register at the local Foreigners Registration Office (FRO) within 24 hours of arrival, while domestic tourists require an Inner Line Permit (ILP).',
      'Wear warm layers; Kohima is a hill station and temperatures drop drastically after sunset.'
    ],
    culturalHighlights: [
      { title: 'Raja Mircha Challenge', description: 'The legendary Raja Mircha (Ghost Pepper) eating competition where locals and brave tourists attempt to eat one of the world\'s hottest chili peppers.' },
      { title: 'Traditional Naga Morungs', description: 'The magnificent architectural masterpieces built from bamboo and thatch, each displaying the distinct wood carving styles and heritage of its respective tribe.' }
    ]
  },
  {
    id: 'wangala-festival-meghalaya',
    name: 'Wangala Festival (100 Drums)',
    season: 'Autumn',
    region: 'Northeast India (Meghalaya)',
    significance: 'The traditional thanksgiving harvest festival of the Garo tribe, celebrating the end of agricultural labor and honoring Saljong, the Sun God of fertility.',
    howCelebrated: 'Groups of 100 energetic young men play massive, long oval-shaped wooden drums (wangala) in synchronization, while 100 young women perform the graceful "dance of the hornbill" in two parallel rows, dressed in beautiful feather headgear and colorful hand-woven wrap-arounds.',
    bestPlaces: ['meghalaya'],
    dates: 'November annually (post-harvest)',
    image: 'https://images.unsplash.com/photo-1602759422475-e99d3c900d84?q=80&w=1200'
  },
  {
    id: 'chapchar-kut-mizoram',
    name: 'Chapchar Kut',
    season: 'Spring',
    region: 'Northeast India (Mizoram)',
    significance: 'The oldest, grandest spring festival of Mizoram, celebrating the successful completion of the arduous bamboo-clearing forest cycle (jhum).',
    howCelebrated: 'The entire city gathers in colorful traditional clothes, wearing headgear called "vailal". The absolute highlight is the "Cheraw" (Bamboo Dance)—where skilled dancers jump dynamically between moving, clapping horizontal bamboo poles. Beautiful hand-woven textiles and local Mizo cuisines are shared.',
    bestPlaces: ['mizoram'],
    dates: 'First Friday of March annually',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200'
  },
  {
    id: 'ratha-yatra-odisha',
    name: 'Puri Ratha Yatra (Chariot Festival)',
    season: 'Summer',
    region: 'East India (Odisha)',
    significance: 'The grand public chariot journey of Lord Jagannath, his brother Balabhadra, and sister Subhadra from the Main Temple to their aunt\'s temple, Gundicha Temple.',
    howCelebrated: 'Three giant, intricately painted wooden chariots (measuring up to 45 feet) are constructed from scratch every year. Millions of devotees gather in Puri to pull these massive chariots by hand with heavy coir ropes, chanting "Hari Bol", creating an incredibly high-energy spiritual ocean.',
    bestPlaces: ['odisha'],
    dates: 'June / July (Dwitiya of Ashadha month)',
    image: 'https://images.unsplash.com/photo-1621360841013-c7683c659ec6?q=80&w=1200',
    ritualSteps: [
      { title: 'Chhera Pahara', description: 'The Gajapati King of Puri sweeps the floor of the chariots with a golden broom, symbolizing that everyone is equal before the Lord.' },
      { title: 'Pulling the Chariots', description: 'Millions of devotees enthusiastically pull the thick ropes of the chariots, believing that touching the rope washes away sins.' },
      { title: 'Stay at Gundicha Temple', description: 'The deities stay at their aunt\'s temple for seven days, during which special sweet offerings (Poda Pitha) are made.' },
      { title: 'Bahuda Yatra', description: 'The return journey of the deities to the main Jagannath Temple.' }
    ],
    traditionalFoods: ['Khaja', 'Chhena Poda', 'Poda Pitha', 'Abhada (temple Mahaprasad)', 'Dalma'],
    tipsForTravelers: [
      'The crowds are immense. If you are not comfortable in extremely tight crowds, watch the procession from the rooftops of the buildings lining the Grand Road (Bada Danda).',
      'The Bada Danda offers an incredible energy; the chanting and the sea of humanity is an unparalleled spiritual experience.',
      'Taste the Mahaprasad cooked in the world\'s largest kitchen at the Jagannath Temple, served in earthen pots.'
    ],
    culturalHighlights: [
      { title: 'Chariot Construction', description: 'The massive wooden chariots are built every year without using any nails or modern machinery, following ancient architectural texts.' },
      { title: 'Pattachitra Art', description: 'The beautiful, intricate traditional cloth scroll paintings that adorn the chariots and the temporary structures.' }
    ]
  },
  {
    id: 'baisakhi-punjab',
    name: 'Baisakhi (Vaisakhi)',
    season: 'Spring',
    region: 'North India (Punjab)',
    significance: 'The legendary spring harvest festival of Punjab, also celebrating the birth of the Khalsa warrior community under Guru Gobind Singh in 1699.',
    howCelebrated: 'People wear bright yellow/orange traditional Punjabi clothes and perform high-energy, acrobatic Bhangra and Gidda folk dances in the green-gold mustard fields. Major gatherings occur at the Golden Temple in Amritsar, and vibrant street processions (Nagar Kirtan) are led by the sacred Panj Pyare.',
    bestPlaces: ['punjab', 'delhi-ut', 'chandigarh-ut'],
    dates: 'April 13th or 14th annually',
    image: 'https://images.unsplash.com/photo-1514222134-b57cbb8ce073?q=80&w=1200',
    ritualSteps: [
      { title: 'Morning Prayers', description: 'Devotees visit Gurdwaras early in the morning for special prayers (Kirtan) and bathing in the holy sarovar (pool).' },
      { title: 'Nagar Kirtan Processions', description: 'Vibrant street processions led by the Panj Pyare (the five beloved ones), featuring sword-fighting demonstrations (Gatka) and devotional singing.' },
      { title: 'Harvest Celebrations', description: 'Farmers express gratitude for the bountiful harvest. Fairs (melas) are held with energetic Bhangra and Giddha dances to the beat of the dhol.' },
      { title: 'Community Kitchen (Langar)', description: 'Massive free community meals are served to all visitors, regardless of caste or religion, reflecting equality and selfless service.' }
    ],
    traditionalFoods: ['Makki di Roti and Sarson da Saag', 'Kada Prasad (sweet flour pudding)', 'Chole Bhature', 'Sweet Lassi', 'Pinni'],
    tipsForTravelers: [
      'Visit the Golden Temple in Amritsar to witness the grandest Baisakhi celebrations; the temple is beautifully illuminated.',
      'Participate in the Langar to experience the profound warmth and hospitality of the Sikh community.',
      'Look for local village fairs (melas) in Punjab to see authentic folk dancing and traditional sports.'
    ],
    culturalHighlights: [
      { title: 'Gatka Martial Arts', description: 'Thrilling demonstrations of the ancient Sikh martial art, involving stick-fighting and swordplay during the processions.' },
      { title: 'Bhangra and Dhol', description: 'The infectious, high-energy folk dance and drumming that perfectly capture the joyous spirit of the Punjabi harvest.' }
    ]
  },
  {
    id: 'christmas',
    name: 'Christmas',
    season: 'Winter',
    region: 'Goa, Kerala, Northeast India',
    significance: 'Celebrating the birth of Jesus Christ. In India, it is a uniquely syncretic festival blending Western carols and traditions with local Indian flavors, decorations, and community feasting.',
    howCelebrated: 'Churches are beautifully illuminated for midnight mass. Homes and streets are decorated with colorful paper stars, nativity scenes (cribs), and lights. In Goa, there are beach parties and night-long dances. In Kerala and the Northeast, community feasts are held.',
    bestPlaces: ['goa', 'kerala', 'meghalaya', 'mizoram', 'nagaland'],
    dates: 'December 25th annually',
    image: 'https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=1200',
    ritualSteps: [
      { title: 'Advent and Preparation', description: 'Weeks in advance, families start making traditional sweets, building intricate nativity cribs, and hanging large illuminated paper stars outside their homes.' },
      { title: 'Midnight Mass', description: 'Late on Christmas Eve, communities gather at gorgeously decorated churches for the midnight mass, featuring choir singing in local languages and English.' },
      { title: 'Christmas Day Feast', description: 'Families and friends visit each other to share homemade wine, plum cake, and a grand lunch featuring local meat delicacies.' },
      { title: 'Carol Singing', description: 'Groups of youths visit houses in their neighborhoods late at night in the days leading up to Christmas, singing carols and collecting funds for charity.' }
    ],
    traditionalFoods: ['Plum Cake / Fruit Cake', 'Rose Cookies (Achappam)', 'Kulkuls (sweet dough curls)', 'Bebinca (Goan layered dessert)', 'Homemade Grape Wine', 'Duck/Pork Roasts (Kerala/Goa)'],
    tipsForTravelers: [
      'In Goa, attend the midnight mass at the historic Basilica of Bom Jesus or Se Cathedral, followed by a local beachside Christmas ball.',
      'In Kerala, take a backwater cruise during the festive season; you will see giant illuminated stars hanging from almost every house along the canals.',
      'In Meghalaya (Shillong), enjoy the incredible local choir performances and vibrant winter markets.'
    ],
    culturalHighlights: [
      { title: 'Illuminated Paper Stars', description: 'The uniquely Indian tradition of hanging giant, multi-colored, illuminated paper stars on porches and balconies.' },
      { title: 'Goan Consuada', description: 'The Goan tradition of making and sharing platters of traditional Christmas sweets (Kuswar) with neighbors of all faiths.' }
    ]
  },
  {
    id: 'thrissur-pooram',
    name: 'Thrissur Pooram',
    season: 'Summer',
    region: 'South India (Kerala)',
    significance: 'The most spectacular temple festival in Kerala, often called the "Pooram of all Poorams." It is a grand assembly of Gods and Goddesses from neighboring temples at the Vadakkunnathan Temple in Thrissur.',
    howCelebrated: 'The festival features a breathtaking parade of over 50 richly caparisoned elephants, an incredible traditional percussion ensemble (Ilanjithara Melam) involving hundreds of musicians, and an intense, vibrant parasol-exchange competition (Kudamattam) atop the elephants, culminating in a massive fireworks display.',
    bestPlaces: ['kerala'],
    dates: 'April / May (Pooram day of Medam month)',
    image: 'https://images.unsplash.com/photo-1620959074092-3a558eb8082a?q=80&w=1200',
    ritualSteps: [
      { title: 'Flag Hoisting (Kodiyettam)', description: 'The festival officially begins seven days prior with the ceremonial hoisting of flags at the participating temples.' },
      { title: 'Madathil Varavu', description: 'A vibrant procession accompanied by the traditional panchavadyam (five-instrument orchestra).' },
      { title: 'Ilanjithara Melam', description: 'The world\'s largest traditional percussion ensemble. Hundreds of artists playing the chenda drum create a mesmerizing, rhythmic crescendo under an Ilanji tree.' },
      { title: 'Kudamattam', description: 'A spectacularly colorful face-off between two temple groups, rapidly exchanging sets of brilliantly colored, crafted parasols while seated atop the lined-up elephants.' },
      { title: 'Vedikettu (Fireworks)', description: 'An earth-shattering, spectacular fireworks display held in the early hours of the morning.' }
    ],
    traditionalFoods: ['Sada Dosa', 'Parippu Vada', 'Sambar', 'Palada Payasam (sweet pudding)', 'Banana Chips'],
    tipsForTravelers: [
      'The crowds are absolutely massive and the summer heat is intense. Stay hydrated and consider viewing from the balconies of surrounding buildings.',
      'The noise from the percussion and fireworks is incredibly loud; earplugs are highly recommended for sensitive ears.',
      'Do not miss the Kudamattam; the visual spectacle of the colorful umbrellas rising and falling in sync is mesmerizing.'
    ],
    culturalHighlights: [
      { title: 'Caparisoned Elephants', description: 'The majestic elephants are decorated with golden headpieces (Nettipattam), bells, and ornaments, forming an awe-inspiring lineup.' },
      { title: 'Chenda Melam', description: 'The thunderous, highly synchronized traditional drum orchestra that builds up to a frantic, hypnotic pace.' }
    ]
  },
  {
    id: 'losar',
    name: 'Losar (Tibetan New Year)',
    season: 'Spring',
    region: 'Sikkim, Ladakh, Arunachal Pradesh',
    significance: 'The Tibetan Buddhist New Year, a festival of purification, warding off negative spirits of the old year, and welcoming the new year with auspiciousness.',
    howCelebrated: 'Homes and monasteries are deeply cleaned. Monks perform sacred dances to expel evil forces. People wear new traditional clothes, visit monasteries, hoist new prayer flags, and exchange greetings of "Tashi Delek" (Good Luck).',
    bestPlaces: ['sikkim', 'ladakh-ut', 'arunachal-pradesh'],
    dates: 'February / March (1st day of the Tibetan lunisolar calendar)',
    image: 'https://images.unsplash.com/photo-1598436573860-22c7cc192c01?q=80&w=1200',
    ritualSteps: [
      { title: 'Preparation and Cleaning', description: 'Days before Losar, houses are cleaned thoroughly to sweep away bad karma. Special foods like Khapse (deep-fried sweets) are prepared.' },
      { title: 'Gutor', description: 'The 29th day of the outgoing year. Monasteries hold Cham dances to chase away negative forces. A special nine-ingredient soup (Guthuk) is eaten.' },
      { title: 'Lama Losar', description: 'New Year\'s Day. Devotees visit monasteries early in the morning to offer prayers and make offerings to the spiritual teachers.' },
      { title: 'King\'s Losar', description: 'The following days involve massive community gatherings, visiting relatives, feasting, and traditional folk dancing and singing.' }
    ],
    traditionalFoods: ['Guthuk (noodle soup with symbolic dumplings)', 'Khapse (sweet fried biscuits)', 'Chang (barley beer)', 'Momos', 'Dresi (sweet butter rice)'],
    tipsForTravelers: [
      'Travel in these regions during winter can be challenging due to snow. Ensure roads to monasteries are open.',
      'Participate in the Guthuk soup tradition on the eve of Losar; the hidden items inside the dough balls (like chili or wool) playfully predict your character for the year.',
      'Attend the morning prayers at major monasteries like Rumtek (Sikkim) or Thiksey (Ladakh) for a deeply moving spiritual experience.'
    ],
    culturalHighlights: [
      { title: 'Guthuk Soup Fortune', description: 'A fun tradition where a special dumpling contains items like a piece of coal (meaning a black heart) or wool (meaning a gentle heart), predicting one\'s luck.' },
      { title: 'Replacing Prayer Flags', description: 'Old, faded prayer flags on mountains and roofs are taken down and replaced with brightly colored new ones to spread fresh blessings.' }
    ]
  },
  {
    id: 'ugadi',
    name: 'Ugadi / Yugadi',
    season: 'Spring',
    region: 'South India (Karnataka, Andhra Pradesh, Telangana)',
    significance: 'The New Year\'s Day for the states of Karnataka, Andhra Pradesh, and Telangana. The name implies "the beginning of a new age," celebrating the creation of the universe by Lord Brahma.',
    howCelebrated: 'People start the day with an oil bath and wear new traditional clothes. Entrances of homes are decorated with fresh mango leaves and colorful rangoli patterns. The highlight is consuming "Ugadi Pachadi" and listening to the yearly astrological predictions.',
    bestPlaces: ['karnataka', 'andhra-pradesh', 'telangana'],
    dates: 'March / April (Chaitra Shukla Pratipada)',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200',
    ritualSteps: [
      { title: 'Oil Bath and Decorations', description: 'The day begins before dawn with a traditional oil bath. Homes are cleaned and decorated with mango leaves and neem blossoms.' },
      { title: 'Ugadi Pachadi', description: 'Families gather to consume a special symbolic dish containing six distinct flavors, representing the spectrum of life\'s experiences.' },
      { title: 'Panchanga Sravanam', description: 'People visit temples or gather at home to listen to priests reading the new yearly astrological almanac (Panchangam), predicting the fortunes for the year.' },
      { title: 'Feasting and Visiting', description: 'The rest of the day is spent visiting relatives and enjoying a grand traditional vegetarian feast.' }
    ],
    traditionalFoods: ['Ugadi Pachadi / Bevu Bella', 'Obbattu / Holige (sweet stuffed flatbread)', 'Pulihora (Tamarind Rice)', 'Payasam'],
    tipsForTravelers: [
      'Be sure to taste the Ugadi Pachadi. It is a unique culinary experience that perfectly balances sweet, sour, bitter, tangy, spicy, and salty flavors.',
      'Visit local temples to witness the formal readings of the yearly astrological almanac.',
      'Observe the intricate mango-leaf torans (garlands) and colorful muggulu (floor art) outside almost every traditional home.'
    ],
    culturalHighlights: [
      { title: 'The Six Tastes of Life', description: 'The Ugadi Pachadi dish teaches a philosophical lesson: life is a mixture of sadness (neem), happiness (jaggery), anger (chili), fear (salt), disgust (tamarind), and surprise (raw mango), and all must be accepted with equanimity.' }
    ]
  },
  {
    id: 'gudi-padwa',
    name: 'Gudi Padwa',
    season: 'Spring',
    region: 'West India (Maharashtra)',
    significance: 'The traditional New Year for Marathi and Konkani Hindus. It celebrates the arrival of spring, the reaping of Rabi crops, and the mythical day Lord Brahma created the universe and time.',
    howCelebrated: 'People clean their homes, create beautiful rangolis, and hoist a "Gudi"—a bright cloth tied to a bamboo stick topped with a silver or copper pot—outside their windows. It signifies victory and prosperity. Grand street processions feature women in Nauvari sarees riding motorcycles and playing lezim.',
    bestPlaces: ['maharashtra', 'goa'],
    dates: 'March / April (Chaitra Shukla Pratipada)',
    image: 'https://images.unsplash.com/photo-1620959074092-3a558eb8082a?q=80&w=1200',
    ritualSteps: [
      { title: 'Hoisting the Gudi', description: 'A tall bamboo staff is decorated with a bright silk cloth, neem leaves, mango leaves, and a garland of sugar crystals, crowned with an inverted silver pot.' },
      { title: 'Consuming Neem and Jaggery', description: 'Families eat a mixture of bitter neem leaves and sweet jaggery, symbolizing that life is a mix of good and bad experiences.' },
      { title: 'Shobha Yatra Processions', description: 'Vibrant street parades where men and women wear traditional attire, play dhol-tasha drums, and perform local folk dances.' },
      { title: 'Festive Feast', description: 'A traditional Maharashtrian feast is prepared, usually highlighting sweet dishes like Shrikhand and Puran Poli.' }
    ],
    traditionalFoods: ['Puran Poli', 'Shrikhand and Puri', 'Aamras (mango pulp)', 'Batata Vada'],
    tipsForTravelers: [
      'Visit Girgaon in Mumbai to witness the spectacular "Shobha Yatra" processions, where thousands gather in stunning traditional attire.',
      'Look out for groups of young women expertly riding Royal Enfield motorcycles while wearing traditional nine-yard Nauvari sarees.',
      'Try the refreshing Aamras (sweet mango puree) with fluffy puris, a seasonal specialty starting around this time.'
    ],
    culturalHighlights: [
      { title: 'The Gudi Symbol', description: 'The Gudi is believed to ward off evil, invite prosperity, and represent the "Brahmadhvaj" (flag of Brahma) or the victorious flag of King Shivaji.' },
      { title: 'Lezim Dance', description: 'A high-energy Maharashtrian folk dance performed in processions, using small wooden instruments with jingling metal cymbals.' }
    ]
  },
  {
    id: 'chhath-puja',
    name: 'Chhath Puja',
    season: 'Autumn',
    region: 'East India (Bihar, Jharkhand, UP)',
    significance: 'An ancient, deeply spiritual Vedic festival dedicated to Surya (the Sun God) and Chhathi Maiya (his sister). It is performed to thank them for sustaining life on Earth and requesting blessings for longevity and prosperity.',
    howCelebrated: 'It is a rigorous four-day festival involving holy bathing, fasting (even abstaining from water), standing in water for long periods, and offering prayers (arghya) to the setting and rising sun along riverbanks and ponds.',
    bestPlaces: ['bihar', 'jharkhand', 'uttar-pradesh'],
    dates: 'October / November (6th day of Kartik month)',
    image: 'https://images.unsplash.com/photo-1542856391-010fb87dcfed?q=80&w=1200',
    ritualSteps: [
      { title: 'Nahay Khay', description: 'The first day. Devotees take a holy dip in a river, clean their houses, and prepare a pure vegetarian meal (usually pumpkin and rice) without onion or garlic.' },
      { title: 'Kharna', description: 'The second day involves a strict fast from dawn to dusk. In the evening, after worship, a sweet dish (kheer) and rotis are offered to the deities and then distributed as prasad.' },
      { title: 'Sandhya Arghya', description: 'The third day. Devotees observe a complete waterless fast. At sunset, they stand waist-deep in water and offer water, milk, and fruits to the setting sun.' },
      { title: 'Usha Arghya', description: 'The final day. Devotees gather at the riverbank before dawn to offer prayers to the rising sun, after which they break their rigorous 36-hour fast.' }
    ],
    traditionalFoods: ['Thekua (sweet wheat and jaggery cookies)', 'Rice Kheer (Rasiya)', 'Kaddoo Bhaat (pumpkin curry with rice)', 'Sugarcane'],
    tipsForTravelers: [
      'Visit the ghats (riverbanks) of the Ganges in Patna or Varanasi during the sunset and sunrise arghyas; the sight of thousands of oil lamps floating on the river is magical.',
      'The festival is highly austere and pure. Respect the devotees who are fasting and maintain the cleanliness of the riverbanks.',
      'The traditional sweet "Thekua" is incredibly delicious; try to get some as Prasad from a fasting devotee.'
    ],
    culturalHighlights: [
      { title: 'Worship of the Setting Sun', description: 'Chhath is uniquely one of the few Hindu festivals where the setting sun (representing the old and the past) is worshipped before the rising sun.' },
      { title: 'Community Bonding', description: 'The entire community comes together to clean the roads and riverbanks, ensuring a pristine path for the barefoot devotees carrying the heavy offering baskets.' }
    ]
  },
  // Jammu & Kashmir Festivals
  {
    id: 'tulip-festival-srinagar',
    name: 'Srinagar Tulip Festival',
    season: 'Spring',
    region: 'Jammu & Kashmir (Srinagar)',
    significance: 'Welcoming the arrival of spring in the Kashmir Valley with the blooming of over 1.5 million tulips of dozens of exotic varieties.',
    howCelebrated: 'Held annually at the Indira Gandhi Memorial Tulip Garden in Srinagar, on the foothills of the Zabarwan Range. The festival features traditional Kashmiri music concerts, folk dances like Bhand Pather, local handicraft stalls showcasing fine pashmina shawls and woodcrafts, and authentic food stalls offering Kashmiri Wazwan.',
    bestPlaces: ['jammu-kashmir'],
    dates: 'April 1st to 15th annually',
    image: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?q=80&w=1200'
  },

  // Puducherry Festivals
  {
    id: 'bastille-day-puducherry',
    name: 'Bastille Day',
    season: 'Summer',
    region: 'Puducherry',
    significance: 'Celebrating the French National Day, highlighting the unique, enduring French heritage of the coastal enclave.',
    howCelebrated: 'Held on July 14th, the eve of the festival features a retired soldiers march carrying the French and Indian flags down the beachfront promenade. The streets of the French Quarter (White Town) are decorated with lanterns, and a spectacular firework display is organized over the Promenade Beach, accompanied by French and Tamil music concerts.',
    bestPlaces: ['puducherry-ut'],
    dates: 'July 14th annually',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?q=80&w=1200'
  },
  // Dadra and Nagar Haveli and Daman and Diu Festivals
  {
    id: 'nariyal-poornima-diu',
    name: 'Nariyal Poornima (Coconut Festival)',
    season: 'Monsoon',
    region: 'Dadra & Nagar Haveli and Daman & Diu',
    significance: 'An ancient coastal harvest festival marking the end of the monsoon season and the return of safe ocean sailing and fishing.',
    howCelebrated: 'The coastal communities of Diu and Daman gather along the shoreline to offer golden coconuts to Lord Varuna (the sea deity) to seek blessings for smooth waters and bountiful fishing catches. The festival features dynamic traditional folk dances, boat racing, and local coconut-based sweet dishes are prepared and shared.',
    bestPlaces: ['dadra-nagar-haveli-daman-diu'],
    dates: 'August annually (Shravana Full Moon)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200'
  },
  {
    id: 'sindhu-darshan',
    name: 'Sindhu Darshan Festival',
    season: 'Summer',
    region: 'North India (Ladakh)',
    significance: 'Celebrating the Indus (Sindhu) River as a symbol of the multi-dimensional, peaceful, and unified cultural identity of India. It also honors the brave soldiers of India protecting the frontiers.',
    howCelebrated: 'Held at Shey Manla, on the banks of the Indus near Leh. Devotees and cultural groups from all states of India carry river water from their home states in earthen pots to pour into the Indus, accompanied by prayers, chanting, and a rich medley of traditional dances from different parts of India.',
    bestPlaces: ['ladakh-ut'],
    dates: 'June (usually on Guru Purnima) annually',
    image: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?q=80&w=1200',
    ritualSteps: [
      { title: 'Reception Ceremony', description: 'Opening of the festival, welcoming the participants and Buddhist monks who chant prayers at the river bank.' },
      { title: 'Water Merging', description: 'Devotees pour water brought from their respective state rivers into the Sindhu, symbolizing national integration and cultural unity.' },
      { title: 'Puja and Offerings', description: 'A traditional prayer (aarati) is performed on the riverbank, and floating lamps (diyas) are released on the water in the evening.' },
      { title: 'Cultural Exchange', description: 'Artists from various states across India perform folklore music and regional dances in a grand open-air theater.' }
    ],
    traditionalFoods: ['Chhurpi (yak cheese)', 'Momos', 'Thukpa', 'Butter tea', 'Tigmo (steamed bread with sauce)'],
    tipsForTravelers: [
      'Carry lightweight woolens as evenings can get quite cold even in June.',
      'Prepare your inner-line permits beforehand if planning to visit areas near borders (Nathu La or Nubra).',
      'Drink plenty of water and rest on your first day in Leh to acclimatize.'
    ],
    culturalHighlights: [
      { title: 'River Worship', description: 'Deep appreciation for the historic Indus River, which gave India (Sindhu/Hind/Indus) its name.' },
      { title: 'Unity in Diversity', description: 'The spectacular sight of regional dancers from Punjab, Tamil Nadu, Bengal, and Gujarat performing in their native costumes against the stark, high-altitude Ladakh landscape.' }
    ]
  },
  {
    id: 'karva-chauth',
    name: 'Karva Chauth',
    season: 'Autumn',
    region: 'North India (Punjab, Rajasthan, UP, Haryana)',
    significance: 'A cherished, highly romanticized fasting ritual performed by married women for the safety, health, and longevity of their husbands.',
    howCelebrated: 'Women observe a rigorous, waterless fast from sunrise until moonrise. They dress in exquisite bridal colors (red, gold, orange), apply beautiful henna (mehndi) designs, and gather in circles to listen to the legendary Karva Chauth story. At moonrise, they view the moon and their husband\'s face through a sieve before breaking their fast.',
    bestPlaces: ['punjab', 'rajasthan', 'uttar-pradesh', 'delhi-ut'],
    dates: 'October / November (4th day of Kartik dark fortnight)',
    image: 'https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1200',
    ritualSteps: [
      { title: 'Sargi (Pre-dawn meal)', description: 'Before sunrise, mother-in-laws offer a special platter of fruits, dry fruits, sweets, and mathri for women to consume before the fast starts.' },
      { title: 'Waterless Fasting', description: 'Women spend the day in complete fasting without drinking even a drop of water, resting and applying intricate henna patterns.' },
      { title: 'Evening Katha Puja', description: 'Dressed in traditional finery, women sit in a circle passing clay pots (karvas) and singing songs while listening to the story of Queen Veervati.' },
      { title: 'Breaking the Fast', description: 'At moonrise, women offer prayers (Arghya) to the moon, view it and then their husband through a sieve, and drink water from their husband\'s hands to break the fast.' }
    ],
    traditionalFoods: ['Mathri (crisp flour crackers)', 'Feni (vermicelli pudding)', 'Kheer', 'Malpua', 'Chole', 'Poori'],
    tipsForTravelers: [
      'If you are in Delhi or Jaipur, visit local markets on the eve of Karva Chauth; they are packed with women buying glass bangles and applying henna late into the night.',
      'Observe the devotion and the exquisite, colorful traditional attire; it is a highly photogenic and deeply emotional cultural experience.',
      'In hotels, look for special candlelit dinners organized for couples celebrating the evening.'
    ],
    culturalHighlights: [
      { title: 'Sieve Tradition', description: 'The highly romanticized ritual of looking at the moon and then the husband\'s face through a mesh sieve, popularized in Indian cinema.' },
      { title: 'Henna Artistry', description: 'The beautiful social ritual of applying detailed, symbolic reddish-brown patterns of henna on palms and feet.' }
    ]
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti / Uttarayan',
    season: 'Winter',
    region: 'West India (Gujarat), South India',
    significance: 'Marking the transition of the Sun into the Capricorn (Makar) constellation and the beginning of the auspicious six-month northward journey of the sun (Uttarayan), celebrating harvest and sun worship.',
    howCelebrated: 'In Gujarat, it is celebrated as the monumental International Kite Festival (Uttarayan). Millions of colorful paper kites of all sizes fly in the sky from dawn till late night. Rooftops are crowded with families playing loud music and shouting "Kai Po Che!" (I have cut your kite line). In the south (as Pongal/Sankranti), cows are decorated and boiled rice is offered to the sun.',
    bestPlaces: ['gujarat', 'rajasthan', 'maharashtra', 'karnataka'],
    dates: 'January 14th or 15th annually',
    image: 'https://images.unsplash.com/photo-1598971031758-00fb3950d24f?q=80&w=1200',
    ritualSteps: [
      { title: 'Holy Dip and Charity', description: 'Devotees take a sacred dip in rivers like the Ganges or Yamuna and donate sesame seeds, jaggery, and clothes to the needy.' },
      { title: 'Flying Kites', description: 'In Gujarat and Rajasthan, entire populations spend the day on rooftops, engaging in friendly kite dogfights using special glass-coated threads (manjha).' },
      { title: 'Night Lanterns (Tukka)', description: 'At dusk, the sky is lit up with thousands of white paper lanterns (tukkas) released from rooftops, creating a spectacular glowing canopy.' },
      { title: 'Sharing Sesame and Jaggery', description: 'People exchange sesame (til) and jaggery sweets, encouraging sweet speech and harmonious relationships.' }
    ],
    traditionalFoods: ['Undhiyu (mixed winter vegetable dish)', 'Jalebi', 'Til Laddoo (sesame and jaggery balls)', 'Chikki', 'Khichdi'],
    tipsForTravelers: [
      'Visit Ahmedabad\'s Sabarmati Riverfront during the International Kite Festival to see master kite fliers from all over the world.',
      'Head to the old city of Ahmedabad; the energy on the rooftops is electric, and locals will gladly invite you to try flying a kite.',
      'Mind the kite threads on the streets; wear scarves or glasses to protect your face when riding two-wheelers.'
    ],
    culturalHighlights: [
      { title: 'Sky Battles', description: 'The intense aerial kite duels that require incredible hand-eye coordination and tactical thread handling.' },
      { title: 'Rooftop Culinary Parties', description: 'The joyous community spirit where entire neighborhoods dine together on delicious winter dishes directly on the terrace.' }
    ]
  },
  {
    id: 'teej-rajasthan',
    name: 'Teej',
    season: 'Monsoon',
    region: 'North India (Rajasthan)',
    significance: 'A beautiful monsoon festival dedicated to Goddess Parvati and Lord Shiva, celebrating the arrival of cooling monsoon rains, greenery, and marital harmony.',
    howCelebrated: 'Women dress in green sarees (leheriya), apply henna, and play on beautifully decorated tree swings while singing folk songs. In Jaipur, a spectacular, royal-like street parade features the golden palanquin of Goddess Parvati (Teej Mata), accompanied by decorated elephants, folk dancers (Kalbelia), and brass bands.',
    bestPlaces: ['rajasthan'],
    dates: 'July / August (3rd day of Shravana/Bhadrapada month)',
    image: 'https://images.unsplash.com/photo-1473116763269-255ea7604ad6?q=80&w=1200',
    ritualSteps: [
      { title: 'Swing Fun (Jhula)', description: 'Large, flower-decked swings are hung from giant banyan or mango trees, and women take turns swinging high, singing monsoon-welcoming songs.' },
      { title: 'Fasting and Shringar', description: 'Women observe a fast and do "Solah Shringar" (sixteen bridal decorations), including beautiful green bangles and leheriya sarees.' },
      { title: 'Teej Mata Procession', description: 'In Jaipur, thousands line the streets to witness the grand royal procession carrying the deity, which has been continuing for centuries under royal patronage.' },
      { title: 'Ghevar Sharing', description: 'Sharing the famous honey-combed, disc-shaped sweet (Ghevar) with family and neighbors.' }
    ],
    traditionalFoods: ['Ghevar (sweet disc fried in ghee)', 'Kheer', 'Malpua', 'Puri', 'Besan Laddoo'],
    tipsForTravelers: [
      'Jaipur is the absolute best place to witness the historical royal Teej procession. Find a spot in Tripolia Bazaar or Chhoti Chaupar early.',
      'Buy a "Leheriya" (traditional Rajasthani tie-and-dye wave pattern) scarf or saree as a beautiful local souvenir.',
      'Enjoy the monsoon rains and try "Ghevar," which is prepared almost exclusively during this festival season.'
    ],
    culturalHighlights: [
      { title: 'Royal Pageantry', description: 'The majestic royal guards, elephants, camels, and folk performers that march in Jaipur\'s historic walled city.' },
      { title: 'Tree Swings', description: 'The joyous sight of swings hanging from neighborhood trees, echoing with laughter and traditional folk melodies.' }
    ]
  },
  {
    id: 'nag-panchami',
    name: 'Nag Panchami',
    season: 'Monsoon',
    region: 'West India (Maharashtra), Karnataka',
    significance: 'An ancient Vedic festival dedicated to serpent (Nag) deities, expressing respect for nature and wildlife, recognizing snakes as protective spirits of farmers and agriculture.',
    howCelebrated: 'Devotees worship clay or stone idols of cobras and offer them fresh milk, flowers, and turmeric. In Maharashtra and Karnataka, villages organize wrestling tournaments (Dangal), and women dance in circles, swinging and singing traditional songs.',
    bestPlaces: ['maharashtra', 'karnataka', 'west-bengal'],
    dates: 'July / August (5th day of Shravana bright fortnight)',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1200',
    ritualSteps: [
      { title: 'Cobra Worship (Puja)', description: 'People visit temples or set up shrines at home with snake idols, offering milk, rice, and durva grass to seek protection from snake bites and bring prosperity.' },
      { title: 'No Digging Covenant', description: 'Farmers observe a strict covenant of not digging or ploughing the earth on this day to avoid hurting any burrowing snakes.' },
      { title: 'Dangal (Wrestling)', description: 'In rural Maharashtra (especially Sangli/Kolhapur), grand traditional mud-wrestling championships are held, drawing massive crowds.' },
      { title: 'Swing Songs', description: 'Girls and women tie swings to trees, singing songs dedicated to brothers, praying for their long lives.' }
    ],
    traditionalFoods: ['Tambittu (sweet flour balls)', 'Fried gram dishes', 'Steamed rice dumplings (Kadubu)', 'Jaggery-sweetened flatbread'],
    tipsForTravelers: [
      'Visit Battis Shirala village in Maharashtra, which is globally famous for its historic (though now regulated and environment-safe) serpent handling and massive snake puja.',
      'Observe the local mud wrestling (Dangal) in Kolhapur, showcasing traditional Indian clay-ring combat and grit.',
      'Respect the eco-friendly focus; understand that snakes play a crucial role in pest control for agricultural lands.'
    ],
    culturalHighlights: [
      { title: 'Coexistence with Nature', description: 'A deep, symbolic ritual that reminds humanity of the sacred bond and coexistence between humans and wild creatures.' },
      { title: 'Dangal Wrestling', description: 'The spectacular athletic contests in rural red-clay arenas, maintaining ancient martial arts heritage.' }
    ]
  },
  {
    id: 'losoong-sikkim',
    name: 'Losoong / Namsoong',
    season: 'Winter',
    region: 'Northeast India (Sikkim)',
    significance: 'The glorious Sikkimese New Year and harvest festival, celebrated by the Bhutia and Lepcha tribes, representing the triumph of positive energy over chaotic spirits.',
    howCelebrated: 'Held at Sikkimese monasteries like Phodong and Rumtek. It features spectacular, high-energy Cham dances performed by lamas in colorful masks, archery competitions, local wine tasting, and traditional folk dancing that reflects tribal legends.',
    bestPlaces: ['sikkim'],
    dates: 'December annually (27th to 29th days of the Tibetan Lunar month)',
    image: 'https://images.unsplash.com/photo-1598436573860-22c7cc192c01?q=80&w=1200',
    ritualSteps: [
      { title: 'Thanksgiving Offerings', description: 'Devotees offer the first harvest of grains, fruits, and home-brewed wine to local guardian deities and mountains.' },
      { title: 'Sacred Cham Mask Dance', description: 'Monks in the monastery courtyards perform exorcism dances to chase away negative energies of the departing year.' },
      { title: 'Archery and Sports', description: 'Vibrant traditional archery tournaments are held, with mock insults and cheering to add to the festive fun.' },
      { title: 'Chi Beverage Sharing', description: 'Families gather to drink the traditional fermented millet drink (Chi/Chaang) from wooden bamboo mugs using long brass straws.' }
    ],
    traditionalFoods: ['Gya Thuk (noodle soup)', 'Momos', 'Khabzey (fried biscuits)', 'Sikkimese pork curry', 'Chi'],
    tipsForTravelers: [
      'Plan your Sikkim visit in mid-December to catch the festival. Rumtek and Enchey Monasteries near Gangtok have the most elaborate Cham performances.',
      'Archery contests are incredibly fun; watch the banter between competing teams.',
      'Try "Chi"—it is served hot in a traditional bamboo tumbler (Tongba) and refilled with warm water, fermenting the millet on the spot.'
    ],
    culturalHighlights: [
      { title: 'Lepcha and Bhutia Harmony', description: 'A beautiful fusion where the Lepcha celebrate it as Namsoong and Bhutia as Losoong, uniting all Sikkimese in celebration.' },
      { title: 'Cham Exorcism', description: 'The spectacular, swirling monk dances depicting black-hatted sorcerers and protector gods defeating evil.' }
    ]
  }
];
