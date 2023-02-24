import React, { useState } from 'react';
import './Weather.css';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c56387a48d04baac0d5143e20f54338e`);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div className="weather-container">
      <h1>Weather App</h1>
      <div className="form-container">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter City" />
        <button onClick={getWeatherData}>Get Weather</button>
      </div>
      {weatherData && (
        <div className="weather-data-container">
          <h2>{weatherData.name}</h2>
          <div className="temperature-container">
            <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
            <p>Feels Like: {Math.round(weatherData.main.feels_like - 273.15)}°C</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>
          <div className="weather-description-container">
            <p>{weatherData.weather[0].main}</p>
            <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt="Weather Icon" />
            <p>{weatherData.weather[0].description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
