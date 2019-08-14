var Skill = require('../models/skill')

const index = (req, res) => {
    //res.render( 'view', cb)
    res.render('skills/index', {
        //The curly brackets will pass a variable to the view
        skills: Skill.getAll()
    })
}

module.exports = {
    index
}