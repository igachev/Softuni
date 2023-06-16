const Photo = require('../models/Photo.js')

exports.create = async (name,age,description,location,image,owner) => {
    const photo = await Photo.create({name,age,description,location,image,owner})
    return photo
}

exports.getAll = async () => {
    const photos = await Photo.find({}).populate('owner').lean()
    return photos
}

exports.getOne = async (photoId) => {
const photo = await Photo.findById(photoId)
.populate('owner')
.populate('commentList')
.lean();
return photo;
}