require('dotenv').config();
const { connectToMongoDB } = require('./src/config/db.config');
const createApp = require('./src/app');
const TodoService = require('./src/services/todo.service');
const todoController = require('./src/controllers/todo.controller');

const PORT = process.env.PORT || 3001;

const startServer = async () => {
    try {
        await connectToMongoDB();

        // bruh.. need DI to fix initialize problem
        const service = new TodoService();
        todoController.setTodoService(service);

        const app = createApp();
        app.listen(PORT, () => {
            console.log(`[Server] Listening on port ${PORT}`);
        });
    } catch (err) {
        console.error('[Startup Error]', err);
        process.exit(1);
    }
};

startServer();
