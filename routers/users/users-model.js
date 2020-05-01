const db = require('../../database/dbConfig');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findUserVents,
    update
};

function find() {
    return db('users').select('id', 'username');
}

function findBy(user) {
    return db('users').where(user);
}

async function add(user) {
    const [id] = await db('users').insert(user);

    return findById(id);
}

function findById(id) {
    return db('users')
        .select('users.id', 'users.username', 'users.name')
        .where({ id });
}

function findUserVents(id) {
    return db('vents')
        .join('users', 'users.id', 'vents.user_id')
        .select('vents.id', 'vents.name', 'vents.brand', 'vents.model', 'vents.quantity')
        .where({ user_id: id });
}

function update(id, changes) {
    return db('users')
        .where('id', id)
        .update(changes)
        .then(count => (count > 0 ? this.find(id) : null));
}