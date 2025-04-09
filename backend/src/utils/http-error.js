class HttpError extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
    }
}

const errorHandler = (err, req, res, next) => {
    const status = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    console.error(`[Error] ${status}: ${message}`);
    res.status(status).json({ message });
};

module.exports = { HttpError, errorHandler };
