import React, { useContext } from 'react'
import RemindersContext from '../../context/reminders-context'
import { useHistory } from 'react-router-dom'
import uuid from 'uuid'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'

const CreateReminder = () => {
  const { reminders, setReminders } = useContext(RemindersContext)
  const history = useHistory()
  const onSubmit = ({ text, date, location, list }) => {
    const reminder = {
      id: uuid(),
      text,
      date,
      location,
      list,
      createdAt: null,
      updatedAt: null
    }
    setReminders(reminders.concat(reminder))
    history.push('/')
  }
  return (
    <Container>
      <Header as='h3' textAlign='center'>Add a Reminder</Header>
      <ReminderForm onSubmit={onSubmit} />
    </Container>
  )
}
export { CreateReminder as default }
