exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      const users = [{
          login: 'Bhagaban Nayak',
          password: 'Welcome123',
          isadmin: false,
          email: 'bnayak@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Santosh Kumaraswamy',
          password: 'Welcome123',
          isadmin: false,
          email: 'skumaraswamy@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Kakoli Kundu',
          password: 'Welcome123',
          isadmin: false,
          email: 'kkundu@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Kumaravel Ganesan',
          password: 'Welcome123',
          isadmin: false,
          email: 'kganesan@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Sandhya Pradeep',
          password: 'Welcome123',
          isadmin: false,
          email: 'spradeep@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Venkatesh Prasad',
          password: 'Welcome123',
          isadmin: false,
          email: 'vprasad@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Kranthi Polaswamy',
          password: 'Welcome123',
          isadmin: false,
          email: 'kkpolaswmy@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Sachin Karnool',
          password: 'Welcome123',
          isadmin: false,
          email: 'skarnool@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Sreejith Leela',
          password: 'Welcome123',
          isadmin: false,
          email: 'sleela@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Amar Gautam',
          password: 'Welcome123',
          isadmin: true,
          email: 'agautam@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Safeer Ibrahimkutty',
          password: 'Welcome123',
          isadmin: true,
          email: 'sibrahimkutty@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Lalitha Rajamohan',
          password: 'Welcome123',
          isadmin: true,
          email: 'lrajamohan@beckman.com',
          datecreated: new Date()
        },
        {
          login: 'Wido Menhardt',
          password: 'Welcome123',
          isadmin: true,
          email: 'wmenhardt@beckman.com',
          datecreated: new Date()
        }
      ];

      return knex('users').insert(users);
    });
};