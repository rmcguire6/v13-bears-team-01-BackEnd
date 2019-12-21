import React, { useState, useEffect } from 'react'
import RemindersContext from './context/reminders-context'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import CreateReminder from './pages/create-reminder-page/CreateReminder'
import EditReminder from './pages/edit-reminder-page/EditReminder'
import ReminderPage from './pages/reminder-page/ReminderPage'
const App = () => {
  const [reminders, setReminders] = useState([])
  useEffect(() => {
    const reminders = JSON.parse(localStorage.getItem('tasks'))
    if (reminders) {
      setReminders(reminders)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(reminders))
    console.log(reminders)
  }, [reminders])

  return (
    <RemindersContext.Provider value={{ reminders, setReminders }}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>
          <Route path='/create'>
            <CreateReminder />
          </Route>
          <Route path='/edit/:id'>
            <EditReminder />
          </Route>
          <Route path='/reminder/:id'>
            <ReminderPage />
          </Route>
        </Switch>
      </Router>
    </RemindersContext.Provider>
  )
}
export default App
