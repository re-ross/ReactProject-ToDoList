import React from "react";
//import components
import Todo from "./Todo";
const TodoList = ({ todos, setTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} text={todo.text} id={todo.id} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
