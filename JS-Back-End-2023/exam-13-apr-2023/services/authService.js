const User = require('../models/User.js')
const constants = require('../config/constants.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')

exports.login = async (email,password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('Invalid username or password')
    }

    const checkPassword = await user.validatePassword(password)

    if(!checkPassword) {
        throw new Error('Invalid username or password')
    }

    const payload = {_id:user._id, email:user.email, username:user.username}
    const token = await jwt.sign(payload,constants.SECRET)
    return token
}

exports.register = async (username,email,password,repeatPassword) => {
    const user = await User.findOne({email})

    if(user) {
        throw new Error('user already exists!')
    }

    if(password !== repeatPassword) {
        throw new Error('password missmatch!')
    }

    await User.create({username,email,password})
    
}