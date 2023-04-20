const Cube = require('../models/Cube.js')

exports.getOne = (cubeId) => {
return Cube.findById(cubeId)
}

exports.update = (cubeId, data) => {
    return Cube.findByIdAndUpdate(cubeId,data,{runValidators:true})
}

exports.delete = (cubeId) => {
    return Cube.findByIdAndDelete(cubeId)
}