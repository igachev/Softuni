const jwt = require('../promisifyToken/jsonwebtoken.js')
const User = require('../models/User.js')
const constants = require('../config/constants.js')

exports.login = async (email,password) => {
    const user = await User.findOne({email})

    if(!user) {
        throw new Error('Invalid username or password')
    }

    const checkPassword = await user.validatePassword(password)

    if(!checkPassword) {
        throw new Error('Invalid username or password')
    }

    const payload = {
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        }

    const token = await jwt.sign(payload,constants.JWT_SECRET)
    return token;
}

exports.register = async (email,firstName,lastName,password,repeatPassword) => {
    const user = await User.findOne({email})

    if(user) {
        throw new Error('User already exists!')
    }

    if(password !== repeatPassword) {
        throw new Error('Passwords do not match!')
    }

    await User.create({email,password,firstName,lastName})

    
}

exports.getAuthor = async (authorId) => {
    const author = await User.findById(authorId).lean()
    const authorName = author.firstName + ' ' + author.lastName
    return authorName
}

exports.getBidder = async (bidderId) => {
    const bidder = await User.findById(bidderId).lean()
    if(bidder == null) {
        return false
    }
    const bidderName = bidder?.firstName + ' ' + bidder?.lastName;
    return bidderName
}