import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { List } from 'semantic-ui-react'

const ReminderItem = ({ id, text, location, date, list }) => {
  const history = useHistory()
  return (
    <section>
      <List.Item>
        <Link to={`/edit/${id}`}>
          <List.Icon name='square' />
        </Link>
        {text}
        {location ? <List.Icon name='location arrow' /> : ''}
        {date ? date.slice(0, 21).toString() : ''}
        <List.Icon name='chevron right' onClick={() => { history.push(`/reminder/${id}`) }} />
      </List.Item>

    </section>
  )
}
export default ReminderItem
