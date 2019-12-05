const express = require('express')

const db = require('./models')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to Location Reminders! Please login or signup')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
