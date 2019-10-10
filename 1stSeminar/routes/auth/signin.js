var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=> {
    res.send('로그인');
});

module.exports = router;