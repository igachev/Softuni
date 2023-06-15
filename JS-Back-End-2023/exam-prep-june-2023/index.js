const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

const setupViewEngine = require('./config/viewEngine.js')
const initDatabase = require('./config/initDatabase.js')
const constants = require('./config/constants.js')



setupViewEngine(app)

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())



initDatabase()
.then(() => {
app.listen(constants.PORT, () => console.log(`Server is listening on PORT ${constants.PORT}...`))
})
.catch((err) => console.error(err))