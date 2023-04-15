
const Cube = require('../models/Cube.js')

exports.getHomePage = async (req,res) => {
    const {search, from, to} = req.query
    let cubes = await Cube.find().lean();

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

