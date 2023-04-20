const mongoose = require('mongoose')

const cubeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    imageUrl: {
        type: String,
        required: true,
       // match: /^http[s]?:\/\//
    },
    difficultyLevel: {
        type: Number,
        required: true,
        max: 6,
        min: 1
    },
    // relation between cube and accessory
    accessories: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Accessory'
        }
    ],
    // relation between cube and owner
    owner: {
        type: mongoose.Types.ObjectId,
        ref:'User'
    }
})

const Cube = mongoose.model('Cube',cubeSchema)

module.exports = Cube