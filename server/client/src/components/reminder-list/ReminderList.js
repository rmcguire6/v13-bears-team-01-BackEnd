import React, { useContext } from 'react'
import RemindersContext from '../../context/reminders-context'
import ReminderItem from '../../components/reminder-item/ReminderItem'

const ReminderList = () => {
  const { reminders } = useContext(RemindersContext)
  return reminders.map((reminder) => (
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
