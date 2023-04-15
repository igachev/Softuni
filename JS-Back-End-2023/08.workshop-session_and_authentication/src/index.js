const express = require('express')
const cookieParser = require('cookie-parser')

const routes = require('./routes.js')
const config = require('./config/index.js')
const authMiddleware = require('./middlewares/authMiddleware.js')
const initDatabase = require('./config/databaseInit.js')

const app = express()

const setupViewEngine = require('./config/viewEngine.js')
setupViewEngine(app)


app.use(express.static('./src/public'))
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
app.use(authMiddleware.authentication)
app.use(routes)

initDatabase()
.then(() => 
app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))
)
.catch((err) => console.error(err))