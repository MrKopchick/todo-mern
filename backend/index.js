require('dotenv').config();

const app = require('./src/app');
const { connectToMongoDB } = require('./src/config/db.config');

const PORT = process.env.PORT || 3001;

(async () => {
    try {
        await connectToMongoDB();

        app.listen(PORT, () => {
            console.log(`[Server] Listening on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('[Server] Failed to start:', error);
        process.exit(1);
    }
})();
