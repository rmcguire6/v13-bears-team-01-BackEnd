import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import CreateReminder from './pages/create-reminder-page/CreateReminder'
import EditReminder from './pages/edit-reminder-page/EditReminder'
import ReminderPage from './pages/reminder-page/ReminderPage'
const App = () => {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    const storedReminders = JSON.parse(localStorage.getItem('reminders'))
    if (storedReminders) {
      setReminders(storedReminders)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('reminders', JSON.stringify(reminders))
  }, [reminders])

  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <HomePage reminders={reminders} />
        </Route>
        <Route path='/create'>
          <CreateReminder reminders={reminders} setReminders={setReminders} />
        </Route>
        <Route path='/edit/:id'>
          <EditReminder reminders={reminders} setReminders={setReminders} />
        </Route>
        <Route path='/reminder/:id'>
          <ReminderPage reminders={reminders} setReminders={setReminders} />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
