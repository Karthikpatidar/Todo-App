import React from 'react'
import '../Styles/Todo.css'

export const Todo = (props) => {
 
  return (
    <div>
        <div className='todo-style'>
        <li> {props.text} </li>
        <button onClick={()=>props.onSelect(props.id)}>Delete</button>
        </div>
    </div>
  )
}
