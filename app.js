var express = require('express')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views')
app.set('view engine', 'ejs')
app.listen(port)

console.log('Service is running on port ' + port)

app.get('/', function(req, res){
    res.render('index', {

    })
})
