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

module.exports = {
    getAll
}