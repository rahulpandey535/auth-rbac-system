// Import required modules
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file

// Initialize Express app
const app = express();

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI; // Get URI from .env file
if (!mongoURI) {
  console.error('Error: MONGO_URI is not defined in .env file');
  process.exit(1); // Exit the application if URI is missing
}

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected successfully'))
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // Exit the application if connection fails
  });

// Routes
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

console.log('Mongo URI:', process.env.MONGO_URI); // Add this line to check if the URI is being loaded

