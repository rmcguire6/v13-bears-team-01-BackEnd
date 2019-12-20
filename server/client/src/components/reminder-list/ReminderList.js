import React from 'react'
import ReminderItem from '../../components/reminder-item/ReminderItem'

const ReminderList = (props) => {
  return props.reminders.map((reminder) => (
    <ReminderItem
      key={reminder.id}
      id={reminder.id}
      text={reminder.text}
      date={reminder.date}
      location={reminder.location}
      list={reminder.list}
    />
  ))
}
export { ReminderList as default }
