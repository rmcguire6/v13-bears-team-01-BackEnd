import React from 'react'
import ReminderItem from '../../components/reminder-item/ReminderItem'

const ReminderList = (props) => {
  return props.reminders.map((reminder) => (
    <ReminderItem
      key={reminder.id}
      id={reminder.reminder}
      text={reminder.text}
      location={reminder.location}

      list={reminder.list}
    />
  ))
}
export { ReminderList as default }
