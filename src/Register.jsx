import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

const Register = ({ onSave }) => {
  const [location, setLocation] = useState('');
  const [email, setEmail] = useState('');

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSave = () => {
    onSave(location, email);
  };

  return (
    <div>
        <br />
        <p>Choose a city and You can receive on your email an alert if the tmemperature is above 25°C: </p>
      <TextField
        id="locationInput"
        value={location}
        onChange={handleLocationChange}
        label="Location"
        placeholder="Enter location"
      />
      <br />
      <TextField
        id="emailInput"
        type="email"
        value={email}
        onChange={handleEmailChange}
        label="Email"
        placeholder="Enter email"
      />
       <br />
      <Button variant="contained" color="primary" onClick={handleSave}>
        Save
      </Button>
    </div>
  );
};

export default Register;
