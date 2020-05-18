exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('opco').del()
      .then(function () {
        // Inserts seed entries
        const opcos = [{
            opco:'Beckman'
        }];  
        return knex('opco').insert(opcos);
      });
  };