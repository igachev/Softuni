const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required:[true,'username is required']
    },
    email: {
        type: String,
        required:[true,'email is required']
    },
    password: {
        type: String,
        required:[true,'password is required']
    },
})

userSchema.pre('save', async function() {
    const hashedPassword = await bcrypt.hash(this.password,10)
    this.password = hashedPassword
})

userSchema.methods.validatePassword = async function(pass) {
    const checkPassword = await bcrypt.compare(pass,this.password)
    return checkPassword
}

const User = mongoose.model('User',userSchema)

module.exports = User;