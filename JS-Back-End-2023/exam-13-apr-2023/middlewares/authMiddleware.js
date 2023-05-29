const constants = require('../config/constants.js')
const jwt = require('../promisifyToken/jsonwebtoken.js')

exports.authMiddleware = async (req,res,next) => {
    const token = req.cookies['auth']

    if(token) {
        try {
    const decodedToken = await jwt.verify(token,constants.SECRET);
    res.locals.isVerified = true;
    req.isAuthenticated = true;
    req.user = decodedToken        
        } catch (err) {
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
