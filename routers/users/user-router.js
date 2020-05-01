const router = require('express').Router();
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware');

// For endpoints beginning with /users

// Gets all users
router.get('/', restricted, (req, res) => {
    Users.find()
        .then(users => res.status(200).json({ users }))
        .catch(err => res.status(500).send(err));
});

// Gets user with ID
router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Users.findById(id)
        .then(users => res.status(200).json({ users }))
        .catch(err => res.status(500).send(err));
});

// Edit user with ID
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Users
        .update(id, changes)
        .then(users => res.status(201).json(users))
        .catch(error => res.status(500).json({ Error: 'Could not update user.' }));
});

// Deletes user with ID
router.delete('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Users
        .findById(id)
        .del()
        .then(users => res.status(200).json({ message: "User deleted successfully." }))
        .catch(err => res.status(500).send(err));
});

// Gets user's vents
router.get('/:id/vents', restricted, (req, res) => {

    Users.findUserVents(req.params.id)
        .then(vents => {
            res.status(200).json(vents)
        })
        .catch(err => {
            res.status(500).json({ message: 'error', err })
        })
})

module.exports = router;