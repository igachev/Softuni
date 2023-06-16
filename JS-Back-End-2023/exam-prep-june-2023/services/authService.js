const User = require('../models/User.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')
const constants = require('../config/constants.js')

exports.login = async (username,password) => {
    const user = await User.findOne({username})

 if(!user) {
    throw new Error('Username or password is invalid')
 }

 const checkPassword = await user.validatePassword(password)

 if(!checkPassword) {
    throw new Error('Username or password is invalid')
 }

 const payload = {_id: user._id, username: user.username, email: user.email}

 const token = await jwt.sign(payload,constants.JWT_SECRET)

 return token
}

exports.register = async (username,email,password,repeatPassword) => {
 const user = await User.findOne({username})

 if(user) {
    throw new Error('User already exists')
 }

 if(password !== repeatPassword) {
    throw new Error('Passwords do not match')
 }

 await User.create({username,email,password})
}
