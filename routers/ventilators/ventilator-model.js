const db = require('../../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    update
}

function find() {
    return db('vents').select('user_id', 'id', 'name', 'brand', 'model', 'quantity')
}

function findBy(filter) {
    return db('vents').where(filter)
}

async function add(vent) {
    const [id] = await db('vents').insert(vent)

    return findById(id)
}

function findById(id) {
    return db('vents').where({ id }).first()    
}

function update(id, changes) {
    return db('vents')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.find(id) : null));
}