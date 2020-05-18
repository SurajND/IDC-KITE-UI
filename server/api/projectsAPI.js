const express = require('express');
const router = express.Router();

const queries = require('../db/projectssql');
const queriesProjectStatus = require('../db/projectstatussql');

//get all opco
router.get('/opco', (req, res) => {
  queries.getAllOpCos().then(opco => {
    res.json(opco);
  });
});

//get all BU by OPCO
router.get('/businessunit', (req, res) => {
  const opco = req.query.opco;
  queries.getAllBUByOP(opco).then(bu => {
    res.json(bu);
  });
});

//get all projects by BU
router.get('/project', (req, res) => {
  const bu = req.query.businessunit;
  queries.getAllProjectsByBU(bu).then(projects => {
    res.json(projects);
  });
});

router.get('/projectmanagermap', (req, res) => {
  queries.getProjectManagerMap().then(projects => {
    res.json(projects);
  });
});

router.post('/addnewbusninessunit', (req, res) => {
  const projects = req.body;
  try {
    var newbusinessunit = {
      'opco_id': projects.opco,
      'businessunit': projects.businessunit_name
    }
    queries.addbusinessunit(newbusinessunit).then(ids => {
      res.json({
        id: ids[0]
      });
    });

  } catch (ex) {
    res.status(500);
    res.json({
      message: ex.message
    });
  }
});

router.post('/addnewproject', (req, res) => {
  const projects = req.body;
  try {
    return addNewProject(projects, res);
  } catch (ex) {
    res.status(500);
    res.json({
      message: ex.message
    });
  }
});

router.post('/assignproject', (req, res) => {
  try {
    const projects = req.body;
    return updateproject(projects, res);
  } catch (ex) {
    res.status(500);
    res.json({
      message: ex.message
    });
  }
});

function addNewProject(projects, res) {
  var projectNew = generateDataObject(projects);
  projectNew.user_id = null;
  return queries.addProj(projectNew).then(ids => {
    res.json({
      id: ids[0]
    });
  });
}

function updateproject(projects, res) {
  var projectUpdated = generateDataObject(projects);

  return queries.UpdateProj(projects.project, projectUpdated).then(ids => {
    res.json({
      id: ids[0]
    });
  });;
}

function generateDataObject(projects) {
  var projectNew = {
    'businessunit_id': projects.businessunit,
    'project': projects.project_name,
    'otd': 90,
    'quality': 90,
    'user_id': projects.user_id,
    'datecreated': new Date()
  };
  return projectNew;
}

router.get('/getUserProjects', (req, res) => {
  const userId = req.query.userId;
  queries.getAllProjectByUser(userId).then(projects => {
    res.json(projects);
  });
});

//get project info by project and date
router.get('/projectinfo', (req, res) => {
  const project = req.query.project;
  const month = req.query.month;
  const year = req.query.year;
  const shortdate = generateMetricOrder(month, year);
  queries.getAllProjectInfoByProjectId(project, shortdate).then(projects => {
    res.json(projects);
  });
});

router.get('/getCurrentMonthYear', (req, res) => {
  let today = new Date(),
    year = today.getFullYear(),
    month = today.getMonth() + 1;
  month = month - 1;
  if (month < 1) {
    month = 12;
    year--;
  }
  var monthYear = {
    monthValue : month ,
    yearValue : year
  };
  res.json(monthYear);
});

function generateMetricOrder(month, year) {
  if (month.toString().length < 2) {
    return merticorder = year.toString() + '0' + month.toString();
  } else {
    return merticorder = year.toString() + month.toString();
  }
}


router.post('/updateprojectstatus', (req, res) => {

  try {
    let today = new Date();
    const projectstatus = req.body;

      //projectstatus.metricmonth = parseInt(today.getMonth()) + 1,
      //projectstatus.metricyear = parseInt(today.getFullYear()),
      projectstatus.metricorder = parseInt(generateMetricOrder(projectstatus.metricmonth, projectstatus.metricyear)),
      projectstatus.datecreated = new Date()

    if (projectstatus.otd_monthly == '') {
      projectstatus.otd_monthly = null;
    }
    if (projectstatus.quality_monthly == '') {
      projectstatus.quality_monthly = null;
    }

    //update project table 
    queries.update(projectstatus.project_id, projectstatus.otd_target, projectstatus.quality_target).then(ids => {});

    //if already found projectstatus update else add.
    queriesProjectStatus.selectByIdMetricOrder(projectstatus.project_id, projectstatus.metricorder).
    then(result => {
      if (result.length > 0) {
        queriesProjectStatus.update(projectstatus.project_id, projectstatus.metricorder, projectstatus.otd_monthly, projectstatus.otd_target, projectstatus.quality_monthly, projectstatus.quality_target)
          .then(ids => {
            res.json({
              id: ids[0]
            })
          });
      } else {
        queriesProjectStatus
          .create(projectstatus)
          .then(ids => {
            if (ids && ids !== null) {
              res.json({
                id: ids[0]
              });
            } else {
              res.status(500);
              res.json({
                message: 'Invalid database insert.'
              });
            }
          });
      }
    })
  } catch (ex) {
    res.status(500);
    res.json({
      message: 'Invalid insert attempt' + ex
    });
  }
});

module.exports = router;