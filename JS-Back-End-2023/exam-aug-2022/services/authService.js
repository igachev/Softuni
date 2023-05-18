const User = require('../models/User.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')
const constants = require('../config/constants.js')

exports.register = async (email,username,password,rePass) => {
    const existingUser = await User.findOne({email})
    if(existingUser) {
        throw new Error('User already exists')
    }

    if(password !== rePass) {
        throw new Error('Password missmatch!')
    }

     await User.create({username,email,password})
}

exports.login = async (email,password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('Invalid username or password')
    }

    const checkPassword = await user.validatePassword(password)

    if(!checkPassword) {
        throw new Error('Invalid username or password')
    }

    const payload = {_id: user._id, email: user.email, username: user.username}
    const token = await jwt.sign(payload,constants.JWT_SECRET)
    return token
}