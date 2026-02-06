
import React from 'react';
import { Destination } from './types';

// =====================
// API Configuration
// =====================
export const API_CONFIG = {
  GEMINI_API_KEY: 'AIzaSyDrQEwVQoYfumBTtJqUH-OJitnAqv_DWJs',
  WEATHER_API_KEY: '22a4e7ccc4fcd59e4e26a4c14cfd68b7', // OpenWeatherMap key
  GOOGLE_MAPS_API_KEY: 'AIzaSyDrQEwVQoYfumBTtJqUH-OJitnAqv_DWJs',
};

export const DESTINATIONS: Destination[] = [
  {
    id: '1',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Explore the ancient temples and serene bamboo groves of Japan\'s cultural capital.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 9.5,
    coordinates: [35.0116, 135.7681],
    scamAlerts: ['Tourist tax confusion', 'Fake monk donation requests']
  },
  {
    id: '2',
    name: 'Santorini',
    country: 'Greece',
    description: 'Experience the stunning caldera views and whitewashed villages of the Cyclades.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 8.8,
    coordinates: [36.3932, 25.4615],
    scamAlerts: ['Overpriced restaurant menus', 'Unlicensed taxi operators']
  },
  {
    id: '3',
    name: 'Marrakech',
    country: 'Morocco',
    description: 'Immerse yourself in the vibrant souks and rich history of the Red City.',
    imageUrl: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 7.2,
    coordinates: [31.6295, -7.9811],
    scamAlerts: ['Aggressive henna artists', 'Fake tour guide redirection']
  },
  {
    id: '4',
    name: 'Barcelona',
    country: 'Spain',
    description: 'Discover the architectural wonders and vibrant culture of Gaudí\'s masterpiece city.',
    imageUrl: 'https://images.unsplash.com/photo-1562883676-8c5daa00dac1?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 8.2,
    coordinates: [41.3851, 2.1734],
    scamAlerts: ['Pickpocketing in La Rambla', 'Fake ticket sellers']
  },
  {
    id: '5',
    name: 'Bangkok',
    country: 'Thailand',
    description: 'Experience the bustling temples, floating markets, and electric nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1508009603796-247d2c4186f5?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 7.5,
    coordinates: [13.7563, 100.5018],
    scamAlerts: ['Gem scams', 'Tourist taxi overcharges']
  },
  {
    id: '6',
    name: 'Paris',
    country: 'France',
    description: 'The City of Light awaits with romance, art, and world-class cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 8.5,
    coordinates: [48.8566, 2.3522],
    scamAlerts: ['Gold ring scams', 'Counterfeit merchandise']
  },
  {
    id: '7',
    name: 'Dubai',
    country: 'United Arab Emirates',
    description: 'Luxury shopping, stunning architecture, and desert adventures in the UAE.',
    imageUrl: 'https://images.unsplash.com/photo-1512453575246-21b2f4aae7c6?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 9.2,
    coordinates: [25.2048, 55.2708],
    scamAlerts: ['Counterfeit goods', 'Unauthorized tour operators']
  },
  {
    id: '8',
    name: 'Rome',
    country: 'Italy',
    description: 'Walk through history among ancient ruins, Renaissance art, and iconic landmarks.',
    imageUrl: 'https://images.unsplash.com/photo-1552832860-c0ae2e050d1a?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 8.1,
    coordinates: [41.9028, 12.4964],
    scamAlerts: ['Organized pickpocketing', 'Fake police officers']
  },
  {
    id: '9',
    name: 'New York City',
    country: 'United States',
    description: 'The city that never sleeps offers world-class attractions and diverse neighborhoods.',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 8.3,
    coordinates: [40.7128, -74.0060],
    scamAlerts: ['Street vendor scams', 'Unlicensed taxi services']
  },
  {
    id: '10',
    name: 'Tokyo',
    country: 'Japan',
    description: 'A perfect blend of tradition and cutting-edge technology in Japan\'s electric capital.',
    imageUrl: 'https://images.unsplash.com/photo-1544661643-a4cfe3fd3fcb?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 9.7,
    coordinates: [35.6762, 139.6503],
    scamAlerts: ['Pachinko hall scams', 'Hostess bar overcharges']
  },
  {
    id: '11',
    name: 'Bali',
    country: 'Indonesia',
    description: 'Tropical paradise with temples, beaches, and spiritual retreats.',
    imageUrl: 'https://images.unsplash.com/photo-1537225228614-b4fad34a2b08?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 7.8,
    coordinates: [8.6705, 115.2126],
    scamAlerts: ['Currency exchange scams', 'Overpriced massage parlors']
  },
  {
    id: '12',
    name: 'London',
    country: 'United Kingdom',
    description: 'Royal history, museums, and modern culture in Britain\'s bustling capital.',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 8.4,
    coordinates: [51.5074, -0.1278],
    scamAlerts: ['Street gambling, Black cab overcharges']
  },
  {
    id: '13',
    name: 'Amsterdam',
    country: 'Netherlands',
    description: 'Charming canals, world-class museums, and a relaxed cycling culture.',
    imageUrl: 'https://images.unsplash.com/photo-1512454553845-daf7cacfc331?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 8.7,
    coordinates: [52.3676, 4.9041],
    scamAlerts: ['Drink spiking in clubs', 'Bicycle rental scams']
  },
  {
    id: '14',
    name: 'Sydney',
    country: 'Australia',
    description: 'Iconic Harbour Bridge and Opera House set against stunning coastal scenery.',
    imageUrl: 'https://images.unsplash.com/photo-1506973404872-a4a50e48c4d5?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 8.9,
    coordinates: [-33.8688, 151.2093],
    scamAlerts: ['Fake booking sites', 'Undercover police stings']
  },
  {
    id: '15',
    name: 'Berlin',
    country: 'Germany',
    description: 'A vibrant city with rich history, street art, and world-class nightlife.',
    imageUrl: 'https://images.unsplash.com/photo-1568717981522-6f57e7b5d5d0?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 8.3,
    coordinates: [52.5200, 13.4050],
    scamAlerts: ['Bike rental overcharges', 'Nightclub drink charges']
  },
  {
    id: '16',
    name: 'Istanbul',
    country: 'Turkey',
    description: 'Where East meets West, with stunning Blue Mosque and Grand Bazaar.',
    imageUrl: 'https://images.unsplash.com/photo-1524521482848-7099149d3be0?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 7.8,
    coordinates: [41.0082, 28.9784],
    scamAlerts: ['Carpet overpricing', 'Fake tour guides']
  },
  {
    id: '17',
    name: 'Singapore',
    country: 'Singapore',
    description: 'Modern city-state with efficient infrastructure, diverse culture, and Gardens by the Bay.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 9.6,
    coordinates: [1.3521, 103.8198],
    scamAlerts: ['ATM skimming', 'Unmarked taxis']
  },
  {
    id: '18',
    name: 'Venice',
    country: 'Italy',
    description: 'Romantic canals, historic architecture, and gondola rides through the lagoon.',
    imageUrl: 'https://images.unsplash.com/photo-1552832860-c0ae2e050d1a?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 8.4,
    coordinates: [45.4408, 12.3155],
    scamAlerts: ['Inflated restaurant prices', 'Gondola overcharges']
  },
  {
    id: '19',
    name: 'Vienna',
    country: 'Austria',
    description: 'Imperial palaces, classical music, and elegant coffee culture in Austria capital.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 8.8,
    coordinates: [48.2082, 16.3738],
    scamAlerts: ['Change fraud', 'Overpriced taxis']
  },
  {
    id: '20',
    name: 'Prague',
    country: 'Czech Republic',
    description: 'Medieval Old Town, Prague Castle, and historic bridges over Vltava River.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 8.2,
    coordinates: [50.0755, 14.4378],
    scamAlerts: ['Taxi meter fraud', 'Fake police officers']
  },
  {
    id: '21',
    name: 'Moscow',
    country: 'Russia',
    description: 'Red Square, Kremlin, and iconic architecture in Russia capital.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 7.6,
    coordinates: [55.7558, 37.6173],
    scamAlerts: ['Unmarked taxi overcharges', 'ATM skimming']
  },
  {
    id: '22',
    name: 'Seoul',
    country: 'South Korea',
    description: 'Modern skyscrapers, ancient temples, and vibrant street food culture.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/a83f189d-777e-463d-82c5-3a059d6e499d/',
    safetyScore: 9.3,
    coordinates: [37.5665, 126.9780],
    scamAlerts: ['Counterfeit goods', 'Unlicensed tours']
  },
  {
    id: '23',
    name: 'Miami',
    country: 'United States',
    description: 'Beach paradise with vibrant nightlife, art deco architecture, and diverse culture.',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/f044030d-2b99-4674-8b63-22858853b022/',
    safetyScore: 7.7,
    coordinates: [25.7617, -80.1918],
    scamAlerts: ['Beach vendor overcharges', 'Hotel scams']
  },
  {
    id: '24',
    name: 'Melbourne',
    country: 'Australia',
    description: 'Cultural hub with laneways, street art, and cosmopolitan dining scene.',
    imageUrl: 'https://images.unsplash.com/photo-1506973404872-a4a50e48c4d5?auto=format&fit=crop&q=80&w=1000',
    vrImageUrl: 'https://ucarecdn.com/9788d6c7-3132-474f-9e32-a50d40236a21/',
    safetyScore: 9.1,
    coordinates: [-37.8136, 144.9631],
    scamAlerts: ['Taxi meter fraud', 'Fake booking sites']
  }
];

export const ICONS = {
  Alert: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
  ),
  Vr: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 12V4"/><path d="M18 10h-2l-2 2-2-2h-2"/><path d="M12 12v8"/><rect width="20" height="12" x="2" y="6" rx="2"/></svg>
  ),
  Map: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/></svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
  )
};
