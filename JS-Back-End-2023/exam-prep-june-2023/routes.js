const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const authController = require('./controllers/authController.js')
const photoController = require('./controllers/photoController.js')

router.use(homeController)
router.use(authController)
router.use('/photos',photoController)

router.get('**',(req,res) => {
    res.render('404')
})

module.exports = router