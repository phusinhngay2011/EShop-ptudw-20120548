"use strict";
const PUBLIC_STATIC_WEB_FOLDER = '/public'
const VIEWS = '/views'
const LAYOUTS = VIEWS + '/layouts'
const PARTIAL = VIEWS + '/partials'
const EXT_NAME = 'hbs'
const DEFAULT_LAYOUT = 'layout'

// app
const express = require("express");
const app = express();
const port = process.env.port || 2011;
const express_handlerbars = require('express-handlebars');
// const { use } = require("passport");
const {createStarList} = require("./controllers/handlebarsHelper")

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
    createStarList
  }
}))

app.set('view engine', EXT_NAME)

// routes
app.use('/', require('./routes/indexRouter'))
app.use('/products', require('./routes/productsRouter'))
app.use((req, res, next)=>{
  res.status(404).render('error', {message: 'File not Found!'})
})
app.use((err, req, res, next) =>{
  console.error(err)
  res.status(500).render('error', {message: 'Internal Servel Error'})
})

// inititialize server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
