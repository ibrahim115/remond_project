const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Call Connect db
connectDB()

// Test route index
app.get('/', (req, res) => res.json('API is Works!'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in PORT ${PORT}`));