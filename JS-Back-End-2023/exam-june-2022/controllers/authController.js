const router = require('express').Router()
const authService = require('../services/authService.js')
const {getErrorMessage} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')

router.get('/register', (req,res) => {
    res.render('./authView/register')
})

router.post('/register', async (req,res) => {
    const {username,email,password,repeatPassword} = req.body;

    try {
         await authService.register(username,email,password,repeatPassword)
        const token = await authService.login(email,password)
        res.cookie('auth',token)
        res.redirect('/')
    } catch (err) {
       return res.render('./authView/register', {error: getErrorMessage(err)})
    }
})

router.get('/login', (req,res) => {
    res.render('./authView/login')
})

router.post('/login', async (req,res) => {
    const {email,password} = req.body;

    try {
        const token = await authService.login(email,password)
        res.cookie('auth',token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/login', {error: getErrorMessage(err)})
    }
})

router.get('/logout', authMiddleware.isAuthorized, (req,res) => {
    res.clearCookie('auth')
    res.redirect('/')
})

module.exports = router