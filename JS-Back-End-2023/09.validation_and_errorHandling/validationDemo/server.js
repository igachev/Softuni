const express = require('express')

const app = express()
//const validators = require('./validators.js')
const {isEmail} = require('./middlewares/validatorMiddleware.js')
const validator = require('validator')

app.use(express.urlencoded({extended:false}))

app.get('/',(req,res) => {
    res.send(`
    <h1>Hello</h1>
    <p><a href="/login">Login</a></p>
    <p><a href="/register">Register</a></p>
    <p><a href="/profile">Profile</a></p>
    <p><a href="/logout">Logout</a></p>
    `)
})

app.get('/login',(req,res) => {
    res.send(`
    <h1>Login</h1>
    <form method="post">
        <label for="email">Email:</label>
        <input type="text" id="email" name="email">
    
        <label for="password">Password:</label>
        <input type="password" name="password" id="password">
    
        <input type="submit" value="Login">
    </form>
    `)
    })

    //I can add middleware here isEmail
app.post('/login',(req,res) => {
    const {email,password} = req.body;

  //  if(validators.isEmail(email)) {
   //     return res.redirect('/404')
  //  }
  if(!validator.isStrongPassword(password)) {
    return res.redirect('/404')
  }



    res.redirect('/')
})

app.get('/404',(req,res) => {
    res.send('Not found!')
})

app.listen(5000,() => console.log('server is listening on port 5000...'))
