var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req,res)=> {
    res.send('api의 blog입니다.');
});

module.exports = router;