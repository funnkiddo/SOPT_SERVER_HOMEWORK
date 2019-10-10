var express = require('express');
var router = express.Router();

/* GET home page. */
//localhost:3000/board
router.use('/board',require('./board'));
//localhost:3000/auth/signin
//localhost:3000/auth/signup
//localhost:3000/auth
router.use('/auth',require('./auth'));
//router.get('/', function(req, res, next) {
//res.render('index', { title: 'Express' });
//});
router.use('/api',require('./api'));

module.exports = router;
