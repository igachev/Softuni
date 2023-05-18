const constants = require('../config/constants.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')

exports.authentication = async (req,res,next) => {
    const token = req.cookies['auth']

    if(token) {
       try {
        const decodedToken = await jwt.verify(token,constants.JWT_SECRET)
        req.user = decodedToken
        req.isAuthenticated = true;
        res.locals.isVerified = true;
       } catch (err) {
        console.log(err.message);
        res.clearCookie('auth')
        res.redirect('/404')
       }
    }

    next()
}

exports.isAuthorized = (req,res,next) => {
    if(!req.user) {
        return res.redirect('/login')
    }
    next()
}