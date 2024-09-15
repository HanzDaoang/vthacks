import { useState } from 'react';
import { TextField, Button, Typography, CircularProgress, Box } from '@mui/material';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading state
    setResponse(''); // Reset previous response

    try {
      // Send a POST request to the server
      const res = await fetch('http://127.0.0.1:5000/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      // Handle the JSON response
      const data = await res.json();

      if (data.error) {
        setResponse(`Error: ${data.error}`);
      } else {
        // Assuming the response data is in `response`
        setResponse(data.response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setResponse('An error occurred. Please try again.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 1500, mx: 'auto', mt: 4, p: 2, borderRadius: 2, boxShadow: 3 }}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Type your message"
          variant="outlined"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading}
          sx={{ mb: 2 }}
        />
        <Button
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          sx={{ mb: 2 }}
        >
          {isLoading ? <CircularProgress size={24} /> : 'Send'}
        </Button>
      </form>
      <Box sx={{ mt: 2 }}>
        <Typography variant="h6">Response:</Typography>
        <Typography variant="body1" sx={{ mt: 1, whiteSpace: 'pre-wrap' }}>
          {response}
        </Typography>
      </Box>
    </Box>
  );
};

export default Chat;
