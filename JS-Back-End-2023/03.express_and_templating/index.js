const express = require('express')
const handlebars = require('express-handlebars')


const loggerMiddleware = require('./loggerMiddleware.js')

const app = express()

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))
// works for all requests
app.use(loggerMiddleware)

app.get('/', (req,res) => {
    res.render('home')
})

app.get('/oldHomePage', (req,res) => {
  res.send(`
    <html>
    <head>
    <link rel="stylesheet" href="/css/style.css" />
    </head>
    <body>
    <h1>Hello from express</h1>
    <a href="/cats">Cats</a>
    </body>
    </html>`) 

})

app.get('/cats',(req,res) => {
    const cats = [
        {name:'Navcho', breed:'Persian', age:7},
        {name:'Sisa', breed:'Angora', age:12},
        {name:'Gary', breed:'British-gray', age:8}
    ]
    res.render('cats', {cats})
})

app.get('/cats/1',(req,res) => {
    // res.download('./cat.jpg')
    res.sendFile('./cat.jpg',{root: __dirname})
})

let validateCatIdMiddleware = (req,res,next) => {
    console.log('Middleware logger');
    let catId = Number(req.params.catId)
    if(!catId) {
       return res.send('Invalid catId!')
    }
    req.catId = catId
        next() 
}

app.get('/cats/:catId', validateCatIdMiddleware, (req,res) => {
  //  res.send(`<h1>Individual cat page - catId: ${req.params.catId}</h1>`)
  res.render('cat', {id: req.params.catId, isOdd:req.catId % 2 !== 0})
})

app.post('/cats', (req,res) => {
    res.send('cat received')
})

app.put('/cats', (req,res) => {
res.send('cat is updated')
})

app.delete('/cats',(req,res) => {
    res.send('cat is deleted')
})

app.get('/json', (req,res) => {
    res.json({ok: true, message: 'hello from json'})
})

app.get('/redirect',(req,res) => {
    res.redirect('/redirected')
})

app.get('/redirected',(req,res) => {
    res.send('This is redirected page')
})

app.listen(5000,() => console.log('server is on port 5000...'))


