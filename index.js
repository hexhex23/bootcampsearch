// express set up
var express = require('express')
var app = express()
var port = process.env.PORT || 4000

app.get('/', function (req, res) {
  res.render('./search/contact')
})

// setup the ejs template
app.set('view engine', 'ejs')


app.listen(port, function () {
  console.log('app is running at ' + port)
})
