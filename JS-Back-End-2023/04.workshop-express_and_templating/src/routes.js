const express = require('express')
const Router = express.Router

const cubeController = require('./controllers/cubeController.js')
const homeController = require('./controllers/homeController.js')

const router = Router()

router.get('/', homeController.getHomePage)
router.get('/about', homeController.getAboutPage)
router.get('/404', homeController.getErrorPage)

router.get('/create', cubeController.getCreateTube)
router.post('/create', cubeController.postCreateTube)
router.get('/details/:cubeId', cubeController.getDetails)

module.exports = router