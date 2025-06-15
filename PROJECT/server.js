const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const connectdb = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const orderRoutes = require('./routes/orderRoutes');
// Load environment variables
dotenv.config();

// Initialize app
const app = express();

// Connect to MongoDB
connectdb();

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use('/api/products', productRoutes);
app.use('/api/auth',authRoutes);
app.use("/api/orders",orderRoutes);

// Start server
app.listen(5800, () => console.log('Server is running on port 5800'));
