const handlebars = require('express-handlebars')

function setupViewEngine(app) {
app.engine('.hbs', handlebars.engine({extname: '.hbs'}))
app.set('view engine', '.hbs')
app.set('views','./views')
}

module.exports = setupViewEngine