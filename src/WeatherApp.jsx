import React, { useState } from 'react';
import axios from 'axios';
import SendEmail from './SendEmail';
import useStyles from './WeatherApp.styles'; 

const WeatherApp = () => {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = () => {
    const apiKey = 'ca811b95188c4990b3e72319232406'
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching weather data:', error);
        setWeatherData(null);
      });
  };
  return (
    <div className={classes.container}>
      <p>Check the temperature of your city:</p>
      <div className={classes.inputContainer}>
        <label htmlFor="cityInput">City:</label>
        <input id="cityInput" type="text" value={city} onChange={handleCityChange} placeholder="Enter city" className={classes.input} />
      </div>
     
      <button onClick={fetchWeather} className={classes.button}>Confirm</button>
      <br />
      <p>Give your email! And you will receive a notification if the your city is hoter that 25°C</p>
      <SendEmail weatherData={weatherData} />
      {weatherData && (
        <div className={classes.weatherInfo}>
          <h2 className={classes.heading}>{weatherData.location.name}</h2>
          <p className={classes.paragraph}>Temperature: {weatherData.current.temp_c}°C</p>
          <p className={classes.paragraph}>Condition: {weatherData.current.condition.text}</p>
          
        </div>
         
      )}
    </div>
  );
};

export default WeatherApp;
