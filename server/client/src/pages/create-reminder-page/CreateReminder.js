import React from 'react'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'

const CreateReminder = (props) => {
  const onSubmit = (reminder) => {
    props.setReminders(props.reminders.concat(reminder))
    console.log('create new reminder', props.reminders)
  }
  return (
    <Container>
      <Header as='h3'>
        <Header.Content>Add a Reminder</Header.Content>
      </Header>
      <ReminderForm onSubmit={onSubmit} />
    </Container>
  )
}
export { CreateReminder as default }
