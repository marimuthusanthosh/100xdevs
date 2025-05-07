import { useEffect, useState } from "react";

function TODO() {
  return (
    <div>
      <Todo id="68186f9a79699f33cd9d9b33" />
    </div>
  );
}

function Todo({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/todos?id=" + id)
      .then(async (res) => {
        const json = await res.json();
        setTodo(json.your_todos); // directly use json if your backend returns a single object
        console.log(json)
      });
  }, [id]);

  return (
    <div>
      {todo ? (
        <>
          <h1>{todo.title}</h1>
          <h2>{todo.description}</h2>
          <p>ID: {todo._id}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default TODO;
