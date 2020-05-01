const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        // check that the token is valid
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                // foul play
                res.status(401).json({ message: 'Invalid Token!' });
            } else {
                // token is good
                req.user = {
                    username: decodedToken.username,
                    type: decodedToken.type
                };
                next();
            }
        })
    } else {
        res.status(400).json({ message: 'No token provided' });
    }
};