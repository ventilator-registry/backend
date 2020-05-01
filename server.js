const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

// Routers
const authRouter = require('./routers/auth/auth-router');
const usersRouter = require('./routers/users/user-router');
const ventsRouter = require('./routers/ventilators/ventilator-router')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

// Endpoints
server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/vents', ventsRouter);

server.get('/', (req, res) => {
  res.send("Server is running.");
});

module.exports = server;