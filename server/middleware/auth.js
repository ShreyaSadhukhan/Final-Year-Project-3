import { verify } from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) return res.status(403).send({ message: 'No token provided' });

    const token = authHeader.split(' ')[1];
    if (!token) return res.status(403).send({ message: 'Malformed token' });

    verify(token, 'your_jwt_secret', (err, decoded) => {
        if (err) return res.status(500).send({ message: 'Failed to authenticate token' });
        req.userId = decoded.userId;
        next();
    });
};

export default verifyToken;