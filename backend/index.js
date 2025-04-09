const express = require('express');
const cors = require('cors');   

const router = require('./routes/routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',router);

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});