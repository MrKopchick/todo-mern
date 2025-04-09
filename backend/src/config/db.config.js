require('dotenv').config();
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_db';

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;
let isConnected = false;

const connectToMongoDB = async () => {
    if (!client) {
        client = new MongoClient(uri, options);
    }

    if (!isConnected) {
        try {
            await client.connect();
            isConnected = true;
            console.log('[MongoDB] Connected');
        } catch (err) {
            throw new Error('[MongoDB] Connection failed: ' + err.message);
        }
    }
    return client;
};

const getMongoClient = () => {
    if (!isConnected) {
        throw new Error('[MongoDB] Client not initialized');
    }
    return client;
};

module.exports = { connectToMongoDB, getMongoClient };
