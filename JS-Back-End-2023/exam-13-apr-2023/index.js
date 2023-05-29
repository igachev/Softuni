const express = require('express')
const app = express()

const constants = require('./config/constants.js')
const setupViewEngine = require('./config/viewEngine.js')
const initDatabase = require('./config/initDatabase.js')
const routes = require('./routes.js')
const cookieParser = require('cookie-parser')
const {authMiddleware} = require('./middlewares/authMiddleware.js')

setupViewEngine(app)

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))
app.use(cookieParser())
app.use(authMiddleware)
app.use(routes)

initDatabase()
.then(() => {
    app.listen(constants.PORT, () => {
        console.log(`Server started on port ${constants.PORT}`);
    })
})