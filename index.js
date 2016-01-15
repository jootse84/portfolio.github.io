var express = require('express')
var app = express()
var engines = require('consolidate')

app.set('views', __dirname + '/views')
app.engine('html', engines.mustache)
app.set('view engine', 'html')

app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('./index.html')
})

app.listen(3000, function () {
  console.log('Runing UI on port 3000')
})
