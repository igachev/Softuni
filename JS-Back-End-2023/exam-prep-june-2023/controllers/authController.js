const router = require('express').Router()
const authService = require('../services/authService.js')
const {errorMsg} = require('../utils/errorMsg.js')
const authMiddleware = require('../middlewares/authMiddleware.js')
const photoService = require('../services/photoService.js')

router.get('/register',authMiddleware.isAlreadyLogged,(req,res) => {
    res.render('./authView/register')
})

router.post('/register',authMiddleware.isAlreadyLogged, async (req,res) => {
    const {username,email,password,repeatPassword} = req.body;

    try {
        await authService.register(username,email,password,repeatPassword)
        const token = await authService.login(username,password)
        res.cookie('auth', token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/register',{error: errorMsg(err)}) 
    }
})

router.get('/login',authMiddleware.isAlreadyLogged,(req,res) => {
    res.render('./authView/login')
})

router.post('/login',authMiddleware.isAlreadyLogged, async (req,res) => {
    const {username,password} = req.body;

    try {
        const token = await authService.login(username,password)
        res.cookie('auth', token)
        res.redirect('/')
    } catch (err) {
        return res.render('./authView/login',{error: errorMsg(err)})
    }
})

router.get('/logout', authMiddleware.isAuthorized, (req,res) => {
    res.clearCookie('auth')
    res.redirect('/')
})

router.get('/profile', authMiddleware.isAuthorized, async (req,res) => {
    const userId = req.user?._id;
    const photos = await photoService.getProfileInfo(userId)
    const username = req.user?.username;
    const email = req.user?.email;
    
    res.render('./authView/profile',{photos,username,email})
})

module.exports = router