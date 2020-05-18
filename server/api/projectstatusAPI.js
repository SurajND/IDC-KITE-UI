const express = require('express');
const router = express.Router();
const common = require('../utils/common');
const queries = require('../db/projectstatussql');
const projectQueries = require('../db/projectssql');

router.get('/', (req, res) => {
  queries.getAll().then(result => {
    res.json(result);
  });
});

router.get('/tireone', (req, res) => {
  let metricorder = common.GetMetricOrder(12);
  let projectStatus;
  let finalData = [];
  queries.getTireOne().then(result => {
    projectStatus = {
      results: result
    };
projectQueries.getAllProjects().then(pr=>{
    for (let i = 0; i < metricorder.length; i++) {
      let query = ('results[*metricorder=' + metricorder[i].merticorder + ']');
      let filter = common.GetJsonQuery(projectStatus, query);
      let data = {};
      //console.log(filter);
      if (filter && filter.length > 0) {
        let allProjectsOTD = 0,
          allProjectsQuality = 0,
          otdGreen = 0,
          qualityGreen = 0;
        for (let j = 0; j < filter.length; j++) {
          // if (filter[j].otd_monthly != 0 || filter[j].otd_target != 0) {
            // allProjectsOTD = allProjectsOTD + 1;
            if (filter[j].otd_monthly >= filter[j].otd_target) {
              otdGreen = otdGreen + 1;
            }
          // }
          // if (filter[j].quality_monthly != 0 || filter[j].quality_target != 0) {
            // allProjectsQuality = allProjectsQuality + 1;
            if (filter[j].quality_monthly <= filter[j].quality_target) {
              qualityGreen = qualityGreen + 1;
            }
          // }
        }
        data.metricmonth = metricorder[i].metricmonth;
        data.metricyear = metricorder[i].metricyear;
        data.otd_monthly = -99;
        if (pr.length > 0) {
          data.otd_monthly = Math.round((otdGreen / pr.length) * 100);
        }
        data.otd_target = 80;
        data.quality_monthly = -99;
        if (pr.length > 0) {
          data.quality_monthly = Math.round((qualityGreen / pr.length) * 100);
        console.log(data.quality_monthly)
        }
        data.quality_target = 80;
      } else {
        data.metricmonth = metricorder[i].metricmonth;
        data.metricyear = metricorder[i].metricyear;
        data.otd_monthly = -99;
        data.otd_target = 80;
        data.quality_monthly = -99;
        data.quality_target = 80;
      }
      finalData.push(data);
    }

    res.json(finalData);
  });
  });
});

router.get('/tiretwo', (req, res) => {
  let metricorder = common.GetMetricOrder(12);
  let projectStatus;

  queries.getTireTwo().then(result => {
    projectStatus = {
      results: result
    };
    projectQueries.getAllProjects().then(projects => {
      let finalData = [];
      for (let j = 0; j < projects.length; j++) {
        let data = {
          project: projects[j].project,
          metric: []
        };
        for (let i = 0; i < metricorder.length; i++) {
          let query = ('results[*metricorder=' + metricorder[i].merticorder + ' & ' + 'project_id=' + projects[j].id + ']');
          let filter = common.GetJsonQuery(projectStatus, query);
          if (filter && filter.length > 0) {
            data.metric.push({
              metricmonth: metricorder[i].metricmonth,
              metricyear: metricorder[i].metricyear,
              otd_monthly: filter[0].otd_monthly,
              otd_target: filter[0].otd_target,
              quality_monthly: filter[0].quality_monthly,
              quality_target: filter[0].quality_target
            });
          } else {
            data.metric.push({
              metricmonth: metricorder[i].metricmonth,
              metricyear: metricorder[i].metricyear,
              otd_monthly: -99,
              otd_target: -99,
              quality_monthly: -99,
              quality_target: -99
            });
          }
        }
        finalData.push(data);
      }
      res.json(finalData);
    });
  });
});

module.exports = router;