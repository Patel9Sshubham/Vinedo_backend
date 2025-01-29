const logger = require('../config/logger');

const logApiDetails = (req, res, next) => {
    const start = Date.now();

    const { method, url, headers, body } = req;
    const logRequest = {
        method,
        url,
        headers,
        body,
        timestamp: new Date().toISOString(),
    };

    logger.info(`Request: ${JSON.stringify(logRequest)}`);

    const originalSend = res.send;
    res.send = function (data) {
        const duration = Date.now() - start;
        const logResponse = {
            statusCode: res.statusCode,
            responseTime: `${duration}ms`,
            body: data,
        };
        logger.info(`Response: ${JSON.stringify(logResponse)}`);

        return originalSend.call(this, data);
    };

    next();
};

module.exports = logApiDetails;
