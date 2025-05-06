import { useState } from "react";


function App() {

  const [todos,setTodos]=useState([{
    title:"Do React",
    description:"Implement basic Concepts in react", 
    completed:false
  },{
    title:"Study DSA",
    description:"Solve a problem in gfg", 
    completed:false

  },
  {
    title:"Study DSA",
    description:"Solve a problem in gfg", 
    completed:false

  },
  {
    title:"Study DSA",
    description:"Solve a problem in gfg", 
    completed:false

  }
])
  
 function addTodo(){

  setTodos([...todos,{
    title:"new Todo",
    description:"hvjhbnmhvtuc"
  }])

 }

  return (
    <div>
      {/* {JSON.stringify(todos)} */}
      {/* <Todo title= {todos[0].title} description={todos[0].description} completed={todos[0].completed}/>
      <Todo title= {todos[1].title} description={todos[1].description} completed={todos[1].completed}/> */}
      <button onClick={addTodo}>Add a random totdo</button>
      {todos.map((todo)=>{

        return <Todo title={todo.title} description={todo.description}/>
      })}
    </div>
    
  )
}


function Todo(props){

  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
      <h1>{props.completed}</h1>
    </div>
  )

}

export default App
