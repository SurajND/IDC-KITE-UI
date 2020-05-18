var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');

var routes = require('./routes/index');
var users = require('./routes/users');
var todo = require('./routes/todo');
var todoAPI = require('./api/todoAPI');
var usersAPI = require('./api/usersAPI');
var projectsAPI = require('./api/projectsAPI');
var projectstatusAPI = require('./api/projectstatusAPI');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerHelper('select', function(selected, options) {
  return options.fn(this).replace(
        new RegExp(' value=\"' + selected + '\"'),
        '$& selected="selected"');
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}));

app.use('/', routes);
app.use('/todo', todo);
app.use('/users', users);
app.use('/api/v1/todo', todoAPI);
app.use('/api/v1/users', usersAPI);
app.use('/api/v1/projects', projectsAPI);
app.use('/api/v1/status', projectstatusAPI);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;