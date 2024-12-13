const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');
const { logger } = require('./utils/logger');
const { sequelize } = require('./config/database');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Database connection
const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    logger.info('Connected to PostgreSQL database');
    
    // Sync database models
    await sequelize.sync();
    logger.info('Database models synchronized');
  } catch (error) {
    logger.error('Database connection error:', error);
    process.exit(1);
  }
};

const PORT = process.env.PORT || 3001;

initializeDatabase().then(() => {
  app.listen(PORT, () => {
    logger.info(`Auth service running on port ${PORT}`);
  });
});
