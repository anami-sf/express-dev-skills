var express = require('express');
var router = express.Router();
var skillsCtl = require('../controllers/skills')

//GET All skills
// cb = skillsCtl.index
router.get('/', skillsCtl.index);

//Add new skill
router.get('/new', skillsCtl.new);
router.post('/', skillsCtl.add)

//Get one skill
router.get('/:id', skillsCtl.show);

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render(path, controller)
  res.render('index', { title: 'Developer Skills' });
});

module.exports = router;

