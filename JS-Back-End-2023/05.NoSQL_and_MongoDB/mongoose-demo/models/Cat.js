const mongoose = require('mongoose')

const catSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 4
    },
    age: {
        type: Number,
        min: 3
    },
    breed: {
        type: String,
        enum: ['Persian','Angora','Domestic','British Shorthair'] 
    }
})

// method
catSchema.methods.makeSound = function() {
    console.log(`Hello my name is ${this.name} and meow`);
}

// virtual property
catSchema.virtual('info').get(function() {
    return `${this.name} - ${this.age} age , ${this.breed}`
})

// validation methods
catSchema.path('name').validate(function() {
    return this.name.startsWith('N')
}, 'Name should start with N')

const Cat = mongoose.model('Cat',catSchema)

module.exports = Cat