const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required: [true,'username is required'],
        minLength: [5,'username must be at least 5 characters long']
    },
    email: {
        type:String,
        required: [true,'email is required'],
        minLength: [10,'email must be at least 10 characters long']
    },
    password: {
        type:String,
        required: [true,'password is required'],
        minLength: [4,'password must be at least 4 characters long']
    },

})

userSchema.pre('save', async function() {
    const hashPassword = await bcrypt.hash(this.password,10)
    this.password = hashPassword
})

userSchema.methods.validatePassword = async function(password) {
    const comparePassword = await bcrypt.compare(password,this.password)
    return comparePassword
}

const User = mongoose.model('User',userSchema)

module.exports = User