import React from 'react';
import { Cloud, Sun, Wind, Droplets } from 'lucide-react';
const weatherData = {
  current: {
    temp: 22,
    condition: 'Partly Cloudy',
    humidity: 65,
    windSpeed: 12,
  },
  forecast: [
    { day: 'Tomorrow', high: 24, low: 18, condition: 'Sunny' },
    { day: 'Wednesday', high: 23, low: 17, condition: 'Cloudy' },
    { day: 'Thursday', high: 21, low: 16, condition: 'Rain' },
  ],
};
const Weather = () => {
  return (
    <div className="py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          Weather Forecast
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Stay updated with real-time weather conditions and forecasts
        </p>
      </div>
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-6 md:mb-0">
            <Sun className="w-16 h-16 text-primary mr-6" />
            <div>
              <h2 className="text-4xl font-bold mb-2">{weatherData.current.temp}°C</h2>
              <p className="text-text-secondary">{weatherData.current.condition}</p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex items-center">
              <Droplets className="w-6 h-6 text-primary mr-2" />
              <div>
                <p className="text-sm text-text-secondary">Humidity</p>
                <p className="font-bold">{weatherData.current.humidity}%</p>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="w-6 h-6 text-primary mr-2" />
              <div>
                <p className="text-sm text-text-secondary">Wind Speed</p>
                <p className="font-bold">{weatherData.current.windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {weatherData.forecast.map((day, index) => (
          <div key={index} className="card">
            <h3 className="text-lg font-bold mb-4">{day.day}</h3>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold mb-1">{day.high}°C</p>
                <p className="text-text-secondary text-sm">Low: {day.low}°C</p>
              </div>
              <Cloud className="w-10 h-10 text-primary" />
            </div>
            <p className="mt-4 text-text-secondary">{day.condition}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Weather;