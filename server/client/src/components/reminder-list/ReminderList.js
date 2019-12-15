import React from 'react'
import ReminderItem from '../../components/reminder-item/ReminderItem'
import testReminders from '../../tests/fixtures/reminders'
const ReminderList = () => {
  return testReminders.map((reminder) => (
    <ReminderItem key={reminder.id} reminder={reminder} />
  ))
}
export { ReminderList as default }
