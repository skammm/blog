var express = require('express');
var app = express();
var path = require('path')
var router = require('./router')
var bodyParser = require('body-parser')
var session = require('express-session')

app.use('/public/',express.static(path.join(__dirname,'./public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'./node_modules/')))

app.engine('html', require('express-art-template'));
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}))

app.use(router)

app.listen(3000,function(){
  console.log('running.....')
})