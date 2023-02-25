/* File Name: app.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
*/

/*The installed third party packages */
let  createError = require('http-errors');
let  express = require('express');
let  path = require('path');
let  cookieParser = require('cookie-parser');
let  logger = require('morgan');

//database setup
let mongoose= require('mongoose'); 
let DB= require('./db');  //DB configurations

//point mongoose to DB URI
// mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});
// let mongoDB= mongoose.connection;

// mongoDB.on('error',console.error.bind(console,"Conncetion Error"));
// mongoDB.once('open',()=>{
//   console.log("Connected to MongoDB");
// })

let  indexRouter = require('../routes/index');   /*Routing index.js */
let  usersRouter = require('../routes/users');   /*Routing index.js */
let bookRouter= require('../routes/book');

/*Instantiates express application */
let  app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views')); /*Joining views into our search path */
app.set('view engine', 'ejs');   /*Specify ejs as view engine */

/*Additional activations*/
app.use(logger('dev'));    /*To track the dev systems that are logging */
app.use(express.json());     /*Method to recognise json file*/
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  /*Loading a cookie parser middleware */
app.use(express.static(path.join(__dirname, '../../client')));  /*Loading middleware for static files*/
app.use(express.static(path.join(__dirname,'../../node_modules')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book-list', bookRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',{ title: 'Error'});
});

module.exports = app;
