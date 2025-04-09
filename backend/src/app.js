const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo.routes');

const createApp = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use('/api', todoRoutes);

    app.use((err, req, res, next) => {
        console.error('[Unhandled Error]', err);
        res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
    });

    return app;
};

module.exports = createApp;
