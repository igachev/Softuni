const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required:[true,'email is required']
    },
    password: {
        type: String,
        required: [true,'password is required'],
        minLength:[5,'password must be at least 5 character long']
    },
    firstName: {
        type: String,
        required: [true,'first name is required'],
        minLength:[1,'first name must be at least 1 character long']
    },
    lastName: {
        type: String,
        required: [true,'last name is required'],
        minLength:[1,'last name must be at least 1 character long']
    }
})

userSchema.pre('save', async function() {
const hashedPassword = await bcrypt.hash(this.password,10);
this.password = hashedPassword
})

userSchema.methods.validatePassword = async function(pass)  {
const checkPassword = await bcrypt.compare(pass,this.password)
return checkPassword
}

const User = mongoose.model('User',userSchema)

module.exports = User;