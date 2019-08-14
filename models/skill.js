//create an array of "fake" data representing some of your awesome developer skills

let skills = [
    {
        language: 'JS',
        description: 'Object oriented language for both front and back-end developement',
        level: 5
    },
    {
        language: 'Ruby',
        description: 'Object oriented language for both front and back-end developement',
        level: 4
    }
]

const getAll = () => {
    return skills;
}

const show = (req, res) => {
    res.render('todos/show', {
        skill: Skill.getOne(req.params.id),
        skillNum: parseInt(req.params.id) + 1
    })
}

const getOne = (id) => {
    return skills[id]
}

module.exports = {
    getAll,
    getOne,
    show
}