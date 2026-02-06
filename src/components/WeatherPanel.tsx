import React, { useEffect, useState } from 'react';
import { getWeatherByCity } from '../services/weatherService';
import { WeatherData } from '../services/weatherService';

interface WeatherPanelProps {
  city: string;
}

const WeatherPanel: React.FC<WeatherPanelProps> = ({ city }) => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      const data = await getWeatherByCity(city);
      setWeather(data);
      setLoading(false);
    };

    fetchWeather();
  }, [city]);

  if (loading || !weather) {
    return (
      <div className="animate-pulse">
        <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 bg-slate-200 rounded w-1/2"></div>
      </div>
    );
  }

  const getWeatherEmoji = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'clear':
        return '☀️';
      case 'clouds':
        return '☁️';
      case 'rain':
      case 'drizzle':
        return '🌧️';
      case 'thunderstorm':
        return '⛈️';
      case 'snow':
        return '❄️';
      case 'mist':
      case 'smoke':
      case 'haze':
      case 'dust':
      case 'fog':
      case 'sand':
      case 'ash':
      case 'squall':
      case 'tornado':
        return '🌫️';
      default:
        return '🌡️';
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-sm text-slate-500">Weather</span>
        <span className="text-lg font-bold flex items-center gap-2">
          {getWeatherEmoji(weather.condition)} {weather.temperature}°C
        </span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Condition</span>
        <span className="font-semibold text-slate-700">{weather.condition}</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Feels Like</span>
        <span className="font-semibold text-slate-700">{weather.feelsLike}°C</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Humidity</span>
        <span className="font-semibold text-slate-700">{weather.humidity}%</span>
      </div>
      <div className="flex items-center justify-between text-sm">
        <span className="text-slate-500">Wind Speed</span>
        <span className="font-semibold text-slate-700">{weather.windSpeed} m/s</span>
      </div>
    </div>
  );
};

export default WeatherPanel;
