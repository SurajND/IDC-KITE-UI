const knex = require('./knex');

module.exports = {
  getAll: () => {
    return knex('users')
      .select();
  },
  getOne: (l, p) => {
    return knex('users').where({
      email: l,
      password: p
    }).select().first()
  },
  getAllUserRole: () => {
    return knex('users').where({
      isadmin: false     
    }).select().orderBy('id', 'asc');
  },
  getAllAdminRole: () => {
    return knex('users').where({
      isadmin: true     
    }).select()
  },
  create: (user) => {
    return knex('users')
      .insert(user, 'id');
  },
  update: (l, s, dt) => {
    console.log('user update');
    return knex('users').
    where({
      'email': l
    }).
    update({
      'sessionid': s,
      'lastlogin': dt
    });
  },
  setNewPassword: (l, s) => {
    return knex('users').
    where({
      'email': l
    }).
    update({
      'password': s
    });
  },
  delete: (username) => {
    return knex('users')
      .where('username', username)
      .del();
  },
  getUserByEmail: (l) => {
    return knex('users').where({
      email: l,
    }).select().first()
  }
};