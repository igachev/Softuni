const router = require('express').Router()
const {getErrorMessage} = require('../utils/errorMsg.js')
const authService = require('../services/authService.js')
const bookService = require('../services/bookService.js')
const authMiddleware = require('../middlewares/authMiddleware.js')

router.get('/login', (req,res) => {
    res.render('./authView/login')
})

router.post('/login', async (req,res) => {
    const {email,password} = req.body;

    try {
       const token = await authService.login(email,password);
       res.cookie('auth',token)
       res.redirect('/')
    } catch (err) {
        return res.render('./authView/login', {error: getErrorMessage(err)})
    }
})

router.get('/register', (req,res) => {
    res.render('./authView/register')
})

router.post('/register', async (req,res) => {
    const {email,username,password,rePass} = req.body;
    try {
        await authService.register(email,username,password,rePass)
        const token = await authService.login(email,password)
        res.cookie('auth',token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/register', {error:getErrorMessage(err)})
    }
})

router.get('/logout', authMiddleware.isAuthorized ,async (req,res) => {
    try {
        res.clearCookie('auth')
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
})

router.get('/profile', authMiddleware.isAuthorized ,async (req,res) => {
    try {
        const email = req.user.email
        const userId = req.user._id
        const wishedBooks = await bookService.getWishingList(userId)
        res.render('./authView/profile', {email,wishedBooks})
    } catch (err) {
        console.log(err);
    }
})

module.exports = router