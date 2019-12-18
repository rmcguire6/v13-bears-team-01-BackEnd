import React from 'react'

import ListOfListsItem from '../../components/list-list-item/ListOfListsItem'

const ListList = (props) => {
  const listOfLists = new Set()
  props.reminders.forEach((reminder) => listOfLists.add(reminder.list))
  const arrayOfLists = Array.from(listOfLists)
  return arrayOfLists.map((list, index) => (
    <ListOfListsItem key={index} list={list} />
  ))
}
export { ListList as default }
