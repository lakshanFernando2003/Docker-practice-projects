const express = require('express');
const mongoose = require('mongoose');
const User = require('./User');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());

// Configure CORS to allow requests from frontend
app.use(cors({
  origin: '*', // In production, replace with your frontend domain
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// connect to MongoDB using URI from .env
const connectWithRetry = (retryCount = 1) => {
  const maxRetries = 1; // Only retry once

  console.log(`MongoDB connection attempt ${retryCount}...`);
  mongoose.connect(process.env.MONGO_URI, {
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch(err => {
    console.log('MongoDB connection error:', err);
    if (retryCount <= maxRetries) {
      console.log(`Retrying connection in 2 seconds... (Attempt ${retryCount + 1})`);
      setTimeout(() => {
        connectWithRetry(retryCount + 1);
      }, 2000);
    } else {
      console.error('Failed to connect to MongoDB');
    }
  });
};

connectWithRetry();

// API route for creating a new user
app.post('/api/users', async (req, res) => {
    try {
        const { name, email, age } = req.body;

        // Validate required fields
        if (!name || !email || !age) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email and age'
            });
        }

        const user = new User({ name, email, age });
        const result = await user.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: result
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server error'
        });
    }
});

// API route for fetching all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            message: 'Users fetched successfully',
            data: users
        });
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server error'
        });
    }
});

  // listen to port
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });








  // tVuSmd6yaWBiGcB4

  // lakshanchanaka34_db_user
