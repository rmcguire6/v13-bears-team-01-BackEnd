import React, { useContext } from 'react'
import RemindersContext from '../../context/reminders-context'
import { useParams, useHistory } from 'react-router-dom'
import { Button, Container, Header, List } from 'semantic-ui-react'

const ReminderPage = () => {
  const { reminders } = useContext(RemindersContext)
  const { id } = useParams()
  const history = useHistory()
  const currentReminder = reminders.find(reminder => reminder.id === id)
  return (
    <Container text>
      <section>
        <Header as='h3' textAlign='center'>{currentReminder.text}</Header>
        <List celled>
          <List.Item><List.Icon name='clock' />{currentReminder.date}</List.Item>
          <List.Item> <List.Icon name='location arrow' />{currentReminder.location ? '' : 'Remind me at a Location'}</List.Item>
          <List.Item><List.Icon name='flag' />{currentReminder.list}</List.Item>
        </List>
      </section>
      <section>
        <Button onClick={() => history.push('/')} content='Complete' size='large' color='teal' />
      </section>
    </Container>
  )
}
export default ReminderPage
