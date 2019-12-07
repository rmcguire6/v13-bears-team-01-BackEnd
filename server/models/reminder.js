'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reminder = sequelize.define('Reminder', {
    text: DataTypes.STRING,
    list: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING
  }, {});
  Reminder.associate = function(models) {
    // associations can be defined here
  };
  return Reminder;
};