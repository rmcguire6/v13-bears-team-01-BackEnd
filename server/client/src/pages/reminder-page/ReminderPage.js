import React from 'react'
import { useParams } from 'react-router-dom'
import { Button, Container, Header, List } from 'semantic-ui-react'

const ReminderPage = (props) => {
  const { id } = useParams()
  const currentReminder = props.reminders.find(reminder => reminder.id === id)

  return (
    <Container text>
      <section>
        <Header as='h3' textAlign='center'>{currentReminder.text}</Header>
        <List celled>
          <List.Item><List.Icon name='clock outline' />{currentReminder.date}</List.Item>
          <List.Item> <List.Icon name='location arrow' />{currentReminder.location ? '' : 'Remind me at a Location'}</List.Item>
          <List.Item><List.Icon name='flag' />{currentReminder.list}</List.Item>
        </List>
      </section>
      <section>
        <Button content='Complete' size='large' color='teal' />
      </section>
    </Container>
  )
}
export default ReminderPage
