var express = require('express');
var router = express.Router();


//localhost:3000/api/news/like
router.use('/like',require('./like'));

router.get('/',(req,res)=> {
    res.send('api의 news입니다. ');
});

module.exports = router;