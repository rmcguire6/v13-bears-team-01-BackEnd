'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Reminders', [{
     text: 'Get groceries',
  location: '15350 Roy Rogers Dr, Victorville, CA 92394',
  date: null,
  time: null,
  list: 'Errands',
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString()
   },
   {
    text: 'Dentist appointment',
    location: '',
    date: '12/15/19',
    time: '10:00',
    list: 'Appointments',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  
  },
  {
    text: 'Buy new computer',
    location: '2311 N Hollywood Way, Burbank, CA',
    date: null,
    time: null,
    list: 'Errands',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  
  },
  {
    text: 'Lunch with Sally',
    location: '',
    date: '12/13/19',
    time: '13:00',
    list: '',
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString()
  }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Reminders', null, {})
  }
};
