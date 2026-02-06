export interface TravelLaw {
  category: string;
  description: string;
  severity: 'info' | 'warning' | 'critical';
  icon: string;
}

export interface CityLaws {
  city: string;
  country: string;
  laws: TravelLaw[];
  vaccineRequirements?: string;
  visaInfo?: string;
  localEmergency?: string;
  bestTimeToVisit?: string;
}

const TRAVEL_LAWS_DATABASE: { [city: string]: CityLaws } = {
  'Kyoto': {
    city: 'Kyoto',
    country: 'Japan',
    localEmergency: '110 (Police) / 119 (Ambulance)',
    visaInfo: 'Most nationalities get 90 days visa-free on tourist visa',
    vaccineRequirements: 'No mandatory vaccines, but travel insurance recommended',
    bestTimeToVisit: 'March-May (Spring) and September-November (Autumn)',
    laws: [
      {
        category: 'Temple Etiquette',
        description: 'Remove shoes before entering temples. Dress modestly (cover shoulders and knees)',
        severity: 'warning',
        icon: '🏯'
      },
      {
        category: 'Photography',
        description: 'Photography allowed in most temples. Some areas may prohibit flash',
        severity: 'info',
        icon: '📸'
      },
      {
        category: 'Dining Customs',
        description: 'It\'s rude to stick chopsticks upright in rice. Slurping noodles is appreciated',
        severity: 'info',
        icon: '🍜'
      },
      {
        category: 'Public Behavior',
        description: 'Avoid loud conversations in public transport. Don\'t eat while walking',
        severity: 'warning',
        icon: '🚆'
      },
      {
        category: 'Alcohol Laws',
        description: 'Legal drinking age is 20. No open container laws in public',
        severity: 'info',
        icon: '🍶'
      }
    ]
  },
  'Tokyo': {
    city: 'Tokyo',
    country: 'Japan',
    localEmergency: '110 (Police) / 119 (Ambulance)',
    visaInfo: 'Most nationalities get 90 days visa-free',
    vaccineRequirements: 'No mandatory vaccines',
    bestTimeToVisit: 'March-May (Spring) and September-November (Autumn)',
    laws: [
      {
        category: 'Subway Etiquette',
        description: 'Women-only cars available. Priority seats for elderly/pregnant women',
        severity: 'warning',
        icon: '🚇'
      },
      {
        category: 'Smoking Laws',
        description: 'Smoking prohibited in many public areas. Designated smoking zones available',
        severity: 'critical',
        icon: '🚭'
      },
      {
        category: 'Photography Restrictions',
        description: 'No photography of military installations. Respect private property signs',
        severity: 'warning',
        icon: '📸'
      },
      {
        category: 'Nightlife Rules',
        description: 'Clubs close before dawn. Age verification required for alcohol purchase',
        severity: 'info',
        icon: '🍻'
      },
      {
        category: 'Walking',
        description: 'Stay on left side of sidewalks. Do not obstruct streets with luggage',
        severity: 'info',
        icon: '🚶'
      }
    ]
  },
  'Paris': {
    city: 'Paris',
    country: 'France',
    localEmergency: '15 (Emergency) / 17 (Police)',
    visaInfo: 'EU/EEA citizens visa-free. Others check Schengen rules',
    vaccineRequirements: 'COVID vaccination may be required for some venues',
    bestTimeToVisit: 'April-June and September-October',
    laws: [
      {
        category: 'Public Etiquette',
        description: 'Always greet vendors with "Bonjour". Speak quietly in public places',
        severity: 'info',
        icon: '🇫🇷'
      },
      {
        category: 'Pickpocketing Prevention',
        description: 'Keep valuables hidden. Avoid crowded trains and tourist spots at night',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Dress Code',
        description: 'Dress smartly, especially in upscale restaurants. Beach wear only at beach',
        severity: 'warning',
        icon: '👔'
      },
      {
        category: 'Metro Rules',
        description: 'Validate tickets before boarding. No eating/drinking in metro',
        severity: 'warning',
        icon: '🚇'
      },
      {
        category: 'Museum Photography',
        description: 'Photography often prohibited in museums. Check signage before photographing',
        severity: 'warning',
        icon: '🏛️'
      }
    ]
  },
  'Bangkok': {
    city: 'Bangkok',
    country: 'Thailand',
    localEmergency: '191 (Tourist Police) / 123 (Emergency)',
    visaInfo: '30-60 days visa-free for most nationalities',
    vaccineRequirements: 'Yellow fever vaccination recommended (not required)',
    bestTimeToVisit: 'November-February (Cool & Dry)',
    laws: [
      {
        category: 'Royal Respect',
        description: 'Always show respect to Thai royalty. Never insult the King or Royal Family',
        severity: 'critical',
        icon: '👑'
      },
      {
        category: 'Temple Dress Code',
        description: 'Cover shoulders and knees. Remove shoes. Do not point at Buddha statues',
        severity: 'critical',
        icon: '🏯'
      },
      {
        category: 'Hand Gestures',
        description: 'Never point with feet. Avoid public displays of affection',
        severity: 'warning',
        icon: '✋'
      },
      {
        category: 'Scam Prevention',
        description: 'Avoid gem/tailor shops and friendliness scams. Use metered taxis',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Driving Laws',
        description: 'Keep passport copy while driving. Speed limit 80km/h on expressways',
        severity: 'warning',
        icon: '🚗'
      }
    ]
  },
  'Barcelona': {
    city: 'Barcelona',
    country: 'Spain',
    localEmergency: '092 (Police) / 061 (Ambulance)',
    visaInfo: 'EU/Schengen visa-free. Others check requirements',
    vaccineRequirements: 'Standard EU travel vaccines recommended',
    bestTimeToVisit: 'May-June and September-October',
    laws: [
      {
        category: 'Pickpocketing Risk',
        description: 'High risk in La Rambla and major attractions. Keep bags in front',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Beach Rules',
        description: 'No glass bottles on beach. Topless swimming for women is common',
        severity: 'info',
        icon: '🏖️'
      },
      {
        category: 'Public Transport',
        description: 'Always validate tickets. Do not travel alone late at night',
        severity: 'warning',
        icon: '🚌'
      },
      {
        category: 'Cycling Laws',
        description: 'Cyclists must use bike lanes. Helmets recommended for safety',
        severity: 'warning',
        icon: '🚴'
      },
      {
        category: 'Park Safety',
        description: 'Avoid parks at night. Do not leave belongings unattended',
        severity: 'warning',
        icon: '🌳'
      }
    ]
  },
  'Santorini': {
    city: 'Santorini',
    country: 'Greece',
    localEmergency: '100 (Police) / 166 (Ambulance)',
    visaInfo: 'EU/Schengen visa-free. Schengen rules apply for others',
    vaccineRequirements: 'Standard travel vaccines recommended',
    bestTimeToVisit: 'May-June and September-October',
    laws: [
      {
        category: 'Donkey Safety',
        description: 'Treat donkeys with respect if using them. They have right of way on steps',
        severity: 'info',
        icon: '🫏'
      },
      {
        category: 'Sun Protection',
        description: 'Strong Greek sun - use SPF 50+ sunscreen. Dehydration is common',
        severity: 'warning',
        icon: '☀️'
      },
      {
        category: 'Cliff Safety',
        description: 'Never go beyond marked areas near cliffs. Watch for loose stones',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Restaurant Etiquette',
        description: 'Meals are social events. Do not rush. Tipping 5-10% is appreciated',
        severity: 'info',
        icon: '🍽️'
      },
      {
        category: 'Swimming',
        description: 'Check for warning flags. Currents can be strong; ask locals about safety',
        severity: 'warning',
        icon: '🏊'
      }
    ]
  },
  'Marrakech': {
    city: 'Marrakech',
    country: 'Morocco',
    localEmergency: '19 (Police) / 15 (Ambulance)',
    visaInfo: '30 days visa-free for most nationalities',
    vaccineRequirements: 'Yellow fever vaccination recommended',
    bestTimeToVisit: 'October-April (Cooler months)',
    laws: [
      {
        category: 'Haggling Culture',
        description: 'Haggling expected in souks. Start at 40-50% of asking price',
        severity: 'info',
        icon: '💰'
      },
      {
        category: 'Photography Permission',
        description: 'Always ask before photographing people. Never photograph military/police',
        severity: 'warning',
        icon: '📸'
      },
      {
        category: 'Dress Code',
        description: 'Modest clothing required. Cover shoulders, knees, and chest',
        severity: 'critical',
        icon: '👗'
      },
      {
        category: 'Ramadan Respect',
        description: 'During Ramadan, do not eat/drink in public. Many restaurants close during day',
        severity: 'warning',
        icon: '🌙'
      },
      {
        category: 'Scam Prevention',
        description: 'Avoid unofficial guides and "friends". Use official taxis only',
        severity: 'critical',
        icon: '⚠️'
      }
    ]
  },
  'Dubai': {
    city: 'Dubai',
    country: 'United Arab Emirates',
    localEmergency: '999 (Police) / 998 (Ambulance)',
    visaInfo: '30-90 days visa-free depending on nationality',
    vaccineRequirements: 'COVID vaccination requirements may apply',
    bestTimeToVisit: 'October-April (Pleasant weather)',
    laws: [
      {
        category: 'Dress Code',
        description: 'Modest clothing in public. Bikinis only in resorts/beaches',
        severity: 'warning',
        icon: '👗'
      },
      {
        category: 'Alcohol Rules',
        description: 'Alcohol only in licensed venues. Cannot be consumed in public',
        severity: 'critical',
        icon: '🚫'
      },
      {
        category: 'Public Affection',
        description: 'No kissing/intimate contact in public. Can result in fines/detention',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Driving Laws',
        description: 'Speed cameras everywhere. Seatbelts mandatory. International license required',
        severity: 'warning',
        icon: '🚗'
      },
      {
        category: 'Photography',
        description: 'Never photograph people without permission. Government buildings off-limits',
        severity: 'warning',
        icon: '📸'
      }
    ]
  },
  'Rome': {
    city: 'Rome',
    country: 'Italy',
    localEmergency: '112 (Police) / 118 (Ambulance)',
    visaInfo: 'EU/Schengen visa-free. Schengen rules for others',
    vaccineRequirements: 'Standard EU travel vaccines',
    bestTimeToVisit: 'April-May and September-October',
    laws: [
      {
        category: 'Pickpocketing Risk',
        description: 'Very high in tourist areas and public transport. Use money belt',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Fountain Rules',
        description: 'Do not bathe in fountains. No eating by monuments. Fines up to €400',
        severity: 'warning',
        icon: '⛲'
      },
      {
        category: 'Church Dress Code',
        description: 'Cover shoulders, knees, and midriff. Women: head covering optional',
        severity: 'warning',
        icon: '⛪'
      },
      {
        category: 'Parking',
        description: 'Much of central Rome is ZTL (Limited Traffic Zone). Check before driving',
        severity: 'warning',
        icon: '🚗'
      },
      {
        category: 'Street Food',
        description: 'Street food is safe. Avoid tourist traps; look for local crowds',
        severity: 'info',
        icon: '🍕'
      }
    ]
  },
  'Istanbul': {
    city: 'Istanbul',
    country: 'Turkey',
    localEmergency: '112 (Emergency) / 155 (Police)',
    visaInfo: 'Visa-free for EU, US, many other nationalities (30-90 days)',
    vaccineRequirements: 'Routine vaccines recommended',
    bestTimeToVisit: 'April-May and September-October',
    laws: [
      {
        category: 'Mosque Etiquette',
        description: 'Remove shoes before entering. Women: cover hair and legs',
        severity: 'critical',
        icon: '🕌'
      },
      {
        category: 'Bargaining Culture',
        description: 'Expected in bazaars. Start at 40-50% of asking price. It\'s part of tradition',
        severity: 'info',
        icon: '💰'
      },
      {
        category: 'Photography Rules',
        description: 'Ask permission before photographing people. Some mosques prohibit photography',
        severity: 'warning',
        icon: '📸'
      },
      {
        category: 'Street Scams',
        description: 'Avoid unofficial money changers. Use banks or ATMs. Watch drinks carefully',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Ramadan Rules',
        description: 'During Ramadan, eating in public is disrespectful. Many restaurants closed',
        severity: 'warning',
        icon: '🌙'
      }
    ]
  },
  'Singapore': {
    city: 'Singapore',
    country: 'Singapore',
    localEmergency: '999 (Police) / 995 (Ambulance)',
    visaInfo: 'Visa-free for most nationalities (14-90 days)',
    vaccineRequirements: 'Routine vaccines, yellow fever for some cases',
    bestTimeToVisit: 'February-March and September-October (cooler months)',
    laws: [
      {
        category: 'Strict Laws Enforcement',
        description: 'Strict penalties for littering, jaywalking, chewing gum in public. Fines are high',
        severity: 'critical',
        icon: '⚖️'
      },
      {
        category: 'Drug Laws',
        description: 'Very severe penalties for drug possession. Death penalty for trafficking',
        severity: 'critical',
        icon: '🚫'
      },
      {
        category: 'Dress Code',
        description: 'Generally casual acceptable. Temples and mosques: cover shoulders and knees',
        severity: 'info',
        icon: '👕'
      },
      {
        category: 'Public Transport Rules',
        description: 'Eating/drinking prohibited in MRT. Priority seats for elderly/pregnant women',
        severity: 'warning',
        icon: '🚇'
      },
      {
        category: 'Caning Punishment',
        description: 'Vandalism and some crimes result in caning. Take all laws seriously',
        severity: 'critical',
        icon: '⚠️'
      }
    ]
  },
  'Venice': {
    city: 'Venice',
    country: 'Italy',
    localEmergency: '112 (Police) / 118 (Ambulance)',
    visaInfo: 'EU/Schengen citizens visa-free. Schengen rules for others (90 days)',
    vaccineRequirements: 'Standard EU vaccines',
    bestTimeToVisit: 'April-May and September-November',
    laws: [
      {
        category: 'Canal Navigation',
        description: 'Only gondolas and water buses in canals. Walking on gondolas prohibited',
        severity: 'warning',
        icon: '🛶'
      },
      {
        category: 'Water Safety',
        description: 'Canal water is polluted. Do not bathe. Respect marked swimming areas',
        severity: 'critical',
        icon: '💧'
      },
      {
        category: 'High Water Risk',
        description: 'Flooding occurs November-March. Check water levels before visiting',
        severity: 'warning',
        icon: '🌊'
      },
      {
        category: 'Church Rules',
        description: 'Cover shoulders and knees. Remove hats. Respect services/prayer times',
        severity: 'warning',
        icon: '⛪'
      },
      {
        category: 'Picnic Restrictions',
        description: 'Eating in public spaces may incur fines. Use designated areas',
        severity: 'warning',
        icon: '🍴'
      }
    ]
  },
  'Vienna': {
    city: 'Vienna',
    country: 'Austria',
    localEmergency: '133 (Police) / 144 (Ambulance)',
    visaInfo: 'EU/EEA visa-free. Schengen rules for others',
    vaccineRequirements: 'Routine vaccines recommended',
    bestTimeToVisit: 'May-June and September-October',
    laws: [
      {
        category: 'Public Transport Rules',
        description: 'Buy tickets before boarding. Fare evasion results in fines (€100)',
        severity: 'warning',
        icon: '🚌'
      },
      {
        category: 'Coffee Culture',
        description: 'Coffee service time is slow - enjoy the experience. Not rushing expected',
        severity: 'info',
        icon: '☕'
      },
      {
        category: 'Stag Nights',
        description: 'Stag/hen nights banned in city center during certain hours',
        severity: 'info',
        icon: '🍻'
      },
      {
        category: 'Smoking Laws',
        description: 'Smoking banned in restaurants and most public places',
        severity: 'warning',
        icon: '🚭'
      },
      {
        category: 'Opera House Etiquette',
        description: 'Formal dress expected at evening performances. Applauding only after final bow',
        severity: 'info',
        icon: '🎭'
      }
    ]
  },
  'Prague': {
    city: 'Prague',
    country: 'Czech Republic',
    localEmergency: '112 (Police) / 155 (Ambulance)',
    visaInfo: 'EU/EEA visa-free. Schengen rules for non-EU (90 days)',
    vaccineRequirements: 'Routine vaccines recommended',
    bestTimeToVisit: 'April-May and September-October',
    laws: [
      {
        category: 'Pickpocketing',
        description: 'Very common on trams and in tourist areas. Keep valuables hidden',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Taxi Scams',
        description: 'Use official taxis or Uber. Agree price before getting in unmarked cabs',
        severity: 'critical',
        icon: '🚕'
      },
      {
        category: 'Bar Etiquette',
        description: 'Beer is cheaper than water. Always settle bills in cash if possible',
        severity: 'info',
        icon: '🍺'
      },
      {
        category: 'Charles Bridge',
        description: 'Extremely crowded. Watchfor pickpockets. Early morning visits recommended',
        severity: 'warning',
        icon: '🌉'
      },
      {
        category: 'Nightclub Risks',
        description: 'Watch drinks carefully. Some clubs have reputation for overcharging foreigners',
        severity: 'warning',
        icon: '🎉'
      }
    ]
  },
  'Seoul': {
    city: 'Seoul',
    country: 'South Korea',
    localEmergency: '112 (Police) / 119 (Ambulance)',
    visaInfo: 'Visa-free for many nationalities (30-180 days)',
    vaccineRequirements: 'Routine vaccines, Japanese encephalitis consideration',
    bestTimeToVisit: 'April-May and September-October',
    laws: [
      {
        category: 'Temple Etiquette',
        description: 'Remove shoes. Bow respectfully to Buddhist monks. No photography during prayers',
        severity: 'warning',
        icon: '🏯'
      },
      {
        category: 'Taxi System',
        description: 'Only ride official taxis (color-coded). Uber is not available',
        severity: 'warning',
        icon: '🚕'
      },
      {
        category: 'Alcohol Culture',
        description: 'Drinking heavily is normal. Drinking laws are relaxed but avoid public drunkenness',
        severity: 'info',
        icon: '🍺'
      },
      {
        category: 'Plastic Surgery Tourism',
        description: 'Popular but research clinics carefully. Not all meet international standards',
        severity: 'warning',
        icon: '⚕️'
      },
      {
        category: 'North Korea',
        description: 'Do not make jokes about North Korea or Kim family. Serious offense',
        severity: 'critical',
        icon: '🚫'
      }
    ]
  },
  'Moscow': {
    city: 'Moscow',
    country: 'Russia',
    localEmergency: '112 (Police) / 103 (Ambulance)',
    visaInfo: 'Visa required for most nationalities',
    vaccineRequirements: 'Routine vaccines recommended',
    bestTimeToVisit: 'May-June and September-October',
    laws: [
      {
        category: 'Photography Restrictions',
        description: 'No photography of military, police, government buildings. Borders check strictly',
        severity: 'critical',
        icon: '📸'
      },
      {
        category: 'Visa Compliance',
        description: 'Always carry passport. Visa violations result in deportation and fines',
        severity: 'critical',
        icon: '🛂'
      },
      {
        category: 'Registration',
        description: 'Tourists must register with authorities within 3 days of arrival',
        severity: 'warning',
        icon: '📝'
      },
      {
        category: 'Political Speech',
        description: 'Avoid criticism of government, Putin, or military operations. Serious consequences',
        severity: 'critical',
        icon: '🚫'
      },
      {
        category: 'LGBTQ Rights',
        description: 'Limited acceptance. Public displays of affection may attract negative attention',
        severity: 'warning',
        icon: '🏳️‍🌈'
      }
    ]
  },
  'Miami': {
    city: 'Miami',
    country: 'United States',
    localEmergency: '911',
    visaInfo: 'US visa requirements apply. Check visa-free programs',
    vaccineRequirements: 'No mandatory vaccines for US citizens',
    bestTimeToVisit: 'November-March (dry season)',
    laws: [
      {
        category: 'Hurricane Season',
        description: 'June-November is hurricane season. Travel insurance highly recommended',
        severity: 'warning',
        icon: '🌀'
      },
      {
        category: 'Beach Safety',
        description: 'Beach theft is common. Don\'t leave valuables unattended. Use lockers',
        severity: 'critical',
        icon: '⚠️'
      },
      {
        category: 'Traffic Rules',
        description: 'Speed cameras everywhere. Right turn on red light allowed after full stop',
        severity: 'warning',
        icon: '🚗'
      },
      {
        category: 'Drink Driving',
        description: 'Zero tolerance. Legal limit is 0.08%. Penalties are severe',
        severity: 'critical',
        icon: '🍷'
      },
      {
        category: 'Nightlife Safety',
        description: 'South Beach areas can be unsafe at night. Travel in groups. Use official taxis',
        severity: 'warning',
        icon: '🌙'
      }
    ]
  },
  'Melbourne': {
    city: 'Melbourne',
    country: 'Australia',
    localEmergency: '000 (Emergency)',
    visaInfo: 'Visa required for non-Australians',
    vaccineRequirements: 'Routine vaccines. Yellow fever for some arrivals',
    bestTimeToVisit: 'September-November and March-May (mild weather)',
    laws: [
      {
        category: 'Dangerous Wildlife',
        description: 'Some spiders and snakes are deadly. Don\'t touch unfamiliar creatures',
        severity: 'warning',
        icon: '🕷️'
      },
      {
        category: 'Swimming Safety',
        description: 'Only swim in designated areas. Watch for deadly swimmers (Box jellyfish)',
        severity: 'warning',
        icon: '🏊'
      },
      {
        category: 'Anti-Social Behavior',
        description: 'King\'s Cross known for crime. Avoid at night. Don\'t accept drink from strangers',
        severity: 'warning',
        icon: '⚠️'
      },
      {
        category: 'Sunburn Risk',
        description: 'UV index is extreme. Always use SPF 50+ sunscreen',
        severity: 'warning',
        icon: '☀️'
      },
      {
        category: 'Driving Rules',
        description: 'Drive on the left. Seatbelts mandatory. Speed cameras common',
        severity: 'info',
        icon: '🚗'
      }
    ]
  }
};

export function getCityLaws(city: string): CityLaws | null {
  return TRAVEL_LAWS_DATABASE[city] || null;
}

export function getAllCities(): string[] {
  return Object.keys(TRAVEL_LAWS_DATABASE);
}

export function getLawsByCategory(city: string, category: string): TravelLaw | null {
  const cityLaws = TRAVEL_LAWS_DATABASE[city];
  if (!cityLaws) return null;
  return cityLaws.laws.find(law => law.category === category) || null;
}
