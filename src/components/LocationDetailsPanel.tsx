import React, { useState } from 'react';
import AttractionsList from './AttractionsList';
import TravelLaws from './TravelLaws';
import NearbyPlaces from './NearbyPlaces';
import { Destination } from '../types';

interface LocationDetailsPanelProps {
  destination: Destination;
  onClose: () => void;
  isVisible: boolean;
}

const LocationDetailsPanel: React.FC<LocationDetailsPanelProps> = ({
  destination,
  onClose,
  isVisible,
}) => {
  const [activeTab, setActiveTab] = useState<'attractions' | 'laws' | 'overview' | 'nearby'>(
    'overview'
  );

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-40 bg-black/50 flex items-end sm:items-center justify-center animate-in">
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:w-[600px] max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="relative h-64 bg-gradient-to-br from-indigo-600 to-indigo-800 overflow-hidden">
          <img
            src={destination.imageUrl}
            alt={destination.name}
            className="w-full h-full object-cover opacity-40 absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />

          <div className="absolute inset-x-0 top-4 flex items-center justify-between px-6">
            <h2 className="text-3xl font-black text-white">
              {destination.name}
            </h2>
            <button
              onClick={onClose}
              className="bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 px-6 pb-4 text-white">
            <p className="text-sm font-semibold mb-2">
              {destination.country}
            </p>
            <p className="text-xs leading-relaxed mb-4">
              {destination.description}
            </p>
            <div className="flex gap-3">
              <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur text-xs font-semibold">
                🛡️ Safety: {destination.safetyScore}/10
              </div>
              <div className="px-3 py-1 bg-white/20 rounded-full backdrop-blur text-xs font-semibold">
                📍 Coordinates ({destination.coordinates?.[0].toFixed(2) || 'N/A'},
                {destination.coordinates?.[1].toFixed(2) || 'N/A'})
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 px-6 pt-4 border-b border-slate-200 bg-white overflow-x-auto">
          {(['overview', 'nearby', 'attractions', 'laws'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-semibold text-sm border-b-2 transition-all whitespace-nowrap ${
                activeTab === tab
                  ? 'border-indigo-600 text-indigo-600'
                  : 'border-transparent text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              {destination.scamAlerts && destination.scamAlerts.length > 0 && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                    <span>⚠️</span> Common Scams to Avoid
                  </h4>
                  <ul className="space-y-1 text-sm text-red-800">
                    {destination.scamAlerts.map((scam, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span>•</span>
                        <span>{scam}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                  <span>ℹ️</span> Quick Facts
                </h4>
                <div className="space-y-2 text-sm text-blue-900">
                  <p>
                    <span className="font-semibold">Safety Score:</span>{' '}
                    {destination.safetyScore}/10
                  </p>
                  {destination.coordinates && (
                    <p>
                      <span className="font-semibold">Coordinates:</span>{' '}
                      {destination.coordinates[0].toFixed(4)},
                      {destination.coordinates[1].toFixed(4)}
                    </p>
                  )}
                  <p>
                    <span className="font-semibold">Timezone:</span> Check
                    online for current timezone
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'attractions' && (
            <AttractionsList city={destination.name} />
          )}

          {activeTab === 'laws' && <TravelLaws city={destination.name} />}

          {activeTab === 'nearby' && (
            <NearbyPlaces city={destination.name} country={destination.country} />
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-white">
          <button
            onClick={onClose}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationDetailsPanel;
