const express = require('express')
const reminderRouter = require('./routers/reminders')
const db = require('./models')

const app = express()
app.use(express.json())
app.use(reminderRouter)

app.get('/', (req, res) => {
  res.send('Welcome to Checked! Please login or signup')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
