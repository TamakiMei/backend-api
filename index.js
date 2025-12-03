const express = require('express');
const app = express();
const port = 3000;

// Mock weather data endpoint
app.get('/api', (req, res) => {
  const weatherData = {
    city: 'Sample City',
    temperature: 25,
    condition: 'Sunny',
    timestamp: new Date()
  };
  res.json(weatherData);
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(port, () => {
  console.log(`Backend running on port ${port}`);
});
