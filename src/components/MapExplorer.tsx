
import React, { useEffect, useRef, useState } from 'react';
import { Destination } from '../types';
import L from 'leaflet';
import { getAttractionsByCity } from '../services/attractionsService';

interface MapExplorerProps {
  destinations: Destination[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onHover?: (id: string | null) => void;
}

interface HoverInfo {
  destId: string;
  x: number;
  y: number;
}

const MapExplorer: React.FC<MapExplorerProps> = ({ destinations, activeId, onSelect, onHover }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const [hoverInfo, setHoverInfo] = useState<HoverInfo | null>(null);
  const [hoverAttractions, setHoverAttractions] = useState<string[]>([]);

  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current, {
        center: [20, 0],
        zoom: 2,
        zoomControl: false,
        attributionControl: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(mapRef.current);

      destinations.forEach(dest => {
        const marker = L.marker(dest.coordinates, {
          icon: L.divIcon({
            className: 'custom-div-icon',
            html: `<div class="w-8 h-8 rounded-full border-4 border-white shadow-lg overflow-hidden ${activeId === dest.id ? 'bg-indigo-600 scale-125' : 'bg-blue-500'} flex items-center justify-center text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 32]
          })
        }).addTo(mapRef.current!)
          .on('click', () => onSelect(dest.id))
          .on('mouseover', async (e) => {
            const markerElement = e.target.getElement() as HTMLElement;
            const rect = markerElement.getBoundingClientRect();
            const containerRect = mapContainerRef.current?.getBoundingClientRect();
            
            if (containerRect) {
              setHoverInfo({
                destId: dest.id,
                x: rect.left - containerRect.left,
                y: rect.top - containerRect.top
              });

              // Fetch attractions for this city
              const attractions = await getAttractionsByCity(dest.name);
              const firstThreeAttractions = attractions
                .flatMap(cat => cat.attractions)
                .slice(0, 3)
                .map(attr => attr.name);
              setHoverAttractions(firstThreeAttractions);
            }
            onHover?.(dest.id);
          })
          .on('mouseout', () => {
            setHoverInfo(null);
            setHoverAttractions([]);
            onHover?.(null);
          });
        
        markersRef.current[dest.id] = marker;
      });
    }

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [activeId, destinations, onHover]);

  useEffect(() => {
    if (activeId && mapRef.current) {
      const dest = destinations.find(d => d.id === activeId);
      if (dest) {
        mapRef.current.flyTo(dest.coordinates, 8, { duration: 1.5 });
      }

      // Update marker styling
      Object.entries(markersRef.current).forEach(([id, marker]) => {
        const element = marker.getElement();
        if (element) {
          const div = element.querySelector('div');
          if (div) {
            if (id === activeId) {
              div.classList.add('bg-indigo-600', 'scale-125');
              div.classList.remove('bg-blue-500');
            } else {
              div.classList.remove('bg-indigo-600', 'scale-125');
              div.classList.add('bg-blue-500');
            }
          }
        }
      });
    }
  }, [activeId, destinations]);

  const hoveredDestination = destinations.find(d => d.id === hoverInfo?.destId);

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-inner bg-slate-200">
      <div ref={mapContainerRef} className="w-full h-full z-0" />
      
      <div className="absolute top-4 left-4 z-10 space-y-2">
        <div className="bg-white/80 backdrop-blur-md p-3 rounded-2xl shadow-lg border border-white/20">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Live Map View</h4>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold">Active Monitoring Enabled</span>
          </div>
        </div>
      </div>

      {/* Hover Tooltip */}
      {hoverInfo && hoveredDestination && (
        <div
          className="absolute z-20 bg-white rounded-xl shadow-2xl border border-slate-200 p-4 w-80 pointer-events-none animate-in fade-in zoom-in-50"
          style={{
            left: `${hoverInfo.x + 10}px`,
            top: `${hoverInfo.y - 20}px`,
            maxWidth: 'calc(100% - 20px)'
          }}
        >
          <div className="relative">
            <img
              src={hoveredDestination.imageUrl}
              alt={hoveredDestination.name}
              className="w-full h-32 object-cover rounded-lg mb-3"
            />
            <div className="absolute top-2 right-2 bg-indigo-600 text-white px-2 py-1 rounded-full text-xs font-bold">
              Safety: {hoveredDestination.safetyScore}/10
            </div>
          </div>

          <h5 className="font-bold text-lg text-slate-900 mb-1">
            {hoveredDestination.name}
          </h5>
          <p className="text-xs text-slate-500 mb-3">{hoveredDestination.country}</p>

          {hoverAttractions.length > 0 && (
            <div className="mb-3">
              <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wide mb-2">
                Top Attractions
              </p>
              <ul className="space-y-1">
                {hoverAttractions.map((attraction, idx) => (
                  <li key={idx} className="text-xs text-slate-700 flex items-start gap-2">
                    <span className="text-indigo-600 font-bold">•</span>
                    <span>{attraction}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {hoveredDestination.scamAlerts && hoveredDestination.scamAlerts.length > 0 && (
            <div className="bg-red-50 border border-red-200 rounded p-2 mb-3">
              <p className="text-xs font-semibold text-red-700 mb-1">⚠️ Scam Alerts</p>
              <p className="text-xs text-red-600">{hoveredDestination.scamAlerts[0]}</p>
            </div>
          )}

          <p className="text-xs text-slate-600 leading-relaxed">
            {hoveredDestination.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default MapExplorer;
