import React from 'react'
import '../Styles/Todolist.css'
import { useState } from 'react'
import { Todo } from './Todo'

const Todolist = () => {
  const [input, setinput] = useState()
  const [items, setitems] = useState([])

  const itemEvent = (event)=>{
       setinput(event.target.value)
  }

  const listOfItems = ()=>{
       setitems((oldItems) =>{
          return [ ...oldItems, input]
       })
       setinput("")
  } 


  const  DeleteItem =(id) => {
    console.log("Deleted")
    setitems((oldItems)=>{
      return oldItems.filter((arrElem,index)=>{
        return index !== id;
      })
    })
  }


  return (
    <div className='home'>
        <h1>Make a Not <span>To-Do</span> List</h1>
        <div className='card-div'>
           <h2> Add your Task</h2>
           <input type='text' placeholder='Add Task' value={input} onChange={itemEvent}/>
           <button onClick={listOfItems}>Add Task</button>
           <div className='list-task'>
            <ol>
              {
                items.map((value,index)=>{
                  return <Todo key={index} id={index}
                   text={value} onSelect={DeleteItem}/>
                 })
              }
              
            </ol> 
        </div>
        </div>
    </div>
  )
}

export default Todolist