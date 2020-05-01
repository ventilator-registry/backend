
exports.up = function (knex) {
    return knex.schema.createTable('vents', vents => {
        vents.increments();

        vents
            .string('name', 128)
            .notNullable()
        vents
            .string('brand', 128)
            .notNullable();
        vents
            .string('model', 128)
            .notNullable();
        vents
            .integer('quantity')
            .unsigned()
            .notNullable();
        vents
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('vents');
};
