require('dotenv').config()

const express = require('express')

const server = express()

const PORT = 5000

server.get('/api', (req, res) => {
    res.json({message: 'web43 is working'})
})

server.listen(5000, () => {
    console.log(`listening on ${PORT} `)
})