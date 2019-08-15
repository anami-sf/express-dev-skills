var Skill = require('../models/skill')

const index = (req, res) => {
    //res.render( 'view', cb)
    res.render('skills/index', {
        //The curly brackets will pass a variable to the view
        skills: Skill.getAll()
    })
}

const newSkill = (req, res) => {
    res.render('skills/new');
  }

//????Explain this code
const add = (req, res) => {
    Skill.create(req.body)
    res.ridirect('skills');
}

const create = (req, res) => {
    console.log(req.body)
    req.body.done = false
    //Todo is the model, crate is a function in the Todo model
    Todo.create(req.body)
    res.redirect('/')
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
    create
}