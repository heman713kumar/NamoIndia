export interface SocialMediaPost {
  id: string;
  creatorName: string;
  creatorHandle: string;
  avatar: string;
  platform: 'youtube' | 'instagram' | 'shorts' | 'reels';
  title: string;
  description: string;
  url: string;
  embedId?: string; // YouTube video ID or Instagram embed slug
  stateId: string; // e.g. 'rajasthan', 'kerala', 'goa', 'ladakh', 'himachal-pradesh', 'maharashtra', 'tamil-nadu', 'delhi'
  stateName: string;
  countryName: string; // Always 'India'
  likes: string;
  views: string;
  thumbnail: string;
  tags: string[];
}

export const socialMediaPosts: SocialMediaPost[] = [
  {
    id: 'yt-rajasthan-monkey',
    creatorName: 'Monkey Magic',
    creatorHandle: '@monkeymagic',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150',
    platform: 'youtube',
    title: 'The Royal Desert Living of Rajasthan - 100 Days of India',
    description: 'Living in a remote mud house in the Thar desert of Jaisalmer, dancing under the stars, eating fresh millet rotis, and riding camels.',
    url: 'https://www.youtube.com/watch?v=F3S6S_A0_4g',
    embedId: 'F3S6S_A0_4g',
    stateId: 'rajasthan',
    stateName: 'Rajasthan',
    countryName: 'India',
    likes: '45K',
    views: '1.2M',
    thumbnail: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=800',
    tags: ['Desert Life', 'Culture', 'Thar Desert', 'Jaisalmer']
  },
  {
    id: 'yt-kerala-tanya',
    creatorName: 'Tanya Khanijow',
    creatorHandle: '@tanyakhanijow',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150',
    platform: 'youtube',
    title: 'Exploring the Silent Backwaters of Alleppey, Kerala',
    description: 'A serene journey through the palm-fringed canals of Kerala. Meeting local fishermen, enjoying freshly caught pearl spot fish, and experiencing houseboats.',
    url: 'https://www.youtube.com/watch?v=R_t-b79eE3I',
    embedId: 'R_t-b79eE3I',
    stateId: 'kerala',
    stateName: 'Kerala',
    countryName: 'India',
    likes: '32K',
    views: '840K',
    thumbnail: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800',
    tags: ['Backwaters', 'Houseboats', 'Slow Travel', 'Alleppey']
  },
  {
    id: 'yt-goa-curly',
    creatorName: 'Curly Tales',
    creatorHandle: '@curlytales',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=150',
    platform: 'youtube',
    title: 'Hidden Portuguese Mansions & Secret Beaches of South Goa',
    description: 'Kamiya Jani takes us on a unique heritage walk across the oldest Portuguese quarters in Goa, followed by a sunset seafood feast at a secret cove.',
    url: 'https://www.youtube.com/watch?v=tIuLz_N1GMo',
    embedId: 'tIuLz_N1GMo',
    stateId: 'goa',
    stateName: 'Goa',
    countryName: 'India',
    likes: '28K',
    views: '650K',
    thumbnail: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=800',
    tags: ['Heritage', 'Secret Beaches', 'Local Cuisine', 'Villas']
  },
  {
    id: 'ig-ladakh-mountain',
    creatorName: 'Mountain Trekker',
    creatorHandle: '@varunvagish',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150',
    platform: 'instagram',
    title: 'Crossing Khardung La Pass at -15°C (Reel)',
    description: 'Breathtaking drone footage and raw travel vibes from one of the highest motorable passes in the world in Ladakh.',
    url: 'https://www.instagram.com/reel/Cw0xyz',
    embedId: 'Cw0xyz',
    stateId: 'ladakh',
    stateName: 'Ladakh',
    countryName: 'India',
    likes: '112K',
    views: '3.4M',
    thumbnail: 'https://images.unsplash.com/photo-1589136777351-fdc9c9400c7e?q=80&w=800',
    tags: ['Khardung La', 'Snow Adventure', 'High Pass', 'Road Trip']
  },
  {
    id: 'yt-himachal-nomadic',
    creatorName: 'Nomadic Indian',
    creatorHandle: '@nomadicindian',
    avatar: 'https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=150',
    platform: 'youtube',
    title: 'Living with Spiti Valley Locals in India\'s Remotest Village',
    description: 'Deep-dive into the winter lifestyle of the local Spiti population. Surviving sub-zero temperatures, sharing butter tea, and visiting the majestic Key Monastery.',
    url: 'https://www.youtube.com/watch?v=N46m9m8j-Z8',
    embedId: 'N46m9m8j-Z8',
    stateId: 'himachal-pradesh',
    stateName: 'Himachal Pradesh',
    countryName: 'India',
    likes: '51K',
    views: '1.5M',
    thumbnail: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?q=80&w=800',
    tags: ['Spiti Valley', 'Remote Village', 'Winter Survivor', 'Monasteries']
  },
  {
    id: 'ig-mumbai-street',
    creatorName: 'The Foodie Inc.',
    creatorHandle: '@thefoodieinc',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150',
    platform: 'instagram',
    title: 'Mumbai\'s Midnight Vada Pav & Sandwich Run (Reel)',
    description: 'An authentic street food tour capturing the night life and sizzling energy of local food stalls at CST station.',
    url: 'https://www.instagram.com/reel/Cx1abc',
    embedId: 'Cx1abc',
    stateId: 'maharashtra',
    stateName: 'Maharashtra',
    countryName: 'India',
    likes: '89K',
    views: '2.1M',
    thumbnail: 'https://images.unsplash.com/photo-1562979314-bee7453e911c?q=80&w=800',
    tags: ['Street Food', 'Mumbai Nightlife', 'Vada Pav', 'CST']
  },
  {
    id: 'yt-tamil-madras',
    creatorName: 'Madras Samayal',
    creatorHandle: '@madrassamayal',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
    platform: 'youtube',
    title: 'Epic Food Trail Across Madurai & Chettinad',
    description: 'Discovering the secrets of world-famous Chettinad spices, tasting softest Idlis, and seeing ancient merchant palaces.',
    url: 'https://www.youtube.com/watch?v=O1aL8iYyvF8',
    embedId: 'O1aL8iYyvF8',
    stateId: 'tamil-nadu',
    stateName: 'Tamil Nadu',
    countryName: 'India',
    likes: '19K',
    views: '420K',
    thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=800',
    tags: ['Chettinad', 'Food Tour', 'Heritage', 'Madurai']
  },
  {
    id: 'yt-delhi-karl',
    creatorName: 'Karl Rock',
    creatorHandle: '@karlrock',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150',
    platform: 'youtube',
    title: 'Navigating the Buzzing Spice Market of Khari Baoli, Delhi',
    description: 'An action-packed walk through Asia\'s largest wholesale spice bazaar, exploring alleys, experiencing aromatic spices, and local market heritage.',
    url: 'https://www.youtube.com/watch?v=AzeZ6rUo0mE',
    embedId: 'AzeZ6rUo0mE',
    stateId: 'delhi',
    stateName: 'Delhi',
    countryName: 'India',
    likes: '35K',
    views: '920K',
    thumbnail: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800',
    tags: ['Spice Market', 'Old Delhi', 'Culture Shock', 'Walkthrough']
  },
  {
    id: 'ig-varanasi-kreator',
    creatorName: 'Soul Travel India',
    creatorHandle: '@soultravelindia',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=150',
    platform: 'instagram',
    title: 'Subah-e-Banaras: The Spiritual Morning Ragas of Varanasi (Short)',
    description: 'Watching the glowing sun rise over the Ganges river in Varanasi while classical violin ragas drift in the morning mist.',
    url: 'https://www.instagram.com/reel/Cy3def',
    embedId: 'Cy3def',
    stateId: 'uttar-pradesh',
    stateName: 'Uttar Pradesh',
    countryName: 'India',
    likes: '74K',
    views: '1.8M',
    thumbnail: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?q=80&w=800',
    tags: ['Ganges River', 'Spiritual', 'Varanasi', 'Morning Raga']
  }
];
