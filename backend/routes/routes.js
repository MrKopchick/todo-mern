const express = require('express');

const router = express.Router();

router.get('/todos', (req, res) => {
    res.status(200).json({ message: 'success' });
});

router.post('/todos', (req, res) => {
    res.status(201).json({ message: 'todo created' });
}); 

router.put('/todos/:id', (req, res) => { 
    res.status(200).json({ message: 'todo updated' });
});

router.delete('/todos/:id', (req, res) => {
    res.status(200).json({ message: 'todo deleted' });
});

module.exports = router;