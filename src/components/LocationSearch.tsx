import React, { useState, useEffect, useRef } from 'react';
import { searchLocations, LocationOption } from '../services/locationService';

interface LocationSearchProps {
  onSelect: (id: string) => void;
  onDetailsOpen?: (id: string) => void;
  selectedId?: string | null;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ onSelect, onDetailsOpen, selectedId }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<LocationOption[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const results = searchLocations(searchQuery);
    setSuggestions(results);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (id: string) => {
    onSelect(id);
    onDetailsOpen?.(id);
    setSearchQuery('');
    setIsOpen(false);
  };

  return (
    <div ref={searchRef} className="relative w-full mb-6">
      <div className="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Search destinations..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
        />
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-xl shadow-xl z-50 max-h-64 overflow-y-auto">
          {suggestions.map((location) => (
            <button
              key={location.id}
              onClick={() => handleSelect(location.id)}
              className={`w-full px-4 py-3 text-left transition-colors hover:bg-indigo-50 border-b border-slate-100 last:border-b-0 flex justify-between items-start group ${
                selectedId === location.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div>
                <p className="font-semibold text-sm text-slate-900">{location.name}</p>
                <p className="text-xs text-slate-500">{location.country}</p>
              </div>
              <div className="flex items-center gap-2">
                {selectedId === location.id && (
                  <span className="text-indigo-600">✓</span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationSearch;
