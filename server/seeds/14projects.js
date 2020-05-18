exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      const projects = [{
          businessunit_id: 1,
          project: 'ICE-Tocatta',
          otd: 80,
          quality: 80,
          user_id: 1,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'ICE-Instrument',
          otd: 80,
          quality: 80,
          user_id: 1,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'Remisol',
          otd: 80,
          quality: 80,
          user_id: 2,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'CDP-RMS Dev',
          otd: 80,
          quality: 80,
          user_id: 3,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'CDP-PROServiceEagle',
          otd: 80,
          quality: 80,
          user_id: 4,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'CDP-PROServiceTiger',
          otd: 80,
          quality: 80,
          user_id: 4,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'CDP-DevOps',
          otd: 80,
          quality: 80,
          user_id: 5,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'IA Legacy',
          otd: 80,
          quality: 80,
          user_id: 6,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'Dolphin-Purple',
          otd: 80,
          quality: 80,
          user_id: 7,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'Dolphin-Orange',
          otd: 80,
          quality: 80,
          user_id: 7,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'Dolphin-Ivory',
          otd: 80,
          quality: 80,
          user_id: 6,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'Dolphin-Brown',
          otd: 80,
          quality: 80,
          user_id: 6,
          datecreated: new Date()
        },
        {
          businessunit_id: 2,
          project: 'Dolphin-Black',
          otd: 80,
          quality: 80,
          user_id: 8,
          datecreated: new Date()
        },
        {
          businessunit_id: 3,
          project: 'DxH-Eagle',
          otd: 80,
          quality: 80,
          user_id: 9,
          datecreated: new Date()
        },
        {
          businessunit_id: 1,
          project: 'CDP-RMS V&V',
          otd: 80,
          quality: 80,
          user_id: 3,
          datecreated: new Date()
        }
      ];

      // Inserts seed entries
      return knex('projects').insert(projects);
    });
};