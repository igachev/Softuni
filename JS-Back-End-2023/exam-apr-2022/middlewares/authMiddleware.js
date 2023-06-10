
const jwt = require('../promisifyToken/jsonwebtoken.js')
const constants = require('../config/constants.js')

exports.authentication = async (req,res,next) => {
const token = req.cookies['auth'];

if(token) {
try {
    const decodedToken = await jwt.verify(token,constants.JWT_SECRET)
    req.user = decodedToken
    res.locals.isVerified = true;
    req.isAuthenticated = true;
} catch (error) {
    console.log(error.message);
    res.clearCookie('auth')
    res.redirect('/404')
}
}

next()
}

exports.isAuthorized = (req,res,next) => {

    if(!req.user) {
        res.redirect('/login')
    }
    next()
}

exports.isAlreadyLogged = (req,res,next) => {
    if(req.user) {
        res.redirect('/')
    }
    next()
}