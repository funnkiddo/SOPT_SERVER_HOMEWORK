var express = require('express');
var router = express.Router();

//localhost:3000/auth/signin
router.use('/signin',require('./signin'));
//localhost:3000/auth/signup
router.use('/signup',require('./signup'));

router.get('/',(req,res)=> {
    res.send('not supported');
});

module.exports = router;
