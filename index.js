const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api', (req, res) => {
  res.json({
    status: 'success',
    city: 'London',
    temperature_c: 15,
    condition: 'Partly cloudy',
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Backend API listening on port ${PORT}`);
});
