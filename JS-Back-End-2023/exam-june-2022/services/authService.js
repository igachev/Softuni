const User = require('../models/User.js')
const constants = require('../config/constants.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')

exports.register = async function(username,email,password,repeatPassword) {
const existingUser = await User.findOne({email})

if(existingUser) {
    throw new Error('User already exists!')
}

if(password !== repeatPassword) {
    throw new Error('Password missmatch!')
}

const newUser = await User.create({username,email,password})
return newUser
}

exports.login = async function(email,password) {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('Invalid email or password')
    }

    const checkPassword = await user.validatePassword(password)

    if(!checkPassword) {
        throw new Error('Invalid email or password')
    }

    const payload = {_id: user._id, email: user.email, username: user.username}
    const token = await jwt.sign(payload,constants.JWT_SECRET)
    return token
}