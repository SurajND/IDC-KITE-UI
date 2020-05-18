const express = require('express');
const router = express.Router();

const Guid = require('../utils/guid');
const queries = require('../db/usersql');
const projectQueries = require('../db/projectssql');
const validlogin = require('../../lib/validations').validlogin;

router.get('/managers', (req, res) => {
  queries.getAllUserRole().then(users => {
    res.json(users);
  });
});

router.post('/', (req, res) => {
  const login = req.body.login;
  const password = req.body.password;
  queries.getOne(login, password)
    .then(user => {
      if (user && user !== null) {
        projectQueries.getAllProjectByUser(user.id).then(projects => {
          let obj = {
            userid: user.email,
            sessionid: Guid.GetGUID(),
            isadmin: user.isadmin,
            userkey: user.id
          };
          if (projects && projects !== null && projects.length > 0) {
            obj.isprojectassign = true;
          } else {
            obj.isprojectassign = false;
          }
          console.log(projects);
          console.log(obj);
          res.json(obj);
          queries.update(obj.userid, obj.sessionid, new Date()).then(user => {});;
        });
      } else {
        console.log('Invalid login attempt.');
        res.status(500);
        res.json({
          message: 'Invalid login attempt.'
        });
      }
    });
});

router.post('/create', (req, res) => {
  console.log(req.body);
  let user = req.body;
  user.password = 'Welcome123';
  user.isadmin = false;
  user.datecreated = new Date();
  queries.getUserByEmail(user.email).then(users => {
    if (users == undefined) {
      queries.create(user)
        .then(ids => {
          res.json({
            id: ids[0]
          });
        });
    }
    else {
      res.status(500);
      res.json({
        message: "Manager with same email id already exist."
      });
    }
  });
});

router.post('/vlidate/pass', (req, res) => {
  try {
    let user = req.body;
    queries.getUserByEmail(user.email).then(users => {
      console.log(users);
      if (users['password'] === user['password']) {
        res.status(200);
        res.json({
          message: 'success'
        });

      } else {
        res.status(500);
        res.json({
          message: "Invalid Old Password."
        });
      }
    });
  } catch (ex) {
    res.status(500);
    res.json({
      message: ex
    });
  }
});

router.post('/change/pass', (req, res) => {
  try {
    let user = req.body;
    queries.setNewPassword(user.email, user.password).then(u => {
      res.status(200);
      res.json({
        message: 'success'
      });
    });
  } catch (ex) {
    res.status(500);
    res.json({
      message: ex
    });
  }
});

function CreatedAUser(email) {
  var message = "Hi A user account has been created for you in IDC dashboard";
  sendMail(email, message);
}

function sendMail(email, message) {
  var nodemailer = require('nodemailer');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'visakhvspm@gmail.com',
      pass: '16251189vspm'
    }
  });

  var mailOptions = {
    from: 'visakhvspm@gmail.com',
    to: email,
    subject: 'Hi you are assign to a project',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

}



module.exports = router;