import React from 'react'

import ListOfListsItem from '../../components/list-list-item/ListOfListsItem'
import testReminders from '../../tests/fixtures/reminders'
const ListList = () => {
  const listOfLists = new Set()
  testReminders.forEach((reminder) => listOfLists.add(reminder.list))
  const arrayOfLists = Array.from(listOfLists)
  return arrayOfLists.map((list, index) => (
    <ListOfListsItem key={index} list={list} />
  ))
}
export { ListList as default }
