import React, { useState } from 'react'
import { Button, Form, Grid, Segment } from 'semantic-ui-react'
import Date from '../date/Date'

const ReminderForm = (props) => {
  const [text, setText] = useState(props.reminder ? props.reminder.text : '')
  const [date, setDate] = useState(props.reminder ? props.reminder.date : '')
  const [location, setLocation] = useState(props.reminder ? props.reminder.location : '')
  const [list, setList] = useState(props.reminder ? props.reminder.list : '')
  const [isCompleted, setIsCompleted] = useState(false)

  const onChange = (newDate) => {
    if (newDate) {
      setDate(newDate.toString())
    } else {
      setDate('')
    }
  }
  const onSubmit = (e) => {
    e.preventDefault()
    setIsCompleted(false)
    props.onSubmit({ text, location, date, list, isCompleted })
    setText('')
    setLocation('')
    setList('')
  }

  return (
    <Grid centered columns={1}>
      <Grid.Column>
        <Form>
          <Segment>
            <Form.Input
              className='form-element'
              fluid
              placeholder='Remind me to...'
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Form.Input
              className='form-element'
              fluid
              icon='location arrow'
              iconPosition='left'
              placeholder='At a Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
            <Form.Input
              className='form-element'
              fluid
              icon='flag'
              iconPosition='left'
              placeholder='Add to a List'
              value={list}
              onChange={(e) => setList(e.target.value)}
            />
            <Date onChange={onChange} />
          </Segment>
          <Button className='button' fluid size='medium' onClick={onSubmit}>Done</Button>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
export { ReminderForm as default }
