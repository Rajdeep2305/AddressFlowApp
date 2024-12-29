const express = require('express');
const connectDB = require('./config/db');
const addressRoutes = require('./routes/addressRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api/addresses', addressRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});