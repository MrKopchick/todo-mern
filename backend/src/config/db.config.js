const { MongoClient, ServerApiVersion } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/todo_db';

const options = {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    },
};

let client;

const connectToMongoDB = async () => {
    if (client) return client;

    try {
        client = await MongoClient.connect(MONGODB_URI, options);
        console.log('[MongoDB] Connected');
        return client;
    } catch (err) {
        console.error('[MongoDB] Connection error:', err);
        throw err;
    }
};

const getMongoClient = () => {
    if (!client) {
        throw new Error('[MongoDB] Client not initialized');
    }
    return client;
};

module.exports = {
    connectToMongoDB,
    getMongoClient,
};
