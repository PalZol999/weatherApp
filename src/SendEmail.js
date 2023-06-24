import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import Register from './Register';
import WeatherApp from './WeatherApp'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SendEmail = () => {
  const classes = useStyles();
  const [savedLocation, setSavedLocation] = useState('');
  const [savedEmail, setSavedEmail] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Load saved location and email from storage (e.g., localStorage) on component mount

    const location = localStorage.getItem('location');
    const email = localStorage.getItem('email');

    if (location && email) {
      setSavedLocation(location);
      setSavedEmail(email);
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (savedLocation && savedEmail) {
      <WeatherApp />

        const mockWeatherData = {
          location: { name: savedLocation },
          current: { temp_c: 25 }, // Example temperature for the saved location
        };

        setWeatherData(mockWeatherData);

        if (mockWeatherData.current.temp_c > 23) {
          sendEmail();
        }
      }
    }, 3600000); // Check every 1 hour (3600000 milliseconds)

    return () => clearInterval(interval);
  }, [savedLocation, savedEmail]);

  const handleSave = (location, email) => {
    // Save location and email to storage (e.g., localStorage) and state

    localStorage.setItem('location', location);
    localStorage.setItem('email', email);
    setSavedLocation(location);
    setSavedEmail(email);
  };

  const sendEmail = () => {
    const emailServiceId = 'service_w4mzh6m'; // Replace with your own EmailJS service ID
    const emailTemplateId = 'template_wjojwcb'; // Replace with your own EmailJS template ID
    const emailUserId = 'zll7WBXOsxfWM6wib'; // Replace with your own EmailJS user ID

    if (weatherData && savedEmail) {
      const templateParams = {
        to_email: savedEmail,
        location: weatherData.location.name,
        temperature: weatherData.current.temp_c,
      };

      emailjs
        .send(emailServiceId, emailTemplateId, templateParams, emailUserId)
        .then((response) => {
          console.log('Email sent!', response.status, response.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  };

  return (
    <div className={classes.root}>
      <Register onSave={handleSave} />
    </div>
  );
};

export default SendEmail;
