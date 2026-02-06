import React, { useState, useEffect } from 'react';
import { getNearbyPlaces } from '../services/attractionsService';

interface NearbyPlacesProps {
  city: string;
  country: string;
}

const NearbyPlaces: React.FC<NearbyPlacesProps> = ({ city, country }) => {
  const [nearbyPlaces, setNearbyPlaces] = useState<{ city: string; country: string; distance: string }[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNearby = async () => {
      setLoading(true);
      const places = await getNearbyPlaces(city, country);
      setNearbyPlaces(places);
      setLoading(false);
    };

    fetchNearby();
  }, [city, country]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (nearbyPlaces.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500">
        <p className="text-sm">No nearby places data available</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border border-cyan-200 mb-4">
        <p className="text-sm font-bold text-blue-900 mb-3 flex items-center gap-2">
          <span>🗺️</span> Day Trip Ideas & Nearby Destinations
        </p>
        <div className="space-y-2">
          {nearbyPlaces.map((place, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 bg-white rounded-lg border border-cyan-100 hover:border-cyan-300 transition-colors cursor-pointer group">
              <div className="flex-1">
                <p className="font-semibold text-slate-900">{place.city}</p>
                <p className="text-xs text-slate-500">{place.country}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-cyan-600 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 13l4 4L19 7"/>
                  </svg>
                  {place.distance}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-3 text-xs text-cyan-900 mt-4">
        <p className="font-semibold mb-1">💡 Trip Planning Tip</p>
        <p>
          These nearby destinations make perfect day trips or multi-day extensions. Consider visiting multiple places for a more immersive regional experience. Check local transport options for the best connections.
        </p>
      </div>
    </div>
  );
};

export default NearbyPlaces;
