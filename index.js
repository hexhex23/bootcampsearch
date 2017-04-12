var express = require('express')
var app = express()
var port = process.env.PORT || 5000

var mongoose = require('mongoose')
var dbURI = process.env.PROD_MONGODB || 'mongodb://localhost:27017/Bootcamp'
mongoose.connect(dbURI)

//check if our connection is ok
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function() {
  // we're connected!
  console.log('really really connected')
})

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('view engine', 'ejs')

// var ejsLayouts = require('express-ejs-layouts')
// app.use(ejsLayouts)

var methodOverride = require('method-override')
app.use(methodOverride('_method'))


// app.use(express.static('public'))
//
// var usersController = require('./controllers/users_controller')
// app.use(usersController)

app.get('/', function (req, res) {
  res.render('./search/contact')
})

app.get('/users', function (req, res) {
  res.render('./prospect/prospectlogin')
})

app.listen(port, function () {
  console.log('app is running at ' + port)
})
