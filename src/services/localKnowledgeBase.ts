// Local travel knowledge base for offline/fallback responses
export const travelKnowledgeBase: { [key: string]: string } = {
  'best place to work': 'The best places to work while traveling:\n- Coffee shops with WiFi: Tokyo, Seoul, Barcelona, Vienna\n- Co-working spaces: Bangkok, Lisbon, Singapore\n- Libraries: Paris, London, Prague\n- Beach cafes: Santorini, Bali, Miami\nTips: Check time zones, wifi speed, power outlets!',
  
  'work destination': 'Digital nomad destinations:\nASIA: Bangkok, Chiang Mai, Bali, Ho Chi Minh\nEUROPE: Lisbon, Barcelona, Prague, Berlin\nAMERICAS: Mexico City, Buenos Aires\nCheck visa requirements for remote work!',

  'safety': 'General safety tips:\n- Trust instincts, avoid unsafe places\n- Save emergency numbers\n- Use ATMs in busy areas\n- Share itinerary\n- Check travel advisories\n- Respect local customs',

  'scams': 'Common travel scams:\n- Fake taxis: Use apps (Uber, Grab)\n- Overcharging: Agree on prices first\n- Distraction theft: Watch belongings\n- Fake officials: Ask for ID\n- Currency tricks: Know rates',

  'budget': 'Budget travel by destination:\nCHEAP (under $30/day): Southeast Asia, Eastern Europe\nMODERATE ($30-60/day): Southern Europe, Mexico\nEXPENSIVE ($60+/day): Western Europe, Japan\nSave: Eat local, public transport, hostels!',

  'cost': 'Daily costs by destination:\nJAPAN: $60-100/day\nGREECE: $50-80/day\nMOROCCO: $25-40/day\nSPAIN: $40-60/day\nTHAILAND: $20-35/day\nUK/AUSTRALIA: $80-150/day',

  'food': 'Food travel tips:\n- Try local street food\n- Eat where locals eat\n- Eat authentic dishes\n- Check drinking water\n- Ask spice level\n- Take digestive aids if needed',

  'restaurants': 'Finding good restaurants:\n- Ask locals\n- Check Google Maps reviews\n- Eat during busy times\n- Avoid tourist trap areas\n- Eat lunch (cheaper)',

  'transport': 'Getting around:\n- Long distance: Buses, trains, flights\n- Local: Taxis, buses, metro\n- Walking: Free exploration\n- Use Google Maps offline!',

  'getting around': 'Transportation options:\n- Public Transport: Reliable, cheapest\n- Ride Apps: Grab, Uber, Lyft\n- Buses: Scheduled, affordable\n- Walking: Free exploration',

  'accommodation': 'Where to stay:\n- HOTELS: Safe, clean (expensive)\n- HOSTELS: Budget, social (cheapest)\n- AIRBNB: Local, middle price\n- GUESTHOUSES: Homey, cheap',

  'hotel': 'Hotel tips:\n- Book on Booking.com, Expedia\n- Read reviews\n- Check WiFi, AC, hot water\n- Location matters\n- Negotiate long stays\n- Check cancellation policy',

  'attractions': 'Finding activities:\n- Use TripAdvisor, Google Maps\n- Book popular spots early\n- Join group tours\n- Free walking tours\n- Check museum discount days',

  'things to do': 'Activities in destinations:\n- Historical sites & museums\n- Nature hikes\n- Food tours\n- Art galleries\n- Cultural shows\n- Photography spots',

  'visa': 'Visa information:\n- Check entry requirements\n- Most: 30-90 day visas\n- Get travel insurance\n- Some offer digital nomad visas\n- Passport valid 6+ months',

  'documents': 'Essential documents:\n- Passport (6+ months valid)\n- Credit cards (Visa/Mastercard)\n- Insurance documents\n- Copies of important docs\n- Vaccination records\n- Cloud backup',

  'health': 'Travel health tips:\n- Vaccinations 4-6 weeks before\n- Travel insurance with medical\n- Bottled water in risky areas\n- First aid kit\n- Mask on long flights\n- Find hospitals in advance',

  'covid': 'Current travel health:\n- Check entry requirements\n- Vaccination may be required\n- Practice good hygiene\n- Mask on transport\n- Insurance essential',

  'best time': 'Best time to visit:\n- Avoid monsoon seasons\n- Avoid extreme temperatures\n- Spring & fall often ideal\n- Check local festivals\n- Destination specific',

  'weather': 'Check climate:\n- Temperature ranges\n- Rainy/dry seasons\n- Typhoon seasons\n- UV intensity\n- Humidity levels',

  'culture': 'Respecting local culture:\n- Learn basic greetings\n- Ask before photographing\n- Dress appropriately\n- Don\'t touch sacred objects\n- Learn customs\n- Be genuinely interested',

  'etiquette': 'General etiquette tips:\n- Respect personal space\n- Be on time\n- Use utensils appropriately\n- No phones at dinner\n- Avoid politics\n- Ask before entering homes',

  'language': 'Language tips:\n- Learn basic phrases\n- Use translation apps\n- Learn pronunciations\n- Use offline phrasebooks\n- Take short courses\n- Locals appreciate effort!',

  'plan': 'Trip planning checklist:\n- Decide dates & duration\n- Book flights early\n- Reserve accommodations\n- Check visa requirements\n- Get vaccinations\n- Research attractions\n- Set daily budget\n- Tell someone itinerary',

  'itinerary': 'Creating an itinerary:\n- 3-4 days per city minimum\n- Account for travel\n- Don\'t over-schedule\n- Group attractions\n- Include rest days\n- Build flexibility',

  'help': 'I can help with:\n- Destination info\n- Accommodation\n- Budget planning\n- Food & restaurants\n- Safety & scams\n- Attractions\n- Transportation\n- Packing & visas',

  'travel': 'Travel planning help for:\n- Destinations\n- Safety tips\n- Budget planning\n- Where to stay\n- Getting around\n- Food tips\n- What to do\n- Packing',

  'recommend': 'Popular destinations:\nBEACH: Santorini, Bali, Maldives\nADVENTURE: Peru, Iceland, Nepal\nHISTORY: Rome, Athens, Cairo, Beijing\nCITY: Tokyo, NYC, Barcelona, Paris\nNATURE: Costa Rica, Switzerland',

  'default': 'I\'m Astra, your AI travel expert!\n\nI can help you with:\n- Destination planning\n- Safety tips\n- Budget planning\n- Accommodation advice\n- Food recommendations\n- Transportation\n- Attractions & activities\n- Cultural etiquette\n- Language tips\n\nWhat would you like to know?'
};

export function getLocalTravelAdvice(query: string, destinationName?: string): string {
  const queryLower = query.toLowerCase();

  // Try exact matches first
  for (const [key, response] of Object.entries(travelKnowledgeBase)) {
    if (queryLower.includes(key)) {
      return response;
    }
  }

  // Try partial word matches
  const words = queryLower.split(/\s+/);
  for (const word of words) {
    for (const [key, response] of Object.entries(travelKnowledgeBase)) {
      if (word === key || (key.length > 3 && key.includes(word))) {
        return response;
      }
    }
  }

  // Destination-specific fallback
  if (destinationName) {
    return `I'd be happy to help with ${destinationName}!\n\nYou can ask me about:\n- Budget & costs\n- Safety & scams\n- Where to stay\n- Food & restaurants\n- Attractions & activities\n- Getting around\n- Local culture\n- Best time to visit\n\nWhat do you want to know?`;
  }

  // Default fallback
  return travelKnowledgeBase.default;
}
