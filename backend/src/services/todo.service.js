const { ObjectId } = require('mongodb');
const { getMongoClient } = require('../config/db.config');

class TodoService {
    constructor() {
        this.collection = getMongoClient().db('todo-mern').collection('todos');
    }

    async getAll() {
        return this.collection.find({}).toArray();
    }

    async create(todo) {
        const result = await this.collection.insertOne({ todo: todo.trim(), status: false });
        return { _id: result.insertedId, todo: todo.trim(), status: false };
    }

    async updateStatus(id, status) {
        const result = await this.collection.updateOne({ _id: new ObjectId(id) }, { $set: { status } });
        if (result.matchedCount === 0) throw new Error('Todo not found');
    }

    async delete(id) {
        const result = await this.collection.deleteOne({ _id: new ObjectId(id) });
        if (result.deletedCount === 0) throw new Error('Todo not found');
    }
}

module.exports = TodoService;