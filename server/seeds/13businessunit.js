exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('businessunit').del()
    .then(function () {
      const businessunit = [{
          opco_id: 1,
          businessunit: 'WITS'
        },
        {
          opco_id: 1,
          businessunit: 'ChemIA'
        },
        {
          opco_id: 1,
          businessunit: 'DxH'
        }
      ];
      // Inserts seed entries
      return knex('businessunit').insert(businessunit);
    });
};