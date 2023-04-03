
const db = require('../db.json')

exports.getHomePage = (req,res) => {
    const {search, from, to} = req.query
    let cubes = db.cubes;

    if(search) {
        cubes = cubes.filter((cube) => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from) {
        cubes = cubes.filter((cube) => cube.difficultyLevel >= from)
    }

    if(to) {
        cubes = cubes.filter((cube) => cube.difficultyLevel <= to)
    }

    res.render('index', {cubes: cubes, search, to, from})
}

exports.getAboutPage = (req,res) => {
    res.render('about')
}

exports.getErrorPage = (req,res) => {
    res.render('404')
}

