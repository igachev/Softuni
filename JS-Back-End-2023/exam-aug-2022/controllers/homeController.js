const router = require('express').Router()

router.get('/', (req,res) => {
    res.render('./homeView/home')
})

module.exports = router