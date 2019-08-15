var Skill = require('../models/skill')

const index = (req, res) => {
    //res.render( 'view', cb)
    res.render('skills/index', {
        //The curly brackets will pass a variable to the view
        skills: Skill.getAll()
    })
}

const newSkill = (req, res) =>{
    res.render('skills/new');
  }

const add = (req, res) => {
    Skill.create(req.body)
    res.redirect('/skills')
}

const remove = (req, res) => {
    Skill.remove(req.params.id)
    res.redirect('/skills')
}

const show = (req, res) => {
    res.render('skills/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}

module.exports = {
    index,
    show,
    new: newSkill,
    add,
    remove
}




