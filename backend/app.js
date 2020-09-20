const Express = require('express');
const bodyParser = require('body-parser');
var wallet = require('./routes/wallet.routes');
const app = Express();
var web3 = require('./web3');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//const config = require('./config.js');
var indexRouter = require('./routes/index');

app.use(Express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/wallet', wallet);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    next(createError(404));
  });
  
  // error handler
  app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    // logger.info(err)
    res.status(err.status || 500);
    res.json({ error: err });
  });
  
  module.exports = app;