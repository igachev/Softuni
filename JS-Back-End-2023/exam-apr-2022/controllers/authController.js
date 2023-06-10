const authService = require('../services/authService.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const errorMsg = require('../utils/errorMsg.js')
const router = require('express').Router()


router.get('/register', authMiddleware.isAlreadyLogged, (req,res) => {
    res.render('./authView/register')
})

router.post('/register', async (req,res) => {
    const {email,firstName,lastName,password,repeatPassword} = req.body;

    try {
        await authService.register(email,firstName,lastName,password,repeatPassword)
        const token = await authService.login(email,password)
        res.cookie('auth',token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/register', {error: errorMsg(err)})
    }
})

router.get('/login', authMiddleware.isAlreadyLogged, (req,res) => {
    res.render('./authView/login')
})

router.post('/login', async (req,res) => {
    const {email,password} = req.body;

    try {
        const token = await authService.login(email,password)
        res.cookie('auth',token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/login', {error: errorMsg(err)})
    }
})

router.get('/logout', authMiddleware.isAuthorized, (req,res) => {
    try {
        res.clearCookie('auth')
        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
})

module.exports = router