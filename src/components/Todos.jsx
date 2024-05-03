import React from "react";
import Todo from "./Todo";

const Todos = (props) => {
  const todos = props.todos;

  return (
    <section className=" flex flex-col justify-center items-center p-6 rounded space-y-5 bg-slate-800">
      {todos.map((todo) => {
        return (
          <Todo
            todo={todo.todo}
            key={todo.id}
            id={todo.id}
            onRemoveTodos={props.onRemoveTodos}
          />
        );
      })}
    </section>
  );
};

export default Todos;
