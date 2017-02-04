const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('../build'))

app.get('/', function(req, res) {
    // res.send('Hello, too young too simple, somtimes naive!')
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

app.listen(1926, function() {
    console.log('Listening on port 1926')
})
