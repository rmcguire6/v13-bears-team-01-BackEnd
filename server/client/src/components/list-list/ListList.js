import React, { useContext } from 'react'
import RemindersContext from '../../context/reminders-context'
import ListOfListsItem from '../../components/list-list-item/ListOfListsItem'

const ListList = (props) => {
  const { reminders } = useContext(RemindersContext)
  const listOfLists = new Set()
  reminders.forEach((reminder) => listOfLists.add(reminder.list))
  const arrayOfLists = Array.from(listOfLists)
  return arrayOfLists.map((list, index) => (
    <ListOfListsItem key={index} list={list} />
  ))
}
export { ListList as default }
