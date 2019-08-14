var express = require('express');
var router = express.Router();
var skillsCtl = require('../controllers/skills')

/* GET skills listing. */
// cb = skillsCtl.index
router.get('/', skillsCtl.index);

module.exports = router;


/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render(path, controller)
  res.render('index', { title: 'Developer Skills' });
});
