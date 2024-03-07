import React from 'react'
import Items from './Items'

const List_items = ({data}) => {
  return (
    <ul className='u_list'>
    
      {data.map(list=>(
        <Items key={list.id} list={list}/>
      ))}
       
    </ul>
  )
}

export default List_items