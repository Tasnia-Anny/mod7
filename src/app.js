// app.js

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const mysql = require('mysql');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoSanitize = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const hpp = require('hpp');
const validator = require('validator');

const app = express();

// Load environment variables from config.env
dotenv.config({ path: './config/config.env' });

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for handling CORS
app.use(cors());

// Middleware for enhancing security
app.use(helmet());

// Middleware for sanitizing user input for MongoDB
app.use(mongoSanitize());

// Middleware for rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
});
app.use(limiter);

// Middleware for protecting against HTTP Parameter Pollution attacks
app.use(hpp());

// Add your custom middleware or routes here

// Undefined route handler
app.use((req, res) => {
  res.status(404).json({ status: 'error', message: 'Not Found' });
});

module.exports = app;
