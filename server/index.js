const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Welcome to Location Reminders! Please login or signup')
})

const PORT = 5000
app.listen(PORT)
