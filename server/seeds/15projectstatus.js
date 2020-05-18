exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('projectstatus').del()
    .then(function () {
      // Inserts seed entries
      const projectstatus = [{
          project_id: 1,
          otd_monthly: 82,
          otd_target: 90,
          quality_monthly: 38,
          quality_target: 50,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        },
        {
          project_id: 1,
          otd_monthly: 107,
          otd_target: 90,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 1,
          otd_monthly: 116,
          otd_target: 90,
          quality_monthly: 38,
          quality_target: 50,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 1,
          otd_monthly: 103,
          otd_target: 90,
          quality_monthly: 46,
          quality_target: 63,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 2,
          otd_monthly: 56,
          otd_target: 90,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 2,
          otd_monthly: 102,
          otd_target: 90,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 2,
          otd_monthly: 153,
          otd_target: 90,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 2,
          otd_monthly: 113,
          otd_target: 90,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 3,
          otd_monthly: 90,
          otd_target: 80,
          quality_monthly: 1,
          quality_target: 6,
          metricmonth: 07,
          metricyear: 2017,
          metricorder: 201707,
          datecreated: new Date()
        }, {
          project_id: 3,
          otd_monthly: 90,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 6,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 3,
          otd_monthly: 100,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 6,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        }, {
          project_id: 7,
          otd_monthly: 62,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 7,
          otd_monthly: 75,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 7,
          otd_monthly: 85,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 7,
          otd_monthly: 82,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 8,
          otd_monthly: 81,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 8,
          otd_monthly: 100,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 8,
          otd_monthly: 58,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 8,
          otd_monthly: 88,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 9,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 9,
          otd_monthly: 92,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 9,
          otd_monthly: 86,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 9,
          otd_monthly: 106,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 10,
          otd_monthly: 44,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 10,
          otd_monthly: 48,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 10,
          otd_monthly: 77,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 10,
          otd_monthly: 68,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }, {
          project_id: 11,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        }, {
          project_id: 11,
          otd_monthly: 48,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 11,
          otd_monthly: 14,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        }, {
          project_id: 11,
          otd_monthly: 35,
          otd_target: 80,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        },
        {
          project_id: 14,
          otd_monthly: 100,
          otd_target: 70,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        },
        {
          project_id: 14,
          otd_monthly: 0,
          otd_target: 70,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 14,
          otd_monthly: 33,
          otd_target: 70,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        },
        {
          project_id: 15,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 07,
          metricyear: 2017,
          metricorder: 201707,
          datecreated: new Date()
        },
        {
          project_id: 15,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 08,
          metricyear: 2017,
          metricorder: 201708,
          datecreated: new Date()
        },
        {
          project_id: 15,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 09,
          metricyear: 2017,
          metricorder: 201709,
          datecreated: new Date()
        },
        {
          project_id: 15,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 10,
          metricyear: 2017,
          metricorder: 201710,
          datecreated: new Date()
        },
        {
          project_id: 15,
          otd_monthly: 100,
          otd_target: 100,
          quality_monthly: 0,
          quality_target: 0,
          metricmonth: 11,
          metricyear: 2017,
          metricorder: 201711,
          datecreated: new Date()
        }
      ];

      return knex('projectstatus').insert(projectstatus);
    });
};