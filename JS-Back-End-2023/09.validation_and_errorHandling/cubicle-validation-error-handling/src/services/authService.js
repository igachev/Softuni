
const User = require('../models/User.js')
const config = require('../config/index.js')
const jwt = require('../lib/jsonwebtoken.js')
const AppError = require('../utils/AppError.js')


exports.getUserByUsername = (username) => {
    return User.findOne({username})
} 

exports.register =  (username,password) => {
return User.create({username,password})
}

exports.login = async (username,password) => {
    const user = await this.getUserByUsername(username)

    if(!user) {
        throw new AppError('Invalid username!', {user})
       /* throw {
            message: 'Invalid username!',
            data: user
        } */
     // throw new Error('Invalid username!')
    }

    const isValid = await user.validatePassword(password)

    if(!isValid) {
        throw new AppError('Invalid password!')
      /*  throw {
            message: 'Invalid password!',
            data: user
        } */
    }

    const payload = {_id: user._id, username: user.username}
    const token = jwt.sign(payload,config.SECRET, {expiresIn:'2h'})
    return token;


}