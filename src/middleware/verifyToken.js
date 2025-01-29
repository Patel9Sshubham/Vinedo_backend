const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7, authHeader.length)
        : null;

    if (!token) {
        return res.status(403).json({ message: 'Invalid token format. Expected "Bearer <token>".' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
        }

        req.user = decoded;
        next();
    });
};

const creatorVerifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    const token = authHeader.startsWith('Bearer ')
        ? authHeader.slice(7, authHeader.length)
        : null;

    if (!token) {
        return res.status(403).json({ message: 'Invalid token format. Expected "Bearer <token>".' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
        }

        req.user = decoded;
        next();
    });
};

module.exports = { creatorVerifyToken, verifyToken };
