const router = require('express').Router()

const authService = require('../services/authService.js')
const {parseMongooseError} = require('../utils/errorUtils.js')

router.get('/login',(req,res) => {
res.render('auth/login')
})

router.post('/login', async (req,res) => {
    const {username,password} = req.body;

  try {
    const token = await authService.login(username,password)
    //console.log(token);
    //send cookie to client
    res.cookie('auth',token,{httpOnly:true})
    res.redirect('/')

  } catch (err) {
    console.log(err);
    return res.render('auth/login',{error:err.message})
  }
 // res.redirect('/')
})

router.get('/register',(req,res) => {
res.render('auth/register')
})

router.post('/register', async(req,res,next) => {
    const {username,password,repeatPassword} = req.body;

    if(password !== repeatPassword) {
     return res.render('auth/register', {error: 'password missmatch!'})
     // return next(new Error('password missmatch!'))
    }

    const existingUser = await authService.getUserByUsername(username)

    if(existingUser) {
      return res.render('auth/register', {error: 'user already exists!'})
        //return res.redirect('/404')
    }

    try {
      const user = await authService.register(username,password)
      console.log(user);
    } catch (err) {
      console.log(err.errors);
      const errors = parseMongooseError(err)
      return res.render('auth/register',{error:errors[0]})
    }

    res.redirect('/login')
})

router.get('/logout',(req,res) => {
  res.clearCookie('auth')
  res.redirect('/')
})

module.exports = router