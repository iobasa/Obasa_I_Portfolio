var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
   res.render('project3', { message: "what is your name?" } );
});

module.exports = router;