const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const authController = require('./controllers/authController.js')
const bookController = require('./controllers/bookController.js')

router.use(homeController)
router.use(authController)
router.use('/books', bookController)

router.get('*', (req,res) => {
    res.render('404')
})

module.exports = router