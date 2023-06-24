import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

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

const SendEmail = ({ weatherData }) => {
  const classes = useStyles();
  const [email, setEmail] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const sendEmail = () => {
    const emailServiceId = 'service_w4mzh6m'; // Replace with your own EmailJS service ID
    const emailTemplateId = 'template_wjojwcb'; // Replace with your own EmailJS template ID
    const emailUserId = 'zll7WBXOsxfWM6wib'; // Replace with your own EmailJS user ID

    if (weatherData && weatherData.current.temp_c > 24 && email) {
      const templateParams = {
        to_email: email,
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
      <TextField
        id="emailInput"
        type="email"
        value={email}
        onChange={handleEmailChange}
        label="Email"
        placeholder="Enter email"
      />
      <Button variant="contained" color="primary" onClick={sendEmail}>
        Send Email
      </Button>
    </div>
  );
};

export default SendEmail;

