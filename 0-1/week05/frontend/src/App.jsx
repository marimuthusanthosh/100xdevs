import { useEffect, useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
import { SignUp } from "./components/SignUp";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data.your_todos); 
      })
      .catch((err) => {
        console.error("Failed to fetch todos:", err);
      });
  }, []);

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
      <SignUp/>
    </div>
  );
}

export default App;
