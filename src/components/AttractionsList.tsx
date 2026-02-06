import React, { useState, useEffect } from 'react';
import { getAttractionsByCity, AttractionCategory } from '../services/attractionsService';

interface AttractionsListProps {
  city: string;
}

const AttractionsList: React.FC<AttractionsListProps> = ({ city }) => {
  const [attractions, setAttractions] = useState<AttractionCategory[]>([]);
  const [loading, setLoading] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  useEffect(() => {
    const fetchAttractions = async () => {
      setLoading(true);
      const data = await getAttractionsByCity(city);
      setAttractions(data);
      if (data.length > 0) {
        setExpandedCategory(data[0].name);
      }
      setLoading(false);
    };

    fetchAttractions();
  }, [city]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-16 bg-gradient-to-r from-slate-200 to-slate-100 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (attractions.length === 0) {
    return (
      <div className="p-4 text-center text-slate-500">
        <p className="text-sm">No attractions data available for {city}</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wide mb-4">Popular Attractions</h4>
      {attractions.map((category) => (
        <div key={category.name} className="border border-slate-200 rounded-lg overflow-hidden">
          <button
            onClick={() =>
              setExpandedCategory(
                expandedCategory === category.name ? null : category.name
              )
            }
            className="w-full px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
          >
            <span className="font-semibold text-sm text-slate-700">
              {category.name}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform ${
                expandedCategory === category.name ? 'rotate-180' : ''
              }`}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {expandedCategory === category.name && (
            <div className="p-3 space-y-3">
              {category.attractions.map((attraction) => (
                <div
                  key={attraction.id}
                  className="p-3 bg-indigo-50 rounded-lg border border-indigo-100 hover:border-indigo-300 transition-all"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h5 className="font-semibold text-sm text-slate-900">
                      {attraction.name}
                    </h5>
                    <span className="text-xs font-bold bg-indigo-600 text-white px-2 py-1 rounded">
                      {attraction.rating}★
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 mb-2">{attraction.description}</p>

                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="1" />
                        <path d="M12 1v6m0 6v6" />
                        <path d="M4.22 4.22l4.24 4.24m-4.24 4.24l4.24 4.24M19.78 4.22l-4.24 4.24m4.24 4.24l-4.24 4.24" />
                      </svg>
                      <span>{attraction.distance} km</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <span>{attraction.visitTime}</span>
                    </div>
                    {attraction.entryFee && (
                      <div className="flex items-center gap-1">
                        <span>💰</span>
                        <span>{attraction.entryFee}</span>
                      </div>
                    )}
                    {attraction.openHours && (
                      <div className="flex items-center gap-1">
                        <span>🕐</span>
                        <span className="truncate">{attraction.openHours}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AttractionsList;
