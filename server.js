const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware untuk parsing JSON
app.use(express.json());

// Endpoint 1: /api?token=xxx
app.get('/api', (req, res) => {
  const token = req.query.token;

  if (!token) {
    return res.json({
      success: false,
      message: 'No token provided'
    });
  }

  if (token !== 'ellostore29') {
    return res.json({
      success: false,
      message: 'Invalid token'
    });
  }

  res.json({
    success: true,
    token: token,
    timestamp: new Date().toISOString(),
    message: 'Token received successfully'
  });
});

// Endpoint 2: /api/update
app.get('/api/update', (req, res) => {
  res.json({
    success: true,
    version: '1.0.0',
    lastUpdate: new Date().toISOString(),
    message: 'System is up to date',
    features: [
      'Token validation',
      'Update information'
    ]
  });
});

// Root endpoint untuk tes cepat
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to MyAPI',
    endpoints: [
      'GET /api?token=ellostore29 - Get token information',
      'GET /api/update - Get update information'
    ]
  });
});

// Jalankan server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
