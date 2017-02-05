const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('../build'))

app.get('/*', function(req, res) {
    // res.send('Hello, too young too simple, somtimes naive!')
    res.sendFile(path.join(__dirname, '../build', 'index.html'))
})

const PORT = process.env.PORT || 1926

app.listen(PORT, function() {
    console.log(`Listening on port ...${PORT}`)
})
