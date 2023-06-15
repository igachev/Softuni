const router = require('express').Router()
const authService = require('../services/authService.js')

router.get('/register',(req,res) => {
    res.render('./authView/register')
})

router.post('/register', async (req,res) => {
    const {username,email,password,repeatPassword} = req.body;

    try {
        await authService.register(username,email,password,repeatPassword)
        const token = await authService.login(username,password)
        res.cookie('auth', token)
        res.redirect('/')
    } catch (err) {
        
    }
})

router.get('/login',(req,res) => {
    res.render('./authView/login')
})

router.post('/login', async (req,res) => {
    const {username,password} = req.body;

    try {
        const token = await authService.login(username,password)
        res.cookie('auth', token)
        res.redirect('/')
    } catch (err) {
        
    }
})

module.exports = router