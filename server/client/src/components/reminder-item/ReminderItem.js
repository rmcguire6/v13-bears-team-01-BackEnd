import React from 'react'
import { List } from 'semantic-ui-react'

const ReminderItem = (props) => {
  return (

    <section>
      <List.Item><List.Icon name='square' />
        {props.text ? props.text : ''}
        {props.location ? <List.Icon name='location arrow' /> : ''}
        {props.date ? props.reminder.date : ''}
        {props.list ? props.reminder.list : ''}
      </List.Item>
    </section>
  )
}
export default ReminderItem
