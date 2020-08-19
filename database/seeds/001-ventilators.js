exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('vents').del()
      .then(function () {
        // Inserts seed entries
        return knex('vents').insert([
          {id: 1, name: 'Mt. Sinai', brand: 'Siemens', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 2, name: 'Jackson Memorial', brand: 'GE', model: 'iVent', quantity: 10, user_id: 1},
          {id: 3, name: 'Baptist Hospital', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 1},
          {id: 4, name: 'Mercy Hospital', brand: 'GE', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 5, name: 'South Miami Hospital', brand: 'GE', model: 'iVent', quantity: 10, user_id: 1},
          {id: 6, name: 'Westchester General Hospital', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 1},
          {id: 7, name: 'West Kendall Baptist Hospital', brand: 'Siemens', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 8, name: 'Coral Gables Hospital', brand: 'GE', model: 'iVent', quantity: 10, user_id: 1},
          {id: 9, name: 'Holtz Childrens Hospital', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 1},
          {id: 10, name: 'Nicklaus Childrens Hospital', brand: 'Siemens', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 11, name: 'Jackson South Medical Center', brand: 'GE', model: 'iVent', quantity: 10, user_id: 1},
          {id: 12, name: 'Palmetto General Hospital', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 1},
          {id: 13, name: 'Metropolitan Hospital', brand: 'Siemens', model: 'Maquet', quantity: 5, user_id: 1},
          {id: 14, name: 'Miami VA Healthcare System', brand: 'GE', model: 'iVent', quantity: 10, user_id: 1},
          {id: 15, name: 'Memorial Hospital Miramar', brand: 'Philips', model: 'Respironics', quantity: 15, user_id: 1}
        ]);
      });
  };
  