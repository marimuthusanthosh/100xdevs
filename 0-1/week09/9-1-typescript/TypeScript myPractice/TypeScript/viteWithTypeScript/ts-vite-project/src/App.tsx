

function App() {

  return (
    <div>
      <Todo title="Code a typescript"
      description="code code code"
      completed={false}/>
     
    </div>
  )
}
interface TodoInterface{
  title:string,
  description:string,
  completed:boolean
}


function Todo(todo:TodoInterface){


  return(
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
      <p>{todo.completed}</p>
    </div>
  )
}

export default App
