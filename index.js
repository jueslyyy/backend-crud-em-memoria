const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

const list =['Java', 'Kotlin','Android']

// Endpoint Read All [GET] /personagem

app.get('/personagem', function(req, res) {
    res.send(list)
})

app.listen(3000)