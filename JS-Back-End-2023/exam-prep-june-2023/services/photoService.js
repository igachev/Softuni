const Photo = require('../models/Photo.js')

exports.create = async (name,age,description,location,image,owner) => {
    const photo = await Photo.create({name,age,description,location,image,owner})
    return photo
}