const knex = require('./knex');

module.exports = {
  getAll: () => {
    return knex('projectstatus')
      .join('projects', 'projectstatus.project_id', '=', 'projects.id')
      .select();
  },
  getTireOne: () => {
    return knex('projectstatus')
    .select();
  },
  // getTireOne: () => {
  //   return knex('projectstatus')
  //     .select('metricmonth', 'metricyear', 'metricorder')
  //     .avg('otd_monthly as otd_monthly')
  //     .avg('quality_monthly as quality_monthly')
  //     .groupBy('metricmonth', 'metricyear', 'metricorder')
  //     .orderBy('metricorder', 'desc');
  // },
  getTireTwo: () => {
    return knex('projects')
      .select()
      .leftJoin('projectstatus', 'projects.id', 'projectstatus.project_id');
  },
  getProjects: () => {
    return knex('projects')
      .select();
  },
  create: (setting) => {
    return knex('projectstatus')
      .insert(setting, 'id');
  },
  update: (id, metricOrder, otdmonth, otdtarget, qualitymonthly, qualitytarget) => {
    return knex('projectstatus').
      where({
        'project_id': parseInt(id),
        'metricorder': metricOrder
      }).
      update({
        'otd_monthly': otdmonth,
        'otd_target': otdtarget,
        'quality_monthly': qualitymonthly,
        'quality_target':qualitytarget
      });
  },
  selectByIdMetricOrder:(id,metricOrder) =>
  {
   return knex('projectstatus').where({
      'project_id': parseInt(id),
      'metricorder': metricOrder
    }).select();
  }
};