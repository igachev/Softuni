const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'name is required'],
        minLength:[2,'name must be at least 2 characters long']
    },
    image: {
        type: String,
        required:[true,'image is required']
    },
    age: {
        type: Number,
        required:[true,'age is required'],
        min:[1,'age must be at least 1'],
        maxLength:[100,'age input length must be below 100 characters long']
    },
    description: {
        type: String,
        required:[true,'description is required'],
        minLength:[5,'description must be at least 5 characters long'],
        maxLength:[50,'description must be below 50 characters long']
    },
    location: {
        type: String,
        required:[true,'location is required'],
        minLength:[5,'location must be at least 5 characters long'],
        maxLength:[50,'location must be below 50 characters long']
    },
    commentList: [
        {
            userID: {
                type: mongoose.Types.ObjectId,
                ref:'User'
            },
            comment: {
                type: String
            }
        }
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Photo = mongoose.model('Photo',photoSchema)

module.exports = Photo