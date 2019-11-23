
const Sequelize = require('sequelize')

const dbLocation = './db/location-reminders'
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbLocation
})
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch(err => {
    console.error('Unable to connect to the database', err)
  })

module.exports = {
  sequelize
}
