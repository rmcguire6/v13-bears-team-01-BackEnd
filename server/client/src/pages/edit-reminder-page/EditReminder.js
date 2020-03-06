import React, { useContext } from 'react'
import RemindersContext from '../../context/reminders-context'
import ReminderForm from '../../components/reminder-form/ReminderForm'
import { Container, Header } from 'semantic-ui-react'
import { useParams, useHistory } from 'react-router-dom'

const EditReminder = () => {
  const { reminders, setReminders } = useContext(RemindersContext)
  const { id } = useParams()
  const history = useHistory()
  const currentReminder = reminders.find(reminder => reminder.id === id)
  const onSubmit = (currentReminder) => {
    setReminders(reminders.map((reminder) => {
      if (reminder.id === id) {
        return {
          ...currentReminder,
          id
        }
      } else {
        return reminder
      }
    }))
    history.push('/')
  }

  return (
    <Container>
      <Header as='h3'>
        <Header.Content>Edit a Reminder</Header.Content>
      </Header>
      <ReminderForm
        onSubmit={onSubmit}
        reminder={currentReminder}
      />
    </Container>
  )
}
export { EditReminder as default }
