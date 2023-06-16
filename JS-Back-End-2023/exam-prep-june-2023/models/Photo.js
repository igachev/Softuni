const mongoose = require('mongoose')

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true,'name is required']
    },
    image: {
        type: String,
        required:[true,'image is required']
    },
    age: {
        type: Number,
        required:[true,'age is required']
    },
    description: {
        type: String,
        required:[true,'description is required']
    },
    location: {
        type: String,
        required:[true,'location is required']
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