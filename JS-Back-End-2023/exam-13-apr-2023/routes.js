const router = require('express').Router()

const homeController = require('./controllers/homeController.js')
const authController = require('./controllers/authController.js')
const gameController = require('./controllers/gameController.js')

router.use(homeController)
router.use(authController)
router.use('/games',gameController)

router.get('*', (req,res) => {
    res.render('404')
})

module.exports = router