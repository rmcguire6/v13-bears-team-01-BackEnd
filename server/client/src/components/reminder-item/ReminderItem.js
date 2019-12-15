import React from 'react'
import { List } from 'semantic-ui-react'

const ReminderItem = (props) => {
  return (

    <section>
      <List.Item><List.Icon name='square' />
        {props.reminder.text}
        {props.reminder.location ? <List.Icon name='location arrow' /> : ''}
        {props.reminder.date ? props.reminder.date : ''}
      </List.Item>
    </section>
  )
}
export default ReminderItem
