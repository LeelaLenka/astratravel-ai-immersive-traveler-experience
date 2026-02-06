import { API_CONFIG } from '../constants';

export interface WeatherData {
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  feelsLike: number;
  icon: string;
}

export async function getWeatherByCoordinates(
  lat: number,
  lon: number
): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_CONFIG.WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Weather API error');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      icon: data.weather[0].icon,
    };
  } catch (err) {
    console.error('Failed to fetch weather:', err);
    return {
      temperature: 22,
      condition: 'Clear',
      humidity: 65,
      windSpeed: 10,
      feelsLike: 22,
      icon: '01d',
    };
  }
}

export async function getWeatherByCity(city: string): Promise<WeatherData> {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_CONFIG.WEATHER_API_KEY}`
    );

    if (!response.ok) {
      throw new Error('Weather API error');
    }

    const data = await response.json();

    return {
      temperature: Math.round(data.main.temp),
      condition: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      feelsLike: Math.round(data.main.feels_like),
      icon: data.weather[0].icon,
    };
  } catch (err) {
    console.error('Failed to fetch weather:', err);
    return {
      temperature: 22,
      condition: 'Clear',
      humidity: 65,
      windSpeed: 10,
      feelsLike: 22,
      icon: '01d',
    };
  }
}
