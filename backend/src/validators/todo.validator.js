const { ObjectId } = require('mongodb');

exports.validateTodo = (req, res, next) => {
    const { todo } = req.body;
    if (!todo || typeof todo !== 'string' || !todo.trim()) {
        return res.status(400).json({ message: 'Invalid "todo"' });
    }
    next();
};

exports.validateId = (req, res, next) => {
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: 'Invalid ID' });
    }
    next();
};

exports.validateStatus = (req, res, next) => {
    const { status } = req.body;
    if (typeof status !== 'boolean') {
        return res.status(400).json({ message: '"status" must be boolean' });
    }
    next();
};