const express = require('express')

const app = express()

const constants = require('./config/constants.js')
const setupViewEngine = require('./config/viewEngine.js')
const initDatabase = require('./config/initDatabase.js')
const cookieParser = require('cookie-parser')
const routes = require('./routes.js')
const authMiddleware = require('./middlewares/authMiddleware.js')

setupViewEngine(app)

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(authMiddleware.authentication)
app.use(routes)

initDatabase()
.then(() => {
app.listen(constants.PORT, () => console.log(`Server is listening on PORT ${constants.PORT}...`))
})
