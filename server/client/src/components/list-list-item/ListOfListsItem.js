import React from 'react'
import { List } from 'semantic-ui-react'

const ListOfListsItem = (props) => {
  return (

    <section>
      <List.Item>{props.list}</List.Item>
    </section>
  )
}
export default ListOfListsItem
