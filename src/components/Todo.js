import React from "react";
import { useReducer } from "hooks/useReducer";
import { todoReducer } from "reducers/todoReducer";

function Todo(props) {
  const [todos, dispatch] = useReducer(todoReducer, [
    { text: "oriText", completed: false },
  ]);
  function handleCLick() {
    dispatch({ type: "add", payload: "added after" });
  }
  return (
    <div>
      <ul>
        {todos && todos.map((t, index) => <li key={index}>{t["text"]}</li>)}
      </ul>
      <button onClick={handleCLick}>Add</button>
    </div>
  );
}

export default Todo;
