var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=> {
    res.send('api 회원가입');
});

module.exports = router;