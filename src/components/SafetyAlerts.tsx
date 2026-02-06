
import React from 'react';
import { TravelAlert } from '../types';
import { ICONS } from '../constants';

interface SafetyAlertsProps {
  alerts: TravelAlert[];
}

const SafetyAlerts: React.FC<SafetyAlertsProps> = ({ alerts }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold flex items-center gap-2 px-2">
        <ICONS.Alert />
        Real-Time Safety Intelligence
      </h3>
      <div className="grid gap-3">
        {alerts.length > 0 ? (
          alerts.map((alert) => (
            <div 
              key={alert.id} 
              className={`p-4 rounded-xl border-l-4 transition-all hover:scale-[1.02] shadow-sm ${
                alert.severity === 'high' 
                  ? 'bg-red-50 border-red-500 text-red-900' 
                  : alert.severity === 'medium'
                  ? 'bg-orange-50 border-orange-500 text-orange-900'
                  : 'bg-blue-50 border-blue-500 text-blue-900'
              }`}
            >
              <div className="flex justify-between items-start mb-1">
                <span className="font-bold text-sm uppercase tracking-wider">{alert.type}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                  alert.severity === 'high' ? 'border-red-200 bg-red-100' : 'border-blue-200 bg-blue-100'
                }`}>
                  {alert.severity.toUpperCase()}
                </span>
              </div>
              <p className="font-semibold mb-1">{alert.title}</p>
              <p className="text-sm opacity-90">{alert.message}</p>
            </div>
          ))
        ) : (
          <div className="p-8 text-center bg-slate-100 rounded-xl border border-dashed border-slate-300">
            <p className="text-slate-500 italic">Analyzing current area for threats...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SafetyAlerts;
