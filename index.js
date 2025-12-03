// index.js
const express = require('express');
const axios = require('axios'); // for calling external APIs
const app = express();
const PORT = process.env.PORT || 3000;
const res = await fetch(backendUrl + '/echo', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: 'Hello backend' })
});

app.get('/api', async (req, res) => {
  try {
    // Example: fetch real-time weather data from a public API
    const response = await axios.get('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
    res.json({
      status: 'success',
      data: response.data
    });
  } catch (error) {
    res.status(500).json({ status: 'error', message: error.message });
  }
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

app.post('/api/echo', express.json(), (req, res) => {
  res.json({ youSent: req.body });
});

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
