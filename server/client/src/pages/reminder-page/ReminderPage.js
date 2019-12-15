import React from 'react'
import { Button, Container, Header, Icon, List } from 'semantic-ui-react'
// import { useParams } from 'react-router-dom'

const ReminderPage = (props) => {
//   const { id } = useParams()
//   const reminder = props.reminders.find(reminder => reminder.id === id)
  const reminder = {
    id: '1',
    text: 'Get groceries',
    location: null,
    date: '12/16/19 ',
    list: 'Errands',
    createdAt: new Date()
  }
  return (
    <Container text>
      <section>
        <Header as='h3' textAlign='center'><Icon link name='chevron left' />{reminder.text}</Header>
        <List celled>
          <List.Item><List.Icon name='clock outline' />{reminder.date}</List.Item>
          <List.Item> <List.Icon name='location arrow' />{reminder.location ? '' : 'Remind me at a Location'}</List.Item>
          <List.Item><List.Icon name='flag' />{reminder.list}</List.Item>
        </List>
      </section>
      <section>
        <Button content='Complete' size='large' color='teal' />
      </section>
    </Container>
  )
}
export default ReminderPage
