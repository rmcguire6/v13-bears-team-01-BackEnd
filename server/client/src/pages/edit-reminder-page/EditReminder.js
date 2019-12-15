import React from 'react'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import reminders from '../../tests/fixtures/reminders'

const EditReminder = (props) => {
  const { id } = useParams()
  const reminder = reminders.find(reminder => reminder.id === id)
  const onSubmit = (reminder) => {
    console.log('updated', reminder)
  }
  return (
    <Container>
      <Header as='h3'>
        <Header.Content>Edit a Reminder</Header.Content>
      </Header>
      <ReminderForm
        onSubmit={onSubmit}
        reminder={reminder}
      />
    </Container>
  )
}
export { EditReminder as default }
