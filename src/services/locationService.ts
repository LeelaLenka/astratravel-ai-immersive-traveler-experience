import { DESTINATIONS } from '../constants';

export interface LocationOption {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number];
}

export function searchLocations(query: string): LocationOption[] {
  if (!query.trim()) {
    return DESTINATIONS.map(d => ({
      id: d.id,
      name: d.name,
      country: d.country,
      coordinates: d.coordinates || [0, 0],
    }));
  }

  const lowerQuery = query.toLowerCase();

  return DESTINATIONS.filter(
    (dest) =>
      dest.name.toLowerCase().includes(lowerQuery) ||
      dest.country.toLowerCase().includes(lowerQuery) ||
      dest.description?.toLowerCase().includes(lowerQuery)
  ).map(d => ({
    id: d.id,
    name: d.name,
    country: d.country,
    coordinates: d.coordinates || [0, 0],
  }));
}

export function getLocationById(id: string) {
  return DESTINATIONS.find(d => d.id === id);
}

export async function getUserLocation(): Promise<[number, number] | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve([position.coords.latitude, position.coords.longitude]);
      },
      (err) => {
        console.error('Geolocation error:', err);
        resolve(null);
      },
      { timeout: 5000 }
    );
  });
}
