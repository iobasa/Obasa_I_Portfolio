var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('project2', { message: "what is your name?" } );
});

module.exports = router;
