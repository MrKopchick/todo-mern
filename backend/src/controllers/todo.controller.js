const { HttpError } = require('../utils/http-error');

let todoService;

exports.setTodoService = (service) => {
    todoService = service;
};

exports.getTodos = async (req, res, next) => {
    try {
        const todos = await todoService.getAll();
        res.status(200).json(todos);
    } catch (err) {
        next(new HttpError(500, 'Failed to fetch todos'));
    }
};

exports.createTodo = async (req, res, next) => {
    try {
        const { todo } = req.body;
        const created = await todoService.create(todo);
        res.status(201).json(created);
    } catch (err) {
        next(new HttpError(500, 'Failed to create todo'));
    }
};

exports.updateTodo = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        await todoService.updateStatus(id, status);
        res.status(200).json({ message: 'Todo updated' });
    } catch (err) {
        next(new HttpError(404, err.message));
    }
};

exports.deleteTodo = async (req, res, next) => {
    try {
        const { id } = req.params;

        await todoService.delete(id);
        res.status(200).json({ message: 'Todo deleted' });
    } catch (err) {
        next(new HttpError(404, err.message));
    }
};
