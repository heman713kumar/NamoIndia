export interface Destination {
  id: string;
  name: string;
  type: 'state' | 'ut';
  region: 'North' | 'South' | 'East' | 'West' | 'Northeast' | 'Central';
  capital: string;
  description: string;
  overview: string;
  bestTimeToVisit: string;
  howToReach: {
    air: string;
    rail: string;
    road: string;
  };
  signatureFoods: string[];
  topAttractions: {
    name: string;
    description: string;
    image: string;
  }[];
  image: string;
  gallery: string[];
  tags: ('culture' | 'nature' | 'adventure' | 'food' | 'wellness' | 'family' | 'heritage')[];
}

export interface City {
  id: string;
  stateId: string;
  name: string;
  description: string;
  overview: string;
  bestTimeToVisit: string;
  topAttractions: string[];
  signatureDish: string;
  image: string;
  highlights: string[];
}

export interface Attraction {
  id: string;
  stateId: string;
  name: string;
  description: string;
  history: string;
  visitingHours: string;
  entryFee: string;
  tips: string[];
  nearbyAttractions: string[];
  image: string;
}

export interface NationalPark {
  id: string;
  name: string;
  stateId: string;
  description: string;
  keyFauna: string[];
  bestTime: string;
  safariTimings: string;
  tips: string[];
  image: string;
}

export interface HeritageSite {
  id: string;
  name: string;
  stateId: string;
  additionalStateIds?: string[];
  yearDeclared: number;
  description: string;
  significance: string;
  visitingTips: string[];
  image: string;
}

export interface ExperientialItem {
  id: string;
  category: 'adventure' | 'food' | 'culture' | 'wellness';
  title: string;
  tagline: string;
  description: string;
  experienceDeepDive: string;
  keyHighlights: string[];
  practicalInformation: string;
  recommendedStates: string[];
  image: string;
}

export interface Festival {
  id: string;
  name: string;
  season: 'Spring' | 'Summer' | 'Monsoon' | 'Autumn' | 'Winter';
  region: string;
  significance: string;
  howCelebrated: string;
  bestPlaces: string[]; // State/UT ids
  dates: string;
  image: string;
  ritualSteps?: { title: string; description: string }[];
  traditionalFoods?: string[];
  tipsForTravelers?: string[];
  culturalHighlights?: { title: string; description: string }[];
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[]; // Paragraphs
  image: string;
  tags: string[];
  relatedDestinations: string[]; // Destination IDs
  relatedFestivals: string[]; // Festival IDs
}

export interface TripItinerary {
  days: number;
  regions: string[];
  style: 'relaxed' | 'adventure' | 'cultural' | 'spiritual';
  dayByDay: {
    day: number;
    title: string;
    activity: string;
    location: string;
    locationId?: string;
    foodSuggestion?: string;
  }[];
}

