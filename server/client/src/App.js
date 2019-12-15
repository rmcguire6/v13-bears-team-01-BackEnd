import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import CreateReminder from './pages/create-reminder-page/CreateReminder'
import EditReminder from './pages/edit-reminder-page/EditReminder'
import ReminderPage from './pages/reminder-page/ReminderPage'
import testReminders from './tests/fixtures/reminders'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/create'>
          <CreateReminder reminders={testReminders} />
        </Route>
        <Route path='/edit/:id'>
          <EditReminder />
        </Route>
        <Route path='/reminders/:id'>
          <ReminderPage reminders={testReminders} />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
