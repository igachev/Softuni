const express = require('express')

const routes = require('./routes.js')
const config = require('./config/index.js')

const app = express()

const setupViewEngine = require('./config/viewEngine.js')
setupViewEngine(app)


app.use(express.static('./src/public'))
app.use(express.urlencoded({extended:false}))
app.use(routes)

app.listen(config.PORT, () => console.log(`Server is running on port ${config.PORT}...`))