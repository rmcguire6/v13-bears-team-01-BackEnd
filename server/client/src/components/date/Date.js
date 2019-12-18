import React, { useState } from 'react'
import DateTimePicker from 'react-datetime-picker'

const Date = (props) => {
  const [date, setDate] = useState(null)

  const onChange = (date) => {
    setDate(date)
    props.onChange(date)
  }

  return (
    <>
      <DateTimePicker
        date={date}
        onChange={onChange}
      />
    </>
  )
}
export { Date as default }
