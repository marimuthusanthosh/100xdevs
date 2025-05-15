import { useEffect, useState } from "react"
import axios from "axios"

function useTodos(){
  
  const [todos,setTodos]=useState([])
  
  useEffect(()=>{
    const value= setInterval(()=>{
      axios.get("http://localhost:3000/todos")
      .then(res=>{
        setTodos(res.data.your_todos)
      })
      
    }, n*1000) 
    axios.get("http://localhost:3000/todos")
    .then(res=>{
      setTodos(res.data.your_todos)
    })

    return()=>{
      clearInterval(value)
    }
  },[n])
  return todos;
}

function App(){

  const todos=useTodos();



  return(
    <div>
      {todos.map(todo=> <Track todo={todo} key={todo._id}/>)}
    </div>
  )
}

function Track({todo}){

  return(
    <div>
      {todo.title}
      <br></br>
      {todo.description}
    </div>
  )
}



export default App