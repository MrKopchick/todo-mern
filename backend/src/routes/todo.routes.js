const express = require('express');
const router = express.Router();
const controller = require('../controllers/todo.controller');
const { validateTodo, validateId, validateStatus } = require('../validators/todo.validator');

router.get('/todos', controller.getTodos);
router.post('/todos', validateTodo, controller.createTodo);
router.put('/todos/:id', validateId, validateStatus, controller.updateTodo);
router.delete('/todos/:id', validateId, controller.deleteTodo);

module.exports = router;