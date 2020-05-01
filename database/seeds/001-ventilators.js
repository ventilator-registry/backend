exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('vents').del()
      .then(function () {
        // Inserts seed entries
        return knex('vents').insert([
          {id: 1, name: 'Mt. Sinai', brand: 'Siemens', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 2, name: 'Jackson Memorial', brand: 'GE', model: 'iVent', quantity: 10, user_id: 2},
          {id: 3, name: 'Baptist Hospital', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 3}
        ]);
      });
  };
  