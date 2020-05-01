const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secrets = require('../../config/secrets');

const Users = require('../users/users-model');

// For endpoints beginning with /api/auth

router.post('/register', (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(saved => {
      res.status(201).json({ message: "User has been created" });
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post('/login', (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // produce a token
        const token = generateToken(user);

        // add token to response
        res.status(200).json({
          users_id: `${user.id}`,
          token,
          name: `${user.name}`
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    username: user.username,
    subject: user.id,
    type: user.type
  };

  const options = {
    expiresIn: '6h'
  };

  return jwt.sign(payload, secret = secrets.jwtSecret, options);
}

module.exports = router;