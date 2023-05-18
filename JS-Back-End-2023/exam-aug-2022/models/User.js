const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'username required'],
        minLength: [4,'username must be at least 4 characters long']
    },
    email: {
        type:String,
        required: [true,'email required'],
        minLength: [10,'email must be at least 10 characters long']
    },
    password: {
        type:String,
        required: [true,'password required'],
        minLength: [3,'password must be at least 3 characters long']
    }
})

userSchema.pre('save', async function() {
    const hashPassword = await bcrypt.hash(this.password,10)
    this.password = hashPassword
})

userSchema.methods.validatePassword = async function(pass) {
    const comparePasswords = await bcrypt.compare(pass,this.password)
    return comparePasswords
}

const User = mongoose.model('User',userSchema)

module.exports = User