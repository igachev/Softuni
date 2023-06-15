const router = require('express').Router()

router.get('/register',(req,res) => {
    res.render('./authView/register')
})

router.get('/login',(req,res) => {
    res.render('./authView/login')
})

module.exports = router