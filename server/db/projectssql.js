const knex = require('./knex');

module.exports = {
  //get all projects
  getAllProjects: () => {
    return knex('projects')
      .select().orderBy('id', 'asc');
  },
  //get all opco and id
  getAllOpCos: () => {
    return knex('opco')
      .select().orderBy('id', 'asc');
  },
  //get bu by opco
  getAllBUByOP: (op) => {
    return knex('businessunit').where({
      opco_id: op
    }).select('id', 'businessunit').orderBy('id', 'asc');
  },
  //add businessunit
  addbusinessunit: (businessunit) => {
    return knex('businessunit').insert(businessunit, 'id');
  },
  //get project by bu
  getAllProjectsByBU: (businessunit) => {
    return knex('projects').where({
      businessunit_id: businessunit
    }).select('id', 'project', 'user_id').orderBy('id', 'asc');
  },
  //add project
  addProj: (projects) => {
    return knex('projects')
      .insert(projects, 'id');
  },
  UpdateProj: (project_id, projects) => {
    return knex('projects').
      where({
        'id': parseInt(project_id),
      }).
      update(projects);
  },
  //get project info by user => user => number of projects => and related info
  getAllProjectByUser: (user) => {
    return knex('projects').where({
      user_id: user
    }).select('id', 'project').orderBy('id', 'asc');
  },
  //get all project info for display purpose
  getAllProjectInfoByProjectId: (project, shortMonth) => {
    return knex.select('opco.opco', 'businessunit.businessunit', 'users.login', 'users.email', 'projects.otd', 'projects.quality', 'projectstatus.otd_monthly', 'projectstatus.quality_monthly', 'projectstatus.datecreated')
      .from('projects')
      .innerJoin('businessunit', 'projects.businessunit_id', 'businessunit.id')
      .innerJoin('opco', 'businessunit.opco_id', 'opco.id')
      .innerJoin('users', 'users.id', 'projects.user_id')
      .leftJoin('projectstatus', function () {
        this.on('projects.id', '=', 'projectstatus.project_id').andOn('projectstatus.metricorder', '=', knex.raw(shortMonth))
      })
      .where('projects.id', knex.raw(project));
  },
  getProjectManagerMap: () => {
    return knex.select('projects.project', 'users.login', 'users.email')
      .from('projects')
      .fullOuterJoin('users', 'users.id', 'projects.user_id')
      .whereNot('users.login', 'admin')
      .orderBy('users.id', 'asc');
  },
  update: (project_id, otdtarget, qualitytarget) => {
    return knex('projects').
      where({
        'id': parseInt(project_id),
      }).
      update({
        'otd': otdtarget,
        'quality': qualitytarget
      });
  },
  getAll: () => {
    return knex('projects')
      .select().orderBy('id', 'asc');;
  }
};