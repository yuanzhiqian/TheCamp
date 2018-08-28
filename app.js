var express = require('express')
var routes = require('./routes')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/', routes.index)

app.listen(port)
console.log('Service is running on port ' + port)