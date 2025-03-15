import { useState } from "react";
import axios from "axios";

const Weather = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/weather/${city}`);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Weather Updates</h2>
      <input
        type="text"
        placeholder="Enter City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-2 border rounded"
      />
      <button onClick={fetchWeather} className="ml-2 p-2 bg-blue-500 text-white rounded">
        Get Weather
      </button>
      {weather && (
        <div className="mt-4">
          <p><strong>{weather.name}</strong></p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
