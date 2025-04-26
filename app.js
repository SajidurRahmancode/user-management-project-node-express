require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./src/routes/userRoutes');
const { errorHandler } = require('./src/middlewares/errorHandler');

const app = express();


require('./src/config/db');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));




app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});