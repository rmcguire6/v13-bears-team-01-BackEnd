import React from 'react'
import uuid from 'uuid'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'

const CreateReminder = (props) => {
  const onSubmit = ({ id, text, date, location, list, isCompleted }) => {
    const reminder = {
      id: uuid(),
      text,
      date,
      location,
      list,
      isCompleted
    }
    props.setReminders(props.reminders.concat(reminder))
    console.log('create new reminder', props.reminders)
  }
  return (
    <Container>
      <Header as='h3' textAlign='center'>Add a Reminder</Header>
      <ReminderForm onSubmit={onSubmit} />
    </Container>
  )
}
export { CreateReminder as default }
