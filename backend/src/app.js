const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send({ message: 'API is running' });
});

app.use((req, res) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

module.exports = app;
