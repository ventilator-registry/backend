const router = require('express').Router();
const Ventilators = require('./ventilator-model');
const restricted = require('../auth/restricted-middleware')

// Gets all ventilators
router.get('/', restricted, (req, res) => {
    Ventilators
        .find()
        .then(vents => res.status(200).json({ vents }))
        .catch(err => res.status(500).send(err));
});

// Gets ventilator by ID

router.get('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Ventilators
        .findById(id)
        .then(vents => res.status(200).json({ vents }))
        .catch(err => res.status(500).send(err))
})

// Add ventilator
router.post('/', restricted, (req, res) => {
    const vent = req.body;

    Ventilators
        .add(vent)
        .then(vents => res.status(201).json(vents))
        .catch(error => res.status(500).json({ Error: 'Could not add ventilator.' }));
})

// Updates ventilator listing
router.put('/:id', restricted, (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    Ventilators
        .update(id, changes)
        .then(vents => res.status(201).json(vents))
        .catch(error => res.status(500).json({ Error: 'Could not update ventilator.' }));
});

// Deletes ventilator
router.delete('/:id', restricted, (req, res) => {
    let id = req.params.id;

    Ventilators
        .findById(id)
        .del()
        .then(vents => res.status(200).json({ message: "Ventilator deleted successfully." }))
        .catch(err => res.status(500).send(err));
})

module.exports = router;