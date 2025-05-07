import { useEffect, useState } from "react";
// import 

function App(){

  const [todos,setTodos]=useState([]);

 useEffect(()=>{
  
  fetch("http://localhost:3000/todos")
  .then(async (res)=>{
    const json=await res.json(); 
    setTodos(...todos,json.your_todos)
    console.log(json.your_todos);
  })
 },[])

  return (
    <div>
      {todos.map((todo)=>{
        return (
          <Todo 
          key={todo._id}
          todo={todo}></Todo>
        )
      })}
    
    </div>
  )

}

function Todo({todo}){
  return(
    <div>
      <div>{todo.title}</div>
      <div>{todo.description}</div>
    </div>
    
  )
}

export default App;


