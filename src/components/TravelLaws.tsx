import React, { useState, useEffect } from 'react';
import { getCityLaws, CityLaws } from '../services/travelLawsService';

interface TravelLawsProps {
  city: string;
}

const TravelLaws: React.FC<TravelLawsProps> = ({ city }) => {
  const [laws, setLaws] = useState<CityLaws | null>(null);
  const [loading, setLoading] = useState(false);
  const [expandedLaw, setExpandedLaw] = useState<string | null>(null);

  useEffect(() => {
    const fetchLaws = async () => {
      setLoading(true);
      const data = getCityLaws(city);
      setLaws(data);
      setLoading(false);
    };

    fetchLaws();
  }, [city]);

  if (loading) {
    return (
      <div className="space-y-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-12 bg-gradient-to-r from-amber-200 to-amber-100 rounded-lg animate-pulse" />
        ))}
      </div>
    );
  }

  if (!laws) {
    return (
      <div className="p-4 text-center text-slate-500">
        <p className="text-sm">No travel laws data available</p>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'border-red-200 bg-red-50';
      case 'warning':
        return 'border-amber-200 bg-amber-50';
      default:
        return 'border-blue-200 bg-blue-50';
    }
  };

  const getSeverityBadgeColor = (severity: string) => {
    switch (severity) {
      case 'critical':
        return 'bg-red-100 text-red-700';
      case 'warning':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-blue-100 text-blue-700';
    }
  };

  return (
    <div className="space-y-3">
      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg border border-indigo-200 mb-4">
        <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wide mb-2">
          Essential Travel Information
        </h4>
        <div className="space-y-2 text-xs">
          {laws.visaInfo && (
            <div className="flex items-start gap-2">
              <span className="text-lg">🛂</span>
              <div>
                <p className="font-semibold text-slate-700">Visa Information</p>
                <p className="text-slate-600">{laws.visaInfo}</p>
              </div>
            </div>
          )}
          {laws.localEmergency && (
            <div className="flex items-start gap-2">
              <span className="text-lg">🚨</span>
              <div>
                <p className="font-semibold text-slate-700">Emergency Numbers</p>
                <p className="text-slate-600 font-mono">{laws.localEmergency}</p>
              </div>
            </div>
          )}
          {laws.bestTimeToVisit && (
            <div className="flex items-start gap-2">
              <span className="text-lg">📅</span>
              <div>
                <p className="font-semibold text-slate-700">Best Time to Visit</p>
                <p className="text-slate-600">{laws.bestTimeToVisit}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <h4 className="text-sm font-bold text-amber-700 uppercase tracking-wide">
        ⚖️ Travel Laws & Rules
      </h4>

      <div className="space-y-2">
        {laws.laws.map((law, index) => (
          <div
            key={index}
            className={`border rounded-lg overflow-hidden transition-all ${getSeverityColor(
              law.severity
            )}`}
          >
            <button
              onClick={() =>
                setExpandedLaw(expandedLaw === law.category ? null : law.category)
              }
              className="w-full px-4 py-3 flex items-center justify-between hover:opacity-80 transition-opacity"
            >
              <div className="flex items-center gap-3 text-left flex-1">
                <span className="text-xl">{law.icon}</span>
                <div className="flex-1">
                  <p className="font-semibold text-sm text-slate-900">
                    {law.category}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-bold px-2 py-1 rounded ${getSeverityBadgeColor(
                    law.severity
                  )}`}
                >
                  {law.severity.toUpperCase()}
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
                    expandedLaw === law.category ? 'rotate-180' : ''
                  }`}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </button>

            {expandedLaw === law.category && (
              <div className="px-4 py-3 border-t border-current border-opacity-20 bg-white bg-opacity-50">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {law.description}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-xs text-yellow-900 mt-4">
        <p className="font-semibold mb-1">💡 Pro Tip</p>
        <p>
          Always check the official government travel advisory before your trip.
          Rules can change. Download offline maps and carry hotel address in local language.
        </p>
      </div>
    </div>
  );
};

export default TravelLaws;
