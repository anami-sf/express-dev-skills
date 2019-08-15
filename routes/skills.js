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

module.exports = router;

