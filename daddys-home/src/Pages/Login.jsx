import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper } from '@mui/material';
/*
Box is used to center the login form on the page.
Paper gives the form a card-like appearance with elevation.
TextField is used for the email and password input fields.
Button is used for the login button.
Typography is used for text styling.

React's useState is used to manage the state of the email and password fields.
The handleLogin function logs the entered email and password (this is where you'd implement actual login functionality).

*/


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    // Implement login logic
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5'
      }}
    >
      <Paper elevation={2} sx={{ padding: '2rem', width: '500px' }}>
        <Typography variant="h5" component="h1" sx={{ textAlign: 'center', mb: 2 }}>
          Login
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, backgroundColor: '#DDA0DD' }}
          >
            Login
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default Login;
