var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var contact = require('./routes/contact');
var about = require('./routes/about');
var portfolio = require('./routes/portfolio');
var project1 = require('./routes/project1');
var project2 = require('./routes/project2');
var project3 = require('./routes/project3');
var project4 = require('./routes/project4');
var project5 = require('./routes/project5');
var project6 = require('./routes/project6');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/contact', contact);
app.use('/about', about);
app.use('/portfolio', portfolio);
app.use('/project1', project1);
app.use('/project2', project2);
app.use('/project3', project3);
app.use('/project4', project4);
app.use('/project5', project5);
app.use('/project6', project6);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
