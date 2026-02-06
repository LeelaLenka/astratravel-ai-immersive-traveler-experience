import { API_CONFIG } from '../constants';

export interface Attraction {
  id: string;
  name: string;
  type: string;
  description: string;
  rating: number;
  distance: number; // in km
  coordinates: [number, number];
  visitTime: string; // estimated visit time
  entryFee?: string;
  openHours?: string;
  image?: string;
}

export interface AttractionCategory {
  name: string;
  attractions: Attraction[];
}

// Mock database of famous attractions by city
const ATTRACTIONS_DATABASE: { [city: string]: AttractionCategory[] } = {
  'Kyoto': [
    {
      name: 'Temples & Shrines',
      attractions: [
        {
          id: '1',
          name: 'Fushimi Inari Taisha',
          type: 'Shrine',
          description: 'Famous shrine with thousands of vermillion torii gates',
          rating: 4.8,
          distance: 5.2,
          coordinates: [34.8674, 135.7606],
          visitTime: '2-3 hours',
          openHours: '8:30 AM - 5:00 PM',
          image: 'https://images.unsplash.com/photo-1548307163-9f3e62b48fcc?auto=format&fit=crop&q=80&w=400'
        },
        {
          id: '2',
          name: 'Kinkaku-ji (Golden Pavilion)',
          type: 'Temple',
          description: 'Stunning golden pavilion reflected in a mirror pond',
          rating: 4.9,
          distance: 8.1,
          coordinates: [35.0394, 135.7297],
          visitTime: '1-2 hours',
          entryFee: '¥400',
          openHours: '9:00 AM - 5:00 PM',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80&w=400'
        },
        {
          id: '3',
          name: 'Arashiyama Bamboo Grove',
          type: 'Natural Attraction',
          description: 'Serene bamboo forest perfect for photography',
          rating: 4.7,
          distance: 10.3,
          coordinates: [35.0075, 135.6753],
          visitTime: '1-1.5 hours',
          openHours: '24/7',
          image: 'https://images.unsplash.com/photo-1608063615883-2cdbe9aa4d6e?auto=format&fit=crop&q=80&w=400'
        }
      ]
    },
    {
      name: 'Traditional Experiences',
      attractions: [
        {
          id: '4',
          name: 'Geisha Performance',
          type: 'Cultural Experience',
          description: 'Traditional geisha dance show in Gion district',
          rating: 4.6,
          distance: 2.5,
          coordinates: [35.0045, 135.7758],
          visitTime: '1.5-2 hours',
          entryFee: '¥3000-5000',
          openHours: '6:00 PM - 9:00 PM'
        },
        {
          id: '5',
          name: 'Tea Ceremony',
          type: 'Cultural Experience',
          description: 'Authentic Japanese tea ceremony experience',
          rating: 4.5,
          distance: 3.8,
          coordinates: [35.0012, 135.7680],
          visitTime: '1-2 hours',
          entryFee: '¥2000-3000',
          openHours: '10:00 AM - 5:00 PM'
        }
      ]
    }
  ],
  'Tokyo': [
    {
      name: 'Pop Culture & Modern',
      attractions: [
        {
          id: '6',
          name: 'Shibuya Crossing',
          type: 'Cultural Landmark',
          description: 'World\'s busiest pedestrian crossing',
          rating: 4.7,
          distance: 2.1,
          coordinates: [35.6595, 139.7004],
          visitTime: '30 mins - 1 hour',
          openHours: '24/7',
          image: 'https://images.unsplash.com/photo-1540959375944-7049f642e9cc?auto=format&fit=crop&q=80&w=400'
        },
        {
          id: '7',
          name: 'Tokyo Tower',
          type: 'Observation Tower',
          description: '333m tall iconic red tower with panoramic views',
          rating: 4.6,
          distance: 3.2,
          coordinates: [35.6586, 139.7454],
          visitTime: '2-3 hours',
          entryFee: '¥900-1600',
          openHours: '9:00 AM - 11:00 PM'
        },
        {
          id: '8',
          name: 'Senso-ji Temple',
          type: 'Temple',
          description: 'Tokyo\'s oldest temple with traditional shopping street',
          rating: 4.5,
          distance: 4.8,
          coordinates: [35.7148, 139.7967],
          visitTime: '2-3 hours',
          openHours: '6:00 AM - 5:00 PM',
          image: 'https://images.unsplash.com/photo-1544661643-a4cfe3fd3fcb?auto=format&fit=crop&q=80&w=400'
        }
      ]
    }
  ],
  'Paris': [
    {
      name: 'Iconic Landmarks',
      attractions: [
        {
          id: '9',
          name: 'Eiffel Tower',
          type: 'Monument',
          description: 'Iconic iron lattice tower, symbol of Paris',
          rating: 4.8,
          distance: 1.2,
          coordinates: [48.8584, 2.2945],
          visitTime: '2-3 hours',
          entryFee: '€14-27',
          openHours: '9:00 AM - 12:45 AM',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=400'
        },
        {
          id: '10',
          name: 'Louvre Museum',
          type: 'Museum',
          description: 'World\'s largest art museum, home to Mona Lisa',
          rating: 4.7,
          distance: 2.8,
          coordinates: [48.8606, 2.3352],
          visitTime: '3-4 hours',
          entryFee: '€17',
          openHours: '9:00 AM - 6:00 PM'
        },
        {
          id: '11',
          name: 'Notre-Dame Cathedral',
          type: 'Cathedral',
          description: 'Medieval Catholic cathedral, architectural masterpiece',
          rating: 4.6,
          distance: 3.5,
          coordinates: [48.8530, 2.3499],
          visitTime: '1.5-2 hours',
          openHours: '8:00 AM - 6:45 PM'
        }
      ]
    }
  ],
  'Bangkok': [
    {
      name: 'Buddhist Temples',
      attractions: [
        {
          id: '12',
          name: 'Grand Palace',
          type: 'Palace',
          description: 'Official residence of Thai kings since 1782',
          rating: 4.7,
          distance: 1.5,
          coordinates: [13.7513, 100.4915],
          visitTime: '2-3 hours',
          entryFee: '฿500',
          openHours: '8:30 AM - 3:30 PM'
        },
        {
          id: '13',
          name: 'Wat Saket (Golden Mount)',
          type: 'Temple',
          description: 'Golden chedi on hilltop with city views',
          rating: 4.5,
          distance: 3.2,
          coordinates: [13.7638, 100.5089],
          visitTime: '1-2 hours',
          openHours: '8:00 AM - 5:00 PM'
        }
      ]
    }
  ],
  'Barcelona': [
    {
      name: 'Gaudí Masterpieces',
      attractions: [
        {
          id: '14',
          name: 'Sagrada Família',
          type: 'Basilica',
          description: 'Iconic unfinished basilica, UNESCO World Heritage Site',
          rating: 4.8,
          distance: 2.1,
          coordinates: [41.4036, 2.1744],
          visitTime: '2-3 hours',
          entryFee: '€26',
          openHours: '9:00 AM - 8:00 PM'
        },
        {
          id: '15',
          name: 'Park Güell',
          type: 'Park',
          description: 'Colorful mosaic park with panoramic city views',
          rating: 4.7,
          distance: 4.8,
          coordinates: [41.4145, 2.1527],
          visitTime: '2-3 hours',
          entryFee: '€14',
          openHours: '8:00 AM - 9:00 PM'
        }
      ]
    }
  ],
  'Venice': [
    {
      name: 'Iconic Landmarks',
      attractions: [
        {
          id: '16',
          name: 'Basilica di San Marco',
          type: 'Basilica',
          description: 'Stunning Byzantine church in San Marco Square',
          rating: 4.8,
          distance: 0.5,
          coordinates: [45.4346, 12.3382],
          visitTime: '1-2 hours',
          entryFee: '€5',
          openHours: '9:45 AM - 5:00 PM'
        },
        {
          id: '17',
          name: 'Doge\'s Palace',
          type: 'Palace',
          description: 'Gothic palace with ornate interior and Bridge of Sighs',
          rating: 4.7,
          distance: 0.3,
          coordinates: [45.4342, 12.3399],
          visitTime: '2-3 hours',
          entryFee: '€25',
          openHours: '9:00 AM - 7:00 PM'
        }
      ]
    },
    {
      name: 'Canals & Bridges',
      attractions: [
        {
          id: '18',
          name: 'Grand Canal',
          type: 'Waterway',
          description: 'Main waterway with iconic buildings and gondola rides',
          rating: 4.6,
          distance: 2.0,
          coordinates: [45.4372, 12.3345],
          visitTime: '1-2 hours',
          entryFee: 'Free (Gondola €80)',
          openHours: '24/7'
        }
      ]
    }
  ],
  'Vienna': [
    {
      name: 'Imperial Palaces',
      attractions: [
        {
          id: '19',
          name: 'Schönbrunn Palace',
          type: 'Palace',
          description: 'Magnificent imperial summer palace with gardens',
          rating: 4.7,
          distance: 5.0,
          coordinates: [48.1848, 16.3119],
          visitTime: '3-4 hours',
          entryFee: '€17',
          openHours: '8:00 AM - 5:00 PM'
        },
        {
          id: '20',
          name: 'Hofburg Palace',
          type: 'Palace',
          description: 'Former winter palace of emperors with museums',
          rating: 4.6,
          distance: 1.5,
          coordinates: [48.2065, 16.3656],
          visitTime: '2-3 hours',
          entryFee: '€15',
          openHours: '9:00 AM - 5:30 PM'
        }
      ]
    },
    {
      name: 'Music & Culture',
      attractions: [
        {
          id: '21',
          name: 'St. Stephen\'s Cathedral',
          type: 'Cathedral',
          description: 'Gothic cathedral with climbing tower views',
          rating: 4.5,
          distance: 1.2,
          coordinates: [48.2055, 16.3732],
          visitTime: '1-2 hours',
          entryFee: '€6',
          openHours: '6:00 AM - 10:00 PM'
        }
      ]
    }
  ],
  'Prague': [
    {
      name: 'Historical Landmarks',
      attractions: [
        {
          id: '22',
          name: 'Prague Castle',
          type: 'Castle',
          description: 'Largest ancient castle complex in the world',
          rating: 4.7,
          distance: 3.2,
          coordinates: [50.0910, 14.4024],
          visitTime: '3-4 hours',
          entryFee: '€16',
          openHours: '9:00 AM - 5:00 PM'
        },
        {
          id: '23',
          name: 'Charles Bridge',
          type: 'Bridge',
          description: 'Gothic bridge with statues and city views',
          rating: 4.6,
          distance: 2.5,
          coordinates: [50.0856, 14.4095],
          visitTime: '1-2 hours',
          entryFee: 'Free',
          openHours: '24/7'
        }
      ]
    },
    {
      name: 'Old Town',
      attractions: [
        {
          id: '24',
          name: 'Old Town Square',
          type: 'Square',
          description: 'Historic square with astronomical clock',
          rating: 4.5,
          distance: 2.0,
          coordinates: [50.0755, 14.4378],
          visitTime: '1-2 hours',
          entryFee: 'Free',
          openHours: '24/7'
        }
      ]
    }
  ],
  'Moscow': [
    {
      name: 'Red Square & Kremlin',
      attractions: [
        {
          id: '25',
          name: 'Red Square',
          type: 'Historic Square',
          description: 'Russia\'s most famous square with iconic cathedrals',
          rating: 4.6,
          distance: 2.0,
          coordinates: [55.7539, 37.6208],
          visitTime: '2-3 hours',
          entryFee: 'Free',
          openHours: '24/7'
        },
        {
          id: '26',
          name: 'Moscow Kremlin',
          type: 'Fortress',
          description: 'Historic fortress complex with palaces and cathedrals',
          rating: 4.7,
          distance: 2.5,
          coordinates: [55.7505, 37.6175],
          visitTime: '3-4 hours',
          entryFee: '₽500',
          openHours: '10:00 AM - 5:00 PM'
        }
      ]
    },
    {
      name: 'Cultural Institutions',
      attractions: [
        {
          id: '27',
          name: 'State Historical Museum',
          type: 'Museum',
          description: 'Comprehensive museum of Russian history',
          rating: 4.5,
          distance: 1.5,
          coordinates: [55.7562, 37.6190],
          visitTime: '2-3 hours',
          entryFee: '₽300',
          openHours: '10:00 AM - 6:00 PM'
        }
      ]
    }
  ],
  'Seoul': [
    {
      name: 'Palaces & Temples',
      attractions: [
        {
          id: '28',
          name: 'Gyeongbokgung Palace',
          type: 'Palace',
          description: 'Main royal palace with changing guards ceremony',
          rating: 4.7,
          distance: 3.0,
          coordinates: [37.5796, 126.9770],
          visitTime: '2-3 hours',
          entryFee: '₩3000',
          openHours: '9:00 AM - 6:00 PM'
        },
        {
          id: '29',
          name: 'Bukchon Hanok Village',
          type: 'Historic Village',
          description: 'Traditional Korean houses and cultural experience',
          rating: 4.6,
          distance: 2.0,
          coordinates: [37.5806, 126.9825],
          visitTime: '2-3 hours',
          entryFee: 'Free',
          openHours: '10:00 AM - 6:00 PM'
        }
      ]
    },
    {
      name: 'Modern Attractions',
      attractions: [
        {
          id: '30',
          name: 'N Seoul Tower',
          type: 'Observation Tower',
          description: 'Tower with observatory and city views',
          rating: 4.5,
          distance: 2.5,
          coordinates: [37.5510, 126.9881],
          visitTime: '1.5-2 hours',
          entryFee: '₩13000',
          openHours: '10:00 AM - 11:00 PM'
        }
      ]
    }
  ],
  'Miami': [
    {
      name: 'Beach & Waterfront',
      attractions: [
        {
          id: '31',
          name: 'Miami Beach',
          type: 'Beach',
          description: 'Famous sandy beach with Art Deco architecture',
          rating: 4.5,
          distance: 2.0,
          coordinates: [25.7907, -80.1300],
          visitTime: '3-4 hours',
          entryFee: 'Free',
          openHours: '24/7'
        },
        {
          id: '32',
          name: 'Wynwood Walls',
          type: 'Street Art',
          description: 'Hip neighborhood with colorful murals and galleries',
          rating: 4.4,
          distance: 4.5,
          coordinates: [25.8029, -80.1991],
          visitTime: '2-3 hours',
          entryFee: 'Free',
          openHours: '24/7'
        }
      ]
    },
    {
      name: 'Nature & Wildlife',
      attractions: [
        {
          id: '33',
          name: 'Everglades National Park',
          type: 'National Park',
          description: 'Unique wetlands with alligators and native wildlife',
          rating: 4.6,
          distance: 60.0,
          coordinates: [25.3891, -80.9375],
          visitTime: '4-5 hours',
          entryFee: '$30',
          openHours: '8:00 AM - Sunset'
        }
      ]
    }
  ],
  'Melbourne': [
    {
      name: 'Culture & Markets',
      attractions: [
        {
          id: '34',
          name: 'Queen Victoria Market',
          type: 'Market',
          description: 'Historic market with fresh produce and souvenirs',
          rating: 4.5,
          distance: 1.5,
          coordinates: [-37.8080, 144.9610],
          visitTime: '2-3 hours',
          entryFee: 'Free',
          openHours: '6:00 AM - 2:00 PM (Tu-Sun)'
        },
        {
          id: '35',
          name: 'Street Art Laneways',
          type: 'Street Art',
          description: 'Colorful alleyways with ever-changing murals',
          rating: 4.6,
          distance: 1.0,
          coordinates: [-37.8133, 144.9659],
          visitTime: '1-2 hours',
          entryFee: 'Free',
          openHours: '24/7'
        }
      ]
    },
    {
      name: 'Gardens & Parks',
      attractions: [
        {
          id: '36',
          name: 'Royal Botanic Gardens',
          type: 'Garden',
          description: 'Beautiful gardens with native plants and views',
          rating: 4.7,
          distance: 2.0,
          coordinates: [-37.8295, 144.9830],
          visitTime: '2-3 hours',
          entryFee: 'Free',
          openHours: '7:30 AM - Dusk'
        }
      ]
    }
  ]
};

export async function getAttractionsByCity(city: string): Promise<AttractionCategory[]> {
  // Simulate API delay
  await new Promise(res => setTimeout(res, 500));
  
  return ATTRACTIONS_DATABASE[city] || [];
}

export async function getAttractionsByCoordinates(
  lat: number,
  lon: number,
  radius: number = 5
): Promise<Attraction[]> {
  // This would integrate with Google Places API in production
  // For now returning mock data
  await new Promise(res => setTimeout(res, 400));
  
  return [];
}

export async function getNearestAttraction(
  lat: number,
  lon: number
): Promise<Attraction | null> {
  // Find nearest attraction
  await new Promise(res => setTimeout(res, 300));
  return null;
}

export async function getNearbyPlaces(
  city: string,
  country: string
): Promise<{ city: string; country: string; distance: string }[]> {
  // Mock nearby places database
  const nearbyPlacesMap: { [key: string]: { city: string; country: string; distance: string }[] } = {
    'Kyoto-Japan': [
      { city: 'Osaka', country: 'Japan', distance: '75 km' },
      { city: 'Kobe', country: 'Japan', distance: '95 km' },
      { city: 'Nara', country: 'Japan', distance: '45 km' }
    ],
    'Tokyo-Japan': [
      { city: 'Kyoto', country: 'Japan', distance: '400 km' },
      { city: 'Fuji', country: 'Japan', distance: '100 km' },
      { city: 'Nikko', country: 'Japan', distance: '140 km' }
    ],
    'Paris-France': [
      { city: 'Versailles', country: 'France', distance: '17 km' },
      { city: 'Monet Gardens', country: 'France', distance: '75 km' },
      { city: 'Loire Valley Castles', country: 'France', distance: '230 km' }
    ],
    'Barcelona-Spain': [
      { city: 'Montserrat', country: 'Spain', distance: '50 km' },
      { city: 'Tarragona', country: 'Spain', distance: '100 km' },
      { city: 'Girona', country: 'Spain', distance: '100 km' }
    ],
    'Bangkok-Thailand': [
      { city: 'Pattaya', country: 'Thailand', distance: '165 km' },
      { city: 'Ayutthaya', country: 'Thailand', distance: '80 km' },
      { city: 'Floating Markets', country: 'Thailand', distance: '40 km' }
    ],
    'Dubai-United Arab Emirates': [
      { city: 'Abu Dhabi', country: 'United Arab Emirates', distance: '140 km' },
      { city: 'Sharjah', country: 'United Arab Emirates', distance: '23 km' },
      { city: 'RAK', country: 'United Arab Emirates', distance: '240 km' }
    ],
    'Rome-Italy': [
      { city: 'Vatican City', country: 'Italy', distance: '2 km' },
      { city: 'Tivoli', country: 'Italy', distance: '28 km' },
      { city: 'Pompeii', country: 'Italy', distance: '240 km' }
    ],
    'Venice-Italy': [
      { city: 'Padua', country: 'Italy', distance: '40 km' },
      { city: 'Verona', country: 'Italy', distance: '120 km' },
      { city: 'Lakes Region', country: 'Italy', distance: '200 km' }
    ],
    'New York City-United States': [
      { city: 'Boston', country: 'United States', distance: '340 km' },
      { city: 'Washington DC', country: 'United States', distance: '360 km' },
      { city: 'Niagara Falls', country: 'United States', distance: '400 km' }
    ],
    'Miami-United States': [
      { city: 'Key West', country: 'United States', distance: '320 km' },
      { city: 'Orlando', country: 'United States', distance: '240 km' },
      { city: 'Tampa', country: 'United States', distance: '280 km' }
    ],
    'Singapore-Singapore': [
      { city: 'Johor Bahru', country: 'Malaysia', distance: '60 km' },
      { city: 'Kuala Lumpur', country: 'Malaysia', distance: '350 km' },
      { city: 'Sentosa Island', country: 'Singapore', distance: '15 km' }
    ],
    'Seoul-South Korea': [
      { city: 'Incheon', country: 'South Korea', distance: '60 km' },
      { city: 'DMZ', country: 'South Korea', distance: '70 km' },
      { city: 'Nami Island', country: 'South Korea', distance: '30 km' }
    ],
    'Istanbul-Turkey': [
      { city: 'Gallipoli', country: 'Turkey', distance: '300 km' },
      { city: 'Cappadocia', country: 'Turkey', distance: '750 km' },
      { city: 'Aegean Coast', country: 'Turkey', distance: '200 km' }
    ],
    'Vienna-Austria': [
      { city: 'Prague', country: 'Czech Republic', distance: '330 km' },
      { city: 'Budapest', country: 'Hungary', distance: '220 km' },
      { city: 'Salzburg', country: 'Austria', distance: '300 km' }
    ],
    'Prague-Czech Republic': [
      { city: 'Cesky Krumlov', country: 'Czech Republic', distance: '180 km' },
      { city: 'Vienna', country: 'Austria', distance: '330 km' },
      { city: 'Krakow', country: 'Poland', distance: '360 km' }
    ],
    'Moscow-Russia': [
      { city: 'St. Petersburg', country: 'Russia', distance: '700 km' },
      { city: 'Vladimir', country: 'Russia', distance: '180 km' },
      { city: 'Sergiev Posad', country: 'Russia', distance: '70 km' }
    ],
    'Melbourne-Australia': [
      { city: 'Great Ocean Road', country: 'Australia', distance: '240 km' },
      { city: 'Yarra Valley', country: 'Australia', distance: '50 km' },
      { city: 'Phillip Island', country: 'Australia', distance: '140 km' }
    ]
  };

  const key = `${city}-${country}`;
  return nearbyPlacesMap[key] || [];
}
