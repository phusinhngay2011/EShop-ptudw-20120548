"use strict"
const PUBLIC_STATIC_WEB_FOLDER = '/public'
const VIEWS = '/views'
const LAYOUTS = VIEWS + '/layouts'
const PARTIAL = VIEWS + '/partials'
const EXT_NAME = 'hbs'
const DEFAULT_LAYOUT = 'layout'

// app
const express = require("express")
const app = express()
const port = process.env.port || 2011
const express_handlerbars = require('express-handlebars')
// const { use } = require("passport")
const {createStarList} = require("./controllers/handlebarsHelper")
const {createPagination} = require("express-handlebars-paginate")
const session  = require('express-session')

// config public static web folder
app.use(express.static(__dirname + PUBLIC_STATIC_WEB_FOLDER))

// config express-handlerbars
app.engine('hbs', express_handlerbars.engine({
  layoutsDir: __dirname + LAYOUTS,
  partialsDir: __dirname + PARTIAL,
  extname: EXT_NAME,
  defaultLayout: DEFAULT_LAYOUT,
  runtimeOptions: {
    allowProtoPropertiesByDefault: true
  },
  helpers:{
    createStarList,
    createPagination
  }
}))

app.set('view engine', EXT_NAME)


// Cau hinh su dung doc du lieu
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// cau hinh su dung session
app.use(session({
  secret: 'S3cret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 20 * 60 * 1000
  }
}))

// middleware
app.use((req, res, next) => {
  let Cart = require('./controllers/cart')
  req.session.cart = new Cart(req.session.cart? req.session.cart:{})
  res.locals.quantity = req.session.cart.quantity
  next()
})

// routes
app.use('/', require('./routes/indexRouter'))
app.use('/products', require('./routes/productsRouter'))
app.use('/users', require('./routes/usersRouter'))

app.use((req, res, next)=>{
  res.status(404).render('error', {message: 'File not Found!'})
})

app.use((err, req, res, next) =>{
  console.error(err)
  res.status(500).render('error', {message: 'Internal Servel Error'})
})

// inititialize server
app.listen(port, () => {
  console.log(`Server is running on ${port}`)
})
