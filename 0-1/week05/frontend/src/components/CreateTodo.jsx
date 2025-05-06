import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div>
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        style={{ padding: 10, margin: 10 }}
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button
        style={{ padding: 10, margin: 10 }}
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({ title, description }),
            headers: {
              "Content-Type": "application/json",
              username: "harkirat",
              password: "whgrgs",
            },
          })
            .then((res) => res.json())
            .then(() => {
              alert("Todo added");
              // Optionally reload or update state
            })
            .catch((err) => {
              console.error("Failed to create todo:", err);
            });
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
