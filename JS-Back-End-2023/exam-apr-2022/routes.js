const router = require('express').Router()
const homeController = require('./controllers/homeController.js')
const authController = require('./controllers/authController.js')
const auctionController = require('./controllers/auctionController.js')

router.use(homeController)
router.use(authController)
router.use('/auction',auctionController)

router.get('**', (req,res) => {
    res.render('404')
})

module.exports = router